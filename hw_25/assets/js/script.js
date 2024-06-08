const FORM = document.querySelector("#news-form");
const API_KEY = "870e72e20ad04af4ad2a5db688920fe5";
const NEWS_LIST = document.querySelector(".news_list");
FORM.addEventListener("submit", function (event) {
  event.preventDefault();
  const newsInput = event.target.querySelector("[name='news']").value;
  const dateInput = event.target.querySelector("[name='date']").value;
  NEWS_LIST.innerHTML = "";
  fetchNews(newsInput, dateInput);
});
function fetchNews(query, dateInput) {
  const API_URL = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}&from=${dateInput}`;
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => displayNews(data.articles))
    // .then((data) => console.log(data))
    .catch((err) => console.error(err));
}
function displayNews(articles) {
  let markup = articles
    .map(({ title, urlToImage, description }) => {
      return `
    <li>
    <h2>${title}</h2>
    <img src="${urlToImage}"/>
    <p>${description}</p>
    </li>`;
    })
    .join("");
  NEWS_LIST.insertAdjacentHTML("beforeend", markup);
}
