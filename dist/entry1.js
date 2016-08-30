wpck([0,3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const a = __webpack_require__(1);
	const b = __webpack_require__(2);

	module.exports = a + b;

	console.log(a, b);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	module.exports = 'a';


/***/ }
]);