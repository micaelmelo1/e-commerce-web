import React from 'react';
import MainComponent from '../../../components/shared/MainComponent';
import LoginForm from '../../../components/shared/LoginForm';

const Login: React.FC = () => {
  return (
    <div>
      <MainComponent>
        <LoginForm titlePhrase="Acessar conta" buttonPhrase="ENTRAR" />
      </MainComponent>
    </div>
  )
}

export default Login;