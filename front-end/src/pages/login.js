import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { apiLogin } from "../services/Api";
import "../styles/login.css";

export default function Login(props) {
  const INITIAL_LOGIN = {
    username: '',
    password: '',
  };
  const [isDisabled, setIsDisabled] = useState(true);
  const [login, setLogin] = useState(INITIAL_LOGIN);

  const fetchApi = async (username, password) => {
    return apiLogin(username, password).then((data) => data);
  }

  const handleChange = ({ target: { name, value } }) => {
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleClick = async () => {
    const { history } = props;
    const { username, password } = login;

    localStorage.clear();

    const res = await fetchApi(username, password);
    if (res.token) {
      localStorage.setItem('token', JSON.stringify(res.token));
      return history.push('/products');
    }
    return alert('Login incorreto!');
  };

  const inputsLogin = () => {
    return (
      <Form className="form-login">
        <span className="login-title">Seja bem vindo!</span>
        <Form.Group controlId="formBasicName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            className="input-email"
            size="lg"
            type="username"
            name="username"
            value={ login.username }
            onChange={ handleChange }
            autoComplete="off"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            className="input-password"
            size="lg"
            type="password"
            name="password"
            value={ login.password }
            onChange={ handleChange }
            autoComplete="off"
          />
        </Form.Group>

        <Button
          variant="primary"
          size="lg"
          type="button"
          disabled={ isDisabled }
          onClick={ handleClick }
          className="btn-login"
        >
          Entrar
        </Button>
        <Link to='/'>
          <p className="back-home">Voltar para home</p>
        </ Link>
      </Form>
    );
  }

  useEffect(() => {
    const { history } = props;

    const login = localStorage.getItem('token')
    if (login) {
      history.push('/products');
    }
    localStorage.clear();
  }, []);

  useEffect(() => {
    const inputsVerify = () => {
      const { password } = login;
      const passwordRegex = new RegExp(/[\w\D]{4}/g);
      if (passwordRegex.test(password)) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    };

    inputsVerify();
  }, [login]);

  return (
    <div className="login-main">
      <div className="login-content">
        { inputsLogin() }
      </div>
    </div>
  );
}
