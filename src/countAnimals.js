// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    const animais = {};// constante criada para preencher o objeto vazio
    data.species.forEach((specie) => {
      animais[specie.name] = specie.residents.length;
    });
    return animais;
  }
  if (animal.sex) { // acessando o sex pelo objeto animal que parametro
    return data.species.find((specie) => specie.name === animal.species).residents
      .filter((resident) => resident.sex === animal.sex).length;
  }
  return data.species.find((specie) => specie.name === animal.species).residents.length;
};

// console.log(countAnimals({ species: 'lions' }));
// console.log(countAnimals({ species: 'lions', sex: 'female' }));

module.exports = countAnimals;

// if (!animal) {
//   data.species.reduce((acc, curr) => {
//     acc[curr.name] = curr.residents.length;
//     return acc;
//   }, {});
// }

// if (!animal.sex) {
//   return data.species.find((specie) => specie.name === animal.species).residents
//     .filter(() => );
// }
