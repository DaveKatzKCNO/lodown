'use strict';

// YOU KNOW WHAT TO DO //


/**
 * identity: Returns the same value that is used as the argument.
 * 
 * @param {Any value} value: The value to return. 
 * 
 * @return {String, Number, Undefined, Boolean, Object, Array, etc}
 * Any datatype: Any value that was given to it.
 */

function identity(value) {
    return value;
}

module.exports.identity = identity;


/**
 * typeOf: Designed to return the datatype of the parameter given.
 * 
 * @param {Any value} value: Any value that has a datatype that needs 
 * determining. 
 * 
 * @return {String}: the datatype returned as a string.
 */


function typeOf(value) {
    //test if array using Array.isArray(value)
     if(Array.isArray(value)){
        return "array";
    // test if is null
    } else if(value === null){
        return "null";
    } else {
    return typeof value;
    }
}

module.exports.typeOf = typeOf;

/**
 * first: Designed to return first <number> items in <array>.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Number} number: The number of elements to return, starting
 * index zero.
 * 
 * @return {Array}: returns a new array with the first <number> elements
 * from <array>.
 */
 
function first(array, number) {
    if (!(Array.isArray(array)) || number < 0){
        return [];
    } else if (isNaN(number) || number === null){
        return array[0];
    } else if (number > array.length){
        return array;
    } else {
        return array.splice(0, number)
    }
}

module.exports.first = first;

/**
 * last: Designed to return last <number> items in <array>.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Number} number: The number of elements to return, starting
 * index array.length - number.
 * 
 * @return {Array}: returns a new array with the last <number> elements
 * from <array>.
 */

function last(array, number) {
    if (!(Array.isArray(array)) || number < 0){
        return [];
    } else if (isNaN(number) || number === null){
        return array[array.length-1];
    } else if (number > array.length){
        return array;
    } else {
        return array.splice(array.length-number, number)
    }
}

module.exports.last = last ;

/**
 * indexOf: Designed to look at each element in an array and return
 * (as a number) the index position a target element in a given array.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Any datatype} value: The value that needs to be located in the 
 * array by index
 * 
 * @return {Number}: returns a number representing the index position
 * of <value>.
 */

function indexOf(array, value) {
    for (let i = 0; i < array.length; i++){
        if (array[i] === value){
            return i
        }
    } return -1;
}

module.exports.indexOf = indexOf;

/**
 * contains: Designed to look into an array and return a boolean that lets
 * us know if a target element is in a given array.
 * 
 * @param {Array} array: The array over which to iterate.
 * @param {Any datatype} value: The value that needs to be located in the 
 * array by index so that we can confirm its membership.
 * 
 * @return {Boolean}: returns true or false representing the element's
 * membership in <array>
 * 
 */

function contains(array, value) {
    //return _.indexOf(array, val) ? true : false;
for (let i = 0; i < array.length; i++){
      if (array[i] === value) return true
    } return false;
 }

module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */

function each(collection, func) {
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
         let index = i;
         let element = collection[i];
         func(element, index, collection)
    }
    }else if (typeof collection === 'object'){
        for (var key in collection){
            let value = collection[key];
            func(value, key, collection)
        }
    }
}

module.exports.each = each;

/**
 * unique: Designed to return a new array containing all the elements from
 * a given array, but with all the duplicates removed 
 * 
 * @param {Array} array: The array which will be deduped. 
 * 
 * @return {Array}: A new array containing only the unique elements from the
 * original given array.
 */

function unique(array) {
    let uniqueArray = [];
     for (let i = 0; i < array.length; i++){
        if(indexOf(uniqueArray,array[i]) === -1){
           uniqueArray.push(array[i]); 
        }
         } return uniqueArray
     } 

module.exports.unique = unique;

/**
 * filter: Designed to loop over a collection (Array) and applies the 
 * Function test to each value in the collection, then store only the elements
 * that pass the test in a new array.
 * 
 * @param {Array} array: The collection containing elements that will be 
 * filtered through the test.
 * @param {Function} test: The test that each element needs to pass.
 * 
 * @return {Array}: A new array storing the only the elements (from the given 
 * <array> that pass a function <test> passed on each element.
 */

function filter(array, test) {
    let results = [];
    each(array, function(element, index, array){
        if (test(element, index, array)){
         results.push(element); 
         }
    })
    return results;
}

module.exports.filter = filter;

/**
 * reject: Designed to loop over a collection (Array) and applies the 
 * Function test to each value in the collection, then store only the elements
 * that fail the test (return a falsey value) in a new array.
 * 
 * @param {Array} array: The collection containing elements that will be 
 * filtered through the test.
 * @param {Function} test: The test that each element needs to fail.
 * 
 * @return {Array}: A new array storing the only the elements (from the given 
 * <array> that, when passed through a function <test>, produce falsey values.
 */

function reject(array, test) {
    return filter(array, function(element, index, array){
        return !test(element, index, array)
    })
}

module.exports.reject = reject;

/**
 * partition: Designed to loop over a collection (Array) and applies the 
 * Function test to each value in the collection. It returns a new array made up
 * of two new sub-arrays: one that stores only the elements that return a truthy
 * value after being applied the Function test, and one that stores only the
 * elements that return a falsey value after being applied the Function test.
 * 
 * @param {Array} array: The collection containing elements that the function
 * will be applied to. 
 * @param {Function} test: The test that each element needs to be applied to.
 * 
 * @return {Array}: A new array made up of two subarrays. One that holds our
 * truthy results, and one that holds our falsey results. 
 */
 
function partition(array, test) {
    let trues = [];
    let falses = [];
    let allResults = [trues, falses];
    each(array, function(element, index, array){
        if (test(element, index, array)){
         trues.push(element); 
         } else if (!test(element, index, array)){
             falses.push(element);
         }
    })
    return allResults;
}

module.exports.partition = partition;
    
/**
 * map: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection. Then, return value of the
 * function passed on each element is stored in a new array. 
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 * 
 * @return {Array}: an array containing the return value of each element after having the function applied to it.
 */
 
function map(collection, func) {
    let results = [];
    each(collection, function(e, i, collection){
         results.push(func(e, i, collection)) 
    })
    return results;
}

module.exports.map = map;

/**
 * pluck: Designed to loop over an array of objects and pull out the value of every property in every element, then push those values into a new array.
 * 
 * @param {Array} array: An array containing objects which we will iterate over.
 * @param {Any value} property: The properties on the the arrays which hold the 
 * values the function pulls into a new array
 * 
 * @return {Array}: returns the values in a new array.
 * 
 */
 
function pluck(array, property) {
   let results =[];
    map(array, function(e, i, array){
        results.push(array[i][property]);
    })
 return results  
}

module.exports.pluck = pluck;

/**
 * every: Designed to loop over an array and return if ALL of the elements, 
 * after applied to a function, are truthy.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each element in the 
 * collection
 * 
 * @return {Boolean}: Returns true if all elements resolved to truthy, false, if
 * even one of them resolves to falsey.
 * 
 */

function every(collection, func) {
    if(func === undefined){
        return !contains(collection,false)
    } else {
    return !contains(map(collection, func),false);
    }
}

module.exports.every = every;

/**
 * some: Designed to loop over an array and return if at least ONE of the 
 * elements, after applied to a function, is truthy.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each element in the 
 * collection
 * 
 * @return {Boolean}: Returns true if at least one element resolved to truthy,
 * false, if every single one of them resolves to falsey.
 * 
 */

function some(collection, func) {
    let arrayToCheck = [];
    if (func === undefined){
        return contains(collection, true);
    } else {
        each(collection, function(e, i, collection){
            arrayToCheck.push(func(e, i , collection));
        })
    } return contains(arrayToCheck, true)
}

module.exports.some = some;

/**
 * reduce: Reduces collection to a value which is the accumulated result of 
 * running each element in collection thru Function func, where each successive 
 * invocation is supplied the return value of the previous (seed). 
 * If seed is not given, the first element of collection is used as
 * the initial value.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} func: The function invoked per iteration.
 * @param {Inital value} seed: The initial value.
 * 
 * @return {Any datatype}: Returns the accumulated value - all values in the 
 * object boiled down to one.
 * 
 */

function reduce(collection, func, seed){
    each(collection, function(element, index, collection){
        if (seed === undefined) {
            seed = collection[0];
        } else  seed = (func(seed, element, index));
    })
    return seed;
}

module.exports.reduce = reduce;

/**
 * extend: This method is like _.assign except that it iterates over own and 
 * inherited source properties. Note: This method mutates object. 
 * It merges the objects together and updates any keys that already are on the 
 * target object.
 * 
 * @param {Object} object1: The destination/target object.
 * @param {Object} ...objects: The source object/s.
 * 
 * @return {Object}: A singular object, having merged all other values into it.
 */

function extend(object1, ...objects) {
return Object.assign(object1, ...objects);
}

module.exports.extend = extend;