import { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import M from 'materialize-css';
import Footer from './components/Footer'
import Header from './components/Header'
import Landing from './pages/Landing'
import EmptyPage from './pages/EmptyPage';
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="about" element={<EmptyPage />} />
          <Route path="login" element={<EmptyPage />} />
          <Route path="about" element={<EmptyPage />} />
        </Routes>
      </main>

      <Footer />
    </>

  );
}

export default App;
