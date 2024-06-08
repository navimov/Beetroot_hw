const FORM = document.querySelector("#films-form");
const API_KEY = "fcdd403f";
const FILMS_LIST = document.querySelector(".films_list");
FORM.addEventListener("submit", function (event) {
  event.preventDefault();
  const filmsInput = event.target.querySelector("[name='films']").value;
  const typeInput = event.target.querySelector("[name='type']").value;
  FILMS_LIST.innerHTML = "";
  fetchFilms(filmsInput, typeInput);
});
function fetchFilms(filmsInput, typeInput) {
  const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${filmsInput}&type=${typeInput}`;
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => displayFilms(data))
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}
function displayFilms(item) {
  let markup = Object.entries(item)
    .map(({ title, poster, description }) => {
      return `
    <li>
    <h2>${title}</h2>
    <img src="${poster}"/>
    <p>${description}</p>
    </li>`;
    })
    .join("");
  FILMS_LIST.insertAdjacentHTML("beforeend", markup);
}
