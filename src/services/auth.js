import api from "./axios-instance";

export const createUser = async (data) => {
    console.log('api')
    try{
        const res = await api.post('user/create',data);
        return res?.data;
    }
    catch(err){
        throw err;
    }
}


export const createLogin = async (data) => {
    try{
        const res = await api.post('user/login',data);
        return res?.data;
    }
    catch(err){
        throw err;
    }
}