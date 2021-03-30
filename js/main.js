const loadData = heroes => {
  console.log(heroes) // write your code using the data in a function
  // note that you can not access heroes before this function is called.
}

// Request the file fetch, it will download it in your browser cache
fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
  .then((response) => response.json()) // parse the response from JSON
  .then(loadData) // .then will call the function with the JSON value