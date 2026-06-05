---
name: japanese-talk
description: Use when the user asks for japanese-talk, Japanese opinion dialogue practice, N3 talk sessions, 日本語トーク, T/A/B interview practice, or daily Japanese reading with 話題 and 場面. Use when generating or continuing saved talk sessions stored under ~/.japanese-talk/.
---

# japanese-talk

N3 single-round opinion dialogues: **T → A → B**. Dialogue only — no vocab appendix, no comprehension drill.

**Violating the letter of these rules violates their spirit.**

## Data store

All runtime data lives in **`~/.japanese-talk/`** — never in the skill package or workspace repo.

| Path | Purpose |
|------|---------|
| `~/.japanese-talk/sessions/` | Session files |
| `~/.japanese-talk/topics-index.md` | Append-only topic index |

**Bootstrap (step 1):** Create `~/.japanese-talk/sessions/` and `~/.japanese-talk/topics-index.md` (with header) if missing. Do this before reading the index.

**Never write** session files or index lines under `skills/japanese-talk/` — even if old files exist there.

## Workflow (every run — no skipping steps)

1. **Bootstrap + read** — ensure data store exists; read [CONTEXT.md](./CONTEXT.md), then `~/.japanese-talk/topics-index.md`.
2. **Pick topic** — date-aware 2026 everyday themes; optional user **seed**. **Dedup:** reject exact title matches; skip semantically similar themes already in the index.
3. **Pick 場面** — topic-driven bundled scene (place + tone).
4. **Write dialogue** — rules below. Count 字; revise if out of range.
5. **Save** `~/.japanese-talk/sessions/YYYY-MM-DD-{slug}.md` with frontmatter (see template).
6. **Append** one line to `~/.japanese-talk/topics-index.md` (relative path `sessions/{filename}.md`).
7. **Print chat** — metadata header, T/A/B lines, tilde-absolute saved path.

**Do not stop at step 7 without completing steps 5–6.** Chat output is not the archive.

## Dialogue rules

| Rule | Requirement |
|------|-------------|
| Level | N3 — natural daily opinion language |
| Structure | **Single round:** T → A → B only (no follow-ups, no T closing line) |
| Cast | Labels **T**, **A**, **B** only — no personal names |
| Length | T: **40–60字**; A and B: **80–120字** each |
| A vs B | **Natural mix** — agree or disagree as the topic warrants; show reasoning |
| Topics | Well-defined, common life, current-year framing; **no web search** |
| T's invite | **Scene-dependent:** formal 場面 → direct (Aさん/Bさん or お二人); casual → open (みんな、〜どう思う？) |
| Output | Japanese dialogue only in the script — no English gloss, no study notes |
| Format | One blank line between **T**, **A**, and **B** lines in session files and chat |

## Session file template

```markdown
---
date: YYYY-MM-DD
topic: {Japanese title}
scene: {場面}
level: N3
---

T: …

A: …

B: …
```

**Slug:** lowercase ASCII from topic (e.g. `konbini-prices`).

## Chat format

```
話題: {topic}
場面: {scene}

T: …

A: …

B: …

Saved: ~/.japanese-talk/sessions/YYYY-MM-DD-slug.md
```

## Common mistakes

| Mistake | Fix |
|---------|-----|
| Dialogue in chat but no file | Always write session file + index line under `~/.japanese-talk/` |
| Save under skill directory | Data store is `~/.japanese-talk/` only — see Data store section |
| Skip index on "first run" | Bootstrap data store, then read/create index every time |
| Approximate length | Count 字; shorten or expand to range |
| Add vocab/grammar appendix | Dialogue only — stop after B |
| Multi-round interview | One T question, two answers, done |
| Named characters | T / A / B labels only |
| Repeat or near-repeat topic | Read index; pick different angle |
| Web search for news | Date-aware themes only |
| Repo-relative Saved path | Use tilde-absolute `~/.japanese-talk/sessions/...` in chat |

## Rationalizations — do not accept

| Excuse | Reality |
|--------|---------|
| "User can read it in chat" | Index + files are required for dedup and history |
| "sessions/ already exists in the skill folder" | Old location — write only to `~/.japanese-talk/` |
| "CONTEXT.md says ~/.japanese-talk but SKILL.md used to say sessions/" | SKILL.md now mandates `~/.japanese-talk/` — follow current workflow |
| "Outside workspace is inconvenient" | User data persists outside the repo by design |
| "Close enough on length" | Limits are part of the exercise — count and revise |
| "A short appendix helps" | User chose dialogue-only — no appendix |
| "One more follow-up round" | Single round only |
| "No index file yet" | Bootstrap data store, create index, then append |

## Red flags — STOP

- Printing dialogue before saving the file
- Writing to `skills/japanese-talk/sessions/` or `skills/japanese-talk/topics-index.md`
- Skipping `~/.japanese-talk/topics-index.md`
- English explanations after B
- T speaks again after B
- A and B use the same argument verbatim
- `Saved:` line without `~/.japanese-talk/` prefix
