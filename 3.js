function createNullObj() {
  return Object.create(null);
}

console.log(createNullObj(), createNullObj().__proto__)