var recipes = {

}

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value

  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object)
  delete newObj.foo
  return object
}
