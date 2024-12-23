export async function fetchData(url, method = 'GET', body = null, json = true) {
    try {
      const headers = {
        ...(json && { 'Content-Type': 'application/json' }),
      };
  
      const response = await fetch(url, {
        method,
        headers,
        ...(body && { body: json ? JSON.stringify(body) : body })
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        return errorData || 'An error occurred';
      }
  
      return await response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  }