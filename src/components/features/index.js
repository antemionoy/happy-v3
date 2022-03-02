const Features = () => {
    return (
        <section className="features">
            <div className="features__container container">
                <h2 className="features__title title tilte_h2 visually-hidden visually-hidden_clip">Преимущества</h2>
                <ul className="features__row row">
                    <li className="features__col col">
                        <div className="features__item d-flex">
                            <img src="" alt="" className="features__icon" />
                            <div className="features__info">
                                <p className="features__name">Доставка и монтаж</p>
                                <p className="features__text">Мы привезём и соберём мебель в удобное вам время</p>
                            </div>
                        </div>
                    </li>
                    <li className="features__col col">
                        <div className="features__item d-flex">
                            <img src="" alt="" className="features__icon" />
                            <div className="features__info">
                                <p className="features__name">Безопасная оплата</p>
                                <p className="features__text">
                                    Наличными, по карте или <a href="#">прямо с сайта</a>
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className="features__col col">
                        <div className="features__item d-flex">
                            <img src="" alt="" className="features__icon" />
                            <div className="features__info">
                                <p className="features__name">Гарантия 2 года</p>
                                <p className="features__text">Мы уверены, что наша мебель прослужит долго</p>
                            </div>
                        </div>
                    </li>
                    <li className="features__col col">
                        <div className="features__item d-flex">
                            <img src="" alt="" className="features__icon" />
                            <div className="features__info">
                                <p className="features__name">Экологичные материалы</p>
                                <p className="features__text">Класс эмиссии Е1 позволяет использовать их даже в мед. учереждениях</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Features;