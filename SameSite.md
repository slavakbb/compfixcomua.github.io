response.cookie('compfix.com', 'foo', { sameSite: 'lax' });
response.cookie('compfix.com.ua', 'bar', { sameSite: 'none', secure: true });

response.setHeader('set-cookie', [
  'compfix.com=bar; SameSite=Lax',
  'compfix.com.ua=foo; SameSite=None; Secure',
]);
