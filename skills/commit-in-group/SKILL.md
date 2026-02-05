---
name: commit-in-group
description: Stage and commit related files in groups, generating separate commit messages for each group following Angular Conventional Commit format. Use when user wants to commit changes in batches, group related files together, or do incremental commits by feature/area. Ideal for organizing messy changes into logical commits.
---

# commit-in-group

## Overview

This skill organizes unstaged changes into logical groups and commits them separately, each with an appropriate commit message following Angular Conventional Commit format.

## Workflow

1. **Check git status** - Identify all unstaged changes
2. **Analyze changes** - Group related files by:
   - Common directory/path
   - File type/purpose
   - Functional area (e.g., auth, ui, api)
3. **Stage first group** - `git add <files_in_group>`
4. **Generate commit message** - Analyze staged changes and write message in Chinese with English technical terms
5. **Commit** - `git commit -m "<message>"`
6. **Repeat** - Continue with next group until all changes are committed

## Grouping Strategy

Group files by these heuristics (in priority order):

1. **Same directory** - Files in the same folder are likely related
2. **Same feature area** - e.g., auth-related files across directories
3. **Same file type** - e.g., all test files, all config files
4. **Functional dependency** - Files that work together (component + test + style)

## Commit Message Format

Follow Angular Conventional Commit specification:

```
<type>(<scope>): <subject>

<body>
```

### Types

- `feat`: 新功能 (new feature)
- `fix`: 修复 bug (bug fix)
- `docs`: 文档变更 (documentation changes)
- `style`: 代码格式变更 (formatting, semicolons, etc.)
- `refactor`: 重构代码 (code refactoring)
- `perf`: 性能优化 (performance improvements)
- `test`: 添加或修改测试 (adding/updating tests)
- `chore`: 构建过程或辅助工具变动 (maintenance tasks)
- `ci`: CI 配置变更 (CI configuration changes)
- `build`: 构建系统或外部依赖变更 (build system changes)
- `revert`: 回退之前的 commit (revert previous commit)

### Language Guidelines

- Write in **Chinese** for descriptions
- Keep **technical terms** in English (API, JWT, middleware, component, hook, etc.)
- Keep **code references** in English (function names, class names, file paths)
- Subject max 50 characters

## Examples

**Example 1: Group by feature area**
```
Group 1: src/auth/login.ts, src/auth/token.ts
→ feat(auth): 添加 JWT token 认证功能

Group 2: src/ui/Button.tsx, src/ui/Input.tsx
→ feat(ui): 新增登录页面基础组件

Group 3: tests/auth.test.ts
→ test(auth): 添加认证模块单元测试
```

**Example 2: Group by file type/purpose**
```
Group 1: src/api/user.ts, src/api/order.ts
→ feat(api): 实现用户和订单接口

Group 2: package.json, tsconfig.json
→ chore(config): 更新项目依赖和配置

Group 3: README.md, docs/API.md
→ docs: 补充 API 使用文档
```

**Example 3: Group by directory**
```
Group 1: frontend/src/components/*.tsx
→ feat(frontend): 新增用户管理页面组件

Group 2: backend/src/routes/*.ts
→ feat(backend): 添加用户管理 API 路由

Group 3: shared/types/*.ts
→ feat(types): 定义用户相关数据类型
```

## Execution Steps

For each group of related files:

1. Run `git add <files>` to stage the group
2. Run `git diff --cached` to see staged changes
3. Analyze changes to determine type, scope, and subject
4. Write commit message in Chinese with English technical terms
5. Run `git commit -m "<message>"`
6. Move to next group

## Important Notes

- Always stage files before generating commit message (need to see actual diff)
- If a group is too large (>10 files), consider splitting further
- If unsure about grouping, ask user for confirmation
- Each commit should represent a single logical change
