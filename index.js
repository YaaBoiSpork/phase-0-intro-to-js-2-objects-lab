// Write your solution in this file!
const employee = {
    name: 'Stephen',
    address: '11 Broadway',
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const updatedEmployee = {...obj}
    updatedEmployee[key] = value;
    return updatedEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key,value) {
    obj[key] = value;
    return obj;
};

function deleteFromEmployeeByKey(obj, key) {
    const deleteFromEmployeeByKey = {}
    delete deleteFromEmployeeByKey.name;
    return deleteFromEmployeeByKey;
};

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete employee.name;
    return employee;
};

