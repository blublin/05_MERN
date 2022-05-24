import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import "../css/LR.css"

const LoginReg = () => {
    // Add useEffect to logic whether or not to navigate redirect to Home
  return (
    <div className="cssReset theBackground">
        <Outlet />
    </div>
  )
}

export default LoginReg