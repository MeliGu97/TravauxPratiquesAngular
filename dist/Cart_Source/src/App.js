"use strict";
// Importez les bons fichiers et définition
// une fois que vous avez récupérez tous les products mappez ce dernier
// pour extraire uniquement les produits dont l'option delivery est "special"
Object.defineProperty(exports, "__esModule", { value: true });
// Les types et les classes sont importées
const Product_1 = require("./Product");
const MockProducts_1 = require("./data/MockProducts");
// création d'un tableau de produits en mappant les détails et les options de livraison
const products = MockProducts_1.MockDetails.map((detail) => {
    const option = MockProducts_1.MockDelivery.find((delivery) => delivery.id === detail.id);
    return new Product_1.Product(detail, option ? option.delivery : MockProducts_1.Delivery.DoorToDoor);
});
// Ici extraction uniquement des produits dont l'option delivery = "special"
const specialProducts = products.filter((product) => {
    return product.option === MockProducts_1.Delivery.Special;
});
// Affiche les produits spéciaux
console.log(specialProducts);
