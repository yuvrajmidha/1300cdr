
import React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import AppLayout from '../layouts/app';
import AuthLayout from '../layouts/auth';
import Invoice from './invoice/invoice';
function Index() {
    return (
      <Switch>
          <Route path="/app">
            <AppLayout />
          </Route>
          <Route path="/invoice">
            <Invoice />
          </Route>
          <Route path="/auth">
            <AuthLayout />
          </Route>
          <Redirect to="/app"></Redirect>
      </Switch>
      
    )
}

export default Index
