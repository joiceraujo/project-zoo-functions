const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const minimumAge = data.species.find((specie) => specie.name === animal);
  return minimumAge.residents.every((resident) => resident.age >= age);
}
module.exports = getAnimalsOlderThan;
