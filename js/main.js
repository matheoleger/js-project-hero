let body = document.querySelector('body')
let oneHero;
let superHeroes;

const loadData = heroes => {
    console.log(heroes) // write your code using the data in a function
    // note that you can not access heroes before this function is called.

    for(elOfHeroes of heroes) {

        let tableEl = document.createElement('table')
        let theadEl = document.createElement('thead')
        let contentThead = document.createTextNode(elOfHeroes.id)
        let tbodyEl = document.createElement('tbody')

        let appearance = elOfHeroes.appearance
        let biography = elOfHeroes.biography

        // pour les boucles ont peut surement faire une fonction avec une boucle
        // qui prend en argument le "elOfHeroes.qlqchose"
        // tableau avec tous les trucs a printer ?? et donc une boucle qui print
        // chaque element du tableau ??

        for(necessaryData in appearance) {
            //console.log(necessaryData)

            if(necessaryData != 'hairColor' && necessaryData != 'eyeColor') {
                let contentTbody = document.createTextNode(appearance[necessaryData])
                tbodyEl.appendChild(contentTbody)
            }
                
        }

        for(necessaryData in biography) {
            if(necessaryData == 'placeOfBirth' || necessaryData == 'alignment' || necessaryData == 'fullName') {
                let contentTbody = document.createTextNode(biography[necessaryData])
                tbodyEl.appendChild(contentTbody)
            }
        }

        let heroesImg = document.createElement('img')
        heroesImg.setAttribute('src', elOfHeroes.images.xs)
        tbodyEl.appendChild(heroesImg)

        body.append(tableEl)
        tableEl.append(theadEl, tbodyEl)
        theadEl.appendChild(contentThead)

                

    }

}
  
  // Request the file fetch, it will download it in your browser cache
fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
    .then((response) => response.json()) // parse the response from JSON
    .then(loadData) // .then will call the function with the JSON value

console.log(superHeroes)


