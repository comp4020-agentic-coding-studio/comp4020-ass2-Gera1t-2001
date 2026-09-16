#!/usr/bin/env node
// Checks that every commit cited in process-log.md actually exists.
//
// `CLAUDE.md` already requires logging after a commit, citing its real hash,
// precisely because a hash cannot be known before the commit exists. On day 1
// a guessed hash was written into the log anyway and was caught by eye rather
// than by anything mechanical. A rule nothing enforces is a hope, so this is
// the sensor for that rule.
//
// check-evidence.ts does the same job for PROCESS.md. The two are separate
// because they run at different times: PROCESS.md is the submission and is
// checked at the gate, while process-log.md is written all week and is worth
// catching wrong on the day it is written.
//
// A citation need not be a hash. CLAUDE.md allows a CLAUDE.md diff or the
// name of a check that went red to green, so a citation with no hex in it
// passes; what fails is a hash that does not resolve, an empty citation, or a
// bare `(no commit)` with no reason after it.
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";

const LOG = "process-log.md";

// Entries are separated by horizontal rules; the file's header is the block
// before the first one. A block is an entry if it carries a Tag.
const ENTRY_TAG = /^-\s*\*\*Tag:\*\*/m;
const CITATION_START = /^-\s*\*\*Citation:\*\*/;
const FIELD_START = /^-\s*\*\*/;
const HEX = /\b[0-9a-f]{7,40}\b/g;

let failed = false;
const fail = (message: string): void => {
  console.error(`✗ ${message}`);
  failed = true;
};

export function citationBlock(entry: string): string | undefined {
  const lines = entry.split("\n");
  const start = lines.findIndex((line) => CITATION_START.test(line));
  if (start === -1) return undefined;

  const rest: string[] = [lines[start].replace(CITATION_START, "")];
  for (const line of lines.slice(start + 1)) {
    if (FIELD_START.test(line)) break;
    rest.push(line);
  }
  return rest.join("\n").trim();
}

function commitExists(sha: string): boolean {
  try {
    execFileSync("git", ["cat-file", "-e", `${sha}^{commit}`], { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

function main(): void {
  if (!existsSync(LOG)) {
    fail(`no ${LOG} in the repo root — CLAUDE.md's logging rule expects one entry per commit`);
    process.exit(1);
  }

  const entries = readFileSync(LOG, "utf8")
    .split(/^---$/m)
    .filter((block) => ENTRY_TAG.test(block));

  if (entries.length === 0) {
    fail(`${LOG} has no entries`);
    process.exit(1);
  }

  let checked = 0;
  entries.forEach((entry, index) => {
    // Name the entry by its tag line, so a failure points at something the
    // author can find without counting horizontal rules.
    const label = entry.match(/^-\s*\*\*Tag:\*\*\s*(.+)$/m)?.[1]?.trim() ?? "untagged";
    const where = `entry ${index + 1} (${label})`;

    const citation = citationBlock(entry);
    if (citation === undefined) {
      fail(`${where} has no Citation line`);
      return;
    }
    if (citation.length === 0) {
      fail(`${where} has an empty Citation`);
      return;
    }
    if (/^\(no commit\)$/i.test(citation)) {
      fail(`${where} cites "(no commit)" with no reason after it`);
      return;
    }

    for (const sha of new Set(citation.match(HEX) ?? [])) {
      checked += 1;
      if (!commitExists(sha)) {
        fail(`${where} cites ${sha}, which is not a commit in this repo`);
      }
    }
  });

  if (!failed) {
    console.log(
      `✓ ${LOG}: ${entries.length} entries, ${checked} cited commits all resolve`,
    );
  }
  process.exit(failed ? 1 : 0);
}

if (import.meta.filename === process.argv[1]) main();
