'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mergeOptions = exports.defaults = undefined;

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
    wrapperId: 'notification-wrapper',
    animationDuration: 300,
    timeout: 5000,
    zIndex: 1000,
    colors: {
        error: {
            color: "#FFFFFF",
            backgroundColor: '#E85742'
        },
        success: {
            color: "#FFFFFF",
            backgroundColor: '#55CA92'
        },
        warning: {
            color: "#333333",
            backgroundColor: '#F5E273'
        },
        info: {
            color: "#FFFFFF",
            backgroundColor: '#4990E2'
        }
    }
};

function mergeOptions(options) {
    if (options.colors) {
        if ('custom' in options.colors) {
            delete options.colors.custom;
        }
        options.colors = (0, _objectAssign2.default)(defaults.colors, options.colors);
    }
    exports.defaults = defaults = (0, _objectAssign2.default)(defaults, options);
}

exports.defaults = defaults;
exports.mergeOptions = mergeOptions;