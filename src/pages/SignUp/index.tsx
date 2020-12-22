import React, { useRef, useCallback } from 'react';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import getValidationErrors from '../../utils/getValidationErros';

import logoImg from '../../assets/logo.png';

import api  from '../../services/api';

import Input from '../../components/Input';
import { Container, Content, AnimationContainer, Box1, Box2 } from './styles';
import Button from '../../components/Button';

interface SingUpFormData {
  name: string;
  email: string;
  password: string;
}

const SingUp: React.FC = () => {


  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToasts();

  const handleSubmit = useCallback(async (data: SingUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
        .required('E-mail obrigatório')
        .email('Digite um e-mail válido'),
        password: Yup.string()
        .min(6, 'No mínimo 6 dígitos')
      });

      await schema.validate(data, {
        abortEarly: false
      });

      await api.post('/users', data);

      addToast(
        'Cadastro realizado! Agora pode fazer login', {
        appearance: 'success', autoDismiss: true
      })

      history.push('/');


    } catch (error) {
      if(error instanceof Yup.ValidationError) {

        const errors = getValidationErrors(error);
        formRef.current?.setErrors(errors);

        addToast(
          'Erro no cadastro',{
          appearance: 'error', autoDismiss: true})
        return;
      }
    }
  }, [history, addToast]);

  return (
    <Container>
      <AnimationContainer>
        <img src={logoImg} alt="Manager Users" style={{ backgroundSize: 'cover', width: '200px', height: '200px', paddingTop: '50px'}}/>
        <Content>
          <Box1>
          <h1>Fazer Cadastro</h1>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input name="name" icon={FiUser} placeholder="Seu nome"/>
              <Input name="email" icon={FiMail} placeholder="Seu e-mail"/>
              <Input name="password" icon={FiLock} placeholder="Sua senha"/>

              <Button type="submit">Cadastrar</Button>
            </Form>
          </Box1>

          <Box2>
            <h1>Olá, Amigo!</h1>
            <p>Entre com suas credenciais e comece sua jornada conosco</p>
            <Link to="/">
              Voltar para login
            </Link>
          </Box2>
        </Content>
      </AnimationContainer>
    </Container>
  )
}

export default SingUp;
