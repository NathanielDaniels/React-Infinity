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
    "./assets/js/Components/BillsApp/AddBill.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllBills; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BillsApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BillsApp */ "./assets/js/Components/BillsApp/BillsApp.js");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto */ "./node_modules/crypto-browserify/index.js");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // Class Compontent\n\nclass AllBills extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.inputChange = () => {\n      const name = event.target.name;\n      const value = event.target.type === \'checkbox\' ? event.target.checked : event.target.value;\n      this.setState({\n        [name]: value\n      });\n    };\n\n    this.handleSubmit = () => {\n      event.preventDefault();\n      this.setState({\n        business_name: \'\',\n        amount_due: 0\n      });\n      this.props.saveBill(this.state);\n      console.log(this.state);\n    };\n\n    this.state = {\n      business_name: \'\',\n      amount_due: \'\',\n      status: \'unpaid\'\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      id: "AddBill",\n      className: `${this.props.addBillOpen == true ? \'active\' : \'\'}`\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Add Bill"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {\n      onSubmit: this.handleSubmit\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "form-group"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      htmlFor: "business_name"\n    }, "Business Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "text",\n      id: "business_name",\n      name: "business_name",\n      onChange: this.inputChange,\n      value: this.state.business_name\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "form-group"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      htmlFor: "amount_due"\n    }, "Amount Due"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "number",\n      id: "amount_due",\n      name: "amount_due",\n      step: ".01",\n      placeholder: "$",\n      min: "0",\n      onChange: this.inputChange,\n      value: this.state.amount_due\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "form-group"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {\n      htmlFor: "add_img"\n    }, "Add Image"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n      type: "file",\n      id: "add_img",\n      name: "add_img",\n      onChange: this.inputChange,\n      value: this.state.add_img\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {\n      type: "submit"\n    }, "Save"))));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/Components/BillsApp/AddBill.js?');
    },
    "./assets/js/Components/BillsApp/AllBills.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllBills; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _BillsApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BillsApp */ "./assets/js/Components/BillsApp/BillsApp.js");\n\n // Class Compontent\n\nclass AllBills extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.showAllBills = () => {\n      const bills = this.props.allBills;\n\n      if (bills.length > 0) {\n        return bills.map((bill, index) => {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n            className: `bill ${bill.status == \'paid\' ? \'active\' : \'\'}`,\n            key: index\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n            className: "company"\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n            className: "logo"\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {\n            src: "/img/billsapp/payBill.png"\n          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n            className: "title"\n          }, bill.business_name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n            className: "price"\n          }, "-$", bill.amount_due), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n            className: "buttons"\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n            className: "paid",\n            onClick: this.props.changeBillStatus.bind(null, index)\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n            className: "fas fa-check-double"\n          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n            className: "delete",\n            onClick: this.props.deleteBill.bind(null, index)\n          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n            className: "fas fa-trash-alt"\n          }))));\n        });\n      } else {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n          className: "bill"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "no-bills"\n        }, "No Bills, Click (+) To Add Bill"));\n      }\n    };\n\n    this.billsTotalAmount = () => {\n      const bills = this.props.allBills;\n      let total = 0;\n\n      for (var i = 0; i < bills.length; i++) {\n        total += parseInt(bills[i].amount_due);\n      }\n\n      console.log(total);\n\n      if (bills.length > 0) {\n        return total;\n      } else {\n        return 0;\n      }\n    };\n\n    this.state = {};\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      id: "AllBills"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "container"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "total-bills"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "text"\n    }, "Total Amount:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "number"\n    }, "-$", this.billsTotalAmount())), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {\n      className: "bill-list"\n    }, this.showAllBills())));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/Components/BillsApp/AllBills.js?');
    },
    "./assets/js/Components/BillsApp/BillsApp.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillsApp; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js");\n/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./assets/js/Components/BillsApp/Header.js");\n/* harmony import */ var _AllBills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AllBills */ "./assets/js/Components/BillsApp/AllBills.js");\n/* harmony import */ var _FloatingMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FloatingMenu */ "./assets/js/Components/BillsApp/FloatingMenu.js");\n/* harmony import */ var _AddBill__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AddBill */ "./assets/js/Components/BillsApp/AddBill.js");\n\n\n\n\n\n // Class Compontent\n\nclass BillsApp extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.clickedAddBillBtn = () => {\n      this.setState({\n        addBillOpen: !this.state.addBillOpen\n      });\n    };\n\n    this.saveBill = bill => {\n      const newBills = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(this.state.allBills, {\n        $push: [bill]\n      });\n      this.setState({\n        allBills: newBills,\n        addBillOpen: !this.state.addBillOpen\n      }, () => {\n        console.log(this.state);\n      });\n    };\n\n    this.changeBillStatus = billIndex => {\n      const allbills = this.state.allBills;\n      const bill = allbills[billIndex];\n      bill.status == \'unpaid\' ? bill.status = \'paid\' : bill.status = \'unpaid\';\n      const newState = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(this.state, {\n        allBills: {\n          $set: allbills\n        }\n      });\n      this.setState(newState, () => {\n        console.log(this.state);\n      });\n    };\n\n    this.deleteBill = billIndex => {\n      const allBills = this.state.allBills;\n      allBills.splice(billIndex, 1);\n      const newState = immutability_helper__WEBPACK_IMPORTED_MODULE_1___default()(this.state, {\n        allBills: {\n          $set: allBills\n        }\n      });\n      this.setState(newState);\n      console.log(billIndex);\n    };\n\n    this.state = {\n      addBillOpen: false,\n      allBills: [// {\n        // \tbusiness_name: \'Netflix\',\n        // \tamount_due: 13,\n        // \tstatus: \'unpaid\'\n        // }\n      ]\n    };\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      id: "BillsApp"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AllBills__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {\n      allBills: this.state.allBills,\n      changeBillStatus: this.changeBillStatus,\n      deleteBill: this.deleteBill\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddBill__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {\n      addBillOpen: this.state.addBillOpen,\n      saveBill: this.saveBill\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "content-background"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FloatingMenu__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {\n      clickedAddBillBtn: this.clickedAddBillBtn\n    }));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/Components/BillsApp/BillsApp.js?');
    },
    "./assets/js/Components/BillsApp/FloatingMenu.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FloatingMenu; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n // Class Compontent\n\nclass FloatingMenu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.clickedBtn = () => {};\n\n    this.changeToActive = () => {};\n\n    this.state = {};\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "menuContainer"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {\n      id: "FloatingMenu"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "link"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "icon"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "far fa-credit-card"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "text"\n    }, "Spend")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "link"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "icon"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fas fa-piggy-bank"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "text"\n    }, "Save")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "link"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "icon"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fas fa-exchange-alt"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "text"\n    }, "Transfer")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "link"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "icon"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fas fa-cogs"\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "text"\n    }, "Settings")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "link"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "add-button",\n      onClick: this.props.clickedAddBillBtn\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "icon"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fas fa-plus"\n    }))))));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/Components/BillsApp/FloatingMenu.js?');
    },
    "./assets/js/Components/BillsApp/Header.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n // Class Compontent\n\nclass Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.clickedBtn = () => {};\n\n    this.changeToActive = () => {};\n\n    this.state = {};\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {\n      id: "Header"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Bill Pay App"));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/Components/BillsApp/Header.js?');
    },
    "./assets/js/app.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_BillsApp_BillsApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/BillsApp/BillsApp */ "./assets/js/Components/BillsApp/BillsApp.js");\n\n // import Counter from \'./Components/Counter/Counter\';\n// import Immutable from \'./Components/Immutable/Immutable\';\n\n // import Immutable from \'./components/Immutable/Immutable\';\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n    this.state = {};\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: \'container\'\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_BillsApp_BillsApp__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null));\n  }\n\n}\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.querySelector(\'#app\'));\n\n//# sourceURL=webpack:///./assets/js/app.js?');
    },
    0: function(module, exports) {
        eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");
    },
    1: function(module, exports) {
        eval("/* (ignored) */\n\n//# sourceURL=webpack:///util_(ignored)?");
    },
    2: function(module, exports) {
        eval("/* (ignored) */\n\n//# sourceURL=webpack:///buffer_(ignored)?");
    },
    3: function(module, exports) {
        eval("/* (ignored) */\n\n//# sourceURL=webpack:///crypto_(ignored)?");
    }
});