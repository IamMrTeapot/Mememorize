import { RouteProps } from "react-router-dom";
import Redirect from "./Redirect";
import HomeApp from "../pages/Home/HomeApp";
import LoginApp from "../pages/Login/LoginApp";
import RegisterApp from "../pages/Register/RegisterApp";
import MemesApp from "../pages/Memes/MemesApp";
import MoreMemesApp from "../pages/MoreMemes/MoreMemesApp";

export const getPagesData = () =>
  [
    {
      path: "/",
      element: <Redirect to={"/home"} />,
    },
    {
      path: "/home",
      element: <HomeApp />,
    },
    {
      path: "/login",
      element: <LoginApp />,
    },
    {
      path: "/register",
      element: <RegisterApp />,
    },
    {
      path: "/memes",
      element: <MemesApp />,
    },
    {
      path: "/more-memes",
      element: <MoreMemesApp />,
    },
  ] as unknown as RouteProps[];
