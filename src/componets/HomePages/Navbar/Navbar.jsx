
/* eslint-disable react/prop-types */

import Logo from '../../../image/logo1.svg';
// import Menu from '../../../image/menu.svg';
// import Search from '../../../image/search.svg';
import Frame1 from '../../../image/Frame1.svg';
import Frame2 from '../../../image/Frame2.svg';
import shopping from '../../../image/shopping-cart.svg';
import { Link } from 'react-router-dom';
import './Navbar.css';



function Navbar() {
  return (
    <div>
        <header>
            <nav>
                <div className="container">
                    <div className='Logo-item'>
                        <Link to='/dashboard'>
                        <img src={Logo} alt="Logo" />
                        </Link>
                        {/* <div className='logo-item1'>
                            <div className='logo-item2'>
                                <img src={Menu} alt="" />
                                <span className='katalog'>Каталог</span>
                            </div>
                            <form className='navbar-sing'  action="">
                                <input className='navbar-input' type="text" name="text" id="text" placeholder='Найти товар'/>
                                <img src={Search} alt="" />
                            </form>
                        </div> */}
                        <div className='logo-item3'>
                            <div className='logo-content'>
                                <Link to='/favourotes'>
                                    <img className='logo-img1' src={Frame1} alt="" />
                                    <h6 className='logo-h6'>Избранное</h6>
                                </Link>
                            </div>
                            <div className='logo-content'>
                              <Link to='/allproducts'>
                                <img className='logo-img' src={Frame2} alt="" />
                                <h6 className='logo-h6'>продукты</h6>
                              </Link>
                                
                            </div>
                            <div className='logo-content'>
                                <Link to='/basket'>
                                    <img className='logo-img' src={shopping} alt="" />
                                    <h6 className='logo-h6'>Корзина</h6>
                                </Link>
                            </div>
                            <Link to='/signup'>
                                <button className='logo-btn'>
                                    sipnup
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar;