import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Link } from 'react-scroll'
import Modal from '@components/Modal/Modal'
// eslint-disable-next-line max-len
import ConsultationBlock from '@components/ConsultationBlock/ConsultationBlock'

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
              СахГУ совместно с правительством региона разработало программу для
              сотрудничества с некоторыми вузами страны, в том числе ведущими.
            </p>
            <div className="promo__buttons">
              <Modal btnText="Получить консультацию" btnColor="white">
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
        </div>
      </div>
    </section>
  </main>
)

export default Bachelor
