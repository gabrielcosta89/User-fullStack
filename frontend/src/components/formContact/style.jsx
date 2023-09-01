import styled from 'styled-components';

export const StylesSignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  margin:0 auto;
  gap: 1rem;
  width:400px;
  padding: 1rem;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 100%;
  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .errorMessage{
        color:red;
        font-size: 14px;
      }  
  button {
    min-width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: var(--color-brand-1);
        border: none;
        border-radius: 4px;
        color: var(--color-white-fixed);
        padding: 0.8rem;
        font-size: 1rem;
        margin-top: 2rem;
        font-family: "Inter", sans-serif;
  }
`;
