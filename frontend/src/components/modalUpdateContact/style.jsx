import styled from 'styled-components';

export const ModalStyles = styled.form`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
.inputInf{
    display: flex;
    flex-direction: column;
    gap:10px;
    input{
        width: 100%;
        border: 2px solid var(--color-grey-7);
        padding: 0.5rem 0.7rem;
        border-radius: 4px;
        color: var(--color-grey-3);
        font-family: "Inter", sans-serif;
    }
}
  .modal-content {
    background-color: var(--color-white-fixed);
    padding: 1rem;
    border-radius: 4px;
    width: 400px;
  }

  button {
    margin-top: 10px;
        margin-left: 10px;
        background-color: var(--color-brand-1);
        color: var(--color-white-fixed);
        border: none;
        border-radius: 4px;
        padding: 0.5rem;
      }
`;
