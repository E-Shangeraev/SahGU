import React, { useCallback, useEffect, useState } from 'react'
import { Parallax } from 'react-parallax'
import ScrollAnimation from 'react-animate-on-scroll'
import PropTypes from 'prop-types'
import axios from 'axios'
import Step from '@components/Step/Step'
import feedback1 from '@assets/img/feedback-1.svg'
import feedback3 from '@assets/img/feedback-4.svg'
import './Steps.scss'

const Steps = React.memo(({ qualification, url }) => {
  const [steps, setSteps] = useState([])
  const [activeStep, setActiveStep] = useState()

  const handleClickStep = useCallback(number => {
    setActiveStep(prev => (prev === number ? null : number))
  }, [])

  useEffect(async () => {
    const items = await axios.get(url).then(({ data }) => data)
    setSteps(items)
  }, [])

  return (
    <section className="steps">
      <div className="wrapper">
        <div className="steps__container">
          <div>
            <h2 className="title steps__title">
              Шаги: <br />
              как поступить <br />
              <span>{qualification}?</span>
            </h2>
            <ScrollAnimation
              className="step__picture"
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeOut"
              delay={1000}
              animateOnce>
              <Parallax
                className="step__parallax"
                bgClassName="step__bg-1"
                bgImage={feedback1}
                strength={150}>
                <Parallax
                  className="step__parallax"
                  bgClassName="step__bg-2"
                  bgImage={feedback3}
                  strength={200}>
                  <div style={{ height: '400px', width: '100%' }} />
                </Parallax>
              </Parallax>
            </ScrollAnimation>
          </div>
          <ul className="steps__list">
            {steps.length
              ? steps.map(item => (
                  <Step
                    key={item.number}
                    item={item}
                    onStepClick={handleClickStep}
                    isActive={activeStep === item.number}
                  />
                ))
              : null}
          </ul>
        </div>
      </div>
    </section>
  )
})

Steps.propTypes = {
  qualification: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Steps
