const { default: AdminBro } = require('admin-bro')
const AdminBroMongoose = require('@admin-bro/mongoose')

const { Admin, Subject, Area } = require('./resourceOptions')

AdminBro.registerAdapter(AdminBroMongoose)

/** @type {import('admin-bro').AdminBroOptions} */
const options = {
  locale: {
    language: 'rus',
    translations: {
      actions: {
        new: 'Добавить',
        edit: 'Редактировать',
        show: 'Подробнее',
        delete: 'Удалить',
        list: 'Записи',
        search: 'Искать',
        addNewItem: 'Добавить',
      },
      labels: {
        Admin: 'Администраторы',
        Subjects: 'Предметы подготовки',
        Areas: 'Направления подготовки',
      },
      buttons: {
        filter: 'Фильтр',
        save: 'Сохранить',
      },
      resources: {
        Subjects: {
          properties: {
            name: 'Название предмета',
          },
        },
        Areas: {
          properties: {
            qualification: 'Квалификация',
            'qualification.0': 'Бакалавр/Специалитет',
            'qualification.1': 'Магистр',
            code: 'Код специальности',
            name: 'Название',
            profile: 'Профиль',
            description: 'Описание',
            activities: 'Виды профессиональной деятельности',
            twoDiplomas: 'Программа "Два диплома"',
            twoDiplomasDesc: 'О программе',
            exams: 'Вступительные экзамены',
            'exams.main': 'Основной',
            'exams.mainScore': 'Кол-во баллов осн.',
            'exams.alternative': 'Альтернативный экзамен',
            'exams.alternativeScore': 'Кол-во баллов альт.',
            budget: 'Бюджетное',
            'budget.count': 'Кол-во мест',
            'budget.score': 'Проходной балл',
            paid: 'Платное',
            'paid.count': 'Кол-во мест',
            'paid.cost': 'Стоимость обучения',
          },
        },
      },
    },
  },
  resources: [Admin, Subject, Area],
  branding: {
    companyName: 'СахГУ',
    logo: '',
    softwareBrothers: false,
  },
}

module.exports = options
