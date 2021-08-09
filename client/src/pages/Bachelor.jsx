/* eslint-disable max-len */
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Link } from 'react-scroll'
import Modal from '@components/Modal/Modal'
import ConsultationBlock from '@components/ConsultationBlock/ConsultationBlock'
import InstitutesAndAreas from '@components/InstitutesAndAreas/InstitutesAndAreas'

import promo2 from '@assets/img/Bachelor/promo-2.png'

const Bachelor = () => (
  <main>
    <section className="promo promo--bachelor">
      <div className="wrapper">
        <div className="promo__container">
          <ScrollAnimation
            animateIn="animate__fadeIn"
            animateOut="animate__fadeOut"
            animateOnce>
            <h1 className="promo__title">
              Поступи на
              <br />
              <b>бакалавриат</b> в СахГУ
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
      <InstitutesAndAreas />
    </ScrollAnimation>
  </main>
)

export default Bachelor
