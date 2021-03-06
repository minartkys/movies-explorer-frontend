import logo from "../../images/logo.svg";
import { Link, Route, Switch } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export default function Header(isLoggedIn) {
    return (
        <Switch>
            <Route exact path="/">
                <header className="header">
                    <Link to="/">
                        <img src={logo} className="header__logo" alt="logo" />
                    </Link>
                    <div className="header-navlink">
                        <Navigation isLoggedIn={false}></Navigation>
                    </div>
                </header>
            </Route>
            <Route exact path="/(movies|saved-movies|profile)">
                <header className="header">
                    <Link to="/">
                        <img src={logo} className="header__logo" alt="logo" />
                    </Link>
                    <div className="header-navlink header-navlink__visible">
                        <Navigation isLoggedIn={true}></Navigation>
                    </div>
                    <BurgerMenu />
                </header>
            </Route>
        </Switch>
    );
}
