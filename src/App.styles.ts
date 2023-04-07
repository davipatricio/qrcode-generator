import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 30px;

  padding: 2.5rem;
  margin: auto;

  @media (max-width: 500px) {
    align-items: center;
  }
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  img {
    height: 200px;
    width: 200px;
  }

  @media (max-width: 500px) {
    flex-direction: column-reverse;
  }
`;

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  @media (max-width: 500px) {
    h1 {
      text-align: center;
    }
  }
`;
