const Header = () => {
    return (
        <section className="header">
            <div className="header__container container">
                <div className="header__top d-flex">
                    <button type="button" className="header__hamburger hamburger d-flex">
                        <div className="hamburger__box">
                            <div className="hamburger__inner"></div>
                        </div>
                    </button>
                    <a href="" className="header__logo logo">
                        <picture className="logo__picture">
                            <source media="(min-width: 960px)" srcset="/images/logos/logo.svg" />
                            <img src="/images/logos/logo__mobile.svg" alt="" className="logo__image" />
                        </picture>
                    </a>
                    <div className="header__connect">
                        <p className="header__timework">с 9 до 22 без выходных</p>
                        <a href="tel:+78126777585" className="header__phone">+7 (812) 677 75 85</a>
                    </div>
                    <button type="button" className="header__button button">Консультация дизайнера</button>
                </div>
                <nav className="header__nav d-flex">
                    <ul className="header__menu menu-header">
                        <li className="menu-header__item">
                            <a href="#" className="menu-header__link">Кухни</a>
                        </li>
                        <li className="menu-header__item">
                            <a href="#" className="menu-header__link">Шкафы</a>
                        </li>
                        <li className="menu-header__item">
                            <a href="#" className="menu-header__link">Шкафы</a>
                        </li>
                        <li className="menu-header__item">
                            <a href="#" className="menu-header__link">Шкафы</a>
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