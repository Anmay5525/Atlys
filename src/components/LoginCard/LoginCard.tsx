import { Alert, Box, Flex, Heading, Text } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../appState/context';
import { routes } from '../../constants';
import { Button } from '../Button/Button';
import { Card, CardBody, CardFooter, CardHeader } from '../Card/Card';
import { TextInput } from '../Input/Input';

export const LoginCard = ({
  onRegisterClick,
  onSuccess,
}: {
  onRegisterClick: () => void;
  onSuccess?: () => void;
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setIsLoggedIn, setUserName } = useAppContext();
  const navigate = useNavigate();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (!password || !email) return alert('Please fill all the fields');

    setIsLoggedIn(true);
    setUserName(email);
    navigate(routes.home);
    onSuccess?.();
  };

  return (
    <Flex
      flexDir='column'
      margin='auto'
      justifyContent='center'
      alignItems='center'
      width={{ lg: '460px' }}
    >
      <Card>
        <CardHeader>
          <Flex gap='8px' flexDir='column' alignItems='center'>
            <Heading fontSize='14px' color='#6B6C70' fontWeight='500'>
              WELCOME BACK
            </Heading>
            <Heading fontSize='18px' fontWeight='600' color='white'>
              Log into your account
            </Heading>
          </Flex>
        </CardHeader>
        <CardBody>
          <Flex flexDirection='column' gap='16px'>
            <TextInput
              name='email'
              placeholder='Enter your email or username'
              label='Email or Username'
              value={email}
              onChange={handleEmailChange}
              required
            />
            <TextInput
              name='password'
              placeholder='Enter your password'
              label='Password'
              type='password'
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </Flex>
        </CardBody>
        <CardFooter>
          <Box marginTop='6px'>
            <Box color='white'>
              <Button isFullWidth onClick={handleLogin}>
                Login Now
              </Button>
            </Box>
            <Flex fontSize='14px' gap='4px' marginTop='12px'>
              <Text color='#7F8084'>Not registered yet?</Text>
              <Button variant='secondary' onClick={onRegisterClick}>
                Register →
              </Button>
            </Flex>
          </Box>
        </CardFooter>
      </Card>
    </Flex>
  );
};
