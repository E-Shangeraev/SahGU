/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { Markup } from 'interweave'
import Button from '@components/Button/Button'

import arrowRight from '@assets/img/icons/arrow-right.svg'
import newsBig from '@assets/img/news-big.jpg'
import news1 from '@assets/img/news-1.jpg'
import news2 from '@assets/img/news-2.jpg'

import './NewsSlider.scss'

const images = [newsBig, news2, news1]

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
          <Button outlined>
            <span>Все новости</span>
            <object data={arrowRight} type="image/svg+xml">
              Ваш браузер не поддерживает SVG
            </object>
          </Button>
        </div>
        {news.length ? (
          <ul className="news__container">
            {news.map((item, index) => (
              <li key={uuidv4()} className="news__preview">
                <Link to={`/news/${item._id}`}>
                  <div className="news__image">
                    <img src={images[index]} alt="Приемная кампания 2021" />
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
