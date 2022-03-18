const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');
/* referencia do metodo includes :
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes  */
function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const namesEmploeys = employees.filter((employee) => employeeName.includes(employee.firstName)
  || employeeName.includes(employee.lastName));
  return namesEmploeys.reduce(() => employeeName);
}
module.exports = getEmployeeByName;
