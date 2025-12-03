import React, { ReactElement } from 'react';
import Header from './components/LandingPage/Header';
import Content from './components/LandingPage/Content';
import Footer from './components/LandingPage/Footer';

function App(): ReactElement {
  return (
    <div className="font-sans antialiased text-gray-800">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App
