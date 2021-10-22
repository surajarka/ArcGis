import React from 'react';

const Home = React.lazy(() => import('../views/components/home/Home'));

const routes = [
	{ path: '/', exact: true, component: Home },
	{ path: '/home', exact:true, component: Home }
]


export default routes

