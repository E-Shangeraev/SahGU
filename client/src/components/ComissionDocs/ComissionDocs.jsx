import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import Modal from '@components/Modal/Modal'
import './ComissionDocs.scss'

const AWS_URL = 'https://sakhgu-images.s3.eu-central-1.amazonaws.com/'

const ComissionDocs = ({ name, apiName }) => {
  const [documents, setDocuments] = useState([])

  useEffect(async () => {
    const docs = await axios
      .get(`/api/documents/${apiName}`)
      .then(({ data }) => data)
    setDocuments(docs)
  }, [])

  return (
    <Modal btnText={name} containerClass="comission-docs">
      {documents.length ? (
        documents.map(documentsSection => (
          <div className="comission-docs__section" key={uuidv4()}>
            {documentsSection.title && (
              <h3 className="comission-docs__subtitle">
                {documentsSection.title}
              </h3>
            )}
            <ul className="comission-docs__list">
              {documentsSection.uploadedFile.path.map(file => (
                <li key={uuidv4()}>
                  <a href={`${AWS_URL}${file}`}>
                    {file
                      .split('/')[1]
                      .replace(/\.(docx|doc|pdf|txt|xls|xlsx)/gi, '')
                      .replace(/-/g, ' ')}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <h3 className="comission-docs__subtitle">Здесь пока пусто</h3>
      )}
    </Modal>
  )
}

ComissionDocs.propTypes = {
  name: PropTypes.string.isRequired,
  apiName: PropTypes.string.isRequired,
}

export default ComissionDocs
