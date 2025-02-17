import './Navigation.scss';
import { Link } from 'react-router-dom';

export function Navigation () {
    return (
        <div className="container"> 
            <nav>
                <ul>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                    <li><Link to="/createuser">Create user</Link></li>
                </ul>
            </nav>
        </div>
    );
}