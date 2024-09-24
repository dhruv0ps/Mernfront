import axios from 'axios';

const API_URL ="https://mernbackend-misf.onrender.com";
export const uploadfile = async (data) => {
 try{
    let response  =  await axios.post(`${API_URL}/upload`,data)
    return response.data;
 } catch(error){
    console.error('Error while calling the api', error.message);
 }
}

