import { Posts } from './components/Posts';
import { UserDetails } from './components/UserDetails';
import { Users } from './components/Users';
import { BrowserRouter as Router, Routes, Route,/* Link*/ } from 'react-router-dom';

import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Users />}/>
          <Route path="/users" element={<Users />}/>
          <Route path="/posts" element={<Posts />}/>
          <Route path="/users/:userId" element={<UserDetails userId ={58}/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
