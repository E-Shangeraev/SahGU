import React from 'react';
import { Parallax } from 'react-parallax';
import { v4 as uuidv4 } from 'uuid';

import Button from './components/Button';
import Switch from './components/Switch';
import Checkbox from './components/Checkbox';
import Area from './components/Area';
import Feedback from './components/Feedback';
import DocumentsWay from './components/DocumentsWay';

import logo from './logo.png';
import promo1 from './assets/img/promo-1.png';
import promo2 from './assets/img/promo-2.png';
import arrow from './assets/img/icons/arrow.svg';
import newsBig from './assets/img/news-big.jpg';
import news1 from './assets/img/news-1.jpg';
import news2 from './assets/img/news-2.jpg';
import yourBeginning from './assets/img/your-beginning.png';
import features1 from './assets/img/features-1.png';
import features2 from './assets/img/features-2.png';
import gosuslugi from './assets/img/icons/gosusllugi.png';
import post from './assets/img/icons/post.png';
import handshake from './assets/img/icons/handshake.png';
import mail from './assets/img/icons/mail.png';
import uniqueness1 from './assets/img/uniqueness-1.png';
import uniqueness2 from './assets/img/uniqueness-2.png';
import uniqueness3 from './assets/img/uniqueness-3.png';

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
];

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
              <ul className="areas__list">
                {areas.map((item) => (
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
        <Feedback
          title="Не можете определиться?"
          text="Оставьте свой номер и мы поможем вам с выборм!"
        />
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
        <section className="uniqueness">
          <div className="wrapper">
            <h2 className="title uniqueness__title">
              <span>Уникальность</span> СахГУ
            </h2>
            <img src={uniqueness1} alt="Фото студентов" />
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
                  уверен в том, что он найдет поддержку, а также у него появится
                  возможность реализовать свою идею.
                  <br />
                  <br />
                  СахГУ это не только учеба, студенты университета могут
                  попробовать свои силы в спорте, творчестве, социально-значимых
                  проектах, проявить свои лидерские и организаторские
                  способности. С этой целью в университете создано множество
                  секций, кружков и объединений.
                </p>
              </div>
              <div>
                <h3 className="subtitle">Большая стипендия — это возможно!</h3>
                <p className="text uniqueness__text">
                  Для студента важно обеспечить себя во время учебы в
                  университете.
                  <br />
                  <br />
                  СахГУ дает такую возможность своим студентам, поэтому средний
                  размер стипендии <b>превышает в 5 раз</b> стипендии в Москве и
                  Санкт-Петербурге.
                  <br />
                  <br />
                  Государственная повышенная стипендия, которую получают
                  студенты СахГУ за активное участие в жизни вуза, высокую
                  успеваемость, достижения в научной, общественной, спортивной
                  или культурно-творческой деятельности достигает{' '}
                  <b>20 000 ₽</b> в месяц.
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
                  Программа реализуется согласно государственными требованиям и
                  стандартам.
                  <br />
                  <br />
                  Для участия необходимо поступить в СахГУ на бюджетную основу и
                  выбрать один из предложенных профилей вуза-партнера.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
