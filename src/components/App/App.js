import React from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'
import { Route, Switch } from 'react-router-dom';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

function App() {

  return (
    <>
      {/* <Header/> */}
      <Switch>
        <Route exact path="/">
          <Header/>
          <Main/>
          <Footer></Footer>
        </Route>
        <Route path="/movies">
          <Header/>
          <Movies></Movies>
          <Footer></Footer>
        </Route>
        <Route path="/saved-movies">
          <Header/>
          <SavedMovies></SavedMovies>
          <Footer></Footer>
        </Route>
        <Route path="/profile">
          <Header/>
          <Profile name="Виталий"></Profile>
        </Route>
        <Route path="/signup">
          <Register></Register>
        </Route>
        <Route path="/signin">
          <Login></Login>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
