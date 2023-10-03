import { sign, verify } from "jsonwebtoken"
import { User } from "../interfaces"

export const createJwt = (user: User) => {
  const jwt = sign({id: user._id}, `${process.env.JWT_SECRET}`,{ expiresIn: '1h' });
  return jwt;
}

export const verifyJwt = async () => {

}