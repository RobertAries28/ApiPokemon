import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
const Protected = () => {
    const user= useSelector(state=>state.user)
    // Aquí va la condición. Puede ser una condición de cualquier tipo. Lo que 
    // Importa es que valide si el usuario está loggeado o no
if(user !==""){
    return <Outlet />
} else { 
    return <Navigate to='/' />
}                  
}

export default Protected;
