const API_ID = '10fd1a2b'; //process.env.REACT_APP_API_ID
const APP_KEY = '9115f4faf74408444878fa0b5508efda' ; //process.env.REACT_APP_API_KEY

export function fetchRecipes (food = '') {
  food = food.trim()

  return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
    .then((res) => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe))
}