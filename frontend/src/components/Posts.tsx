import { useState, useEffect } from "react";
import './Posts.scss';

interface postDataObj {
    id:number,
    message:string,
    imageUrl:string
    createdAt: string;
}
export function Posts() {
    const [allPosts, setAllPosts] = useState([]);

useEffect(() => {
        fetch("http://localhost:3001/posts")
        .then(response => (response.json()))
        .then(data => setAllPosts(data.results))
        .catch(error => console.error(error))
        .finally(() => console.log('Request finished'));
    },[])

    if (allPosts.length === 0) {
        return <div>No posts yet.</div>
    }
    return (
         <div className="container"> 
            <h2>All posts</h2>
            <div className="postList" >
                {
                    allPosts.map((post:postDataObj)=> (
                        <div className="postListDetail" key={post.id}>
                            <img className="postImg" src={post.imageUrl} />
                            <p>{post.message}</p>
                            <p className="postDate">Posted on: {post.createdAt}</p>
                        </div>
                    ))
                } 
            </div>
        </div>
    );
}