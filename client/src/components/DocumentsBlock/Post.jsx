import React from 'react'

const Post = () => (
  <div className="documents-block documents-block--post">
    <h3 className="documents-block__title">Почтой России</h3>
    <p className="documents-block__text">
      Скачать с{' '}
      <a
        // eslint-disable-next-line max-len
        href="https://vk.com/away.php?utf=1&to=http%3A%2F%2Fsakhgu.ru%2Fabitur%2Fbakalavriat%2F"
        target="_blank"
        rel="noreferrer">
        сайта
      </a>{' '}
      бланк заявления на поступление и заявление о согласии на обработку
      персональных данных. Заполнить их.
    </p>
    <span>Сделать ксерокопии остальных документов:</span>
    <ul className="documents-block__list">
      <li>
        паспорт (страницы, где находится фото, прописка и страница со сведениями
        о ранее выданных паспортах),
      </li>
      <li>документ об образовании (аттестат или диплом с приложением),</li>
      <li>СНИЛС (при наличии),</li>
      <li>льготные документы (при наличии),</li>
      <li>
        документы, подтверждающие индивидуальные достижения (при наличии).
      </li>
    </ul>
    <p className="documents-block__text">
      Весь пакет документов отправить письмом с уведомлением о вручении на
      адрес: 693000 г. Южно-Сахалинск, ул. Коммунистический проспект, 33,
      Приемной комиссии.
      <br />
      <br />
      Помни, что приемная комиссия должна получить твое письмо с документами не
      позднее сроков, указанных в Правилах приема. Правильно рассчитай время.
    </p>
  </div>
)

export default Post
