exports.handler = async (event, context) => {
  const headers = event.headers || {};

  // ALB Health check
  if (headers['user-agent'] === 'ELB-HealthChecker/2.0') {
    return {
      statusCode: 200,
      statusDescription: '200 OK',
      isBase64Encoded: false,
      headers: {
        'Content-Type': 'text/html'
      }
    };
  }

  return {
    statusCode: 401,
    statusDescription: '401 Unauthorized',
    body: 'Unauthorized',
    isBase64Encoded: false,
    headers: {
      'WWW-Authenticate': 'Basic',
      'Content-Type': 'text/html'
    }
  };
};
