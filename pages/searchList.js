import React from 'react';
import { useRouter } from 'next/router';
import { Tabs } from 'antd';
import AppLayout from '../components/AppLayout';

const SearchList = () => {
  const { TabPane } = Tabs;
  const router = useRouter();
  const pid = router.query;
  console.log(pid);
  return (
    <AppLayout>
      <Tabs type="card">
        <TabPane tab="검색" key="1">
          검색 결과입니다.
          <p>{pid.title}</p>
        </TabPane>
        <TabPane tab="추천받기" key="2">
          책 추천 받기
        </TabPane>
      </Tabs>
    </AppLayout>
  );
};

export default SearchList;
