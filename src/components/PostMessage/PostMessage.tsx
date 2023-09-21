import { Flex, Text, Textarea } from '@chakra-ui/react';
import { useState } from 'react';
import { useAppContext } from '../../appState/context';
import { Button } from '../Button/Button';
import { Card, CardBody, CardFooter, CardHeader } from '../Card/Card';
import { LoginCard } from '../LoginCard/LoginCard';
import { Modal } from '../Modal/Modal';
import { RegisterCard } from '../RegisterCard/RegisterCard';

export const PostMessage = () => {
  const { isLoggedIn } = useAppContext();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsregisterModalOpen] = useState(false);

  const onRegisterClick = () => {
    setIsLoginModalOpen(false);
    setIsregisterModalOpen(true);
  };

  const onLoginClick = () => {
    setIsregisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const onPost = () => {
    if (!isLoggedIn) {
      setIsLoginModalOpen(true);
    }
  };
  return (
    <div>
      <Modal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      >
        <LoginCard onRegisterClick={onRegisterClick} />
      </Modal>
      <Modal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsregisterModalOpen(false)}
      >
        <RegisterCard onLoginClick={onLoginClick} />
      </Modal>
      <Card>
        <CardHeader>
          <Flex flexDir='column' fontWeight='500' fontSize='18px'>
            <Text color='#C5C7CA'>Create Post</Text>
          </Flex>
        </CardHeader>
        <CardBody backgroundColor='#191920' borderRadius='8px'>
          <Flex
            gap='16px'
            justifyContent='center'
            alignItems='center'
            paddingY='16px'
            paddingX='16px'
          >
            <Flex
              backgroundColor='#27292D'
              height='48px'
              width='48px'
              borderRadius='full'
              justifyContent='center'
              alignItems='center'
            >
              💬
            </Flex>
            <Textarea
              placeholder='How are you feeling today?'
              _focusVisible={{ border: 'none' }}
              resize='none'
              border='none'
              outline='none'
              backgroundColor='#191920'
              color='#7F8084'
              width='90%'
              height='28px'
              _placeholder={{
                color: '#7F8084',
              }}
              _focus={{
                height: '100px',
              }}
              transition='height 0.4s'
            />
          </Flex>
        </CardBody>
        <CardFooter>
          <Flex justifyContent='end'>
            <Button onClick={onPost}>Post</Button>
          </Flex>
        </CardFooter>
      </Card>
    </div>
  );
};
