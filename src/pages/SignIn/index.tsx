import React, { useRef, useCallback } from 'react';
import { FiMail, FiLock, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import getValidationErrors from '../../utils/getValidationErros';
import notify from '../../utils/toast';

import logoImg from '../../assets/logo.png';

import { useAuth } from '../../hooks/AuthContext';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, AnimationContainer } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const history = useHistory();

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

        notify(toast.error,'Ocorreu um erro ao fazer login, cheque as credenciais.')
        return;
      }
    }
  }, [signIn, history]);

  return (
    <Container>
      <AnimationContainer>
        <img src={logoImg} alt="Manager Users" style={{ backgroundSize: 'cover', width: '200px', height: '200px', paddingTop: '50px'}}/>
        <Content>
          <h1>Fazer Login</h1>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" icon={FiMail}/>
            <Input name="password" icon={FiLock}/>

            <Button type="submit">Entrar</Button>


          </Form>
            <a href="forgot">Esqueci minha senha</a>
            <Link to="/signup">
              <FiArrowLeft />
              Criar conta
            </Link>
        </Content>
      </AnimationContainer>
    </Container>

  )
}
export default SignIn;
