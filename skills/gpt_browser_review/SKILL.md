---
name: gpt_browser_review
description: GPT-6.1-Sol xhigh 经 Orca 用真实浏览器 review，改到不用再改。
disable-model-invocation: true
---

# gpt_browser_review

用 Codex 的 GPT-6.1-Sol（`gpt-6.1-sol`，effort `xhigh`）review 当前任务。它打开真实浏览器，把这次改动影响到的流程按用户操作走完（点击、输入、提交、跳转），并核对相关页面。它只提改动，不改文件。你按 review 里仍成立的项改进，再 review。重复直到 review 认为无需再改，然后把最后一轮结论告诉用户。

写进交给 Codex 的任务：浏览器测试用 Orca 的 `/orca-cli`。由它自行选用 GPT-6 Luna Medium（`gpt-6-luna`，effort `medium`）作为 subagent。

任务编排调用 Orca 的 `/orchestration` skill。
