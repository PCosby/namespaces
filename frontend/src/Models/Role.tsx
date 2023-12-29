import Namespace, { parseNamespace } from "./Namespace";
import User, { parseUser } from "./User";

export const enum RoleValue {
  DEVELOPER = "DEVELOPER",
  ADMIN = "ADMIN",
  AUDITOR = "AUDITOR",
  NOACCESS = "NOACCESS"
}

export default class Role {
  constructor(
    public user: User,
    public ns: Namespace,
    public updateUser: User,
    public value : RoleValue,
    public id?: number,
    public updateDttm?: Date,
    
    ) { }
}

export const parseRole = (roleJSON : any): Role => {return {
  user : parseUser(roleJSON?.user),
  ns : parseNamespace(roleJSON?.ns),
  updateUser : parseUser(roleJSON?.updateUser),
  value : roleJSON.value,
  id : roleJSON?.id,
  updateDttm : new Date(roleJSON.updateDttm)
}}

export async function allRolesForUser(user: User) : Promise<Role[]> {

  const url: string = `http://localhost:8080/api/roles/search
/findByUserIdAndValueNot?userId=${user?.id}&value=${RoleValue.NOACCESS}`
  const response = await fetch(url);
  
  if (!response.ok) throw Error("Something went wrong")
  let roles_json = await response.json()
  return roles_json.map(parseRole)
}