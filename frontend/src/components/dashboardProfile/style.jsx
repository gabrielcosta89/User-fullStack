import styled from "styled-components";

export const DashboardStyles = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
  font-family: "Inter", sans-serif;

  section {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    border-radius: 4px;
    background-color: var(--color-white-fixed);
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
  }

  h1 {
    text-align: center;
    color: var(--color-brand-2);
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem;
    font-size: 1rem;
  }

  span {
    color: var(--color-grey-1);
  }
`;
