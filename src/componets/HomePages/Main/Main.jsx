
import ImgHome from '../../../image/img-home1.png';
// import HomeImg from '../../image/home-img1.png';
import Right from '../../../image/chevron-right.svg';
import image from '../../../image/image8.png';
import Xarita1 from '../../../image/Karta1.png';
import Xarita2 from '../../../image/image12.png';
import Image5 from '../../../image/image5.png';
import './Main.css';
import { Link } from 'react-router-dom';



function Home() {
  return (
    <div>
      <main>
            <section className='section1'>
                <div className="container">
                    <div className='first'>
                        <img src={ImgHome} alt="" />
                        <h4 className='first-h4'>Доставка бесплатно от 1000 ₽</h4>
                    </div>
                </div>
            </section>
            <section className='section2'>
                <div className="container">
                    <div className='second'> 
                        <div className='second-item1'>
                            <h4 className='section-item1-h4'>Акции</h4>
                            <Link to="/allproducts">
                                <div className='section-item2'>
                                    <span className='section-item2-span'>Все продукты</span>
                                    <img src={Right} alt="Right" />
                                </div>
                            </Link>
                            
                        </div>
                        <div className='thirty'>
                            <div className='thirty-content'>
                                <img className='thirty-img' src={image} alt="Left" />
                                <h3 className='thirty-h3'>40$</h3>
                                <p className='thirty-text'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
                                <div className='thirty-thirty'><button className='thirty-btn'>В корзину</button></div>
                            </div>
                            <div className='thirty-content'>
                                <img className='thirty-img' src={image} alt="Left" />
                                <h3 className='thirty-h3'>40$</h3>
                                <p className='thirty-text'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
                                <div className='thirty-thirty'><button className='thirty-btn'>В корзину</button></div>
                            </div>
                            <div className='thirty-content'>
                                <img className='thirty-img' src={image} alt="Left" />
                                <h3 className='thirty-h3'>40$</h3>
                                <p className='thirty-text'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
                                <div className='thirty-thirty'><button className='thirty-btn'>В корзину</button></div>
                            </div>
                            <div className='thirty-content'>
                                <img className='thirty-img' src={image} alt="Left" />
                                <h3 className='thirty-h3'>40$</h3>
                                <p className='thirty-text'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
                                <div className='thirty-thirty'><button className='thirty-btn'>В корзину</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section2'>
                <div className="container">
                    <div className='five'> 
                        <div className='second-item1'>
                            <h4 className='section-item1-h4'>Новинки</h4>
                            <Link to="/allproducts">
                                <div className='section-item2'>
                                    <span className='section-item2-span'>Все продукты</span>
                                    <img src={Right} alt="Right" />
                                </div>    
                            </Link>
                        </div>
                        <div className='thirty'>
                            <div className='thirty-content'>
                                <img className='thirty-img' src={image} alt="Left" />
                                <h3 className='thirty-h3'>40$</h3>
                                <p className='thirty-text'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
                                <div className='thirty-thirty'><button className='thirty-btn'>В корзину</button></div>
                            </div>
                            <div className='thirty-content'>
                                <img className='thirty-img' src={image} alt="Left" />
                                <h3 className='thirty-h3'>40$</h3>
                                <p className='thirty-text'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
                                <div className='thirty-thirty'><button className='thirty-btn'>В корзину</button></div>
                            </div>
                            <div className='thirty-content'>
                                <img className='thirty-img' src={image} alt="Left" />
                                <h3 className='thirty-h3'>40$</h3>
                                <p className='thirty-text'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
                                <div className='thirty-thirty'><button className='thirty-btn'>В корзину</button></div>
                            </div>
                            <div className='thirty-content'>
                                <img className='thirty-img' src={image} alt="Left" />
                                <h3 className='thirty-h3'>40$</h3>
                                <p className='thirty-text'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
                                <div className='thirty-thirty'><button className='thirty-btn'>В корзину</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section2'>
                <div className="container">
                    <div className='four'> 
                        <div className='second-item1'>
                            <h4 className='section-item1-h4'>Покупали раньше</h4>
                            <Link to="/allproducts">
                                <div className='section-item2'>
                                    <span className='section-item2-span'>Все продукты</span>
                                    <img src={Right} alt="Right" />
                                </div>
                            </Link>
                        </div>
                        <div className='thirty'>
                            <div className='thirty-content'>
                                <img className='thirty-img' src={image} alt="Left" />
                                <h3 className='thirty-h3'>40$</h3>
                                <p className='thirty-text'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
                                <div className='thirty-thirty'><button className='thirty-btn'>В корзину</button></div>
                            </div>
                            <div className='thirty-content'>
                                <img className='thirty-img' src={image} alt="Left" />
                                <h3 className='thirty-h3'>40$</h3>
                                <p className='thirty-text'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
                                <div className='thirty-thirty'><button className='thirty-btn'>В корзину</button></div>
                            </div>
                            <div className='thirty-content'>
                                <img className='thirty-img' src={image} alt="Left" />
                                <h3 className='thirty-h3'>40$</h3>
                                <p className='thirty-text'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
                                <div className='thirty-thirty'><button className='thirty-btn'>В корзину</button></div>
                            </div>
                            <div className='thirty-content'>
                                <img className='thirty-img' src={image} alt="Left" />
                                <h3 className='thirty-h3'>40$</h3>
                                <p className='thirty-text'>Г/Ц Блинчики с мясом вес, <br /> Россия</p>
                                <div className='thirty-thirty'><button className='thirty-btn'>В корзину</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section2'>
                <div className="container">
                    <div className='seven'>
                        <h2 className='seven-h2'>Специальные предложения</h2>
                        <div className='seven-content'>
                            <div className='seven-item'>
                                <div>
                                    <p className='seven-text'>Оформите карту «Северяночка»</p>
                                    <p className='seven-text2'>И получайте бонусы при покупке в магазинах и на сайте</p>
                                </div>
                                <img src={Xarita1} alt="" />
                            </div>
                            <div className='seven-item'>
                                <div>
                                    <p className='seven-text'>Оформите карту «Северяночка»</p>
                                    <p className='seven-text2'>И получайте бонусы при покупке в магазинах и на сайте</p>
                                </div>
                                <img src={Xarita1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section2'>
                <div className="container">
                    <div className='eats'> 
                        <h3 className='eat-h3'>Наши магазины</h3>
                        <div className='eat-content'>
                            <button className='eat-btn'>п.Щельяюр</button>
                            <button className='eat-btn'>д.Вертеп</button>
                            <button className='eat-btn'>с.Краснобор</button>
                            <button className='eat-btn'>д.Диюр</button>
                        </div>
                        <img className='eat-img' src={Xarita2} alt="" />
                    </div>
                </div>
            </section>
            <section className='section2'>
                <div className="container">
                    <div className='night'>
                        <div className='second-item1'>
                            <h4 className='section-item1-h4'>Статьи</h4>
                            <div className='section-item2'>
                                <span className='section-item2-span'>Все статьи</span>
                                <img src={Right} alt="Right" />
                            </div>
                        </div>
                        <div className='night-items'>
                            <div className='night-content'>
                                <img src={Image5} alt="" />
                                <h6 className='night-h6'>05.03.2021</h6>
                                <p className='night-text1'>Режим использования масок и <br /> перчаток на территории магазинов</p>
                                <p className='night-text2'>Подробная информация о режимах <br /> использования масок и перчаток на <br /> территории магазинов ЛЕНТА. Информация <br /> обновляется каждый будний день.</p>
                                <button className='night-btn'>Подробнее</button>
                            </div>
                            <div className='night-content'>
                                <img src={Image5} alt="" />
                                <h6 className='night-h6'>05.03.2021</h6>
                                <p className='night-text1'>Режим использования масок и <br /> перчаток на территории магазинов</p>
                                <p className='night-text2'>Подробная информация о режимах <br /> использования масок и перчаток на <br /> территории магазинов ЛЕНТА. Информация <br /> обновляется каждый будний день.</p>
                                <button className='night-btn'>Подробнее</button>
                            </div>
                            <div className='night-content'>
                                <img src={Image5} alt="" />
                                <h6 className='night-h6'>05.03.2021</h6>
                                <p className='night-text1'>Режим использования масок и <br /> перчаток на территории магазинов</p>
                                <p className='night-text2'>Подробная информация о режимах <br /> использования масок и перчаток на <br /> территории магазинов ЛЕНТА. Информация <br /> обновляется каждый будний день.</p>
                                <button className='night-btn'>Подробнее</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
  )
}

export default Home