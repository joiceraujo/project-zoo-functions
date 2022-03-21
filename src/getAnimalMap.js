const data = require('../data/zoo_data');

function locationAnimals() { // função para localizar os animais por região.
  return data.species.reduce((acc, specie) => { // Usando reduce para criar um objeto vazio e a cada interação colocar os objetos dentro de um array.
    const amountAnimals = (acc[specie.location] || []); // Encontrar especie e sua localização ou criar um array vazio.
    amountAnimals.push(specie.name); // Se não, adicionar um nome de uma especie.
    Object.assign(acc, { [specie.location]: amountAnimals }); // Copiar o objeto e retornar o objeto de destino.
    return acc; // Retornando nosso valor acumulado.
  }, {});
}

function mapAnimalSex(sex, sorted) {
  return data.species.reduce((acc, specie) => { // Função reduce para percorrer e criar um novo objeto.
    const orderAnimals = (acc[specie.location] || []); // Encontra localização dos animais ou retorna um array vazio.
    let residents = [...specie.residents]; // Localizando resident dentro do array specie.
    if (sex) {
      residents = residents.filter((resident) => resident.sex === sex); // Encontrar array resident e filtrando pelo sexo.
    }
    residents = residents.map((resident) => resident.name); // O map aqui vai retornar com um array.
    if (sorted) {
      residents.sort(); // Ordernando os elementos do objeto e retornando um array.
    }
    orderAnimals.push({ [specie.name]: residents }); // Se não tiver, acrescenta no array.
    Object.assign(acc, { [specie.location]: orderAnimals }); // Copiar o objeto e retorna o objeto de destino.
    return acc; // retorna o valor acumulado.
  }, {});
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) { // Condição: se option não for verdade ou os nomes não forem incluidos.
    return locationAnimals(); // retorna a função acima locationAnimals.
  }
  return mapAnimalSex(options.sex, options.sorted); // retorno do array de objetos de forma ordenada.
}

module.exports = getAnimalMap;
