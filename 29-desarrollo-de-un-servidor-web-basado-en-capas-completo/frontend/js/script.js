(function() {
  const requestOptions = {
    method: 'GET',
    credentials: 'include',
  };
  
  fetch("http://localhost:8080/api/orders/", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log('result', result);
      const list = document
        .getElementById('order-list');
      list.innerText = '';
      result.map((order) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <p>Negocio: ${order.business.name}</p>
          <p>Usuario: ${order.user.name}</p>
          <p>Productos: ${order.products.map(p => p.name).join(',')}</p>
        `;
        list.appendChild(li);
      });
    })
    .catch(error => console.log('error', error));

})();