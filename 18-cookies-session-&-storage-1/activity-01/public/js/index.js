(function () {
  document
    .getElementById('get-cookie-button')
    .addEventListener('click', () => {
      fetch('/get-cookie')
        .then((response) => response.json())
        .then((cookies) => console.log('cookies', cookies))
        .catch((error) => console.error('Ha ocurrido un error durante el fetch 😨.', error.message))
    });
})();