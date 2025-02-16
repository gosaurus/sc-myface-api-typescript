import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './Forms.scss';

interface User {
    name: string;
    username: string;
    email: string;
    coverImageUrl: string;
    profileImageUrl: string;
}

  export const CreateUser = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formData, setFormData] = useState<User>({
        name:"",
        username:"",
        email:"",
        profileImageUrl:"",
        coverImageUrl:""
    });

   
     // useEffect(() => {
        const onSubmit = (data:object) => {
            console.log('inside submit');
            console.log(data);
            const requestOptions = {
                method: 'POST',
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({data })
            };
            fetch('http://localhost:3001/users/create', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        }    
   // }, [])
    

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void =>{
        const {name,value}  = event.target ;
        setFormData({...formData,[name]:value,});
    }

    /*const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>):void =>{
        event.preventDefault();
        console.log(formData);
    }*/
    return (
        <div className="createUserForm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                    <label htmlFor="name">Name:</label>
                    <input id="name"  type="text" placeholder="Firstname Lastname" {...register('name', { required: true })} onChange={handleChange}/>
                </div>
                <div className="field">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" placeholder="username" minLength={5} maxLength={10} {...register('username', { required: true, pattern:/[a-z]/ })} onChange={handleChange}/>
                    <br/><span className="usernameRules">Enter a lowercase username between 5-10 characters long.</span>
                </div>
                <div className="field">
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" placeholder="email@domain.com" {...register('email', { required: true })} onChange={handleChange}/>
                </div>
                <div className="field">
                    <label htmlFor="profileImageUrl">Profile Image Url:</label>
                    <input type="url" id="profileImageUrl" placeholder="url to myProfile.jpg" value={formData.profileImageUrl}  {...register('profileImageUrl', { required: true })}onChange={handleChange}/>
            </div>
            <div className="field">
                <label htmlFor="coverImageUrl">Cover Image Url:</label>
                <input type="url" id="coverImageUrl" placeholder="url to myCoverImage.jpg" value={formData.coverImageUrl}  {...register('coverImageUrl', { required: true })} onChange={handleChange}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    );
  }