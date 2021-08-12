import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useLocation } from 'react-router-dom'
import { Markup } from 'interweave'
import axios from 'axios'
import arrowBackIcon from '@assets/img/icons/arrow-back.svg'
import calendarIcon from '@assets/img/icons/calendar.svg'
import newsImage from '@assets/img/news-2.jpg'

const News = () => {
  const [article, setArticle] = useState(null)
  const { id } = useParams()
  const { pathname } = useLocation()

  const handleBack = () => window.history.back()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(async () => {
    const fetchedData = await axios
      .get(`/api/news/${id}`)
      .then(({ data }) => data)
    setArticle(fetchedData)
  }, [])

  return (
    <main className="news-page">
      <div className="news-page__wrapper wrapper">
        <h1 className="title news-page__title">Новости</h1>
        <button type="button" className="news-page__back" onClick={handleBack}>
          <img src={arrowBackIcon} alt="Стрелка назад" />
          Назад
        </button>
        {article && (
          <article className="news-page__article article">
            <div className="article__container">
              <h2 className="article__title">{article.title}</h2>
              <time className="article__date">
                <img src={calendarIcon} alt="Иконка календаря" />
                <span>{new Date(article.date).toLocaleDateString()}</span>
              </time>
              <img
                src={newsImage}
                alt={article.title}
                className="article__photo"
              />
              <div className="article__text text">
                <Markup content={article.text} />
              </div>
            </div>
            <div className="article__more">
              <b>Еще больше новостей:</b>
              <ul className="article__socials">
                <li>
                  <a href="/">1</a>
                </li>
                <li>
                  <a href="/">2</a>
                </li>
                <li>
                  <a href="/">3</a>
                </li>
                <li>
                  <a href="/">4</a>
                </li>
              </ul>
            </div>
          </article>
        )}
      </div>
    </main>
  )
}

export default News
