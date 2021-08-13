const { species, employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return species.filter((animal) => ids.some((id) => id === animal.id));
  // const animalsId = species.filter((animal, index) => animal.id === ids[index]);
  // return animalsId; // Outra forma de resolver
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/some
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const specieAnimal = species
    .find(({ name }) => name === animal).residents
    .every((resident) => resident.age >= age);
  return specieAnimal;
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const searchEmployee = employees
    .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
  return searchEmployee;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const createObject = { ...personalInfo, ...associatedWith };
  employees.push(createObject);
  return createObject;
  // Utilizei o spread operator para espalhar os objetos recebidos em um novo objeto.
}

function isManager(id) {
  // seu código aqui
  return employees.some((funcionario) => funcionario.managers.includes(id));

  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({ id, firstName, lastName, managers, responsibleFor });

  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push
}

function countAnimals(speciesName) {
  // seu código aqui
  if (speciesName !== undefined) {
    return species.find((animal) => animal.name === speciesName).residents.length;
  } return species.reduce((acc, { name, residents }) => {
    acc[name] = residents.length;
    return acc;
  }, {});
}

function calculateEntry(entrants) {
  // seu código aqui
  // Primeiro faço o teste de entrada no parametro entrants, verificando se recebe nenhum argumento ou um objeto vazio.
  if (entrants === undefined || entrants === {}) {
    return 0;
  }

  // Aqui faço destructuring do parametro recebido, já que ele vai receber um objeto. Como estamos trabalhando com number, passei um default params para cada chave, isso me garante que caso não receba todas as chaves preenchidas o meu código não seja quebrado.
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;

  // por fim, para finalizar a operação, criei variáveis para realizar a multiplicação das unidades recebidas, com o valor de cada chave do objeto prices no arquivo /data.js
  const adultCalculo = Adult * prices.Adult;
  const childCalculo = Child * prices.Child;
  const seniorCalculo = Senior * prices.Senior;
  const sumValues = adultCalculo + childCalculo + seniorCalculo;
  return sumValues;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
  const divisionPercent = percentage / 100;

  const { Adult, Child, Senior } = prices;

  const calcPercentAdult = (divisionPercent * Adult) + Adult + 0.001;
  const calcPercentChild = (divisionPercent * Child) + Child + 0.001;
  const calcPercentSenior = (divisionPercent * Senior) + Senior + 0.001;

  prices.Adult = parseFloat(calcPercentAdult.toFixed(2));
  prices.Child = parseFloat(calcPercentChild.toFixed(2));
  prices.Senior = parseFloat(calcPercentSenior.toFixed(2));

  return prices;

  // Usei .toFixed() para definir a quantidade de casas decimais que iria precisar, mas como esse método retorna string, precisei usar o parseFloat() para fazer a conversao do resultado em number.
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
