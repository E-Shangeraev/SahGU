import React from 'react'
import { Link } from 'react-scroll'
import logoFooter from '@assets/img/logo-footer.png'
import instagram from '@assets/img/icons/instagram.svg'
import vk from '@assets/img/icons/vk.svg'
import Button from '@components/Button/Button'
import './Footer.scss'

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <img className="footer__logo" src={logoFooter} alt="Логотип СахГУ" />
      <div>
        <nav className="footer__nav">
          <ul>
            <li>
              <Link smooth to="1">
                Про СахГУ
              </Link>
            </li>
            <li>
              <Link smooth to="2">
                Направления подготовки
              </Link>
            </li>
            <li>
              <Link smooth to="3">
                Уникальность СахГУ
              </Link>
            </li>
            <li>
              <Link smooth to="4">
                Отзывы выпускников
              </Link>
            </li>
            <li>
              <Link smooth to="5">
                Контакты
              </Link>
            </li>
          </ul>
          <div className="footer__socials">
            <a href="instagram.com">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="vk.com">
              <img src={vk} alt="vk" />
            </a>
          </div>
        </nav>
        <Button>Согласие на обработку персональных данных</Button>
      </div>
    </div>
  </footer>
)

export default Footer
