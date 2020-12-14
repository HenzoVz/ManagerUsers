import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';


export const Container = styled.div`
  display: block;
  height: 100vh;
  background-color: #eeeeee;
  text-align: center;
  margin: auto;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimationContainer = styled.div`

  animation: ${appearFromRight} 1s;
`

export const Content = styled.div`
  background-color: #00adb5;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;

  width: 100%;
  max-width: 770px;
  height: 550px;
  border-radius: 10px;

  h1 {
    color: #eeeeee;
    margin-bottom: 25px;
    transition: margin-right 0.1s ease-in;

    &:hover {
      margin-right: 10px;
    }
    &::first-letter {
      font-size: 46px;
      color: #393e46;
    }
  }

  a {
    display: flex;
    align-items: center;
    margin-top: 20px;
    text-decoration: none;
    color: #eeeeee;
    font-weight: bold;
    transition: margin-right color 0.3s ease-in;

    &:hover {
      color: ${shade(0.2, '#eeeeee')};
      margin-right: 10px;
    }

    svg {
      margin-right: 16px;
    }
  }

`;
