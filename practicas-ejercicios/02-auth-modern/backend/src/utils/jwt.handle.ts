import jwt from 'jsonwebtoken';
import { User } from '../interfaces/user.interface';

export const generateToken = ( user: User ): string => {
    return jwt.sign({ _id: user._id, email: user.email, role: user.role }, `${ process.env.SECRET_KEY }`, { expiresIn: '1h' });
}

export const verifyToken = ( token: string ) => {
    return jwt.verify( token, `${ process.env.SECRET_KEY }` );
}