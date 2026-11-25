---
name: gpt_review
description: GPT-6.2-Sol xhigh 经 Orca review，改到不用再改。
disable-model-invocation: true
---

# gpt_review

用 Codex 的 GPT-6.2-Sol（`gpt-6.2-sol`，effort `xhigh`）review 当前任务。它只提改动，不改文件。你按 review 里仍成立的项改进，再 review。重复直到 review 认为无需再改，然后把最后一轮结论告诉用户。

写进交给 Codex 的任务：由它自行选用 GPT-6 Luna Medium（`gpt-6-luna`，effort `medium`）作为 subagent。

任务编排调用 Orca 的 `/orchestration` skill。
