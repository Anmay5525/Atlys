import { Flex, Input, Text } from '@chakra-ui/react';
import { HTMLInputTypeAttribute, ChangeEventHandler } from 'react';

export const TextInput = ({
  label,
  name,
  placeholder,
  autoComplete,
  value,
  onChange,
  type,
  required,
}: {
  label: string;
  name: string;
  placeholder?: string;
  autoComplete?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
}) => {
  return (
    <Flex flexDir='column' gap='8px' width='100%'>
      <label htmlFor={name}>
        <Text color='#C5C7CA' fontSize='14px'>
          {label}
        </Text>
      </label>
      <Input
        name={name}
        id={name}
        placeholder={placeholder}
        autoComplete={autoComplete ?? 'off'}
        _focus={{
          boxShadow: 'rgba(19, 100, 241, 0.5) 0px 0px 0px 2px',
        }}
        border='1.5px solid #35373B'
        outline='none'
        backgroundColor='#191920'
        color='#7F8084'
        _placeholder={{
          color: '#7F8084',
        }}
        padding='12px'
        borderRadius='4px'
        width='100%'
        value={value}
        onChange={onChange}
        type={type ?? 'text'}
        required={required}
      />
    </Flex>
  );
};
