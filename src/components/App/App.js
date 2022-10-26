import React, { useEffect } from 'react';
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
import { moviesApi } from '../../utils/MoviesApi';
import { useCurrentWidth } from '../../hooks/useCurrentWidth';
import { getLoadStep, getInitialCount } from '../../utils/getLoadOfMoreButton'
import useLocalStorage from '../../hooks/useLocalStorage';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { useHistory, useLocation } from 'react-router-dom';
import { mainApi } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {

  const [movies, setMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [preloaderState, setPreloaderState] = React.useState(false);
  const [filterError, setFilterError] = React.useState('');
  const [savedFilterError, setSavedFilterError] = React.useState('');
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [savedMoviesFilter, setSavedMoviesFilter] = React.useState([]);

  //стейты поиска
  const [filmName, changeFilmName] = useLocalStorage('movieName', '');
  const [checkBox, changeCheckBox] = useLocalStorage('checkbox', false);

  const [savedFilmName, changeSavedFilmName] = useLocalStorage('savedMovieName', '');
  const [savedCheckBox, changeSavedCheckBox] = useLocalStorage('savedCheckBox', false);

  //стейт пользователя
  const [loggedIn, setLoggedIn] = React.useState(false);
  //Контекст пользователя
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    tokenCheck();
    if (loggedIn) {
      debugger;
      getSavedMovies();
      if (filmName !== '') {
        filterMovie();
      }
    }
    setFilterError('');
    setSavedFilterError('');
  }, [ , loggedIn]);

  // console.log('loginssss ', loggedIn);

  let location = useLocation();
  let history = useHistory();

  //resizer
  const width = useCurrentWidth();

  const [moviesCount, setMoviesCount] = React.useState(getInitialCount(width));

  // console.log(width);

  React.useEffect(() => {
    setMoviesCount(getInitialCount(width));
  }, [width])

  // Запрос фильмов
  const fetchMovies = () => {
    moviesApi.getMovies()
    .then((res) => {
      setPreloaderState(true);
      // console.log(res);
      setMovies(res);
      localStorage.setItem('movies', JSON.stringify(res));
    })
    .catch ((err) => {
      console.log('ошибка: ', err);
    })
    .finally(() => {
      setPreloaderState(false);
    })
  }

  //Получение фильмов при монтировании
  const getSavedMovies = () => {
    // debugger;
    mainApi.getMovies()
    .then ((smovies) => {
      setSavedMovies(smovies.data, ...savedMovies);
      // console.log('saved movies', savedMovies);
      setSavedMoviesFilter(smovies.data, ...savedMoviesFilter);
    })
    .catch((err) => {
      console.log('Не удалось загрузить фильмы: ', err);
      setSavedMovies([]);
    })
  }

  //Получение фильмов в localstorage 
  React.useEffect(() => {
    const localMovies = localStorage.getItem('movies');
    if (localMovies) {
      try {
        const parsedMovies = JSON.parse(localMovies);
        if (!Array.isArray(parsedMovies)) {
          console.log('Ошибка сервера');
        }
        setMovies(JSON.parse(localMovies))
      }
      catch (error) {
        console.log('Error: ', error);
        localStorage.removeItem('movies');
        fetchMovies();
      }
    } else {
      fetchMovies();
    }
    
  }, [])

  React.useEffect(() => {
    filterSavedMovie();
    if(filmName === '') {
      return;
    }
    filterMovie();
  }, [checkBox, savedCheckBox])

  //Поиск фильмов

  async function filterMovie () {

    setFilterError('');
        //получаем инпуты
    let movieName = filmName;

    if (movieName === '') {
      setFilteredMovies([], ...filteredMovies)
      return setFilterError('Нужно ввести ключевое слово');
    }
    
    let films = []; 
    movies.filter(cur => {
      let fullValue = "";
      Object.values(cur).forEach(value => {
        fullValue += " | " + value;
      });
      if (fullValue != "" && fullValue.toLowerCase().indexOf(movieName.toLowerCase()) > -1 && (checkBox ? true : cur.duration > 40))
        films.push(cur);
    })

    if (films.length === 0) {
      setFilterError('Ничего не найдено');
    }
    //Возвращаем фильмы
    setFilteredMovies(films, ...filteredMovies);
    setMoviesCount(getInitialCount(width));
  }

  // фильрация сохраненных фильмов

  function filterSavedMovie () {
    debugger;

    setSavedFilterError('');

    let movieName = savedFilmName;

    if (movieName === '') {
      setSavedMoviesFilter(savedMovies, ...savedMoviesFilter);
    }

    let films = []; 
    savedMovies.filter(cur => {
      let fullValue = "";
      Object.values(cur).forEach(value => {
        fullValue += " | " + value;
      });
      if (fullValue != "" && fullValue.toLowerCase().indexOf(movieName.toLowerCase()) > -1 && (savedCheckBox ? true : cur.duration > 40))
        films.push(cur);
    })

    if (films.length === 0) {
      setSavedFilterError('Ничего не найдено');
    }

    setSavedMoviesFilter(films, ...savedMoviesFilter);
    setMoviesCount(getInitialCount(width));
  }

  //кнопка подгрузки

  React.useEffect(() => {
    // debugger;
    if (moviesCount <= filteredMovies.length) {
      setAddMoreBtn(true);
    }
    if (moviesCount >= filteredMovies.length) {
      setAddMoreBtn(false);
    }
  }, [moviesCount, filteredMovies.length, width])

  const [addMoreBtn, setAddMoreBtn] = React.useState(true);

  function handleMoreBtn () {

    setMoviesCount((prevCount) => prevCount + getLoadStep(width));
  }

  console.log(filteredMovies);

  //Валидация форм
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation({
    password: (value) => {
      if (value.length < 6) {
        return 'Пароль должен содержать минимум 6 символов!'
      }
      return '';
    },
    email: (value) => {
      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
        return 'Email не соответствует шаблону электронной почты!'
      }
      return '';
    },
    user: (value) => {
      if (value.length < 2) {
        return 'Имя не должно быть короче 2 символов'
      }
      if (!/^[^\s][А-ЯA-ZёәіңғүұқөһӘІҢҒҮҰҚӨҺ\-\s]+$/umi.test(value)) {
        return 'поле name должно содержать только латиницу, кириллицу, пробел или дефис и не может начинаться с пробела!'
      }
      if (value.length > 30) {
        return 'Имя не должно быть больше 30 символов'
      }
      return '';
    }
  });
  // console.log(isValid);
  // console.log('values ', values);
  // console.log('errors ', errors);

  //Сброс валидации при смене url
  React.useEffect(() => {
    resetForm();
    seterrorMessage('');
    tokenCheck();
  }, [location])

  //авторизация

  const [ errorMessage, seterrorMessage ] = React.useState('');

  const handleLogin = (email, password) => {
    return mainApi
      .authorization(password, email)
      .then((data) => {
        if (!data) {
          return;
          }
        localStorage.setItem('jwt', data.token);
        // console.log(localStorage.getItem('jwt'));
        
        setLoggedIn(true);
        setTimeout(() => {history.push('/movies');}, 1000);
        })
      .catch ((err) => {
        if (err.status === 401) {
          seterrorMessage('Вы ввели неправильный логин или пароль.');
          resetForm();
          setTimeout(() => {seterrorMessage('')}, 4000);
        }
        if (err.status === 500) {
          seterrorMessage('При авторизации произошла ошибка. Токен не передан или передан не в том формате.');
          resetForm();
          setTimeout(() => {seterrorMessage('')}, 4000);
        }
      })
  }

  //Лайк фильма
  const handleLike = (movie) => {
    // debugger;
    // console.log(movie);
    const id = movie.data.id ? movie.data.id : movie.data.movieId;

    return savedMovies.some(savedMovie => savedMovie.movieId === id);
  }

  //удаление фильма 
  const removeFilm = (movie) => {
    // debugger;
    const movieId = movie.data.id ? movie.data.id : movie.data.movieId;
    const id = savedMovies.find(savedMovie => savedMovie.movieId === movieId)._id
    mainApi.deleteMovie(id)
    .then((res) => {
      debugger;
      getSavedMovies();
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  //добавление фильма
  const addFilm = (movie) => {
    // debugger;
    mainApi.createMovie(movie.data)
    .then((res) => {
      getSavedMovies();
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  // регистрация

  const handleRegister = (name, email, password) => {
    // debugger;
    return mainApi
      .authentication(password, email, name)
      .then((data) => {
        console.log(data);
        handleLogin(email, password);
      })
      .catch((err) => {
        if (err.status === 409) {
          seterrorMessage('Пользователь с таким email уже существует.');
          resetForm();
          return setTimeout(() => {seterrorMessage('')}, 4000);
        }
        if (err.status === 400) {
          seterrorMessage('При регистрации пользователя произошла ошибка.');
          resetForm();
          return setTimeout(() => {seterrorMessage('')}, 4000);
        }
        if (err.status === 404) {
          seterrorMessage('404 Страница по указанному маршруту не найдена.');
          resetForm();
          return setTimeout(() => {seterrorMessage('')}, 4000);
        }
        else {
          seterrorMessage('500 На сервере произошла ошибка.');
          resetForm();
          return setTimeout(() => {seterrorMessage('')}, 4000);
        }
      })
  }

  //проверка токена

  const tokenCheck = () => {
    // debugger;
    if (localStorage.getItem('jwt')){
      let jwt = localStorage.getItem('jwt');
      mainApi.getUser(jwt).then((res) => {
          if (res){
            setLoggedIn(true);
          }
      })
      .catch((err) => {
        if (err.status === 401) {
          setLoggedIn(false);
        }
      });
    }
  }

  console.log('user: ', currentUser);

  //кнопка выхода
  const handleSignOut = () => {
    debugger;
    localStorage.removeItem('jwt');
    localStorage.removeItem('checkbox');
    localStorage.removeItem('movieName');
    changeFilmName('');
    changeCheckBox(false);
    changeSavedFilmName('');
    changeSavedCheckBox(false)
    setFilteredMovies([], ...filteredMovies);
    console.log('loook here!!!!! ', filteredMovies);
    setLoggedIn(false);
    setSavedMovies([]);
    history.push('/');
  }

  React.useEffect(() => {
    if (loggedIn === true) {
      let jwt = localStorage.getItem('jwt');
      mainApi.getUser(jwt).then((res) => {
        setCurrentUser(res.user);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [loggedIn])

  //Стейт кнопки
  const [isEditBtnOpen, setIsEditBtnOpen] = React.useState(false);

  //Редактирование профиля

  const handleEditProfile = (name, email) => {
    // debugger;
    return mainApi
      .editProfile(name, email)
      .then((res) => {
        setCurrentUser(res.data);
        setIsEditBtnOpen(false);
        seterrorMessage('Данные обновлены успешно!');
        setTimeout(() => {seterrorMessage('')}, 4000);
        console.log('onEditProfile ', res);
      })
      .catch((err) => {
        if (err.status === 409) {
          seterrorMessage('Пользователь с таким email уже существует.');
          resetForm();
          return setTimeout(() => {seterrorMessage('')}, 4000);
        }
        if (err.status === 400) {
          seterrorMessage('При обновлении профиля произошла ошибка.');
          resetForm();
          return setTimeout(() => {seterrorMessage('')}, 4000);
        }
        if (err.status === 404) {
          seterrorMessage('404 Страница по указанному маршруту не найдена.');
          resetForm();
          return setTimeout(() => {seterrorMessage('')}, 4000);
        }
        else {
          seterrorMessage('500 На сервере произошла ошибка.');
          resetForm();
          return setTimeout(() => {seterrorMessage('')}, 4000);
        }
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route exact path="/">
          <Header loggedIn={loggedIn}/>
          <Main/>
          <Footer></Footer>
        </Route>
        <ProtectedRoute path="/movies" loggedIn={loggedIn}>
          <Header loggedIn={loggedIn}/>
          <Movies 
            onLike={handleLike}
            movieName={filmName}
            onSetMovieName={changeFilmName}
            checkBox={checkBox}
            onSetCheckBox={changeCheckBox}
            onFilterError={filterError}
            preloader={preloaderState}
            moviesCount={moviesCount}
            movies={filteredMovies}
            onSearch={filterMovie}
            onMoreBtn={handleMoreBtn}
            moreBtnStatus={addMoreBtn}
            savedMovies={savedMovies}
            onRemoveFilm={removeFilm}
            onAddFilm={addFilm}>
            </Movies>
          <Footer></Footer>
          </ProtectedRoute>
          <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
          <Header loggedIn={loggedIn}/>
          <SavedMovies
            movieName={savedFilmName}
            onSetMovieName={changeSavedFilmName}
            checkBox={savedCheckBox}
            onSetCheckBox={changeSavedCheckBox}
            onFilterError={savedFilterError}
            onSearch={filterSavedMovie}
            onLike={handleLike}
            moviesCount={moviesCount}
            savedMovies={savedMovies}
            onRemoveFilm={removeFilm}
            onAddFilm={addFilm}
            onFilter={filterSavedMovie}
            filteredMovies={savedMoviesFilter}
          ></SavedMovies>
          <Footer></Footer>
        </ProtectedRoute>
        <ProtectedRoute path="/profile" loggedIn={loggedIn}>
          <Header loggedIn={loggedIn}/>
          <Profile 
            errorMessage={errorMessage}
            setIsEditBtnOpen={setIsEditBtnOpen}
            isEditBtnOpen={isEditBtnOpen}
            onEditProfile={handleEditProfile}
            onSignOut={handleSignOut}
            values={values}
            handleChange={handleChange}
            errors={errors}
            isValid={isValid}
            resetForm={resetForm}>
          </Profile>
        </ProtectedRoute>
        <Route path="/signup">
          <Register
            onRegister={handleRegister}
            values={values}
            handleChange={handleChange}
            errors={errors}
            isValid={isValid}
            resetForm={resetForm}
            errorMessage={errorMessage}
          ></Register>
        </Route>
        <Route path="/signin">
          <Login
            handleLogin={handleLogin}
            values={values}
            handleChange={handleChange}
            errors={errors}
            isValid={isValid}
            resetForm={resetForm}
            errorMessage={errorMessage}
          >
          </Login>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
