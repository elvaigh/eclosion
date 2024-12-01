import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { FeaturedProducts } from './components/home/FeaturedProducts';
import { Gallery } from './components/home/Gallery';
import { Shop } from './pages/Shop';
import { Custom } from './pages/Custom';

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Gallery />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/custom" element={<Custom />} />
            <Route path="/gallery" element={<Gallery />} />
         
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;