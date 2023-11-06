# Consignes TP Angular
## 03 Exercice challenge (voir TP)

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
