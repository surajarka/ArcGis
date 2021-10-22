import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Map from "@arcgis/core/Map";

import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap add

import PublicRoute from './routes/PublicRoute';

const TheLayout = React.lazy(() => import('./views/layouts/TheLayout'));


const loading = (
	<div className="pt-3 text-center">
		<div className="sk-spinner sk-spinner-pulse"></div>
	</div>
);


function App() {
	return (
		<Router>
			<React.Suspense fallback={loading}>
				<Switch>
						<PublicRoute path="/" exact component={(props:any) => <TheLayout {...props} />} />
						<PublicRoute path="/home" exact name="Home" component={(props:any) => <TheLayout {...props} />} />
						<Route component={() => (<div>404 Not found </div>)} />
				</Switch>
			</React.Suspense>
		</Router>
	);
}

export default App;
