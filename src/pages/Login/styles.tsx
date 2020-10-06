import styled from 'styled-components';


export const Page = styled.div`

  flex: 1;
  background: #A83A83;
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;

  h1 {
    font-size: 40px;
    text-align: center;

    color: #fff;

    svg {
      margin-right: auto;
      margin-left: auto;
    }
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

    div {

      display: flex;
      flex-direction: row;
      margin-top: 10px;
      align-items: center;

      input {
      font-size: 16px;
      height: 40px;
      width: 100%;
      outline: none;
      padding: 10px;
      padding-left: 5px;
      border: 1px solid #DDD;
      border-radius: 5px;
      }
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
