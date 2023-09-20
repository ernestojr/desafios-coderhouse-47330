
(function (run) {
  if (!run) return

  console.log('⭐ [Async] Lectura de archivos.')

  const fs = require('fs')

  const byteSize = str => Buffer.from(str).length

  console.log('🚀 Intentando leer el contenido de un archivo...')
  fs.readFile('./text-input-file.txt', 'utf-8', (error, contenido) => {
    if (error) {
      console.log('😱 Ocurrio un error durante la lectura:', error.message)
    } else {
      console.log('😎 Finalizó la lectura.', byteSize(contenido), 'Bytes')
      console.log('Acá el contenido:\n', contenido)
    }
  })

})(false);

(function (run) {
  if (!run) return

  console.log('⭐ [Async] Escritura de archivos.')

  const fs = require('fs')
  const contenido = 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.\n'
  console.log('🚀 Iniciando la escritura...')
  fs.writeFile('./text-output-file.txt', contenido, (error) => {
    if (error) {
      console.log('😱 Ocurrio un error durante la escritura:', error.message)
    } else {
      console.log('😎 Finalizó la escritura.')
    }
  })
})(false);

(function (run) {
  if (!run) return

  console.log('⭐ [Async] Actualización de archivos.')

  const fs = require('fs')
  const contenido = 'Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio.\n'
  console.log('🚀 Iniciando el agregado de contenido...')
  fs.appendFile('./text-output-file.txt', contenido, (error) => {
    if (error) {
      console.log('😱 Ocurrio un error durante la escritura:', error.message)
    } else {
      console.log('😎 Finalizó la escritura.')
    }
  })  
})(false);

(function (run) {
  if (!run) return

  console.log('⭐ [Async] Borrado de archivos.')

  const fs = require('fs')
  console.log('🚀 Intentando borrar el archivo...')
  fs.unlink('./text-output-file.txt', (error) => {
    if (error) {
      console.log('😱 Ocurrio un error durante el borrado:', error.message)
    } else {
      console.log('😎 Finalizó el borrado del archivo.')
    }
  })
})(false);

(function (run) {
  if (!run) return

  console.log('⭐ [Async] Crear una carpeta.')

  const fs = require('fs')

  console.log('🚀 Intentando crear carpeta de nombre my-new-folder...')
  fs.mkdir('./my-new-folder', (error) => {
    if (error) {
      console.log('😱 Ocurrio un error durante la creación de carpeta:', error.message)
    } else {

      console.log('😎 Finalizó la creación de carpeta.')
      console.log('😉 Ahora agregaremos un archivo a las nueva carpeta llamado demo-file.txt.')

      const contenido = 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.\n'

      fs.writeFile('./my-new-folder/demo-file.txt', contenido, (error) => {
        if (error) {
          console.log('😱 Ocurrio un error durante la escritura:', error.message)
        } else {

          console.log('😎 Finalizó la escritura.')
          console.log('😉 Ahora veremos el contenido de la nueva carpeta.')

          fs.readdir('./my-new-folder', (error, nombres) => {
            if (error) {
              console.log('😱 Ocurrio un error:', error.message)
            } else {

              console.log('😎 Finalizamos con éxito la lectura.')
              console.log('Acá el contenido:\n', nombres)
              console.log('😱 OMG donde me encuentro ahora?')

            }
          })
        }
      })
    }
  })

})(false);