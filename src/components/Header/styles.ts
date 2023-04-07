import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;

  background-color: ${({ theme }) => theme.colors.primary};

  height: 70px;
  width: 100%;

  > h1 a {
    color: ${({ theme }) => theme.text.primary};
    text-decoration: none;
  }

  @media (max-width: 768px) {
    padding: 0;
    justify-content: center;

    h1 {
      font-size: 1.6rem;
    }
  }

  > button {
    cursor: pointer;

    color: ${({ theme }) => theme.text.primary};
    background: transparent;
    border: none;

    font-size: 1.5rem;

    &:hover {
      color: ${({ theme }) => theme.text.secondary};
    }
  }
`;
