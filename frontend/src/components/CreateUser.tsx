import { userState } from 'react';

export function CreateUser (){

    const [name, setName] = useState<string>("");

    const [username, setUsername] = useState<string>("");

    const [, setUsername] = useState<string>("");

    return(
        <div>
             <form method="post" action="/users/create">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required/>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" pattern="[a-z]" required />
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>
                <label for="profileImageUrl">ProfileImageUrl:</label>
            <input type="url" id="profileImageUrl" name="profileImageUrl" required/>
        <label for="coverImageUrl">CoverImageUrl:</label>
                <input type="url" id="coverImageUrl" name="coverImageUrl" required/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}