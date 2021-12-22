import React, { useState } from 'react';
import './App.css';
import { Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function Profile({ Logout, EditUser, user, user1, user2 }) {
  const [editMode, setEditMode] = useState(false);
  const [newDetails, setnewDetails] = useState({ id:user.id, email: user.email, password: user.password, firstname: user.firstname, lastname: user.lastname, dni: user.dni, imagen: user.imagen });
  const [updateError, setUpdateError] = useState("")

  const submitHandler = e => {
    e.preventDefault();
    if(user.email === user1.email && newDetails.email === user2.email){
      setUpdateError("Ese email pertenece a otro usuario registrado. Intente con otro")
    } else if(user.email === user2.email && newDetails.email === user1.email){
      setUpdateError("Ese email pertenece a otro usuario registrado. Intente con otro")
    }else{
      EditUser(newDetails);
      setEditMode(false);
    }
  }

  const onCancelClick = () =>{
    setUpdateError("");
    setEditMode(false);
  }

  return (
      <div>
        {!editMode ? (
            
            <Container fixed className="form-container"
              sx={{
                  py: "15vh",
                  borderRadius: 3,
              }}
            >
              <Typography 
                variant="h3" 
                sx={{ 
                  mx: "auto", 
                  textAlign: "center", 
                  color: "#3F51B5" 
                }} 
              >
                Tu perfil
              </Typography>
              <Box sx={{ textAlign: "center" }}>
                <Box>
                  <p>Email: {user.email}</p>
                  <p>Nombre: {user.firstname}</p>
                  <p>Apellido: {user.lastname}</p>
                  <p>DNI: {user.dni}</p>
                </Box>

                <Box>
                  <Button variant="contained" size="small" onClick={() => setEditMode(true)} sx={{mr: 1, width: 150}}>Editar datos</Button>
                  <Button variant="contained" size="small" onClick={Logout} sx={{ml: 1, width: 150}}>Cerrar sesión</Button>
                </Box>
              </Box>
            </Container>
            
            ) : (

              <Container fixed className="form-container"
                sx={{
                    py: "15vh",
                    borderRadius: 3,
                }}
              >
                <Box sx={{ mx:"auto", textAlign: "center" }}>
                  <form onSubmit={submitHandler}>
                    <Box>
                      <Typography 
                        variant="h3"
                        sx={{ 
                          mx: "auto", 
                          pb: 3,
                          textAlign: "center", 
                          color: "#3F51B5" 
                        }} 
                      >
                        Editando tu perfil
                      </Typography>
                      
                      <Grid container spacing={2} sx={{ width:"80%", mx:"auto", mb:"3%" }}>
                        <Grid item xs={4}>
                          <Box className="profile-input-field">
                            <Box>
                              <TextField
                                type="text"
                                variant="standard"
                                size= "small"
                                name="firstname"
                                onChange = {e => setnewDetails({...newDetails, firstname: e.target.value})}
                                placeholder = {user.firstname}
                              />
                            </Box>
                            <Box>
                              <label htmlFor="firstname">Nombre</label>
                            </Box>
                          </Box>
                        </Grid>

                        <Grid item xs={4}>
                          <Box className="profile-input-field">
                            <Box>
                              <TextField 
                                  type="text" 
                                  variant="standard"
                                  size= "small"
                                  name="lastname" 
                                  onChange = {e => setnewDetails({...newDetails, lastname: e.target.value})}
                                  placeholder = {user.lastname}
                              />
                            </Box>
                            <Box>
                              <label htmlFor="lastname">Apellido</label>
                            </Box>
                          </Box>
                        </Grid>

                        <Grid item xs={4}>
                          <Box className="profile-input-field">
                            <Box>
                              <TextField 
                                  type="number" 
                                  variant="standard"
                                  size= "small"
                                  name="dni" 
                                  onChange = {e => setnewDetails({...newDetails, dni: e.target.value})}
                                  placeholder = {user.dni}
                              />
                            </Box>
                            <Box>
                              <label htmlFor="dni">DNI</label>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>

                      <Box className="profile-input-field" >
                        <Box>
                          <TextField 
                              type="email" 
                              variant="standard"
                              size= "small"
                              name="email" 
                              onChange = {e => setnewDetails({...newDetails, email: e.target.value})}
                              placeholder = {user.email}
                              sx={{ width: "70%" }}
                          />
                        </Box>
                        <Box>
                          <label htmlFor="email">Email</label>
                        </Box>
                      </Box>
                      
                      <Box>
                        <Button variant="contained" size="small" type="submit" sx={{ml: 1, width: 170}} >Guardar Cambios</Button>
                        <Button variant="contained" size="small" onClick={ onCancelClick } sx={{ml: 1, width: 170}} >Cancelar</Button>
                      </Box>
                    </Box>
                  </form>
                </Box>

                {updateError !== "" ? <Alert variant="outlined" severity="error" >{updateError}</Alert> : ""}
              </Container> 
            
            )
          }
      </div>
  )
}

export default Profile;
