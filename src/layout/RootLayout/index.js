import React from 'react';
import { RootContainer } from './RootLayout.styled';

const RootLayout = (props) => {
  return <RootContainer>{props.children}</RootContainer>;
};

export default RootLayout;
