import { Box, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

export const CardHeader = ({ children }: { children: ReactNode }) => {
  return <Box marginBottom='16px'>{children}</Box>;
};

export const CardBody = ({
  children,
  backgroundColor,
  borderRadius,
}: {
  children: ReactNode;
  backgroundColor?: string;
  borderRadius?: string;
}) => {
  return (
    <Box
      color='#7F8084'
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
    >
      {children}
    </Box>
  );
};

export const CardFooter = ({ children }: { children: ReactNode }) => {
  return <Box marginTop='14px'>{children}</Box>;
};

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      padding='24px'
      flexDir='column'
      backgroundColor='#27292D'
      borderRadius='8px'
      border='2px solid #35373B'
      width='100%'
      role='presentation'
    >
      {children}
    </Flex>
  );
};
