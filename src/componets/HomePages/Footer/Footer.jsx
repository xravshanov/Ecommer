import './Footer.css';
import Logo2 from '../../../image/logo2.svg'; 
import Instagramm from '../../../image/instagram.svg'; 
import Wkontake from '../../../image/vkontakte.svg'; 
import Feezbook from '../../../image/feezbook.svg'; 
import Ok from '../../../image/ok.png'; 
import Phone from '../../../image/phone.svg'; 
import Logo5 from '../../../image/logo5.svg';  





function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className='footer-content'>
            <div className='footer-item1'>
              <img src={Logo2} alt="" />
              <span className='footer-span'>О компании</span>
              <span className='footer-span'>Контакты</span>
              <span className='footer-span'>Вакансии</span>
              <span className='footer-span'>Статьи</span>
              <span className='footer-span'>Политика обработки персональных данных</span>
            </div>
            <div className='footer-item2'>
              <div className='footer-item3'>
                <img src={Instagramm} alt="" />
                <img src={Wkontake} alt="" />
                <img src={Feezbook} alt="" />
                <img src={Ok} alt="" />
              </div>
              <div>
                <div className='footer-item4'>
                  <img src={Phone} alt="" />
                  <span className='footer-span2'>8 800 777 33 33</span>
                </div>
                <div className='footer-item5'>
                  <span className='footer-span4'>Дизайн</span>
                  <img src={Logo5} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;