import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Transition } from 'react-transition-group'
import { v4 as uuidv4 } from 'uuid'
import classNames from 'classnames'
import Modal from '@components/Modal/Modal'
import ConsultationBlock from '@components/ConsultationBlock/ConsultationBlock'
import './Header.scss'
import logo from './logo.png'

const TemporaryHeader = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const btnMenuRef = useRef()
  const { pathname } = useLocation()

  const btnMenuClickHandler = () => setToggleMenu(!toggleMenu)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = toggleMenu ? 'hidden' : ''
  }, [toggleMenu])

  useEffect(() => {
    document.body.addEventListener('keydown', e =>
      e.keyCode === 27 ? setToggleMenu(false) : null,
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
              <Link to="/" onClick={() => setToggleMenu(false)}>
                Главная
              </Link>
            </li>
            <li>
              <Link to="/two-diplomas" onClick={() => setToggleMenu(false)}>
                Два диплома
              </Link>
            </li>
            <li>
              <Link to="/bachelor" onClick={() => setToggleMenu(false)}>
                Бакалаврам
              </Link>
            </li>
            <li>
              <Link to="/magistracy" onClick={() => setToggleMenu(false)}>
                Магистрам
              </Link>
            </li>
            <li>
              <Link to="/comission" onClick={() => setToggleMenu(false)}>
                Приемная комиссия
              </Link>
            </li>
            <li>
              <Link to="/contacts" onClick={() => setToggleMenu(false)}>
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

export default TemporaryHeader
