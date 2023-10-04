import { sign, verify } from "jsonwebtoken"
import { User } from "../interfaces"

export const createJwt = (user: User) => {
  const jwt = sign({id: user._id}, `${process.env.JWT_SECRET}`,{ expiresIn: '1h' });
  return jwt;
}

export const verifyJwt = async (token: string) => {
  try {
    return verify(token, `${process.env.SECRET_JWT}`)
  } catch (e) {
    throw new Error(`${e}`);
  }
}