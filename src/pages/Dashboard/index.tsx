import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiUser, FiMail, RiFileUserLine, FiMap, FiHome, GiModernCity } from 'react-icons/all'
import { useParams } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import getValidationErrors from '../../utils/getValidationErros';
import { useAuth } from '../../hooks/AuthContext';

import  api  from '../../services/api';
import viaCep from '../../services/viaCep';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

interface Params {
  id: string;
}

interface DashboardFormData {
  name: string;
  email: string;
  cpf: string;
  address: {
    cep: string;
    street: string;
    number: string;
    district: string;
    city: string;
  };
}

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { user } = useAuth();
  const { addToast } = useToasts();

  const handleSubmit = useCallback(async (data: DashboardFormData) => {

    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        cpf: Yup.string().required('CPF obrigatório').length(11),
        cep: Yup.string().required('CEP obrigatório').length(9),
        street: Yup.string().required('Rua obrigatória'),
        number: Yup.string().required('Número obrigatório').length(4),
        district: Yup.string().required('Bairro obrigatório'),
        city: Yup.string().required('Cidade obrigatório')
      });


      await schema.validate(data, {
        abortEarly: false
      });

      await api.post('/registries', {
        registry_id: user.id,
        ...data
      }).finally(() => {
        formRef?.current?.setData({});
      });

      addToast(
        'Registro cadastrado com sucesso!', {
        appearance: 'success', autoDismiss: true
      })

    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);
        formRef.current?.setErrors(errors);

        for( let index in errors) {
          addToast(errors[index], { appearance: 'error', autoDismiss: true })
        }
      }

    }
  }, [addToast, user]);

  const handleOnChangeCep = useCallback(() => {
    const value = formRef.current?.getFieldValue("cep");

    const cep = value?.replace(/[^0-9]/g, '');

    if (cep?.length !== 8) {
      return;
    }

    viaCep.get(`${cep}/json`).then(response => {
      const { logradouro, bairro, localidade } = response.data;

      formRef.current?.setFieldValue('cep', cep.substring(0,5) + "-" + value.substring(5));
      formRef.current?.setFieldValue('street', logradouro);
      formRef.current?.setFieldValue('district', bairro);
      formRef.current?.setFieldValue('city', localidade);

    }).finally(() => {
      const numberInput = formRef.current?.getFieldRef('number');
      numberInput.focus();
    })

  }, [] );

  return (
    <>
      <Header/>
      <Container>
        <Form ref={formRef} onSubmit={handleSubmit}>

          <Input name="name" icon={FiUser} placeholder="Digite o nome" autoCapitalize="true"/>
          <Input name="email" icon={FiMail} placeholder="Digite o e-mail"/>
          <Input name="cpf"  icon={RiFileUserLine} placeholder="Digite o cpf" maxLength={11}/>
          <Input name="cep" icon={FiMap} placeholder="Digite o cep" maxLength={8} onChange={handleOnChangeCep}/>
          <Input name="street" icon={FiMap} placeholder="Digite o nome da rua"/>
          <Input name="number" icon={FiHome} placeholder="Digite o número da casa" maxLength={4}/>
          <Input name="district" icon={FiMap} placeholder="Digite o nome do Bairro"/>
          <Input name="city" icon={GiModernCity} placeholder="Digite o nome da cidade"/>

          <Button type="submit">Cadastrar</Button>

        </Form>
      </Container>
    </>
  )
};

export default Dashboard;
