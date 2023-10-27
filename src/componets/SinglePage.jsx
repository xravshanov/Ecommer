/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom"
import '../App.css';
import { useGlobalContext } from "../Context";
import Navbar from "./HomePages/Navbar/Navbar";
import Footer from "./HomePages/Footer/Footer";
export default function SinglePage() {
  const {product, addToBasket} = useGlobalContext()
    const {id} = useParams();
    let singleProduct = product.find((item) => item.id === id)
  return (
    <div className="main">
        <Navbar/>
        <div className="singleproduct">
        <img src={singleProduct.img} alt="singleproduct" />
        <h1>Made in UZB</h1>
        <h2>{singleProduct.title}</h2>
        <h3>1kg = {singleProduct.price}uzs</h3>
        <button onClick={() => addToBasket(id)}>Basket</button>
        </div>
        <Footer/>
    </div>
  )
}
