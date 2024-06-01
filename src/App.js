import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import GlobalStyles from './styles/globalStyles';
// import { AuthProvider } from './hooks/useAuth';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
