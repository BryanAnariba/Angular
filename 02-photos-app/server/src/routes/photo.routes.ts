import { Router } from 'express';
import { PhotoController } from '../controllers/PhotoController';
import multer from '../config/Multer';

const router = Router();
const photoCtrl = new PhotoController();

router.get( '', photoCtrl.getAll );
router.get( '/:photoId', photoCtrl.getOne ); 
router.post( '', multer.single( 'image' ), photoCtrl.save ); // subir una sola imagen para eso es single
router.put( '/:photoId', photoCtrl.edit );
router.delete( '/:photoId', photoCtrl.delete );

export {
    router as galleryRoutes 
}