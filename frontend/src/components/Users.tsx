import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {UserDetails} from './UserDetails';
import '../Users.css';

interface userDataObj {
    id:number,
    name:string,
    profileImageUrl:string,
}

export function Users() {
    const [allUsers, setAllUsers] = useState([]);

useEffect(() => {
        fetch("http://localhost:3001/users")
        .then(response => (response.json()))
        .then(data => setAllUsers(data.results))
        .catch(error => console.log('error', error))
        .finally(() => console.log('Request finished'));
    },[])

    function displayUser(userId: number){
        console.log(userId);
        return (
            <>
                <Link to="/users/:userId"></Link>
             <UserDetails userId = {userId}/>
             </>
        )
    }
    if (!allUsers) {
        return <div>No users yet.</div>
    }
  
    return (
         <div> 
            <div className="userList" >
                {
                    allUsers.map((user:userDataObj)=> (
                        <div className="userListDet" key={user.id}>
                            <p>{user.name}</p>
                            <button onClick={()=>displayUser(58)} ><img src={user.profileImageUrl} /></button>
                        </div>
                    ))
                } 
            </div>
        </div>
    );
}