const events = require('events');
const { report } = require('process');
const emitter = new events.EventEmitter();

// Publish/Subscribe

const reports = [
  {
    year: 2021,
    approved: false
  },
  {
    year: 2022,
    approved: false
  },
  {
    year: 2023,
    approved: false
  },
  {
    year: 2024,
    approved: false
  },
  {
    year: 2027,
    approved: false
  }
];

const food = [
    {
      hamburger: 'hamburger',
      store: 'Sedmica',
      status: true
    },
    {
        hamburger: 'stek',
        store: 'Royal',
        status: false
      }
];

emitter
      .on('mkd_in_eu', data => {
        console.log(`Site pakuvajte kuferite i si odime vo ${data.year}`);
        // ...
        // ...
      })
      .on('book_dispatched', data => {
        console.log(`Kupena kniga so naslov "${data.bookName}" od ${data.user}`)
      })
      .on('car_favourite', data => {
        console.log(`Kola kupena "${data.cityName}" od ${data.saloon}`)
      })
      .on('sport_favourite', data => {
        console.log(`Omilen sport "${data.sportName}" , osvoiv ${data.medal} medal`)
      })
      .on('food_favourite', data => {
        console.log(`Omileno jadenje "${data.hamburger}" od ${data.store}`)
      })
    

reports.forEach(report => {
  if (report.approved == true) {
    emitter.emit('mkd_in_eu', {
      year: report.year
    });
  }
});

food.forEach(delicius => {
    if (delicius.status == true) {
      emitter.emit('food_favourite', {
        hamburger: delicius.hamburger,
        store: delicius.store
      });
    }
  });

// logika za kupuvanje kniga
emitter.emit('book_dispatched', {
  user: 'Boban Sugareski',
  bookName: 'Solzite na mojata kjerka',
  price: 10
})

emitter.emit('car_favourite', {
    cityName: 'Skopje',
    saloon: 'Mak Auto',
  })

  emitter.emit('sport_favourite', {
    sportName: 'Football',
    medal: 'Gold',
  })