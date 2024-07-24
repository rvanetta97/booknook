import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
      </ApolloProvider>
    </>
    
  );
}

export default App;
