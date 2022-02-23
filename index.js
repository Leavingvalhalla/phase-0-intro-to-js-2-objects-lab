const employee = { name: "zach", streetAdress: "123 Sunset Blvd" };

function updateEmployeeWithKeyAndValue(object, key, value) {
  return { ...object, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromEmployeeByKey(object, key) {
  const newObj = { ...object };
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromEmployeeByKey(object, key) {
  delete object[key];
  return object;
}
