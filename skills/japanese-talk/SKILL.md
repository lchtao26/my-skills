---
name: japanese-talk
description: Use when the user asks for japanese-talk, Japanese opinion dialogue practice, N3 talk sessions, 日本語トーク, T/A/B interview practice, or daily Japanese reading with 話題 and 場面. Use when generating or continuing saved talk sessions in the skill directory.
---

# japanese-talk

N3 single-round opinion dialogues: **T → A → B**. Dialogue only — no vocab appendix, no comprehension drill.

**Violating the letter of these rules violates their spirit.**

## Workflow (every run — no skipping steps)

1. **Read** [CONTEXT.md](./CONTEXT.md) for domain terms, then `topics-index.md` (create if missing).
2. **Pick topic** — date-aware 2026 everyday themes; optional user **seed**. **Dedup:** reject exact title matches; skip semantically similar themes already in the index.
3. **Pick 場面** — topic-driven bundled scene (place + tone).
4. **Write dialogue** — rules below. Count 字; revise if out of range.
5. **Save** `sessions/YYYY-MM-DD-{slug}.md` with frontmatter (see template).
6. **Append** one line to `topics-index.md`.
7. **Print chat** — metadata header, T/A/B lines, saved path.

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

Saved: sessions/YYYY-MM-DD-slug.md
```

## Common mistakes

| Mistake | Fix |
|---------|-----|
| Dialogue in chat but no file | Always write session file + index line |
| Skip index on "first run" | Read/create index every time |
| Approximate length | Count 字; shorten or expand to range |
| Add vocab/grammar appendix | Dialogue only — stop after B |
| Multi-round interview | One T question, two answers, done |
| Named characters | T / A / B labels only |
| Repeat or near-repeat topic | Read index; pick different angle |
| Web search for news | Date-aware themes only |

## Rationalizations — do not accept

| Excuse | Reality |
|--------|---------|
| "User can read it in chat" | Index + files are required for dedup and history |
| "Close enough on length" | Limits are part of the exercise — count and revise |
| "A short appendix helps" | User chose dialogue-only — no appendix |
| "One more follow-up round" | Single round only |
| "No index file yet" | Create it, then append |

## Red flags — STOP

- Printing dialogue before saving the file
- Skipping `topics-index.md`
- English explanations after B
- T speaks again after B
- A and B use the same argument verbatim
