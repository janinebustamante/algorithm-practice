// Write a function that takes two objects as arguments
// Unfortunately, the property 'country' in the second object has the wrong key
// It should be named 'city' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'planet', 'continent', 'country', 'state', and 'city'

// Test Cases:
// myFunction({ continent: 'Europe', country: 'Germany' }, { planet: 'Earth', country: 'Munich', state: 'Bavaria' })
// Expected
// { continent: 'Europe', country: 'Germany', planet: 'Earth', state: 'Bavaria', city: 'Munich'}
// myFunction({ continent: 'North America', country: 'USA' }, { planet: 'Earth', country: 'Los Angeles', state: 'California' })
// Expected
// { continent: 'North America', country: 'USA', planet: 'Earth', state: 'California', city: 'Los Angeles'}

function myFunction(obj1, obj2) {
  let countryValue = obj2.country;
  delete obj2.country;
  obj2.city = countryValue;
  let newObj = { ...obj1, ...obj2 };
  return newObj;
}

// function myFunction(obj1, obj2) {
//     let newObj2 = {...obj2}
//     let countryValue = newObj2.country
//     delete newObj2.country;
//     newObj2.city = countryValue;
//     let newObj = {...obj1, ...newObj2}
//     return newObj;
//  }
