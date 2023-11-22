(function () {
  fetch('/current')
    .then((response) => response.json())
    .then((data) =>{
      const htmlText = `<p>Nombre: ${data.first_name}</p>
      <p>Apellido: ${data.last_name}</p>
      <p>Correo: ${data.email}</p>
      <p>Rol: ${data.role}</p>`;
      const span = document.getElementById('profile-span');
      span.innerHTML = htmlText;
    })
    .catch((error) => {
      console.error('error', error);
    });

  fetch('/admin')
    .then((response) => response.json())
    .then((data) =>{
      console.log('admin -> data', data);
    })
    .catch((error) => {
      console.error('error', error);
    });
})();