const Populars = () =>{
    return(
        <section className="populars">
            <div className="populars__container container">
                <h2 className="populars__title title title_h2">Популярные кухни</h2>
                <ul className="populars__row d-flex wrap">
                    <li className="populars__column">
                        <div className="popular__item">
                            <img src="/images/populars__image.jpeg" alt="" className="populars__image" />
                            <div className="populars__info">

                            </div>
                            <button type="buttton" className="populars__button button">Расчёт кухни -70%</button>
                        </div>
                    </li>
                    <li className="populars__column">
                        <div className="popular__item">
                            <img src="/images/populars__image.jpeg" alt="" className="populars__image" />
                            <div className="populars__info">

                            </div>
                            <button type="buttton" className="populars__button button">Расчёт кухни -70%</button>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Populars;