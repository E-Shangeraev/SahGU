import React from 'react'
import { Link } from 'react-scroll'
import { v4 as uuidv4 } from 'uuid'
import Modal from '../Modal'
import ConsultationBlock from '../ConsultationBlock'
import './Header.scss'
import logo from './logo.png'

const Header = () => (
  <header className="header">
    <img className="header__logo" src={logo} alt="Логотип СахГУ" />
    <nav className="header__nav">
      <ul>
        <li>
          <Link smooth to="1" offset={200}>
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
    </nav>
    <a href="tel:8 (4242) 45−03−00" className="header__phone">
      8 (4242) 45−03−00
    </a>
    <Modal btnText="Получить консультацию" btnColor="yellow">
      <ConsultationBlock
        formId={uuidv4()}
        title="Получить консультацию"
        text="Оставьте свои контактные данные
            и мы свяжемся с вами в ближайшее время"
      />
    </Modal>
  </header>
)

export default Header
