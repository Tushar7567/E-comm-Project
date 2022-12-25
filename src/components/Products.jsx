import { useEffect, useState } from "react";
import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);



  const getProducts = async () => {
    try {
      const res = await axios.get(
        cat
          ? `https://e-comm-backend-meks.onrender.com/api/products?category=${cat}`
          : "https://e-comm-backend-meks.onrender.com/api/products"
      );
      setProducts(res.data);
      console.log(res.data)
    } catch (err) {console.log(err)}
  };

  useEffect(() => {
    
    getProducts();
  }, []);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  // useEffect(() => {
  //   if (sort === "newest") {
  //     setFilteredProducts((prev) =>
  //       [...prev].sort((a, b) => a.createdAt - b.createdAt)
  //     );
  //   } else if (sort === "asc") {
  //     setFilteredProducts((prev) =>
  //       [...prev].sort((a, b) => a.price - b.price)
  //     );
  //   } else {
  //     setFilteredProducts((prev) =>
  //       [...prev].sort((a, b) => b.price - a.price)
  //     );
  //   }
  // }, [sort]);

  return (
    <Container>
      {/* {console.log( filteredProducts, 'Products', products)} */}
      {cat
        ? filteredProducts.map((item) => { return(<Product item={item} key={item._id} />)})
        : products
            // .slice(0, 8)
            .map((item) => {return(<Product item={item} key={item._id} />)})
      }
    </Container>
  );
};

export default Products;
