/**
 * map(collection, cb)
 * ----------
 * Returns a new array created by iterating over each item in the collection
 * and using the value returned after transforming it with the callback function.
 * On each iteration, it invokes the cb function and uses this transformed value
 * in the new collection.
 *
 * This method is exactly like forEach except for it creates a new collection
 * with the result returned from cb. The callback should be invoked the same
 * way based on the collection being a string, array, or object.
 *
 * For all other data types (undefined, null, number, boolean, etc...) throw an exception
 */
function map(collection, cb) {

}

module.exports = map;
