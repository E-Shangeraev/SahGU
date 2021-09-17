/* eslint-disable max-len */
import React from 'react'
import { Parallax } from 'react-parallax'
import ScrollAnimation from 'react-animate-on-scroll'
import { Link } from 'react-scroll'
import { v4 as uuidv4 } from 'uuid'
import Modal from '@components/Modal/Modal'
import ConsultationBlock from '@components/ConsultationBlock/ConsultationBlock'
import Steps from '@components/Steps/Steps'
import InstitutesAndAreas from '@components/InstitutesAndAreas/InstitutesAndAreas'
import Slider from '@components/Slider/Slider'
import { Gosuslugi, Mail, Personal, Post } from '@components/DocumentsBlock'
import Feedback from '@components/Feedback/Feedback'

import promo2 from '@assets/img/BachelorAndMagistracy/promo-2.png'
import gosuslugi from '@assets/img/icons/gosusllugi.png'
import post from '@assets/img/icons/post.png'
import handshake from '@assets/img/icons/handshake.png'
import mail from '@assets/img/icons/mail.png'
import feedback1 from '@assets/img/feedback-1.svg'
import feedback2 from '@assets/img/feedback-2.svg'

const Magistracy = () => (
  <main>
    <section className="promo promo--magistracy">
      <div className="wrapper">
        <div className="promo__container">
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            animateOnce>
            <h1 className="promo__title">
              Поступи в
              <br />
              <b>магистратуру</b> в СахГУ
            </h1>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__fadeInUp"
            animateOut="animate__fadeOut"
            delay={1000}
            animateOnce>
            <p className="text promo__text">
              Оставьте заявку и получите консультацию о&nbsp;направлениях
              подготовки, проходных баллах и других вопросах про поступление
            </p>
            <div className="promo__buttons">
              <Modal btnText="Получить консультацию" btnColor="white">
                <ConsultationBlock
                  title="Получить консультацию"
                  text="Оставьте свои контактные данные
                        и мы свяжемся с вами в ближайшее время"
                />
              </Modal>
              <Link smooth to="2" className="button button--white-outlined">
                Узнать больше
              </Link>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__fadeInUp"
            animateOut="animate__fadeOut"
            delay={1000}
            animateOnce>
            <img src={promo2} alt="Наши преимущества" />
          </ScrollAnimation>
        </div>
      </div>
    </section>

    <ScrollAnimation
      animateIn="animate__fadeIn"
      animateOut="animate__fadeOut"
      animateOnce>
      <Steps qualification="в магистратуру" url="/api/steps/magistracy" />
    </ScrollAnimation>

    <ScrollAnimation
      animateIn="animate__fadeIn"
      animateOut="animate__fadeOut"
      animateOnce>
      <InstitutesAndAreas qualificationIndex={1} />
    </ScrollAnimation>

    <ScrollAnimation
      animateIn="animate__fadeIn"
      animateOut="animate__fadeOut"
      animateOnce>
      <section className="graduates">
        <div className="wrapper">
          <div className="graduates__container">
            <div>
              <h2 className="title graduates__title">
                Наши <span>выпускники</span>
              </h2>
              <p className="big-text">
                Выпускники СахГУ работают в компаниях нефтегазовой отрасли,
                банковских структурах, налоговых органах, на предприятиях и
                научно-исследовательских учреждениях, в государственных органах.
                <br />
                <br />
                Ежегодно проводимый мониторинг свидетельствует, что к концу года
                выпуска более 86% выпускников трудоустроены. Это один из лучших
                результатов в России.
              </p>
            </div>
            <Slider />
          </div>
        </div>
      </section>
    </ScrollAnimation>

    <section className="documents" id="documents">
      <div className="wrapper">
        <h2 className="title document__title">
          Способы <span>подачи</span> документов
        </h2>
        <ul className="documents__ways">
          <li className="documents-way">
            <img src={gosuslugi} alt="Через  личный кабинет на Госуслугах" />
            <span className="documents-way__name">
              Через личный кабинет на Госуслугах
            </span>
            <Modal
              btnText="Подробнее"
              btnColor="purple"
              containerClass="documents__modal documents__modal--gosuslugi">
              <Gosuslugi />
            </Modal>
          </li>
          <li className="documents-way">
            <img src={post} alt="Почтой России" />
            <span className="documents-way__name">Почтой России</span>
            <Modal
              btnText="Подробнее"
              btnColor="purple"
              containerClass="documents__modal documents__modal--post">
              <Post />
            </Modal>
          </li>
          <li className="documents-way">
            <img src={handshake} alt="Лично" />
            <span className="documents-way__name">Лично</span>
            <Modal
              btnText="Подробнее"
              btnColor="purple"
              containerClass="documents__modal documents__modal--personal">
              <Personal />
            </Modal>
          </li>
          <li className="documents-way">
            <img src={mail} alt="По электронной почте" />
            <span className="documents-way__name">По электронной почте</span>
            <Modal
              btnText="Подробнее"
              btnColor="purple"
              containerClass="documents__modal documents__modal--mail">
              <Mail />
            </Modal>
          </li>
        </ul>
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
  </main>
)

export default Magistracy
