(function() {
  const fs = require('fs');

  const filePath = './date.txt';

  const today = new Date();

  const content = `${today.toLocaleDateString()} ${today.toLocaleTimeString()}`;

  fs.writeFile(filePath, content, (error) => {
    if (error) {
      console.log('😱 Ocurrio un error durante la escritura:', error.message);
      return;
    }
    console.log('😎 Finalizó la escritura.');
    fs.readFile(filePath, 'utf-8', (error, contentFile) => {
      if (error) {
        console.log('😱 Ocurrio un error durante la lectura:', error.message);
      } else {
        console.log('😎 Acá el contenido:\n', contentFile);
      }
    });
  });

})();