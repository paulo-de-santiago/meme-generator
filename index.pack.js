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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\paulo\\Documents\\meme-generator\\meme-generator\\node_modules\\react\\index.js'");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = App;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(6);

var _Header2 = _interopRequireDefault(_Header);

var _Meme = __webpack_require__(7);

var _Meme2 = _interopRequireDefault(_Meme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Challenge: 
 * - Create a Meme component.
 * - Inside the Meme component, render a styled form
 *   with our 2 inputs and the button.
 * - Don't worry about adding any functionality yet
 */
function App() {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(_Meme2.default, null)
    );
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\paulo\\Documents\\meme-generator\\meme-generator\\node_modules\\react-dom\\index.js'");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Header;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header() {
    return _react2.default.createElement(
        "header",
        { className: "header" },
        _react2.default.createElement("img", {
            src: "./images/troll-face.png",
            className: "header--image"
        }),
        _react2.default.createElement(
            "h2",
            { className: "header--title" },
            "Meme Generator"
        ),
        _react2.default.createElement(
            "h4",
            { className: "header--project" },
            "React Course - Project 3"
        )
    );
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: C:/Users/paulo/Documents/meme-generator/meme-generator/components/Meme.js: Unexpected token (35:6)\n\n\u001b[0m \u001b[90m 33 | \u001b[39m    \u001b[36mconst\u001b[39m url \u001b[33m=\u001b[39m allMemes[randomNumber]\u001b[33m;\u001b[39m\n \u001b[90m 34 | \u001b[39m    setMeme((prevMeme) \u001b[33m=>\u001b[39m ({\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 35 | \u001b[39m      \u001b[33m...\u001b[39mprevMeme\u001b[33m,\u001b[39m\n \u001b[90m    | \u001b[39m      \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 36 | \u001b[39m      randomImage\u001b[33m:\u001b[39m url\u001b[33m,\u001b[39m\n \u001b[90m 37 | \u001b[39m    }))\u001b[33m;\u001b[39m\n \u001b[90m 38 | \u001b[39m  }\u001b[0m\n");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(4);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById("root"));

/***/ })
/******/ ]);