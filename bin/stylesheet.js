'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaults = require('./defaults');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This was created as an ES6 class with a getter for the styles to allow for recomputing
 * dynamic values on each usage without calling a function.
 */
var Stylesheet = function () {
    function Stylesheet() {
        _classCallCheck(this, Stylesheet);
    }

    _createClass(Stylesheet, [{
        key: 'styles',
        get: function get() {
            return {
                container: {
                    position: 'fixed',
                    width: '50%',
                    margin: '0 auto',
                    right: '0px',
                    bottom: '100%',
                    left: '0px',
                    textAlign: 'center',
                    zIndex: _defaults.defaults.zIndex,
                    pointerEvents: 'none',
                    transition: 'all ' + _defaults.defaults.animationDuration + 'ms ease',
                    transform: 'translateY(0px)',

                    // Vendor Prefixes
                    msTransition: 'all ' + _defaults.defaults.animationDuration + 'ms ease',
                    msTransform: 'translateY(0px)',
                    WebkitTransition: 'all ' + _defaults.defaults.animationDuration + 'ms ease',
                    WebkitTransform: 'translateY(0px)',
                    OTransition: 'all ' + _defaults.defaults.animationDuration + 'ms ease',
                    OTransform: 'translateY(0px)',
                    MozTransition: 'all ' + _defaults.defaults.animationDuration + 'ms ease',
                    MozTransform: 'translateY(0px)'
                },
                content: {
                    cursor: 'pointer',
                    display: 'inline-block',
                    width: 'auto',
                    borderRadius: '0 0 4px 4px',
                    backgroundColor: 'white',
                    padding: '10px 30px',
                    pointerEvents: 'all'
                },
                show: {
                    transform: 'translateY(100%)',
                    msTransform: 'translateY(100%)',
                    WebkitTransform: 'translateY(100%)',
                    OTransform: 'translateY(100%)',
                    MozTransform: 'translateY(100%)'
                },
                hide: {
                    transform: 'translateY(-100%)',
                    msTransform: 'translateY(-100%)',
                    WebkitTransform: 'translateY(-100%)',
                    OTransform: 'translateY(-100%)',
                    MozTransform: 'translateY(-100%)'
                }
            };
        }
    }]);

    return Stylesheet;
}();

exports.default = new Stylesheet();