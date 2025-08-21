import { useState } from "react";
import altLogo from "../assets/Mooviez alternate logo.png";
import Modal from "./Modal";
import { Link } from "react-router-dom";

function Footer() {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

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
                  <Link to="https://github.com/Shaibee19"
                    className="footer__social--link link__hover-effect"
                  >
                    GitHub
                  </Link>
                  <Link to="https://www.linkedin.com/in/shai-gray-woodland-aa285343/"
                    className="footer__social--link link__hover-effect"
                  >
                    LinkedIn
                  </Link>
                  <Link to="#"
                    className="footer__social--link link__hover-effect"
                    onClick={openModal}
                  >
                    Contact
                  </Link>
                  <Link to="../assets/Shai Gray-Woodland Resume 20250513.pdf"
                    className="footer__social--link link__hover-effect"
                  >
                    Resume
                  </Link>
                </div>
              </div>
            </div>
            <div className="footer__copyright">
              Copyright © 2025 Shai Gray-Woodland
            </div>
          </div>
        </div>
      </footer>
      {showModal && <Modal closeModal={closeModal} />}
    </>
  );
}

export default Footer;
