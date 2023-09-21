import { Flex, Text } from '@chakra-ui/react';
import { Card, CardBody, CardFooter, CardHeader } from '../Card/Card';
import { Feed } from '../../appState/context';
import ChatIcon from '../../assets/chat_bubble.svg';

export const UserFeed = ({ feed }: { feed: Feed[] }) => {
  return (
    <div>
      {feed.map((feedItem, idx) => {
        const { description, userName, comments, postedAt, image } = feedItem;
        return (
          <Card key={`${userName}-${idx}`}>
            <CardHeader>
              <Flex gap='16px'>
                <Flex>
                  <img src={image} alt={userName} />
                </Flex>
                <Flex flexDir='column' fontWeight='500'>
                  <Text color='#C5C7CA'>{userName}</Text>
                  <Text color='#7F8084' fontSize='14px'>
                    {Date.now() - postedAt} seconds ago
                  </Text>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>{description}</Text>
            </CardBody>
            <CardFooter>
              <Text
                color='#7F8084'
                fontWeight='500'
                fontSize='14px'
                display='inline-flex'
                gap='8px'
              >
                <img src={ChatIcon} alt='' /> {comments.length} comments
              </Text>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};
