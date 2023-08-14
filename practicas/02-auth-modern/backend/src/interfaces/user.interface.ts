import { Role } from "./role.interface";

export interface User {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    profileImage?: string;
    role: Role;
}