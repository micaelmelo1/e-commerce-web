import React from 'react';
import MainComponent from '../../../components/shared/MainComponent';
import LoginForm from '../../../components/shared/LoginForm';

const Login: React.FC = () => {
  return (
    <div>
      <MainComponent>
        <div className="p-4 text-center">
          <h2>Entrar</h2>

          <LoginForm titlePhrase="Acessar conta" buttonPhrase="ACESSAR" />
        </div>
      </MainComponent>
    </div>
  )
}

export default Login;