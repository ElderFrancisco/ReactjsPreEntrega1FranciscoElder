import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import List from './components/itemListContainer/index.jsx';

function App() {
  const greeting = [
    'Bienvenido a mi tienda',
    <br />,
    <br />,
    '¿Qué estás buscando?',
  ];
  return (
    <div className='App'>
      <Navbar />
      <List greeting={greeting} />
    </div>
  );
}

export default App;
