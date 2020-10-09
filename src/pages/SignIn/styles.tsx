import styled from 'styled-components';


export const Page = styled.div`

  background: #A83A83;
  margin: 20px auto;
  padding: 50px;
  width: 680px;

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

    flex: 1;
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    padding: 30px;
    background: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;

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
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      }
    }

    button {
      padding: 10px 20px;
      margin-bottom: 10px;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      background: #000;
      color: #FFF;
      font-size: 18px;
      font-weight: bold;

      &:hover {
        background: #A82A82;
      }
    }

    a {
      text-align: center;
      font-weight: bold;
      color: #000;

      &:hover {
        color: #A82A82;
      }
    }
    hr {
      margin: 0 auto;
      width: 50%;
      height: 2px;
      height: 0.5px;
      border: 1px solid #ccc;
      background: #ccc;
    }
  }
`;
