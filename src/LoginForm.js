import React, { useState } from 'react';
import Alert from '@mui/material/Alert';

function LoginForm({ Login, loginError }) {
    const [details, setDetails] = useState({email: "", password:""});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <h2>Iniciar Sesión</h2>
            <div>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    onChange = {e => setDetails({...details, email: e.target.value})}
                    value = {details.email}
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Contraseña"
                    onChange = {e => setDetails({...details, password: e.target.value})}
                    value = {details.password}
                />
            </div>
            <input type="submit" value="Iniciar sesión" />
            {(loginError !== "") ? 
                ( <Alert variant="outlined" severity="error" >{loginError}</Alert> ) 
                : ""
            }
        </form>
    )
}

export default LoginForm
