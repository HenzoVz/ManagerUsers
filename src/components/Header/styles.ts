import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';


const appearTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.header`
  display: flex;
  flex-direction: row ;
  justify-content: space-between;
  align-items: center;
  background-color: #07689f;
  animation: ${appearTop} 2s;

  width: 100%;
  max-width: 100%;

  height: 90px;
  padding: 10px;

  h1 {
    color: #fafafa;
  }

  @media(max-width: 680px) {
    justify-content: space-between;
    }
`;

export const Content = styled.nav`

    display: block;

  > a {
    text-decoration: none;
    font-size: 22px;
    color: #fafafa;
    margin-right: 16px;
    padding: 20px;
    transition: color 0.3s;

    &:hover {
      color: ${shade(0.3, '#a2d5f2')}
    }

    @media(max-width: 680px) {
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 5px;
      font-size: 18px;
    }
  }
`;

