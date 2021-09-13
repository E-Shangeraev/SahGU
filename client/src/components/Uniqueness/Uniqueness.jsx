import React, { useEffect, useState } from 'react'
import { Markup } from 'interweave'
import uniqueness1 from '@assets/img/uniqueness-1.png'
import uniqueness2 from '@assets/img/uniqueness-2.png'
import uniqueness3 from '@assets/img/uniqueness-3.png'

import './Uniqueness.scss'

const Uniqueness = () => {
  const [content, setContent] = useState([])

  useEffect(() => {
    fetch('/api/uniqueness')
      .then(response => response.json())
      .then(data => setContent(data))
  }, [])

  return (
    <section className="uniqueness" id="4">
      <div className="wrapper">
        <div className="uniqueness__column">
          <h2 className="title uniqueness__title">
            <span>Уникальность</span> СахГУ
          </h2>
          <img
            className="uniqueness__big-image"
            src={uniqueness1}
            alt="Фото студентов"
          />
          <div className="uniqueness__container">
            {content[0] && (
              <div>
                <h3 className="subtitle">{content[0].title}</h3>
                <div className="text uniqueness__text">
                  <Markup content={content[0].text} />
                </div>
              </div>
            )}
            {content[1] && (
              <div>
                <h3 className="subtitle">{content[1].title}</h3>
                <div className="text uniqueness__text">
                  <Markup content={content[1].text} />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="uniqueness__container">
          {content[2] && (
            <div>
              <img src={uniqueness2} alt="Фото студентов" />
              <h3 className="subtitle">{content[2].title}</h3>
              <div className="text uniqueness__text">
                <Markup content={content[2].text} />
              </div>
            </div>
          )}
          {content[3] && (
            <div>
              <img src={uniqueness3} alt="Фото студентов" />
              <h3 className="subtitle">{content[3].title}</h3>
              <div className="text uniqueness__text">
                <Markup content={content[3].text} />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Uniqueness
