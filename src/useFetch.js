import { useState, useEffect } from "react";

const useFetch = (url)=>{

    const [data, setData] = useState(null);
    const [isPending, setIsPending]= useState(true);
    const[error,setError]=useState(null);

      useEffect(()=>{
        const abortController = new AbortController();
        setTimeout(()=>{
          fetch(url, { signal:abortController.signal})
          .then(res=>{
            if (!res.ok) { // error coming back from server
              throw Error('could not fetch the data for that resource');
            } 
          return res.json();
          })
          .then((data)=>{
            setData(data);
            setIsPending(false);
            setError(null);
          })
          .catch((err)=>{
            setError(err.message);
            setIsPending(false);
          })
          },500);

        return ()=>abortController.abort();

        },[url]);
        
        return {data, isPending, error};

}
export default useFetch;
