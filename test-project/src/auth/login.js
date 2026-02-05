// JWT login implementation
function login(username, password) {
  return fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password })
  });
}
module.exports = { login };
