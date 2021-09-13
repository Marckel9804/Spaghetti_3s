import React from 'react';
import Link from 'next/link';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const AppLayout = ({ children }) => {
  return (
    <Layout>
      <Header>
        <Link href="/">
          <a>홈</a>
        </Link>
      </Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default AppLayout;
