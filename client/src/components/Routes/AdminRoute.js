import React, { useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../Loader";
import LoadingToRedirect from "./LoadingToRedirect";

const AdminRoute = ({ history, children, ...rest }) => {
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (!userInfo && userInfo.role !== "admin") {
      history.push("/");
    }
  }, [userInfo, history]);

  return userInfo && userInfo.role === 'admin' ? (
    <Route {...rest} />
  ) : (
    <LoadingToRedirect />
  );
};

export default AdminRoute;