import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;

  color: ${({ theme }) => theme.text.primary};
  background-color: ${({ theme }) => theme.colors.primary};

  /* if user is on pc */
  @media (min-width: 500px) {
    position: fixed;
    bottom: 0;
    left: 0;
  }

  height: 70px;
  width: 100%;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  svg {
    color: ${({ theme }) => theme.text.primary};
    font-size: 2rem;
  }

  svg:hover {
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;
