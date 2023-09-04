import { useState } from "react";
import products from '../public/products';
import User from "./user";


export default function Home() {
   const [productsValue, updateProduct] = useState(products);  

  const addProduct = () => {
    updateProduct([
      ...productsValue,
      {
        id: 3,
        name: 'xyz'
      },
    ]);
  };
  return (
    <>
      <User></User>     
      
    </>
  )
}
