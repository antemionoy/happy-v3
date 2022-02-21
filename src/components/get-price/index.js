const GetPrice = () => {
    return (
        <section className="get-price">
            <div className="get-price__container container">
                <h2 className="get-price__title title title_h2 title_center">Узнайте стоимость вашей мебели с нашим бесплатным расчётом</h2>
                <div className="get-price__row d-flex wrap">
                    <div className="get-price__column">
                        <div className="get-price__content" style={{ backgroundImage: `url("/images/get-price__1.png")`}}>
                            <div className="get-price__circle d-flex"></div>
                            <p className="get-price__name">У меня есть дизайн-проект</p>
                            <p className="get-price__descr">Мы рассчитаем стоимость вашего проекта за несколько минут</p>
                            <button type="button" className="get-price__button button">Узнать стоимость</button>
                        </div>
                    </div>
                    <div className="get-price__column">
                        <div className="get-price__content" style={{ backgroundImage: `url("/images/get-price__2.png")`}}>
                            <div className="get-price__circle d-flex"></div>
                            <p className="get-price__name">Нет дизайн-проекта</p>
                            <p className="get-price__descr">Мы создадим уникальный проект дизайна по вашим размерам и рассчитаем стоимость всего за пару минут</p>
                            <button type="button" className="get-price__button button">Нужны проект и стоимость</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetPrice;