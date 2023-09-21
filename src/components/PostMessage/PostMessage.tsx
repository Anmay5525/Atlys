import { Button, Flex, Text, Textarea } from '@chakra-ui/react';
import { Card, CardBody, CardFooter, CardHeader } from '../Card/Card';

export const PostMessage = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <Flex flexDir='column' fontWeight='500'>
            <Text color='#C5C7CA'>Create Post</Text>
          </Flex>
        </CardHeader>
        <CardBody>
          <Textarea placeholder='How are you feeling today?' />
        </CardBody>
        <CardFooter>
          <Button>Post</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
