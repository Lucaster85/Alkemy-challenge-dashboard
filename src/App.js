import React from 'react';
import Layout from './components/Layout/Layout';
import AdminApp from './containers/AdminApp';
import classes from'./App.module.css';

function App() {
  return (
    <div>
      <Layout>
        <AdminApp />
      </Layout>
    </div>
    );
}

export default App;
