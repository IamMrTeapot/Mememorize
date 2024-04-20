import { Route, Routes } from "react-router-dom";
import { getPagesData } from "./getPagesData";

const Router = ({
  isAuthenticated,
  updateAuthStatus,
}: {
  isAuthenticated: boolean;
  updateAuthStatus: (authStatus: boolean) => void;
}) => {
  const pagesData = getPagesData({ isAuthenticated, updateAuthStatus });
  const pageRoutes = pagesData.map((pageRoute, index) => {
    return <Route key={index} {...pageRoute} />;
  });

  return <Routes>{pageRoutes}</Routes>;
};

export default Router;
