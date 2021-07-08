import React, { useEffect, useRef, useState } from 'react'
// import { Link } from 'react-scroll'
import { Transition } from 'react-transition-group'
import { v4 as uuidv4 } from 'uuid'
import classNames from 'classnames'
import Modal from '@components/Modal/Modal'
import ConsultationBlock from '@components/ConsultationBlock/ConsultationBlock'
import './Header.scss'
import logo from './logo.png'

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const btnMenuRef = useRef()

  const btnMenuClickHandler = () => setToggleMenu(!toggleMenu)

  useEffect(() => {
    document.body.style.overflow = toggleMenu ? 'hidden' : ''
  }, [toggleMenu])

  useEffect(() => {
    document.body.addEventListener('keydown', e =>
      e.keyCode === 27 ? setToggleMenu(false) : null
    )
  }, [])
  return (
    <header className={classNames('header', { 'header--overlay': toggleMenu })}>
      <a className="header__logo" href="/">
        <img src={logo} alt="Логотип СахГУ" />
      </a>
      <div
        className={classNames('header__menu', {
          'header__menu--opened': toggleMenu,
        })}>
        <nav className="header__nav">
          <ul>
            <li>
              <a href="#1" offset={200} onClick={() => setToggleMenu(false)}>
                Про СахГУ
              </a>
            </li>
            <li>
              <a href="#2" onClick={() => setToggleMenu(false)}>
                Направления подготовки
              </a>
            </li>
            <li>
              <a href="#3" onClick={() => setToggleMenu(false)}>
                Подать документы
              </a>
            </li>
            <li>
              <a href="#4" onClick={() => setToggleMenu(false)}>
                Уникальность СахГУ
              </a>
            </li>
            <li>
              <a href="#5" onClick={() => setToggleMenu(false)}>
                Отзывы выпускников
              </a>
            </li>
            <li>
              <a href="#6" onClick={() => setToggleMenu(false)}>
                Контакты
              </a>
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
      </div>

      <Transition nodeRef={btnMenuRef} in={toggleMenu} timeout={500}>
        {state => (
          <button
            type="button"
            ref={btnMenuRef}
            className={`header__menu-button ${state}`}
            onClick={btnMenuClickHandler}>
            <span>Меню</span>
          </button>
        )}
      </Transition>
    </header>
  )
}

export default Header
