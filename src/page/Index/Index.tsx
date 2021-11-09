import React, { useState, useEffect } from 'react';
import Container from './container'  // 直接找到了index.tsx
// import DemoList from './DemoList'
import './index.css'
const Index: React.FC<{}> = () => {



  return (
    <div className="wrap">
      <Container />
      {/* <DemoList state="love" /> */}
    </div>
  );
};

export default Index
