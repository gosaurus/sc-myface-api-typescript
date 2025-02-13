import  { useState, useEffect } from 'react';
import '../Users.scss';

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
        .catch(error => console.log('error', error))
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
                        <div className="userListDet" key={user.id}>
                            <p>{user.name}</p>
                            <img src={user.profileImageUrl} />
                        </div>
                    ))
                } 
            </div>
        </div>
    );
}