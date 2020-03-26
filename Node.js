
// Куки

response.cookie('compfix.com.ua', 'foo', { sameSite: 'lax' });
response.cookie('compfix.com.ua', 'bar', { sameSite: 'none', secure: true });
