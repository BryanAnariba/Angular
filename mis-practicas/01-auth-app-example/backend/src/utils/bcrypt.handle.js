import bcryptjs from 'bcryptjs';

export const encryptPassword = async ( password ) => {
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash( password, salt );
    return hashedPassword;
}

export const verifyPassword = async ( password, hashedPassword ) => {
    return await bcryptjs.compare( password, hashedPassword );
}