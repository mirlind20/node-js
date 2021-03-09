const cities = [
    {
      name: 'Barcelona',
      best_club: 'CF Barcelona',
      population: '1203056'
    },
    {
      name: 'London',
      best_club: 'Arsenal',
      population: '120305'
    },
    {
      name: 'Madrid',
      best_club: 'Atletico',
      population: '120305633'
    },
    {
      name: 'Valencia',
      best_club: 'Valencia CF',
      population: '120305644'
    },
    {
      name: 'Rome',
      best_club: 'Roma',
      population: '1231230'
    }
  ]
  let max = 0
  let memoIndex = 0


 cities.forEach(city => {
     for(let i = 0; i < cities.length; i++){
         if(max < Number.parseInt(cities[i].population)){
             max = cities[i].population
             memoIndex = i
         }
     }
  
})
console.log(cities[memoIndex].name + ' ' + cities[memoIndex].best_club)