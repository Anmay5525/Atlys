import { Flex, Box } from '@chakra-ui/react';

export const ThreeDots = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Flex
      gap='2px'
      display='inline-flex'
      height='16px'
      role='button'
      _focus={{ boxShadow: 'rgba(19, 100, 241, 0.5) 0px 0px 0px 4px' }}
      alignItems='center'
      onClick={onClick}
    >
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
