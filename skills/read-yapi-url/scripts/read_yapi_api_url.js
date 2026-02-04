#!/usr/bin/env node

/**
 * Fetch single API documentation from YApi
 * Usage: node read_yapi_api_url.js <url> <token>
 * Returns: Raw JSON response from YApi API
 */

const https = require('https');

const url = process.argv[2];
const token = process.argv[3];

if (!url || !token) {
  console.error('Error: URL and token are required');
  console.error('Usage: node read_yapi_api_url.js <url> <token>');
  process.exit(1);
}

// Extract API ID from URL
const match = url.match(/\/interface\/api\/(\d+)$/);
if (!match || !match[1]) {
  console.error(JSON.stringify({
    error: 'Invalid API URL format',
    url: url
  }));
  process.exit(1);
}

const apiId = match[1];

// YApi OpenAPI endpoint: /api/interface/get
const apiUrl = `https://yapi.nocode-tech.com/api/interface/get?token=${token}&id=${apiId}`;

https.get(apiUrl, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      const response = JSON.parse(data);

      // Check if the response indicates an error
      if (response.errcode !== 0) {
        console.error(JSON.stringify({
          error: 'YApi API error',
          errcode: response.errcode,
          errmsg: response.errmsg,
          api_id: apiId,
          message: response.errmsg === 'token is not valid'
            ? 'Invalid token. Please verify your token is correct.'
            : response.errmsg
        }));
        process.exit(1);
      }

      console.log(JSON.stringify(response, null, 2));
      process.exit(0);
    } catch (e) {
      console.error(JSON.stringify({
        error: 'Failed to parse response',
        message: e.message,
        raw_data: data
      }));
      process.exit(1);
    }
  });
}).on('error', (err) => {
  console.error(JSON.stringify({
    error: 'Network error',
    message: err.message
  }));
  process.exit(1);
});
