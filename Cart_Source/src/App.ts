// Importez les bons fichiers et définition
// une fois que vous avez récupérez tous les products mappez ce dernier
// pour extraire uniquement les produits dont l'option delivery est "special"


// Les types et les classes sont importées
import { Product } from './Product';
import { Details, Delivery, MockDetails, MockDelivery } from './data/MockProducts';

// création d'un tableau de produits en mappant les détails et les options de livraison
const products: Array<Product<Details, Delivery>> = MockDetails.map((detail) => {
  const option = MockDelivery.find((delivery) => delivery.id === detail.id);
  return new Product(detail, option ? option.delivery : Delivery.DoorToDoor);
});

// Ici extraction uniquement des produits dont l'option delivery = "special"
const specialProducts: Array<Product<Details, Delivery>> = products.filter((product) => {
  return product.option === Delivery.Special;
});

// Affiche les produits spéciaux
console.log(specialProducts);

