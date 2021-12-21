import React, { useState } from 'react'
import './App.css';
import LoginForm from './LoginForm';
import Profile from './Profile';

function App() {
  const [user1, setUser1] = useState({
    id: 1,
    email: 'test1@gmail.com',
    password: 'contrasena1',
    firstName: 'Carlos',
    lastName: 'Flores',
    dni: '22456456'
  });

  const [user2, setUser2] = useState({
    id: 2,
    email: 'test2@gmail.com',
    password: 'contrasena2',
    firstName: 'Anibal',
    lastName: 'Caseres',
    dni: '33554466'
  })

  const [user, setUser] = useState({id: "", email: "", password:"", firstName:"", lastName:"", dni:"" });
  const [loginError, setLoginError] = useState("");

  const Login = details => {
    console.log(details);
    if( details.email === user1.email && details.password === user1.password ){
      console.log("Logged in");
      setUser(user1);
      setLoginError("");
    } else if ( details.email === user2.email && details.password === user2.password ){
      setUser(user2);
      setLoginError("");
    } else {
      console.log("Not logged");
      setLoginError("Usuario o contraseña incorrectos");
    }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({ name:"", email:"" });
  }

  const EditUser = (newDetails) => {
    console.log(newDetails)
    if(newDetails.id === user1.id){
      setUser1(newDetails);
      setUser(newDetails);
    } else if(newDetails.id === user2.id){
      setUser2(newDetails);
      setUser(newDetails);
    }
  }

  return (
    <div>
      {(user.email !== "") ? (
        <Profile Logout={Logout} EditUser={EditUser} user={user} user1={user1} user2={user2} />
      ) : <LoginForm Login={Login} loginError={loginError} />}
    </div>
  );
}

export default App;
