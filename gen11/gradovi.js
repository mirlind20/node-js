
 const data = require('./cities-data')


const findLargestCity = (cities) => {
for(let i = 0; i < data.cities.length; i++){
    if(max < Number.parseInt(data.cities[i].population)){
        max = data.cities[i].population
        memoIndex = i
    }
}


console.log(data.cities[memoIndex].name + ' ' + data.cities[memoIndex].best_club)
}



  let max = 0
//   let cityName = ''
//   let bestClub = ''
  let memoIndex = 0




//  cities.forEach(city => {
//     if(max < city.population){
//         max = city.population
//         cityName = city.name
//         bestClub = city.best_club
//     }
// })

// for(let i = 0; i < data.cities.length; i++){
//     if(max < Number.parseInt(data.cities[i].population)){
//         max = data.cities[i].population
//         memoIndex = i
//     }
// }


// console.log(data.cities[memoIndex].name + ' ' + data.cities[memoIndex].best_club)
 module.exports = findLargestCity

