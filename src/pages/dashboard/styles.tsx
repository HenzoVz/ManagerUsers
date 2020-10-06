import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 40px 20px;

  .wrapper-section {
    border: 3px solid #4d4d4d;
    padding: 20px 20px;
    width: 100%;
    height: 100%;

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

  }

  .text {
    color: #495057;
  }

  .save {
    margin-top: 10px;
    height: 30px;
    width: 150px;
    justify-content: center;
    align-items: center;
    border: 2px solid #495057;
    border-radius: 5px;
    font-weight: bold;


    &:hover {
      background: #53ff1a;
    }
  }

  svg {
    color: #495057;
  }

  `;
