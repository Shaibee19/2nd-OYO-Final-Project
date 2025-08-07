import altLogo from "../assets/Mooviez alternate logo.png";

function Movies() {
  let isModalOpen = false;

  // FUTURE DETAIL DISPLAYING
  async function movieDetails() {
    // console.log("Displaying details for movie ID:", imdbID)
    // window.location.href = `movie-details.html?id=${imdbID}`;
    // const movieDetailsPromises = moviesData.Response.map(async (movie) => {
    //   const detailMovie = await fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`);
    //   const fullDetails = await detailMovie.json();
    //   return fullDetails;
    // });

    // const fullMovies = await Promise.all(movieDetailsPromises);
    // movieHTML(fullMovies);
    alert("Haven't done this coding yet :'[");
  }

// const = src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
// (function(){
//           emailjs.init({
//           publicKey: "M_OoP5ANfy9nBleaM",
//           });
//         })(); 

  // MODAL
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

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}


  return (
    <>
    <div class="movie">
              <div class="movie-card">
                <div class="movie-card__container">
                  <div class="movie-card__info">
                  <h4>Movie Name</h4>
                  <p><b>Year:</b>Movie Year</p>
                  <p><b>Genre:</b>Movie Genre</p>
                  <p><b>Rating:</b>Movie Rating</p>
                  </div>
                </div>
              </div>
             </div>
    <div class="modal">
        <div class="modal__half modal__right">
          <i class="fa-solid fa-xmark modal__exit click" onclick="toggleModal()"></i>
          <h3 class="modal__title modal__title--right">Let's have a chat!</h3>
          <h4 class="modal__subtitle modal__subtitle--right">Any beef about our udderly great moovies - milk the moo-ment!</h4>
          <form id="contact__form" onsubmit="contact(event)">
            <div class="form__item">
              <label class="form__item--label">Name</label>
              <input class="input" name="user_name" type="text" required></input>
            </div>
            <div class="form__item">
              <label class="form__item--label">Email</label>
              <input class="input" name="user_email" type="email" required></input>
            </div>
                <div class="form__item">
                  <label class="form__item--label">Message</label>
                    <textarea class="input" name="message" type="text" required></textarea>
                </div>
                <button id="contact__submit" class="form__submit">
                  Join the Herd
                </button>
              </form>
              <div class="modal__overlay modal__overlay--loading">
                <i class="fa-solid fa-spinner"></i>
              </div>
              <div class="modal__overlay modal__overlay--success">
                Holy cow, Appreciate your message! Looking forward to grazing with you soon. 🐮
              </div>
            </div>
            </div>
      <footer id="footer">
        <div class="container">
          <div class="row footer__row">
            <div class="footer__top">
              <div class="footer__right">
                <figure class="footer__logo">
                  <img
                    class="footer__logo--img"
                    src={altLogo}
                    alt="Alt Logo"
                  />
                </figure>
              </div>
              <div class="footer__left">
                <div class="footer__social--list">
                  <a
                    class="footer__social--link link__hover-effect"
                    href="https://github.com/Shaibee19"
                    target="_blank"
                  >
                    GitHub
                  </a>
                  <a
                    class="footer__social--link link__hover-effect"
                    href="https://www.linkedin.com/in/shai-gray-woodland-aa285343/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                  <a
                    class="footer__social--link link__hover-effect"
                    href="#"
                    onclick="toggleModal()"
                  >
                    Contact
                  </a>
                  <a
                    class="footer__social--link link__hover-effect"
                    href="./assets/Shai Gray-Woodland Resume 20250513.pdf"
                    target="_blank"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
            <div class="footer__copyright">
              Copyright © 2025 Shai Gray-Woodland
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Movies;
