import React, { useState, useEffect } from "react";

export function Posts() {
    const [allPosts, setAllPosts] = useState({});

    useEffect(() => {
        fetch("http://localhost:3001/posts")
        .then(response => setAllPosts(response.json()))
        // .then(data => setMyData(data))
        .catch(error => console.log('error',error))
        .finally(()=>console.log('Request finished'));
    }, //useEffect depependcy is allPosts?
    )

    if (!allPosts) {
        return <div>No posts yet.</div>
    }
    return (
        <>
         <div>
            {allPosts}
         </div>
        </>
    );
}