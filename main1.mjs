import loginService from './services.mjs';
import {MAX_LOGIN_ATTEMPTS} from './services.mjs';


async function tryChceker(userCheck) {
    console.log("Searching users....");
    try{
        const getName = await loginService(userCheck);
        console.log(`${getName} you can try ${MAX_LOGIN_ATTEMPTS} times to log in`);
    }
    catch(error){
        console.error(error.message)
    }
}

tryChceker("Niamul");