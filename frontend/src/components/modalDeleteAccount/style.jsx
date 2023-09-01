import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContent = styled.div`
align-items: center;
margin:0 auto;
display: flex;
flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 100%;
  color:red;

  .button1 {
        margin-left: 10px;
        background-color: var(--color-brand-1);
        color: var(--color-white-fixed);
        border: none;
        border-radius: 4px;
        padding: 0.5rem;
        height:30px;
      }
      .button2 {
        margin-left: 10px;
        background-color: var( --color-feedback-alert-1);
        color: var(--color-white-fixed);
        border: none;
        border-radius: 4px;
        padding: 0.5rem;
        height:30px;
      }
`;