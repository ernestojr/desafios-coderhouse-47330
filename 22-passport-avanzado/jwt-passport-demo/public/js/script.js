(function() {
  document.getElementById('login-form')
    .addEventListener('submit', (event) => {
      event.preventDefault();
      const data = {
        email: document.getElementById('email-input').value,
        password: document.getElementById('password-input').value,
      };
      fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        console.log('cookies', document.cookie);
        alert('Login successfully. Redirecting to profile page...')
        window.location.href = '/profile.html'
        //localStorage.setItem('token', data.access_token);
      })
      .catch((error) => {
        console.error('error', error);
      });
    });
})();