import React, { useState } from 'react';
import './App.css';
import { Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function LoginForm({ Login, loginError }) {
    const [details, setDetails] = useState({email: "", password:""});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
        <Container fixed className="form-container"
            sx={{
                py: "15vh",
                borderRadius: 3,
            }}
        >
            <form onSubmit={submitHandler} id="login-form">
                <Typography variant="h3" sx={{ mx: "auto", textAlign: "center", color: "#3F51B5" }} >Iniciar Sesión</Typography>
                <Box className="input-field-group"
                    sx={{
                        mx: "auto",
                        textAlign: "center",
                    }}
                >
                    <Box className="input-field">
                        <TextField
                            type="email" 
                            name="email" 
                            placeholder="Email"
                            size="small"
                            variant="standard"
                            onChange = {e => setDetails({...details, email: e.target.value})}
                            value = {details.email}
                        />
                    </Box>
                    <Box className="input-field">
                        <TextField
                            type="password" 
                            name="password" 
                            placeholder="Contraseña"
                            size="small"
                            variant="standard"
                            onChange = {e => setDetails({...details, password: e.target.value})}
                            value = {details.password}
                        />
                    </Box>
                    <Box>
                        <Button type="submit" variant="contained" size="small" >Iniciar sesión</Button>
                    </Box>
                </Box>
                {(loginError !== "") ? 
                    ( <Alert severity="error" sx={{ width: "50%", mx: "auto" }} >{loginError}</Alert> ) 
                    : <div></div>
                }
            </form>
        </Container>
    )
}

export default LoginForm
