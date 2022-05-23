import { Request, Response } from 'express';
import Photo from '../models/Photo';

class PhotoController {
    getAll = async ( req: Request, res: Response ): Promise<Response> => {
        try {
            const photos = await Photo.find();
            return res.status( 200 ).json( { status: 201, data: photos } );

        } catch ( err ) {
            return res.status( 400 ).json( { status: 400, data: err } );
        }
    }
    
    getOne = async ( req: Request, res: Response ): Promise<Response> => {
        const { photoId } = req.params;
        try {
            const photo = await Photo.find({ _id: photoId });
            return res.status( 200 ).json( { status: 201, data: photo[0] } );

        } catch ( err ) {
            return res.status( 400 ).json( { status: 400, data: err } );
        }

    }

    save = async ( req: Request, res: Response ): Promise<Response> => {
        const { title, description } = req.body;
        //console.log(req.file.path);
        
        try {
            const newPhoto = new Photo({
                title: title,
                description: description,
                imagePath: req?.file?.path,
            });
            const saved = await newPhoto.save();
            return res.status( 201 ).json( { status: 201, data: saved } );

        } catch ( err ) {
            return res.status( 400 ).json( { status: 400, data: err } );
        }
    }

    edit = ( req: Request, res: Response ) /*: Promise<Response> */ => {
        return res.status( 200 ).json( 'ups' );

    }

    delete  = ( req: Request, res: Response ) /*: Promise<Response> */ => {
        return res.status( 200 ).json( 'ups' );
    }
}

export {
    PhotoController,
}