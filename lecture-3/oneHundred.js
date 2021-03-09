const { address } = require('faker');
const faker = require('faker');
// const fs = require('fs')

function generateUsers() {

  let users = []

  for (let id=1; id <= 100; id++) {

    let firstName = faker.name.firstName()
    let lastName = faker.name.lastName()
    let email = faker.internet.email()
    let address = faker.address.city()
    let timezone = faker.address.timeZone()
    let companyName = faker.company.companyName()
    let companyDuty = faker.company.bsNoun()


    users.push({
        "id": id,
        "first_name": firstName,
        "last_name": lastName,
        "email": email,
        "address": address,
        "timezone": timezone,
        "company_name": companyName,
        "company_duty": companyDuty
    });
  }

  return  users 
}

console.log(generateUsers())

// let dataObj = generateUsers();

// fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));