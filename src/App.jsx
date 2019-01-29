import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Categories from './components/Categories';
import Todos from './components/Todos';

import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

const Layout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Page = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  width: 400px;
  margin-right: 20px;
`;

const Content = styled.div`
  flex: 1;
`;

const App = () => (
  <Layout>
    <Header />

    <Page>
      <Sidebar>
        <Categories />
      </Sidebar>

      <Content>
        <Todos />
      </Content>
    </Page>
  </Layout>
);

export default App;
