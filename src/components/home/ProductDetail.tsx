import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  
  // Ici, vous devriez récupérer les détails du produit en fonction de l'ID
  // Par exemple, depuis une API ou un état global
  const product = { id, name: 'Boucle d\'oreille', description: 'Description du produit...' };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;