---
name: agy_review
description: Antigravity Neon High 经 Orca review，改到不用再改。
disable-model-invocation: true
---

# agy_review

用 Antigravity 的 Gemini 4 Neon (High)（`gemini-4-neon-high`）review 当前任务。它只提改动，不改文件。你按 review 里仍成立的项改进，再 review。重复直到 review 认为无需再改，然后把最后一轮结论告诉用户。

任务编排调用 Orca 的 `/orchestration` skill。
