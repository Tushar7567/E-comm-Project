// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useLocation } from "react-router";
// import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Success = () => {

  const navigate = useNavigate();

  // const location = useLocation();
  // //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  // const data = location.state.stripeData;
  // const cart = location.state.cart;
  // const currentUser = useSelector((state) => state.user.currentUser);
  // const [orderId, setOrderId] = useState(null);

  // useEffect(() => {
  //   const createOrder = async () => {
  //     try {
  //       const res = await userRequest.post("/orders", {
  //         userId: currentUser._id,
  //         products: cart.products.map((item) => ({
  //           productId: item._id,
  //           quantity: item._quantity,
  //         })),
  //         amount: cart.total,
  //         address: data.billing_details.address,
  //       });
  //       setOrderId(res.data._id);
  //     } catch(err) {console.log(err)}
  //   };
  //   data && createOrder();
  // }, [cart, data, currentUser]);

  return (
    // <div
    //   style={{
    //     height: "100vh",
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    //   {orderId
    //     ? `Order has been created successfully. Your order number is ${orderId}`
    //     : `Successfull. Your order is being prepared...`}
    //   <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
    // </div>

   <>
   <Navbar />
     <div style={{margin: "auto", display: "flex", flexDirection: "column"}}>
      <button style={{fontSize: "30px",backgroundColor: "green", color: "white"}}>Payment Successful</button>
      <button onClick={()=>{navigate("/home")}}>Back to home</button>
    
    </div>
    <Footer />
   </>


  );
};

export default Success;
