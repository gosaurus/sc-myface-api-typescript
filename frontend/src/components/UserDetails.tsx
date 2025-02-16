import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './Posts.scss';
import './Users.scss';

interface UserDetails {
    id: number,
    name: string,
    profileImageUrl: string,
    posts: Array<PostDataObj>, 
    likes: Array<Likes>,
    dislikes: Array<Dislikes>,
}

interface PostDataObj {
    id: number,
    message: string,
    imageUrl: string,
    createdAt: string,
    userId: number,
}

interface Likes {
    id: number,
}

interface Dislikes {
    id: number
}

export function UserDetails() {
    const [userDetails, setUserDetails] = useState<UserDetails>();
    const { userId } = useParams();


    useEffect(() => {
            const id = userId ? parseInt(userId) : 0;
           
            //This doesn't work when 'userId' passed in
            fetch("http://localhost:3001/users/1")
            .then(response => (response.json()))
            .then(data => setUserDetails(data))
            .catch(error => console.error(error))
            .finally(() => console.log("Request finished"));
    }, []);

    if (!userDetails) {
        return <div>No user details yet.</div>
    }
   
    return (
            <>
            <div className="userHeader" key={userDetails.id}>
                <h2>{userDetails.name}</h2>
                <img src={userDetails.profileImageUrl} />
            </div>
                <h2>Posts by {userDetails.name}</h2>
            <div className="postList">
                {
                    userDetails.posts.map((post: PostDataObj)=> (
                        <div className="postListDetail" key={post.id}>
                            <img className="postImg" src={post.imageUrl} />
                            <p>{post.message}</p>
                            <p className="postDate">Posted on: {post.createdAt}</p>
                        </div>
                    ))
                } 
            </div>
            </>
    );
}