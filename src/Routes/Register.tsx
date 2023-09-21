import { Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { RegisterCard } from '../components/RegisterCard/RegisterCard';
import { routes } from '../constants';

export const Register = () => {
  const history = useNavigate();

  const handleLoginClick = () => {
    history(routes.login);
  };

  return (
    <Flex justifyContent='center' alignItems='center'>
      <RegisterCard onLoginClick={handleLoginClick} />
    </Flex>
  );
};
