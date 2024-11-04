import React from 'react'
import axios from '../utils/axios'


const searchContactApi = async (data: string): Promise<string[]> => {

    try {
        const res = await axios.get('/api/contact/search',{params: {"data" : data}});
        const result = res.status === 200 ?  res.data.data :  [];
        return result;      
    } catch (error) {
        console.log(error);
        return [];
    }
  
}

export default searchContactApi
