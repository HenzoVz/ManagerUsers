import styled, { keyframes } from 'styled-components';

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
export const Container = styled.div`
  margin: auto;
  max-width: 690px;
  padding: 60px 20px;
  text-align: center;
  animation: ${appearTop} 2s;
`;
