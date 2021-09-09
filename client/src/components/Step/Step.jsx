import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { v4 as uuidv4 } from 'uuid'
import program from '@assets/img/program.jpg'
import './Step.scss'

const AWS_URL = 'https://sakhgu-images.s3.eu-central-1.amazonaws.com/'

const Step = ({ item, onStepClick, isActive }) => {
  const {
    number,
    title,
    subtitle,
    uploadedImage,
    text,
    uploadedFile,
    fileNames,
  } = item

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
            {uploadedImage && uploadedImage.path && (
              <img
                className="step__image"
                src={`${AWS_URL}${uploadedImage.path}`}
                alt="Фотография с занятия"
              />
            )}
            <p className="step__text">{text}</p>
            {uploadedFile && uploadedFile.path.length ? (
              <p className="step__links">
                {uploadedFile.path.map((path, index) => (
                  <a
                    key={uuidv4()}
                    href={`${AWS_URL}${path}`}
                    target="_blank"
                    rel="noreferrer"
                    className="button button--outlined">
                    {fileNames.length
                      ? fileNames[index]
                      : uploadedFile.filename[index]}
                  </a>
                ))}
                {number === 3 && (
                  <a href="#4" className="button button--outlined">
                    Подать документы
                  </a>
                )}
              </p>
            ) : null}
            {number === 1 && (
              <p className="step__links">
                <a href="#2" className="button button--outlined">
                  Узнать больше
                </a>
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
