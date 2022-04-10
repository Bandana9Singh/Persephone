import styled from 'styled-components';

const SearchWrapper = styled.div`
  width: 60%;
  display: flex;
  margin: auto;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SearchBar = styled.input`
  border: 1px solid;
  width: 85%;
  font-size: 1.5rem;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 10%;
`;
export { SearchWrapper, Form, SearchBar, Button };
