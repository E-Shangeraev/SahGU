import React from 'react'
import { Parallax } from 'react-parallax'
import ScrollAnimation from 'react-animate-on-scroll'
import { Link } from 'react-scroll'
import { v4 as uuidv4 } from 'uuid'

import ScheduleCard from '@components/ScheduleCard/ScheduleCard'
import Feedback from '@components/Feedback/Feedback'
import Contacts from '@components/Contacts/Contacts'

import promo5 from '@assets/img/promo-5.png'
import manIcon from '@assets/img/icons/man.svg'
import mapIcon from '@assets/img/icons/map.svg'
import phoneIcon from '@assets/img/icons/phone.svg'
import mailIcon from '@assets/img/icons/mail.png'
import comission from '@assets/img/comission.jpg'
import feedback1 from '@assets/img/feedback-1.svg'
import feedback2 from '@assets/img/feedback-2.svg'

const Comission = () => (
  <main>
    <section className="promo promo--comission">
      <div className="wrapper">
        <div className="promo__container">
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            animateOnce>
            <h1 className="promo__title">
              Приемная
              <br />
              комиссия СахГУ
            </h1>
          </ScrollAnimation>

          <ScrollAnimation
            className="promo__contacts"
            animateIn="animate__fadeInUp"
            animateOut="animate__fadeOut"
            delay={1000}
            animateOnce>
            <ul>
              <li>
                <p>
                  <img src={manIcon} alt="" />
                  <b>Ответственный секретарь:</b>
                </p>
                <span>Багдасарян Александр Сергеевич</span>
              </li>
              <li>
                <p>
                  <img src={mapIcon} alt="" />
                  <b>Адрес:</b>
                </p>
                <span>
                  693008, Сахалинская область,
                  <br />
                  г. Южно-Сахалинск, Ленина 290, каб. 13
                </span>
              </li>
              <li>
                <p>
                  <img src={phoneIcon} alt="" />
                  <b>Рабочий телефон:</b>
                </p>
                <a href="tel:8 (4242) 45−03−00">8 (4242) 45−03−00</a>
              </li>
              <li>
                <p>
                  <img src={mailIcon} alt="" />
                  <b>E‑mail:</b>
                </p>
                <a href="mailto:pk@sakhgu.ru">pk@sakhgu.ru</a>
              </li>
            </ul>
          </ScrollAnimation>
        </div>
        <ScrollAnimation
          className="promo__comission-image"
          animateIn="animate__fadeInUp"
          animateOut="animate__fadeOut"
          delay={1000}
          animateOnce>
          <img src={promo5} alt="Декоративный элемент" />
        </ScrollAnimation>
      </div>
    </section>

    <section className="schedule">
      <div className="wrapper">
        <h2 className="title schedule__title">
          График работы
          <br />
          <span>приемной комиссии</span>
        </h2>
        <h3 className="subtitle schedule__subtitle">
          Прием документов на программы высшего образования:
        </h3>
        <div className="schedule__container">
          <ScheduleCard
            institute="Сахалинский государственный университет"
            secretary="Чусовитина Марина Юрьевна"
            time={[
              'Пн-Пт 9.00 – 17.00',
              'Перерыв 13.00 – 14.00',
              'Сб 9.00 – 13.00',
            ]}
            address="693008, г. Южно-Сахалинск,
            ул. Ленина, 290 (главный корпус)"
            phone={[
              {
                number: '8 (4242) 45-03-00',
                conditions: ' (WhatsApp)',
              },
              {
                number: '8-962-115-57-47',
                conditions: ' (только sms)',
              },
            ]}
            email="pk@sakhgu.ru"
          />
          <img src={comission} alt="Пользователь за ноутбуком" />
        </div>
        <h3 className="subtitle schedule__subtitle">
          Прием документов на программы среднего профессионального образования:
        </h3>
        <div className="schedule__container">
          <ScheduleCard
            institute="Южно-Сахалинский педагогический
            колледж СахГУ (ЮСПК СахГУ)"
            secretary="Коваль Наталья Сергеевна"
            time={[
              'Пн-Пт 9.00 – 17.00',
              'Сб 10.00 – 13.00',
              'Перерыв 13.00 – 14.00',
            ]}
            address="693008, г. Южно-Сахалинск,
            ул. Ленина, 284"
            phone={[
              {
                number: '(4242) 45-03-40',
                conditions: '',
              },
            ]}
            email="pk_uspk@sakhgu.ru"
          />
          <ScheduleCard
            institute="Политехнический колледж СахГУ
            (ПТК СахГУ)"
            secretary="Лаврик Марина Витальевна"
            time={[
              'Пн-Пт 9.00 – 17.00',
              'Перерыв 13.00 – 14.00',
              'Сб 9.00 – 13.00',
            ]}
            address="693010, г. Южно-Сахалинск,
            ул. Горького, 26"
            phone={[
              {
                number: '(4242) 46-22-24',
                conditions: '',
              },
              {
                number: '8-914-743-22-06',
                conditions: '',
              },
            ]}
            email="pk_ptk@sakhgu.ru"
          />
          <ScheduleCard
            institute="Александровск-Сахалинский колледж
            (филиал) СахГУ (АСК(ф) СахГУ)"
            secretary="Меркулова Ирина Александровна"
            time={[
              'Пн-Чт 8.00 – 15.45',
              'Перерыв 12.00 – 12.30',
              'Пт 8.00 – 15.30',
            ]}
            address="694420, г. Александровск-Сахалинский, ул. Советская, 58"
            phone={[
              {
                number: '(42434) 4-34-20',
                conditions: '',
              },
            ]}
            email="ask-f-sakhgu@mail.ru"
          />
          <ScheduleCard
            institute="Охинский филиал СахГУ (ОФ СахГУ)"
            secretary="Хамидулина Галина Фёдоровна"
            time={['Пн-Чт 8.45 – 17.00', 'Пт  8.45 – 16.45']}
            address="694490, г. Оха, ул. Победы, 6"
            phone={[
              {
                number: '(42437) 3-44-98',
                conditions: '',
              },
              {
                number: '(42437) 4-56-97',
                conditions: ' (факс)',
              },
            ]}
            email="ask-f-sakhgu@mail.ru"
          />
        </div>
      </div>
    </section>

    <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut">
      <Parallax
        className="feedback__parallax"
        bgClassName="feedback__bg-1"
        bgImage={feedback1}
        strength={150}>
        <Parallax
          className="feedback__parallax"
          bgClassName="feedback__bg-2"
          bgImage={feedback2}
          strength={200}>
          <Feedback
            formId={uuidv4()}
            title="Не можете определиться?"
            text="Оставьте свой номер и мы поможем вам с выбором!"
          />
        </Parallax>
      </Parallax>
    </ScrollAnimation>

    <Contacts id={5} />
  </main>
)

export default Comission
