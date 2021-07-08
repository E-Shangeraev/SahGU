import React from 'react'
// import { Link } from 'react-scroll'
import logoFooter from '@assets/img/logo-footer.png'
import instagram from '@assets/img/icons/instagram.svg'
import vk from '@assets/img/icons/vk.svg'
import './Footer.scss'

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <img className="footer__logo" src={logoFooter} alt="Логотип СахГУ" />
      <div>
        <nav className="footer__nav">
          <ul>
            <li>
              <a href="#1">Про СахГУ</a>
            </li>
            <li>
              <a href="#2">Направления подготовки</a>
            </li>
            <li>
              <a href="#3">Подать документы</a>
            </li>
            <li>
              <a href="#4">Уникальность СахГУ</a>
            </li>
            <li>
              <a href="#5">Контакты</a>
            </li>
          </ul>
          <div className="footer__socials">
            <a
              href="https://www.instagram.com/sakhgu/"
              target="_blank"
              rel="noreferrer">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="https://vk.com/sakhgu" target="_blank" rel="noreferrer">
              <img src={vk} alt="vk" />
            </a>
          </div>
        </nav>
        <a
          className="footer__policy"
          href="/Politika_v_otnoshenii_obrabotki_personalnykh_dannykh.pdf"
          target="_blank">
          Согласие на обработку персональных данных
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
