import { Container } from '../ui/Container';

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

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <h2 className="text-3xl font-serif mb-8 text-center">Créations Signatures</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-md font-medium transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    Découvrir
                  </button>
                </div>
              </div>
              <h3 className="text-xl font-serif">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.price}€</p>
              <p className="text-sm text-gray-500">{product.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}