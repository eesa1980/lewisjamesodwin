import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default ({ children }) => <Layout>{children}</Layout>;
