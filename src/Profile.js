import React, { useState } from 'react';
import Alert from '@mui/material/Alert'

function Profile({ Logout, EditUser, user, user1, user2 }) {
  const [editMode, setEditMode] = useState(false);
  const [newDetails, setNewDetails] = useState({ id:user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, dni: user.dni });
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

    return (
        <div>
          {!editMode ? (
              
              <div className="profile">
                <h2>Tu perfil</h2>
                <p>Email: {user.email}</p>
                <p>Nombre: {user.firstName}</p>
                <p>Apellido: {user.lastName}</p>
                <p>DNI: {user.dni}</p>
                <button onClick={() => setEditMode(true)}>Editar datos personales</button>
                <button onClick={Logout}>Cerrar sesión</button>
              </div>
              
              ) : (

                <div className="editProfile">
                  <form onSubmit={submitHandler}>
                    <div>
                      <label htmlFor="email">Email</label>
                      <input 
                          type="email" 
                          name="email" 
                          onChange = {e => setNewDetails({...newDetails, email: e.target.value})}
                          placeholder = {user.email}
                      />
                    </div>
                    <div>
                      <label htmlFor="firstName">Nombre</label>
                      <input
                        type="text"
                        name="firstName"
                        onChange = {e => setNewDetails({...newDetails, firstName: e.target.value})}
                        placeholder = {user.firstName}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName">Apellido</label>
                      <input 
                          type="text" 
                          name="lastName" 
                          onChange = {e => setNewDetails({...newDetails, lastName: e.target.value})}
                          placeholder = {user.lastName}
                      />
                    </div>
                    <div>
                      <label htmlFor="dni">DNI</label>
                      <input 
                          type="number" 
                          name="dni" 
                          onChange = {e => setNewDetails({...newDetails, dni: e.target.value})}
                          placeholder = {user.dni}
                      />
                    </div>
                    <input type="submit" value="Guardar cambios" />
                  </form>
                  {updateError !== "" ? <Alert variant="outlined" severity="error" >{updateError}</Alert> : ""}
                </div> 
                
              )
            }
        </div>
    )
}

export default Profile;
