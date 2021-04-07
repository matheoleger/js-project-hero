let body = document.querySelector('body');
let allJson;
let maximumShownHero = 20; // valeur de l'identifiant du dernier héros qui peut être affiché (20 par défaut)
let minimumShownHero = 0;   // valeur de l'identifiant du premier héros qui peut être affiché (0 par défaut)
let selectNbrOfEl = document.querySelector('select');
let choice = selectNbrOfEl.selectedIndex;

// permet de récupérer le tableau de JSON
const loadData = heroes => {
    allJson = [...heroes];  // permet de clone le tableau de JSON pour y acceder où l'on veut
    display();
}
  
// Request the file fetch, it will download it in your browser cache
fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
.then((response) => response.json()) // parse the response from JSON
.then(loadData) // .then will call the function with the JSON value


// Cette function va afficher les éléments du tableau dans notre page HTML (dans un <table>) grâce au DOM.
const display = () => {
    let tableEl = document.querySelector('#table_heroes');

    //permet un parcours de tous les héros et leurs données
    for(let i = 0; i < allJson.length; i++) {

        let heroCarac = [allJson[i].images.xs, allJson[i].name, allJson[i].biography.fullName, allJson[i].powerstats, allJson[i].appearance.race, allJson[i].appearance.gender, allJson[i].appearance.height, allJson[i].appearance.weight, allJson[i].biography.placeOfBirth, allJson[i].biography.alignment];
        let heroEl = document.createElement('tr');

        //permet un parcours de chaque données nécessaire
        for(necessaryData of heroCarac) {

            let tdEl = document.createElement('td');
            let contentTd;

            if(necessaryData == heroCarac[0]) {
                contentTd = document.createElement('img');
                contentTd.setAttribute("src", necessaryData);
                tdEl.appendChild(contentTd);   

            } else if (necessaryData == heroCarac[3]) {
                
                tdEl.className = "powers";

                // permet un parcours de tous les caractéristiques de "powerstats"
                for (powerKey in necessaryData) {

                    contentTd = document.createElement('span');
                    let text = document.createTextNode(`${powerKey} : ${necessaryData[powerKey]}`);                   
                    contentTd.appendChild(text);                    
                    tdEl.append(contentTd);
                }

            } else {
                contentTd = document.createTextNode(necessaryData);                           
                tdEl.appendChild(contentTd);          
            }
            
            heroEl.append(tdEl);
            
        }

        heroEl.setAttribute("id", i);
        tableEl.append(heroEl);
           
    }

    pagination();
}

//On récupère ici la valeur choisi dans le <select>
selectNbrOfEl.addEventListener('click', () => {

    choice = selectNbrOfEl.selectedIndex;
    maximumShownHero = parseInt(selectNbrOfEl.options[choice].value);
    minimumShownHero = 0;
    pagination();
})

// Cette fonction "Pagination" permet de choisir une page (la dernière / la première / la prochaine / la précédente)
const pagination = (valueOfBtn) => {

    console.log(selectNbrOfEl.options[choice].value);
    console.log(valueOfBtn);

    let nbrOfEl = parseInt(selectNbrOfEl.options[choice].value);
    let heroElements = document.querySelectorAll('tr:not(tr#headbar)');


    if(valueOfBtn == 'first') {
        minimumShownHero = 0;
        maximumShownHero = nbrOfEl;
    } else if (valueOfBtn == 'last') {
        minimumShownHero = 563 - nbrOfEl;
        maximumShownHero = 563;
    } else if (valueOfBtn == 'next') {
        minimumShownHero += nbrOfEl;
        maximumShownHero += nbrOfEl;
    } else if (valueOfBtn == 'previous') {
        minimumShownHero -= nbrOfEl;
        maximumShownHero -= nbrOfEl;
    }

    for(eachHero of heroElements) {
        if(eachHero.id >= minimumShownHero && eachHero.id <= maximumShownHero) {
            eachHero.style.display = "";       
        } else {
            eachHero.style.display = "none";
        }
    }

}


// La fonction "search" permet de faire une recherche "interactive"
const search = () => {
    let searching = document.getElementById('searching');
    let heroElements = document.querySelectorAll('tr:not(tr#headbar)');

    let regex = RegExp(searching.value.toUpperCase());

    for (el of heroElements) {
        
        if (regex.test(el.children[1].textContent.toUpperCase()) == true) {
            el.style.display = "";
        } else {
            el.style.display = "none";
        }
    }

}

//La fonction "toSort" permet un tri dans l'ordre alphabétique ou numérique et inversement
const toSort = (toSortingElement) => {

    let category = toSortingElement.getAttribute('category');
    let elementAttribute = toSortingElement.getAttribute('element');
    let isAlreadyClicked = toSortingElement.getAttribute('is-already-clicked');
    let allHeroesElements = document.querySelectorAll('tr:not(tr#headbar)');
    let allElementOfHeadBar = document.querySelectorAll('th');

    if (category == null) {
        if (isAlreadyClicked == "false") {
            allJson.sort((a,b) => {
                return (a[elementAttribute] > b[elementAttribute])?1:-1;
            });
    
            toSortingElement.setAttribute('is-already-clicked', "true");
            
        } else {
            allJson.sort((a,b) => {
                return (a[elementAttribute] < b[elementAttribute])?1:-1;
            });
    
            toSortingElement.setAttribute('is-already-clicked', "false");
            
        }

    } else {
        if (isAlreadyClicked == "false") {

            allJson.sort((a,b) => {

                if (Array.isArray(a[category][elementAttribute])) {
                    return a[category][elementAttribute][0].localeCompare(b[category][elementAttribute][0], undefined, {numeric: true});
                }

                if (a[category][elementAttribute] == "" || a[category][elementAttribute] == "-") {
                    return 1;
                } else if (b[category][elementAttribute] == "" || b[category][elementAttribute] == "-") {
                    return -1;
                }

                return (a[category][elementAttribute] > b[category][elementAttribute])?1:-1;
            });
    
            toSortingElement.setAttribute('is-already-clicked', "true");
            
        } else {

            allJson.sort((a,b) => {

                if (Array.isArray(a[category][elementAttribute])) {
                    return b[category][elementAttribute][0].localeCompare(a[category][elementAttribute][0], undefined, {numeric: true});
                }

                if (a[category][elementAttribute] == "" || a[category][elementAttribute] == "-") {
                    return 1;
                } else if (b[category][elementAttribute] == "" || b[category][elementAttribute] == "-") {
                    return -1;
                }

                return (a[category][elementAttribute] < b[category][elementAttribute])?1:-1;
            });
    
            toSortingElement.setAttribute('is-already-clicked', "false");
            
        }
    }


    for (el of allHeroesElements) {
        el.remove();
    }

    for (th of allElementOfHeadBar) {
        if(th != toSortingElement) {
            th.setAttribute('is-already-clicked', "false");
        }      
    }

    display();
}
