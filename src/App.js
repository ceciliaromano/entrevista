import React, { useState, useEffect } from 'react';
import { getUser } from './utils';
import './App.css';
import LoginForm from './LoginForm';
import Profile from './Profile';
import { updateUser } from './utils';
import Box from '@mui/material/Box';

function App() {

  const [user1, setUser1] = useState({id: "", email: "", password: "", firstname: "", lastname: "", dni: "", imagen: ""});
  const [user2, setUser2] = useState({id: "", email: "", password: "", firstname: "", lastname: "", dni: "", imagen: ""});
  
  useEffect(() => {
    getUser("1", setUser1);
    getUser("2", setUser2);
}, [])


  const [user, setUser] = useState({id: "", email: "", password:"", firstname:"", lastname:"", dni:"", imagen: "" });
  const [loginError, setLoginError] = useState("");

  const Login = details => {
    if( details.email === user1.email && details.password === user1.password ){
      setUser(user1);
      setLoginError("");
    } else if ( details.email === user2.email && details.password === user2.password ){
      setUser(user2);
      setLoginError("");
    } else if(details.email === "") {
      setLoginError("Por favor ingrese usuario y contraseña");
    } else{
      setLoginError("Usuario o contraseña incorrectos");
    }
  }

  const Logout = () => {
    setUser({ name:"", email:"" });
    getUser("1", setUser1);
    getUser("2", setUser2);
  }

  const EditUser = (newDetails) => {
    updateUser(newDetails);
    getUser(newDetails.id, setUser);
  }

  return (
    <Box id="main-container" sx={{mx:"auto"}}>
      {(user.email !== "") ? (
        <Profile Logout={Logout} EditUser={EditUser} user={user} user1={user1} user2={user2} />
      ) : <LoginForm Login={Login} loginError={loginError} />}
    </Box>
  );
}

export default App;
