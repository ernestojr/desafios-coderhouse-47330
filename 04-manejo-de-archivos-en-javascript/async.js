(function (run) {
  if (!run) return;

  console.log('🤓 setTimeout');

  const recuerdame = (recordatorio, segundos) => new Promise(resolve => {
    const milisegundos = segundos * 1000
    console.log(`⏲ Estableciendo recordatorio para los próximos ${segundos} segundos.`);
    setTimeout(() => {
      console.log(`⏲ Recordatorio: ${recordatorio}.`);
      resolve()
    }, milisegundos)
    console.log(`⏲ Recordatorio establecido con éxito.`);
  })
  const recordatorio = 'Debo repasar la clase anterior 💻.';
  recuerdame(recordatorio, 5);

})(false);

(function (run) {
  if (!run) return;

  console.log('🤓 setInterval');

  const cuentaRegresiva = (inicio) => {
    return new Promise((resolve) => {
      let contador = inicio;
      let idIntervalo;
      console.log('Iniciamos la cuenta regresiva para el lanzamiento...⏳');
      idIntervalo = setInterval(() => {
        console.log(`⌚ ${contador}`);
        if (contador <= 0) {
          clearInterval(idIntervalo);
          resolve();
        }
        contador--;
      }, 1000);
    });
  };
 
  cuentaRegresiva(5)
    .then(() => console.log('Lanzamiento... 🚀'));

})(true);