import { Flex, Box } from '@chakra-ui/react';

export const ThreeDots = () => {
  return (
    <Flex gap='2px' display='inline-flex' height='16px'>
      <Box
        backgroundColor='#C5C7CA'
        height='4px'
        width='4px'
        borderRadius='full'
      />
      <Box
        backgroundColor='#C5C7CA'
        height='4px'
        width='4px'
        borderRadius='full'
      />
      <Box
        backgroundColor='#C5C7CA'
        height='4px'
        width='4px'
        borderRadius='full'
      />
    </Flex>
  );
};
