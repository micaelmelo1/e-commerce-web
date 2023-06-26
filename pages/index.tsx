import React from 'react'
import MainComponent from '../components/shared/MainComponent';
import { useRouter } from 'next/dist/client/router';

const Home: React.FC = () => {
  const router = useRouter();

  return (
    <MainComponent>
      <h1>Painel Admin</h1>
    </MainComponent>
  )
}

export default Home;