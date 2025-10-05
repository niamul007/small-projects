
export const MAX_LOGIN_ATTEMPTS = 3;
function authenticateUser(userName){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(userName === "Niamul"){
                resolve(" Welcome Aboard " + userName);
            }else{
                reject(new Error("Try again!"))
            }
        },2000)
    })
}

export default authenticateUser;