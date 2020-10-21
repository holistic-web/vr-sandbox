/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/aframe/dist/aframe-master.js":
/*!***************************************************!*\
  !*** ./node_modules/aframe/dist/aframe-master.js ***!
  \***************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.g, __webpack_require__.* */
/*! CommonJS bailout: module.exports is used directly at 1:72-86 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
eval("__webpack_require__(/*! aframe */ \"./node_modules/aframe/dist/aframe-master.js\");\n\nfunction coordToString(coord) {\n\treturn `${coord.x || 0} ${coord.y || 0} ${coord.z || 0}`;\n}\n\nfunction createScene() {\n\tconst scene = document.createElement('a-scene');\n\tdocument.body.appendChild(scene);\n\treturn scene;\n};\n\nfunction defineAssets(scene, assets) {\n\tconst assetsContainer = document.createElement('a-assets');\n\tassets.forEach(asset => {\n\t\tconst element = document.createElement('img');\n\t\telement.setAttribute('id', asset.name);\n\t\telement.setAttribute('src', asset.src);\n\t\telement.setAttribute('crossorigin', 'anonymous');\n\t\tassetsContainer.appendChild(element);\n\t});\n\tscene.appendChild(assetsContainer);\n};\n\nfunction drawBackground(scene) {\n\tconst groundElement = document.createElement('a-circle');\n\tgroundElement.setAttribute('src', '#groundTexture');\n\tgroundElement.setAttribute('rotation', '-90, 0, 0');\n\tgroundElement.setAttribute('radius', 32);\n\n\tconst skyElement = document.createElement('a-sky');\n\tskyElement.setAttribute('height', 2048);\n\tskyElement.setAttribute('radius', 30);\n\tskyElement.setAttribute('src', '#skyTexture');\n\tskyElement.setAttribute('theta-length', 90);\n\tskyElement.setAttribute('width', 2048);\n\n\tscene.appendChild(groundElement);\n\tscene.appendChild(skyElement);\n}\n\nfunction drawShapes(scene, shapes) {\n\tshapes.forEach(shape => {\n\t\tconst element = document.createElement(`a-${shape.type}`);\n\t\tif (shape.position) element.setAttribute('position', coordToString(shape.position));\n\t\tif (shape.rotation) element.setAttribute('rotation', coordToString(shape.rotation));\n\t\tif (shape.radius) element.setAttribute('radius', shape.radius);\n\t\tif (shape.width) element.setAttribute('width', shape.width);\n\t\tif (shape.height) element.setAttribute('height', shape.height);\n\t\tif (shape.color) element.setAttribute('color', shape.color);\n\t\tscene.appendChild(element);\n\t});\n}\n\nfunction trackControls(scene) {\n\tconst leftHandElement = document.createElement('a-entity');\n\tleftHandElement.setAttribute('hand-controls', 'hand: left');\n\n\tconst rightHandElement = document.createElement('a-entity');\n\trightHandElement.setAttribute('hand-controls', 'hand: right');\n\n\tscene.appendChild(leftHandElement);\n\tscene.appendChild(rightHandElement);\n}\n\nconst assets = [\n\t{ name: 'groundTexture', src: 'https://cdn.aframe.io/a-painter/images/floor.jpg' },\n\t{ name: 'skyTexture', src: 'https://cdn.aframe.io/a-painter/images/sky.jpg' }\n]\n\nconst shapes = [\n\t{ type: 'box', position: { x: -1, y: 0.6, z: -3 }, rotation: { x: 0, y: 45, z: 0 }, color: '#4CC3D9' },\n\t{ type: 'sphere', position: { x: 0, y: 1.35, z: -5 }, radius: 1.25, color: '#EF2D5E' },\n\t{ type: 'cylinder', position: { x: 1, y: 0.85, z: -3 }, radius: 0.5, height: 1.5, color: '#FFC65D' },\n\t{ type: 'plane', position: { x: 0, y: 0.1, z: -4 }, rotation: { x: -90, y: 0, z: 0 }, width: 4, height: 4, color: '#7BC8A4' }\n];\n\nconst scene = createScene();\ndefineAssets(scene, assets);\ndrawBackground(scene);\ndrawShapes(scene, shapes);\ntrackControls(scene);\n\n//# sourceURL=webpack://hello-world/./src/main.js?");
})();

/******/ })()
;