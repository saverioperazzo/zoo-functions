const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const var01 = data.species.find((specie) => specie.name === animal).residents;

  const every = var01.every((specie) => specie.age >= age);

  return every;
};

module.exports = getAnimalsOlderThan;
