import  { useState, useEffect } from 'react';
import './Users.scss';
import { Link } from 'react-router-dom';

interface userDataObj {
    id:number,
    name:string,
    profileImageUrl:string,
}

export function Users() {
    const [allUsers, setAllUsers] = useState([]);

useEffect(() => {
        fetch('http://localhost:3001/users')
        .then(response => (response.json()))
        .then(data => setAllUsers(data.results))
        .catch(error => console.error(error))
        .finally(() => console.log('Request finished'));
    },[])

    if (!allUsers) {
        return <div>No users yet.</div>
    }
    return (
         <div> 
            <div className="userList" >
                {
                    allUsers.map((user:userDataObj)=> (
                        <div className="userListDetail" key={user.id}>
                            <div className="username"><Link to={"/users/"+user.id}>{user.name}</Link></div>
                            <img src={user.profileImageUrl} />
                        </div>
                    ))
                } 
            </div>
        </div>
    );
}