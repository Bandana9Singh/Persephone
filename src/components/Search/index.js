import React, { useState } from 'react';

import { SearchWrapper, Form, SearchBar, Button } from './Search.styled';
import SearchResults from '../SearchResults';

const Search = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState({});

  const doSearch = async (startIndex, maxResults) => {
    try {
      const response = await fetch(
        'http://localhost:8080/search/volumes?q=' +
          encodeURIComponent(query) +
          '&startIndex=' +
          startIndex +
          '&maxResults=' +
          maxResults,
        {
          method: 'GET',
          headers: {
            'Access-Control-Request-Headers': 'Content-Type, Authorization',
            mode: 'no-cors'
          }
        }
      );
      if (!response.ok) {
        throw 'Fetch from search failed with response code: ' + response.code;
      }
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      setResult(jsonResponse);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <React.Fragment>
      <SearchWrapper>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            doSearch(0, 10);
          }}
        >
          <SearchBar
            placeholder='Search'
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <Button type='submit'>Search</Button>
        </Form>
      </SearchWrapper>
      <SearchResults results={result} doSearch={doSearch} />
    </React.Fragment>
  );
};

export default Search;
