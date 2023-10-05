import { Request } from "express";
import multer, { diskStorage } from "multer";

const pathStorage = `${ process.cwd() }/storage`;

const storage = diskStorage({
  destination(req: Request, file: Express.Multer.File, cb: any) {
    cb(null, pathStorage);
  },
  filename(req: Request, file: Express.Multer.File, cb: any) {
    const ext = file.originalname.split('.').pop();
    const randomFileName = `image-${ Date.now() }.${ ext }`;
    cb(null, randomFileName);
  }
});

export const multerMiddleware = multer({storage});

