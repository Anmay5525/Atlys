import { Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { LoginCard } from '../components/LoginCard/LoginCard';
import { routes } from '../constants';
import Logo from '../assets/Logo.svg';

export const Login = () => {
  const history = useNavigate();

  const handleRegisterClick = () => {
    history(routes.register);
  };

  return (
    <Flex
      justifyContent='center'
      alignItems='center'
      flexDir='column'
      gap='49px'
    >
      <img src={Logo} alt='' />
      <LoginCard onRegisterClick={handleRegisterClick} />
    </Flex>
  );
};
