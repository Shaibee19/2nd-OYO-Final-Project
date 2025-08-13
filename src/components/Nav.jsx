import logo from "../assets/Mooviez logo.png";

const Nav = () => {


  return (
    <>
      <nav className="container">
        <div className="row nav__row">
          <div className="nav__logo--wrapper">
            <figure className="nav__logo">
              <img className="nav__logo--img" src={logo} alt="Logo" />;
            </figure>
            <div className="nav__logo--title">
              <span className="purple">Mooviez</span>
            </div>
          </div>
          <ul className="nav__links">
            <li>
              <a
                href="#"
                onClick="toggleModal()"
                className="nav__link nav__link--primary"
              >
                Contact
              </a>
            </li>
            <li>
              <button id="theme-toggle">Mode Toggle</button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
