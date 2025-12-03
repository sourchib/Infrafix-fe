import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/LandingPage/Header';
import Content from './components/LandingPage/Content';
import Footer from './components/LandingPage/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import DashboardPage from './components/Dashboard/DashboardPage';
import AssignmentsPage from './components/Dashboard/AssignmentsPage';
import NotFoundImage from './assets/landingpage/404.png'; // Import the 404 image

function App(): ReactElement {
  return (
    <Router>
      <div className="font-sans antialiased text-gray-800">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Content />
              <Footer />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/assignments" element={<AssignmentsPage />} />
            <Route path="*" element={
              <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <img src={NotFoundImage} alt="404 Page Not Found" className="max-w-lg h-auto" />
                <h1 className="text-4xl font-bold text-gray-800 mt-8">404 - Page Not Found</h1>
              </div>
            } />
          </Routes>
        </div>
    </Router>
  );
}

export default App
