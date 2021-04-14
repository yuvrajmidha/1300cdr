import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Billing from "./billing";
import Dashboard from "./dashboard";
import DropstocksInventory from "./dropstocksInventory";
import Inventory from "./inventory";
import Orders from "./orders";
import Products from "./products";
import Settings from "./settings";
import Shipments from "./shipments";
import Support from "./support";

export const AppViews = ({match}) => {
  return (
    <>
    <Suspense fallback={<>Loading...</>}>
      <Switch>
        <Route path={`${match.url}/dashboard`} component={Dashboard} />
        <Route path={`${match.url}/orders`} component={Orders} />
        <Route path={`${match.url}/shipments`} component={Shipments} />
        <Route path={`${match.url}/billing/:id`} component={Billing} />
        <Route path={`${match.url}/products`} component={Products} />
        <Route path={`${match.url}/inventory`} component={Inventory} />
        <Route path={`${match.url}/support`} component={Support} />
        <Route path={`${match.url}/dropstocks-inventory`} component={DropstocksInventory} />
        <Route path={`${match.url}/settings`} component={Settings} />
        <Redirect to={`${match.url}/dashboard`}></Redirect>
      </Switch>
    </Suspense>
    </>
  )
}

export default AppViews;