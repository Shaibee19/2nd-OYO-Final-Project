import altLogo from "../assets/Mooviez alternate logo.png";

const Footer = () => {
  // function openMenu() {
  //   document.body.classList += " menu--open";
  // }

  // function closeMenu() {
  //   document.body.classList.remove("menu--open");
  // }

  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="row footer__row">
            <div className="footer__top">
              <div className="footer__right">
                <figure className="footer__logo">
                  <img
                    className="footer__logo--img"
                    src={altLogo}
                    alt="Alt Logo"
                  />
                </figure>
              </div>
              <div className="footer__left">
                <div className="footer__social--list">
                  <a
                    className="footer__social--link link__hover-effect"
                    href="https://github.com/Shaibee19"
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <a
                    className="footer__social--link link__hover-effect"
                    href="https://www.linkedin.com/in/shai-gray-woodland-aa285343/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                  <a
                    className="footer__social--link link__hover-effect"
                    href="#"
                    // onClick={toggleModal}
                  >
                    Contact
                  </a>
                  <a
                    className="footer__social--link link__hover-effect"
                    href=""
                    target="_blank"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
            <div className="footer__copyright">
              Copyright © 2025 Shai Gray-Woodland
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
