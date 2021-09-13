import React from 'react'
import { Parallax } from 'react-parallax'
import ScrollAnimation from 'react-animate-on-scroll'
import { Link } from 'react-scroll'
import { v4 as uuidv4 } from 'uuid'

import Feedback from '@components/Feedback/Feedback'
import { Gosuslugi, Mail, Personal, Post } from '@components/DocumentsBlock'
import Slider from '@components/Slider/Slider'
import Modal from '@components/Modal/Modal'
// eslint-disable-next-line max-len
import ConsultationBlock from '@components/ConsultationBlock/ConsultationBlock'
import NewsSlider from '@components/NewsSlider/NewsSlider'
import YourBeginning from '@components/YourBeginning/YourBeginning'
import Areas from '@components/Areas/Areas'
import Uniqueness from '@components/Uniqueness/Uniqueness'
import Contacts from '@components/Contacts/Contacts'

import promo1 from '@assets/img/promo-1.png'
import promo2 from '@assets/img/promo-2.png'
import features1 from '@assets/img/features-1.png'
import features2 from '@assets/img/features-2.png'
import feedback1 from '@assets/img/feedback-1.svg'
import feedback2 from '@assets/img/feedback-2.svg'
import feedback3 from '@assets/img/feedback-4.svg'
import gosuslugi from '@assets/img/icons/gosusllugi.png'
import post from '@assets/img/icons/post.png'
import handshake from '@assets/img/icons/handshake.png'
import mail from '@assets/img/icons/mail.png'
import graduates1 from '@assets/img/graduates-1.png'
import graduates2 from '@assets/img/graduates-2.png'
import graduates3 from '@assets/img/graduates-3.png'
import PartingWords from '../components/PartingWords/PartingWords'

const Main = () => (
  <main>
    <section className="promo">
      <div className="wrapper">
        <div className="promo__container">
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            animateOnce>
            <h1 className="promo__title promo__title--uppercase">
              Сахалинский
              <br />
              Государственный
              <br />
              Университет
              <ScrollAnimation
                animateIn="animate__fadeInUp"
                animateOut="animate__fadeOut"
                delay={1000}
                animateOnce>
                <span className="promo__title">— лучшее начало пути</span>
              </ScrollAnimation>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="animate__fadeInUp"
            animateOut="animate__fadeOut"
            delay={1000}
            animateOnce>
            <p className="text promo__text">
              Оставьте заявку и получите консультацию о направлениях подготовки,
              проходных баллах и других вопросах про поступление
            </p>
            <div className="promo__buttons">
              <Modal btnText="Получить консультацию" btnColor="purple">
                <ConsultationBlock
                  title="Получить консультацию"
                  text="Оставьте свои контактные данные
                        и мы свяжемся с вами в ближайшее время"
                />
              </Modal>
              <Link smooth to="2" className="button button--outlined">
                Узнать больше
              </Link>
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            className="promo__picture"
            animateIn="animate__fadeInUp"
            animateOut="animate__fadeOut"
            delay={1000}
            animateOnce>
            <Parallax
              className="promo__parallax"
              bgClassName="promo__bg"
              bgImage={promo2}
              strength={200}>
              <img src={promo1} alt="Фото студентов" />
            </Parallax>
          </ScrollAnimation>
        </div>
      </div>
    </section>

    <ScrollAnimation
      animateIn="animate__fadeIn"
      animateOut="animate__fadeOut"
      delay={500}
      animateOnce>
      <NewsSlider />
    </ScrollAnimation>

    <ScrollAnimation
      animateIn="animate__fadeIn"
      animateOut="animate__fadeOut"
      delay={500}
      animateOnce>
      <YourBeginning />
    </ScrollAnimation>

    <ScrollAnimation
      animateIn="animate__fadeInUp"
      animateOut="animate__fadeOut"
      animateOnce>
      <section className="features" id="1">
        <div className="wrapper">
          <Parallax
            className="features__parallax-1"
            bgClassName="features__bg"
            bgImage={features2}
            strength={100}>
            <Parallax
              className="features__parallax-2"
              bgClassName="features__bg-2"
              bgImage={features1}
              strength={200}
            />
            <div className="features__list">
              <ScrollAnimation
                animateIn="animate__fadeInUp"
                animateOut="animate__fadeOutDown"
                animateOnce>
                Университет дает возможность получить образование по
                естественно-научным, педагогическим, социальным, гуманитарным,
                экономическим, инженерно-техническим направлениям.
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="animate__fadeInUp"
                animateOut="animate__fadeOutDown"
                animateOnce>
                70 лет является ведущим ВУЗом островного региона.
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="animate__fadeInUp"
                animateOut="animate__fadeOutDown"
                animateOnce>
                Модель студенческого самоуправления и воспитательной работы
                СахГУ признана лучшей на Дальнем Востоке!
              </ScrollAnimation>
            </div>
          </Parallax>
        </div>
      </section>
    </ScrollAnimation>

    <Areas />

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

    <section className="documents" id="3">
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

    <ScrollAnimation
      animateIn="animate__fadeIn"
      animateOut="animate__fadeOut"
      animateOnce
      delay={500}>
      <Uniqueness />
    </ScrollAnimation>

    <ScrollAnimation
      animateIn="animate__fadeIn"
      animateOut="animate__fadeOut"
      animateOnce>
      <section className="graduates">
        <div className="wrapper">
          <Parallax
            className="graduates__parallax"
            bgClassName="graduates__bg graduates__bg-1"
            bgImage={graduates1}
            strength={50}>
            <Parallax
              className="graduates__parallax"
              bgClassName="graduates__bg graduates__bg-2"
              bgImage={graduates2}
              strength={200}>
              <Parallax
                className="graduates__parallax"
                bgClassName="graduates__bg graduates__bg-3"
                bgImage={graduates3}
                strength={100}>
                <div className="graduates__container">
                  <div>
                    <h2 className="title graduates__title">
                      Наши <span>выпускники</span>
                    </h2>
                    <p className="big-text">
                      Выпускники СахГУ работают в компаниях нефтегазовой
                      отрасли, банковских структурах, налоговых органах, на
                      предприятиях и научно-исследовательских учреждениях, в
                      государственных органах.
                      <br />
                      <br />
                      Ежегодно проводимый мониторинг свидетельствует, что к
                      концу года выпуска более 86% выпускников трудоустроены.
                      Это один из лучших результатов в России.
                    </p>
                  </div>
                  <Slider />
                </div>
              </Parallax>
            </Parallax>
          </Parallax>
        </div>
      </section>
    </ScrollAnimation>

    <PartingWords />

    <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut">
      <Parallax
        className="feedback__parallax"
        bgClassName="feedback__bg-3 "
        bgImage={feedback3}
        strength={150}>
        <Parallax
          className="feedback__parallax"
          bgClassName="feedback__bg-4"
          bgImage={feedback2}
          strength={200}>
          <Feedback
            formId={uuidv4()}
            title="Остались вопросы?"
            text="Оставьте свой номер и мы проконсультируем
                вас по любым вопросам, связанным с&nbsp;поступлением"
          />
        </Parallax>
      </Parallax>
    </ScrollAnimation>

    <Contacts id={5} />
  </main>
)

export default Main
