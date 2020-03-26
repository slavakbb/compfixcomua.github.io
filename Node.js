
// Куки

response.cookie('same-site-cookie', 'foo', { sameSite: 'lax' });
response.cookie('cross-site-cookie', 'bar', { sameSite: 'none', secure: true });
