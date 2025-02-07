import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound(){
    const navigate=useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/home")
        },5000)
    },[])
    return(
        <>
        <h1>404 page NotFound</h1>
        <img src="not.jpg"/>
        </>
    )
}
export default NotFound;