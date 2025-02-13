import React, { useState, useEffect } from "react";
import '../Posts.scss';

interface postDataObj {
    id:number,
    message:string,
    imageUrl:string
}
export function Posts() {
    const [allPosts, setAllPosts] = useState([]);

useEffect(() => {
        fetch("http://localhost:3001/posts")
        .then(response => (response.json()))
        .then(data => setAllPosts(data.results))
        .catch(error => console.log('error',error))
        .finally(() => console.log('Request finished'));
    },[])

    if (!allPosts) {
        return <div>No posts yet.</div>
    }
    return (
         <div className="container"> 
         <h1>Myface</h1>
            <div className="postHeader">
                <img className="headerImg" src="https://picsum.photos/id/13/1000/1000" />
            </div>
            <h2>All posts</h2>
            <div className="postList" >
                {
                    allPosts.map((post:postDataObj)=> (
                        <div className="postListDet" key={post.id}>
                            <img className="postImg" src={post.imageUrl} /> <p>{post.message}</p>
                        </div>
                    ))
                } 
            </div>
        </div>
    );
}