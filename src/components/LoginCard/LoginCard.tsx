import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { Card, CardBody, CardFooter, CardHeader } from '../Card/Card';
import { TextInput } from '../Input/Input';

export const LoginCard = () => {
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
            <Heading fontSize='14px' color='#6B6C70'>
              WELCOME BACK
            </Heading>
            <Heading fontSize='18px' fontWeight='600'>
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
          <Flex fontSize='14px' gap='4px'>
            <Text color='#7F8084'>Not registered yet?</Text>
            <Button
              color='#C5C7CA'
              paddingX='4px'
              borderRadius='4px'
              _focus={{
                boxShadow: 'rgba(19, 100, 241, 0.5) 0px 0px 0px 2px',
              }}
            >
              Register →
            </Button>
          </Flex>
        </CardFooter>
      </Card>
    </Flex>
  );
};
