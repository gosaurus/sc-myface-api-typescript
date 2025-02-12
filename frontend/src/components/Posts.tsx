import React,{useEffect} from "react";

export function Posts(){

    useEffect(() => {
        fetch("http://localhost:3001/posts")
             .then(response => response.json())
             // .then(data => setMyData(data))
             .catch(error => console.log('error',error))
             .finally(()=>console.log('Request finished'))
             
    })
    return(
        <>

        </>
    )
}