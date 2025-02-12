import { Posts } from './components/Posts';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/posts" element={<Posts />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
