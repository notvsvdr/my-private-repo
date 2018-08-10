/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _outputModule = __webpack_require__(1);

var _outputModule2 = _interopRequireDefault(_outputModule);

__webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = document.querySelector('#root');

var firstInput = document.createElement('input');
var secondInput = document.createElement('input');
var inputsDiv = document.createElement('div');
var buttonsDiv = document.createElement('div');
var result = document.createElement('div');

firstInput.className = 'first';
secondInput.className = 'second';
result.className = 'result';
buttonsDiv.className = 'buttonsDiv';
result.className = 'result';
result.innerText = 'Enter values';

var operationsId = ['addition', 'subtraction', 'multiplication', 'division'];
var operationsInnerText = ['+', '-', '*', '/'];

for (var i = 0; i < operationsId.length; i++) {
    var button = document.createElement('button');
    button.innerText = operationsInnerText[i];
    button.id = operationsId[i];
    buttonsDiv.appendChild(button);
}

inputsDiv.appendChild(firstInput);
inputsDiv.appendChild(secondInput);
root.appendChild(inputsDiv);
root.appendChild(buttonsDiv);
root.appendChild(result);

var buttonsClick = document.querySelectorAll('button');
buttonsClick.forEach(function (button) {
    button.addEventListener('click', function (event) {
        var firstValue = document.querySelector('.first').value;
        var secondValue = document.querySelector('.second').value;

        result.innerText = (0, _outputModule2.default)(firstValue, secondValue, event.target.id);
    });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (first, second, operation) {
    if (!first || !second) {
        return 'Invalid value!';
    }

    return 'Result: ' + _calculatingModule.calculator[operation](first, second);
};

var _calculatingModule = __webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var calculator = exports.calculator = {

    subtraction: function subtraction(first, second) {
        return parseFloat(first) - parseFloat(second);
    },

    addition: function addition(first, second) {
        return parseFloat(first) + parseFloat(second);
    },

    multiplication: function multiplication(first, second) {
        return parseFloat(first) * parseFloat(second);
    },

    division: function division(first, second) {
        if (parseFloat(second) === 0) {
            return 'Devision by zero?';
        }
        return parseFloat(first) / parseFloat(second);
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);