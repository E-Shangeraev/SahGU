import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import './Contacts.scss'

import contactsImage from '@assets/img/contacts.jpg'
import phone from '@assets/img/icons/phone.svg'
import letter from '@assets/img/icons/letter.svg'
import world from '@assets/img/icons/world.svg'
import mark from '@assets/img/icons/mark.svg'

const Contacts = ({ id }) => {
  const [contacts, setContacts] = useState(null)

  useEffect(() => {
    fetch('/api/contacts/main')
      .then(response => response.json())
      .then(data => setContacts(data))
  }, [])

  return (
    <section className="contacts" id={id}>
      <div className="wrapper">
        <div className="contacts__container">
          <h2 className="title contacts__title">Контакты</h2>
          <img src={contactsImage} alt="Фотография главного входа СахГУ" />
          <div>
            <p className="big-text contacts__text">
              Вы можете связаться с приёмной комиссией любым удобным способом
            </p>
            {contacts && (
              <ul className="contacts__list">
                <li>
                  <img src={phone} alt="Телефон" />
                  <a href={`tel:${contacts.phone}`}>{contacts.phone}</a>
                </li>
                <li>
                  <img src={letter} alt="Почта" />
                  <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
                </li>
                <li>
                  <img src={world} alt="Официальный сайт" />
                  <div>
                    {contacts.sites.length > 0 &&
                      contacts.sites.map(site => (
                        <a
                          key={site}
                          href={site}
                          target="_blank"
                          rel="noreferrer">
                          {site}
                        </a>
                      ))}
                  </div>
                </li>
                <li>
                  <img src={mark} alt="Адрес" />
                  {contacts.address}
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

Contacts.propTypes = {
  id: PropTypes.number.isRequired,
}

export default Contacts
