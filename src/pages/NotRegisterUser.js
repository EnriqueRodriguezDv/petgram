import React, { useContext } from "react";
import {Context} from "../Context";

import { RegisterMutation } from "../container/RegisterMutation";
import { UserForm } from "../components/UserForm";
import { LoginMutation } from "../container/LoginMutation";

const NotRegisterUser = () => {
  const { activateAuth } = useContext(Context);
  return (
    <>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            register({ variables }).then(({ data }) => {
              const { signup } = data;
              activateAuth(signup);
            });
          };

          const errorMsg = error && "El usuario ya existe o hay algun problema";

          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              title="Registrarse"
              onSubmit={onSubmit}
            />
          );
        }}
      </RegisterMutation>

      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            login({ variables }).then(({ data }) => {
              const { login } = data;
              activateAuth(login);
            });
          };

          const errorMsg =
            error && "La contraseña no es correcta o el usuario no existe";

          return (
            <UserForm
              disabled={loading}
              title="Iniciar Sesion"
              error={errorMsg}
              onSubmit={onSubmit}
            />
          );
        }}
      </LoginMutation>
    </>
  );
};

export default NotRegisterUser;
