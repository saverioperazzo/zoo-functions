const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => data.species.name
  .filter((resident) => resident.animal === animal)
  .residents.every((resident) => resident.age >= age);

module.exports = getAnimalsOlderThan;
