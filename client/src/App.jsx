import './app.scss'
import React, { useContext } from "react"
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import { Toaster } from 'sonner';



const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Toaster richColors position="top-right" fontSize="16px"/>
      <div className="container">
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/login"/>} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/"/>} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>} />
          {/* {
            user && (
              <>
          <Route path="/movies" element={<Home type="movie"/>} />
          <Route path="/series" element={<Home type="series"/>} />
          <Route path="/watch" element={<Watch/>} />
          </>
        )
      } */}
      {/* Protected routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute user={user}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute user={user}>
                <Home type="movie" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/series"
            element={
              <ProtectedRoute user={user}>
                <Home type="series" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/watch"
            element={
              <ProtectedRoute user={user}>
                <Watch />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to={user ? "/" : "/login"} replace />} />

        </Routes>
      </div>
    </Router>
  )
};

export default App;