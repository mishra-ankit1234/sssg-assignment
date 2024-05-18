import React from 'react';
import { Layout, Menu } from 'antd';
import CSVUpload from './components/CSVUpload';
import DataDisplay from './components/DataDisplay';
import PricingCalculator from './components/PricingCalculator';
import { DataProvider } from './context/DataContext';
import 'antd/dist/antd.css';
import '.styling/styles.css';

const { Header, Content, Footer } = Layout;

const App = () => (
  <DataProvider>
    <Layout className="layout">
      <Header className="header">
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">CSV Upload</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '50px' }}>
        <div className="site-layout-content">
          <div className="upload-section">
            <CSVUpload />
          </div>
          <div className="table-section">
            <DataDisplay />
          </div>
          <div className="calculator-section">
            <PricingCalculator />
          </div>
        </div>
      </Content>
      <Footer className="footer">CSV Upload App ©2024</Footer>
    </Layout>
  </DataProvider>
);

export default App;
