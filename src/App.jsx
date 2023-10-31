// import { useState } from 'react';
import './App.min.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import ContactPage from './Pages/ContactPage';
import NonFound from './Pages/NonFound';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
    
        <Routes>
          <Route path='/' element={<HomePage/> } />
          <Route path='/about' element={<AboutPage/> } />
          <Route path='/services' element={<ServicesPage/> } />
          <Route path='/contact' element={<ContactPage/> } />
          <Route path='*' element={<NonFound/> } />
        </Routes>

      <Footer/>
    </>
  )
}

export default App
