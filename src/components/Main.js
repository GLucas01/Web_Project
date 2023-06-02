import React from 'react';
import { Routes, Route } from 'react-router-dom';

import App from '../components/App';
import PdfCreator from '../components/PdfCreator';

const Main = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/signup" element={<PdfCreator />} />
      </Routes>
    </div>
  );
}

export default Main;
