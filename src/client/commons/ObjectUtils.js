/**
 * Merge defaults with user options
 * @private
 * @param {Object} defaults Default settings
 * @param {Object} options User options
 * @returns {Object} Merged values of defaults and options
 */
export let extend = function ( defaults, options ) {
    var extended = {};
    var prop;
    for (prop in defaults) {
        if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
            extended[prop] = defaults[prop];
        }
    }
    for (prop in options) {
        if (Object.prototype.hasOwnProperty.call(options, prop)) {
            extended[prop] = options[prop];
        }
    }
    return extended;
};

// export function extend(target) {
//     var sources = [].slice.call(arguments, 1);
//     sources.forEach(function (source) {
//         for (var prop in source) {
//             target[prop] = source[prop];
//         }
//     });
//     return target;
// }