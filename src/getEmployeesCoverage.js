const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

const getSpecies = (emp, prop) => {
  const searchForSpecies = emp.responsibleFor.map((empNew) =>
    species.find((emp01) => emp01.id === empNew));
  return searchForSpecies.map((empNew) => empNew[prop]);
};

const retorno = (emp) => ({
  id: emp.id,
  fullName: `${emp.firstName} ${emp.lastName}`,
  species: getSpecies(emp, 'name'),
  locations: getSpecies(emp, 'location'),
});

const getEmployeesCoverage = (obj) => {
  if (obj === undefined) {
    return employees.map((emp) => retorno(emp));
  }

  const test01 = employees
    .find((emp) => emp.firstName === obj.name || emp.lastName === obj.name
    || emp.id === obj.id);

  if (test01 === undefined) {
    throw new Error('Informações inválidas');
  }

  return retorno(test01);
};
// getEmployeesCoverage({ name: 'Sharonda' });
console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));
module.exports = getEmployeesCoverage;
