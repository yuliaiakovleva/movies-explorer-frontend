import React, { useEffect, useState } from "react";
import { Switch, useLocation, useHistory } from "react-router-dom";
import { Route } from "react-router";
import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import Movies from "../Movies/Movies";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import PageNotFound from "../PageNotFound/PageNotFound";
import Navigation from "../Navigation/Navigation";
import InfoToolTip from "../InfoToolTip/InfoToolTip";
import * as mainApi from "../../utils/MainApi";
import beatApi from "../../utils/MoviesApi";
import ProtectedRoute from "../ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";


function App() {
  const location = useLocation();
  const history = useHistory();
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [searchTag, setSearchTag] = React.useState("");
  const [mySearchTag, setMySearchTag] = React.useState("");
  // const [movies, setMovies] = React.useState([]);
  const [films, setFilms] = React.useState([]);

  const [ searchSaveResult, setSearchSaveResult ] = useState([])
  const [ onSearch, setOnSearch ] = useState()

  const [savedMovies, setSaveMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [ isClicked, setIsClicked ] = useState(false);
  const [ info, setInfo ] = useState('')
  const [ filter, setFilter ] = useState()
  const [currentUser, setCurrentUser] = React.useState({
    name: "",
    email: " ",
  });
const [ visibility, setVisibility ] = useState('')

  function handleInfo(row) {
    setInfo(row);
    setVisibility('error_visible')
  }

  function handlePopupClick() {
    setIsPopupOpen(true);
  }

  function closePopup() {
    setIsPopupOpen(false);
    setVisibility('')
  }

  function useWindowSize() {
    const [size, setSize] = React.useState("");
    useEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  const width = useWindowSize();

  function handleSearchTag(e) {
     setSearchTag(e.target.value)
  }

  function handleMySearchTag(e) {
    setMySearchTag(e.target.value)
 }

  function isExist(name) {
    return !!localStorage[name];
  }

  // регистрация
  function handleRegister(data) {
    console.log(data);
    mainApi
      .register(data.name, data.email, data.password)

      .then((res) => {
        if (res.statusCode !== 400) {
          setTimeout(() => {
            handleLogin({ email: data.email, password: data.password });
          }, 300);
          history.push("/signin");
        }
      })
      .catch((err) => {
        console.log(err);
        handleInfo('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
      });
  }

    //логин
    function handleLogin(data) {
      mainApi
        .authorize(data.email, data.password)
        .then((res) => {
          console.log(res);
          // при авторизации мы записываем в локал сторрадж токен. потом в app в функции handleTokenCheck будем его все время проверять
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          setFilms([]);
          setSearchTag("");
          // благодаря этому вызову я меняю мейл сразу же
          handleTokenCheck('/movies')
          mainApi.getCurrentUser().then((data) => {
            setCurrentUser(data);
          });
  
          history.push("/movies");
        })
        .catch((err) => {
          // console.log(err);
          handleInfo('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        });
    }

    function handleTokenCheck(path) {
      // если у нас в хранилище хранятся данные, то отправляем запрос на сервер
      if (localStorage.getItem("jwt")) {
        const jwt = localStorage.getItem("jwt");
        mainApi
          .checkToken(jwt)
          .then((res) => {
            if (res) {
              const email = res.email;
              setLoggedIn(true);
              // после авторизации токен будет равняться jwt
              setToken(jwt);
              history.push(path);
            }
          })
          .catch((err) => {
            console.log(err)
            handleInfo('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
          }) 
      }
    }
  
    useEffect(() => {
      handleTokenCheck(location.pathname);
    }, []);


    function handleUpdateUser(data) {
      console.log(data);
      mainApi
      .editUser(data)
        .then(() => {
          console.log(data);
          setCurrentUser(data);
          handleInfo('Ваш профиль изменен')
        })
          .catch((err) => {
          console.log("Ошибка.", err);
          handleInfo('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        });
    }


  // поиск
  function search(e) {
    e.preventDefault();
    if (searchTag === '') {
      setFilms([])
      return handleInfo('Нужно ввести ключевое слово')
      
    } else {
      beatApi
      .getMovies()
      .then((data) => {
          const searchResult = data.filter((movie) => {
            localStorage.setItem("searchTag", searchTag);
            return movie.nameRU.toLowerCase().includes(searchTag.toLowerCase());
          });
          return searchResult;
        })
    
      .then((searchResult => {
        setIsLoading(true)
        setFilms([])
        setTimeout(() => {
          if (searchResult.length < 1 ) {
            // setInfo('Ничего не найдено')
            setFilms(searchResult);
            localStorage.setItem("searchResult", JSON.stringify(searchResult))
            handleInfo('Ничего не найдено')
            setIsLoading(false)
          } 
          else {
            setFilms(searchResult);
            //    console.log(searchResult);
              localStorage.setItem("searchResult", JSON.stringify(searchResult));
            //   // console.log(localStorage);
            setIsLoading(false)
          }
        }, 2000)
      }))
      .catch((err) => {
        console.log("Ошибка.", err);
        handleInfo('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
      });
    }
    
  }

  function isExist(name) {
    return !!localStorage[name];
  }

//вставляем те же результаты поиска после обновления страницы
  useEffect(() => {
    if (isExist("searchResult") && token) {
      const a = localStorage.getItem("searchResult");
      const actualMovies = JSON.parse(a);
      setFilms(actualMovies);
      const actualSearchTag = localStorage.getItem("searchTag");
      setSearchTag(actualSearchTag);
    }
  }, [token]);


//поиск по сохраненным
  function searchSavedMovies(e) {
    e.preventDefault();
    if (mySearchTag === '') {
      setSearchSaveResult([])
      return handleInfo('Нужно ввести ключевое слово')
      
    } else {
      setOnSearch(!onSearch)
      setIsLoading(true)
      setSearchSaveResult([])
      setTimeout(() => {
        const filterSavedMovies = savedMovies.filter((movie) => {
          return movie.nameRU.toLowerCase().includes(mySearchTag.toLowerCase());
        });
        if (filterSavedMovies.length < 1) {
          setIsLoading(false)
          handleInfo('Ничего не найдено')
            setSearchSaveResult(savedMovies);
        } else {
          setIsLoading(false)
          return setSearchSaveResult(filterSavedMovies)
        }
      }, 2000)
    }  
}

// сохранение фильма
  function saveMovie(data) {
    const {
      nameRU,
      nameEN,
      director,
      country,
      year,
      duration,
      description,
      trailerLink,
      imageUrl,
      thumbnailUrl,
      owner,
      movieId,
    } = data;

    const image = imageUrl;
    const thumbnail = `https://api.nomoreparties.co/${thumbnailUrl}`;

    mainApi
      .createMovie({
        nameRU,
        nameEN,
        director,
        country,
        year,
        duration,
        description,
        trailerLink,
        image,
        thumbnail,
        owner,
        movieId,
      })
      .then((newMovie) => {
        setSaveMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log("Ошибка.", err);
        handleInfo('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
      });
  }


  useEffect(() => {
    if (token) {
      mainApi
        .getCurrentUser()
        .then((data) => {
          setCurrentUser(data);
          setToken(token);
        })
        .catch((err) => {
          console.log("Ошибка.", err);
          handleInfo('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        });
    }
  }, [token]);


// при входе вставляем данные о сохраненных фильмах
  useEffect(() => {
    if (token) {
      mainApi
        .getMovies()
        .then((data) => {
          setSaveMovies(data);
        })
        .catch((err) => {
          console.log("Ошибка.", err);
          handleInfo('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
        });
    }
  }, [token]);



  function handleMoviedDlete(movie) {
    mainApi
      .deleteMovie(movie.id)
      .then(() => {
        setSaveMovies((state) =>
          state.filter((element) => element._id !== movie.id)
        );
      })
      .catch((err) => {
        console.log("Ошибка.", err);
        handleInfo('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз')
      });
  }



  function handleLogout(e) {
    e.preventDefault();
    localStorage.removeItem("jwt");
    setToken(null);
    localStorage.setItem("searchResult", []);
    localStorage.setItem("searchTag", "");
    console.dir(localStorage);
    setLoggedIn(false);
    setCurrentUser({});
    history.push("/");
  }



  return (
    <div className="App app__text">
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          location={location.pathname}
          onOpenPopup={handlePopupClick}
          width={width}
          loggedIn={loggedIn}
        />

        <Switch>
          <Route exact path="/">
            <Main></Main>
            <Footer></Footer>
          </Route>
          <Route path="/signin">
            <Login handleLogin={handleLogin}></Login>
          </Route>
          <Route path="/signup">
            <Register handleRegister={handleRegister}></Register>
          </Route>

          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            movies={films}
            savedMovies={savedMovies}
            search={search}
            handleSearchTag={handleSearchTag}
            searchTag={searchTag}
            isLoading={isLoading}
            onAddMovie={saveMovie}
            onDeleteMovie={handleMoviedDlete}
            width={width}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            setFilter={setFilter}
            location={location.pathname}
            filter={filter}
            
          ></ProtectedRoute>

          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            savedMovies={savedMovies}
            onAddMovie={saveMovie}
            movies={films}
            onDeleteMovie={handleMoviedDlete}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            setFilter={setFilter}
            filter={filter}
            location={location.pathname}
            searchSavedMovies={searchSavedMovies}
            mySearchTag={mySearchTag}
            handleMySearchTag={handleMySearchTag}
            searchSaveResult={searchSaveResult}
            onSearch={onSearch}
            isLoading={isLoading}
   
          ></ProtectedRoute>

          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            onLogout={handleLogout}
            component={Profile}
            onUpdateUser={handleUpdateUser}
          ></ProtectedRoute>

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
      <Navigation isOpen={isPopupOpen} onClose={closePopup}></Navigation>
      <InfoToolTip onClose={closePopup} info={info} visibility={visibility}></InfoToolTip>
    </div>
  );
}

export default App;
