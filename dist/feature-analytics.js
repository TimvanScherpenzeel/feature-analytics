(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("FeatureAnalytics", [], factory);
	else if(typeof exports === 'object')
		exports["FeatureAnalytics"] = factory();
	else
		root["FeatureAnalytics"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: register */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (immutable) */ __webpack_exports__[\"register\"] = register;\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__analytics__ = __webpack_require__(/*! ./analytics */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities_isValidUACode__ = __webpack_require__(/*! ./utilities/isValidUACode */ 22);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n// Analytics\n\n\n// Utilities\n\n\nfunction register() {\n\tvar options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n\tthis.verbose = false;\n\tthis.log = false;\n\n\t_extends(this, options);\n\n\tif (this.trackingId === undefined || !Object(__WEBPACK_IMPORTED_MODULE_1__utilities_isValidUACode__[\"a\" /* default */])(this.trackingId)) {\n\t\tconsole.error('Please provide a valid UA code (UA-XXXXXXXX-YY)');\n\t\treturn;\n\t}\n\n\t__WEBPACK_IMPORTED_MODULE_0__analytics__[\"a\" /* analytics */].initialize(this.trackingId);\n\t__WEBPACK_IMPORTED_MODULE_0__analytics__[\"a\" /* analytics */].register(this.verbose, this.log);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBbmFseXRpY3NcbmltcG9ydCB7IGFuYWx5dGljcyB9IGZyb20gJy4vYW5hbHl0aWNzJztcblxuLy8gVXRpbGl0aWVzXG5pbXBvcnQgaXNWYWxpZFVBQ29kZSBmcm9tICcuL3V0aWxpdGllcy9pc1ZhbGlkVUFDb2RlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyKG9wdGlvbnMgPSB7fSkge1xuXHR0aGlzLnZlcmJvc2UgPSBmYWxzZTtcblx0dGhpcy5sb2cgPSBmYWxzZTtcblxuXHRPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xuXG5cdGlmICh0aGlzLnRyYWNraW5nSWQgPT09IHVuZGVmaW5lZCB8fCAhaXNWYWxpZFVBQ29kZSh0aGlzLnRyYWNraW5nSWQpKSB7XG5cdFx0Y29uc29sZS5lcnJvcignUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBVQSBjb2RlIChVQS1YWFhYWFhYWC1ZWSknKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhbmFseXRpY3MuaW5pdGlhbGl6ZSh0aGlzLnRyYWNraW5nSWQpO1xuXHRhbmFseXRpY3MucmVnaXN0ZXIodGhpcy52ZXJib3NlLCB0aGlzLmxvZyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./analytics/index.js ***!
  \****************************/
/*! exports provided: analytics */
/*! exports used: analytics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return analytics; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_record__ = __webpack_require__(/*! ../utilities/record */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__features__ = __webpack_require__(/*! ../features */ 3);\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _this = this;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n// Analytics\n\n\n// Features\n\n\nvar createEventObject = function createEventObject() {\n\tvar options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n\t_extends(_this, options);\n\n\tswitch (_typeof(_this.value)) {\n\t\tcase 'object':\n\t\t\tObject.keys(_this.value).forEach(function (value) {\n\t\t\t\tif (typeof _this.value[value] !== 'string' && _this.value[value] !== undefined) {\n\t\t\t\t\tObject.keys(_this.value[value]).forEach(function (key) {\n\t\t\t\t\t\tif (_this.log) {\n\t\t\t\t\t\t\tconsole.log({\n\t\t\t\t\t\t\t\teventCategory: '' + _this.category,\n\t\t\t\t\t\t\t\teventAction: '' + value,\n\t\t\t\t\t\t\t\teventValue: '' + key\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tObject(__WEBPACK_IMPORTED_MODULE_0__utilities_record__[\"a\" /* record */])({\n\t\t\t\t\t\t\teventCategory: '' + _this.category,\n\t\t\t\t\t\t\teventAction: '' + value,\n\t\t\t\t\t\t\teventValue: '' + key\n\t\t\t\t\t\t});\n\t\t\t\t\t});\n\t\t\t\t}\n\n\t\t\t\tif (typeof _this.value[value] === 'string') {\n\t\t\t\t\tif (_this.log) {\n\t\t\t\t\t\tconsole.log({\n\t\t\t\t\t\t\teventCategory: '' + _this.category,\n\t\t\t\t\t\t\teventAction: '' + value,\n\t\t\t\t\t\t\teventValue: '' + _this.value[value]\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\n\t\t\t\t\tObject(__WEBPACK_IMPORTED_MODULE_0__utilities_record__[\"a\" /* record */])({\n\t\t\t\t\t\teventCategory: '' + _this.category,\n\t\t\t\t\t\teventAction: '' + value,\n\t\t\t\t\t\teventValue: '' + _this.value[value]\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t});\n\n\t\t\tbreak;\n\t\tcase 'boolean':\n\t\tcase 'number':\n\t\t\tif (_this.log) {\n\t\t\t\tconsole.log({\n\t\t\t\t\teventCategory: '' + _this.category,\n\t\t\t\t\teventAction: '' + _this.feature,\n\t\t\t\t\teventValue: '' + _this.value\n\t\t\t\t});\n\t\t\t}\n\n\t\t\tObject(__WEBPACK_IMPORTED_MODULE_0__utilities_record__[\"a\" /* record */])({\n\t\t\t\teventCategory: '' + _this.category,\n\t\t\t\teventAction: '' + _this.feature,\n\t\t\t\teventValue: '' + _this.value\n\t\t\t});\n\n\t\t\tbreak;\n\t\tcase 'string':\n\t\t\tif (_this.log) {\n\t\t\t\tconsole.log({\n\t\t\t\t\teventCategory: '' + _this.category,\n\t\t\t\t\teventAction: '' + _this.feature,\n\t\t\t\t\teventLabel: '' + _this.value\n\t\t\t\t});\n\t\t\t}\n\n\t\t\tObject(__WEBPACK_IMPORTED_MODULE_0__utilities_record__[\"a\" /* record */])({\n\t\t\t\teventCategory: '' + _this.category,\n\t\t\t\teventAction: '' + _this.feature,\n\t\t\t\teventLabel: '' + _this.value\n\t\t\t});\n\n\t\t\tbreak;\n\t\tdefault:\n\t\t\tif (_this.log && _this.value !== undefined) {\n\t\t\t\tconsole.warn('Value of type: ' + _this.value + ' could not be recognized');\n\t\t\t}\n\n\t\t\tbreak;\n\t}\n};\n\nvar analytics = {\n\tinitialize: function initialize(trackingId) {\n\t\t// Inject Google Analytics\n\n\t\t/* eslint-disable */\n\t\t(function (i, s, o, g, r, a, m) {\n\t\t\ti['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {\n\t\t\t\t(i[r].q = i[r].q || []).push(arguments);\n\t\t\t}, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);\n\t\t})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'GA_FEATURE_ANALYTICS');\n\t\twindow.GA_FEATURE_ANALYTICS('create', '' + trackingId, 'auto');\n\t\twindow.GA_FEATURE_ANALYTICS('send', 'pageview');\n\t\t/* eslint-enable */\n\t},\n\n\tregister: function register() {\n\t\tvar verbose = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\t\tvar log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n\n\t\tvar features = Object(__WEBPACK_IMPORTED_MODULE_1__features__[\"a\" /* getFeatures */])(verbose);\n\n\t\tObject.keys(features).forEach(function (category) {\n\t\t\tObject.keys(features[category]).forEach(function (feature) {\n\t\t\t\tcreateEventObject({\n\t\t\t\t\tcategory: category,\n\t\t\t\t\tfeature: feature,\n\t\t\t\t\tvalue: features[category][feature],\n\t\t\t\t\tlog: log\n\t\t\t\t});\n\t\t\t});\n\t\t});\n\t}\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvYW5hbHl0aWNzL2luZGV4LmpzPzRiMjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQW5hbHl0aWNzXG5pbXBvcnQgeyByZWNvcmQgfSBmcm9tICcuLi91dGlsaXRpZXMvcmVjb3JkJztcblxuLy8gRmVhdHVyZXNcbmltcG9ydCB7IGdldEZlYXR1cmVzIH0gZnJvbSAnLi4vZmVhdHVyZXMnO1xuXG5jb25zdCBjcmVhdGVFdmVudE9iamVjdCA9IChvcHRpb25zID0ge30pID0+IHtcblx0T2JqZWN0LmFzc2lnbih0aGlzLCBvcHRpb25zKTtcblxuXHRzd2l0Y2ggKHR5cGVvZiB0aGlzLnZhbHVlKSB7XG5cdFx0Y2FzZSAnb2JqZWN0Jzpcblx0XHRcdE9iamVjdC5rZXlzKHRoaXMudmFsdWUpLmZvckVhY2goKHZhbHVlKSA9PiB7XG5cdFx0XHRcdGlmICh0eXBlb2YgdGhpcy52YWx1ZVt2YWx1ZV0gIT09ICdzdHJpbmcnICYmIHRoaXMudmFsdWVbdmFsdWVdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRPYmplY3Qua2V5cyh0aGlzLnZhbHVlW3ZhbHVlXSkuZm9yRWFjaCgoa2V5KSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5sb2cpIHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coe1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50Q2F0ZWdvcnk6IGAke3RoaXMuY2F0ZWdvcnl9YCxcblx0XHRcdFx0XHRcdFx0XHRldmVudEFjdGlvbjogYCR7dmFsdWV9YCxcblx0XHRcdFx0XHRcdFx0XHRldmVudFZhbHVlOiBgJHtrZXl9YCxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJlY29yZCh7XG5cdFx0XHRcdFx0XHRcdGV2ZW50Q2F0ZWdvcnk6IGAke3RoaXMuY2F0ZWdvcnl9YCxcblx0XHRcdFx0XHRcdFx0ZXZlbnRBY3Rpb246IGAke3ZhbHVlfWAsXG5cdFx0XHRcdFx0XHRcdGV2ZW50VmFsdWU6IGAke2tleX1gLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodHlwZW9mIHRoaXMudmFsdWVbdmFsdWVdID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdGlmICh0aGlzLmxvZykge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coe1xuXHRcdFx0XHRcdFx0XHRldmVudENhdGVnb3J5OiBgJHt0aGlzLmNhdGVnb3J5fWAsXG5cdFx0XHRcdFx0XHRcdGV2ZW50QWN0aW9uOiBgJHt2YWx1ZX1gLFxuXHRcdFx0XHRcdFx0XHRldmVudFZhbHVlOiBgJHt0aGlzLnZhbHVlW3ZhbHVlXX1gLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmVjb3JkKHtcblx0XHRcdFx0XHRcdGV2ZW50Q2F0ZWdvcnk6IGAke3RoaXMuY2F0ZWdvcnl9YCxcblx0XHRcdFx0XHRcdGV2ZW50QWN0aW9uOiBgJHt2YWx1ZX1gLFxuXHRcdFx0XHRcdFx0ZXZlbnRWYWx1ZTogYCR7dGhpcy52YWx1ZVt2YWx1ZV19YCxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJ2Jvb2xlYW4nOlxuXHRcdGNhc2UgJ251bWJlcic6XG5cdFx0XHRpZiAodGhpcy5sb2cpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coe1xuXHRcdFx0XHRcdGV2ZW50Q2F0ZWdvcnk6IGAke3RoaXMuY2F0ZWdvcnl9YCxcblx0XHRcdFx0XHRldmVudEFjdGlvbjogYCR7dGhpcy5mZWF0dXJlfWAsXG5cdFx0XHRcdFx0ZXZlbnRWYWx1ZTogYCR7dGhpcy52YWx1ZX1gLFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0cmVjb3JkKHtcblx0XHRcdFx0ZXZlbnRDYXRlZ29yeTogYCR7dGhpcy5jYXRlZ29yeX1gLFxuXHRcdFx0XHRldmVudEFjdGlvbjogYCR7dGhpcy5mZWF0dXJlfWAsXG5cdFx0XHRcdGV2ZW50VmFsdWU6IGAke3RoaXMudmFsdWV9YCxcblx0XHRcdH0pO1xuXG5cdFx0XHRicmVhaztcblx0XHRjYXNlICdzdHJpbmcnOlxuXHRcdFx0aWYgKHRoaXMubG9nKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHtcblx0XHRcdFx0XHRldmVudENhdGVnb3J5OiBgJHt0aGlzLmNhdGVnb3J5fWAsXG5cdFx0XHRcdFx0ZXZlbnRBY3Rpb246IGAke3RoaXMuZmVhdHVyZX1gLFxuXHRcdFx0XHRcdGV2ZW50TGFiZWw6IGAke3RoaXMudmFsdWV9YCxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdHJlY29yZCh7XG5cdFx0XHRcdGV2ZW50Q2F0ZWdvcnk6IGAke3RoaXMuY2F0ZWdvcnl9YCxcblx0XHRcdFx0ZXZlbnRBY3Rpb246IGAke3RoaXMuZmVhdHVyZX1gLFxuXHRcdFx0XHRldmVudExhYmVsOiBgJHt0aGlzLnZhbHVlfWAsXG5cdFx0XHR9KTtcblxuXHRcdFx0YnJlYWs7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdGlmICh0aGlzLmxvZyAmJiB0aGlzLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKGBWYWx1ZSBvZiB0eXBlOiAke3RoaXMudmFsdWV9IGNvdWxkIG5vdCBiZSByZWNvZ25pemVkYCk7XG5cdFx0XHR9XG5cblx0XHRcdGJyZWFrO1xuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgYW5hbHl0aWNzID0ge1xuXHRpbml0aWFsaXplOiAodHJhY2tpbmdJZCkgPT4ge1xuXHRcdC8vIEluamVjdCBHb29nbGUgQW5hbHl0aWNzXG5cblx0XHQvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXHRcdChmdW5jdGlvbihpLHMsbyxnLHIsYSxtKXtpWydHb29nbGVBbmFseXRpY3NPYmplY3QnXT1yO2lbcl09aVtyXXx8ZnVuY3Rpb24oKXtcblx0XHQoaVtyXS5xPWlbcl0ucXx8W10pLnB1c2goYXJndW1lbnRzKX0saVtyXS5sPTEqbmV3IERhdGUoKTthPXMuY3JlYXRlRWxlbWVudChvKSxcblx0XHRtPXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUobylbMF07YS5hc3luYz0xO2Euc3JjPWc7bS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLG0pXG5cdFx0fSkod2luZG93LGRvY3VtZW50LCdzY3JpcHQnLCdodHRwczovL3d3dy5nb29nbGUtYW5hbHl0aWNzLmNvbS9hbmFseXRpY3MuanMnLCdHQV9GRUFUVVJFX0FOQUxZVElDUycpO1xuXHRcdHdpbmRvdy5HQV9GRUFUVVJFX0FOQUxZVElDUygnY3JlYXRlJywgYCR7dHJhY2tpbmdJZH1gLCAnYXV0bycpO1xuXHRcdHdpbmRvdy5HQV9GRUFUVVJFX0FOQUxZVElDUygnc2VuZCcsICdwYWdldmlldycpO1xuXHRcdC8qIGVzbGludC1lbmFibGUgKi9cblx0fSxcblxuXHRyZWdpc3RlcjogKHZlcmJvc2UgPSBmYWxzZSwgbG9nID0gZmFsc2UpID0+IHtcblx0XHRjb25zdCBmZWF0dXJlcyA9IGdldEZlYXR1cmVzKHZlcmJvc2UpO1xuXG5cdFx0T2JqZWN0LmtleXMoZmVhdHVyZXMpLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG5cdFx0XHRPYmplY3Qua2V5cyhmZWF0dXJlc1tjYXRlZ29yeV0pLmZvckVhY2goKGZlYXR1cmUpID0+IHtcblx0XHRcdFx0Y3JlYXRlRXZlbnRPYmplY3Qoe1xuXHRcdFx0XHRcdGNhdGVnb3J5LFxuXHRcdFx0XHRcdGZlYXR1cmUsXG5cdFx0XHRcdFx0dmFsdWU6IGZlYXR1cmVzW2NhdGVnb3J5XVtmZWF0dXJlXSxcblx0XHRcdFx0XHRsb2csXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9hbmFseXRpY3MvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3RUE7QUErRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUEzQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*****************************!*\
  !*** ./utilities/record.js ***!
  \*****************************/
/*! exports provided: record */
/*! exports used: record */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return record; });\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar record = function record() {\n\tvar options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n\tvar defaults = {\n\t\thitType: 'event',\n\t\tnonInteraction: true\n\t};\n\n\tvar eventObject = _extends({}, defaults, options);\n\n\tif (window.GA_FEATURE_ANALYTICS !== undefined && typeof window.GA_FEATURE_ANALYTICS === 'function') {\n\t\tvar callback = function callback() {\n\t\t\twindow.GA_FEATURE_ANALYTICS('send', eventObject);\n\t\t};\n\n\t\tif ('requestIdleCallback' in window) {\n\t\t\twindow.requestIdleCallback(callback);\n\t\t} else {\n\t\t\tcallback();\n\t\t}\n\t} else {\n\t\tconsole.error('Google Feature Analytics has not been initialized');\n\t}\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbGl0aWVzL3JlY29yZC5qcz8wNDMxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByZWNvcmQgPSAob3B0aW9ucyA9IHt9KSA9PiB7XG5cdGNvbnN0IGRlZmF1bHRzID0ge1xuXHRcdGhpdFR5cGU6ICdldmVudCcsXG5cdFx0bm9uSW50ZXJhY3Rpb246IHRydWUsXG5cdH07XG5cblx0Y29uc3QgZXZlbnRPYmplY3QgPSB7IC4uLmRlZmF1bHRzLCAuLi5vcHRpb25zIH07XG5cblx0aWYgKHdpbmRvdy5HQV9GRUFUVVJFX0FOQUxZVElDUyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB3aW5kb3cuR0FfRkVBVFVSRV9BTkFMWVRJQ1MgPT09ICdmdW5jdGlvbicpIHtcblx0XHRjb25zdCBjYWxsYmFjayA9ICgpID0+IHtcblx0XHRcdHdpbmRvdy5HQV9GRUFUVVJFX0FOQUxZVElDUygnc2VuZCcsIGV2ZW50T2JqZWN0KTtcblx0XHR9O1xuXG5cdFx0aWYgKCdyZXF1ZXN0SWRsZUNhbGxiYWNrJyBpbiB3aW5kb3cpIHtcblx0XHRcdHdpbmRvdy5yZXF1ZXN0SWRsZUNhbGxiYWNrKGNhbGxiYWNrKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y2FsbGJhY2soKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Y29uc29sZS5lcnJvcignR29vZ2xlIEZlYXR1cmUgQW5hbHl0aWNzIGhhcyBub3QgYmVlbiBpbml0aWFsaXplZCcpO1xuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy91dGlsaXRpZXMvcmVjb3JkLmpzIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!***************************!*\
  !*** ./features/index.js ***!
  \***************************/
/*! exports provided: getFeatures */
/*! exports used: getFeatures */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return getFeatures; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__browserFeatures_getWebGL2Features__ = __webpack_require__(/*! ./browserFeatures/getWebGL2Features */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__browserFeatures_getWebGLFeatures__ = __webpack_require__(/*! ./browserFeatures/getWebGLFeatures */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__browserFeatures_isGamepadSupported__ = __webpack_require__(/*! ./browserFeatures/isGamepadSupported */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__browserFeatures_isRequestIdleCallbackSupported__ = __webpack_require__(/*! ./browserFeatures/isRequestIdleCallbackSupported */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__browserFeatures_isServiceWorkerSupported__ = __webpack_require__(/*! ./browserFeatures/isServiceWorkerSupported */ 8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__browserFeatures_isWebAssemblySupported__ = __webpack_require__(/*! ./browserFeatures/isWebAssemblySupported */ 9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__browserFeatures_isWebAudioSupported__ = __webpack_require__(/*! ./browserFeatures/isWebAudioSupported */ 10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__browserFeatures_isWebGL2Supported__ = __webpack_require__(/*! ./browserFeatures/isWebGL2Supported */ 11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__browserFeatures_isWebGLSupported__ = __webpack_require__(/*! ./browserFeatures/isWebGLSupported */ 12);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__browserFeatures_isWebRTCSupported__ = __webpack_require__(/*! ./browserFeatures/isWebRTCSupported */ 13);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__browserFeatures_isWebSocketSupported__ = __webpack_require__(/*! ./browserFeatures/isWebSocketSupported */ 14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__browserFeatures_isWebVRSupported__ = __webpack_require__(/*! ./browserFeatures/isWebVRSupported */ 15);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__browserFeatures_isWebWorkerSupported__ = __webpack_require__(/*! ./browserFeatures/isWebWorkerSupported */ 16);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__browserSettings_isCookieEnabled__ = __webpack_require__(/*! ./browserSettings/isCookieEnabled */ 17);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__browserSettings_isDoNotTrackEnabled__ = __webpack_require__(/*! ./browserSettings/isDoNotTrackEnabled */ 18);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__hardwareFeatures_getDevicePixelRatio__ = __webpack_require__(/*! ./hardwareFeatures/getDevicePixelRatio */ 19);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__hardwareFeatures_getEndianness__ = __webpack_require__(/*! ./hardwareFeatures/getEndianness */ 20);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__hardwareFeatures_getWebWorkerPoolSize__ = __webpack_require__(/*! ./hardwareFeatures/getWebWorkerPoolSize */ 21);\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\n// Browser features\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// Browser settings\n\n\n\n// Hardware features\n\n\n\n\n// Features\nvar getFeatures = function getFeatures() {\n\tvar verbose = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n\t// Default features\n\tvar features = {\n\t\t// Browser features\n\t\tbrowserFeatures: {\n\t\t\tisGamepadSupported: __WEBPACK_IMPORTED_MODULE_2__browserFeatures_isGamepadSupported__[\"a\" /* default */],\n\t\t\tisRequestIdleCallbackSupported: __WEBPACK_IMPORTED_MODULE_3__browserFeatures_isRequestIdleCallbackSupported__[\"a\" /* default */],\n\t\t\tisServiceWorkerSupported: __WEBPACK_IMPORTED_MODULE_4__browserFeatures_isServiceWorkerSupported__[\"a\" /* default */],\n\t\t\tisWebAssemblySupported: __WEBPACK_IMPORTED_MODULE_5__browserFeatures_isWebAssemblySupported__[\"a\" /* default */],\n\t\t\tisWebAudioSupported: __WEBPACK_IMPORTED_MODULE_6__browserFeatures_isWebAudioSupported__[\"a\" /* default */],\n\t\t\tisWebGL2Supported: __WEBPACK_IMPORTED_MODULE_7__browserFeatures_isWebGL2Supported__[\"a\" /* default */],\n\t\t\tisWebGLSupported: __WEBPACK_IMPORTED_MODULE_8__browserFeatures_isWebGLSupported__[\"a\" /* default */],\n\t\t\tisWebRTCSupported: __WEBPACK_IMPORTED_MODULE_9__browserFeatures_isWebRTCSupported__[\"a\" /* default */],\n\t\t\tisWebSocketSupported: __WEBPACK_IMPORTED_MODULE_10__browserFeatures_isWebSocketSupported__[\"a\" /* default */],\n\t\t\tisWebVRSupported: __WEBPACK_IMPORTED_MODULE_11__browserFeatures_isWebVRSupported__[\"a\" /* default */],\n\t\t\tisWebWorkerSupported: __WEBPACK_IMPORTED_MODULE_12__browserFeatures_isWebWorkerSupported__[\"a\" /* default */]\n\t\t},\n\n\t\t// Browser settings\n\t\tbrowserSettings: {\n\t\t\tisCookieEnabled: __WEBPACK_IMPORTED_MODULE_13__browserSettings_isCookieEnabled__[\"a\" /* default */],\n\t\t\tisDoNotTrackEnabled: __WEBPACK_IMPORTED_MODULE_14__browserSettings_isDoNotTrackEnabled__[\"a\" /* default */]\n\t\t},\n\n\t\t// Hardware features\n\t\thardwareFeatures: {\n\t\t\tdevicePixelRatio: __WEBPACK_IMPORTED_MODULE_15__hardwareFeatures_getDevicePixelRatio__[\"a\" /* default */],\n\t\t\tworkerPoolSize: __WEBPACK_IMPORTED_MODULE_17__hardwareFeatures_getWebWorkerPoolSize__[\"a\" /* default */]\n\t\t}\n\t};\n\n\t// Verbose features\n\tif (verbose) {\n\t\tfeatures.browserFeatures = _extends({}, features.browserFeatures, {\n\t\t\t// Browser features\n\t\t\twebGL2Features: __WEBPACK_IMPORTED_MODULE_0__browserFeatures_getWebGL2Features__[\"a\" /* default */],\n\t\t\twebGLFeatures: __WEBPACK_IMPORTED_MODULE_1__browserFeatures_getWebGLFeatures__[\"a\" /* default */]\n\t\t});\n\n\t\tfeatures.hardwareFeatures = _extends({}, features.hardwareFeatures, {\n\t\t\t// Hardware features\n\t\t\tendianness: __WEBPACK_IMPORTED_MODULE_16__hardwareFeatures_getEndianness__[\"a\" /* default */]\n\t\t});\n\t}\n\n\treturn features;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvaW5kZXguanM/NzM1OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCcm93c2VyIGZlYXR1cmVzXG5pbXBvcnQgZ2V0V2ViR0wyRmVhdHVyZXMgZnJvbSAnLi9icm93c2VyRmVhdHVyZXMvZ2V0V2ViR0wyRmVhdHVyZXMnO1xuaW1wb3J0IGdldFdlYkdMRmVhdHVyZXMgZnJvbSAnLi9icm93c2VyRmVhdHVyZXMvZ2V0V2ViR0xGZWF0dXJlcyc7XG5pbXBvcnQgaXNHYW1lcGFkU3VwcG9ydGVkIGZyb20gJy4vYnJvd3NlckZlYXR1cmVzL2lzR2FtZXBhZFN1cHBvcnRlZCc7XG5pbXBvcnQgaXNSZXF1ZXN0SWRsZUNhbGxiYWNrU3VwcG9ydGVkIGZyb20gJy4vYnJvd3NlckZlYXR1cmVzL2lzUmVxdWVzdElkbGVDYWxsYmFja1N1cHBvcnRlZCc7XG5pbXBvcnQgaXNTZXJ2aWNlV29ya2VyU3VwcG9ydGVkIGZyb20gJy4vYnJvd3NlckZlYXR1cmVzL2lzU2VydmljZVdvcmtlclN1cHBvcnRlZCc7XG5pbXBvcnQgaXNXZWJBc3NlbWJseVN1cHBvcnRlZCBmcm9tICcuL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYkFzc2VtYmx5U3VwcG9ydGVkJztcbmltcG9ydCBpc1dlYkF1ZGlvU3VwcG9ydGVkIGZyb20gJy4vYnJvd3NlckZlYXR1cmVzL2lzV2ViQXVkaW9TdXBwb3J0ZWQnO1xuaW1wb3J0IGlzV2ViR0wyU3VwcG9ydGVkIGZyb20gJy4vYnJvd3NlckZlYXR1cmVzL2lzV2ViR0wyU3VwcG9ydGVkJztcbmltcG9ydCBpc1dlYkdMU3VwcG9ydGVkIGZyb20gJy4vYnJvd3NlckZlYXR1cmVzL2lzV2ViR0xTdXBwb3J0ZWQnO1xuaW1wb3J0IGlzV2ViUlRDU3VwcG9ydGVkIGZyb20gJy4vYnJvd3NlckZlYXR1cmVzL2lzV2ViUlRDU3VwcG9ydGVkJztcbmltcG9ydCBpc1dlYlNvY2tldFN1cHBvcnRlZCBmcm9tICcuL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYlNvY2tldFN1cHBvcnRlZCc7XG5pbXBvcnQgaXNXZWJWUlN1cHBvcnRlZCBmcm9tICcuL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYlZSU3VwcG9ydGVkJztcbmltcG9ydCBpc1dlYldvcmtlclN1cHBvcnRlZCBmcm9tICcuL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYldvcmtlclN1cHBvcnRlZCc7XG5cbi8vIEJyb3dzZXIgc2V0dGluZ3NcbmltcG9ydCBpc0Nvb2tpZUVuYWJsZWQgZnJvbSAnLi9icm93c2VyU2V0dGluZ3MvaXNDb29raWVFbmFibGVkJztcbmltcG9ydCBpc0RvTm90VHJhY2tFbmFibGVkIGZyb20gJy4vYnJvd3NlclNldHRpbmdzL2lzRG9Ob3RUcmFja0VuYWJsZWQnO1xuXG4vLyBIYXJkd2FyZSBmZWF0dXJlc1xuaW1wb3J0IGdldERldmljZVBpeGVsUmF0aW8gZnJvbSAnLi9oYXJkd2FyZUZlYXR1cmVzL2dldERldmljZVBpeGVsUmF0aW8nO1xuaW1wb3J0IGdldEVuZGlhbm5lc3MgZnJvbSAnLi9oYXJkd2FyZUZlYXR1cmVzL2dldEVuZGlhbm5lc3MnO1xuaW1wb3J0IGdldFdlYldvcmtlclBvb2xTaXplIGZyb20gJy4vaGFyZHdhcmVGZWF0dXJlcy9nZXRXZWJXb3JrZXJQb29sU2l6ZSc7XG5cbi8vIEZlYXR1cmVzXG5leHBvcnQgY29uc3QgZ2V0RmVhdHVyZXMgPSAodmVyYm9zZSA9IGZhbHNlKSA9PiB7XG5cdC8vIERlZmF1bHQgZmVhdHVyZXNcblx0Y29uc3QgZmVhdHVyZXMgPSB7XG5cdFx0Ly8gQnJvd3NlciBmZWF0dXJlc1xuXHRcdGJyb3dzZXJGZWF0dXJlczoge1xuXHRcdFx0aXNHYW1lcGFkU3VwcG9ydGVkLFxuXHRcdFx0aXNSZXF1ZXN0SWRsZUNhbGxiYWNrU3VwcG9ydGVkLFxuXHRcdFx0aXNTZXJ2aWNlV29ya2VyU3VwcG9ydGVkLFxuXHRcdFx0aXNXZWJBc3NlbWJseVN1cHBvcnRlZCxcblx0XHRcdGlzV2ViQXVkaW9TdXBwb3J0ZWQsXG5cdFx0XHRpc1dlYkdMMlN1cHBvcnRlZCxcblx0XHRcdGlzV2ViR0xTdXBwb3J0ZWQsXG5cdFx0XHRpc1dlYlJUQ1N1cHBvcnRlZCxcblx0XHRcdGlzV2ViU29ja2V0U3VwcG9ydGVkLFxuXHRcdFx0aXNXZWJWUlN1cHBvcnRlZCxcblx0XHRcdGlzV2ViV29ya2VyU3VwcG9ydGVkLFxuXHRcdH0sXG5cblx0XHQvLyBCcm93c2VyIHNldHRpbmdzXG5cdFx0YnJvd3NlclNldHRpbmdzOiB7XG5cdFx0XHRpc0Nvb2tpZUVuYWJsZWQsXG5cdFx0XHRpc0RvTm90VHJhY2tFbmFibGVkLFxuXHRcdH0sXG5cblx0XHQvLyBIYXJkd2FyZSBmZWF0dXJlc1xuXHRcdGhhcmR3YXJlRmVhdHVyZXM6IHtcblx0XHRcdGRldmljZVBpeGVsUmF0aW86IGdldERldmljZVBpeGVsUmF0aW8sXG5cdFx0XHR3b3JrZXJQb29sU2l6ZTogZ2V0V2ViV29ya2VyUG9vbFNpemUsXG5cdFx0fSxcblx0fTtcblxuXHQvLyBWZXJib3NlIGZlYXR1cmVzXG5cdGlmICh2ZXJib3NlKSB7XG5cdFx0ZmVhdHVyZXMuYnJvd3NlckZlYXR1cmVzID0ge1xuXHRcdFx0Li4uZmVhdHVyZXMuYnJvd3NlckZlYXR1cmVzLFxuXHRcdFx0Li4ue1xuXHRcdFx0XHQvLyBCcm93c2VyIGZlYXR1cmVzXG5cdFx0XHRcdHdlYkdMMkZlYXR1cmVzOiBnZXRXZWJHTDJGZWF0dXJlcyxcblx0XHRcdFx0d2ViR0xGZWF0dXJlczogZ2V0V2ViR0xGZWF0dXJlcyxcblx0XHRcdH0sXG5cdFx0fTtcblxuXHRcdGZlYXR1cmVzLmhhcmR3YXJlRmVhdHVyZXMgPSB7XG5cdFx0XHQuLi5mZWF0dXJlcy5oYXJkd2FyZUZlYXR1cmVzLFxuXHRcdFx0Li4ue1xuXHRcdFx0XHQvLyBIYXJkd2FyZSBmZWF0dXJlc1xuXHRcdFx0XHRlbmRpYW5uZXNzOiBnZXRFbmRpYW5uZXNzLFxuXHRcdFx0fSxcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGZlYXR1cmVzO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUF2QkE7QUFDQTtBQTRCQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBTUE7QUFHQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*******************************************************!*\
  !*** ./features/browserFeatures/getWebGL2Features.js ***!
  \*******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tvar canvas = document.createElement('canvas');\n\tvar gl = canvas.getContext('webgl2');\n\n\t/* eslint-disable no-undef */\n\tif (!gl || !gl instanceof WebGL2RenderingContext) return false;\n\t/* eslint-enable no-undef */\n\n\tvar glExtensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info');\n\n\tvar features = {\n\t\trenderer: gl.getParameter(gl.RENDERER),\n\t\tvendor: gl.getParameter(gl.VENDOR),\n\t\tversion: gl.getParameter(gl.VERSION),\n\t\tshaderVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),\n\t\trendererUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL),\n\t\tvendorUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL),\n\t\tsupportedExtensions: gl.getSupportedExtensions().reduce(function (obj, key) {\n\t\t\treturn _extends({}, obj, _defineProperty({}, key, true));\n\t\t}, {})\n\t};\n\n\treturn features;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvYnJvd3NlckZlYXR1cmVzL2dldFdlYkdMMkZlYXR1cmVzLmpzP2UxY2QiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdGNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsMicpO1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5cdGlmICghZ2wgfHwgIWdsIGluc3RhbmNlb2YgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCkgcmV0dXJuIGZhbHNlO1xuXHQvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVmICovXG5cblx0Y29uc3QgZ2xFeHRlbnNpb25EZWJ1Z1JlbmRlcmVySW5mbyA9IGdsLmdldEV4dGVuc2lvbignV0VCR0xfZGVidWdfcmVuZGVyZXJfaW5mbycpO1xuXG5cdGNvbnN0IGZlYXR1cmVzID0ge1xuXHRcdHJlbmRlcmVyOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuUkVOREVSRVIpLFxuXHRcdHZlbmRvcjogZ2wuZ2V0UGFyYW1ldGVyKGdsLlZFTkRPUiksXG5cdFx0dmVyc2lvbjogZ2wuZ2V0UGFyYW1ldGVyKGdsLlZFUlNJT04pLFxuXHRcdHNoYWRlclZlcnNpb246IGdsLmdldFBhcmFtZXRlcihnbC5TSEFESU5HX0xBTkdVQUdFX1ZFUlNJT04pLFxuXHRcdHJlbmRlcmVyVW5tYXNrZWQ6IGdsRXh0ZW5zaW9uRGVidWdSZW5kZXJlckluZm8gJiYgZ2wuZ2V0UGFyYW1ldGVyKGdsRXh0ZW5zaW9uRGVidWdSZW5kZXJlckluZm8uVU5NQVNLRURfUkVOREVSRVJfV0VCR0wpLFxuXHRcdHZlbmRvclVubWFza2VkOiBnbEV4dGVuc2lvbkRlYnVnUmVuZGVyZXJJbmZvICYmIGdsLmdldFBhcmFtZXRlcihnbEV4dGVuc2lvbkRlYnVnUmVuZGVyZXJJbmZvLlVOTUFTS0VEX1ZFTkRPUl9XRUJHTCksXG5cdFx0c3VwcG9ydGVkRXh0ZW5zaW9uczogZ2wuZ2V0U3VwcG9ydGVkRXh0ZW5zaW9ucygpLnJlZHVjZSgob2JqLCBrZXkpID0+ICh7IC4uLm9iaiwgW2tleV06IHRydWUgfSksIHt9KSxcblx0fTtcblxuXHRyZXR1cm4gZmVhdHVyZXM7XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9icm93c2VyRmVhdHVyZXMvZ2V0V2ViR0wyRmVhdHVyZXMuanMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBUEE7QUFDQTtBQVNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!******************************************************!*\
  !*** ./features/browserFeatures/getWebGLFeatures.js ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tvar canvas = document.createElement('canvas');\n\tvar gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');\n\n\t/* eslint-disable no-undef */\n\tif (!gl || !gl instanceof WebGLRenderingContext) return false;\n\t/* eslint-enable no-undef */\n\n\tvar glExtensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info');\n\n\tvar features = {\n\t\trenderer: gl.getParameter(gl.RENDERER),\n\t\tvendor: gl.getParameter(gl.VENDOR),\n\t\tversion: gl.getParameter(gl.VERSION),\n\t\tshaderVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),\n\t\trendererUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL),\n\t\tvendorUnmasked: glExtensionDebugRendererInfo && gl.getParameter(glExtensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL),\n\t\tsupportedExtensions: gl.getSupportedExtensions().reduce(function (obj, key) {\n\t\t\treturn _extends({}, obj, _defineProperty({}, key, true));\n\t\t}, {})\n\t};\n\n\treturn features;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvYnJvd3NlckZlYXR1cmVzL2dldFdlYkdMRmVhdHVyZXMuanM/ZDMzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0Y29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSB8fCBjYW52YXMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJyk7XG5cblx0LyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cblx0aWYgKCFnbCB8fCAhZ2wgaW5zdGFuY2VvZiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpIHJldHVybiBmYWxzZTtcblx0LyogZXNsaW50LWVuYWJsZSBuby11bmRlZiAqL1xuXG5cdGNvbnN0IGdsRXh0ZW5zaW9uRGVidWdSZW5kZXJlckluZm8gPSBnbC5nZXRFeHRlbnNpb24oJ1dFQkdMX2RlYnVnX3JlbmRlcmVyX2luZm8nKTtcblxuXHRjb25zdCBmZWF0dXJlcyA9IHtcblx0XHRyZW5kZXJlcjogZ2wuZ2V0UGFyYW1ldGVyKGdsLlJFTkRFUkVSKSxcblx0XHR2ZW5kb3I6IGdsLmdldFBhcmFtZXRlcihnbC5WRU5ET1IpLFxuXHRcdHZlcnNpb246IGdsLmdldFBhcmFtZXRlcihnbC5WRVJTSU9OKSxcblx0XHRzaGFkZXJWZXJzaW9uOiBnbC5nZXRQYXJhbWV0ZXIoZ2wuU0hBRElOR19MQU5HVUFHRV9WRVJTSU9OKSxcblx0XHRyZW5kZXJlclVubWFza2VkOiBnbEV4dGVuc2lvbkRlYnVnUmVuZGVyZXJJbmZvICYmIGdsLmdldFBhcmFtZXRlcihnbEV4dGVuc2lvbkRlYnVnUmVuZGVyZXJJbmZvLlVOTUFTS0VEX1JFTkRFUkVSX1dFQkdMKSxcblx0XHR2ZW5kb3JVbm1hc2tlZDogZ2xFeHRlbnNpb25EZWJ1Z1JlbmRlcmVySW5mbyAmJiBnbC5nZXRQYXJhbWV0ZXIoZ2xFeHRlbnNpb25EZWJ1Z1JlbmRlcmVySW5mby5VTk1BU0tFRF9WRU5ET1JfV0VCR0wpLFxuXHRcdHN1cHBvcnRlZEV4dGVuc2lvbnM6IGdsLmdldFN1cHBvcnRlZEV4dGVuc2lvbnMoKS5yZWR1Y2UoKG9iaiwga2V5KSA9PiAoeyAuLi5vYmosIFtrZXldOiB0cnVlIH0pLCB7fSksXG5cdH07XG5cblx0cmV0dXJuIGZlYXR1cmVzO1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvYnJvd3NlckZlYXR1cmVzL2dldFdlYkdMRmVhdHVyZXMuanMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBUEE7QUFDQTtBQVNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!********************************************************!*\
  !*** ./features/browserFeatures/isGamepadSupported.js ***!
  \********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.Gamepad || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvYnJvd3NlckZlYXR1cmVzL2lzR2FtZXBhZFN1cHBvcnRlZC5qcz9kNDQ3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdHJldHVybiAhIXdpbmRvdy5HYW1lcGFkIHx8IGZhbHNlO1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvYnJvd3NlckZlYXR1cmVzL2lzR2FtZXBhZFN1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!********************************************************************!*\
  !*** ./features/browserFeatures/isRequestIdleCallbackSupported.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.requestIdleCallback || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvYnJvd3NlckZlYXR1cmVzL2lzUmVxdWVzdElkbGVDYWxsYmFja1N1cHBvcnRlZC5qcz81MWYxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdHJldHVybiAhIXdpbmRvdy5yZXF1ZXN0SWRsZUNhbGxiYWNrIHx8IGZhbHNlO1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvYnJvd3NlckZlYXR1cmVzL2lzUmVxdWVzdElkbGVDYWxsYmFja1N1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!**************************************************************!*\
  !*** ./features/browserFeatures/isServiceWorkerSupported.js ***!
  \**************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!navigator.serviceWorker || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvYnJvd3NlckZlYXR1cmVzL2lzU2VydmljZVdvcmtlclN1cHBvcnRlZC5qcz9hZmE4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdHJldHVybiAhIW5hdmlnYXRvci5zZXJ2aWNlV29ya2VyIHx8IGZhbHNlO1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvYnJvd3NlckZlYXR1cmVzL2lzU2VydmljZVdvcmtlclN1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!************************************************************!*\
  !*** ./features/browserFeatures/isWebAssemblySupported.js ***!
  \************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.WebAssembly || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZmVhdHVyZXMvYnJvd3NlckZlYXR1cmVzL2lzV2ViQXNzZW1ibHlTdXBwb3J0ZWQuanM/MDM3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRyZXR1cm4gISF3aW5kb3cuV2ViQXNzZW1ibHkgfHwgZmFsc2U7XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9icm93c2VyRmVhdHVyZXMvaXNXZWJBc3NlbWJseVN1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!*********************************************************!*\
  !*** ./features/browserFeatures/isWebAudioSupported.js ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.AudioContext || !!window.webkitAudioContext || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYkF1ZGlvU3VwcG9ydGVkLmpzPzI3OTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0cmV0dXJuICEhd2luZG93LkF1ZGlvQ29udGV4dCB8fCAhIXdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQgfHwgZmFsc2U7XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9icm93c2VyRmVhdHVyZXMvaXNXZWJBdWRpb1N1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!*******************************************************!*\
  !*** ./features/browserFeatures/isWebGL2Supported.js ***!
  \*******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tvar canvas = document.createElement('canvas');\n\tvar gl = canvas.getContext('webgl2');\n\n\t/* eslint-disable no-undef */\n\treturn gl && gl instanceof WebGL2RenderingContext || false;\n\t/* eslint-enable no-undef */\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYkdMMlN1cHBvcnRlZC5qcz9iNWM3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHRjb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbDInKTtcblxuXHQvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuXHRyZXR1cm4gKGdsICYmIGdsIGluc3RhbmNlb2YgV2ViR0wyUmVuZGVyaW5nQ29udGV4dCkgfHwgZmFsc2U7XG5cdC8qIGVzbGludC1lbmFibGUgbm8tdW5kZWYgKi9cbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYkdMMlN1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!******************************************************!*\
  !*** ./features/browserFeatures/isWebGLSupported.js ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tvar canvas = document.createElement('canvas');\n\tvar gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');\n\n\t/* eslint-disable no-undef */\n\treturn gl && gl instanceof WebGLRenderingContext || false;\n\t/* eslint-enable no-undef */\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYkdMU3VwcG9ydGVkLmpzP2FkMmQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0Y29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdGNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJykgfHwgY2FudmFzLmdldENvbnRleHQoJ2V4cGVyaW1lbnRhbC13ZWJnbCcpO1xuXG5cdC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5cdHJldHVybiAoZ2wgJiYgZ2wgaW5zdGFuY2VvZiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpIHx8IGZhbHNlO1xuXHQvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVmICovXG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9icm93c2VyRmVhdHVyZXMvaXNXZWJHTFN1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!*******************************************************!*\
  !*** ./features/browserFeatures/isWebRTCSupported.js ***!
  \*******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.RTCPeerConnection && !!window.RTCDataChannelEvent || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYlJUQ1N1cHBvcnRlZC5qcz9iYzk5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdHJldHVybiAoISF3aW5kb3cuUlRDUGVlckNvbm5lY3Rpb24gJiYgISF3aW5kb3cuUlRDRGF0YUNoYW5uZWxFdmVudCkgfHwgZmFsc2U7XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9icm93c2VyRmVhdHVyZXMvaXNXZWJSVENTdXBwb3J0ZWQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!**********************************************************!*\
  !*** ./features/browserFeatures/isWebSocketSupported.js ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.WebSocket || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYlNvY2tldFN1cHBvcnRlZC5qcz9jZjM4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdHJldHVybiAoISF3aW5kb3cuV2ViU29ja2V0KSB8fCBmYWxzZTtcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYlNvY2tldFN1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!******************************************************!*\
  !*** ./features/browserFeatures/isWebVRSupported.js ***!
  \******************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!navigator.getVRDisplays || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYlZSU3VwcG9ydGVkLmpzPzk2NjAiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0cmV0dXJuICEhbmF2aWdhdG9yLmdldFZSRGlzcGxheXMgfHwgZmFsc2U7XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9icm93c2VyRmVhdHVyZXMvaXNXZWJWUlN1cHBvcnRlZC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!**********************************************************!*\
  !*** ./features/browserFeatures/isWebWorkerSupported.js ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!window.Worker || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJGZWF0dXJlcy9pc1dlYldvcmtlclN1cHBvcnRlZC5qcz9jYWVjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdHJldHVybiAhIXdpbmRvdy5Xb3JrZXIgfHwgZmFsc2U7XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9icm93c2VyRmVhdHVyZXMvaXNXZWJXb3JrZXJTdXBwb3J0ZWQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!*****************************************************!*\
  !*** ./features/browserSettings/isCookieEnabled.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn !!navigator.cookieEnabled || false;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJTZXR0aW5ncy9pc0Nvb2tpZUVuYWJsZWQuanM/M2I2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRyZXR1cm4gISFuYXZpZ2F0b3IuY29va2llRW5hYmxlZCB8fCBmYWxzZTtcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2Jyb3dzZXJTZXR0aW5ncy9pc0Nvb2tpZUVuYWJsZWQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!*********************************************************!*\
  !*** ./features/browserSettings/isDoNotTrackEnabled.js ***!
  \*********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tvar doNotTrack = navigator.doNotTrack || false;\n\n\tif (!!doNotTrack || doNotTrack === 'unspecified') {\n\t\treturn false;\n\t} else {\n\t\treturn true;\n\t}\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2Jyb3dzZXJTZXR0aW5ncy9pc0RvTm90VHJhY2tFbmFibGVkLmpzP2ZjMWQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcblx0Y29uc3QgZG9Ob3RUcmFjayA9IG5hdmlnYXRvci5kb05vdFRyYWNrIHx8IGZhbHNlO1xuXG5cdGlmICghIWRvTm90VHJhY2sgfHwgZG9Ob3RUcmFjayA9PT0gJ3Vuc3BlY2lmaWVkJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvYnJvd3NlclNldHRpbmdzL2lzRG9Ob3RUcmFja0VuYWJsZWQuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!**********************************************************!*\
  !*** ./features/hardwareFeatures/getDevicePixelRatio.js ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn window.devicePixelRatio || 1;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2hhcmR3YXJlRmVhdHVyZXMvZ2V0RGV2aWNlUGl4ZWxSYXRpby5qcz83ODMzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdHJldHVybiB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xufSkoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvZmVhdHVyZXMvaGFyZHdhcmVGZWF0dXJlcy9nZXREZXZpY2VQaXhlbFJhdGlvLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!****************************************************!*\
  !*** ./features/hardwareFeatures/getEndianness.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\tif (window.ArrayBuffer !== null) {\n\t\tvar buffer = new ArrayBuffer(4);\n\t\tvar intView = new Uint32Array(buffer);\n\t\tvar byteView = new Uint8Array(buffer);\n\t\tintView[0] = 1;\n\n\t\treturn byteView[0] === 1 ? 'little' : 'big';\n\t} else {\n\t\treturn 'unknown';\n\t}\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2hhcmR3YXJlRmVhdHVyZXMvZ2V0RW5kaWFubmVzcy5qcz9jNzI0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG5cdGlmICh3aW5kb3cuQXJyYXlCdWZmZXIgIT09IG51bGwpIHtcblx0XHRjb25zdCBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoNCk7XG5cdFx0Y29uc3QgaW50VmlldyA9IG5ldyBVaW50MzJBcnJheShidWZmZXIpO1xuXHRcdGNvbnN0IGJ5dGVWaWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcblx0XHRpbnRWaWV3WzBdID0gMTtcblxuXHRcdHJldHVybiAoYnl0ZVZpZXdbMF0gPT09IDEpID8gJ2xpdHRsZScgOiAnYmlnJztcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gJ3Vua25vd24nO1xuXHR9XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9mZWF0dXJlcy9oYXJkd2FyZUZlYXR1cmVzL2dldEVuZGlhbm5lc3MuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!***********************************************************!*\
  !*** ./features/hardwareFeatures/getWebWorkerPoolSize.js ***!
  \***********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ((function () {\n\treturn navigator.hardwareConcurrency || 0;\n})());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2ZlYXR1cmVzL2hhcmR3YXJlRmVhdHVyZXMvZ2V0V2ViV29ya2VyUG9vbFNpemUuanM/MzRlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoKCkgPT4ge1xuXHRyZXR1cm4gbmF2aWdhdG9yLmhhcmR3YXJlQ29uY3VycmVuY3kgfHwgMDtcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2ZlYXR1cmVzL2hhcmR3YXJlRmVhdHVyZXMvZ2V0V2ViV29ya2VyUG9vbFNpemUuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!************************************!*\
  !*** ./utilities/isValidUACode.js ***!
  \************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = isValidUACode;\nfunction isValidUACode(str) {\n    return (/^ua-\\d{4,9}-\\d{1,4}$/i.test(str.toString())\n    );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3V0aWxpdGllcy9pc1ZhbGlkVUFDb2RlLmpzPzNiZDciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZFVBQ29kZShzdHIpIHtcbiAgICByZXR1cm4gKC9edWEtXFxkezQsOX0tXFxkezEsNH0kL2kpLnRlc3Qoc3RyLnRvU3RyaW5nKCkpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy91dGlsaXRpZXMvaXNWYWxpZFVBQ29kZS5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///22\n");

/***/ })
/******/ ]);
});