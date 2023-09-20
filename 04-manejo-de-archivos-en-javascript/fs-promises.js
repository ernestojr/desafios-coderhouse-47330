(async function (run) {
  if (!run) return;

  console.log('⭐ [Sync] Lectura de archivos.');

  const fs = require('fs');
  console.log('🚀 Intentando leer el contenido de un archivo...');
  const data = await fs.promises.readFile('./text-input-file.txt', 'utf-8');
  console.log('😎 Finalizó la lectura.');
  console.log('Acá el contenido:\n', data);

})(false);

(async function (run) {
  if (!run) return

  console.log('⭐ [Sync] Escritura de archivos.')

  const fs = require('fs')
  const contenido = 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.\n'
  console.log('🚀 Iniciando la escritura...')
  await fs.promises.writeFile('./text-output-file.txt', contenido, 'utf-8')
  console.log('😎 Finalizó la escritura.')
  
})(false);

(async function (run) {
  if (!run) return

  console.log('⭐ [Sync] Actualización de archivos.')

  const fs = require('fs')
  const contenido = 'Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio.\n'
  console.log('🚀 Iniciando el agregado de contenido...')
  await fs.promises.appendFile('./text-output-file.txt', contenido, 'utf-8')
  console.log('😎 Finalizó la escritura.')
  
})(false);

(async function (run) {
  if (!run) return

  console.log('⭐ [Sync] Borrado de archivos.')

  const fs = require('fs')
  console.log('🚀 Intentando borrar el archivo...')
  await fs.promises.unlink('./text-output-file.txt')
  console.log('😎 Finalizó el borrado del archivo.')
  
})(false);

(async function (run) {
  if (!run) return

  console.log('⭐ [Sync] Manejo de errores al manipular archivos.')

  try {
    const fs = require('fs')
    console.log('🚀 Intentando leer el contenido de un archivo...')
    const data = await fs.promises.readFile('./text-output-file.txt', 'utf-8')
    console.log('😎 Finalizó la lectura.')
    console.log('Acá el contenido:\n', data)
  } catch (error) {
    console.log('😱 Ha ocurrido un error:', error.message)
  }

})(false);