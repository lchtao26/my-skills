# pstack model configuration. One line per role. Delete a line to fall back to the skill default.
# `inherit-parent` or `auto` as a value: the role runs on the parent chat model (omit the subagent `model` and spawn a general-purpose subagent). Alias entries in a panel list still count toward its fan-out.
# defaults: 3
# budget: large (xhigh)
# All GPT entries use xhigh reasoning, set via the agent effort parameter.
# Use GPT and Gemini models only; do not use Opus, Astra, or Gemini Carbon.
feature, refactoring: gpt-6.1-sol
bug-fix: gpt-6.1-sol
perf-issue: gpt-6.1-sol
hillclimb: gpt-6.1-sol
judgment and prose: gpt-6.2-sol
arena runners: gpt-6.1-sol, gemini-4-neon-xhigh
arena cross-judge pool: gemini-4-neon-xhigh, gpt-6.1-sol
swarm workers: gpt-6.1-sol
interrogate reviewers: gemini-4-neon-xhigh

# If a selected model cannot be dispatched as a native subagent, use the Orca orchestration skill to dispatch it through an agent that supports that model.
