import { Box, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

export const CardHeader = ({ children }: { children: ReactNode }) => {
  return <Box marginBottom='16px'>{children}</Box>;
};

export const CardBody = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      paddingY='16px'
      paddingX='28px'
      backgroundColor='#191920'
      borderRadius='8px'
      color='#7F8084'
    >
      {children}
    </Box>
  );
};

export const CardFooter = ({ children }: { children: ReactNode }) => {
  return <Box marginTop='16px'>{children}</Box>;
};

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      padding='24px'
      flexDir='column'
      backgroundColor='#27292D'
      borderRadius='8px'
      border='2px solid #35373B'
    >
      {children}
    </Flex>
  );
};
