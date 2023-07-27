import { response, request } from "express";
import { handleHttp } from "../utils/http.handle.js";
import { createRole, deleteRole, getRoleByName, getRoles, updateRole } from "../services/role.service.js";

let statusCode = 0;

export const createItem = async ( req = request, res = response ) => {
    try {
        const { role } = req.body;

        if ( role.trim() === '' || !role ) {
            statusCode = 400;
            throw new Error( 'Role is required' )
        }

        // Verificamos existencia del role
        const existsRole = await getRoleByName(role.toUpperCase());
        if ( existsRole ) {
            statusCode = 400;
            throw new Error( 'Role already exists' )
        }

        // Guardamos
        const databaseResponse = await createRole(role.toUpperCase());
        return handleHttp( res, 201, databaseResponse );
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        const data = { message: 'HTTP_CREATE_ROLE_ERROR', errorMessage: error.message }
        return handleHttp( res, statusCode, data);
    }
}

export const updateItem = async ( req = request, res = response ) => {
    try {
        if ( !req.params.roleId || !req.body.role ) {
            statusCode = 400
            throw new Error( `Role & Id is required` );
        }

        const { roleId } = req.params;
        const { role } = req.body;
        const databaseResponse = await updateRole( roleId, role.toUpperCase() );
        return handleHttp( res, 200, databaseResponse );
    } catch (error) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return handleHttp( res, statusCode, error.message );
    }
}

export const getItems = async ( req = request, res = response ) => {
    try {
        const { limit = 10, skip = 0 } = req.query;
        const databaseResponse = await getRoles(limit, skip);
        return handleHttp( res, 200, databaseResponse );
    } catch (error) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return handleHttp( res, statusCode, error.message );
    }
}

export const deleteItem = async ( req = request, res = response ) => {
    try {
        if ( !req.params.roleId ) {
            statusCode = 400
            throw new Error( `Role & Id is required` );
        }
        
        const { roleId } = req.params;
        const databaseResponse = await deleteRole(roleId);
        return handleHttp( res, 200, databaseResponse );
    } catch (error) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return handleHttp( res, statusCode, error.message );
    }
}