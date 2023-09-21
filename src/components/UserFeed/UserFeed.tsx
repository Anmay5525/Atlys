import { Button, Flex, Text } from '@chakra-ui/react';
import { Card, CardBody, CardFooter, CardHeader } from '../Card/Card';
import { Feed } from '../../appState/context';
import ChatIcon from '../../assets/chat_bubble.svg';
import { ThreeDots } from '../ThreeDots';
import { convertToReadableTimeInterval } from '../../utils';

export const UserFeed = ({ feed }: { feed: Feed[] }) => {
  return (
    <Flex flexDirection='column' gap='16px' role='feed'>
      {feed.map((feedItem, idx) => {
        const { description, userName, comments, postedAt, image, emoji } =
          feedItem;
        return (
          <Card key={`${userName}-${idx}`}>
            <CardHeader>
              <Flex justifyContent='space-between' alignItems='center'>
                <Flex gap='16px'>
                  <Flex>
                    <img src={image} alt={userName} />
                  </Flex>
                  <Flex flexDir='column' fontWeight='500'>
                    <Text color='#C5C7CA'>{userName}</Text>
                    <Text color='#7F8084' fontSize='14px'>
                      {convertToReadableTimeInterval(
                        Math.floor((Date.now() - postedAt) / 1000)
                      )}{' '}
                      ago
                    </Text>
                  </Flex>
                </Flex>
                <Button>
                  <ThreeDots />
                </Button>
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
                  {emoji}
                </Flex>
                <Text width='90%'>{description}</Text>
              </Flex>
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
    </Flex>
  );
};
