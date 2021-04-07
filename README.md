# js-project-hero

## :o: Comment ça marche 
Afin de faire fonctionner se projet il sufit d'installer une extension nommer " live server " sur VScode et en outre de lier le **main.js** via une balise script sur le **index.html** et de lancer le live server en étant sur **index.html** . 



## :o: Explication du projet

Nous voici dans le projet JS, il est joué par groupe de 3 ou 4. De notre coté nous sommes composé de 3 (Mathéo.L, Nathy.M et Enzo.P).
Nous avons pour mission de créer une page Web qui affiche plus de 700 super-héros et toutes leurs données, caractéristiques...
Nous devons faire en sorte que l'utilisateur puisse choisir les héros qu'il souhaite découvrir ou redécouvrir par l'intermédiaire d'une barre de recherche ou par un tri numérqiue et alphabétique.
Laissons le suspense s'étendre à son maximum !
On se donne rendez-vous le jour de l'oral pour voir si le contrat est rempli ou non ;).

## :o: répartition du travail au sein du groupe

La répartition du travail a été plutôt simple à metre en place dans notre groupe chacun a décidé sûr qu'el axe travailler dès le premier jour. Le choix a été fait selon les préférences de chacun, Mathéo à décider de travailler sur le display, Enzo sur le sort, Nathy sur le search. Afin de travailler dans de bonnes conditions nous avons créé un trelo pour suivre les taches à faire et un environnement gitea.

*:small_red_triangle:Explication de notre environnement GITEA :*

Notre Répertoire est séparé en 5 branches bien distinct. Il y-a trois branches nommer : **mleger**, **Enzo**, **Nathy** elles sont des espaces de travail individuel à chaque membre du groupe. Elle permet au développeur de travailler sur un axe du code (search, sort, display...) sans créer de conflit avec les autres. Ensuite nous avons décidé de créer une branche **dev** afin de déposer chaque bout de code des membres, elle permet de faire une mise en commun et en parallèle l'assemblage du programme final. Pour finir la branche **master** permet de récupérer le programme final situer dans la branche **dev** après un accord avec les développeur. Cependant seul le propriétaire du répertoire peut "push" sur la **master** afin d' éviter et de bloquer des "push" fait par inadvertance par les autres membres. Cela permet de sécuriser le programme qui s'y trouve et de le garder fonctionnel.

## :o: Organisation du code 

Le projet contient 3 dossiers a la racine : js, static, templates et un readme. Le dossier templates comporte le **index.html**, le dossier static comporte le **style.css** et un dossier img contenant une image et pour finir le dossier js comporte le **main.js** . Cette organisation permet de se retrouver plus rapidement dans le projet et de retrouver n'importe qu'el fichier sans accros. En outre chaque axe que se soit display, sort et search sont défini par trois function au sein du **main.js** et d'autres fonction tel la pagination qui est appart du display et la fonction loadData qui permet de récupérer un tableau du json.



## :o: Outils pour le projet :
- **Visual Studio Code** avec l'extension ***Go Live***
- **Gitea** avec le [repository](https://git.ytrack.learn.ynov.com/MLEGER/js-project-hero)
- **Trello** pour l'organisation du projet et la répartition des tâches. (retrouver [ici](https://trello.com/b/u1n4r3pf/superheros))
- **Google Docs** pour prendre des notes diverses ([ici](https://docs.google.com/document/d/1-eSvuJrMGruAunlntBXCe9iG6dH2hWj5vaIouUKGFF0/edit))