/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import './Products.css';
import image from '../../image/image8.png';
import { useGlobalContext } from "../../Context";
import { useNavigate } from "react-router-dom";


function Products({goToaddCard}) {
    const { addToBasket ,addToBasket1  } = useGlobalContext();
    const navigate = useNavigate();
  return (
    <div className='product'>
        <div className="container">
    <div className='thirty'>
        <div className='thirty-content'>
            <img className='thirty-img' src={image} alt="Left" />
            <h3 className='thirty-h3'>40$</h3>
            <p className='thirty-text'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
            <div className='thirty-thirty'><button className='thirty-btn' navigate='/basket' onClick={() => addToBasket1(id)}>В корзину</button></div>
        </div>
        <div className='thirty-content'>
            <img className='thirty-img' src={image} alt="Left" />
            <h3 className='thirty-h3'>40$</h3>
            <p className='thirty-text'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
            <div className='thirty-thirty'><button className='thirty-btn' onClick={() => addToBasket1(id)}>В корзину</button></div>
        </div>
        <div className='thirty-content'>
            <img className='thirty-img' src={image} alt="Left" />
            <h3 className='thirty-h3'>40$</h3>
            <p className='thirty-text'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
        <div className='thirty-thirty'><button className='thirty-btn' onClick={() => addToBasket1(id)}>В корзину</button></div>
        </div>
        <div className='thirty-content'>
            <img className='thirty-img' src={image} alt="Left" />
            <h3 className='thirty-h3'>40$</h3>
            <p className='thirty-text'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
            <div className='thirty-thirty'><button className='thirty-btn' onClick={() => addToBasket1(id)}>В корзину</button></div>
        </div>
            </div>
            <div className='thirty1'>
        <div className='thirty-content'>
                <img className='thirty-img' src={image} alt="Left" />
                <h3 className='thirty-h3'>40$</h3>
                <p className='thirty-text'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
            <div className='thirty-thirty'><button className='thirty-btn' onClick={() => addToBasket1(id)}>В корзину</button></div>
        </div>
        <div className='thirty-content'>
            <img className='thirty-img' src={image} alt="Left" />
            <h3 className='thirty-h3'>40$</h3>
            <p className='thirty-text'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
            <div className='thirty-thirty'><button className='thirty-btn' onClick={() => addToBasket1(id)}>В корзину</button></div>
        </div>
        <div className='thirty-content'>
            <img className='thirty-img' src={image} alt="Left" />
            <h3 className='thirty-h3'>40$</h3>
            <p className='thirty-text'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
        <div className='thirty-thirty'><button className='thirty-btn' onClick={() => addToBasket1(id)}>В корзину</button></div>
        </div>
        <div className='thirty-content'>
            <img className='thirty-img' src={image} alt="Left" />
            <h3 className='thirty-h3'>40$</h3>
            <p className='thirty-text'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
        <div className='thirty-thirty'><button className='thirty-btn' onClick={() => addToBasket(id)}>В корзину</button></div>
    </div>
            </div>
            <div className='Показать'>
                <button className='Показать-btn' onClick={() =>goToaddCard()}>Показать ещё</button>
            </div>
        </div>
    </div>
  )
}

export default Products

