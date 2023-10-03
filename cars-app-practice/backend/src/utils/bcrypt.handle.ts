import { hashSync, genSaltSync, compareSync } from "bcryptjs"

export const encrypt = (param: string): string => {
  const salt = genSaltSync(10);
  return hashSync( param, salt );
}

export const matchParams = ( param: string, hashedParam: string ): boolean => {
  return compareSync( param, hashedParam );
}