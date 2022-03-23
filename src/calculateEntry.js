const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const adult = entrants.filter((entrants1) => entrants1.age >= 18 && entrants1.age < 50).length;
  const child = entrants.filter((entrants1) => entrants1.age < 18).length;
  const senior = entrants.filter((entrants1) => entrants1.age >= 50).length;
  return { adult, child, senior };
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }

  const adult = entrants.filter((entrants2) => entrants2.age >= 18 && entrants2.age < 50).length;
  const child = entrants.filter((entrants2) => entrants2.age < 18).length;
  const senior = entrants.filter((entrants2) => entrants2.age >= 50).length;
  return child * prices.child + adult * prices.adult + senior * prices.senior;
}
module.exports = { calculateEntry, countEntrants };
