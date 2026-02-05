#!/usr/bin/env node

/**
 * Verify YApi URL format
 * Usage: node verify_yapi_url.js <url> [baseURL]
 * Returns: 0 if valid, 1 if invalid with error message
 */

const url = process.argv[2];
const baseURL = process.argv[3] || 'yapi.example.com';

if (!url) {
  console.error('Error: URL is required');
  console.error('Usage: node verify_yapi_url.js <url> [baseURL]');
  process.exit(1);
}

// Escape special regex characters in baseURL
const escapedBaseURL = baseURL.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Build dynamic patterns based on baseURL
const apiUrlPattern = new RegExp(`^https:\/\/${escapedBaseURL}\/project\/\\d+\/interface\/api\/\\d+$`);
const cateUrlPattern = new RegExp(`^https:\/\/${escapedBaseURL}\/project\/\\d+\/interface\/api\/cat_\\d+$`);

if (apiUrlPattern.test(url)) {
  console.log(JSON.stringify({
    valid: true,
    type: 'api',
    url: url,
    baseURL: baseURL
  }));
  process.exit(0);
} else if (cateUrlPattern.test(url)) {
  console.log(JSON.stringify({
    valid: true,
    type: 'category',
    url: url,
    baseURL: baseURL
  }));
  process.exit(0);
} else {
  console.error(JSON.stringify({
    valid: false,
    error: 'Invalid YApi URL format',
    message: 'Valid URL patterns:\n' +
             `  - API URL: https://${baseURL}/project/{project_id}/interface/api/{api_id}\n` +
             `  - Category URL: https://${baseURL}/project/{project_id}/interface/api/cat_{category_id}\n` +
             '\nProvided URL: ' + url
  }));
  process.exit(1);
}
