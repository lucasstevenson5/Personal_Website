import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main class="flex-grow">
        Content Here
      </main>
      <Footer />
    </div>
  );
}

export default App;
