import React from 'react'
import { Parallax } from 'react-parallax'
import ScrollAnimation from 'react-animate-on-scroll'
import { v4 as uuidv4 } from 'uuid'

import Button from './components/Button'
import Switch from './components/Switch'
import Checkbox from './components/Checkbox'
import Area from './components/Area'
import Feedback from './components/Feedback'
import DocumentsWay from './components/DocumentsWay'
import Slider from './components/Slider'

import logo from './logo.png'
import promo1 from './assets/img/promo-1.png'
import promo2 from './assets/img/promo-2.png'
import arrowRight from './assets/img/icons/arrow-right.svg'
import newsBig from './assets/img/news-big.jpg'
import news1 from './assets/img/news-1.jpg'
import news2 from './assets/img/news-2.jpg'
import yourBeginning from './assets/img/your-beginning.png'
import features1 from './assets/img/features-1.png'
import features2 from './assets/img/features-2.png'
import feedback1 from './assets/img/feedback-1.svg'
import feedback2 from './assets/img/feedback-2.svg'
import feedback3 from './assets/img/feedback-4.svg'
import gosuslugi from './assets/img/icons/gosusllugi.png'
import post from './assets/img/icons/post.png'
import handshake from './assets/img/icons/handshake.png'
import mail from './assets/img/icons/mail.png'
import uniqueness1 from './assets/img/uniqueness-1.png'
import uniqueness2 from './assets/img/uniqueness-2.png'
import uniqueness3 from './assets/img/uniqueness-3.png'
import graduates1 from './assets/img/graduates-1.png'
import graduates2 from './assets/img/graduates-2.png'
import graduates3 from './assets/img/graduates-3.png'
import partingWords from './assets/img/parting-words.png'
import contacts from './assets/img/contacts.jpg'
import phone from './assets/img/icons/phone.svg'
import letter from './assets/img/icons/letter.svg'
import world from './assets/img/icons/world.svg'
import mark from './assets/img/icons/mark.svg'
import logoFooter from './assets/img/logo-footer.png'
import instagram from './assets/img/icons/instagram.svg'
import vk from './assets/img/icons/vk.svg'

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
                <ScrollAnimation
                  animateIn="animate__fadeIn"
                  animateOut="animate__fadeOut"
                  animateOnce>
                  <h1 className="promo__title">
                    Сахалинский Государственный Университет
                  </h1>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInUp"
                  animateOut="animate__fadeOut"
                  delay={1000}
                  animateOnce>
                  <span className="promo__title">— лучшее начало пути</span>
                  <p className="text promo__text">
                    Оставьте заявку и получите консультацию о направлениях
                    подготовки, проходных баллах и других вопросах про
                    поступление
                  </p>
                  <div className="promo__buttons">
                    <Button color="purple">Получить консультацию</Button>
                    <a href="#2" className="button button--outlined">
                      Узнать больше
                    </a>
                  </div>
                </ScrollAnimation>
              </div>

              <ScrollAnimation
                animateIn="animate__fadeInUp"
                animateOut="animate__fadeOut"
                delay={1000}
                animateOnce>
                <Parallax
                  className="promo__parallax"
                  bgClassName="promo__bg"
                  bgImage={promo2}
                  strength={500}>
                  <img src={promo1} alt="Фото студентов" />
                </Parallax>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        <ScrollAnimation
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          delay={500}
          animateOnce>
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
              <ul className="news__container">
                <li className="news__preview">
                  <a href="/">
                    <div className="news__image">
                      <img src={newsBig} alt="Приемная кампания 2021" />
                    </div>
                    <div className="news__bottom">
                      <div className="bage">21 июня, 2021</div>
                      <span className="news__title">
                        Приемная кампания 2021
                      </span>
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
                        Сахалинский госуниверситет будет готовить специалистов
                        АСУ
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
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          delay={500}
          animateOnce>
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
                  Многолеетний опыт и сложившиеся традиции позволяют
                  университету выпускать высококлассных специалистов, которым
                  открыты дороги во все перспективные направления деятельности.
                  <br />
                  <br />
                  Сегодня Сахалинский государственный университет является
                  совремеенным образовательным, научным и мультикультурным
                  центром, что делает востребованым выпускников СахГУ не только
                  в России, но и странах АТР
                </p>
                <Button color="purple">Хочу здесь учиться</Button>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation
          animateIn="animate__fadeInUp"
          animateOut="animate__fadeOut"
          animateOnce>
          <section className="features">
            <div className="wrapper">
              <Parallax
                className="features__parallax-1"
                bgClassName="features__bg"
                bgImage={features2}
                strength={100}>
                <Parallax
                  className="features__parallax-2"
                  bgClassName="features__bg-2"
                  bgImage={features1}
                  strength={200}
                />
                <div className="features__list">
                  <ScrollAnimation
                    animateIn="animate__fadeInUp"
                    animateOut="animate__fadeOutDown">
                    Университет дает возможность получить образование по
                    естественно-научным, педагогическим, социальным,
                    гуманитарным, экономическим, инженерно-технических
                    направлениям.
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="animate__fadeInUp"
                    animateOut="animate__fadeOutDown">
                    70 лет является ведущим ВУЗом островного региона.
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="animate__fadeInUp"
                    animateOut="animate__fadeOutDown">
                    Модель студенческого самоуправления и воспитательной работы
                    СахГУ признана лучшей на Дальнем Востоке!
                  </ScrollAnimation>
                </div>
              </Parallax>
            </div>
          </section>
        </ScrollAnimation>

        <section className="areas">
          <div className="wrapper">
            <div className="areas__container">
              <ScrollAnimation animateIn="animate__fadeIn" animateOnce>
                <h2 className="title areas__title">
                  <span>Направления </span>подготовки
                </h2>
                <p className="big-text areas__text">
                  Вы можете ознакомиться со всеми направлениями обучения на 2021
                  год, выбрать предметы которые сдаёте и посмотреть именно те,
                  которые были бы интересны вам!
                </p>
              </ScrollAnimation>
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
              <ul className="areas__list">
                {areas.map(item => (
                  <Area
                    key={uuidv4()}
                    name={item.name}
                    twoDiplomas={item.twoDiplomas}
                    count={item.count}
                  />
                ))}
              </ul>
            </div>
          </div>
        </section>

        <ScrollAnimation
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut">
          <Parallax
            className="feedback__parallax"
            bgClassName="feedback__bg-1"
            bgImage={feedback1}
            strength={150}>
            <Parallax
              className="feedback__parallax"
              bgClassName="feedback__bg-2"
              bgImage={feedback2}
              strength={200}>
              <Feedback
                formId={uuidv4()}
                title="Не можете определиться?"
                text="Оставьте свой номер и мы поможем вам с выборм!"
              />
            </Parallax>
          </Parallax>
        </ScrollAnimation>

        <section className="documents">
          <div className="wrapper">
            <h2 className="title document__title">
              Способы <span>подачи</span> документов
            </h2>
            <ul className="documents__ways">
              <DocumentsWay
                name="Через  личный кабинет на Госуслугах"
                img={gosuslugi}
              />
              <DocumentsWay name="Почтой России" img={post} />
              <DocumentsWay name="Лично" img={handshake} />
              <DocumentsWay name="По электронной почте" img={mail} />
            </ul>
          </div>
        </section>
        <ScrollAnimation
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          animateOnce
          delay={500}>
          <section className="uniqueness">
            <div className="wrapper">
              <h2 className="title uniqueness__title">
                <span>Уникальность</span> СахГУ
              </h2>
              <img
                className="uniqueness__big-image"
                src={uniqueness1}
                alt="Фото студентов"
              />
              <div className="uniqueness__container">
                <div>
                  <h3 className="subtitle">Stud Life</h3>
                  <p className="text uniqueness__text">
                    Университет — это точка для развития и притяжения островной
                    молодежи.
                    <br />
                    <br />
                    Здесь, на Сахалине, создана мощная система студенческого
                    самоуправления и волонтерского движения. Любой студент
                    университета, который готов предложить проект, может быть
                    уверен в том, что он найдет поддержку, а также у него
                    появится возможность реализовать свою идею.
                    <br />
                    <br />
                    СахГУ это не только учеба, студенты университета могут
                    попробовать свои силы в спорте, творчестве,
                    социально-значимых проектах, проявить свои лидерские и
                    организаторские способности. С этой целью в университете
                    создано множество секций, кружков и объединений.
                  </p>
                </div>
                <div>
                  <h3 className="subtitle">
                    Большая стипендия — это возможно!
                  </h3>
                  <p className="text uniqueness__text">
                    Для студента важно обеспечить себя во время учебы в
                    университете.
                    <br />
                    <br />
                    СахГУ дает такую возможность своим студентам, поэтому
                    средний размер стипендии <b>превышает в&nbsp;5 раз</b>{' '}
                    стипендии в&nbsp;Москве и&nbsp;Санкт-Петербурге.
                    <br />
                    <br />
                    Государственная повышенная стипендия, которую получают
                    студенты СахГУ за активное участие в жизни вуза, высокую
                    успеваемость, достижения в научной, общественной, спортивной
                    или культурно-творческой деятельности достигает{' '}
                    <b>20&nbsp;000&nbsp;₽</b> в месяц.
                    <br />
                    <br />
                    Помимо этого, студенты могут получать социальные, именные и
                    другие стипендии.
                  </p>
                </div>
              </div>
              <div className="uniqueness__container">
                <div>
                  <img src={uniqueness2} alt="Фото студентов" />
                  <h3 className="subtitle">
                    Международные
                    <br /> программы по обмену
                  </h3>
                  <p className="text uniqueness__text">
                    Более 25 лет развиваются отношения СахГУ с университетами
                    Японии, Южной Кореи, Китая. Каждый семестр выделяются лучшие
                    студенты для участия в программах по обмену. У каждого
                    студента есть шанс получить опыт в ведущих вузах мира
                  </p>
                </div>
                <div>
                  <img src={uniqueness3} alt="Фото студентов" />
                  <h3 className="subtitle">Два диплома</h3>
                  <p className="text uniqueness__text">
                    Программа «Два диплома» — это совместный образовательный
                    проект СахГУ и крупных российских вузов.
                    <br />
                    <br />
                    Студенты, участвующие в программе, помимо диплома островного
                    вуза получают второй диплом, который дает возможность
                    заниматься дополнительной деятельностью в рамках полученного
                    образования.
                    <br />
                    <br />
                    Программа реализуется согласно государственными требованиям
                    и стандартам.
                    <br />
                    <br />
                    Для участия необходимо поступить в СахГУ на бюджетную основу
                    и выбрать один из предложенных профилей вуза-партнера.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut"
          animateOnce>
          <section className="graduates">
            <div className="wrapper">
              <Parallax
                className="graduates__parallax"
                bgClassName="graduates__bg graduates__bg-1"
                bgImage={graduates1}
                strength={50}>
                <Parallax
                  className="graduates__parallax"
                  bgClassName="graduates__bg graduates__bg-2"
                  bgImage={graduates2}
                  strength={200}>
                  <Parallax
                    className="graduates__parallax"
                    bgClassName="graduates__bg graduates__bg-3"
                    bgImage={graduates3}
                    strength={100}>
                    <div className="graduates__container">
                      <div>
                        <h2 className="title graduates__title">
                          Наши <span>выпускники</span>
                        </h2>
                        <p className="big-text">
                          Выпускники СахГУ работают в компаниях нефтегазовой
                          отрасли, банковских структурах, налоговых органах, на
                          предприятиях и научно-исследовательских учреждениях, в
                          государственныхорганах.
                          <br />
                          <br />
                          Ежегодно проводимый мониторинг свидетельствует, что к
                          концу года выпуска более 86% выпускников
                          трудоустроены. Это один из лучших результатов в
                          России.
                        </p>
                      </div>
                      <Slider />
                    </div>
                  </Parallax>
                </Parallax>
              </Parallax>
            </div>
          </section>
        </ScrollAnimation>
        <section className="parting-words">
          <div className="wrapper">
            <div className="parting-words__container">
              <img
                src={partingWords}
                alt="Мария Ганченкова — ио ректора СахГУ"
              />
              <div>
                <h2 className="title parting-words__title">
                  <span>Слова</span> напутствия
                </h2>
                <span className="parting-words__name">Мария Ганченкова</span>
                <small>ио ректора СахГУ</small>
                <blockquote>
                  Дорогие абитуриенты!
                  <br />
                  <br />
                  Перед вами стоит важный выбор профессионального пути во
                  взрослой жизни. Это решение позволит вам стать успешными и
                  счастливыми.
                  <br />
                  <br />
                  Наш университет – это место, где каждый имеет возможность
                  реализовать свой личностный, научный и творческий потенциал.
                  Это место, где традиционные для классического университета
                  гуманитарные и естественнонаучные направления и специальности
                  дополняются техническим образованием, востребованным на
                  российском рынке труда. Мы ведем активную работу по обмен
                  студентами и преподавателями с зарубежными вузами, а также
                  даем возможность получения дипломов двух вузов.
                  <br />
                  <br />
                  Мы делаем всё, чтобы университетское образование стало прочным
                  фундаментом профессиональных возможностей выпускников. Мы
                  заинтересованы в том, чтобы каждый выпускник обладал высоким
                  интеллектом и яркой индивидуальностью.
                  <br />
                  <br />
                  Важнейшим показателем вуза является качество подготовки его
                  выпускников. Среди наших выпускников – ученые, спортсмены,
                  руководители крупных предприятий региона.
                  <br />
                  <br />
                  Сахалинский государственный университет открывает перед вами
                  сотни дорог. Каким бы ни был выбор вашей будущей профессии,
                  университет даст вам не только образование, но и верных
                  друзей, надежных наставников, будущих деловых партнеров,
                  наполнит смыслом и яркими красками студенческие годы.
                  <br />
                  <br />
                  Мы ждем вас в стенах нашего университета.
                </blockquote>
              </div>
            </div>
          </div>
        </section>
        <ScrollAnimation
          animateIn="animate__fadeIn"
          animateOut="animate__fadeOut">
          <Parallax
            className="feedback__parallax"
            bgClassName="feedback__bg-3 "
            bgImage={feedback3}
            strength={150}>
            <Parallax
              className="feedback__parallax"
              bgClassName="feedback__bg-4"
              bgImage={feedback2}
              strength={200}>
              <Feedback
                formId={uuidv4()}
                title="Остались вопросы?"
                text="Оставьте свой номер и мы проконсультируем
                вас по любым вопросам, связанным с&nbsp;поступлением"
              />
            </Parallax>
          </Parallax>
        </ScrollAnimation>
        <section className="contacts">
          <div className="wrapper">
            <div className="contacts__container">
              <h2 className="title contacts__title">Контакты</h2>
              <img src={contacts} alt="Фотография главного входа СахГУ" />
              <div>
                <p className="big-text contacts__text">
                  Вы можете связаться с приёмной комиссией любым удобным
                  способом
                </p>
                <ul className="contacts__list">
                  <li>
                    <img src={phone} alt="Телефон" />
                    <a href="tel:8 (4242) 45−03−00">8 (4242) 45−03−00</a>
                  </li>
                  <li>
                    <img src={letter} alt="Почта" />
                    <a href="mailto:pk@sakhgu.ru">pk@sakhgu.ru</a>
                  </li>
                  <li>
                    <img src={world} alt="Официальный сайт" />
                    <div>
                      <a href="sakhgu.ru">sakhgu.ru</a>
                      <a href="sakhgu.ru/abitur/">sakhgu.ru/abitur/</a>
                    </div>
                  </li>
                  <li>
                    <img src={mark} alt="Адрес" />
                    <span>
                      693008, Сахалинская область,
                      <br />
                      г. Южно-Сахалинск, Ленина 290, каб. 13
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__container">
          <img className="footer__logo" src={logoFooter} alt="Логотип СахГУ" />
          <div>
            <nav className="footer__nav">
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
              <div className="footer__socials">
                <a href="instagram.com">
                  <img src={instagram} alt="instagram" />
                </a>
                <a href="vk.com">
                  <img src={vk} alt="vk" />
                </a>
              </div>
            </nav>
            <Button>Согласие на обработку персональных данных</Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
