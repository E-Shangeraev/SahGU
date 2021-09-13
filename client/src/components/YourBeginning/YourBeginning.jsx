import React, { useEffect, useState } from 'react'
import Modal from '@components/Modal/Modal'
import yourBeginning from '@assets/img/your-beginning.png'
// eslint-disable-next-line max-len
import ConsultationBlock from '@components/ConsultationBlock/ConsultationBlock'
import './YourBeginning.scss'

const YourBeginning = () => {
  const [text, setText] = useState(null)

  useEffect(() => {
    fetch('/api/your-start')
      .then(response => response.json())
      .then(data => setText(data))
  }, [])

  return (
    <section className="your-beginning">
      <div className="wrapper">
        <div className="your-beginning__container">
          <img
            className="your-beginning__image"
            src={yourBeginning}
            alt="Твоё начало пути"
          />
          <h2 className="title your-beginning__title">
            Твоё <span>начало</span> пути
          </h2>
          {text && (
            <p className="big-text">
              Многолетний опыт и сложившиеся традиции позволяют университету
              выпускать высококлассных специалистов, которым открыты дороги во
              все перспективные направления деятельности.
              <br />
              <br />
              Сегодня Сахалинский государственный университет является
              современным образовательным, научным и мультикультурным центром,
              что делает востребованными выпускников СахГУ не только в России,
              но и в странах АТР.
            </p>
          )}
          <Modal btnText="Хочу здесь учиться" btnColor="purple">
            <ConsultationBlock
              title="Заявка на обучение"
              text="Оставьте свои контактные данные и мы подскажем
                    вам что нужно для того, чтобы поступить в СахГУ"
            />
          </Modal>
        </div>
      </div>
    </section>
  )
}

export default YourBeginning
