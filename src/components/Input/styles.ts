import styled, { css } from 'styled-components';


interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #393e46;
  border-radius: 10px;
  border: 2px solid #393e46;
  padding: 16px;
  color: #eeeeee;

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
    color: #00adb5
;
    border-color: #00adb5;
  `}
  ${props => props.isFilled && css`
    color: #00adb5;
  `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #eeeeee;
    &::placeholder {
      color: #eeeeee;
    }
  }
  svg {
    margin-right: 16px;
  }
  `;
