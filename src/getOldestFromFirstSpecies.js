const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const test01 = data.employees.find((id01) => id01.id === id).responsibleFor[0];// encontrou o objeto da pessoa colaboradora passada no parametro e retornou a primeira especie de animal que o colaborador é responsavel
  const c = data.species.find((specie) => specie.id === test01).residents
    .sort((a, b) => b.age - a.age)[0];
  // const test02 = data.species.residents.age.sort((a, b) => a - b);
  return Object.values(c);
};

// console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = getOldestFromFirstSpecies;

// const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
