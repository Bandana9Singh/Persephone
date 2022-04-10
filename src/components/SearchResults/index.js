import React from 'react';
import PropTypes from 'prop-types';
import {
  ResultWrapper,
  ResultItem,
  Thumbnail,
  TextSection,
  Title,
  Category,
  Description,
  Pagination,
  PageNumber
} from './SearchResults.styled';

const SearchResults = ({ results, doSearch, windowSize }) => {
  const pages = results && results.totalItems / results.maxResults;
  const currentPage = results.startIndex / results.maxResults + 1;
  const flankSize = parseInt(windowSize / 2);

  const determinePageWindow = () => {
    const start = currentPage - flankSize > 0 ? currentPage - windowSize : 1;

    const end = start + 4;

    return { start, end };
  };

  const PaginationSection = () => {
    const buttons = [];

    for (let i = 1; i < pages; i++) {
      buttons.push(
        <PageNumber
          active={i === currentPage}
          onClick={() => {
            doSearch((i - 1) * 10, 10);

            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}
        >
          {i}
        </PageNumber>
      );
    }

    const pageWindow = determinePageWindow();

    return buttons.slice(pageWindow.start - 1, pageWindow.end);
  };

  return (
    results && (
      <ResultWrapper>
        {results?.items?.map((item) => (
          <ResultItem>
            <Thumbnail
              src={
                item?.volumeInfo?.imageLinks?.smallThumbnail ||
                item?.volumeInfo?.imageLinks?.thumbnail
              }
              altText={item?.volumeInfo?.title}
            />
            <TextSection>
              <Title>
                {item?.volumeInfo?.title} by{' '}
                {item?.volumeInfo?.authors?.join(', ')}
              </Title>
              <Category>{item?.volumeInfo?.categories?.join(', ')}</Category>
              <Description>{item?.volumeInfo?.description}</Description>
            </TextSection>
          </ResultItem>
        ))}

        <Pagination>{PaginationSection()}</Pagination>
      </ResultWrapper>
    )
  );
};

SearchResults.propTypes = {
  results: PropTypes.object,
  windowSize: PropTypes.number
};

SearchResults.defualtProps = {
  windowSize: 5
};

export default SearchResults;
