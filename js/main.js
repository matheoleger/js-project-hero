let body = document.querySelector('body');
let allJson;
let maximumShownHero = 20; // value of last hero's id that can be displayed (20 by default)
let minimumShownHero = 0;   // value of first hero's id that can be displayed (20 by default)

// let 
const loadData = heroes => {
    console.log(heroes) // write your code using the data in a function
    // note that you can not access heroes before this function is called.

    allJson = [...heroes];
    display()
}
  
// Request the file fetch, it will download it in your browser cache
fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
.then((response) => response.json()) // parse the response from JSON
.then(loadData) // .then will call the function with the JSON value


const display = () => {
    let tableEl = document.querySelector('#table_heroes')

    for(let i = 0; i < allJson.length; i++) {
        // console.log(elOfHeroes)
        // allHeroesElements[i].remove()
        // console.log(heroes)

        // let heroCarac = [elOfHeroes.images.xs, elOfHeroes.name, elOfHeroes.biography, elOfHeroes.powerstats, elOfHeroes.appearance]
        let heroCarac = [allJson[i].images.xs, allJson[i].name, allJson[i].biography.fullName, allJson[i].powerstats, allJson[i].appearance.race, allJson[i].appearance.gender, allJson[i].appearance.height, allJson[i].appearance.weight, allJson[i].biography.placeOfBirth, allJson[i].biography.alignment]
        // console.log(heroCarac)

        let heroEl = document.createElement('tr')

        for(necessaryData of heroCarac) {

            let tdEl = document.createElement('td')
            let contentTd

            if(necessaryData == heroCarac[0]) {
                contentTd = document.createElement('img')
                contentTd.setAttribute("src", necessaryData)
                tdEl.appendChild(contentTd)   

            } else if (necessaryData == heroCarac[3]) {
                
                tdEl.className = "powers"

                for (powerKey in necessaryData) {
                    contentTd = document.createElement('span')

                    let text = document.createTextNode(`${powerKey} : ${necessaryData[powerKey]}`)
                    
                    contentTd.appendChild(text);
                    
                    tdEl.append(contentTd)
                }

            } else {
                contentTd = document.createTextNode(necessaryData);                           
                tdEl.appendChild(contentTd)            
            }
            
            heroEl.append(tdEl)
            
        }

        heroEl.setAttribute("id", i)

        tableEl.append(heroEl)
           
    }

    pagination()
}

let selectNbrOfEl = document.querySelector('select');
let choice = selectNbrOfEl.selectedIndex

selectNbrOfEl.addEventListener('click', () => {

    choice = selectNbrOfEl.selectedIndex
    console.log(selectNbrOfEl.options[choice].value)

    maximumShownHero = parseInt(selectNbrOfEl.options[choice].value);
    minimumShownHero = 0;
    pagination()
})


const pagination = (valueOfBtn) => {

    console.log(selectNbrOfEl.options[choice].value)
    console.log(valueOfBtn)

    let nbrOfEl = parseInt(selectNbrOfEl.options[choice].value)
    let heroElements = document.querySelectorAll('tr:not(tr#headbar)')


    if(valueOfBtn == 'first') {
        minimumShownHero = 0
        maximumShownHero = nbrOfEl;
    } else if (valueOfBtn == 'last') {
        minimumShownHero = 563 - nbrOfEl; //à modifier
        maximumShownHero = 563;
    } else if (valueOfBtn == 'next') {
        minimumShownHero += nbrOfEl;
        maximumShownHero += nbrOfEl;
    } else if (valueOfBtn == 'previous') {
        minimumShownHero -= nbrOfEl;
        maximumShownHero -= nbrOfEl;
    }

    console.log("de " + minimumShownHero + " à " + maximumShownHero);


    for(eachHero of heroElements) {

        // console.log(eachHero)
        if(eachHero.id >= minimumShownHero && eachHero.id <= maximumShownHero) {
            // console.log("all is fine for " + eachHero.id)
            eachHero.style.display = ""         
        } else {
            eachHero.style.display = "none"
        }
    }

}

const search = () => {
    let searching = document.getElementById('searching');
    let heroElements = document.querySelectorAll('tr:not(tr#headbar)')

    // console.log(searching.value);

    let regex = RegExp(searching.value.toUpperCase());

    for (el of heroElements) {
        
        if (regex.test(el.children[1].textContent.toUpperCase()) == true) {
            // console.log(el.children[1].textContent)
            el.style.display = ""
        } else {
            el.style.display = "none"
            console.log(el.children[1].textContent.toUpperCase())
            console.log(searching.value.toUpperCase())
        }
    }    

}

const sort = (toSortingElement) => {
    // toSortingElement = sortingHTMLElement
    // console.log(toSortingElement)

    console.log('tout va bien tqt')

    let elementAttribute = toSortingElement.getAttribute('element');
    let isAlreadyClicked = toSortingElement.getAttribute('is-already-clicked')
    let allHeroesElements = document.querySelectorAll('tr:not(tr#headbar)')
    // console.log(isAlreadyClicked)

    if (isAlreadyClicked == "false") {
        allJson.sort((a,b) => {
            return (a[elementAttribute] > b[elementAttribute])?1:-1;
        });

        toSortingElement.setAttribute('is-already-clicked', "true")
        // console.log(toSortingElement.getAttribute('is-already-clicked'))

        // console.log(heroes[1][elementAttribute])
        
    } else {
        allJson.sort((a,b) => {
            return (a[elementAttribute] < b[elementAttribute])?1:-1;
        });

        toSortingElement.setAttribute('is-already-clicked', "false")
        console.log(allJson)
        // console.log(toSortingElement.getAttribute('is-already-clicked'))
        
    }

    for (el of allHeroesElements) {
        el.remove()
    }

    display()

}
