let body = document.querySelector('body')
let oneHero;
let superHeroes;
const search = document.getElementById('search')


console.log(search)


search.addEventListener('keyup', (e) => {
    console.log(e.target.value);

});




const loadData = heroes => {
    console.log(heroes) // write your code using the data in a function
    // note that you can not access heroes before this function is called.

    for(elOfHeroes of heroes) {


        // let heroCarac = [elOfHeroes.images.xs, elOfHeroes.name, elOfHeroes.biography, elOfHeroes.powerstats, elOfHeroes.appearance]
        let heroCarac = [elOfHeroes.images.xs, elOfHeroes.name, elOfHeroes.biography.fullName, elOfHeroes.powerstats, elOfHeroes.appearance.race, elOfHeroes.appearance.gender, elOfHeroes.appearance.height, elOfHeroes.appearance.weight, elOfHeroes.biography.placeOfBirth, elOfHeroes.biography.alignment]
        console.log(heroCarac)
        // oneHero = elOfHeroes.name
        // console.log(oneHero)
    
        // let name = document.createElement('p')
        // let contentName = document.createTextNode(oneHero)
        // body.append(name)
        // name.appendChild(contentName)

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