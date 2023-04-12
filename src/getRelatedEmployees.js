const data = require('../data/zoo_data');

const isManager = (id) => {
  const manager = data.employees.some((elementosobjetos) => elementosobjetos.managers.includes(id));
  return manager;
};

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const filtro = data.employees.filter((e) => e.managers.includes(managerId))
    .map((manager) => `${manager.firstName} ${manager.lastName}`);

  return filtro;
};

module.exports = { isManager, getRelatedEmployees };

// const array = ['saverio', 'thaís', 'josiel'];
// const filtro = array.filter((e) => e === 'saverio');

// console.log(filtro);
