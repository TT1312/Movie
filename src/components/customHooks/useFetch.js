import { useState,useEffect } from "react"
import { fetchdataFromApi } from "../../utils/Api"


const useFetch = (url) => {

    const[data,setdata] = useState(null);
    const[loading,setloading] = useState(null);
    const[err,seterr] = useState(null);

    useEffect(()=>{
        
        setloading("Loading...");
        setdata(null);
        seterr(null);
        
        fetchdataFromApi(url).then((res)=>{
            
            setdata(res);
            setloading(null);
        })
        .catch((error)=>{
            setloading(null);
            seterr(error);

        })


    }, [url])


  return {data,loading,err};
}

export default useFetch