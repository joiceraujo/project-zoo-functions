const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstAnimal = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const findsAnimal = data.species.find((animal) => animal.id === firstAnimal)
    .residents.reduce((acc, curr) => (curr.age > acc.age ? curr : acc));
  return [findsAnimal.name, findsAnimal.sex, findsAnimal.age];
}
module.exports = getOldestFromFirstSpecies;
