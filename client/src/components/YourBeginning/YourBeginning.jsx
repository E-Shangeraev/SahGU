import React, { useEffect, useState } from 'react'
import { Markup } from 'interweave'
import Modal from '@components/Modal/Modal'
// eslint-disable-next-line max-len
import ConsultationBlock from '@components/ConsultationBlock/ConsultationBlock'

import yourBeginning from '@assets/img/your-beginning.png'

import './YourBeginning.scss'

const YourBeginning = () => {
  const [content, setContent] = useState(null)

  useEffect(() => {
    fetch('/api/your-start')
      .then(response => response.json())
      .then(data => setContent(data))
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
          {content && (
            <div className="big-text">
              <Markup content={content.text} />
            </div>
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
