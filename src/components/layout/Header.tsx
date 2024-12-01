import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '../ui/Container';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50 text-center py-5">
      <Container>
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
            <Link to="/" className="text-2xl font-serif ml-2 md:ml-0">ECLOSION</Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link 
              to="/shop" 
              className={`${isActive('/shop') ? 'text-indigo-600' : 'text-gray-700'} hover:text-gray-900 transition-colors`}
            >
              Boutique
            </Link>
            <Link 
              to="/custom" 
              className={`${isActive('/custom') ? 'text-indigo-600' : 'text-gray-700'} hover:text-gray-900 transition-colors`}
            >
              Sur Mesure
            </Link>
            <Link 
              to="/gallery" 
              className={`${isActive('/gallery') ? 'text-indigo-600' : 'text-gray-700'} hover:text-gray-900 transition-colors`}
            >
              Galerie
            </Link>
          </div>

          <div className="flex items-center">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <ShoppingBag className="h-6 w-6" />
              
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/shop" 
                className={`block px-3 py-2 ${isActive('/shop') ? 'text-indigo-600' : 'text-gray-700'} hover:text-gray-900`}
                onClick={() => setIsMenuOpen(false)}
              >
                Boutique
              </Link>
              <Link 
                to="/custom" 
                className={`block px-3 py-2 ${isActive('/custom') ? 'text-indigo-600' : 'text-gray-700'} hover:text-gray-900`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sur Mesure
              </Link>
              <Link 
                to="/gallery" 
                className={`block px-3 py-2 ${isActive('/gallery') ? 'text-indigo-600' : 'text-gray-700'} hover:text-gray-900`}
                onClick={() => setIsMenuOpen(false)}
              >
                Galerie
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}