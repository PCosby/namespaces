import Namespace from "../Namespace";
import Role, { allRolesForUser } from "../Role";
import Server from "../Server";
import User, { parseUser } from "../User";

export default class UserProfile {
  constructor(
    public user: User,
    public setProfile : Function,
    public userRoles : Role[],
    public namespaces: Namespace[],
    public servers: Server[],
    public searchText : string
    ) { }

    setSearch(search : string){
      const newProfile : UserProfile = this.copy()
      newProfile.searchText = search;
      this.setProfile(newProfile);
    }

    resetSearch() {this.setSearch('')}

    resetProfile() {this.setProfile(undefined)}

    copy() {
      return new UserProfile(
        this.user, 
        this.setProfile, 
        this.userRoles, 
        this.namespaces, 
        this.servers, 
        this.searchText)
    }
}

export async function getUserProfile(setProfile : Function) {
  const savedUser = localStorage.getItem('user')
  if (!savedUser) return undefined;

  const user : User = parseUser(JSON.parse(savedUser));
  const userRoles : Role[] = await allRolesForUser(user)
  
  setProfile(new UserProfile(
    user,
    setProfile,
    userRoles,
    [],
    [],
    ""
  ))
}

export function storeUser(user : User){
  localStorage.setItem('user', JSON.stringify(user))
}

export function resetUser(){
  localStorage.setItem('user', '')
}
