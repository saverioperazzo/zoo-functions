// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) { // se não tiver entrada então deve retornar todos os animais com sua quantidade
    const animais = {};// constante criada para preencher o objeto vazio
    data.species.forEach((specie) => {
      animais[specie.name] = specie.residents.length; // para jogar os valores encontrados no forEach para dentro da constante animais vc acessa usando "animais[specie.name]" e iguala isso ao que vc quer, que é a quantidade total de cada especie, o retorno vai ser isso(veja fora da função):
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

// retorno de ''animais[specie.name] = specie.residents.length;  ''
// {
//   lions: 4,
//   tigers: 2,
//   bears: 3,
//   penguins: 4,
//   otters: 4,
//   frogs: 2,
//   snakes: 2,
//   elephants: 4,
//   giraffes: 6
// }
