const Navbar = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-main">
          <div className="header-burger-btn">
            <span />
          </div>
          <div className="header-logo"></div>
          <div className="header-search">
            <form action="search">
              <input type="text" placeholder="Поиск" />
            </form>
          </div>
        </div>
        <div className="header-nav">
          <ul>
            <li className="header-nav__item">Контакты</li>
            <li className="header-nav__item">Войти</li>
            <li className="header-nav__item">Корзина</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
