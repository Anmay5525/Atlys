import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Button } from '../Button/Button';
import { Card, CardBody, CardFooter, CardHeader } from '../Card/Card';
import { TextInput } from '../Input/Input';

export const LoginCard = ({
  onRegisterClick,
}: {
  onRegisterClick: () => void;
}) => {
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
            />
            <TextInput
              name='password'
              placeholder='Enter your password'
              label='Password'
              type='password'
            />
          </Flex>
        </CardBody>
        <CardFooter>
          <Box marginTop='6px'>
            <Button isFullWidth>Login Now</Button>
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
