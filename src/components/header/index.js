const Header = () => {
    return (
        <section className="header">
            <div className="header__container container">
                <div className="header__top d-flex">
                    <div className="header__city city d-flex">
                        <div className="city__icon"></div>
                        <p className="city__text">Санкт-Петербург</p>
                    </div>
                    <button type="button" className="header__hamburger hamburger d-flex">
                        <div className="hamburger__box">
                            <div className="hamburger__inner"></div>
                        </div>
                    </button>
                    <a href="" className="header__logo logo">
                        <picture className="logo__picture">
                            <source media="(min-width: 1440px)" srcSet="/images/logos/logo.svg" />
                            <img src="/images/logos/logo__mobile.svg" alt="" className="logo__image" />
                        </picture>
                    </a>
                    <div className="header__connect d-flex">
                        <div className="header__contacts">
                            <p className="header__timework">с 9 до 22 без выходных</p>
                            <a href="tel:+78126777585" className="header__phone">+7 (812) 677 75 85</a>
                        </div>
                        <button type="button" className="header__button button">Консультация дизайнера</button>
                    </div>
                </div>
                <nav className="header__nav d-flex">
                    <ul className="header__menu menu-header d-flex">
                        <li className="menu-header__item">
                            <a href="#" className="menu-header__link">Кухни</a>
                        </li>
                        <li className="menu-header__item">
                            <a href="#" className="menu-header__link">Шкафы</a>
                        </li>
                        <li className="menu-header__item">
                            <a href="#" className="menu-header__link">Техника</a>
                        </li>
                        <li className="menu-header__item">
                            <a href="#" className="menu-header__link">Мойки</a>
                        </li>
                        <li className="menu-header__item">
                            <a href="#" className="menu-header__link">Материалы</a>
                        </li>
                        <li className="menu-header__item">
                            <a href="#" className="menu-header__link">Отзывы</a>
                        </li>
                        <li className="menu-header__item">
                            <a href="#" className="menu-header__link">Акции</a>
                        </li>
                        <li className="menu-header__item">
                            <a href="#" className="menu-header__link">Контакты</a>
                        </li>
                    </ul>
                    <div className="header__mobile mobile-header">
                        <button type="button" className="mobile-header__city">Санкт-Петербург</button>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default Header;