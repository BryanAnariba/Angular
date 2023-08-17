import { Response } from "express";

export const handleHttp = ( res: Response, statusCode: number, contentTile: string, content: any ): Response => {
    return res.status( statusCode ).json(
        { 
            statusCode: statusCode, 
            data: { 
                contentTile: contentTile, content: content 
            } 
        });
}