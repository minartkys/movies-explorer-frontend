import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Register.css";
import Form from "../Form/Form";

function Register() {
    return (
        <section className="register">
            <Link to="/" className="register__logo">
                <img src={logo} className="register__logo" alt="logo" />
            </Link>
            <Form />
        </section>
    );
}

export default Register;
