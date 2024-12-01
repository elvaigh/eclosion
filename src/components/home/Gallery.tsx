import React, { useState } from 'react';
import { Container } from '../ui/Container';

const galleryImages = [
  {
    src: '/images/eclosion1.jpeg',
    alt: 'Boucles d\'oreilles florales sur fond blanc',
    title: 'Collection Florale',
    description: 'Des créations délicates inspirées par la nature'
  },
  {
    src: '/images/eclosion2.jpeg',
    alt: 'Boucles d\'oreilles poisson dorées',
    title: 'Collection Marine',
    description: 'L\'élégance aquatique en or'
  },
  {
    src: '/images/eclosion3.jpeg',
    alt: 'Boucles d\'oreilles avec décoration festive',
    title: 'Collection Festive',
    description: 'Des pièces uniques pour illuminer vos soirées'
  },
  {
    src: '/images/eclosion4.jpeg',
    alt: 'Boucles d\'oreilles en présentation artistique',
    title: 'Collection Signature',
    description: 'L\'art de la joaillerie artisanale'
  }
];
export function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image: any) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <h2 className="text-4xl font-serif mb-8 text-center">Notre Galerie</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <h3 className="text-2xl font-serif mb-2">{image.title}</h3>
                    <p className="text-lg mb-4">{image.description}</p>
                    <button 
                      className="bg-white text-gray-900 px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                      onClick={() => openModal(image)}
                    >
                      Découvrir
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="bg-white p-4 rounded-lg max-w-3xl max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto" />
            <h3 className="text-2xl font-serif mt-4 mb-2">{selectedImage.title}</h3>
            <p className="text-lg mb-4">{selectedImage.description}</p>
            <button 
              className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
              onClick={closeModal}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </section>
  );
}