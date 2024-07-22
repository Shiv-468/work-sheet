import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import ProjectSheet from './components/ProjectSheet';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/:year" element={<ProjectSheet />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;