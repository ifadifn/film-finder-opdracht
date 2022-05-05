function addMoviesToDom(movies) {
  const navigationList = document.getElementById("navigation-list");

  const listItems = movies.map((movie) => {
    let listItem = document.createElement("li");

    let image = document.createElement("img");
    image.src = movie.Poster;

    let link = document.createElement("a");
    link.href = "https://www.imdb.com/title/" + movie.imdbID;
    link.target = "_blank";

    listItem.appendChild(link);
    link.appendChild(image);

    return listItem;
  });

  listItems.forEach((listItem) => {
    navigationList.appendChild(listItem);
  });
}

function removeMoviesFromDOM() {
  const currentListedMovies = document.getElementById("navigation-list");

  while (currentListedMovies.hasChildNodes()) {
    currentListedMovies.removeChild(currentListedMovies.firstChild);
    console.log("All current listed movies are removed");
  }
}

function addEventListeners() {
  const radioButtons = document.getElementsByName("film-filter");

  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", handleOnChangeEvent);
  });
}

function filterMoviesOnTitle(wordInMovieTitle) {
  removeMoviesFromDOM();

  const filterMovies = movieDB.Movies.filter((movie) => {
    return movie.Title.includes(wordInMovieTitle);
  });

  addMoviesToDom(filterMovies);

  console.log("Ik laat de hele array zien", filterMovies);
  console.log("hey ik ben een", wordInMovieTitle, "film");
}

function filterLatestMovies() {
  removeMoviesFromDOM();

  const filterMoviesYear = movieDB.Movies.filter((movie) => {
    return movie.Year >= 2014;
  });

  addMoviesToDom(filterMoviesYear);

  console.log("Movies from 2014 and newer:", filterMoviesYear);
}

function handleOnChangeEvent(event) {
  switch (event.target.value) {
    case "lastmovies":
      filterLatestMovies();
      break;
    case "avenger":
      filterMoviesOnTitle("Avenger");
      break;
    case "xmen":
      filterMoviesOnTitle("X-Men");
      break;
    case "princess":
      filterMoviesOnTitle("Princess");
      break;
    case "batman":
      filterMoviesOnTitle("Batman");
      break;
    default:
      console.log("geen idee welke film");
      break;
  }
}

addEventListeners();
