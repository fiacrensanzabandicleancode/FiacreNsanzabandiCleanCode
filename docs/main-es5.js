(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cv/cv.component.html": 
        /*!****************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cv/cv.component.html ***!
          \****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <br>\r\n  <!--\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title list-content-title\">{{ 'cv.skillsOverview' | translate }}</h5>\r\n      <img class=\"irounded img-fluid\" src=\"assets/images/skills.jpg\" alt=\"Fiacre Nsanzabandi skills overview\">\r\n    </div>\r\n  </div>\r\n  <br>\r\n  -->\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title list-content-title\">{{ 'cv.pdf' | translate }}</h5>\r\n      <pdf-viewer [src]=\"cvPdfUrl\"></pdf-viewer>\r\n      <a [href]=\"cvPdfUrl\" class=\"btn btn-primary\" role=\"button\">\r\n        <fa name=\"cloud-download\"></fa>\r\n        {{ 'cv.pdf.download' | translate }}\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" routerLink=\"home\" (click)=\"setActualRoute('/home')\">Fiacre NSANZABANDI</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\"\r\n    aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\r\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n        <li routerLinkActive=\"active\" class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"home\" (click)=\"setActualRoute('/home')\">{{ 'home' | translate }}</a>\r\n          </li>\r\n          <li routerLinkActive=\"active\" class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"cv\" (click)=\"setActualRoute('/cv')\">{{ 'cv' | translate }}</a>\r\n          </li>\r\n          <li routerLinkActive=\"active\" class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"personalProjects\"\r\n              (click)=\"setActualRoute('/personalProjects')\">{{ 'personalProjects' | translate }}</a>\r\n          </li>\r\n          <li routerLinkActive=\"active\" class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"hobbies\" (click)=\"setActualRoute('/hobbies')\">{{ 'hobbies' | translate }}</a>\r\n          </li>\r\n    </ul>\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          {{ actualLanguage }}\r\n        </a>\r\n        <div class=\"dropdown-menu languageDiv\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" [routerLink]=\"actualRoute\" (click)=\"switchLanguage('en')\">English</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"actualRoute\" (click)=\"switchLanguage('fr')\">Français</a>\r\n          <a class=\"dropdown-item\" [routerLink]=\"actualRoute\" (click)=\"switchLanguage('de')\">Deutsch</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hobbies/hobbies.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hobbies/hobbies.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <br>\r\n  <div class=\"accordion\" id=\"accordionExample\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header btn row list-content-title\" id=\"headingOne\" data-toggle=\"collapse\" data-target=\"#collapseOne\"\r\n        aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n        <div class=\"row\">\r\n          <div class=\"text-justify col\">{{ 'hobbies.music' | translate }}</div>\r\n          <div class=\"text-right col\">\r\n            <fa name=\"angle-double-down\" animation=\"spin\"></fa>\r\n            <fa name=\"angle-double-up\"></fa>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div id=\"collapseOne\" class=\"collapse show\" arialabelledby=\"headingOne\" data-parent=\"#accordionExample\">\r\n        <div class=\"card-body\">\r\n          <p>\r\n            {{ 'hobbies.music.description' | translate }}\r\n          </p>\r\n          <p>\r\n            {{ 'developmentProgress' | translate }}\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-header btn row list-content-title\" id=\"headingTwo\" data-toggle=\"collapse\" data-target=\"#collapseTwo\"\r\n        aria-expanded=\"true\" aria-controls=\"collapseTwo\">\r\n        <div class=\"row\">\r\n          <div class=\"text-justify col\">{{ 'hobbies.sport' | translate }}</div>\r\n          <div class=\"text-right col\">\r\n            <fa name=\"angle-double-down\" animation=\"spin\"></fa>\r\n            <fa name=\"angle-double-up\"></fa>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\r\n        <div class=\"card-body\">\r\n          <p>\r\n            {{ 'hobbies.sport.description' | translate }}\r\n          </p>\r\n          <p>\r\n            {{ 'developmentProgress' | translate }}\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-header btn row list-content-title\" id=\"headingThree\" data-toggle=\"collapse\" data-target=\"#collapseThree\"\r\n        aria-expanded=\"true\" aria-controls=\"collapseThree\">\r\n        <div class=\"row\">\r\n          <div class=\"text-justify col\">{{ 'hobbies.gardening' | translate }}</div>\r\n          <div class=\"text-right col\">\r\n            <fa name=\"angle-double-down\" animation=\"spin\"></fa>\r\n            <fa name=\"angle-double-up\"></fa>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\r\n        <div class=\"card-body\">\r\n          <p>\r\n            {{ 'hobbies.gardening.description' | translate }}\r\n          </p>\r\n          <p>\r\n            {{ 'developmentProgress' | translate }}\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <p class=\"text-center\" [innerHTML]=\"'home.presentation' | translate\">\r\n  </p>\r\n  <img class=\"rounded img-fluid\" src=\"assets/images/fiacreNsanzabandiBotheImage.jpg\"\r\n    alt=\"FiacreNsanzabandi profile picture\">\r\n</div>\r\n<br>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/personal-projects/personal-projects.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/personal-projects/personal-projects.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Update my personal projects and add in this, projects that are already created.-->\r\n\r\n<div>\r\n  <br>\r\n  <div class=\"accordion\" id=\"personalProjectAccordionParent\">\r\n\r\n    <!--\r\n    <div class=\"card\">\r\n      <div class=\"card-header btn row list-content-title\" id=\"jeweNaBoboHeading\" data-toggle=\"collapse\"\r\n        data-target=\"#jeweNaBoboCollapse\" aria-expanded=\"true\" aria-controls=\"jeweNaBoboCollapse\">\r\n        <div class=\"row\">\r\n          <div class=\"text-justify col\">JeweNaBobo</div>\r\n          <div class=\"text-right col\">\r\n            <fa name=\"angle-double-down\" animation=\"spin\"></fa>\r\n            <fa name=\"angle-double-up\"></fa>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div id=\"jeweNaBoboCollapse\" class=\"collapse show\" arialabelledby=\"jeweNaBoboHeading\" data-parent=\"#personalProjectAccordionParent\">\r\n        <div class=\"card-body\">\r\n          <p>\r\n            {{ 'personalProject.description' | translate }}:\r\n            {{ 'personalProject.description.jewe.na.bobo.1' | translate  }}\r\n            <br>\r\n            {{ 'personalProject.description.jewe.na.bobo.2' | translate  }}\r\n            <br>\r\n            {{ 'personalProject.description.jewe.na.bobo.3' | translate  }}\r\n            <br>\r\n            {{ 'personalProject.description.jewe.na.bobo.4' | translate  }}\r\n            <br>\r\n            {{ 'personalProject.description.jewe.na.bobo.5' | translate  }}\r\n            <a href=\"https://jewenabobo.site\">\r\n              {{ 'personalProject.description.jewe.na.bobo.6' | translate  }}\r\n            </a>\r\n          </p>\r\n          <p>\r\n            {{ 'developmentProgress' | translate }}\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    -->\r\n\r\n    <!--\r\n    <div class=\"card\">\r\n      <div class=\"card-header btn row list-content-title\" id=\"yceaGreenHeading\" data-toggle=\"collapse\"\r\n        data-target=\"#yceaGreenCollapse\" aria-expanded=\"true\" aria-controls=\"yceaGreenCollapse\">\r\n        <div class=\"row\">\r\n          <div class=\"text-justify col\">YCEA green</div>\r\n          <div class=\"text-right col\">\r\n            <fa name=\"angle-double-down\" animation=\"spin\"></fa>\r\n            <fa name=\"angle-double-up\"></fa>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div id=\"yceaGreenCollapse\" class=\"collapse\" aria-labelledby=\"yceaGreenHeading\" data-parent=\"#personalProjectAccordionParent\">\r\n        <div class=\"card-body\">\r\n          <p>\r\n            {{ 'personalProject.description' | translate }}:\r\n            {{ 'personalProject.description.ycea.green.1' | translate  }}\r\n            <a href=\"https://ycea-green.site\">\r\n              {{ 'personalProject.description.ycea.green.2.site' | translate  }}\r\n            </a>\r\n          </p>\r\n          <p>\r\n            {{ 'developmentProgress' | translate }}\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    -->\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-header btn row list-content-title\" id=\"ndikoNdaklinkodaHeading\" data-toggle=\"collapse\"\r\n        data-target=\"#ndikoNdaklinkodaCollapse\" aria-expanded=\"true\" aria-controls=\"ndikoNdaklinkodaCollapse\">\r\n        <div class=\"row\">\r\n          <div class=\"text-justify col\">NdikoNdaklinkoda</div>\r\n          <div class=\"text-right col\">\r\n            <fa name=\"angle-double-down\" animation=\"spin\"></fa>\r\n            <fa name=\"angle-double-up\"></fa>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div id=\"ndikoNdaklinkodaCollapse\" class=\"collapse\" arialabelledby=\"ndikoNdaklinkodaHeading\" data-parent=\"#personalProjectAccordionParent\">\r\n        <div class=\"card-body\">\r\n          <p>\r\n            {{ 'personalProject.description' | translate }}:\r\n            {{ 'personalProject.description.ndiko.ndaklinkoda' | translate  }}\r\n          </p>\r\n          <p>\r\n            {{ 'developmentProgress' | translate }}\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-header btn row list-content-title\" id=\"kubahoNezaResidenceHeading\" data-toggle=\"collapse\"\r\n        data-target=\"#kubahoNezaResidenceCollapse\" aria-expanded=\"true\" aria-controls=\"kubahoNezaResidenceCollapse\">\r\n        <div class=\"row\">\r\n          <div class=\"text-justify col\">KubahoNezaResidence</div>\r\n          <div class=\"text-right col\">\r\n            <fa name=\"angle-double-down\" animation=\"spin\"></fa>\r\n            <fa name=\"angle-double-up\"></fa>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div id=\"kubahoNezaResidenceCollapse\" class=\"collapse\" aria-labelledby=\"kubahoNezaResidenceHeading\" data-parent=\"#personalProjectAccordionParent\">\r\n        <div class=\"card-body\">\r\n          <p>\r\n            {{ 'personalProject.description' | translate }}:\r\n            {{ 'personalProject.description.kubaho.neza.residence' | translate  }}\r\n          </p>\r\n          <p>\r\n            {{ 'developmentProgress' | translate }}\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
                        if (e.indexOf(p[i]) < 0)
                            t[p[i]] = s[p[i]];
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/$$_lazy_route_resource lazy recursive": 
        /*!**********************************************************!*\
          !*** ./src/$$_lazy_route_resource lazy namespace object ***!
          \**********************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'FiacreNsanzabandiCleanCode';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: HttpLoaderFactory, AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () { return HttpLoaderFactory; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
            /* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
            /* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.js");
            /* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
            /* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
            /* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cv/cv.component */ "./src/app/cv/cv.component.ts");
            /* harmony import */ var _personal_projects_personal_projects_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./personal-projects/personal-projects.component */ "./src/app/personal-projects/personal-projects.component.ts");
            /* harmony import */ var _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hobbies/hobbies.component */ "./src/app/hobbies/hobbies.component.ts");
            var appRoutes = [
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
                { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
                { path: 'cv', component: _cv_cv_component__WEBPACK_IMPORTED_MODULE_12__["CvComponent"] },
                { path: 'personalProjects', component: _personal_projects_personal_projects_component__WEBPACK_IMPORTED_MODULE_13__["PersonalProjectsComponent"] },
                { path: 'hobbies', component: _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_14__["HobbiesComponent"] },
                { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] }
            ];
            function HttpLoaderFactory(httpClient) {
                return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](httpClient, './assets/i18n/', '.json');
            }
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                        _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                        _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                        _cv_cv_component__WEBPACK_IMPORTED_MODULE_12__["CvComponent"],
                        _personal_projects_personal_projects_component__WEBPACK_IMPORTED_MODULE_13__["PersonalProjectsComponent"],
                        _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_14__["HobbiesComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__["PdfViewerModule"],
                        angular_font_awesome__WEBPACK_IMPORTED_MODULE_8__["AngularFontAwesomeModule"],
                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                            loader: {
                                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                                useFactory: HttpLoaderFactory,
                                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]]
                            }
                        }),
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes)
                    ],
                    providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/cv/cv.component.css": 
        /*!*************************************!*\
          !*** ./src/app/cv/cv.component.css ***!
          \*************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".download-pdf-error-message {\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3YvY3YuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2N2L2N2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG93bmxvYWQtcGRmLWVycm9yLW1lc3NhZ2Uge1xyXG4gICAgY29sb3I6IHJlZDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/cv/cv.component.ts": 
        /*!************************************!*\
          !*** ./src/app/cv/cv.component.ts ***!
          \************************************/
        /*! exports provided: CvComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvComponent", function () { return CvComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CvComponent = /** @class */ (function () {
                function CvComponent() {
                    this.cvPdfUrl = 'assets/files/CV-Europass-20200501-Nsanzabandi-EN.pdf';
                    this.isPdfVisible = true;
                    this.isDownloadMessageVisible = false;
                }
                CvComponent.prototype.ngOnInit = function () {
                };
                CvComponent.prototype.setCvPdfUrl = function () {
                    if (this.cvPdfUrl === '') {
                        this.isPdfVisible = true;
                        this.cvPdfUrl = 'assets/files/fiacreNsanzabandiCV.pdf';
                    }
                    else {
                        this.isPdfVisible = false;
                        this.cvPdfUrl = '';
                    }
                };
                CvComponent.prototype.deleteCvPdfUrl = function () {
                    this.isPdfVisible = false;
                };
                /**
                 * Show the CV PDF download message.
                 * @author fnsanzabandi
                 */
                CvComponent.prototype.showCvPdfDownloadMessage = function () {
                    this.isDownloadMessageVisible = true;
                };
                return CvComponent;
            }());
            CvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-cv',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cv.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cv/cv.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cv.component.css */ "./src/app/cv/cv.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], CvComponent);
            /***/ 
        }),
        /***/ "./src/app/header/header.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/header/header.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".languageDiv {\r\n    min-width: 6rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYW5ndWFnZURpdiB7XHJcbiAgICBtaW4td2lkdGg6IDZyZW07XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/header/header.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/header/header.component.ts ***!
          \********************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent(translateService) {
                    this.translateService = translateService;
                    this.actualRoute = '/home';
                    this.actualLanguage = 'Deutsch';
                    translateService.setDefaultLang('de');
                }
                /**
                 * Swittches the language.
                 * @param language the language to set
                 */
                HeaderComponent.prototype.switchLanguage = function (language) {
                    this.translateService.use(language);
                    this.selectTheLanguageToPrint(language);
                };
                /**
                 * Selects the language to print.
                 * @param language the language to set
                 */
                HeaderComponent.prototype.selectTheLanguageToPrint = function (language) {
                    switch (language) {
                        case 'en': {
                            this.actualLanguage = 'English';
                            break;
                        }
                        case 'fr': {
                            this.actualLanguage = 'Français';
                            break;
                        }
                        case 'de': {
                            this.actualLanguage = 'Deutsch';
                            break;
                        }
                    }
                };
                HeaderComponent.prototype.ngOnInit = function () {
                };
                /**
                 * Sets the actual root.
                 * @param actualRoute the actual root
                 */
                HeaderComponent.prototype.setActualRoute = function (actualRoute) {
                    this.actualRoute = actualRoute;
                };
                return HeaderComponent;
            }());
            HeaderComponent.ctorParameters = function () { return [
                { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
            ]; };
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/hobbies/hobbies.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/hobbies/hobbies.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvYmJpZXMvaG9iYmllcy5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/hobbies/hobbies.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/hobbies/hobbies.component.ts ***!
          \**********************************************/
        /*! exports provided: HobbiesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HobbiesComponent", function () { return HobbiesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HobbiesComponent = /** @class */ (function () {
                function HobbiesComponent() {
                }
                HobbiesComponent.prototype.ngOnInit = function () {
                };
                return HobbiesComponent;
            }());
            HobbiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-hobbies',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hobbies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hobbies/hobbies.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hobbies.component.css */ "./src/app/hobbies/hobbies.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], HobbiesComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.css": 
        /*!*****************************************!*\
          !*** ./src/app/home/home.component.css ***!
          \*****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/personal-projects/personal-projects.component.css": 
        /*!*******************************************************************!*\
          !*** ./src/app/personal-projects/personal-projects.component.css ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbmFsLXByb2plY3RzL3BlcnNvbmFsLXByb2plY3RzLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/personal-projects/personal-projects.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/personal-projects/personal-projects.component.ts ***!
          \******************************************************************/
        /*! exports provided: PersonalProjectsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalProjectsComponent", function () { return PersonalProjectsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PersonalProjectsComponent = /** @class */ (function () {
                function PersonalProjectsComponent() {
                }
                PersonalProjectsComponent.prototype.ngOnInit = function () {
                };
                return PersonalProjectsComponent;
            }());
            PersonalProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-personal-projects',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./personal-projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/personal-projects/personal-projects.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./personal-projects.component.css */ "./src/app/personal-projects/personal-projects.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], PersonalProjectsComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\fnsanzabandi\workspace\angular\FiacreNsanzabandiCleanCode\src\main.ts */ "./src/main.ts");
            /***/ 
        }),
        /***/ 1: 
        /*!**********************!*\
          !*** zlib (ignored) ***!
          \**********************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        }),
        /***/ 2: 
        /*!********************!*\
          !*** fs (ignored) ***!
          \********************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        }),
        /***/ 3: 
        /*!**********************!*\
          !*** http (ignored) ***!
          \**********************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        }),
        /***/ 4: 
        /*!***********************!*\
          !*** https (ignored) ***!
          \***********************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            /* (ignored) */
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map