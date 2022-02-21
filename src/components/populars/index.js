const Populars = () =>{
    return(
        <section className="populars">
            <div className="populars__container container">
                <h2 className="populars__title title title_h2">Популярные кухни</h2>
                <ul className="populars__row d-flex wrap">
                    <li className="populars__column">
                        <div className="popular__item">
                            <img src="/images/populars__image.jpeg" alt="" className="populars__image" />
                            <div className="populars__content">
                                <div className="populars__info">
                                    <p className="populars__category">Кухня</p>
                                    <p className="populars__name">Ферроль</p>
                                </div>
                                <p className="populars__text">цена за всю кухню</p>
                                <div className="populars__prices">
                                    <p className="opulars__price-main">48 700 ₽</p>
                                    <p className="opulars__price-old">162 400 ₽</p>
                                </div>
                            </div>
                            <button type="buttton" className="populars__button button">Расчёт кухни -70%</button>
                        </div>
                    </li>
                    <li className="populars__column">
                        <div className="popular__item">
                            <img src="/images/populars__image.jpeg" alt="" className="populars__image" />
                            <div className="populars__content">
                                <div className="populars__info">
                                    <p className="populars__category">Кухня</p>
                                    <p className="populars__name">Ферроль</p>
                                </div>
                                <p className="populars__text">цена за всю кухню</p>
                                <div className="populars__prices">
                                    <p className="opulars__price-main">48 700 ₽</p>
                                    <p className="opulars__price-old">162 400 ₽</p>
                                </div>
                            </div>
                            <button type="buttton" className="populars__button button">Расчёт кухни -70%</button>
                        </div>
                    </li>
                </ul>
                <a href="#" className="populars__more button">Все кухни</a>
            </div>
        </section>
    )
}

export default Populars;