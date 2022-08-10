import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "../styles/login.css";

export default function Login(props) {
  const INITIAL_LOGIN = {
    username: '',
    password: '',
  };
  const [isDisabled, setIsDisabled] = useState(true);
  const [login, setLogin] = useState(INITIAL_LOGIN);

  // const fetchApi = async (email, password) => {
  //   return apiLogin(email, password).then(({data}) => data);
  // }

  const handleChange = ({ target: { name, value } }) => {
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleClick = async () => {
    const { history } = props;
    const { email, password } = login;

    // const res = await fetchApi(email, password);

    // if (res.code) {
    //   return history.push('/cadastrar');
    // }
    // localStorage.setItem('token', JSON.stringify(res.token));
    // localStorage.setItem('user', JSON.stringify(res.usuario.nome));
    // return history.push('/produtos');
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
      </Form>
    );
  }


  useEffect(() => {
    const inputsVerify = () => {
      const { email, password } = login;
      // modelo que o regex de email verifica exemplo@exemplo.exemplo
      const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      const passwordRegex = new RegExp(/[\w\D]{4}/g);
      if (emailRegex.test(email) && passwordRegex.test(password)) {
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
