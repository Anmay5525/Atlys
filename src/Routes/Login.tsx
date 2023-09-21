import { Box, Flex } from '@chakra-ui/react';
import { LoginCard } from '../components/LoginCard/LoginCard';

export const Login = () => {
  return (
    <Flex justifyContent='center' alignItems='center'>
      <LoginCard />
    </Flex>
  );
};
