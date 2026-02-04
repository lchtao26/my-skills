#!/usr/bin/env node

/**
 * Extract project ID from YApi URL
 * Usage: node get_project_id.js <url>
 * Returns: JSON with project_id
 */

const url = process.argv[2];

if (!url) {
  console.error('Error: URL is required');
  console.error('Usage: node get_project_id.js <url>');
  process.exit(1);
}

// Extract project ID from URL pattern: https://yapi.nocode-tech.com/project/{project_id}/**
const match = url.match(/https:\/\/yapi\.nocode-tech\.com\/project\/(\d+)/);

if (match && match[1]) {
  console.log(JSON.stringify({
    project_id: match[1],
    url: url
  }));
  process.exit(0);
} else {
  console.error(JSON.stringify({
    error: 'Could not extract project ID from URL',
    url: url
  }));
  process.exit(1);
}
