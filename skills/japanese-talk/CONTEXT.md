# japanese-talk

N3 Japanese reading practice through single-round, three-speaker opinion dialogues (T / A / B).

## Language

**Session**:
One complete dialogue run: one topic, one 場面, T asks once, A and B answer once. Saved as a file under `sessions/`.
_Avoid_: lesson, episode, drill

**場面 (Scene)**:
The bundled setting for a session — place and tone together (e.g. 職場の昼休み, 友達のカフェ). Drives register and how T invites A and B.
_Avoid_: mode, context flag, public/private toggle

**Topic**:
The well-defined discussion subject in Japanese. Must be everyday, date-aware (current year themes), and unique in the index (exact + semantic dedup).
_Avoid_: prompt, theme keyword (when meaning the saved title)

**Topic index**:
Append-only log (`topics-index.md`) of every completed topic title. Checked before every new session.
_Avoid_: history, registry, database

**T / A / B**:
Role labels only — interviewer and two opinion speakers. Not recurring named characters.
_Avoid_: host, guest, speaker 1/2

**Seed**:
Optional user hint (keyword or phrase) steering topic choice. Skill still picks 場面, enforces dedup, and applies all limits.
_Avoid_: prompt override, custom topic (when meaning bypassing rules)
