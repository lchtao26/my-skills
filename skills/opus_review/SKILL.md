---
name: opus_review
description: Cursor Opus 5.5 High 经 Orca review，改到不用再改。
disable-model-invocation: true
---

# opus_review

用 Cursor 的 Opus 5.5 High（`claude-opus-5-5-high`）review 当前任务。它只提改动，不改文件。你按 review 里仍成立的项改进，再 review。重复直到 review 认为无需再改，然后把最后一轮结论告诉用户。

任务编排调用 Orca 的 `/orchestration` skill。
