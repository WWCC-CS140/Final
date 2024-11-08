/**
 * reject(ray, fn)
 * ----------
 * Returns a new array with all the elements
 * from ray that return false when executed
 * on function fn. This is the opposite of filter.
 *
 * reject([1, 2, 3], isOdd) ==> [2]
 * reject([1, 2, 3], alwaysTrue) ==> []
 * reject([1, 2, 3], alwaysFalse) ==> [1, 2, 3]
 *
 * function isOdd(x) {
 *     return x % 2 === 1;
 * }
 *
 * function alwaysTrue(x) {
 *     return true;
 * }
 *
 * function alwaysFalse(x) {
 *     return false;
 * }
 */
function reject(ray, fn) {

}

module.exports = reject;
