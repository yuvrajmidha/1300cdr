import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Billing from "./billing";
import Dashboard from "./dashboard";

export const AppViews = ({match}) => {
  return (
    <>
    <Suspense fallback={<>Loading...</>}>
      <Switch>
        <Route path={`${match.url}/dashboard`} component={Dashboard} />
        <Route path={`${match.url}/billing/:number`} component={Billing} />
        <Redirect to={`${match.url}/dashboard`}></Redirect>
      </Switch>
    </Suspense>
    </>
  )
}

export default AppViews;