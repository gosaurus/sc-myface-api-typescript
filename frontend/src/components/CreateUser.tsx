import { useState, useEffect } from 'react';
import './Forms.scss';

interface User {
    name: string;
    username: string;
    email: string;
    coverImageUrl: string;
    profileImageUrl: string;
}

  export const CreateUser = () => {
    const [formData, setFormData] = useState<User>({
        name:"",
        username:"",
        email:"",
        profileImageUrl:"",
        coverImageUrl:""
    });


    const [userTotal, setUserTotal] = useState(0); //How can this be set initially 
    
    useEffect(() => {
        console.log("Success, new user created", userTotal)
        }, [userTotal])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value}  = event.target;
        setFormData({...formData, [name]:value,});
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault();
        fetch("http://localhost:3001/users/create", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json"}
        })
        .then(response => {
            console.log("In 'then' block");
            updateUserTotal();
            if (response.status === 204) {
                console.log("Success! User created.") //this doesn't work. Does not enter if block.
            }
        });
}

    const updateUserTotal = () => {
        fetch("http://localhost:3001/users")
        .then(response => response.json())
        .then(data => setUserTotal(data.total))
    }

    return (
        <div className="createUserForm">
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="name">Name:</label>
                    <div className="input">
                        <input id="name"
                            name="name"
                            type="text" 
                            placeholder="Firstname Lastname" 
                            onChange={handleChange}
                            value={formData.name}
                            required
                        />
                        <span></span>
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="username">Username:</label>
                    <div className="input">
                        <input type="text"
                            id="username"
                            name="username"
                            placeholder="username"
                            minLength={5}
                            maxLength={10}
                            onChange={handleChange}
                            required
                        />
                        <span></span>
                    </div>

                    <span className="usernameRules">
                        Enter a lowercase username between 5-10 characters long.
                    </span>
                </div>
                <div className="field">
                    <label htmlFor="email">Email:</label>
                    <div className="input">
                        <input id="email"
                            name="email"
                            type="email"
                            placeholder="email@domain.com" 
                            onChange={handleChange}
                            required
                        />
                        <span></span>
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="profileImageUrl">Profile Image Url:</label>
                    <div className="input">
                        <input type="url"
                            id="profileImageUrl"
                            name="profileImageUrl"
                            placeholder="url to myProfile.jpg"
                            value={formData.profileImageUrl} 
                            onChange={handleChange}
                            required
                        />
                        <span></span>
                    </div>
                </div>
                <div className="field">
                    <label htmlFor="coverImageUrl">Cover Image Url:</label>
                    <div className="input">
                        <input type="url"
                            id="coverImageUrl"
                            name="coverImageUrl"
                            placeholder="url to myCoverImage.jpg"
                            value={formData.coverImageUrl}
                            onChange={handleChange}
                            required
                        />
                        <span></span>
                    </div>
                </div>
            <button type="submit">Submit</button>
        </form>
        { userTotal > 0 ? <p>Success! New user created</p> : ''}
    </div>
    );
  }