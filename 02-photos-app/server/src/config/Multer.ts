import multer from 'multer';
import { v4 as uuid } from 'uuid';
import path from 'path';

// diskstorage => para guardar en el directorio las imagenes
const storage = multer.diskStorage({
    destination: 'uploads',
    filename: ( req, file, cb ) => {
        cb( null, uuid() + path.extname( file.originalname )  ); // uuid + extension = 001-1166sss + .jpg
    }
}); 

export default multer( { storage } );