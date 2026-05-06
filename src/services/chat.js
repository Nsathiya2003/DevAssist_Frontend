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

export const getChatMessages = async(id) => {
    try{
        const res = await api.get(`chat/get/${id}`);
        return res?.data;
    }
    catch(error){
        throw error
    }
}

export const getLatestChats = async () => {
    try{
        const res = await api.get(`chat/latest-chats`);
        return res?.data;
    }
    catch(error){
        throw error
    }
}