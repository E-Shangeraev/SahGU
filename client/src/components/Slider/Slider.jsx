/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react'
import SlickSlider from 'react-slick'
import Button from '@components/Button/Button'
import './Slider.scss'
import image1 from '@assets/img/Slider/1.jpg'
import image2 from '@assets/img/Slider/2.jpg'

const Slider = () => {
  const sliderRef = useRef()
  const sliderContainerRef = useRef()

  const next = () => {
    sliderRef.current.slickNext()
  }
  const prev = () => {
    sliderRef.current.slickPrev()
  }

  const settings = {
    dots: false,
    accessibility: true,
    lazyLoad: true,
    arrows: false,
    vertical: true,
    infinite: false,
    swipe: false,
  }

  return (
    <div>
      <div className="slider" ref={sliderContainerRef}>
        <SlickSlider {...settings} ref={sliderRef}>
          <div className="slide">
            <div className="slide__top">
              <img src={image1} alt="Лещенко Максим Олегович" />
              <p>
                <span className="slide__name">Лещенко Максим Олегович</span>
                <span>Окончил обучение в июле 2018 года.</span>
              </p>
            </div>
            <blockquote>
              Самое главное впечатление для меня было, в первый месяц после
              зачисления в студенты ТНИ, что я пришёл сюда не зря, потому что
              СахГУ на самом деле даёт все шансы и возможности для собственной
              реализации.
              <br />
              <br />
              Обучение в ТНИ открыло для меня двери в осуществлении своей
              юношеской мечты &quot;Стать настоящим профессионалом и экспертом в
              своё деле&quot;. Преподавательский состав, а в частности мой
              куратор Сторожева Мария Евгеньевна навсегда останутся в моём
              сердце, так как на протяжении целых 4 лет они вкладывали в меня
              свои знания и опыт, тратив на это много сил, я могу с полной
              уверенностью на данный момент сказать, что всё это было не зря.
              <br />
              <br />
              Урок от института, который я усвоил на всю жизнь, это главное
              &quot;не стоять на месте&quot;. Чем больше ты делаешь, тем больше
              у тебя получается.
            </blockquote>
          </div>
          <div className="slide">
            <div className="slide__top">
              <img src={image2} alt="Третьякова Валентина Алексеевна" />
              <p>
                <span className="slide__name">
                  Третьякова Валентина Алексеевна
                </span>
                <span>Окончила обучение в июле 2017</span>
              </p>
            </div>
            <blockquote>
              В 2012 году поступила в технический нефтегазовый институт.
              Поступила на коммерческой основе, так как не хватило несколько
              баллов для бюджета. Первый год окончила хорошо и меня перевели на
              бюджет. Так же была стипендиатом от Роснефти и получала стипендию
              от института. Участвовали во многих мероприятиях института такие
              как: Валентинов переполох, в котором кстати мы с парнем заняли 1
              место.
              <br />
              <br />
              Устраивали посвящение для первокурсников, Новый год. Это были
              самые лучшие студенческие времена, по которым очень скучаю.
              Впечатления остались только положительные, беззаботное время,
              студенческое время.
              <br />
              <br />
              Обучение дало мне многое. На 3,4 курсе мы как студенты выступали
              на конференции в ООО «РН-Сахалинморнефтегаз». Были награждены
              дипломами и памятными призами. Что в будущем оказалось плюсом, так
              как сейчас работаю именно в этой компании.
            </blockquote>
          </div>
        </SlickSlider>
      </div>
      <div className="slider__buttons">
        <Button onClick={prev} outlined />
        <Button onClick={next} outlined />
      </div>
    </div>
  )
}

Slider.propTypes = {}

export default Slider
