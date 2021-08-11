import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import Step from '@components/Step/Step'
import './Steps.scss'

const Steps = React.memo(({ qualification, url }) => {
  const [steps, setSteps] = useState()
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
          <h2 className="title steps__title">
            Шаги: <br />
            как поступить <br />
            <span>на {qualification}?</span>
          </h2>
          <ul className="steps__list">
            {steps &&
              steps.map(item => (
                <Step
                  key={uuidv4()}
                  item={item}
                  onStepClick={handleClickStep}
                  isActive={activeStep === item.number}
                />
              ))}
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
