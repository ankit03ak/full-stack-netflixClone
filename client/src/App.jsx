import './app.scss'
import React, { useContext } from "react"
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from './context/AuthContext';


const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/login"/>} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/"/>} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>} />
          {
            user && (
              <>
          <Route path="/movies" element={<Home type="movie"/>} />
          <Route path="/series" element={<Home type="series"/>} />
          <Route path="/watch" element={<Watch/>} />
          </>
        )
      }
        </Routes>
      </div>
    </Router>
  )
};

export default App;