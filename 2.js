obj = {
  prop1: '123',
  prop2: '321'
}

objProto = Object.create(obj);
objProto.prop3 = '234';
// console.log(Object.getPrototypeOf(objProto));
// console.log(objProto)

function hasProp(obj, str) {
  if (str in obj ){
    return true;
  } else {
    return false;
  }
}

// propsVals(obj);
console.log(hasProp(obj, 'prop3'));
console.log(hasProp(objProto, 'prop3'));

