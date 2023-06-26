import LoginForm from '../../../components/LoginForm';
import MainComponent from '../../../components/shared/MainComponent';
import SignUpForm from '../../../components/SignUpForm';


const Login: React.FC = () => {
  return (
    <div>
      <MainComponent>
        <div className="p-4 text-center">
          <h2>Entrar</h2>

          <LoginForm titlePhrase="Acessar conta" buttonPhrase="Entrar" />
          <br />

          <SignUpForm titlePhrase="Criar nova conta" buttonPhrase="Criar" />
        </div>
      </MainComponent>
    </div>
  )
}

export default Login;