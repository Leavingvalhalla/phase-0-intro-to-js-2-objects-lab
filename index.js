const employee = {name: "Bob",
streetAddress: "124 Sunnyside Dr."}

function updateEmployeeWithKeyAndValue(object, key, value) {
    return{...object,
    [key]: value}
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value
    return object
}


function deleteFromEmployeeByKey(object, key) {
    const newObj = {...object}
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key]
    return object
}



console.log(deleteFromEmployeeByKey(employee, 'name'))