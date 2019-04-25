import React from 'react';


const Home = React.lazy(() => import('views/Home/Home.jsx'));
const Login = React.lazy(() => import('views/Login/Login.jsx'));


var indexRoutes = [
  { path: "/login", name: "Home", component: Login },
  { path: "/", name: "Home", component: Home }
];

export default indexRoutes;