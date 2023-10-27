
/* eslint-disable react/prop-types */
import { useGlobalContext } from "../Context";
import Footer from '../componets/HomePages/Footer/Footer';
import Navbar from "../componets/HomePages/Navbar/Navbar";
import '../App.css';

export default function Basket() {
  const { basket , count } = useGlobalContext()
  return (
    <div>
      <Navbar />
          <div className="container">
          <div className="basket_text main">
            <h4>Корзина</h4>
          </div>
          </div>
          <div className="basket main">
        {basket.map((item) => {
          const { id, title, price, img } = item;
          return (
            <div key={id} className="basket_items">
              <img className="basket_img" src={img} alt="img" />
              <h1>{title}</h1><br />
              <h3>{price} uzs</h3>
              <h4> {count}</h4>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
