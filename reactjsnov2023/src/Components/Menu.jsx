import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

const Menu = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate()

  const route = useLocation()

  useEffect(() => {
    let myRole = sessionStorage.getItem("role");
    setRole(myRole);
  },[route.pathname]);

  const logout=()=>{
    sessionStorage.removeItem('role')
    alert('logout successfully')
    navigate('/login')
  }
  return (
    <div>
      <nav>
        <div className="nav-wrapper purple">
          <Link href="#" className="brand-logo">
            K O E N I G
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {role === "admin" || role === "guest" ? (
              <>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                {role === "admin" && (
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                )}
                <li>
                  <button className="orange darken-4 waves-effect btn btn-small" onClick={logout}>Logout</button>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
