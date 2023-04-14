const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const a = {
    child: entrants.filter(({ age }) => age < 18).length, // desestruturando da pra acessar age dessa forma
    adult: entrants.filter(({ age }) => age < 50 && age >= 18).length,
    senior: entrants.filter(({ age }) => age >= 50).length,
  };
  return a;
};
// console.log(countEntrants(entrants));

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }
  const b = countEntrants(entrants);
  const { child, adult, senior } = b;
  // return ((child * 20.99) + (adult * 49.99) + (senior * 24.99));
  return (data.prices.child * child) + (data.prices.adult * adult) + (data.prices.senior * senior);
};

module.exports = { calculateEntry, countEntrants };
