import jwDecode from 'jwt-decode';


import http from './httpService';



import {
    apiUrl
} from "./config";

const apiEndpoint = apiUrl + "auth";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(user) {
    const {
        data: jwt
    } = await http.post(apiEndpoint, {

        email: user.email,
        password: user.password

    });
    localStorage.setItem(tokenKey, jwt);

}

export async function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey,jwt)

}


export async function logout() {
    localStorage.removeItem(tokenKey);
}

export  function getCurrentUser() {


    try {
        return   jwDecode(localStorage.getItem(tokenKey));
      
    } catch (error) {
        return null;

    }


}
export function getJwt()
{
    return localStorage.getItem(tokenKey);
}