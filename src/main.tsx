import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import './index.css'
import { FronteggProvider } from '@frontegg/react';
import { Route, Routes } from 'react-router-dom';
const authOptions = {
  enableSessionPerTenant: true,
  disableSilentRefresh: false,
  keepSessionAlive: true,
}


const contextOptions = {
  baseUrl: 'https://app-fe8itjcv4qcd.frontegg.com',
  clientId: '7f1c1fd9-8f95-451b-9107-ff1bd10050f6',
  appId: 'c773cf5c-49f5-4638-a9ce-86b42d307672',
  tenantResolver: () => {
    const urlQueryParams = new URLSearchParams(window.location.search);
    const organization = urlQueryParams.get('organization');
    return {
      tenant: organization
    }
  },
};


const root = ReactDOM.createRoot(document.getElementById('root') as any);
root.render(
  <React.StrictMode>
    <FronteggProvider 
    contextOptions={contextOptions} 
    hostedLoginBox={true}
    authOptions={authOptions}
    >
        <Routes>
          <Route path="/" element={ <App />} />
        </Routes>
    </FronteggProvider>
  </React.StrictMode>
);