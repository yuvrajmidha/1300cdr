import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../views/auth/Login'

export default function AuthLayout() {
  return (
    <Switch>
        <Route path="" component={Login} />
    </Switch>
  )
}
