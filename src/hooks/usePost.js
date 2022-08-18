import {useState} from 'react'
import axios from 'axios'
function usePost() {
    const [data, SetData] = useState(null);
    const [loading, SetLoading] = useState(null);
    const [error, SetError] = useState(null);
    const post = async (url,apiData) => {
        try{
            SetLoading(true);
            const {data:responseData} = await axios.post(url,apiData);
            SetData(responseData);
            SetLoading(false);
        }
        catch(err){
         SetError(err);
         SetLoading(false);
        }
    }
  return {data,loading,error, post}
}

export default usePost