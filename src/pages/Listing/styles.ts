import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 10px;
  padding: 15px;

  input {
    flex: 1;
    max-width: 500px;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;

    background-color: #a2d5f2;
    border: 2px solid #fafafa;
    border-radius: 0.25rem;
    padding: 2px;
    margin: 3px;
    height: calc(1.5em + 0.75rem + 2px);

    &::placeholder {
      color: #000000;
    }
  }

  button {
    padding: 2px;
    margin: 3px;
    margin-left: 15px;
    justify-content: center;
    align-items: center;

    background: #07689f;
    border: 1px solid #fafafa;
    border-radius: 0.25rem;
    color: #fafafa;
    font-weight: 500;

    width: 150px;
    height: calc(1.5em + 0.75rem + 2px);

    &:hover {
    background: ${shade(0.2, '#07689f')}
    }
  }

`;

export const Table  = styled.table`
  margin: 0 auto;
  margin-top: 20px;
  border-collapse: collapse;
  width: 50%;

  td, th {
    border: 1px solid #07689f;
    text-align: center;
    padding: 8px;
  }


  button {
    width: 30px;
    height: 30px;
    border: 1px solid #fff;
    margin: 0 10px;
    background-color: #fff;
  }

  .button-edit {
    transition: color 0.3s;

    &:hover {
      color: #ff9800;
    }
  }

  .button-delete {
    transition: color 0.3s;

    &:hover {
      color: #f44336;
    }
  }

`;

export const Image = styled.div`
  margin: 0;

  img {
  margin-left: auto;
  margin-right: auto;
  display: block;
  }
`;

