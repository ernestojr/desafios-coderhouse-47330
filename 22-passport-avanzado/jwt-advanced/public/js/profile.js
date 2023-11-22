(function () {
  fetch('/current')
    .then((response) => response.json())
    .then((data) =>{
      const htmlText = `<p>Nombre: ${data.first_name}</p>
      <p>Apellido: ${data.last_name}</p>
      <p>Correo: ${data.email}</p>`;
      const span = document.getElementById('profile-span');
      span.innerHTML = htmlText;
    })
    .catch((error) => {
      console.error('error', error);
    });
})();