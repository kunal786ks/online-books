import axios from "axios";

//base path in future

export const addUserApi=async(payload:addUserInterface)=>await axios.post(`/api/user/add-user`,payload);

export const getUserApi=async(payload:getUserInterface)=>await axios.post('/api/user/get-user',payload);

export const updateProfileApi=async(payload:updateProfileInterface)=>await axios.put(`/api/user/upload-image/${payload.userId}`,{image:payload.image})