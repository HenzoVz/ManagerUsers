import styled from 'styled-components';


export const Page = styled.div`

  flex: 1;

  h1 {
    font-size: 45px;
    text-align: center;

    color: #fff;
  }

  form {

    display: flex;
    flex: 1;
    flex-direction: column;

    max-width: 690px;
    margin: 30px auto 0;
    padding: 30px;
    background: #fff;
    border: 2px solid #ccc;
    border-radius: 5px;

    input {
    font-size: 14px;
    height: 40px;
    padding-left: 5px;
    border: 1px solid #DDD;
    border-radius: 5px;
    }

    button {
      padding: 10px 20px;
      margin-bottom: 10px;
      border-radius: 5px;
      background: #000;
      color: #FFF;
      font-size: 18px;
      font-weight: bold;

      &:hover {
        background: orangered;
      }
    }
  }
`;
