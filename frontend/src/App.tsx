import { Posts } from './components/Posts';
import { UserDetails } from './components/UserDetails';
import { Users } from './components/Users';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import {CreateUser} from './components/CreateUser';
import './App.scss'

function App() {
  return (
      <div className="container">
        <h1>myFace React App</h1>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Posts />}/>
            <Route path="/users" element={<Users />}/>
            <Route path="/users/:Id" element={<UserDetails />}/>
            <Route path="/createuser" element={<CreateUser />}/>
            <Route path="/posts" element={<Posts />}/>
          </Routes>
        </Router>
      </div>
  )
}

export default App;
