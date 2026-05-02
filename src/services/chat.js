import api from "./axios-instance";

export const createChat = async (data) => {
    console.log('api')
    try{
        const res = await api.post('chat/create',data);
        return res?.data;
    }
    catch(err){
        throw err;
    }
}