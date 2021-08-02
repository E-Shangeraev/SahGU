import React from 'react'
import PropTypes from 'prop-types'

import './Contacts.scss'

import contacts from '@assets/img/contacts.jpg'
import phone from '@assets/img/icons/phone.svg'
import letter from '@assets/img/icons/letter.svg'
import world from '@assets/img/icons/world.svg'
import mark from '@assets/img/icons/mark.svg'

const Contacts = ({ id }) => (
  <section className="contacts" id={id}>
    <div className="wrapper">
      <div className="contacts__container">
        <h2 className="title contacts__title">Контакты</h2>
        <img src={contacts} alt="Фотография главного входа СахГУ" />
        <div>
          <p className="big-text contacts__text">
            Вы можете связаться с приёмной комиссией любым удобным способом
          </p>
          <ul className="contacts__list">
            <li>
              <img src={phone} alt="Телефон" />
              <a href="tel:8 (4242) 45−03−00">8 (4242) 45−03−00</a>
            </li>
            <li>
              <img src={letter} alt="Почта" />
              <a href="mailto:pk@sakhgu.ru">pk@sakhgu.ru</a>
            </li>
            <li>
              <img src={world} alt="Официальный сайт" />
              <div>
                <a href="sakhgu.ru">sakhgu.ru</a>
                <a href="sakhgu.ru/abitur/">sakhgu.ru/abitur/</a>
              </div>
            </li>
            <li>
              <img src={mark} alt="Адрес" />
              <span>
                693008, Сахалинская область,
                <br />
                г. Южно-Сахалинск, Ленина 290, каб. 13
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)

Contacts.propTypes = {
  id: PropTypes.number.isRequired,
}

export default Contacts
