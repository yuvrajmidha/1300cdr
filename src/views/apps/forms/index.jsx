import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import FormDetails from './formDetails';
import FormsList from './forms'
import FormSettings from './settings';

const Forms = props => {
  const { match } = props
	return (
		<Switch>
			<Route path={`${match.url}/form/:name`} component={FormDetails} />
			<Route path={`${match.url}/list`} component={FormsList} />
			<Route path={`${match.url}/settings/:name`} component={FormSettings} />
			<Redirect to={`${match.url}/list`} />
		</Switch>
	)
}

export default Forms
