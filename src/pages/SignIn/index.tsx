import React, { useRef, useCallback } from 'react';
import { FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';


import getValidationErrors from '../../utils/getValidationErros';
import { useAuth } from '../../hooks/AuthContext';

import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, AnimationContainer, Box1, Box2 } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const history = useHistory();
  const { addToast } = useToasts();

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
        .required('E-mail obrigatório')
        .email('Digite um e-mail válido'),
        password: Yup.string()
        .required('Senha obrigatória')

      });

      await schema.validate(data, {
        abortEarly: false
      });

      await signIn({
        email: data.email,
        password: data.password
      });

      history.push('/dashboard');
    } catch (error) {
      if(error instanceof Yup.ValidationError) {

        const errors = getValidationErrors(error);
        formRef.current?.setErrors(errors);
        console.log(        formRef.current?.setErrors(errors))
        return;
      }
      addToast(
        'Ocorreu um erro ao fazer login, cheque as credenciais.',
       { appearance: 'error', autoDismiss: true})
    }
  }, [signIn, addToast, history]);

  return (
    <Container>
      <AnimationContainer>
      <img src={logoImg} alt="Managers Users"/>
        <Content>
          <Box1>
          <h1>Fazer Login</h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" icon={FiMail}/>
            <Input name="password" icon={FiLock}/>

            <Button type="submit">Entrar</Button>

          </Form>
            <a href="forgot">Esqueci minha senha</a>
          </Box1>

          <Box2>
            <h1>Olá, Amigo!</h1>
            <p>Entre com suas credenciais e comece sua jornada conosco</p>
            <Link to="/signup">
              Criar conta
            </Link>
          </Box2>

        </Content>
      </AnimationContainer>
    </Container>

  )
}
export default SignIn;
