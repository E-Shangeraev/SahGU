import React from 'react'
import { Parallax } from 'react-parallax'
import Button from './components/Button'
import Switch from './components/Switch'
import Checkbox from './components/Checkbox'

import logo from './logo.png'
import promo1 from './assets/img/promo-1.png'
import promo2 from './assets/img/promo-2.png'
import arrow from './assets/img/icons/arrow.svg'
import newsBig from './assets/img/news-big.jpg'
import news1 from './assets/img/news-1.jpg'
import news2 from './assets/img/news-2.jpg'
import yourBeginning from './assets/img/your-beginning.png'
import features1 from './assets/img/features-1.png'
import features2 from './assets/img/features-2.png'
import Area from './components/Area'

const areas = [
  {
    name: 'Педагогическое образование (бакалавриат)',
    twoDiplomas: true,
    count: [15, 15, 138],
  },
  {
    name: 'Туризм (бакалавриат)',
    twoDiplomas: false,
    count: [18, 10, 130],
  },
  {
    name: 'Лингвистика (бакалавриат)',
    twoDiplomas: false,
    count: [18, 12, 233],
  },
]

function App() {
  return (
    <div className="App">
      <header className="header">
        <img className="header__logo" src={logo} alt="Логотип СахГУ" />
        <nav className="header__nav">
          <ul>
            <li>
              <a href="#1">Про СахГУ</a>
            </li>
            <li>
              <a href="#1">Направления подготовки</a>
            </li>
            <li>
              <a href="#1">Уникальность СахГУ</a>
            </li>
            <li>
              <a href="#1">Отзывы выпускников</a>
            </li>
            <li>
              <a href="#1">Контакты</a>
            </li>
          </ul>
        </nav>
        <a href="tel:8 (4242) 45−03−00" className="header__phone">
          8 (4242) 45−03−00
        </a>
        <Button color="yellow">Получить консультацию</Button>
      </header>
      <main>
        <section className="promo">
          <div className="wrapper">
            <div className="promo__container">
              <div>
                <h1 className="promo__title">
                  Сахалинский Государственный Университет
                  <br />
                  <span>— лучшее начало пути</span>
                </h1>
                <p className="text promo__text">
                  Оставьте заявку и получите консультацию о направлениях
                  подготовки, проходных баллах и других вопросах про поступление
                </p>
                <div className="promo__buttons">
                  <Button color="purple">Получить консультацию</Button>
                  <a href="#2" className="button button--outlined">
                    Узнать больше
                  </a>
                </div>
              </div>
              <Parallax
                className="promo__parallax"
                bgClassName="promo__bg"
                bgImage={promo2}
                strength={500}>
                <img src={promo1} alt="Фото студентов" />
              </Parallax>
            </div>
          </div>
        </section>
        <section className="news">
          <div className="wrapper">
            <div className="news__top">
              <h2 className="title">Новости</h2>
              <Button outlined>
                <span>Все новости</span>
                <object data={arrow} type="image/svg+xml">
                  Ваш браузер не поддерживает SVG
                </object>
              </Button>
            </div>
            <ul className="news__container">
              <li className="news__preview">
                <a href="/">
                  <div className="news__image">
                    <img src={newsBig} alt="Приемная кампания 2021" />
                  </div>
                  <div className="news__bottom">
                    <div className="bage">21 июня, 2021</div>
                    <span className="news__title">Приемная кампания 2021</span>
                    <span className="text news__text">
                      В Сахалинском Государствнном университете началась
                      приёмная кампания.
                    </span>
                  </div>
                </a>
              </li>
              <li className="news__preview">
                <a href="/">
                  <div className="news__image">
                    <img
                      src={news1}
                      // eslint-disable-next-line max-len
                      alt="Сахалинский госуниверситет будет готовить специалистов АСУ"
                    />
                  </div>
                  <div className="news__bottom">
                    <div className="bage">21 июня, 2021</div>
                    <span className="news__title">
                      Сахалинский госуниверситет будет готовить специалистов АСУ
                    </span>
                    <span className="text news__text">
                      Соглашение о сотрудничестве заключил Сахалинский
                      государственный университет с ООО «Иокогава Электрик
                      Сахалин».
                    </span>
                  </div>
                </a>
              </li>
              <li className="news__preview">
                <a href="/">
                  <div className="news__image">
                    <img src={news2} alt="Билет на скорый поезд" />
                  </div>
                  <div className="news__bottom">
                    <div className="bage">21 июня, 2021</div>
                    <span className="news__title">Билет на скорый поезд</span>
                    <span className="text news__text">
                      Творческие студии университета приглашают студентов и
                      жителей города на отчетный концерт.
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="your-beginning">
          <div className="wrapper">
            <div className="your-beginning__container">
              <img
                className="your-beginning__image"
                src={yourBeginning}
                alt="Твоё начало пути"
              />
              <h2 className="title your-beginning__title">
                Твоё <span>начало</span> пути
              </h2>
              <p className="big-text">
                Многолеетний опыт и сложившиеся традиции позволяют университету
                выпускать высококлассных специалистов, которым открыты дороги во
                все перспективные направления деятельности.
                <br />
                <br />
                Сегодня Сахалинский государственный университет является
                совремеенным образовательным, научным и мультикультурным
                центром, что делает востребованым выпускников СахГУ не только в
                России, но и странах АТР
              </p>
              <Button color="purple">Хочу здесь учиться</Button>
            </div>
          </div>
        </section>
        <section className="features">
          <div className="wrapper">
            <Parallax
              className="features__parallax-1"
              bgClassName="features__bg"
              bgImage={features2}
              strength={300}>
              <Parallax
                className="features__parallax-2"
                bgClassName="features__bg-2"
                bgImage={features1}
                strength={400}
              />
              <ul className="features__list">
                <li>
                  Университет дает возможность получить образование по
                  естественно-научным, педагогическим, социальным, гуманитарным,
                  экономическим, инженерно-технических направлениям.
                </li>
                <li>70 лет является ведущим ВУЗом островного региона.</li>
                <li>
                  Модель студенческого самоуправления и воспитательной работы
                  СахГУ признана лучшей на Дальнем Востоке!
                </li>
              </ul>
            </Parallax>
          </div>
        </section>
        <section className="areas">
          <div className="wrapper">
            <div className="areas__container">
              <h2 className="title areas__title">
                <span>Направления </span>подготовки
              </h2>
              <p className="big-text areas__text">
                Вы можете ознакомиться со всеми направлениями обучения на 2021
                год, выбрать предметы которые сдаёте и посмотреть именно те,
                которые были бы интересны вам!
              </p>
              <form className="areas__filters">
                <Switch
                  options={{
                    name: 'type',
                    firstValue: 'Магистратура',
                    secondValue: 'Бакалавр/Специалитет',
                  }}
                />
                <Switch
                  options={{
                    name: 'areas',
                    firstValue: 'Все направления',
                    secondValue: 'Выбрать редметы',
                  }}
                />
                <Checkbox
                  values={[
                    'Информатика',
                    'Русский язык',
                    'Биология',
                    'Литература',
                    'Физика',
                    'Иностранный язык',
                    'Математика',
                    'Обществознание',
                    'История',
                    'География',
                  ]}
                />
              </form>
              {/* <ul className="areas__list">
                {areas.map(item => (
                  <Area
                    name={item.name}
                    twoDiplomas={item.twoDiplomas}
                    count={item.count}
                  />
                ))}
              </ul> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
