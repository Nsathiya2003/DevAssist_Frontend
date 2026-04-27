import api from "./axios-instance";

const userInfo = (id)=> api.get(`user/get/${id}`);
