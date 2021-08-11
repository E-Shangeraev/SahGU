/* eslint-disable max-len */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import mapIcon from '@assets/img/icons/map.svg'
import vkIcon from '@assets/img/icons/vk-2.svg'
import instagramIcon from '@assets/img/icons/instagram.svg'
import tiktokIcon from '@assets/img/icons/tiktok.svg'
import okIcon from '@assets/img/icons/odnoklassniki.svg'

const Contacts = () => (
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
            <li>
              <h4>Приёмная ректора:</h4>
              <address>
                Адрес: 693000, Южно-Сахалинск,
                <br />
                пр.&nbsp;Коммунистический, д.&nbsp;33
                <br />
                Телефон: <a href="tel:8(4242)45-23-01">8(4242)45-23-01</a>
                <br />
                Email: <a href="mailto:rector@sakhgu.ru">rector@sakhgu.ru</a>
              </address>
            </li>
            <li>
              <h4>Канцелярия:</h4>
              <address>
                Адрес: 693000, Южно-Сахалинск,
                <br />
                пр.&nbsp;Коммунистический, д.&nbsp;33
                <br />
                Телефон: <a href="tel:8(4242)45-23-00">8(4242)45-23-00</a>
                <br />
                Email: <a href="mailto:office@sakhgu.ru">office@sakhgu.ru</a>
              </address>
            </li>
            <li>
              <h4>Приёмная комиссия:</h4>
              <address>
                Адрес: 693000, Южно-Сахалинск,
                <br />
                ул.&nbsp;Ленина, д.&nbsp;290
                <br />
                Телефон: <a href="tel:8(4242)45-03-00">8(4242)45-03-00</a>
                <br />
                Email: <a href="mailto:pk@sakhgu.ru">pk@sakhgu.ru</a>
              </address>
            </li>
            <li>
              <h4>Пресс-служба:</h4>
              <address>
                Адрес: 693000, Южно-Сахалинск,
                <br />
                пр.&nbsp;Коммунистический, д.&nbsp;33
                <br />
                Телефон: <a href="tel:8(4242)45-03-37">8(4242)45-03-37</a>
                <br />
                Email: press@sakhgu.ru
              </address>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
)

export default Contacts
