import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/Home";
import Room from "./components/Room";
import Sigin from "./components/Sign";
import Signup from "./components/Signup";
import HomePage from "./components/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/Home",
    element: <Home></Home>,
  },
  {
    path: "/room/:roomId",
    element: <Room></Room>,
  },
  {
    path: "/Sigin",
    element: <Sigin></Sigin>,
  },
  {
    path: "/Signup",
    element: <Signup></Signup>,
  },

]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

