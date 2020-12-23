import React, { useState, useEffect, useCallback } from 'react';
import { BiEditAlt, BsTrash } from 'react-icons/all';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { useAuth } from '../../hooks/AuthContext';

import Header from '../../components/Header';
import LoaderComponent from '../../components/Loader';

import { Table, Container, Image } from './styles';

import notData  from '../../assets/nodata-found.png';

interface Data {
  id: string;
  name: string;
  cpf: string
  email: string;
  cep: string;
  street: string;
  number: string;
  district: string;
  city: string;
}

const Listing: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const { user } =  useAuth();

  const handleSearchData = useCallback(() => {
    if(name.length === 0) {
      api.get('registries/pagination/', {
        params: { registry_id: user.id }
      }).then(response => {
        const newData = response.data;
        setData(newData);
      });
    } else {
      setLoading(true);
      api.get(`registries/search/${name}`, {
        params: { registry_id: user.id }
      }).then(response => {
          const newData = response.data;
          if (newData.length === 0) {
            setLoading(false);
            setData(data);
            return data;
          } else {
            setData(newData);
            setLoading(false);
            console.log(newData)
          }
        });
    }
  }, [data, name, user.id]);

   const handleRemove = useCallback((id: string) => {
    api.delete(`registries/${id}`)
    .then(() => {
      let newData = [...data]
      newData = newData.filter((item) => item.id !== id);
      setData(newData);
    });
  }, [data]);

  useEffect(() => {
    setLoading(true)
    api.get('registries/pagination/', {
      params: { registry_id: user.id }
    }).then(response => {
      const newData = response.data;
      setData(newData);
      setLoading(false);
    });
  }, [user.id]);

  return (
    <>
      <Header/>
      { loading ? (
        <LoaderComponent />
      ) : (
        <>
        { data.length === 0 ? (
          <Image>
            <img className="not-data" src={notData} alt="Sem dados"/>
          </Image>
        ) : (

        <>
          <Container>
          <input
            className="input"
            type="text"
            autoComplete="off"
            value = {name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Pesquisar pelo nome"
            />
            <button onClick={handleSearchData}>Pesquisar</button>
          </Container>
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
                  <td>{user.email}</td>
                  <td>{user.cpf}</td>
                  <td>{user.city}</td>
                  <td>
                    <Link key={user.id} to={`registries/${user.id}`}>
                      <button className="button-edit">
                        <BiEditAlt size={20} />
                      </button>
                    </Link>
                    <button className="button-delete" onClick={() => handleRemove(user.id)}>
                      <BsTrash size={20} />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
          </Table>
        </>
        )}
      </>
      )}
    </>
  );
};

export default Listing;
