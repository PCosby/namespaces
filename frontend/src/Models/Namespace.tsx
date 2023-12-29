import Server, { parseServer } from "./Server";
import User, { parseUser } from "./User";

export default class Namespace {
  constructor(
    public name: string,
    public desc: string,
    public server: Server,
    public updateUser: User,
    public id?: number,
    public updateDttm?: Date
    
    ) { }
}

export const parseNamespace = (nsJSON : any): Namespace => {return {
  name : nsJSON?.name,
  desc : nsJSON?.desc,
  server : parseServer(nsJSON.server),
  updateUser : parseUser(nsJSON?.updateUser),
  id : nsJSON?.id,
  updateDttm : new Date(nsJSON.updateDttm)
}}