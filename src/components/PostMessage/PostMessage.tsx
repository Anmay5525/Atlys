import { Flex, Text, Textarea } from '@chakra-ui/react';
import { useState } from 'react';
import { useAppContext } from '../../appState/context';
import { Button } from '../Button/Button';
import { Card, CardBody, CardFooter, CardHeader } from '../Card/Card';
import { LoginCard } from '../LoginCard/LoginCard';
import { Modal } from '../Modal/Modal';
import { RegisterCard } from '../RegisterCard/RegisterCard';
import UserOne from '../../assets/user_1_thumbnail.svg';

export const PostMessage = () => {
  const { isLoggedIn, setUserFeed, user } = useAppContext();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const onRegisterClick = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  const onLoginClick = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const onPost = () => {
    if (!isLoggedIn) {
      return setIsLoginModalOpen(true);
    }

    //post message
    setUserFeed((prevFeed) => [
      ...prevFeed,
      {
        userName: user.name as string,
        postedAt: Date.now(),
        description:
          'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        comments: ['dummy', 'comments', 'hello'],
        editedAt: 0,
        emoji: `👋`,
        image: UserOne,
      },
    ]);
  };

  return (
    <div>
      <Modal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      >
        <LoginCard
          onRegisterClick={onRegisterClick}
          onSuccess={() => setIsLoginModalOpen(false)}
        />
      </Modal>
      <Modal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      >
        <RegisterCard
          onLoginClick={onLoginClick}
          onSuccess={() => setIsRegisterModalOpen(false)}
        />
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
