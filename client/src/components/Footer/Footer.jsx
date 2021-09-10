import React from 'react'
// import { Link } from 'react-scroll'
import { Link } from 'react-router-dom'
import logoFooter from '@assets/img/logo-footer.png'
import instagram from '@assets/img/icons/instagram.svg'
import vk from '@assets/img/icons/vk.svg'
import tiktok from '@assets/img/icons/tiktok-2.svg'
import './Footer.scss'

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <img className="footer__logo" src={logoFooter} alt="Логотип СахГУ" />
      <div>
        <nav className="footer__nav">
          <ul>
            <li>
              <Link to="/#1">Про СахГУ</Link>
            </li>
            <li>
              <Link to="/#2">Направления подготовки</Link>
            </li>
            <li>
              <Link to="/#3">Подать документы</Link>
            </li>
            <li>
              <Link to="/#4">Уникальность СахГУ</Link>
            </li>
            <li>
              <Link to="/contacts">Контакты</Link>
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
            <a
              href="https://www.tiktok.com/@sakhgu?lang=ru-RU"
              target="_blank"
              rel="noreferrer">
              <img src={tiktok} alt="tiktok" />
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
