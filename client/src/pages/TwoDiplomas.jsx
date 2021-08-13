import React from 'react'
import { Parallax } from 'react-parallax'
import ScrollAnimation from 'react-animate-on-scroll'
import { Link } from 'react-scroll'
import { v4 as uuidv4 } from 'uuid'

import TemporaryHeader from '@components/Header/TemporaryHeader'
import Modal from '@components/Modal/Modal'
import Program from '@components/Program/Program'
import Feedback from '@components/Feedback/Feedback'
// eslint-disable-next-line max-len
import ConsultationBlock from '@components/ConsultationBlock/ConsultationBlock'
import Contacts from '@components/Contacts/Contacts'

import promo33 from '@assets/img/promo-33.png'
import feedback2 from '@assets/img/feedback-2.svg'
import feedback3 from '@assets/img/feedback-4.svg'
import whatIsTheProgram from '@assets/img/what-is-the-program.jpg'

const TwoDiplomas = () => (
  <>
    <TemporaryHeader />
    <main>
      <section className="promo promo--two-diplomas">
        <div className="wrapper">
          <div className="promo__container">
            <ScrollAnimation
              animateIn="animate__fadeIn"
              animateOut="animate__fadeOut"
              animateOnce>
              <h1 className="promo__title">
                Поступи в СахГУ
                <br />и получи <b>два диплома</b>
                <br />
                одновременно
              </h1>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeOut"
              delay={1000}
              animateOnce>
              <p className="text promo__text">
                СахГУ совместно с правительством региона разработало программу
                для сотрудничества с некоторыми вузами страны, в том числе
                ведущими.
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
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeOut"
              delay={1000}
              animateOnce>
              <div className="promo__stats">
                <ul>
                  <li>
                    <b>9 ведущих</b>
                    <br />
                    университетов-партнеров <br />
                    России
                  </li>
                  <li>
                    <b>11 дополнительных</b>
                    <br />
                    направлений <br />
                    подготовки
                  </li>
                  <li>
                    <b>100+</b>
                    <br />
                    индустриальных <br />
                    партнеров
                  </li>
                  <li>
                    <b>Ꝏ</b>
                    <br />
                    количество <br />
                    возможностей
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <ScrollAnimation
          className="promo__two-diplomas"
          animateIn="animate__fadeInUp"
          animateOut="animate__fadeOut"
          delay={1000}
          animateOnce>
          <img src={promo33} alt="Фото студентки" />
        </ScrollAnimation>
      </section>

      <ScrollAnimation
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
        animateOnce>
        <section className="what-is-the-program">
          <div className="wrapper">
            <div className="what-is-the-program__container">
              <h2 className="title what-is-the-program__title">
                Что такое программа
                <span>«2 диплома»</span>
              </h2>
              <img
                className="what-is-the-program__image"
                src={whatIsTheProgram}
                alt="2 диплома"
              />
              <p className="what-is-the-program__text">
                Программа «Два диплома» — это совместный образовательный проект
                СахГУ и российских университетов федерального значения.
                <br />
                <br />
                Участники этой программы получают второй диплом о присвоении
                квалификации в рамках полученного образования, помимо диплома
                островного вуза. Все это согласовано с государственными
                требованиями и стандартами.
                <br />
                <br />
                Любой может получит возможность учиться в самых престижных вузах
                страны. Нужно только выбрать дополнительный профиль от
                вуза-партнера по своему учебному направлению. Единственное
                условие — поступить в СахГУ на «бюджет».
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut"
        animateOnce>
        <Program />
      </ScrollAnimation>

      <ScrollAnimation
        animateIn="animate__fadeIn"
        animateOut="animate__fadeOut">
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
  </>
)

export default TwoDiplomas
