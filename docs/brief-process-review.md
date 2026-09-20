# Brief — find one hash, then review PROCESS.md (read-only)

The author has placed his draft `PROCESS.md` in the repo root. It is
uncommitted. **It is the author's file: do not edit, stage or commit it.**
Everything below is read and report.

## 1. Find the missing hash

Moment 1 has one placeholder, `<HASH>`, for the commit that added
`docs/mechanics-reference.md` (the reference rebuilt from the Liquipedia
PDFs the author supplied on 16 September).

- Run `git log --oneline --diff-filter=A -- docs/mechanics-reference.md` and
  `git log --oneline -- docs/mechanics-reference.md`.
- Verify the candidate with `git cat-file -e <sha>^{commit}` and
  `git show --stat <sha>`.
- Report the short hash, its message, and whether that commit is the right
  one to cite for "the reference was rebuilt from those PDFs". If a later
  commit fits better (e.g. the "Attributes — corrected" section), say which
  and why.

## 2. Verify every citation

For each hash cited in `PROCESS.md`, run `git cat-file -e <sha>^{commit}`
and `git show --stat <sha>`, then report in a table: hash, resolves (yes/no),
what the commit actually contains, and whether that matches the sentence
citing it. Be strict: a real hash cited for the wrong work is the exact
failure moment 2 describes.

## 3. Fact-check the claims

Check each factual claim against `process-log.md`, the commits and the files.
Flag anything the record does not support, contradicts, or overstates —
quote the sentence and the evidence. Do not flag the author's opinions or
reflections; only claims of fact (who did what, when, what happened).

## 4. Review as a marker would

The assessment weights legibility of process at 45%, and the page asks for
400–600 words, cited commits, and a before/after of the breakthrough.

- Word count excluding headings and link URLs.
- Is the before/after clear? Is it the right moment for it?
- Up to five concrete suggestions, most important first. For each: the
  sentence, the problem, and a suggested rewrite. Keep rewrites short and in
  the author's plain voice. Do not suggest adding words unless you name what
  to cut to pay for them.

## 5. Run the gate

Run `pnpm check:evidence` against the file as it stands and paste the
output. It is expected to fail on the `<HASH>` placeholder; report anything
else it fails on.

## Do not

- edit, stage or commit `PROCESS.md`
- commit anything in this pass — it is read-only
- write a process-log entry for this pass (there is no commit to cite)
