/* eslint-disable max-len */
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Step from '@components/Step/Step'
import './Steps.scss'

const Steps = ({ qualification, url }) => {
  const [steps, setSteps] = useState([])

  useEffect(async () => {
    const data = await axios.get(url)
    setSteps(data)
  }, [])

  return (
    <section className="steps">
      <div className="wrapper">
        <div className="steps__container">
          <h2 className="title steps__title">
            Шаги: <br />
            как поступить <br />
            <span>на {qualification}?</span>
          </h2>
          <ul className="steps__list">
            <Step
              item={{
                title: 'Изучить',
                subtitle:
                  'образовательные программы, которые есть в университете',
                text: 'Самое волнительное во всем процессе поступления – это, конечно же, сдача вступительных испытаний. Именно от успешного завершения этого этапа зависит то, на какую программу и в какой вуз вы можете поступить. Чем выше планка баллов, установленная университетом, тем качественнее образование, которое он предоставляет тем талантливым студентам, которые выдержали даже самый серьезный конкурс.',
              }}
            />
            <Step
              item={{
                title: 'Сдать ЕГЭ',
                subtitle:
                  'необходимые для поступления на понравившуюся специальность',
                text: 'Самое волнительное во всем процессе поступления – это, конечно же, сдача вступительных испытаний. Именно от успешного завершения этого этапа зависит то, на какую программу и в какой вуз вы можете поступить. Чем выше планка баллов, установленная университетом, тем качественнее образование, которое он предоставляет тем талантливым студентам, которые выдержали даже самый серьезный конкурс.',
              }}
            />
          </ul>
        </div>
      </div>
    </section>
  )
}

Steps.propTypes = {
  qualification: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Steps
