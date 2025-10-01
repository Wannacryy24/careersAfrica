import { Route, Routes } from 'react-router-dom';
import Header from './layouts/header/Header';
import HomePage from './pages/homepage/Homepage'
import About from './pages/about/About'
import Contact from './pages/contact/ContactPage'
import Services from './pages/services/Services'
import NotFound from './pages/notFound/NotFound'  
import Footer from './layouts/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;