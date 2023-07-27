import { RoleEntity } from '../models/index.js';

export const getRoleByName = async ( role ) => {
    return RoleEntity.findOne({ role: role });
}

export const createRole = async ( role ) => {
    return RoleEntity.create({ role: role });
}

export const updateRole = async ( roleId, role ) => {
    return RoleEntity.findOneAndUpdate({ _id: roleId }, { role: role }, { new: true });
}

export const getRoles = async ( limit, skip = 0 ) => {
    return await RoleEntity.find({}).limit(limit).skip(skip);
}

export const deleteRole = async ( roleId ) => {
    return RoleEntity.findOneAndUpdate({ _id: roleId }, { roleStatus: false }, { new: true });
}