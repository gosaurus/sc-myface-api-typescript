import { useState } from 'react';
//import { useForm } from 'react-hook-form';

import '../Forms.scss';

interface User {
    name: string;
    username: string;
    email: string;
    profileImageUrl: string;
    coverImageUrl: string;
}

export function TestCreateUser (){

    const [formData, setFormData] = useState<User>({
        name:"",
        username:"",
        email:"",
        profileImageUrl:"",
        coverImageUrl:""
    });

    // const userForm = () => {
    //     const { register, handleSubmit, formState: { errors }} = useForm();

    //     const onSubmit = (data) => {
    //         console.log(data);
    //     }
    // }
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void =>{
        const {name,value}  = event.target ;
        setFormData({...formData,[name]:value,});
    }

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>):void =>{
        event.preventDefault();
        console.log(formData);
    }
  
    return(
        <div className="createForm">
             <form onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}required/>
                </div>
                <div className="field">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" minLength={5} maxLength={10} pattern="[a-z]{5,10}" value={formData.username} onChange={handleChange} required />
                </div>
                <div className="field">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
                </div>
                <div className="field">
                    <label htmlFor="profileImageUrl">ProfileImageUrl:</label>
                    <input type="url" id="profileImageUrl" name="profileImageUrl" value={formData.profileImageUrl} onChange={handleChange} required/>
                </div>
                <div className="field">
                    <label htmlFor="coverImageUrl">CoverImageUrl:</label>
                    <input type="url" id="coverImageUrl" name="coverImageUrl" value={formData.coverImageUrl} onChange={handleChange} required/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}