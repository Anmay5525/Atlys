import { Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { LoginCard } from '../components/LoginCard/LoginCard';
import { routes } from '../constants';

export const Login = () => {
  const history = useNavigate();

  const handleRegisterClick = () => {
    history(routes.register);
  };

  return (
    <Flex justifyContent='center' alignItems='center'>
      <LoginCard onRegisterClick={handleRegisterClick} />
    </Flex>
  );
};
