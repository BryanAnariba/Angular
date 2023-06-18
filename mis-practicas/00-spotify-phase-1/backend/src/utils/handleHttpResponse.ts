import { Response } from "express";

export const handleHttpResponse = ( res: Response, statusCode: number, error: string, errorMessage: any ): Response => {
    return res.status(statusCode).json({ 
        statusCode: statusCode, 
        data: { 
            error: error, 
            message: errorMessage.message 
        } 
    });
}