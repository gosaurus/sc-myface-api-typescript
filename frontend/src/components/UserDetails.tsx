import { useState, useEffect } from "react";
import { Posts } from "./Posts";
import { useParams } from "react-router-dom";

interface UserDetails {
    id:number,
    name:string,
    profileImageUrl:string
}
export function UserDetails() {
    const [userDetails, setUserDetails] = useState<UserDetails>();
    const { userId } = useParams();

    useEffect(() => {
            fetch(`http://localhost:3001/users/${userId}`)
            .then(response => (response.json()))
            .then(data => setUserDetails(data))
            .catch(error => console.log('error',error))
            .finally(() => console.log('Request finished'));
    }, []);

    if (!userDetails) {
        return <div>No user details yet.</div>
    }
    return (
            <div key={userDetails.id}>
                <p>{userDetails.name}</p>
                <img src={userDetails.profileImageUrl} />
                <Posts /> 
            </div>
    );
}