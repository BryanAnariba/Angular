import { Role } from "../interfaces/role.interface";
import { RoleModel } from "../models";

export const getRoles = async ( limit: number, skip: number ) => {
    return await RoleModel.find({ roleStatus: true },{ roleName: true, roleDescription: true }).skip( skip ).limit( limit );
}

export const getRole = async ( roleId: string ) => {
    return await RoleModel.findOne({ _id: roleId });
}

export const createNewRole = async ( role: Role ) => {
    return await RoleModel.create(role);
}

export const findRoleByName = async ( roleName: string ) => {
    return await RoleModel.findOne({ roleName: roleName });
}

export const updateRole = async ( role: Role ) => {
    return await RoleModel.findByIdAndUpdate({ _id: role._id }, { roleName: role.roleName, roleDescription: role.roleDescription }, { new: true });
}

export const deleteRole = async ( roleId: string ) => {
    return await RoleModel.findByIdAndUpdate({ _id: roleId }, { roleStatus: false }, { new: true });
}