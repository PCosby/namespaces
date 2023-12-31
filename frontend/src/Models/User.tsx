
export default class User {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public id?: number
    ) { }
}

export const parseUser = (userJSON : any): User => {return {
  name : userJSON?.name,
  email : userJSON?.email,
  password : userJSON?.password,
  id : userJSON?.id
}}

export async function getUserFromEmail(email: string) : Promise<User> {

  const url: string = `http://localhost:8080/api/users/search/findByEmail?email=${email}`
  const response = await fetch(url);
  
  if (!response.ok) throw Error("Invalid email")
  let user_json = await response.json()

  let user : User = {
    id : parseInt(user_json.id),
    name : user_json.name,
    email : user_json.email,
    password : user_json.password
  }
    
  return user;
}


export async function newUser (user : User) : Promise<User> {

  const url: string = `http://localhost:8080/api/users`
  const response = await fetch(url,{
    method: 'POST',
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify(user)
  });
  if (!response.ok){ 
    await getUserFromEmail(user.email)
    .then(() => {throw Error("Email in Use")})
  }

  return await response.json()
}

export async function login (email : string, password : string) : Promise<User> {

  let user : User = await getUserFromEmail(email)
  if (user.password !== password) throw Error("Incorrect password")
  return user

}