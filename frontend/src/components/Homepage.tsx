import '../Homepage.scss';
import { Link } from 'react-router-dom';

export function Homepage () {
    return (
        <div className="container"> 
            <nav>
                <ul>
                    <li><Link to="/posts">Posts</Link></li>
                    <li><Link to="/users">Users</Link></li>
                </ul>
            </nav>
        </div>
    );
}