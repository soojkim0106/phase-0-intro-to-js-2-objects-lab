// Write your solution in this file!
const employee = {
    name: 'Sam',
    address: '11 Broadway'
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee,key){
    const newEmployee = {...employee[key]}
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}