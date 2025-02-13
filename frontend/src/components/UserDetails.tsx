import React, { useState, useEffect } from "react";
import {Posts} from "./Posts";

export function UserDetails(props:{userId:number}) {
    const [userDetails, setUserDetails] = useState([]);

useEffect(() => {
        fetch(`http://localhost:3001/users/${props.userId}`)
        .then(response => (response.json()))
        .then(data => setUserDetails(data))
        .catch(error => console.log('error',error))
        .finally(() => console.log('Request finished'));
    }, []);

    if (!userDetails) {
        return <div>No user details yet.</div>
    }
    interface userDetails{
        id:number,
        name:string,
        profileImageUrl:string
    }

    return (
         <div> 
            <div className="">
                <img className="" src="userDetails.coverImageUrl" />
            </div>
            <div>
                {
                    <div className="" key={userDetails.id}>
                        <p>{userDetails.name}</p>
                        <img src={userDetails.profileImageUrl} />

                    <div className=""> 
                      <Posts /> 
                    </div>
                    </div>
                }
            </div>
        </div>
    );
}