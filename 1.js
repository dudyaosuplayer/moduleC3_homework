obj = {
  prop1: 'prop1',
  prop2: 'prop2'
}

objProto = Object.create(obj);
objProto.prop3 = 'prop3';
// console.log(Object.getPrototypeOf(objProto));
// console.log(objProto)

function propsVals(obj) {
  for (let prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      console.log(`${prop} - ${obj[prop]}`);
    };
  };
}

// propsVals(obj);
propsVals(objProto);
