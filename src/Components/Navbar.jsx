import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import store from "../store";
import { useSelector } from "react-redux";

const Button = styled.button`
  padding: 10px 20px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1976d2;
  }
`;

const NavbarContainer = styled.nav`
  background-color: #0F2943;
  padding: 10px;
  border-bottom: 1px solid #fff;
`;

const LogoImage = styled.img`
  width: 150px;
  height: 40px;
`;


function loginStatusSelector(state) {
  return state.login;
}

function getUserNameSelector(state) {
  return state.name;
}

export default function Navbar() {
  const loginStatus = useSelector(loginStatusSelector);
  const useName = useSelector(getUserNameSelector);
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    store.dispatch({ type: "LOGOUT" });
    // navigate("/login");
  };
  return (
    <NavbarContainer className="navbar navbar-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <LogoImage
            src="https://dyvmwwyqozzzb.cloudfront.net/main/Artmate-logo.webp"
            alt=""/>
        </Link>
        <div className="navbar-dropdown">
          {loginStatus && <span style={{ color: 'white', marginRight: '10px' }}>{useName}</span>}
          {loginStatus && <Button onClick={handleLogout}>Logout</Button>}
          {!loginStatus && <Button onClick={handleSignIn}>Sign In</Button>}
      </div>
      </div>
    </NavbarContainer>
  );
}



