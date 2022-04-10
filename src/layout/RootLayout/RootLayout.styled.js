import styled from 'styled-components';

const RootContainer = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin: auto;

  @media (min-width: 768px) {
    width: 90%;
  }
`;

export { RootContainer };
