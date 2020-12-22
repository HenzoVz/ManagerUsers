import styled, { css } from 'styled-components';


interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #a2d5f2;
  border-radius: 10px;
  border: 2px solid #fafafa;
  padding: 16px;
  color: #fafafa;

  max-width: 100%;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props => props.isErrored && css`
    border-color: #c53030;
  `}
  ${props => props.isFocused && css`
    color: #07689f
;
    border-color: #07689f;
  `}
  ${props => props.isFilled && css`
    color: #07689f;
  `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #000000;
    &::placeholder {
      color: #000000;
    }
  }
  svg {
    margin-right: 16px;
  }
  `;
