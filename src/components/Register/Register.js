import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Register.css";
import Form from "../Form/Form";

function Register(props) {
    return (
        <section className="register">
            <Link to="/" className="register__logo">
                <img src={logo} className="register__logo" alt="logo" />
            </Link>
            <Form
                handleRegNewUser={props.handleRegNewUser}
                handleLogin={props.handleLogin}
            />
        </section>
    );
}

export default Register;
