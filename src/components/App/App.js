import React, { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
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

function App() {
  const location = useLocation();

  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  function handlePopupClick() {
    setIsPopupOpen(true);
  }

  function closePopup() {
    setIsPopupOpen(false);
  }

 
  function useWindowSize() {
    const [size, setSize] = useState('');
    useEffect(() => {
      function updateSize() {
         setSize(window.innerWidth);
       }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  const width = useWindowSize()







  return (
    <div className="App app__text">
      <Header location={location.pathname} onOpenPopup={handlePopupClick} width={width} />
      <Switch>
        <Route exact path="/">
         <Main></Main>
           <Footer></Footer>
        </Route>
        <Route path="/signin">

          <Login></Login>
        </Route>
        <Route path="/signup">
          <Register></Register>
        </Route>
        <Route path="/movies">
          <Movies></Movies>
          <Footer></Footer>
        </Route>
        <Route path="/saved-movies">
          <SavedMovies></SavedMovies>
          <Footer></Footer>
        </Route>
        <Route path="/profile">
          <Profile name="Yulia" email="yulia@mail.ru"></Profile>
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Navigation isOpen={isPopupOpen} onClose={closePopup}></Navigation>
    </div>
  );
}

// /movies, /saved-movies, /profile, /signin, /signup

export default App;
