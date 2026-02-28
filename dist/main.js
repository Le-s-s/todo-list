/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    padding: 0;\n    margin: 0;\n    display: flex;\n    background-color: aqua;\n}\n\n.container {\n    display: grid;\n    row-gap: 2%;\n    column-gap: 2%;\n    width: 90vw;\n    height: 100vh;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n}\n\n.container form {\n    display: flex;\n    flex-direction: column;\n    justify-self: start;\n    position: fixed;\n    bottom: 20px;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n    width: 50%;\n    max-width: 600px;\n    background: white;\n    padding: 20px;\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 4px 10px rgba(0,0,0,0.1);\n    text-align: center;\n    z-index: 1000;\n\n\n}\n\n.add-item {\n    justify-self: start;\n    position: fixed;\n    bottom: 20px;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n    width: 50%;\n    max-width: 600px;\n    background: white;\n    padding: 20px;\n    border: 1px solid #ccc;\n    border-radius: 8px;\n    box-shadow: 0 4px 10px rgba(0,0,0,0.1);\n    text-align: center;\n    z-index: 1000;\n}\n\n.nav-bar{\n    width: 10vw;\n    display: flex;\n    flex-direction: column;\n}\n\n\n.card {\n    justify-items: center;\n    align-items: center;\n    font-size: 80%;\n    background-color: white;\n    height: 10%;\n    \n}\n\n.card.expanded{\n    height: 100%;\n}\n\n.card-details {\n    display: none;\n    background-color: grey;\n    height: 90%;\n    width: 100%;\n}\n\n.card.expanded .card-details {\n    \n    display: block;\n    overflow-y:auto\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/createTodo.js"
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoStorage.js */ \"./src/todoStorage.js\");\n/* harmony import */ var _todoDom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoDom.js */ \"./src/todoDom.js\");\n\n\n\n//localStorage.clear()\nconst todoHandler = (function(){\n    // tab variable should be moved \n    // but will it?\n    // probably not.\n    let currentTab\n    \n    // populates page with data\n    // or creates default tab\n    const createPage = function() {\n        currentTab = localStorage.getItem(\"activeTab\");\n        const todoKeys = Object.keys(localStorage)\n            .filter(key => key.startsWith(\"todo:\"));\n        \n        if (todoKeys.length === 0) {\n            createTodo(\"Default\");\n            _todoDom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createTab(\"Default\", createTodo, deleteTodo);\n            return;\n        }\n        const tabNames = [];\n\n        todoKeys.forEach(key => {\n            const data = JSON.parse(localStorage.getItem(key));\n\n            \n            if (data && data.name) {\n                tabNames.push(data.name);\n                _todoDom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createTab(data.name, createTodo, deleteTodo);\n            }\n        });\n\n        currentTab = currentTab || tabNames[0];\n        createTodo(currentTab);\n    };\n\n    const createTodo = function(name){\n        currentTab = name;\n        let todoObj = _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].objectHandler(name);\n        _todoDom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].renderTodo(todoObj, createItems, deleteItems, _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveTodo);\n    };\n    \n    const createItems = function(todoObj,todoForm){\n        const newTodo = _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createItemObject(todoObj,todoForm)\n        _todoDom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createItemDom(todoObj, newTodo, deleteItems, _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveTodo);\n    }\n\n    const deleteTodo = function(name){\n        _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].objectRemover(name);\n             \n    }\n\n    const deleteItems = function(todoObj,newTodo){\n        _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteItemObject(todoObj,newTodo);\n        _todoDom_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteItemDom(newTodo.identifier);\n    }\n    return{createTodo,deleteTodo,createItems,deleteItems,createPage}\n})();\n\n//todo\n// simplify code/ replace ai code(not much)\n// add proper comments.\n// add more styling\n// add safeguards\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoHandler);\n\n//# sourceURL=webpack://todo-list/./src/createTodo.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo.js */ \"./src/createTodo.js\");\n// todo\n// basic script for calling other modules.\n// module for dynamic creation of html\n// modules connected to html creation that handle title/\n// description/duedate/priority/notes/checklists.\n// a seperate module for date handling.\n// storage.\n\n\n\naddEventListener(\"DOMContentLoaded\", (event) => { \n    _createTodo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createPage();\n});\n\n//# sourceURL=webpack://todo-list/./src/index.js?\n}");

/***/ },

/***/ "./src/todoDom.js"
/*!************************!*\
  !*** ./src/todoDom.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nconst todoDom = (function(){\n    const body = document.querySelector(\".container\");\n    const renderTodo = function(todoObj, onCreate, onDelete,saveTodo){\n        if(todoObj === null){\n            body.innerHTML = \"\";\n            newItemButton(todoObj, onCreate);          \n        }\n        body.innerHTML = \"\";\n        newItemButton(todoObj, onCreate);\n        for (const item of todoObj.items){\n            createItemDom(todoObj, item, onDelete, saveTodo);\n        }\n        \n    }\n\n    const newItemButton = function(todoObj, onCreate){\n        const addNew = document.createElement(\"button\");\n        addNew.textContent = \"+\";\n        addNew.classList.add(\"add-item\");\n        body.appendChild(addNew);\n        addNew.addEventListener(\"click\", (event) => { \n            createForm(todoObj, onCreate);\n        });\n    }\n\n    const createItemDom = function(todoObj, newTodo, onDelete, saveTodo){\n        const card = document.createElement(\"div\");\n\n        const title = document.createElement(\"h2\");\n        title.textContent = `${newTodo.title}`;\n        card.appendChild(title)\n\n        const details = document.createElement(\"div\");\n        details.classList.add(\"card-details\");\n        card.appendChild(details);\n\n        const description = document.createElement(\"p\");\n        card.appendChild(description)\n\n        description.textContent = `${newTodo.description}`;\n        const dueDate = document.createElement(\"h3\");\n        card.appendChild(dueDate)\n\n        dueDate.textContent = `${newTodo.dueDate}`;\n        const priority = document.createElement(\"h1\");\n        card.appendChild(priority)\n        priority.textContent = `${newTodo.priority}`;\n\n        // creates list of checkable list items\n        if (Array.isArray(newTodo.checklist)) {\n            newTodo.checklist.forEach(element => {\n                const checkMark = document.createElement(\"input\");\n                checkMark.type = \"checkbox\";\n                checkMark.checked = element.completed;\n\n                const checkItem = document.createElement(\"p\");\n                checkItem.textContent = element.value;\n                checkItem.appendChild(checkMark);\n\n                card.appendChild(checkItem);\n                details.appendChild(checkItem);\n                \n                // haven't worked with checkboxes enough to know this.\n                // thanks ai for 'change'// checkmark.checked stuff.\n                checkMark.addEventListener(\"change\", (event) => { \n                    element.completed = checkMark.checked;\n                    saveTodo(todoObj);\n                });\n            });\n        }\n\n        const deleteButt = document.createElement(\"button\");\n        deleteButt.textContent = `X`;\n        deleteButt.classList.add(\"delete-item\")\n        card.appendChild(deleteButt)\n        card.classList.add(\"card\")\n        card.dataset.id = newTodo.identifier;\n        body.appendChild(card);\n        details.appendChild(description);\n        details.appendChild(dueDate);\n        details.appendChild(priority);\n        details.appendChild(deleteButt);\n\n        title.addEventListener(\"click\", () => {\n            card.classList.toggle(\"expanded\");\n        });\n\n        deleteButt.addEventListener(\"click\", (event) => { \n            onDelete(todoObj,newTodo);\n        });\n    }\n\n    const deleteItemDom = function(identifier){\n        const del = document.querySelector(`.container [data-id=\"${identifier}\"]`)\n        if (del) del.remove();\n    }\n\n    const createForm = function(todoObj, onCreate){\n        const todoForm = document.createElement(\"form\")\n\n        const title = document.createElement(\"input\")\n        title.name = \"title\";\n        todoForm.appendChild(title)\n\n\n        const desc = document.createElement(\"input\")\n        desc.name = \"description\";\n        todoForm.appendChild(desc)\n\n\n        const dueDate = document.createElement(\"input\")\n        dueDate.name = \"dueDate\";\n        dueDate.type = \"date\";\n        todoForm.appendChild(dueDate);\n\n\n        const options = [\"Extra\", \"Somewhat\", \"Important\"];\n        options.forEach(option => {\n            const priority = document.createElement(\"input\")\n            priority.name = \"priority\";\n            priority.type = \"radio\"\n            priority.value = option;\n            priority.id =`radio-${option}`;\n\n            const label = document.createElement(\"label\");\n            label.htmlFor = priority.id;\n            label.textContent = option;\n\n            todoForm.appendChild(priority);\n            todoForm.appendChild(label);\n        })\n\n        const checkNum = document.createElement(\"input\");\n        checkNum.type = \"number\";\n        checkNum.min = \"0\";\n        todoForm.appendChild(checkNum);\n\n\n        // checklist ai generated, will replace later.\n        // though i had already made something similar.\n\n        // container for generated checklist inputs\n        const checklistContainer = document.createElement(\"div\");\n        todoForm.appendChild(checklistContainer);\n\n        checkNum.addEventListener(\"input\", () => {\n            checklistContainer.innerHTML = \"\";\n\n            const count = parseInt(checkNum.value) || 0;\n\n            for (let i = 0; i < count; i++) {\n                const wrapper = document.createElement(\"div\");\n\n                const checkInput = document.createElement(\"input\");\n                checkInput.type = \"text\";\n                checkInput.name = \"checklist\";\n                checkInput.classList.add(\"checklist\");\n                checkInput.placeholder = `Checklist item ${i + 1}`;\n\n                wrapper.appendChild(checkInput);\n                checklistContainer.appendChild(wrapper);\n            }\n        });\n\n        const confirm = document.createElement(\"button\")\n        confirm.textContent = \"Submit\"\n        confirm.type = \"button\"\n        todoForm.appendChild(confirm);\n\n        body.appendChild(todoForm);\n\n        confirm.addEventListener(\"click\", (event) => { \n            onCreate(todoObj,todoForm);\n            todoForm.remove();\n        });\n    }\n\n   \n    // tab logic\n    const tabMaker = function(createTodo,deleteTodo){\n        const name = tabName();\n        createTab(name,createTodo,deleteTodo);\n    }\n    \n    const tabName = function(){\n\n        let name;\n\n        while (true) {\n            name = prompt(\"What will you call this tab?\");\n            const tabs = [];\n            if (!name) return null;\n\n            name = name.trim();\n            Object.keys(localStorage).forEach(key => {\n                tabs.push(key)\n            });\n            const exists = tabs.some(\n                tab => tab.name === `todo:${name}`\n            );\n\n            if (!exists) break;\n\n\n\n            \n        }\n\n        return name;\n    };\n\n    const createTab = function(name,createTodo, deleteTodo){\n        if(name === null) return;\n        const nav = document.querySelector(\".nav-bar\");\n        if(name === \"Default\"){\n            const newTab = document.createElement(\"button\");\n            newTab.classList.add(\"new\")\n            newTab.textContent = \"+\";\n            nav.appendChild(newTab);\n            newTab.addEventListener(\"click\", () => {\n                tabMaker(createTodo,deleteTodo);\n            });\n        }\n        const newTab = nav.querySelector(\".new\");\n        const del = document.createElement(\"button\");\n        del.classList.add(`delTab`)\n        del.textContent = \"x\";\n\n        const tab = document.createElement(\"button\");\n        tab.classList.add(\"tab\")\n        tab.classList.add(`${name}`)\n        tab.textContent = name;\n        tab.appendChild(del)\n\n        nav.insertBefore(tab, newTab);\n\n        del.addEventListener(\"click\", (event) => { \n            event.stopPropagation()\n            tab.remove()\n            deleteTodo(name);\n        });\n\n        tab.addEventListener(\"click\", (event) => { \n            createTodo(name);\n        });\n    }\n\n    return{createForm,newItemButton,createItemDom,renderTodo,deleteItemDom,tabMaker,tabName,createTab};\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoDom);\n\n//# sourceURL=webpack://todo-list/./src/todoDom.js?\n}");

/***/ },

/***/ "./src/todoStorage.js"
/*!****************************!*\
  !*** ./src/todoStorage.js ***!
  \****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst todoStorage = (function(){\n\n    const storageKey = (name) => `todo:${name}`;\n    class todoTab {\n        constructor(name, items = []){\n            this.name = name;\n            this.items = items;\n            }\n    }\n\n    // object manipulation and storage\n\n    const objectHandler = function(name){\n        let todoObj = objectLoader(name);\n\n        if(todoObj === null){\n            todoObj = objectCreator(name);\n        }\n\n        localStorage.setItem(\"activeTab\", name);\n        saveTodo(todoObj);\n        return todoObj\n    }\n    \n    const objectCreator = function(name){\n        let todoObj;\n        todoObj = new todoTab(name, []);\n        return todoObj;\n    }\n\n    const objectLoader = function(name)\n    {\n        const key = storageKey(name);\n        const exists = localStorage.getItem(key);\n        let todoObj = null;\n\n        if(exists !== null) {\n            const parsed = JSON.parse(exists);\n            todoObj = new todoTab(parsed.name, parsed.items);\n            \n            \n        }\n        \n        return todoObj;\n\n        \n    }\n\n    const objectRemover = function(name){    \n        const key = storageKey(name);\n        localStorage.removeItem(key);\n    };\n\n\n    // todo object handling, works as intended\n    const createItemObject = function(todoObj,todoForm){\n\n        const title = todoForm.title.value;\n\n        const description = todoForm.description.value;\n\n        const dueDate = todoForm.dueDate.value;\n\n        const priority = todoForm.priority.value;\n\n        const identifier = crypto.randomUUID();\n\n        const checklistDom = todoForm.querySelectorAll(\".checklist\")\n\n        // converts checklist dom into array object\n        const checklist = Array.from(checklistDom)\n        .map(node => node.value.trim())\n        .filter(value => value !== \"\")\n        .map(value => ({\n            value,\n            completed: false\n        }));\n\n\n        const newTodo = {title,description,dueDate,priority,identifier,checklist};\n\n        todoObj.items.push(newTodo)\n        saveTodo(todoObj);\n        return newTodo;\n    }\n\n    const deleteItemObject = function(todoObj, newTodo) {\n        for(const obj of todoObj.items){\n            if(obj.identifier === newTodo.identifier){\n                const index = todoObj.items.indexOf(obj);\n                todoObj.items.splice(index,1);\n                saveTodo(todoObj);\n            }\n        }\n        \n    }\n\n    const saveTodo = function(todoObj){\n        const key = storageKey(todoObj.name);\n        localStorage.setItem(key, JSON.stringify(todoObj));\n    }\n\n    return {todoTab,objectHandler,objectCreator,objectLoader,objectRemover,createItemObject,deleteItemObject,saveTodo};\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoStorage);\n\n//# sourceURL=webpack://todo-list/./src/todoStorage.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;