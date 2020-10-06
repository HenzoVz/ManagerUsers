import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  flex: 1;
  display: flex;
  background: #A83A83;

  header {
    flex-direction: column;
    width: 1120px;
    margin: 0 auto;
    padding: 15px;

    h1 {
    font-size: 40px;
    color: #fff;
    text-align: center;
    }

    nav {
      justify-content: space-between;
      text-align: center;

      a {
        color: #fff;
        text-decoration: none;
        font-size: 18px;
        padding-left: 15px;
        transition: opacity 0.2s;
        display: inline-block;
      }
      a::after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: #ff872c;
        transition: width 0.5s;
      }
      a:hover::after {
        width: 100%;
      }
    }
  }
`;
