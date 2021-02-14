import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "./actions/userActions";

//COMPONENTS
import Header from "./components/Nav/Header";
import AdminRoute from "./components/Routes/AdminRoute";
import UserRoute from "./components/Routes/UserRoute";
// import { auth } from "./firebase";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CategoryCreate from "./pages/admin/category/CategoryCreate";
import CategoryUpdate from "./pages/admin/category/CategoryUpdate";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import RegisterComplete from "./pages/auth/RegisterComplete";
import Home from "./pages/Home";
import Password from "./pages/users/Password";
import UserDashboard from "./pages/users/UserDashboard";
import Wishlist from "./pages/users/Wishlist";

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(async (user) => {
  //     if (user) {
  //       const idTokenResult = await user.getIdTokenResult();

  //       // dispatch the action
  //       dispatch(
  //         loginUser({
  //           email: user.email,
  //           token: idTokenResult.token,
  //         })
  //       );
  //     }
  //   });

  // clean up
  //   return () => unsubscribe();
  // }, [dispatch]);

  return (
    <Router>
      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path="/login" component={Login} />
        <UserRoute exact path="/user/dashboard" component={UserDashboard} />
        <UserRoute exact path="/user/password" component={Password} />
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute exact path="/admin/category" component={CategoryCreate} />
        <AdminRoute exact path="/admin/category/:slug" component={CategoryUpdate} />
        <UserRoute exact path="/user/wishlist" component={Wishlist} />
        <Route exact path="/forgot/password" component={ForgotPassword} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/complete" component={RegisterComplete} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
