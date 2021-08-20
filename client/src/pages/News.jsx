import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useLocation } from 'react-router-dom'
import { Markup } from 'interweave'
import axios from 'axios'
import TemporaryHeader from '@components/Header/TemporaryHeader'
import arrowBackIcon from '@assets/img/icons/arrow-back.svg'
import calendarIcon from '@assets/img/icons/calendar.svg'
import vkIcon from '@assets/img/icons/vk-2.svg'
import instagramIcon from '@assets/img/icons/instagram.svg'
import tiktokIcon from '@assets/img/icons/tiktok.svg'
import okIcon from '@assets/img/icons/odnoklassniki.svg'

const AWS_URL = 'https://sakhgu-images.s3.eu-central-1.amazonaws.com/'

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
    <>
      <TemporaryHeader />
      <main className="news-page">
        <div className="news-page__wrapper wrapper">
          <h1 className="title news-page__title">Новости</h1>
          <button
            type="button"
            className="news-page__back"
            onClick={handleBack}>
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
                {article.uploadedFile && (
                  <img
                    className="article__photo"
                    src={`${AWS_URL}${article.uploadedFile.path}`}
                    alt={article.title}
                  />
                )}
                <div className="article__text text">
                  <Markup content={article.text} />
                </div>
              </div>
              <div className="article__more">
                <b>Еще больше новостей:</b>
                <ul className="article__socials">
                  <li>
                    <a
                      href="https://vk.com/sakhgu"
                      target="_blank"
                      rel="noreferrer"
                      className="article__social article__social--vk">
                      <img src={vkIcon} alt="Логотип ВКонтакте" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/sakhgu/"
                      target="_blank"
                      rel="noreferrer"
                      className="article__social article__social--instagram">
                      <img src={instagramIcon} alt="Логотип Instagram" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@sakhgu?lang=ru-RU"
                      target="_blank"
                      rel="noreferrer"
                      className="article__social article__social--tiktok">
                      <img src={tiktokIcon} alt="Логотип TikTok" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://ok.ru/sakhgu"
                      target="_blank"
                      rel="noreferrer"
                      className="article__social arrticle__social--ok">
                      <img src={okIcon} alt="Логотип Одноклассники" />
                    </a>
                  </li>
                </ul>
              </div>
            </article>
          )}
        </div>
      </main>
    </>
  )
}

export default News
