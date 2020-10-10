import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  width: 50%;
  justify-content: center;
  margin-top: 10px;
  padding: 15px;

  input {
    font-weight: 400;
    line-height: 1.5;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    padding: 2px;
    margin: 3px;
    height: calc(1.5em + 0.75rem + 2px);
  }

  button {
        padding: 2px;
    margin: 3px;
    margin-left: 15px;
    width: 150px;
    justify-content: center;
    align-items: center;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    font-weight: bold;
    color: #495057;
    height: calc(1.5em + 0.75rem + 2px);
  }

`;

export const Table  = styled.table`
  margin: 0 auto;
  margin-top: 20px;
  border-collapse: collapse;
  width: 50%;

  td, th {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
  }


  button {
    width: 30px;
    height: 30px;
    border: 1px solid #fff;
    margin: 0 10px;
  }

  .button-edit {
    background: #fff;

    &:hover {
      background: #ff9800;
    }
  }

  .button-delete {
    background: #fff;

    &:hover {
      background: #f44336;
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

