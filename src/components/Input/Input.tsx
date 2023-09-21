import { Flex, Input, Text } from '@chakra-ui/react';
import { HTMLInputTypeAttribute, ChangeEventHandler, useState } from 'react';
import EyeIcon from '../../assets/eye.svg';

export const TextInput = ({
  label,
  name,
  placeholder,
  autoComplete,
  value,
  onChange,
  type = 'text',
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
  const [fieldType, setFieldType] = useState(type);

  const toggleFieldType = () => {
    setFieldType((prevType) => {
      return prevType === 'password' ? 'text' : 'password';
    });
  };

  const isTypePassword = type === 'password';

  return (
    <Flex flexDir='column' gap='8px' width='100%'>
      <label htmlFor={name}>
        <Text color='#C5C7CA' fontSize='14px'>
          {label}
        </Text>
      </label>
      <Flex position='relative'>
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
          type={fieldType}
          required={required}
        />
        {isTypePassword ? (
          <Flex position='absolute' right='10px' alignItems='center' top='14px'>
            <img role='button' src={EyeIcon} alt='' onClick={toggleFieldType} />
          </Flex>
        ) : null}
      </Flex>
    </Flex>
  );
};
