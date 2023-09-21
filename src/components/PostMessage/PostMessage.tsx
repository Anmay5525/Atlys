import { Button, Flex, Text, Textarea } from '@chakra-ui/react';
import { Card, CardBody, CardFooter, CardHeader } from '../Card/Card';

export const PostMessage = () => {
  const onPost = () => {
    //
  };
  return (
    <div>
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
            paddingX='28px'
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
            <Button
              variant='solid'
              backgroundColor='#4A96FF'
              paddingX='38px'
              paddingY='12px'
              borderRadius='4px'
              fontWeight='500'
              _hover={{
                backgroundColor: 'blue.500',
              }}
              onClick={onPost}
              _focus={{
                boxShadow: 'rgba(19, 100, 241, 0.5) 0px 0px 0px 4px',
              }}
            >
              Post
            </Button>
          </Flex>
        </CardFooter>
      </Card>
    </div>
  );
};
