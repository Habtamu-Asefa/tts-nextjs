import { API_URL } from 'utils/url'
const signup = async (email: string, password: string, role: string) => {
  
  const response = await fetch(`${API_URL}api/v1/user/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      password,
      email,
      role,
    }),
  })

  return response
}

const forgotPassword = async (email:string) =>{
  const response = await fetch (`${API_URL}api/v1/user/forgotPassword`,{
    method:'PATCH',
    headers:{
      'Content-Type':'application/json',

    },
    body:JSON.stringify({
      email:email
     })
  })
  return response;
}

const changePassword = async (id:any , token:string, reqBody:any)=>{
  const response = await fetch(`${API_URL}api/v1/user/${id}`,{
    method:'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ ...reqBody }),
  })
 
  return response
}
const signin = async (email: string, password: string) => {
 
  const response = await fetch(`${API_URL}api/v1/user/login`, {
 
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      password,
      email,
    }),
  })
  
  return response
}

const signout = async (accessToken: string, token: string) => {
  const response = await fetch(`${API_URL}api/v1/user/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      token,
    }),
  })
  return response
}

const getUserById = async (id: string, token: string) => {
  const response = await fetch(`${API_URL}api/v1/user/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  })
 
  return response
}

export { signup, signin, signout, getUserById , changePassword,forgotPassword}
