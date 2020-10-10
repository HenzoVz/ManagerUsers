import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 680px;


  .wrapper-section {
    padding: 20px;
  }

  .title {
    font-size: 25px;
    font-weight: bold;
    color: #495057;
  }

  .wrapper-input {
    display: flex;
    flex-direction: column;
    padding-top: 5px;
  }

  .input {
    font-weight: 400;
    max-width: 650px;
    line-height: 1.5;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    padding: 2px;
    margin: 3px;
    height: calc(1.5em + 0.75rem + 2px);

  }

  .text {
    color: #495057;
  }

  .save {
    display: flex;
    margin: 0 auto;
    margin-top: 10px;
    width: 150px;
    height: calc(1.5em + 0.75rem + 2px);
    justify-content: center;
    align-items: center;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    font-weight: bold;
    color: #495057;
    font-weight: bold;


    &:hover {
      background: #53ff1a;
    }
  }

  svg {
    color: #495057;
  }

  `;
