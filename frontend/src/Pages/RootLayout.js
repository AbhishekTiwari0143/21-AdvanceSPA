import { Fragment } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  const navigate = useNavigation();
  return (
    <Fragment>
      <MainNavigation />
      {navigate.state === "loading" && <p>Loading...</p>}
      <Outlet />
    </Fragment>
  );
};
export default RootLayout;
