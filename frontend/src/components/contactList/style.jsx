import styled from 'styled-components';

export const ContactListStyles = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 4px;
  background-color: var(--color-white-fixed);
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--color-grey-8);
    padding: 0.8rem;
    border-radius: 4px;
    color: var(--color-grey-3);
    
    

    .contact-info {
      display: flex;
      flex-direction: column;
    }

    .contact-actions {
      button {
        margin-left: 10px;
        background-color: var(--color-brand-1);
        color: var(--color-white-fixed);
        border: none;
        border-radius: 4px;
        padding: 0.5rem;
      }
    }
  }
`;
