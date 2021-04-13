# TP DIW59 - DEV PHP - 13/04/1984

## EXERCICE 3

### Enoncé Chifoumi

L'utilisateur choisit dans un prompt du navigateur pierre, feuille ou ciseau, l'ordinateur choisit aléatoirement l'une des trois possibilités, et la partie commence !

## Remarques
Le ciseau est écrasé par la pierre.
La feuille est découpée par le ciseau.
La pierre est enveloppée par la feuille.
Si le joueur et l'ordinateur font le même choix on obtient une égalité.

## BONUS 1
On doit pouvoir saisir indifférement le choix en minuscule ou en majuscule

## BONUS 2
Rendre le nombre de choix possible dynamique. Le jeu peut être :
-> "pierre feuille ciseau"
-> ou "pierre feuille ciseau puit"
2 solutions :
- Ou vous demandez à l'utilisateur s'il veut jouer à "pierre feuille ciseau" ou "pierre feuille ciseau puit"
- Ou le choix se fait aléatoirement par l'ordinateur

## AIDES
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/random
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/toLowerCase

## Exercice réalisé avec Webpack et TypeScript

Demo: https://stackblitz.com/edit/fizzbuzz-ifocop?file=index.ts

GitHub: https://github.com/nicolas-zanardo/fizzbuzz-ifocop

``` bash
npm install
```

To use webpack local server on port 4000
``` bash
npm start
```

To build app
``` bash
npm run build
```