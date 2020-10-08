import styled from 'styled-components';

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

  svg {
    width: 100px;
    height: 100px;
  }

`;
