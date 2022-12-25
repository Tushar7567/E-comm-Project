import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
  useNavigate,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate(); 
  //  <Route path="/" element={<Home />} />
  return (
    // <Router>
    
      <Routes>
        <Route exact path="/" element={<Home />} />
        
        <Route path="/products/:category" element={<ProductList />} />
         
        <Route path="/product/:id" element={<Product />} />
        
        <Route path="/cart" element={<Cart />} />
         
        <Route path="/success" element={<Success />} />
       
        {/* <Route path="/login" element={ <Login />}  /> */}
        <Route path="/login" element={user ?  navigate('/') : <Login />} />

        {/* <Route path="/register" element={ <Register />}  /> */}
        <Route path="/register" element={user ?  navigate('/') : <Register />} />

        {/* <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}  /> */}
            
          {/* // {user ? <Home /> : <Register />} */}

      </Routes>
    // </Router>
  );
};

export default App;
