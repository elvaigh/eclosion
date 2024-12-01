import { Container } from '../ui/Container';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="/images/eclosion4.jpeg"
          alt="Boucles d'oreilles artisanales ECLOSION"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>

      </div>
      
      <Container className="relative h-screen flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            L'Art de la<br />Joaillerie Artisanale
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Découvrez nos créations uniques inspirées par la nature et l'anatomie humaine.
            Chaque pièce raconte une histoire, votre histoire.
          </p>
          <div className="flex gap-4">
            <a
              href="/shop"
              className="group inline-flex items-center bg-white text-gray-900 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Découvrir la Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/custom"
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors"
            >
              Sur Mesure
            </a>
            <a
              href="/gallery"
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-gray-900 transition-colors"
            >
              Galerie
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}