import { Response } from "express";

export const errorHandle = (res: Response, statusCode: number, data: any | Error): Response => {
  return res.status(statusCode).json({ statusCode: statusCode, data: ( data instanceof Error ) ? data.message : data });
}