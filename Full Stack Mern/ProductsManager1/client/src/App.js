import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./views/Main";
import ItemDetail from './components/ItemDetail';
import EditProducts from './components/EditProducts';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" default />
          <Route element={<ItemDetail/>} path="/api/product/:id" />
          <Route element={<EditProducts/>} path="/product/edit/:id" />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
