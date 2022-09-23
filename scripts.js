const fillMoviesOnScreen = (results) => {
  let fillMoves = "";

  results.forEach((film) => {
    fillMoves += `
        <div class="content__results__wrapper">
            <div class="content__results__item">
                <p>Title: ${film.title}</p>
                <p><strong>Director: ${film.director}</strong></p>
            </div>
        </div>
    `;
  });

  document.querySelector(".content__results").innerHTML = fillMoves;
};

const showLoader = () => {
  document.querySelector(".content__results").innerHTML = `
        <div class="loader">
          Loading...
        </div>
    `;
};

const showError = () => {
  document.querySelector(".content__results").innerHTML = `
        <div class="loader">
          Error on calling api!
        </div>
      `;
};

showLoader();

axios
  .get("https://swapi.dev/api/films")
  .then((response) => fillMoviesOnScreen(response.data.results))
  .catch(() => showError());
