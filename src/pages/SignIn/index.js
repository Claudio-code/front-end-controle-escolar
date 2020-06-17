import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Input } from './styles';

import { signInRequest } from '../../store/modules/auth/actions';

export default function SignIn() {
  const dispacth = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    dispacth(signInRequest(email, password));
  };

  return (
    <div>
      <form onSubmit={submit}>
        <h2>Efetuar o login</h2>
        <Input
          id="outlined-basic"
          label="Insira o seu email"
          type="email"
          required
          placeholder="Ex: exmeple@email.com"
          variant="outlined"
          value={email}
          onChange={changeEmail}
        />

        <Input
          id="outlined-basic"
          label="Insira sua senha"
          placeholder="Ex: xxxxxxx"
          variant="outlined"
          type="password"
          required
          value={password}
          onChange={changePassword}
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
        >
          Sign In
        </Button>
      </form>
    </div>
  );
}
