import React from 'react';
import '../css/Header.scss';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect({redirectUri: 'http://localhost:3000/welcome'})}
    >
      Log In
    </button>
  );
};

export default LoginButton;