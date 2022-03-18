const data = require('../data/zoo_data');

/* Usei duas Higher Order function, o método map para mapear os elementos
do array sem modificar o array original e o find para retornar o valor do
primeiro elemento do array que satisfizer a função */

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  return ids.map((id) => data.species.find((specie) => specie.id === id));
}
module.exports = getSpeciesByIds;
