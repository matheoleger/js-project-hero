let body = document.querySelector('body')
let oneHero;
let superHeroes;
const searchinput = document.getElementById('searchinput')




const loadData = heroes => {
    console.log(heroes) // write your code using the data in a function
    // note that you can not access heroes before this function is called.

    let tableEl = document.querySelector('#table_heroes')

    for(elOfHeroes of heroes) {

        let heroCarac = [elOfHeroes.images.xs, elOfHeroes.name, elOfHeroes.biography, elOfHeroes.powerstats, elOfHeroes.appearance]
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

            if(necessaryData == heroCarac[0]) {
                let contentImg = document.createElement('img')
                contentImg.setAttribute("src", necessaryData)
                tdEl.appendChild(contentImg)
            } else {
                let contentTd = document.createTextNode(necessaryData)
                tdEl.appendChild(contentTd)
            }
            
            
            
            heroEl.append(tdEl)
            
        }

        tableEl.append(heroEl)
           

    }

}


  
  // Request the file fetch, it will download it in your browser cache
fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
    .then((response) => response.json()) // parse the response from JSON
    .then(loadData) // .then will call the function with the JSON value

console.log(superHeroes)
