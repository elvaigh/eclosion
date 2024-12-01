import { Container } from '../components/ui/Container';

export function Custom() {
  return (
    <div className="pt-24 pb-16">
      <Container>
        <h1 className="text-4xl font-serif mb-8">Créations Sur Mesure</h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            Vous rêvez d'une pièce unique qui vous ressemble ? Nous créons des boucles d'oreilles personnalisées selon vos envies.
          </p>
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-serif mb-4">Comment ça marche ?</h2>
            <ol className="space-y-4">
              <li>1. Partagez votre vision avec nous</li>
              <li>2. Nous élaborons ensemble le design</li>
              <li>3. Création de votre pièce unique</li>
              <li>4. Livraison de votre création</li>
            </ol>
          </div>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors">
            Commencer un Projet
          </button>
        </div>
      </Container>
    </div>
  );
}