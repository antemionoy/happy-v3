import { Breadcrumbs } from '..'
import discount01 from '../../images/discount-01.png'
import discount02 from '../../images/discount-02.jpg'

const Discount = () => {

  const crumbs = [
    { href: '/', title: 'Главная' },
    { href: '/category', title: 'Категория' },
    { href: '/subcategory', title: 'Подкатегория' }
  ]

  return (
    <div className="discount">
      <div className="container">
        <div className="discount__breadcrumbs">
          <Breadcrumbs items={crumbs} />
        </div>
        <h1 className="discount__heading h1">Акции</h1>
        <div className="discount__cards">

          <div className="discount__card discount__card_1">
            <p className="discount__period">в этом месяце</p>
            <p className="discount__title" data-title="-70%">скидки <br />на все кухни</p>
            <div className="discount__main">
              <p className="discount__desc">3D дизайн-проект <br />кухни <span className="discount__accent">в подарок</span></p>
              <p className="discount__size">-70%</p>
            </div>
          </div>

          <div className="discount__card discount__card_2">
            <img src={discount01} alt="" className="discount__image" />
            <p className="discount__title" data-title="Подарок">Подарок</p>
            <p className="discount__desc">При покупке 3-х единиц техники, комплект посуды — в подарок</p>
          </div>

          <div className="discount__card discount__card_3">
            <img src={discount02} alt="" className="discount__image" />
            <p className="discount__title" data-title="скидка на шкаф">скидка на шкаф</p>
            <p className="discount__desc">Закажи гарнитур и встраиваемую технику у нас и получи уникальную скидку на шкаф по индивидуальному проекту</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Discount
