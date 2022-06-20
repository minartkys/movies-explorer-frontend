import React from "react";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Error from "../Error/Error";
import Profile from "../Profile/Profile";
import auth from "../../utils/Auth";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import { MOVIES_DURATION_SHORT } from "../../utils/constants";
function App() {
    const [currentUser, setCurrentUser] = React.useState({});
    const [isLoggedIn, setisLoggedIn] = React.useState(false);
    const [movies, setMovies] = React.useState([]);
    const [filteredMovies, setFilteredMovies] = React.useState(
        JSON.parse(localStorage.getItem("filteredMovies")) || []
    );
    const [filteredSaveMovies, setFilteredSaveMovies] = React.useState([]);
    const [isShortMovie, setIsShortMovie] = React.useState(false);
    const [isShortSavedMovie, setIsShortSavedMovie] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [nothingFound, setNothingFound] = React.useState(false);
    const [nothingFoundSaveMovies, setNothingFoundSaveMovies] =
        React.useState(false);

    const history = useHistory();
    const [saveMovie, setSaveMovie] = React.useState([]);
    const [isSearch, setIsSearch] = React.useState(false);
    const [errorProfileChange, setErrorProfileChange] = React.useState(false);
    const [succesfulProfileChange, setSuccesfulProfileChange] =
        React.useState(false);
    let location = useLocation();

    React.useEffect(() => {
        const path = location.pathname;
        const jwt = localStorage.getItem("jwt");
        if (jwt) {
            auth.checkJWT()
                .then((data) => {
                    if (data) {
                        setisLoggedIn(true);
                        history.push(path);
                    }
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }, []);

    React.useEffect(() => {
        if (isLoggedIn) {
            moviesApi
                .getInitialMovies()
                .then((data) => {
                    localStorage.setItem("movieData", JSON.stringify(data));
                    setMovies(JSON.parse(localStorage.getItem("movieData")));
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [isLoggedIn]);

    React.useEffect(() => {
        if (isLoggedIn) {
            Promise.all([mainApi.getUserInformation(), mainApi.getSaveMovies()])
                .then(([profileInfo, savedMovies]) => {
                    setCurrentUser(profileInfo);
                    console.log(savedMovies);
                    console.log(profileInfo);
                    const mySavedMovies = savedMovies.filter(
                        (i) => i.owner === profileInfo._id
                    );
                    console.log(mySavedMovies);
                    localStorage.setItem(
                        "savedMovies",
                        JSON.stringify(mySavedMovies)
                    );
                    setSaveMovie(
                        JSON.parse(localStorage.getItem("savedMovies"))
                    );
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [isLoggedIn, movies]);

    React.useEffect(() => {
        console.log(localStorage.getItem("checkBox"));
        if (JSON.parse(localStorage.getItem("checkBox")) === true) {
            setIsShortMovie(true);
        }
    }, []);

    function handleRegNewUser({ name, email, password }) {
        return auth
            .regNewUser(name, email, password)
            .then((res) => {
                if (res) {
                    handleLogin({ email, password });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleLogin({ email, password }) {
        return auth
            .loginUser(email, password)
            .then((res) => {
                if (res) {
                    localStorage.setItem("jwt", res.token);
                    setisLoggedIn(true);
                    history.push("/movies");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
    function handleUpdateUser(data) {
        mainApi
            .saveProfileInfo(data)
            .then((profileInfo) => {
                setErrorProfileChange(false);
                setCurrentUser(profileInfo);
                setSuccesfulProfileChange(true);
            })
            .catch((err) => {
                console.error(err);
                setErrorProfileChange(true);
            });
    }

    function logoutProfile() {
        setisLoggedIn(false);
        localStorage.removeItem("jwt");
        localStorage.removeItem("savedMovies");
        localStorage.removeItem("filteredMovies");
        localStorage.removeItem("movieData");
        history.push("/movies");
    }

    function handleSearch(value) {
        setNothingFound(false);
        if (isShortMovie) {
            const shortMovie = movies.filter((movie) => {
                return (
                    movie.duration <= MOVIES_DURATION_SHORT &&
                    movie.nameRU.toLowerCase().includes(value.toLowerCase())
                );
            });
            localStorage.setItem("filteredMovies", JSON.stringify(shortMovie));
            localStorage.setItem("checkBox", JSON.stringify(true));
            return setFilteredMovies(shortMovie);
        } else {
            const filteredMovie = movies.filter((movie) => {
                return movie.nameRU.toLowerCase().includes(value.toLowerCase());
            });
            localStorage.setItem(
                "filteredMovies",
                JSON.stringify(filteredMovie)
            );
            localStorage.setItem("checkBox", JSON.stringify(""));
            return setFilteredMovies(filteredMovie);
        }
    }

    function handleSearchSavedMovie(value) {
        setNothingFoundSaveMovies(false);
        if (isShortSavedMovie) {
            const shortMovie = saveMovie.filter((movie) => {
                return (
                    movie.duration <= MOVIES_DURATION_SHORT &&
                    movie.nameRU.toLowerCase().includes(value.toLowerCase())
                );
            });
            return setFilteredSaveMovies(shortMovie);
        } else {
            const filteredSavedMovie = saveMovie.filter((movie) => {
                return movie.nameRU.toLowerCase().includes(value.toLowerCase());
            });
            return setFilteredSaveMovies(filteredSavedMovie);
        }
    }

    function handleSaveMovie(value) {
        mainApi
            .saveMovie(value)
            .then((res) => {
                setSaveMovie([res, ...saveMovie]);
                localStorage.setItem(
                    "savedMovies",
                    JSON.stringify([res, ...saveMovie])
                );
            })
            .catch((err) => {
                console.log(err);
            });
    }
    function handleDeleteMovie(value) {
        mainApi
            .deleteMovie(value._id)
            .then(() => {
                const newMoviesList = saveMovie.filter(
                    (i) => i.movieId !== (value.id || value.movieId)
                );
                const newMoviesListSave = filteredSaveMovies.filter(
                    (i) => i.movieId !== (value.id || value.movieId)
                );
                setSaveMovie(newMoviesList);
                setFilteredSaveMovies(newMoviesListSave);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function checkMoviesFound() {
        if (JSON.parse(localStorage.getItem("filteredMovies").length === 2)) {
            setNothingFound(true);
        } else setNothingFound(false);
    }

    function checkMoviesFilteredSaveFound() {
        if (filteredSaveMovies.length === 0) {
            setNothingFoundSaveMovies(true);
        } else setNothingFoundSaveMovies(false);
    }

    function handleCheckboxClick() {
        if (!isShortMovie) setIsShortMovie(true);
        else setIsShortMovie(false);
    }

    function handleCheckboxClickSavedMovie() {
        if (!isShortSavedMovie) setIsShortSavedMovie(true);
        else setIsShortSavedMovie(false);
    }

    function showPreloader() {
        setIsLoading(true);
        setTimeout(async () => {
            setIsLoading(false);
        }, 1000);
    }

    return (
        <div className="app">
            <CurrentUserContext.Provider value={currentUser}>
                <Switch>
                    <Route exact path="/">
                        <Main isLoggedIn={isLoggedIn} />
                    </Route>
                    <ProtectedRoute
                        exact
                        path="/movies"
                        component={Movies}
                        movies={filteredMovies}
                        isLoggedIn={isLoggedIn}
                        handleSearch={handleSearch}
                        isShortMovie={isShortMovie}
                        handleCheckboxClick={handleCheckboxClick}
                        showPreloader={showPreloader}
                        isLoading={isLoading}
                        checkMoviesFound={checkMoviesFound}
                        nothingFound={nothingFound}
                        savedMovies={saveMovie}
                        handleSaveMovie={handleSaveMovie}
                        handleDeleteMovie={handleDeleteMovie}
                        filteredSaveMovies={filteredSaveMovies}
                    />
                    <ProtectedRoute
                        exact
                        path="/saved-movies"
                        component={SavedMovies}
                        isLoggedIn={isLoggedIn}
                        isLoading={isLoading}
                        isShortMovie={isShortSavedMovie}
                        showPreloader={showPreloader}
                        handleCheckboxClick={handleCheckboxClickSavedMovie}
                        handleSearchSavedMovie={handleSearchSavedMovie}
                        movies={filteredMovies}
                        savedMovies={saveMovie}
                        handleDeleteMovie={handleDeleteMovie}
                        filteredSaveMovies={filteredSaveMovies}
                        nothingFoundSaveMovies={nothingFoundSaveMovies}
                        checkMoviesFilteredSaveFound={
                            checkMoviesFilteredSaveFound
                        }
                        setIsSearch={setIsSearch}
                        isSearch={isSearch}
                    />
                    <Route exact path="/signup">
                        <Register handleRegNewUser={handleRegNewUser} />
                    </Route>
                    <Route exact path="/signin">
                        <Register handleLogin={handleLogin} />
                    </Route>
                    <ProtectedRoute
                        exact
                        path="/profile"
                        component={Profile}
                        errorProfileChange={errorProfileChange}
                        isLoggedIn={isLoggedIn}
                        logoutProfile={logoutProfile}
                        handleUpdateUser={handleUpdateUser}
                        currentUser={currentUser}
                        succesfulProfileChange={succesfulProfileChange}
                    ></ProtectedRoute>
                    <Route path="*">
                        <Error />
                    </Route>
                </Switch>
            </CurrentUserContext.Provider>
        </div>
    );
}

export default App;
