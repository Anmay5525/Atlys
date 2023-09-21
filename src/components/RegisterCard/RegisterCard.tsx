import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../appState/context';
import { emailRegex, routes } from '../../constants';
import { Button } from '../Button/Button';
import { Card, CardBody, CardFooter, CardHeader } from '../Card/Card';
import { TextInput } from '../Input/Input';

export const RegisterCard = ({
  onLoginClick,
  onSuccess,
}: {
  onLoginClick: () => void;
  onSuccess?: () => void;
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const { setIsLoggedIn, setUserName } = useAppContext();
  const navigate = useNavigate();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    if (!password || !email || !username)
      return alert('Please fill all the fields');
    else if (!emailRegex.test(email)) return alert('Please enter valid email!');

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
              SIGN UP
            </Heading>
            <Heading fontSize='18px' fontWeight='600' color='white'>
              Create an account to continue
            </Heading>
          </Flex>
        </CardHeader>
        <CardBody>
          <Flex flexDirection='column' gap='16px'>
            <TextInput
              name='email'
              placeholder='Enter your email'
              label='Email'
              value={email}
              onChange={handleEmailChange}
              required
            />
            <TextInput
              name='username'
              placeholder='Choose a preferred username'
              label='Username'
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <TextInput
              name='password'
              placeholder='Choose a strong password'
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
            <Button isFullWidth onClick={handleRegister}>
              Continue
            </Button>
            <Flex fontSize='14px' gap='4px' marginTop='12px'>
              <Text color='#7F8084'>Already have an account?</Text>
              <Button variant='secondary' onClick={onLoginClick}>
                Login →
              </Button>
            </Flex>
          </Box>
        </CardFooter>
      </Card>
    </Flex>
  );
};
