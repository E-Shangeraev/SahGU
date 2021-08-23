/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SlickSlider from 'react-slick'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { Markup } from 'interweave'
import Button from '@components/Button/Button'
import './NewsSlider.scss'

const AWS_URL = 'https://sakhgu-images.s3.eu-central-1.amazonaws.com/'
const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }

const NewsSlider = () => {
  const [news, setNews] = useState([])
  const sliderRef = useRef()

  const next = () => {
    sliderRef.current.slickNext()
  }
  const prev = () => {
    sliderRef.current.slickPrev()
  }

  const settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    accessibility: true,
    arrows: false,
    adaptiveHeight: false,
    infinite: false,
    swipe: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  useEffect(async () => {
    const fetchedData = await axios.get('/api/news').then(({ data }) => data)
    setNews(fetchedData)
  }, [])

  return (
    <section className="news">
      <div className="wrapper">
        <div className="news__top">
          <h2 className="title">Новости</h2>
          <div className="news__buttons">
            <Button onClick={prev} outlined />
            <Button onClick={next} outlined />
          </div>
        </div>
        {news.length ? (
          <SlickSlider
            className="news__container"
            {...settings}
            ref={sliderRef}>
            {news.map(item => (
              <div key={uuidv4()} className="news__preview">
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
              </div>
            ))}
          </SlickSlider>
        ) : null}
      </div>
    </section>
  )
}

export default NewsSlider
