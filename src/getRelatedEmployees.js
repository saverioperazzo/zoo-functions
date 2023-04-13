const data = require('../data/zoo_data');

const isManager = (id) => {
  const manager = data.employees.some((elementosobjetos) => elementosobjetos.managers.includes(id));
  return manager;
}; // algumas HOFs não criam outra array , eles analizam tudo das outras arrays ou objetos , por isso vc apesar de acessar um array novo , vc chama 'managers'.

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const filtro = data.employees.filter((e) => e.managers.includes(managerId))
    .map((manager) => `${manager.firstName} ${manager.lastName}`);

  return filtro;// retorna o que vc trabalho e não a função que entrou, vc quer retornar o resultado.
};

// no 'if' vc chama outra funço aqui dentro mas aqui vc tem que chamar o parametro DESSA função , e não da outra.

module.exports = { isManager, getRelatedEmployees };

// const array = ['saverio', 'thaís', 'josiel'];
// const filtro = array.filter((e) => e === 'saverio');

// console.log(filtro);
