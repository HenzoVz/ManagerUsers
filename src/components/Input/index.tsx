import React, {InputHTMLAttributes} from 'react';
import {Container} from './styles';

type HTMLInputProps = InputHTMLAttributes<HTMLInputElement>

type InputProps = {
  type: string;
  maxLength?: number | string;
} & Omit<HTMLInputProps, 'maxLength'>

const Input: React.FC<InputProps> = ({type, maxLength, ...rest}) => {

  return (
    <Container
    type={type}
    {...rest}
    />
  )
};

export default Input;
