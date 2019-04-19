import Home from "views/Home/Home.jsx";
import Login from "views/Login/Login.jsx"

var indexRoutes = [
  { path: "/login", name: "Home", component: Login },
  { path: "/", name: "Home", component: Home }
];

export default indexRoutes;