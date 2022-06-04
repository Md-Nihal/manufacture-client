import { useEffect, useState } from "react"

const useService= () =>{
    const[service, setService] = useState([]);
    useEffect(()=>{
        fetch('https://sheltered-mesa-04260.herokuapp.com/service')
        .then(res=> res.json())
        .then(data=> setService(data))
    },[])
    return[service, setService];
    
}
export default useService;