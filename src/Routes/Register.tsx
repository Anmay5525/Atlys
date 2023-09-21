import { Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { RegisterCard } from '../components/RegisterCard/RegisterCard';
import { routes } from '../constants';

export const Register = () => {
  const history = useNavigate();

  const handleLoginClick = () => {
    history(routes.login);
  };

  const goToHome = () => {
    history(routes.home);
  };

  return (
    <Flex justifyContent='center' alignItems='center'>
      <RegisterCard onLoginClick={handleLoginClick} onSuccess={goToHome} />
    </Flex>
  );
};
