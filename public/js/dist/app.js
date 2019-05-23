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
    "./assets/js/app.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst users = ['Nathan', 'Billy', 'Susan', 'Smitty']; // Class Compontent\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super();\n    this.state = {\n      name: 'Nathaniel',\n      age: 32\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: `container`\n    }, \"app\");\n  }\n\n}\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.querySelector('#app'));\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App2, null), document.querySelector('#app2')); //=====================================================================================\n//=====================================================================================\n// // Method\n// loopUsers = () => {\n// \treturn users.map((user, index) => {\n// \t\treturn <div key={index}>{user}</div>;\n// \t});\n// };\n// showNotification = () => {\n// \tif (this.state.age > 18) {\n// \t\treturn `You Can Enter The Club`;\n// \t} else {\n// \t\treturn `You Can NOT Enter The Club`;\n// \t}\n// };\n// render() {\n// \treturn (\n// \t\t// if age is > 18, create 'active' class. Else create empty string\n// \t\t<div className={`container ${this.state.age > 18 ? 'active' : ''}`}>\n// \t\t\t{/* <h1>\n// \t\t\t\t{this.state.name}\n// \t\t\t\t<span>{this.state.age}</span>\n// \t\t\t</h1> */}\n// \t\t\t{/* <Header1 name={this.state.name} /> */}\n// \t\t\t<Header1>\n// \t\t\t\t<b>{this.showNotification()}</b>\n// \t\t\t</Header1>\n// \t\t\t<b>{this.loopUsers()}</b>\n// \t\t\t<Footer\n// \t\t\t\tname=\"Billy\"\n// \t\t\t\tage={22}\n// \t\t\t\tprintName={() => console.log('Hello, My Name is Billy')}\n// \t\t\t/>\n// \t\t</div>\n// \t);\n// }\n// // Functional Component (No Access To State)\n// // Use When Logic is Not Needed\n// const App2 = () => {\n// \treturn (\n// \t\t<div className=\"container\">\n// \t\t\t<h1>Nate</h1>\n// \t\t</div>\n// \t);\n// };\n// const Header1 = props => {\n// \treturn <h1>{props.children}</h1>;\n// };\n// // Footer\n// class Footer extends Component {\n// \tconstructor() {\n// \t\tsuper();\n// \t\tthis.state = {\n// \t\t\tname: 'Nathaniel'\n// \t\t};\n// \t}\n// \trender() {\n// \t\treturn (\n// \t\t\t<div className=\"container\">\n// \t\t\t\t<footer onClick={this.props.printName}>\n// \t\t\t\t\tName: {this.props.name}, Age: {this.props.age}\n// \t\t\t\t</footer>\n// \t\t\t</div>\n// \t\t);\n// \t}\n// }\n// ReactDOM.render(<App />, document.querySelector('#app'));\n// ReactDOM.render(<App2 />, document.querySelector('#app2'));\n\n//# sourceURL=webpack:///./assets/js/app.js?");
    }
});