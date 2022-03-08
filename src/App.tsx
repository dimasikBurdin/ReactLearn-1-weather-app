import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Button } from 'antd';
import 'antd/dist/antd.min.css'
import { WeatherTemplate } from './components/weatherTemplate';
import { Space } from 'antd';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    },
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Space 
        direction='vertical'
        style={{ padding: 20, width: '100%', textAlign:'center' }}>
        <WeatherTemplate></WeatherTemplate>
      </Space>      
    </QueryClientProvider>
  );
}

export default App;
