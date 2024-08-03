export async function api(endpoint, method = 'GET', data) {
    const options = { method, headers: {} };
  
    if (data) {
      options.headers['Content-Type'] = 'application/json';
      options.body = JSON.stringify(data);
    }
  
    const response = await fetch(`http://localhost:3000${endpoint}`, options);
  
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }
  
    return await response.json();
  }
  