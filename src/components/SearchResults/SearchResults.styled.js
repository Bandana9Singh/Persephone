import styled from 'styled-components';

const ResultWrapper = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  margin: auto;
  padding: 2rem 0;
  gap: 1.5rem;
`;

const ResultItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Thumbnail = styled.img`
  width: 10%;
`;

const TextSection = styled.div`
  width: 85%;
`;

const Title = styled.div`
  font-size: 1.5rem;
  padding-bottom: 0.25rem;
`;

const Category = styled.div`
  font-size: 1rem;
  font-style: oblique;
  padding-bottom: 0.15rem;
`;

const Description = styled.div`
  font-size: 0.75rem;
`;

const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const PageNumber = styled.span`
  text-decoration: ${(props) => (props.active ? 'underline' : 'unset')};
`;

const PreviousPage = styled.span``;

const NextPage = styled.span``;

export {
  ResultWrapper,
  ResultItem,
  Thumbnail,
  TextSection,
  Title,
  Category,
  Description,
  Pagination,
  PageNumber,
  PreviousPage,
  NextPage
};
