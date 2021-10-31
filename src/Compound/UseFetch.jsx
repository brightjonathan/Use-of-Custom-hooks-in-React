import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UseFetch = (url) => {
    
    //created state varibles for data,loading, errors
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //rendering it into the brower
    useEffect(()=>{
        
        // setLoading(true)
        // axios.get(url).then((response)=>{
        //   const product = response.data
        //   setData(product)
        // }).catch((err)=>{
        //     setError(err)
        // }).finally(()=>{
        //     setLoading(false)
        // })

        reFetch ()
    }, [url]);

    //created a function any purpose
    const reFetch = () =>{
        setLoading(true)
        axios.get(url).then((response)=>{
          const product = response.data
          setData(product)
        }).catch((err)=>{
            setError(err)
        }).finally(()=>{
            setLoading(false)
        })
    }

    return {data, loading, error, reFetch};
}

export default UseFetch
