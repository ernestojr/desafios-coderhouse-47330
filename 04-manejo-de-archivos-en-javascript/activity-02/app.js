const { promises: fs } = require('fs');

const biteSize = str => Buffer.from(str).length;

const activity = async () => {
  try {
    const pathFile = './package.json';
    const contentFile = await fs.readFile(pathFile, 'utf-8');
    const info = {
      str: contentFile,
      obj: JSON.parse(contentFile),
      size: biteSize(contentFile),
    }
    console.log('Esta esta la informacion que tenemos:', info);

    const contentNewFile = JSON.stringify(info, null, 2);
    const pathNewFile = './info.json';
    await fs.writeFile(pathNewFile, contentNewFile, 'utf-8');
    console.log('😎 Ready for here!');
  } catch (error) {
    console.error('😱 Ha ocurrido un error', error.message)
  }
};

activity()