import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'antd';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import { Header } from './components/Layout/Header';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Content style={{ padding: '24px' }}>
          <Routes>
            <Route path='/' element={<Navigate to="/page1" />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;