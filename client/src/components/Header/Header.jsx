import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { Transition } from 'react-transition-group'
import { v4 as uuidv4 } from 'uuid'
import classNames from 'classnames'
import setVisuallyImpared from '@redux/actions/visually-impared'
import Button from '@components/Button/Button'
import HashLink from '@components/HashLink'
import Modal from '@components/Modal/Modal'
import ConsultationBlock from '@components/ConsultationBlock/ConsultationBlock'
import './Header.scss'
import logo from './logo.png'

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const btnMenuRef = useRef()
  const { pathname } = useLocation()
  const { on } = useSelector(({ visuallyImpared }) => visuallyImpared)
  const dispatch = useDispatch()

  const btnMenuClickHandler = () => setToggleMenu(!toggleMenu)

  const toggleToVisuallyImpared = () => dispatch(setVisuallyImpared(!on))

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
      <Link className="header__logo" to="/">
        <img src={logo} alt="Логотип СахГУ" />
      </Link>
      <div
        className={classNames('header__menu', {
          'header__menu--opened': toggleMenu,
        })}>
        <nav className="header__nav">
          <ul>
            <li>
              <Link to="/two-diplomas" onClick={() => setToggleMenu(false)}>
                Программа Два Диплома
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
        <div>
          <a href="tel:8 (4242) 45−03−00" className="header__phone">
            8 (4242) 45−03−00
          </a>

          <Button
            className="button--visually-impared"
            color="white"
            onClick={toggleToVisuallyImpared}>
            Версия для слабовидящих
          </Button>

          {pathname === '/' ||
          pathname === '/bachelor' ||
          pathname === '/magistracy' ? (
            <HashLink
              className="button button--yellow"
              to="#documents"
              onClick={() => setToggleMenu(false)}>
              Подать документы
            </HashLink>
          ) : (
            <Modal btnText="Получить консультацию" btnColor="yellow">
              <ConsultationBlock
                formId={uuidv4()}
                title="Получить консультацию"
                text="Оставьте свои контактные данные
            и мы свяжемся с вами в ближайшее время"
              />
            </Modal>
          )}
        </div>
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
