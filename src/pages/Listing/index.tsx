import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import LoaderComponent from '../../components/Loader';

import { Table } from './styles';

import { BiEditAlt, BsTrash } from 'react-icons/all';

import api from '../../services/api';

interface Data {
  id: string;
  name: string;
  cpf: string
  email: string;
  adress: {
    cep: string;
    street: string;
    number: string;
    district: string;
    city: string;
  }
}

const Listing: React.FC = () => {

  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    api.get('usuarios').then(response => {
      const newData = response.data;
      setData(newData);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Header/>
      { loading ? (
        <LoaderComponent />
      ) : (
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Email</th>
            <th>Cidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.cpf}</td>
              <td>{user.email}</td>
              <td>{user.adress.city}</td>
              <td>
                <button className="button-edit" onClick={() => console.log("editar")}>
                  <BiEditAlt size={20}/>
                </button>
                <button className="button-delete" onClick={() => console.log("deletar")}>
                  <BsTrash size={20}/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      )}
    </>
  );
};

export default Listing;
