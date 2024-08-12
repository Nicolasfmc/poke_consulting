import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isUserLogged } from '../../utils/functions'
import { toast } from 'react-toastify'

const PrivateRoute = () => {
  const isAuthenticated = isUserLogged()

  if (!isAuthenticated) toast.error('Usuario não autenticado!')

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute
