import '../Navpage.scss';
import { Link } from 'react-router-dom';

export function Navpage () {
    return (
        <div className="container"> 
            <nav>
                <ul>
                    <li><Link to="/users">Users</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                </ul>
            </nav>
        </div>
    );
}