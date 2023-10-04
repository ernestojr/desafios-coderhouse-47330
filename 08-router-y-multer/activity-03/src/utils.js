import { v4 as uuidv4 } from 'uuid';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const folderPath = path.join(__dirname, '../public/img');
    console.log('folderPath', folderPath);
    callback(null, folderPath);
  },
  filename: (req, file, callback) => {
    const filename = `${Date.now()}-${file.originalname}`;
    callback(null, filename);
  },
});

export const uploader = multer({ storage });

export const getNewId = () => uuidv4();