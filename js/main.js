let body = document.querySelector('body');
let maximumShownHero = 20; // value of last hero's id that can be displayed (20 by default)
let minimumShownHero = 0;   // value of first hero's id that can be displayed (20 by default)

// let

const loadData = heroes => {
    console.log(heroes) // write your code using the data in a function
    // note that you can not access heroes before this function is called.

    let tableEl = document.querySelector('#table_heroes')

    for(let i = 0; i < heroes.length; i++) {
        // console.log(elOfHeroes)

        // let heroCarac = [elOfHeroes.images.xs, elOfHeroes.name, elOfHeroes.biography, elOfHeroes.powerstats, elOfHeroes.appearance]
        let heroCarac = [heroes[i].images.xs, heroes[i].name, heroes[i].biography.fullName, heroes[i].powerstats, heroes[i].appearance.race, heroes[i].appearance.gender, heroes[i].appearance.height, heroes[i].appearance.weight, heroes[i].biography.placeOfBirth, heroes[i].biography.alignment]
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



  // Request the file fetch, it will download it in your browser cache
fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
    .then((response) => response.json()) // parse the response from JSON
    .then(loadData) // .then will call the function with the JSON value

// console.log(superHeroes)

let selectNbrOfEl = document.querySelector('select');
let choice = selectNbrOfEl.selectedIndex

selectNbrOfEl.addEventListener('click', () => {

    choice = selectNbrOfEl.selectedIndex
    console.log(selectNbrOfEl.options[choice].value)

    maximumShownHero = parseInt(selectNbrOfEl.options[choice].value);
    minimumShownHero = 0;
    pagination()
})


function pagination(valueOfBtn) {

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
            console.log("all is fine for " + eachHero.id)
            eachHero.style.display = ""
        } else {
            eachHero.style.display = "none"
        }
    }

}

// search bar

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
        }
    }

}