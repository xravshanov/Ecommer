/* eslint-disable react/prop-types */
import { useGlobalContext } from "../Context";
import NewProduct from "../pages/NewProduct";
// import NewProduct from "../pages/NewProduct";
import Footer from "./HomePages/Footer/Footer";
import Navbar from "./HomePages/Navbar/Navbar";
// import '../App.css'
import './Products/Products.css';



export default function AddCard() {
  const {
    name,
    setName,
    price,
    setPrice,
    handeSubmit2,
    product,
    removeItem
  } = useGlobalContext()
  return (
    <div>
        <Navbar/>
        <div className="container">
        <div className="main" style={{paddingTop: "300px"}}>
        <form  style={{paddingLeft: "116px",paddingRight:"116px"}} action="" onSubmit={handeSubmit2}>
            <input type="text" name="title" value={name} onChange={(e) => setName(e.target.value)}  id="" />
            <br />
            <input type="text" name="title" value={price} onChange={(e) => setPrice(e.target.value)}  id="" />
            <br />
            <button>Add</button>
        </form>
        <NewProduct product={product} removeItem={removeItem}/>
        </div>
        </div>
        <Footer/>
    </div>
  )
}
