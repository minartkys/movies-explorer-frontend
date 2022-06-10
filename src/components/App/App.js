import React from "react";
import "./App.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Error from "../Error/Error";
import Profile from "../Profile/Profile";

function App() {
    const [currentUser, setCurrentUser] = React.useState({});
    const [loggedIn, setLoggedIn] = React.useState(true);

    return (
        <div className="app">
            <CurrentUserContext.Provider value={currentUser}>
                <Switch>
                    <Route exact path="/">
                        <Main isLoggedIn={loggedIn} />
                    </Route>
                    <ProtectedRoute
                        path="/movies"
                        component={Movies}
                        loggedIn={loggedIn}
                    />
                    <ProtectedRoute
                        path="/saved-movies"
                        component={SavedMovies}
                        loggedIn={loggedIn}
                    />
                    <Route exact path="/signup">
                        <Register />
                    </Route>
                    <Route exact path="/signin">
                        <Register />
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                    <Route path="*">
                        <Error />
                    </Route>
                </Switch>
            </CurrentUserContext.Provider>
        </div>
    );
}

export default App;
