import { Flex, Heading, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../appState/context';
import { routes } from '../constants';
import { PostMessage } from '../components/PostMessage/PostMessage';
import { UserFeed } from '../components/UserFeed/UserFeed';

export const Home = () => {
  const {
    user: { name, feed },
    isLoggedIn,
  } = useContext(AppContext);

  // if (!isLoggedIn) return <Navigate to={routes.login} replace />;

  return (
    <Flex width={{ lg: '700px', sm: '90%' }} paddingTop='70px' flexDir='column'>
      <Flex flexDirection='column' gap='12px'>
        <Heading color='#C5C7CA' fontSize='28px'>
          Hello {name}
        </Heading>
        <Text color='#7F8084'>
          How are you doing today? Would you like to share something with the
          community 🤗
        </Text>
      </Flex>
      <Flex marginTop='40px' flexDir='column' gap='16px'>
        <PostMessage />
        <UserFeed feed={feed} />
      </Flex>
    </Flex>
  );
};
