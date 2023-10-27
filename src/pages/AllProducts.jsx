
/* eslint-disable react/prop-types */

import Footer from "../componets/HomePages/Footer/Footer";
import Navbar from "../componets/HomePages/Navbar/Navbar";
import Products from "../componets/Products/Products";
import { useGlobalContext } from "../Context";

export default function AllProducts() {
  const { goToaddCard } = useGlobalContext();
  return (
    <div>
      <Navbar/>
      <Products goToaddCard={goToaddCard}/>
      <Footer/>
    </div>
  )
}