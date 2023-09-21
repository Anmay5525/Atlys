import { Flex, Heading, Text } from '@chakra-ui/react';
import { useAppContext } from '../appState/context';
import { PostMessage } from '../components/PostMessage/PostMessage';
import { UserFeed } from '../components/UserFeed/UserFeed';

export const Home = () => {
  const {
    user: { name, feed },
  } = useAppContext();

  return (
    <Flex width={{ lg: '700px', sm: '90%' }} paddingTop='70px' flexDir='column'>
      <Flex flexDirection='column' gap='12px'>
        <Heading color='#C5C7CA' fontSize='28px' fontWeight='500'>
          Hello {name || 'there'}
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
