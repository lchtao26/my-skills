---
name: agy_research
description: Antigravity Neon High 经 Orca 做调研。
disable-model-invocation: true
---

# agy_research

用 Antigravity 的 Gemini 4 Neon (High)（`gemini-4-neon-high`）调研当前问题。它只给出结论和依据，不改文件。

写进交给 Antigravity 的任务：由它自行选用 Gemini 4 Hydrogen (Medium)（`gemini-4-hydrogen-medium`）作为 subagent。

任务编排调用 Orca 的 `/orchestration` skill。
