import Namespace from "../Namespace";
import Role, { allRolesForUser } from "../Role";
import Server from "../Server";
import User, { parseUser } from "../User";

export default class UserProfile {
  constructor(
    public user: User,
    public userRoles : Role[],
    public namespaces: Namespace[],
    public servers: Server[],
    ) { }
}

export async function getUserProfile() : Promise<UserProfile | undefined> {
  const savedUser = localStorage.getItem('user')
  if (!savedUser) return undefined;

  const user : User = parseUser(JSON.parse(savedUser));
  const userRoles : Role[] = await allRolesForUser(user)
  
  return {
    user : user,
    userRoles : userRoles,
    namespaces : [],
    servers : []
  }
}

export function storeUser(user : User){
  localStorage.setItem('user', JSON.stringify(user))
}

export function resetUser(){
  localStorage.setItem('user', '')
}