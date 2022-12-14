const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const managers = data.employees.filter((employee) => employee.managers.includes(managerId));
  return managers.map((employee) => `${employee.firstName} ${employee.lastName}`);
}
module.exports = { isManager, getRelatedEmployees };
