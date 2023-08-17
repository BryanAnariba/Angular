import { Request, Response } from "express";
import { handleHttp } from "../utils/handle.http";
import { createNewRole, deleteRole, findRoleByName, getRole, getRoles, updateRole } from "../services/role.service";

let statusCode = 0;

export const getItems = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        statusCode = 200;
        const { limit = 10, skip = 0 } = req.query;
        const jsonResponse = await getRoles( Number(limit), Number(skip) );
        return handleHttp( res, statusCode, 'Get-Items-Success', jsonResponse );

    } catch ( error: any ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500; 
        return handleHttp( res, statusCode, 'HTTP_GET_ITEMS_ERROR', error.message );
    }
}

export const getItem = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        statusCode = 200;
        const { roleId  } = req.params;
        const jsonResponse = await getRole( roleId );
        return handleHttp( res, statusCode, 'Get-Item-Success', jsonResponse );

    } catch ( error: any ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500; 
        return handleHttp( res, statusCode, 'HTTP_GET_ITEM_ERROR', error.message );
    }
}

export const createItem = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        statusCode = 201;
        const { roleName, roleDescription } = req.body;
        if ( !roleName || roleName.trim() === '' || roleName.trim().length < 3 ) {
            statusCode = 400;
            throw new Error( `Role Name is required and min caracters are 3` );
        }
        if ( !roleDescription || roleDescription.trim() === '' || roleDescription.trim().length < 3 ) {
            statusCode = 400;
            throw new Error( `Role Description is required and min caracters are 3` );
        }

        const existsRole = await findRoleByName( roleName );
        if ( existsRole ) {
            statusCode = 400;
            throw new Error( `Role already exists` );
        }
        const jsonResponse = await createNewRole({ roleName: roleName.toUpperCase().trim(), roleDescription: roleDescription.toUpperCase().trim() });
        return handleHttp( res, statusCode, 'Create-Item-Success', jsonResponse )

    } catch ( error: any ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500; 
        return handleHttp( res, statusCode, 'HTTP_CREATE_ITEM_ERROR', error.message );
    }
}

export const updateItem = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        statusCode = 200;
        const { roleName, roleDescription } = req.body;
        const { roleId } = req.params;

        if (!roleId) {
            statusCode = 400;
            throw new Error( `Role Id is required` );
        } 

        const exitsRole = await getRole( roleId );

        if ( !exitsRole ) {
            statusCode = 400;
            throw new Error(`The role does not exits.`);
        }

        if ( !roleName || roleName.trim() === '' || roleName.trim().length < 3 ) {
            statusCode = 400;
            throw new Error( `Role Name is required and min caracters are 3` );
        }
        if ( !roleDescription || roleDescription.trim() === '' || roleDescription.trim().length < 3 ) {
            statusCode = 400;
            throw new Error( `Role Name is required and min caracters are 3` );
        }

        const jsonResponse = await updateRole({ _id: roleId, roleName: roleName.toUpperCase().trim(), roleDescription: roleDescription.toUpperCase().trim() });
        return handleHttp( res, statusCode, 'Update-Item-Success', jsonResponse );

    } catch ( error: any ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500; 
        return handleHttp( res, statusCode, 'HTTP_EDIT_ITEM_ERROR', error.message );
    }
}

export const deleteItem = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        statusCode = 200;
        const { roleId } = req.params;
        if (!roleId) {
            statusCode = 400;
            throw new Error( `Role Id is required` );
        } 

        const jsonResponse = await deleteRole( roleId );
        return handleHttp( res, statusCode, 'Delete-Item-Success', jsonResponse );

    } catch ( error: any ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500; 
        return handleHttp( res, statusCode, 'HTTP_DELETE_ITEM_ERROR', error.message );
    }
}