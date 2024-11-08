module.exports = {
    isArray: require('./src/utils/is-array'),
    isString: require('./src/utils/is-string'),
    isFunction: require('./src/utils/is-function'),
    isUndefined: require('./src/utils/is-undefined'),

    get: require('./src/objects/get'),
    keys: require('./src/objects/keys'),
    values: require('./src/objects/values'),
    pick: require('./src/objects/pick'),
    omit: require('./src/objects/omit'),

    chunk: require('./src/arrays/chunk'),
    concat: require('./src/arrays/concat'),
    filter: require('./src/arrays/filter'),
    reject: require('./src/arrays/reject'),
    unique: require('./src/arrays/unique'),

    defer: require('./src/functions/defer'),
    wrap: require('./src/functions/wrap'),
    once: require('./src/functions/once'),
    times: require('./src/functions/times'),

    forEach: require('./src/collections/for-each'),
    map: require('./src/collections/map'),
    reduce: require('./src/collections/reduce')
}