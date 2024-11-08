/**
 * forEach(collection, cb)
 * ----------
 * Iterates over each item in collection.
 * On each iteration, it invokes the cb function.
 *
 * For strings, the callback should be invoked for each character in the string.
 * The callback should be invoked with the following parameters:
 *     cb( character, position, fullString )
 *     character is the current character being iterated over
 *     position is the index the character is at
 *     fullString is the original string being iterated on
 *
 * For arrays, the callback should be invoked for each element in the array.
 * The callback should be invoked with the following parameters:
 *     cb( element, index, collection )
 *     element is the current character being iterated over
 *     index is the position of the element in the collection
 *     collection is the array being iterated on
 *
 * For objects, the callback should be invoked for each key in the object.
 *     cb( value, key, object )
 *     value is the value stored at the current key in the object
 *     key is the current key being iterated over
 *     object is the original object being iterated on
 *
 * For all other data types (undefined, null, number, boolean, etc...) throw an exception
 */
function forEach(collection, cb) {

}

module.exports = forEach;
