import { Link } from "react-router-dom";
import logo from "../assets/Mooviez logo.png";

const Nav = () => {
  function openModal() {
    document.body.classList += " modal--open";
  }

  function closeModal() {
    document.body.classList.remove("modal--open");
  }

  // MODAL EMAIL FUNCTION
  // <script> src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"</script>
  //   <script> (function(){
  //         emailjs.init({
  //         publicKey: "M_OoP5ANfy9nBleaM",
  //         });
  //       })();
  // </script>

  // function contact(event) {
  //   event.preventDefault();
  //   const loading = document.querySelector(".modal__overlay--loading");
  //   const success = document.querySelector(".modal__overlay--success");
  //   loading.classList += " modal__overlay--visible";
  //   emailjs
  //     .sendForm(
  //       "service_lq4pqm1",
  //       "template_j57chsp",
  //       event.target,
  //       "M_OoP5ANfy9nBleaM"
  //     )
  //     .then(() => {
  //       loading.classList.remove("modal__overlay--visible");
  //       success.classList += " modal__overlay--visible";
  //     })
  //     .catch(() => {
  //       loading.classList.remove("modal__overlay--visible");
  //       alert(
  //         "The email service is temporarily unavailable. Please contact me directly at shaipattzgray@gmail.com"
  //       );
  //     });
  // }

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
            <Link to="/" className="nav__link link__hover-effect">
                Home
            </Link>
            <Link to="/moviesearches" className="nav__link link__hover-effect">
                Find your Moovie
            </Link>
            <li>
              <Link to="#"
                onClick={openModal}
                className="nav__link nav__link--primary"
              >
                Contact
              </Link>
            </li>
            <li>
              <button id="theme-toggle">Mode Toggle</button>
            </li>
          </ul>
        </div>
      </nav>
      <div class="modal">
        <div class="modal__half modal__right">
          <i
            class="fa-solid fa-xmark modal__exit click"
            onClick={closeModal}
          ></i>
          <h3 class="modal__title modal__title--right">Let's have a chat!</h3>
          <h4 class="modal__subtitle modal__subtitle--right">
            Any beef about our udderly great moovies - milk the moo-ment!
          </h4>
          <form id="contact__form" onSubmit={contact(event)}>
            <div class="form__item">
              <label class="form__item--label">Name</label>
              <input
                class="input"
                name="user_name"
                type="text"
                required
              ></input>
            </div>
            <div class="form__item">
              <label class="form__item--label">Email</label>
              <input
                class="input"
                name="user_email"
                type="email"
                required
              ></input>
            </div>
            <div class="form__item">
              <label class="form__item--label">Message</label>
              <textarea
                class="input"
                name="message"
                type="text"
                required
              ></textarea>
            </div>
            <button id="contact__submit" class="form__submit">
              Join the Herd
            </button>
          </form>
          <div class="modal__overlay modal__overlay--loading">
            <i class="fa-solid fa-spinner"></i>
          </div>
          <div class="modal__overlay modal__overlay--success">
            Holy cow, Appreciate your message! Looking forward to grazing with
            you soon. 🐮
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
