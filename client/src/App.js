import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "./actions/userActions";

//COMPONENTS
import Header from "./components/Nav/Header";
import UserRoute from "./components/Routes/UserRoute";
import { auth } from "./firebase";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import RegisterComplete from "./pages/auth/RegisterComplete";
import Home from "./pages/Home";
import History from "./pages/users/History";

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
        <UserRoute exact path="/user/history" component={History} />
        <Route exact path="/forgot/password" component={ForgotPassword} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/complete" component={RegisterComplete} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
