(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'FiacreNsanzabandiCleanCode';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cv/cv.component */ "./src/app/cv/cv.component.ts");
/* harmony import */ var _personal_projects_personal_projects_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./personal-projects/personal-projects.component */ "./src/app/personal-projects/personal-projects.component.ts");
/* harmony import */ var _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hobbies/hobbies.component */ "./src/app/hobbies/hobbies.component.ts");














var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'cv', component: _cv_cv_component__WEBPACK_IMPORTED_MODULE_11__["CvComponent"] },
    { path: 'personalProjects', component: _personal_projects_personal_projects_component__WEBPACK_IMPORTED_MODULE_12__["PersonalProjectsComponent"] },
    { path: 'hobbies', component: _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_13__["HobbiesComponent"] },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] }
];
function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_6__["TranslateHttpLoader"](httpClient);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _cv_cv_component__WEBPACK_IMPORTED_MODULE_11__["CvComponent"],
                _personal_projects_personal_projects_component__WEBPACK_IMPORTED_MODULE_12__["PersonalProjectsComponent"],
                _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_13__["HobbiesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__["PdfViewerModule"],
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
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cv/cv.component.css":
/*!*************************************!*\
  !*** ./src/app/cv/cv.component.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N2L2N2LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/cv/cv.component.html":
/*!**************************************!*\
  !*** ./src/app/cv/cv.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n  <li class=\"list-group-item\">\n    <span class=\"list-content-title\">{{ 'cv.skillsOverview' | translate }}</span>\n    <div>\n      <img class=\"img-responsive img-thumbnail\" src=\"assets/images/skills.jpg\" alt=\"fiacreNsanzabandiProfilePicture\">\n    </div>\n  </li>\n  <li class=\"list-group-item\">\n    <span class=\"list-content-title\">{{ 'cv.pdf' | translate }}</span>\n    <div>\n      <pdf-viewer src=\"assets/files/fiacreNsanzabandiCV.pdf\">\n      </pdf-viewer>\n    </div>\n  </li>\n</ul>\n\n<!-- <div id=\"accordion\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <a class=\"card-link\" data-toggle=\"collapse\" href=\"#skillsOverview\">\n          {{ 'cv.skillsOverView' | translate }}\n      </a>\n    </div>\n    <div id=\"skillsOverview\" class=\"collapse show\" data-parent=\"#accordion\">\n      <div class=\"card-body\">\n          <img class=\"img-responsive img-thumbnail\" src=\"assets/images/skills.jpg\"\n          alt=\"fiacreNsanzabandiProfilePicture\">\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      <a class=\"collapsed card-link\" data-toggle=\"collapse\" href=\"#collapseTwo\">\n        {{ 'cv.pdf' | translate }}\n      </a>\n    </div>\n    <div id=\"collapseTwo\" class=\"collapse\" data-parent=\"#accordion\">\n      <div class=\"card-body\">\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\n        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat.\n      </div>\n    </div>\n  </div>\n</div> -->"

/***/ }),

/***/ "./src/app/cv/cv.component.ts":
/*!************************************!*\
  !*** ./src/app/cv/cv.component.ts ***!
  \************************************/
/*! exports provided: CvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvComponent", function() { return CvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CvComponent = /** @class */ (function () {
    function CvComponent() {
    }
    CvComponent.prototype.ngOnInit = function () {
    };
    CvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cv',
            template: __webpack_require__(/*! ./cv.component.html */ "./src/app/cv/cv.component.html"),
            styles: [__webpack_require__(/*! ./cv.component.css */ "./src/app/cv/cv.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CvComponent);
    return CvComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <ul class=\"nav navbar-nav\">\n      <li routerLinkActive=\"active\" class=\"nav-item\">\n        <a routerLink=\"home\" (click)=\"setActualRoute('/home')\">{{ 'home' | translate }}</a>\n      </li>\n      <li routerLinkActive=\"active\" class=\"nav-item\">\n        <a routerLink=\"cv\" (click)=\"setActualRoute('/cv')\">{{ 'cv' | translate }}</a>\n      </li>\n      <li routerLinkActive=\"active\" class=\"nav-item\">\n        <a routerLink=\"personalProjects\" (click)=\"setActualRoute('/personalProject')\">{{ 'personalProjects' | translate }}</a>\n      </li>\n      <li routerLinkActive=\"active\" class=\"nav-item\">\n        <a routerLink=\"hobbies\" (click)=\"setActualRoute('/hobbies')\">{{ 'hobbies' | translate }}</a>\n      </li>\n    </ul>\n\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li class=\"nav-item\">\n        <a [routerLink]=\"actualRoute\" (click)=\"switchLanguage('en')\">EN</a>\n      </li>\n      <li class=\"nav-item\">\n        <a [routerLink]=\"actualRoute\" (click)=\"switchLanguage('fr')\">FR</a>\n      </li>\n      <li class=\"nav-item\">\n        <a [routerLink]=\"actualRoute\" (click)=\"switchLanguage('de')\">DE</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(translateService) {
        this.translateService = translateService;
        this.actualRoute = "/home";
        translateService.setDefaultLang('de');
    }
    /**
     * Swittches the language.
     * @param language
     */
    HeaderComponent.prototype.switchLanguage = function (language) {
        this.translateService.use(language);
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    /**
     * Sets the actual root.
     * @param actualRoute
     */
    HeaderComponent.prototype.setActualRoute = function (actualRoute) {
        this.actualRoute = actualRoute;
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/hobbies/hobbies.component.css":
/*!***********************************************!*\
  !*** ./src/app/hobbies/hobbies.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvYmJpZXMvaG9iYmllcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/hobbies/hobbies.component.html":
/*!************************************************!*\
  !*** ./src/app/hobbies/hobbies.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n  <li class=\"list-group-item\">\n    <span class=\"list-content-title\">{{ 'hobbies.music' | translate }}</span>\n    <p>\n      {{ 'hobbies.music.description' | translate }}\n    </p>\n    <p>\n      {{ 'developmentProgress' | translate }}\n    </p>\n  </li>\n  <li class=\"list-group-item\">\n    <span class=\"list-content-title\">{{ 'hobbies.sport' | translate }}</span>\n    <p>\n      {{ 'hobbies.sport.description' | translate }}\n    </p>\n    <p>\n      {{ 'developmentProgress' | translate }}\n    </p>\n  </li>\n  <li class=\"list-group-item\">\n    <span class=\"list-content-title\">{{ 'hobbies.gardening' | translate }}</span>\n    <p>\n      {{ 'hobbies.gardening.description' | translate }}\n    </p>\n    <p>\n      {{ 'developmentProgress' | translate }}\n    </p>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/hobbies/hobbies.component.ts":
/*!**********************************************!*\
  !*** ./src/app/hobbies/hobbies.component.ts ***!
  \**********************************************/
/*! exports provided: HobbiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HobbiesComponent", function() { return HobbiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HobbiesComponent = /** @class */ (function () {
    function HobbiesComponent() {
    }
    HobbiesComponent.prototype.ngOnInit = function () {
    };
    HobbiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hobbies',
            template: __webpack_require__(/*! ./hobbies.component.html */ "./src/app/hobbies/hobbies.component.html"),
            styles: [__webpack_require__(/*! ./hobbies.component.css */ "./src/app/hobbies/hobbies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HobbiesComponent);
    return HobbiesComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <p class=\"text-center\" [innerHTML]=\"'home.presentation' | translate\">\n    </p>\n  </div>\n  <div class=\"row\">\n    <img class=\"img-responsive img-rounded\" src=\"assets/images/fiacreNsanzabandiBotheImage.jpg\"\n      alt=\"fiacreNsanzabandiProfilePicture\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/personal-projects/personal-projects.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/personal-projects/personal-projects.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbmFsLXByb2plY3RzL3BlcnNvbmFsLXByb2plY3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/personal-projects/personal-projects.component.html":
/*!********************************************************************!*\
  !*** ./src/app/personal-projects/personal-projects.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n  <li class=\"list-group-item\">\n    <span class=\"list-content-title\">NdikoNdaklinkoda</span>\n    <p>\n      Budget: 10 euros\n    </p>\n    <p>\n      {{ 'developmentProgress' | translate }}\n    </p>\n  </li>\n  <li class=\"list-group-item\">\n    <span class=\"list-content-title\">KubahoNezaResidence</span>\n    <p>\n      Budget: 10 euros\n    </p>\n    <p>\n      {{ 'developmentProgress' | translate }}\n    </p>\n  </li>\n  <li class=\"list-group-item\">\n    <span class=\"list-content-title\">YCEA green</span>\n    <p>\n      Budget: 10 euros\n    </p>\n    <p>\n      {{ 'developmentProgress' | translate }}\n    </p>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/personal-projects/personal-projects.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/personal-projects/personal-projects.component.ts ***!
  \******************************************************************/
/*! exports provided: PersonalProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalProjectsComponent", function() { return PersonalProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PersonalProjectsComponent = /** @class */ (function () {
    function PersonalProjectsComponent() {
    }
    PersonalProjectsComponent.prototype.ngOnInit = function () {
    };
    PersonalProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-personal-projects',
            template: __webpack_require__(/*! ./personal-projects.component.html */ "./src/app/personal-projects/personal-projects.component.html"),
            styles: [__webpack_require__(/*! ./personal-projects.component.css */ "./src/app/personal-projects/personal-projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PersonalProjectsComponent);
    return PersonalProjectsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\fnsanzabandi\angular-workspace\FiacreNsanzabandiCleanCode\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map