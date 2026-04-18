import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { TopHeader } from './components/TopHeader';
import AboutUsPage from './pages/AboutUs';
import { ContactPage } from './pages/Contact';
import { HomePage } from './pages/Home';
import { IndustriesPage } from './pages/Industries';
import { ProductDetailPage } from './pages/ProductDetail';
import { ProductsPage } from './pages/Products';

function App() {
  return (
    <HashRouter>
      <div className="app">
        <ScrollToTop />
        <TopHeader />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
        <FloatingContact />
      </div>
    </HashRouter>
  );
}

export default App;
