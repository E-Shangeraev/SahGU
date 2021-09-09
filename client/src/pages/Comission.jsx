import React, { useEffect, useState } from 'react'
import { Parallax } from 'react-parallax'
import ScrollAnimation from 'react-animate-on-scroll'
import { v4 as uuidv4 } from 'uuid'

import ScheduleCard from '@components/ScheduleCard/ScheduleCard'
import Feedback from '@components/Feedback/Feedback'
import Contacts from '@components/Contacts/Contacts'
import ComissionDocs from '@components/ComissionDocs/ComissionDocs'

import promo5 from '@assets/img/feedback-3.svg'
import manIcon from '@assets/img/icons/man-yellow.svg'
import mapIcon from '@assets/img/icons/map-yellow.svg'
import phoneIcon from '@assets/img/icons/phone-yellow.svg'
import mailIcon from '@assets/img/icons/mail-2-yellow.svg'
import comission from '@assets/img/comission.jpg'
import feedback1 from '@assets/img/feedback-1.svg'
import feedback2 from '@assets/img/feedback-2.svg'

const Comission = () => {
  const [contactsSecretary, setContactsSecretary] = useState(null)
  const [contactsHE, setContactsHE] = useState(null)
  const [contactsME, setContactsME] = useState([])

  useEffect(async () => {
    await fetch('/api/contacts/secretary')
      .then(response => response.json())
      .then(data => setContactsSecretary(data))
    await fetch('/api/contacts/higher-education')
      .then(response => response.json())
      .then(data => setContactsHE(data))
    await fetch('/api/contacts/middle-education')
      .then(response => response.json())
      .then(data => setContactsME(data))
  }, [])

  return (
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
              {contactsSecretary && (
                <ul>
                  <li>
                    <p>
                      <img src={manIcon} alt="" />
                      <b>Ответственный секретарь:</b>
                    </p>
                    <span>{contactsSecretary.name}</span>
                  </li>
                  <li>
                    <p>
                      <img src={mapIcon} alt="" />
                      <b>Адрес:</b>
                    </p>
                    <span>{contactsSecretary.address}</span>
                  </li>
                  <li>
                    <p>
                      <img src={phoneIcon} alt="" />
                      <b>Рабочий телефон:</b>
                    </p>
                    <a href={`tel:${contactsSecretary.phone}`}>
                      {contactsSecretary.phone}
                    </a>
                  </li>
                  <li>
                    <p>
                      <img src={mailIcon} alt="" />
                      <b>E‑mail:</b>
                    </p>
                    <a href={`mailto:${contactsSecretary.email}`}>
                      {contactsSecretary.email}
                    </a>
                  </li>
                </ul>
              )}
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

      <section className="documents-in-modals">
        <div className="wrapper">
          <div className="documents-in-modals__container">
            <ComissionDocs name="Бакалавриат" apiName="bachelor" />
            <ComissionDocs name="Магистратура" apiName="magistracy" />
            <ComissionDocs name="Аспирантура" apiName="graduate" />
            <ComissionDocs
              name="Среднее профессиональное образование"
              apiName="sse"
            />
          </div>
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
            {contactsHE && (
              <ScheduleCard
                institute={contactsHE.organization}
                time={contactsHE.workTime}
                address={contactsHE.address}
                phone={contactsHE.phone}
                email={contactsHE.email}
              />
            )}
            <img src={comission} alt="Пользователь за ноутбуком" />
          </div>
          <h3 className="subtitle schedule__subtitle">
            Прием документов на программы среднего профессионального
            образования:
          </h3>
          <div className="schedule__container">
            {contactsME.length > 0 &&
              contactsME.map(item => (
                <ScheduleCard
                  key={uuidv4()}
                  institute={item.organization}
                  time={item.workTime}
                  address={item.address}
                  phone={item.phone}
                  email={item.email}
                />
              ))}
          </div>
        </div>
      </section>

      <ScrollAnimation
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut">
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
}

export default Comission
