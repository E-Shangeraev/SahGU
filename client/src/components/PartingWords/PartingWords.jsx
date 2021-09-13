import React, { useEffect, useState } from 'react'
import { Markup } from 'interweave'

const AWS_URL = 'https://sakhgu-images.s3.eu-central-1.amazonaws.com/'

const PartingWords = () => {
  const [rectorData, setRectorData] = useState(null)

  useEffect(() => {
    fetch('/api/rector')
      .then(response => response.json())
      .then(data => setRectorData(data))
  }, [])

  return (
    <section className="parting-words">
      <div className="wrapper">
        {rectorData && (
          <div className="parting-words__container">
            <img
              src={`${AWS_URL}${rectorData.uploadedFile.path}`}
              alt={rectorData.name}
            />
            <h2 className="title parting-words__title">
              <span>Слова</span> напутствия
            </h2>
            <p>
              <span className="parting-words__name">{rectorData.name}</span>
              <small>{rectorData.post}</small>
            </p>
            <blockquote>
              <Markup content={rectorData.text} />
            </blockquote>
          </div>
        )}
      </div>
    </section>
  )
}

export default PartingWords
