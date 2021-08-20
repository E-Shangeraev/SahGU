/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { Markup } from 'interweave'
import './NewsSlider.scss'

const AWS_URL = 'https://sakhgu-images.s3.eu-central-1.amazonaws.com/'
const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }

const NewsSlider = () => {
  const [news, setNews] = useState([])

  useEffect(async () => {
    const fetchedData = await axios.get('/api/news').then(({ data }) => data)
    setNews(fetchedData)
  }, [])

  return (
    <section className="news">
      <div className="wrapper">
        <div className="news__top">
          <h2 className="title">Новости</h2>
        </div>
        {news.length ? (
          <ul className="news__container">
            {news.map(item => (
              <li key={uuidv4()} className="news__preview">
                <Link to={`/news/${item._id}`}>
                  <div className="news__image">
                    {item.uploadedFile && (
                      <img
                        src={`${AWS_URL}${item.uploadedFile.path}`}
                        alt={item.title}
                      />
                    )}
                  </div>
                  <div className="news__bottom">
                    <div className="bage">
                      {new Intl.DateTimeFormat('ru-RU', dateOptions).format(
                        new Date(item.date),
                      )}
                    </div>
                    <span className="news__title">{item.title}</span>
                    <div className="text news__text">
                      <Markup content={item.previewText} />
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  )
}

export default NewsSlider
