import { response } from "express";

export const handleHttp = ( res = response, statusCode, data ) => {
    return res.status( statusCode ).json({ statusCode: statusCode, data: data });
}