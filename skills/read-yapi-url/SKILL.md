---
name: read-yapi-url
description: Fetch API documentation from YApi platform by URL. Use when the user asks to read, fetch, or get YApi API documentation, or provides YApi URLs like "https://yapi.nocode-tech.com/project/{id}/interface/api/{api_id}" or "https://yapi.nocode-tech.com/project/{id}/interface/api/cat_{cat_id}". Supports both single API URLs and category URLs. Returns raw API documentation data.
---

# Read YApi URL

Fetch API documentation from YApi (https://yapi.nocode-tech.com) by providing single API URLs or category URLs.

## Workflow

When the user invokes this skill with YApi URLs, follow these steps:

### 1. Parse and Validate URLs

For each URL provided:

1. Run `scripts/verify_yapi_url.js <url>` to validate the URL format
2. If validation fails, show the error message to the user and stop
3. Valid URL patterns:
   - Single API: `https://yapi.nocode-tech.com/project/{project_id}/interface/api/{api_id}`
   - Category: `https://yapi.nocode-tech.com/project/{project_id}/interface/api/cat_{category_id}`

### 2. Extract Project IDs

For each valid URL:

1. Run `scripts/get_project_id.js <url>` to extract the project ID
2. Collect all unique project IDs from the URLs

### 3. Retrieve Project Tokens

For each unique project ID:

1. Run `scripts/get_project_token.js <project_id>` to get the token from environment
2. If token is not found:
   - Show the error message with instructions to the user
   - Guide user to visit `https://yapi.nocode-tech.com/project/{project_id}/setting`
   - Instruct to select "token 配置" tab and copy the token
   - Suggest adding to shell config: `export YAPI_PROJECT_TOKEN_{project_id}="token_here"`
   - Ask user to provide the token or set the environment variable
   - Wait for user response before proceeding

### 4. Perform Smoke Test

For each project token retrieved:

1. Pick one URL from that project
2. Run the appropriate fetch script with the token:
   - For API URL: `scripts/read_yapi_api_url.js <url> <token>`
   - For category URL: `scripts/read_yapi_cate_url.js <url> <token>`
3. If the token is invalid:
   - Show the error message to the user
   - Ask user to verify and provide the correct token
   - Wait for user response before proceeding

### 5. Fetch All API Documentation

For each URL:

1. Determine URL type (API or category)
2. Run the appropriate script:
   - For API URL: `scripts/read_yapi_api_url.js <url> <token>`
   - For category URL: `scripts/read_yapi_cate_url.js <url> <token>`
3. Collect all raw responses

### 6. Present Results

1. Display all raw JSON responses to the user
2. Do NOT create any files
3. Present data directly in the conversation

## Usage Examples

Example 1 - Single API URL:
```
/read-yapi-url for https://yapi.nocode-tech.com/project/853/interface/api/33460
```

Example 2 - Multiple API URLs:
```
/read-yapi-url for https://yapi.nocode-tech.com/project/853/interface/api/33460, https://yapi.nocode-tech.com/project/853/interface/api/33462
```

Example 3 - Category URL:
```
/read-yapi-url for https://yapi.nocode-tech.com/project/853/interface/api/cat_5050
```

Example 4 - Mixed URLs:
```
/read-yapi-url for https://yapi.nocode-tech.com/project/226/interface/api/15604, https://yapi.nocode-tech.com/project/853/interface/api/cat_5050
```

## Scripts Reference

All scripts accept command-line arguments and output JSON to stdout (success) or stderr (errors).

### verify_yapi_url.js
Validates YApi URL format.
- Input: URL string
- Output: JSON with `valid`, `type`, and `url` fields
- Exit code: 0 (valid), 1 (invalid)

### get_project_id.js
Extracts project ID from YApi URL.
- Input: URL string
- Output: JSON with `project_id` and `url` fields
- Exit code: 0 (success), 1 (error)

### get_project_token.js
Retrieves project token from environment variable `YAPI_PROJECT_TOKEN_{project_id}`.
- Input: Project ID
- Output: JSON with `project_id`, `token`, and `env_var` fields
- Exit code: 0 (found), 1 (not found with instructions)

### read_yapi_api_url.js
Fetches single API documentation from YApi OpenAPI.
- Input: URL and token
- Output: Raw YApi API response JSON
- API endpoint: `/api/interface/get?token={token}&id={api_id}`
- Exit code: 0 (success), 1 (error)

### read_yapi_cate_url.js
Fetches category API list from YApi OpenAPI.
- Input: URL and token
- Output: Raw YApi API response JSON
- API endpoint: `/api/interface/list_cat?token={token}&catid={cat_id}`
- Exit code: 0 (success), 1 (error)

## Error Handling

- **Invalid URL format**: Show correct patterns and stop
- **Missing token**: Guide user to get token and wait for input
- **Invalid token**: Request correct token and wait for input
- **Network errors**: Display error message to user
- **API errors**: Display YApi error response to user

## Notes

- All scripts use Node.js built-in modules (no external dependencies)
- Scripts output JSON for easy parsing
- Token validation is performed via smoke test before bulk fetching
- Multiple URLs from the same project share the same token
