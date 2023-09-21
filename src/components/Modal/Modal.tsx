import { Flex } from '@chakra-ui/react';
import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

export const Modal = ({
  children,
  isOpen,
  onClose,
}: {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === 'Escape' ? onClose() : null;

    document.body.addEventListener('keydown', closeOnEscapeKey);

    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [onClose]);

  useEffect(() => {
    const root = document.getElementById('root');

    if (root && isOpen) {
      root.style.filter = 'blur(3px)';
    }

    return () => {
      if (root) {
        root.style.filter = '';
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <>
      <Flex
        position='fixed'
        height='100%'
        width='100%'
        zIndex='9'
        filter='blur'
      />
      <Flex
        position='fixed'
        height='100%'
        width='100%'
        zIndex='10'
        justifyContent='center'
        alignItems='center'
      >
        <Flex position='relative'>
          <Flex
            position='absolute'
            color='white'
            top='10px'
            right='10px'
            backgroundColor='#131319'
            padding='8px'
            borderRadius='full'
            width='32px'
            height='32px'
            justifyContent='center'
            alignItems='center'
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                onClose();
              }}
            >
              X
            </button>
          </Flex>
          <Flex>{children}</Flex>
        </Flex>
      </Flex>
    </>,
    document.body
  );
};
