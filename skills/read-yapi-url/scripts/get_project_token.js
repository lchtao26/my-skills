#!/usr/bin/env node

/**
 * Get project token from environment variable
 * Usage: node get_project_token.js <project_id>
 * Returns: JSON with token or error
 */

const projectId = process.argv[2];

if (!projectId) {
  console.error('Error: Project ID is required');
  console.error('Usage: node get_project_token.js <project_id>');
  process.exit(1);
}

// Look for environment variable: YAPI_PROJECT_TOKEN_{project_id}
const envVarName = `YAPI_PROJECT_TOKEN_${projectId}`;
const token = process.env[envVarName];

if (token) {
  console.log(JSON.stringify({
    project_id: projectId,
    token: token,
    env_var: envVarName
  }));
  process.exit(0);
} else {
  console.error(JSON.stringify({
    error: 'Token not found',
    project_id: projectId,
    env_var: envVarName,
    message: `Environment variable ${envVarName} is not set.\n` +
             `Please set it in your shell configuration (e.g., .zshrc):\n` +
             `  export ${envVarName}="your_token_here"\n` +
             `\nTo get your token:\n` +
             `  1. Visit https://yapi.nocode-tech.com/project/${projectId}/setting\n` +
             `  2. Select the "token 配置" tab\n` +
             `  3. Copy the token\n` +
             `  4. Add the export command to your shell configuration\n` +
             `  5. Reload your shell or run: source ~/.zshrc`
  }));
  process.exit(1);
}
