import { useRef, useState } from "react"

const Requisites = (props) => {

  const [isActive, setIsActive] = useState(false)
  const content = useRef()

  const toggleContent = () => {
    content.current.style.height = !isActive ? (content.current.scrollHeight + 'px') : ''
    setIsActive(!isActive)
  }

  const items = [
    { title: 'Полное наименование', desc: 'Общество с ограниченной ответственностью «Альтаир»' },
    { title: 'Сокращенное наименование', desc: 'ООО «Альтаир»' },
    { title: 'Юридический адрес', desc: '197342, г. Санкт-Петербург, Белоостровская ул., д. 17 к. 2 литера а, помещ. 11-н помещ. 1(105)' },
    { title: 'Почтовый адрес', desc: '197342, г. Санкт-Петербург, Белоостровская ул., д. 17 к. 2 литера а, помещ. 11-н помещ. 1(105)' },
    { title: 'ИНН/КПП', desc: '7814787534/ 781401001' },
    { title: 'ОГРН', desc: '1217800035199' },
    { title: 'Расчётный счет', desc: '40702 810 7 5500 0011058' },
    { title: 'Корреспондентский счет', desc: '30101 810 5 0000 0000653' },
    { title: 'БИК банка', desc: '044030653' },
    { title: 'Банк', desc: 'ПАО Сбербанк' },
    { title: 'Генеральный директор', desc: 'Михайлов Евгений Юрьевич Действует на основании Устава' },
    { title: 'E-mail:', desc: 'altair2021.ooo@yandex.ru' }
  ]

  const classes = 'requisites' + (props.className ? ' ' + props.className: '') + (isActive ? ' active' : '')

  return (
    <div className={classes} >
      <div className="requisites__header">
        <p className="requisites__title h4" onClick={toggleContent}>
          Реквизиты компании
          <span className="requisites__mark"></span>
        </p>
      </div>
      <div className="requisites__content" ref={content}>
        <div className="requisites__list">
          {items.map((item, index) => (
            <div className="requisites__item" key={index}>
              <span className="requisites__item-title">{item.title}</span>
              {item.desc}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Requisites
