const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) { // se colocar o ! ele analisa como se a entrada NÃO EXISTE , se ela NÃO EXISTE ai retorna {}
    return {};
  } return data.employees
    .find((name) => employeeName === name.firstName || employeeName === name.lastName);
};
module.exports = getEmployeeByName;
