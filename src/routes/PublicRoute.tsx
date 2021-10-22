import React from 'react';
import { Route } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest } : any) => {
	return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default PublicRoute;
