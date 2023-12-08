(function() {
  fetch('http://localhost:8080/origin-demo')
    .then(response => response.json())
    .then(data => console.log('data', data))
    .catch(console.error);
})();