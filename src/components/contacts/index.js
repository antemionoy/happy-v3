import { Breadcrumbs, Requisites } from '../'

const Contacts = () => {

  const crumbs = [
    { href: '/', title: 'Главная' },
    { href: '/category', title: 'Категория' },
    { href: '/subcategory', title: 'Подкатегория' }
  ]

  return (
    <div className="contacts">
      <div className="contacts__map"></div>
      <div className="container contacts__container">
        <div className="contacts__breadcrumbs">
          <Breadcrumbs items={crumbs} />
        </div>
        <h1 className="contacts__heading h1">Контакты</h1>
        <div className="contacts__item">
          <p className="contacts__title h3">Адрес</p>
          <p className="contacts__desc txt">Санкт-Петербург, ул. Цветочная, д.2 <br />Ежедневно с 9:00 до 22:00</p>
        </div>
        <div className="contacts__item">
          <p className="contacts__title h3"><a href="tel:+7 (812) 677-75-85">+7 (812) 677-75-85</a></p>
          <p className="contacts__desc">многоканальный, ежедневно с 9:00 до 22:00</p>
          <button className="button contacts__btn">Обратный звонок</button>
        </div>
        <div className="contacts__item">
          <p className="contacts__title h3">Мы в сети</p>
          <div className="contacts__social">
            <a href="/" target="_blank" className="contacts__social-item">
              <svg className="contacts__social-icon"></svg>
            </a>
            <a href="/" target="_blank" className="contacts__social-item">
              <svg className="contacts__social-icon"></svg>
            </a>
          </div>
        </div>
        <Requisites className="contacts__requisites" />
      </div>
    </div>
  )
}

export default Contacts
