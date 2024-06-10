const FORM = document.querySelector("#films-form");
const API_KEY = "fcdd403f";
const FILMS_LIST = document.querySelector(".films_list");
const PAGINATION = document.querySelector(".pagination");

let currentPage = 1;
let currentQuery = "";
let currentType = "";
let currentFilmID = null;

FORM.addEventListener("submit", function (event) {
  event.preventDefault();
  const filmsInput = event.target.querySelector("[name='films']").value;
  const typeInput = event.target.querySelector("[name='type']").value;
  currentPage = 1;
  currentQuery = filmsInput;
  currentType = typeInput;
  FILMS_LIST.innerHTML = "";
  fetchFilms(currentQuery, currentType, currentPage);
});

function fetchFilms(filmsInput, typeInput, page) {
  const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${filmsInput}&type=${typeInput}&page=${page}`;
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log("API Response:", data);
      if (data.Response === "False") {
        throw new Error(data.Error);
      }
      displayFilms(data.Search);
      createPaginationButtons(data.totalResults, page);
    })
    .catch((err) => {
      console.error("Error:", err);
      FILMS_LIST.innerHTML = `<li>${err.message}</li>`;
    });
}

function displayFilms(films) {
  FILMS_LIST.innerHTML = films
    .map(({ Title, Poster, imdbID }) => {
      return `
    <li data-id="${imdbID}">
      <h2>${Title}</h2>  
      <img class="posters" src="${Poster}" alt="${Title} Poster"/>  
        <button class="details-btn">DETAILS</button>
      <div class="film-details" style="display: none;"></div>
    </li>`;
    })
    .join("");

  document.querySelectorAll(".films_list li").forEach((li) => {
    const detailsBtn = li.querySelector(".details-btn");
    detailsBtn.addEventListener("click", () => {
      const imdbID = li.getAttribute("data-id");
      toggleFilmDetails(imdbID);
    });
  });
}

function toggleFilmDetails(imdbID) {
  const filmDetails = FILMS_LIST.querySelector(
    `li[data-id="${imdbID}"] .film-details`
  );
  if (filmDetails.style.display === "none") {
    fetchFilmDetails(imdbID, filmDetails);
    filmDetails.style.display = "block";
  } else {
    filmDetails.style.display = "none";
  }
}

function fetchFilmDetails(imdbID, container) {
  const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`;
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log("Film Details:", data);
      displayFilmDetails(data, container);
    })
    .catch((err) => {
      console.error("Error:", err);
      container.innerHTML = `<p>${err.message}</p>`;
    });
}

function displayFilmDetails(film, container) {
  container.innerHTML = `
    <p><strong>Director:</strong> ${film.Director}</p>
    <p><strong>Actors:</strong> ${film.Actors}</p>
    <p><strong>Plot:</strong> ${film.Plot}</p>
    <p><strong>Released:</strong> ${film.Released}</p>
    <p><strong>Genre:</strong> ${film.Genre}</p>
    <p><strong>Runtime:</strong> ${film.Runtime}</p>
    <p><strong>IMDB Rating:</strong> ${film.imdbRating}</p>`;
}

function createPaginationButtons(totalResults, currentPage) {
  const totalPages = Math.ceil(totalResults / 10);
  PAGINATION.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    if (i === currentPage) {
      button.disabled = true;
    }
    button.addEventListener("click", () => {
      fetchFilms(currentQuery, currentType, i);
    });
    PAGINATION.appendChild(button);
  }
}
