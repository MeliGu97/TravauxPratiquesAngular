# Consignes TP Angular
## Groupes d'élèves

Créez un programme qui permet de créer au hasard des groupes de 2 personnes parmi une classe de 16 élèves.

Les élèves sont définies par des nombres uniques.

```js
const students : number[] = [12, 11, 123, 8, 9, 100, 90, 23, 22, 99, 198, 202, 11, 19, 78, 112] ;
```


### On peut préciser le type d'une variable a posteriori

Supposons que l'on traite une variable dont on ne connait pas le type a priori. On peut donner le type au compilateur, a posteriori comme suit :

```typescript
let message: any = "this is a string";

let strMessage: number = (<string>message).length;
// équivalent à 
let strMessage: number = (message as string).length;
```
## Mieux comprendre les types génériques
Voici la structure que l’on vous propose d’utiliser pour cet exercice.

![](images/structure.png)

Vous allez récupérer le code source de ce dernier dans le dossier **TP/Cart_Source**. 
Il ne vous restera plus qu’à faire un ```tsc -w``` en console pour compiler le code en continu :

Nous avons défini une classe **Product** particulière avec les types génériques. Dans le fichier
**MockProducts.ts** vous trouverez les données d’exemple pour cet exercice et les types du projet.

Vous devez dans un premier temps récupérer les détails et les delivery en fonction des id des produits et
mettre l’ensemble des produits dans le tableau suivant :

```typescript
const products: Array<Product<Details, Delivery>> = [];
```

Puis vous devez mapper ce fichier pour en extraire uniquement les produits dont l’option est « special »
pour Delivery.

Affichez le résultat en console.

Indications : Cet exercice est une application un peu avancée du typage générique, prenez le temps de
bien analyser le type de chaque élément. Vous pouvez utiliser les fonction forEach et map de JS.