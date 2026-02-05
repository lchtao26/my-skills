#!/usr/bin/env node

/**
 * Extract project ID from YApi URL
 * Usage: node get_project_id.js <url> [baseURL]
 * Returns: JSON with project_id
 */

const url = process.argv[2];
const baseURL = process.argv[3] || 'yapi.example.com';

if (!url) {
  console.error('Error: URL is required');
  console.error('Usage: node get_project_id.js <url> [baseURL]');
  process.exit(1);
}

// Escape special regex characters in baseURL
const escapedBaseURL = baseURL.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Extract project ID from URL pattern: https://{baseURL}/project/{project_id}/**
const pattern = new RegExp(`https:\/\/${escapedBaseURL}\/project\/(\\d+)`);
const match = url.match(pattern);

if (match && match[1]) {
  console.log(JSON.stringify({
    project_id: match[1],
    url: url,
    baseURL: baseURL
  }));
  process.exit(0);
} else {
  console.error(JSON.stringify({
    error: 'Could not extract project ID from URL',
    url: url,
    baseURL: baseURL
  }));
  process.exit(1);
}
