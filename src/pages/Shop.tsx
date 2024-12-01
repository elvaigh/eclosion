import { Container } from '../components/ui/Container';
import React, { useState } from 'react';
const featuredProducts = [
  {
    id: '1',
    name: 'Collection Floral',
    price: 89,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80',
    description: 'Boucles d\'oreilles inspirées par la nature avec des motifs floraux délicats'
  },
  {
    id: '2',
    name: 'Éclat Aquatique',
    price: 95,
    image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&q=80',
    description: 'Design unique capturant la fluidité de l\'eau et la lumière du soleil couchant'
  },
  {
    id: '3',
    name: 'Jardin Suspendu',
    price: 105,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&q=80',
    description: 'Collection botanique mêlant feuilles tropicales et fleurs délicates'
  }
];

export function Shop() {

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image: any) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="pt-24 pb-16">
      <Container>
        <h1 className="text-4xl font-serif mb-8">Notre Collection</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contenu de la boutique à venir */}
          <p className="text-gray-600">Nouvelle collection bientôt disponible...</p>
        </div>
      </Container>

      <section className="py-16 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-serif mb-8 text-center">Notre Galerie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProducts.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image.image}
                  //price={image.price}
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center p-6">
                      <h3 className="text-2xl font-serif mb-2">{image.name}</h3>
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
              <img src={selectedImage.image}  className="w-full h-auto" />
              <h3 className="text-2xl font-serif mt-4 mb-2">{selectedImage.name}</h3>
              <h2 className="text-2xl font-serif mt-4 mb-2">Prix: {selectedImage.price}€</h2>
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

    </div>
  );
}