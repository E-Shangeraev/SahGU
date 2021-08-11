import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { v4 as uuidv4 } from 'uuid'
import './Step.scss'

const Step = ({ item, onStepClick, isActive }) => {
  const { number, title, subtitle, text, links } = item

  const collapsibleRef = useRef()

  const handleToggleOpen = () => onStepClick(number)

  useEffect(() => {
    if (isActive) {
      collapsibleRef.current.style.maxHeight = `
      ${collapsibleRef.current.scrollHeight}px
      `
    } else {
      collapsibleRef.current.style.maxHeight = ''
    }
  }, [isActive])

  return (
    <li className="step">
      <div className="step__container">
        <div className="step__number">
          <div className="step__number-border">
            {number < 10 ? `0${number}` : number}
          </div>
        </div>
        <div>
          <h3 className="step__title">{title}</h3>
          <h4 className="step__subtitle">{subtitle}</h4>
          <div className="step__collapsible" ref={collapsibleRef}>
            <p className="step__text">{text}</p>
            {links.length ? (
              <p className="step__links">
                {links.map(link => (
                  <a
                    key={uuidv4()}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer">
                    {link.name}
                  </a>
                ))}
              </p>
            ) : null}
            {number === 1 && (
              <p className="step__links">
                <a href="#2">Узнать больше</a>
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={handleToggleOpen}
            className={classNames('step__button', { active: isActive })}>
            Подробнее
          </button>
        </div>
      </div>
    </li>
  )
}

Step.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  onStepClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
}

export default Step
