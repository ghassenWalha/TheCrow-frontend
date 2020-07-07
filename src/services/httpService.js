import axios from 'axios';




axios.interceptors.response.use(null, error => {
    const exprecteddError = error.response && error.response.status >= 400 && error.response.status < 500;
    if(!exprecteddError){
        console.log("logging error" + error);
        alert('An unexpected error occurred.');
    }

    return Promise.reject(error);
    

});
export function setJwt(jwt)
{
    axios.defaults.headers.common['x-auth-token'] =jwt

}

export default {
    get: axios.get,
    post:axios.post,
    put:axios.put,
    delete:axios.delete,
    request:axios.request,
    setJwt
}
  