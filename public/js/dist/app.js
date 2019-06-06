(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        app: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/app.js", "vendors~app" ]);
    return checkDeferredModules();
})({
    "./assets/js/Components/Counter/Button.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Button; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n // Class Compontent\n\nclass Button extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super();\n\n    this.toggleHover = () => {\n      this.setState({\n        hover: !this.state.hover\n      });\n    };\n\n    this.state = {\n      hover: false\n    };\n  }\n\n  render() {\n    const styleButton = {\n      // color: this.props.fontColor,\n      width: '50%',\n      border: '3px solid black',\n      padding: '20px',\n      fontSize: '2rem',\n      fontWeight: '900',\n      textAlign: 'center',\n      cursor: 'pointer',\n      transition: 'all .3s ease-in-out',\n      background: this.state.hover ? this.props.hoverColor : this.props.backgroundColor\n    };\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: `button ${this.props.action}`,\n      style: styleButton,\n      onMouseEnter: this.toggleHover,\n      onMouseLeave: this.toggleHover,\n      onClick: this.props.trigger\n    }, this.props.children);\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/Components/Counter/Button.js?");
    },
    "./assets/js/Components/Counter/Counter.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Counter; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ \"./assets/js/Components/Counter/Button.js\");\n\n // Learn about Object.assign()\n\nlet user = {\n  name: 'Nate',\n  age: 32,\n  location: 'Chicago'\n};\nlet userNew = Object.assign({}, user, {\n  name: 'Nathaniel'\n}); // console.log(userNew);\n// Class Compontent\n\nclass Counter extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super();\n\n    this.clickedPlus = () => {\n      this.setState({\n        currentNumber: this.state.currentNumber + 1\n      }, () => {\n        console.log(this.state);\n      });\n    };\n\n    this.clickedMinus = () => {\n      this.setState({\n        currentNumber: this.state.currentNumber - 1\n      });\n    };\n\n    this.counterRun = () => {\n      setInterval(() => {\n        this.setState({\n          currentNumber: this.state.currentNumber + 1\n        });\n      }, 1000);\n    };\n\n    this.state = {\n      status: 'manual',\n      currentNumber: 0\n    };\n  }\n\n  componentWillMount() {\n    console.log('component will mount started');\n  }\n\n  componentDidMount() {\n    if (this.props.status == 'auto') {\n      this.setState({\n        status: this.props.status\n      }, () => {\n        this.counterRun();\n      });\n    }\n  }\n\n  // colorChange = () => {\n  // \tif (this.currentNumber == 10) {\n  // \t\treturn 'blue';\n  // \t\tconsole.log('count hit 20+');\n  // \t}\n  // };\n  render() {\n    const styleCounterComp = {\n      width: '100%',\n      maxWidth: '400px',\n      margin: '0 auto'\n    };\n    const styleNumber = {\n      border: '3px solid black',\n      padding: '20px',\n      fontSize: '2rem',\n      fontWeight: '900',\n      textAlign: 'center'\n    };\n    const styleButtons = {\n      display: this.props.status == 'auto' ? 'none' : 'flex',\n      color: this.state.currentNumber < 0 ? 'red' :  true && this.state.currentNumber > 0 ? 'limegreen' : 'blueviolet'\n    };\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      id: \"counter-comp\",\n      style: styleCounterComp\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"Number\",\n      style: styleNumber\n    }, this.state.currentNumber), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"buttons\",\n      style: styleButtons\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n      action: \"minus\",\n      hoverColor: \"maroon\",\n      backgroundColor: \"black\",\n      fontColor: \"white\",\n      trigger: this.clickedMinus\n    }, \"-\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n      action: \"plus\",\n      hoverColor: \"purple\",\n      backgroundColor: \"white\",\n      fontColor: \"black\",\n      trigger: this.clickedPlus\n    }, \"+\")));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/Components/Counter/Counter.js?");
    },
    "./assets/js/Components/Immutable/Immutable.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Immutable; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutability-helper */ \"./node_modules/immutability-helper/index.js\");\n/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_1__);\n\n //Immutable Arrays\n\nlet names = ['Cindy', 'Billy', 'Lisa', 'John'];\nlet newNames = [...names, 'Ramsey']; // Class Compontent\n\nclass Immutable extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super();\n\n    this.clickedBtn = () => {\n      const changeBgColor = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(this.state.background, {\n        $set: 'green'\n      });\n      console.log(this.state);\n      const newGrades = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(this.state.user.grades, {\n        $merge: {\n          art: 'B-',\n          bio: 'D'\n        }\n      });\n      const newState = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(this.state, {\n        background: {\n          $set: changeBgColor\n        },\n        // background: { $set: 'green' },\n        user: {\n          grades: {\n            $set: newGrades\n          } // background: { $set: 'red' },\n          // teachers: {\n          // \t$set: ['Billy', 'Jordan']\n          // },\n          // newUsers: { $set: [...this.state.names, 'Brad', 'Sara'] },\n          // user: {\n          // \tgrades: {\n          // \t\tmath: {\n          // \t\t\t$set: 'A'\n          // \t\t}\n          // \t}\n          // }\n\n        }\n      });\n      this.setState(newState, () => {\n        console.log(this.state);\n      });\n    };\n\n    this.changeToActive = () => {\n      if (this.state.user.grades.bio == 'D') {\n        return 'active';\n      } else {\n        return '';\n      }\n    };\n\n    this.state = {\n      background: 'black',\n      names: ['Cindy', 'Billy', 'Lisa', 'John'],\n      teachers: ['Cam', 'Brad', 'Jenna'],\n      user: {\n        name: 'Nate',\n        age: 32,\n        location: 'Chicago',\n        grades: {\n          math: 'B',\n          Science: 'B',\n          English: 'A',\n          Gym: 'F'\n        }\n      }\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      id: \"Immutable-comp\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: `box ${this.changeToActive()}`\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"button\",\n      onClick: this.clickedBtn\n    }, \"Press Me\"));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/Components/Immutable/Immutable.js?");
    },
    "./assets/js/app.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_Counter_Counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Counter/Counter */ "./assets/js/Components/Counter/Counter.js");\n/* harmony import */ var _Components_Immutable_Immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Immutable/Immutable */ "./assets/js/Components/Immutable/Immutable.js");\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {};\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: \'container\'\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Immutable_Immutable__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {\n      style: {\n        margin: 60\n      }\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Counter_Counter__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {\n      status: "manual"\n    }));\n  }\n\n}\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.querySelector(\'#app\'));\n\n//# sourceURL=webpack:///./assets/js/app.js?');
    }
});