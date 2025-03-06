import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard"; 
import classes from "./Product.module.css";
import Loader from "../Loader/Loader";


function Product() {
  const [products, setProducts] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
  
        axios
          .get("https://fakestoreapi.com/products")

          .then((res) => {
            setProducts(res.data)
            setIsLoading(false)
          })
          .catch((err) => {
            console.log(err)
            isLoading(false)
          });
  }, []);

  return (
    <>
      {isLoading?(
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {products?.map((singleProduct) => {
            return (
              <ProductCard
               product={singleProduct}
                key={singleProduct.id} 
                renderAdd={true}
                />
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product;










// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "./ProductCard";
// import classes from "./Product.module.css";
// import Loader from "../Loader/Loader";

// function Product() {
//   const [products, setProducts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true); // Initial loading state should be true

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => {
//         setProducts(res.data);
//         setIsLoading(false); // Change state here instead of directly
//       })
//       .catch((err) => {
//         console.log(err);
//         setIsLoading(false); // Change state in case of error too
//       });
//   }, []);

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <section className={classes.products_container}>
//           {products?.map((singleProduct) => {
//             return (
//               <ProductCard product={singleProduct} key={singleProduct.id} />
//             );
//           })}
//         </section>
//       )}
//     </>
//   );
// }

// export default Product;

