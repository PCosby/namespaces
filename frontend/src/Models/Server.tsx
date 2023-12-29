import User, { parseUser } from "./User";

export default class Server {
  constructor(
    public name: string,
    public desc: string,
    public updateUser: User,
    public id?: number,
    public updateDttm?: Date,
    
    ) { }
}

export const parseServer = (serverJSON : any): Server => {return {
  name : serverJSON?.name,
  desc : serverJSON?.desc,
  updateUser : parseUser(serverJSON?.updateUser),
  id : serverJSON?.id,
  updateDttm : new Date(serverJSON.updateDttm)
}}