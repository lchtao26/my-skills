#!/usr/bin/env node

/**
 * Verify YApi URL format
 * Usage: node verify_yapi_url.js <url>
 * Returns: 0 if valid, 1 if invalid with error message
 */

const url = process.argv[2];

if (!url) {
  console.error('Error: URL is required');
  console.error('Usage: node verify_yapi_url.js <url>');
  process.exit(1);
}

// Valid patterns:
// - API URL: https://yapi.nocode-tech.com/project/{project_id}/interface/api/{api_id}
// - Category URL: https://yapi.nocode-tech.com/project/{project_id}/interface/api/cat_{category_id}

const apiUrlPattern = /^https:\/\/yapi\.nocode-tech\.com\/project\/\d+\/interface\/api\/\d+$/;
const cateUrlPattern = /^https:\/\/yapi\.nocode-tech\.com\/project\/\d+\/interface\/api\/cat_\d+$/;

if (apiUrlPattern.test(url)) {
  console.log(JSON.stringify({
    valid: true,
    type: 'api',
    url: url
  }));
  process.exit(0);
} else if (cateUrlPattern.test(url)) {
  console.log(JSON.stringify({
    valid: true,
    type: 'category',
    url: url
  }));
  process.exit(0);
} else {
  console.error(JSON.stringify({
    valid: false,
    error: 'Invalid YApi URL format',
    message: 'Valid URL patterns:\n' +
             '  - API URL: https://yapi.nocode-tech.com/project/{project_id}/interface/api/{api_id}\n' +
             '  - Category URL: https://yapi.nocode-tech.com/project/{project_id}/interface/api/cat_{category_id}\n' +
             '\nProvided URL: ' + url
  }));
  process.exit(1);
}
