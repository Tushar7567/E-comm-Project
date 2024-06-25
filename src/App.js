import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { Suspense, useEffect } from "react";
import Layout from "./Layout/Layout";
import PrivateRoute from "./Route/PrivateRoute";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const location = useLocation();
  const Home = React.lazy(() => import("./pages/Home"));
  const ProductList = React.lazy(() => import("./pages/ProductList"));
  const Product = React.lazy(() => import("./pages/Product"));
  const Register = React.lazy(() => import("./pages/Register"));
  const Login = React.lazy(() => import("./pages/Login"));
  const Cart = React.lazy(() => import("./pages/Cart"));
  const Success = React.lazy(() => import("./pages/Success"));

  useEffect(() => {
    if (location.pathname === "/") {
      user ? navigate("/home") : navigate("/login");
    }
  }, [location]);

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Layout user={user}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={<PrivateRoute user={user} element={<Home />} />}
          />
          <Route
            path="/products/:category"
            element={<PrivateRoute user={user} element={<ProductList />} />}
          />
          <Route
            path="/product/:id"
            element={<PrivateRoute user={user} element={<Product />} />}
          />
          <Route
            path="/cart"
            element={<PrivateRoute user={user} element={<Cart />} />}
          />
          <Route
            path="/success"
            element={<PrivateRoute user={user} element={<Success />} />}
          />
          {/* <Route
            path="/"
            element={<Navigate to={user ? "/home" : "/login"} />}
          /> */}
        </Routes>
      </Layout>
    </Suspense>
  );
};

export default App;
