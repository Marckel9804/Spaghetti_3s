import React from 'react';
import { Input } from 'antd';
import AppLayout from '../components/AppLayout';

const { Search } = Input;

const Home = () => {
  const searchBook = (value) => {
    console.log(value);
  };

  return (
    <AppLayout>
      <Search placeholder="책 제목" onSearch={searchBook} enterButton />
    </AppLayout>
  );
};

export default Home;
