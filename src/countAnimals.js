const data = require('../data/zoo_data');

function countAnimals(animal) {
  const amountAnimals = {};
  const { species } = data;
  if (!animal) {
    species.forEach((amount) => {
      amountAnimals[`${amount.name}`] = amount.residents.length;
    });
    return amountAnimals;
  }
  const amountSpecie = species.filter((specie) => specie.name === animal.specie)[0].residents;
  const amountSex = amountSpecie.filter((namedAnimals) => namedAnimals.sex === animal.sex);
  return !animal.sex ? amountSpecie.length : amountSex.length;
}
module.exports = countAnimals;
