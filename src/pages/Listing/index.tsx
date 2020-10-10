import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import LoaderComponent from '../../components/Loader';

import { ToastContainer, toast, ToastContent } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notData  from '../../assets/nodata-found.png';

import { Table, Container, Image } from './styles';

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
  const [name, setName] = useState('');

  const [loading, setLoading] = useState(false);

  const notify = (text: ToastContent) => toast(text);

  function handleSearch() {
    if(name.length === 0) {
      notify("Campo obrigatório");
    } else {
      setLoading(true);
      api.get<Data[]>(`cadastros?q=${name}`).then(response => {
        const newData = response.data;
        if (newData.length === 0) {
          notify("Registro não encontrado");
          setLoading(false);
          setData(data);
          return data;
        } else {
          setData(newData);
          setLoading(false);
          console.log(newData)
        }
      }).catch(() => {
        notify("Registro não encontrado");
      });
    }
  };

  useEffect(() => {
    setLoading(true)
    api.get<Data[]>('cadastros').then(response => {
      const newData = response.data;
      setData(newData);
      setLoading(false);
    });
  }, []);

  function deleteData(id: string) {
    api.delete(`cadastros/${id}`)
    .then(() => {
      let newData = [...data]
      newData = newData.filter((item) => item.id !== id);
      notify("Cadastro deletado");
      setData(newData);
    });
  };

  return (
    <>
      <Header/>
      <ToastContainer/>
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
            <button onClick={handleSearch}>Pesquisar</button>
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
                  <td>{user.cpf}</td>
                  <td>{user.email}</td>
                  <td>{user.adress.city}</td>
                  <td>
                    <Link key={user.id} to={`usuario/${user.id}`}>
                      <button className="button-edit" onClick={() => console.log(user.id)}>
                        <BiEditAlt size={20} />
                      </button>
                    </Link>
                    <button className="button-delete" onClick={() => deleteData(user.id)}>
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
