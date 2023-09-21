import { Button as ChakraButton } from '@chakra-ui/react';

export const Button = ({
  onClick,
  variant = 'primary',
  children,
  isFullWidth,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  variant?: 'primary' | 'secondary';
  children: string;
  isFullWidth?: boolean;
}) => {
  const isSecondary = variant === 'secondary';
  return (
    <ChakraButton
      variant='solid'
      width={isFullWidth ? '100%' : ''}
      backgroundColor={isSecondary ? 'transparent' : '#4A96FF'}
      paddingX={isSecondary ? '4px' : '38px'}
      paddingY={isSecondary ? '' : '12px'}
      borderRadius='4px'
      fontWeight='500'
      _hover={{
        backgroundColor: isSecondary ? '' : 'rgba(74, 150, 255, 0.9)',
      }}
      onClick={onClick}
      _focus={{
        boxShadow: 'rgba(19, 100, 241, 0.5) 0px 0px 0px 4px',
      }}
      color={isSecondary ? '#C5C7CA' : ''}
    >
      {children}
    </ChakraButton>
  );
};
