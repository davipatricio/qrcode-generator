import styled from 'styled-components';


interface FormProps {
  isInvalid: boolean;
}

export const Form = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  max-width: 450px;
  width: 100%;

  > input,
  > select {
    color: ${({ theme }) => theme.text.primary};
    background: transparent;
    border: 2px solid #ccc;
    border-radius: 5px;
    padding: 12px;
  }

  > input {
    ${({ isInvalid }) =>
      isInvalid &&
      `
        outline: none;
        border: 2px solid red;
      `}
  }

  > select option {
    color: ${({ theme }) => theme.text.primary};
    background: ${({ theme }) => theme.colors.background};
  }

  > button {
    cursor: pointer;
    color: #fff;
    background: slateblue;
    font-size: 1.25rem;
    padding: 12px;
    text-align: center;
    border: none;
    border-radius: 5px;

    &:hover {
      background: darkslateblue;
    }

    &[disabled] {
      cursor: not-allowed;
      color: #fff;
      background: dimgray;
    }
  }
`;
