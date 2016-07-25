/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const Game = __webpack_require__(2);
	const View = __webpack_require__(3);
	
	$(() => {
	  const rootEl = $('#calculator');
	  const game = new Game();
	  new View(game, rootEl);
	});


/***/ },
/* 2 */
/***/ function(module, exports) {

	const Game = function() {
	  let keys = document.querySelectorAll('#calculator span');
	  let operators = ['+', '-', 'x', '÷'];
	  let decimalAdded = false;
	
	  for(let i = 0; i < keys.length; i++) {
		keys[i].onclick = function(e) {
			let input = document.querySelector('.screen');
			let inputVal = input.innerHTML;
			let btnVal = this.innerHTML;
			
			if(btnVal == 'C') {
				input.innerHTML = '';
				decimalAdded = false;
			}
			
			else if(btnVal == '=') {
				let equation = inputVal;
	      let idx = undefined;
				let lastChar = equation[equation.length - 1];
				
				equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
				
				if(operators.indexOf(lastChar) > -1 || lastChar == '.')
					equation = equation.replace(/.$/, '');
				
	      let equArr = equation.split("");
	      
	      idx = equArr.indexOf("+") || idx;
	      idx = equArr.indexOf("-") || idx;
	      idx = equArr.indexOf("*") || idx;
	      idx = equArr.indexOf("/") || idx;
	      console.log(equation);
	      console.log(equArr);
	      console.log(idx);
				if(equation)
					input.innerHTML = eval(equation);
					
				decimalAdded = false;
			}
			
			else if(operators.indexOf(btnVal) > -1) {
				let lastChar = inputVal[inputVal.length - 1];
				
				if(inputVal != '' && operators.indexOf(lastChar) == -1) 
					input.innerHTML += btnVal;
				
				else if(inputVal == '' && btnVal == '-') 
					input.innerHTML += btnVal;
				
				if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
					input.innerHTML = inputVal.replace(/.$/, btnVal);
				}
				
				decimalAdded =false;
			}
			
			else if(btnVal == '.') {
				if(!decimalAdded) {
					input.innerHTML += btnVal;
					decimalAdded = true;
				}
			}
			
			else {
				input.innerHTML += btnVal;
			}
			
			e.preventDefault();
	  	} 
	   }
	};
	
	
	module.exports = Game;


/***/ },
/* 3 */
/***/ function(module, exports) {

	function View (game, $el) {
		this.game = game;
		this.$el = $el;
	}
	
	
	module.exports = View;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map