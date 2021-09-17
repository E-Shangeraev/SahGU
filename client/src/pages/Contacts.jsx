/* eslint-disable max-len */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import mapIcon from '@assets/img/icons/map.svg'
import vkIcon from '@assets/img/icons/vk-2.svg'
import instagramIcon from '@assets/img/icons/instagram.svg'
import tiktokIcon from '@assets/img/icons/tiktok.svg'
import okIcon from '@assets/img/icons/odnoklassniki.svg'

const Contacts = () => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fetch('/api/contacts/contacts')
      .then(response => response.json())
      .then(data => setContacts(data))
  }, [])

  return (
    <main>
      <section className="contacts-page">
        <div className="wrapper">
          <h2 className="title">Контакты</h2>
          <div className="contacts-page__container">
            <div className="contacts-page__address">
              <img
                className="contacts-page__map-icon"
                src={mapIcon}
                alt="Иконка карты"
              />
              <div>
                <h3 className="subtitle">Почтовый адрес:</h3>
                <address>
                  693000, Южно-Сахалинск, <br />
                  пр. Коммунистический, д. 33
                </address>
              </div>
              <div>
                <h3 className="subtitle">Юридический адрес:</h3>
                <address>
                  693000, Южно-Сахалинск, <br />
                  ул. Ленина, д. 290
                </address>
              </div>
            </div>
            <ul className="contacts-page__social-links">
              <li>
                <a
                  href="https://vk.com/sakhgu"
                  target="_blank"
                  rel="noreferrer"
                  className="contacts-page__social contacts-page__social--vk">
                  <span>Группа ВКонтакте</span>
                  <img src={vkIcon} alt="Логотип ВКонтакте" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sakhgu/"
                  target="_blank"
                  rel="noreferrer"
                  className="contacts-page__social contacts-page__social--instagram">
                  <span>Страница Инстаграм</span>
                  <img src={instagramIcon} alt="Логотип Instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@sakhgu?lang=ru-RU"
                  target="_blank"
                  rel="noreferrer"
                  className="contacts-page__social contacts-page__social--tiktok">
                  <span>Аккаунт ТikTok</span>
                  <img src={tiktokIcon} alt="Логотип TikTok" />
                </a>
              </li>
              <li>
                <a
                  href="https://ok.ru/sakhgu"
                  target="_blank"
                  rel="noreferrer"
                  className="contacts-page__social contacts-page__social--ok">
                  <span>Группа Одноклассники</span>
                  <img src={okIcon} alt="Логотип Одноклассники" />
                </a>
              </li>
            </ul>
            <div className="contacts-page__map">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A18df0d9c9c039082583550df322a050332a36779a8c0bd3343b11318b1bb35d7&amp;source=constructor"
                frameBorder="0"
              />
            </div>
            <ul className="contacts-page__cards">
              {contacts.length > 0 &&
                contacts.map(contact => (
                  <li key={uuidv4()}>
                    <h4>{contact.title}:</h4>
                    <address>
                      Адрес: {contact.address},
                      <br />
                      Телефон:{' '}
                      <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                      <br />
                      Email:{' '}
                      <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    </address>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contacts
