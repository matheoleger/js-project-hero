// let heroesArr;
let body = document.querySelector('body')
let oneHero;

const loadData = heroes => {
    console.log(heroes) // write your code using the data in a function
    // note that you can not access heroes before this function is called.

    // heroesArr = heroes;

    for(elOfHeroes of heroes) {
        oneHero = elOfHeroes.name
        // console.log(heroesArr)
        console.log(oneHero)
    
        let name = document.createElement('p')
        let contentName = document.createTextNode(oneHero)
        body.append(name)
        name.appendChild(contentName)
    }



    // testLol(heroesArr)
}
  
  // Request the file fetch, it will download it in your browser cache
fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
    .then((response) => response.json()) // parse the response from JSON
    .then(loadData) // .then will call the function with the JSON value


// heroasArr = loadData()

// console.log("heroeeees " + heroesArr)


// function testLol(myArg) {
//     console.log("je call myArg: " + myArg);
// }

// console.log(loadData(...heroes))
