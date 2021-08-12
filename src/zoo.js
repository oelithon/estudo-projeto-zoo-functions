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
}

function calculateEntry(entrants) {
  // seu código aqui
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
}

console.log(increasePrices(20));

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
