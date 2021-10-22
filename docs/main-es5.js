(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkfiacre_nsanzabandi_clean_code"] = self["webpackChunkfiacre_nsanzabandi_clean_code"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./header/header.component */
      3482);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      1258);

      var _AppComponent = function _AppComponent() {
        _classCallCheck(this, _AppComponent);

        this.title = 'FiacreNsanzabandiCleanCode';
      };

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        consts: [[1, "container-fluid"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HttpLoaderFactory": function HttpLoaderFactory() {
          return (
            /* binding */
            _HttpLoaderFactory
          );
        },

        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/platform-browser */
      1570);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/http */
      3882);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      325);
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      9476);
      /* harmony import */


      var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ng2-pdf-viewer */
      5897);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      2334);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header/header.component */
      3482);
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home/home.component */
      5067);
      /* harmony import */


      var _cv_cv_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./cv/cv.component */
      4725);
      /* harmony import */


      var _personal_projects_personal_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./personal-projects/personal-projects.component */
      2912);
      /* harmony import */


      var _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./hobbies/hobbies.component */
      509);
      /* harmony import */


      var _music1_music1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./music1/music1.component */
      9998);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var appRoutes = [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent
      }, {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent
      }, {
        path: 'cv',
        component: _cv_cv_component__WEBPACK_IMPORTED_MODULE_4__.CvComponent
      }, {
        path: 'personalProjects',
        component: _personal_projects_personal_projects_component__WEBPACK_IMPORTED_MODULE_5__.PersonalProjectsComponent
      }, {
        path: 'hobbies',
        component: _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_6__.HobbiesComponent
      }, {
        path: 'hobbies/ntimuze-muhave-mutumaramaza',
        component: _music1_music1_component__WEBPACK_IMPORTED_MODULE_7__.Music1Component
      }, {
        path: '**',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent
      }];

      function _HttpLoaderFactory(httpClient) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_8__.TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
      }

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        providers: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_0__.PdfViewerModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FontAwesomeModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule.forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateLoader,
            useFactory: _HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient]
          }
        }), _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forRoot(appRoutes, {
          relativeLinkResolution: 'legacy'
        }), _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FontAwesomeModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _cv_cv_component__WEBPACK_IMPORTED_MODULE_4__.CvComponent, _personal_projects_personal_projects_component__WEBPACK_IMPORTED_MODULE_5__.PersonalProjectsComponent, _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_6__.HobbiesComponent, _music1_music1_component__WEBPACK_IMPORTED_MODULE_7__.Music1Component],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_0__.PdfViewerModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FontAwesomeModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__.FontAwesomeModule]
        });
      })();
      /***/

    },

    /***/
    4725:
    /*!************************************!*\
      !*** ./src/app/cv/cv.component.ts ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CvComponent": function CvComponent() {
          return (
            /* binding */
            _CvComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      2457);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ng2-pdf-viewer */
      5897);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      2334);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      325);

      var _CvComponent = /*#__PURE__*/function () {
        function _CvComponent() {
          _classCallCheck(this, _CvComponent);

          this.faCloudDownloadAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faCloudDownloadAlt;
        }

        _createClass(_CvComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _CvComponent;
      }();

      _CvComponent.ɵfac = function CvComponent_Factory(t) {
        return new (t || _CvComponent)();
      };

      _CvComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _CvComponent,
        selectors: [["app-cv"]],
        decls: 15,
        vars: 13,
        consts: [[1, "card"], [1, "card-body"], [1, "card-title", "list-content-title"], [3, "src"], ["role", "button", 1, "btn", "btn-primary", 3, "href"], [3, "icon"]],
        template: function CvComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "pdf-viewer", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "fa-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "br");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 5, "cv.pdf"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 7, "cv.file.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 9, "cv.file.name"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faCloudDownloadAlt);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 11, "cv.pdf.download"), " ");
          }
        },
        directives: [ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_0__.PdfViewerComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
        styles: [".download-pdf-error-message[_ngcontent-%COMP%] {\r\n    color: red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoiY3YuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb3dubG9hZC1wZGYtZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    3482:
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* binding */
            _HeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngx-translate/core */
      325);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _service_actual_route_keeper_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../service/actual-route-keeper.service */
      2493);

      var _HeaderComponent = /*#__PURE__*/function () {
        function _HeaderComponent(translateService, router, actualRouteKeeperService) {
          _classCallCheck(this, _HeaderComponent);

          this.translateService = translateService;
          this.router = router;
          this.actualRouteKeeperService = actualRouteKeeperService;
          this.actualRoute = '/home';
          this.actualLanguage = 'Deutsch';
          translateService.setDefaultLang('de');
        }
        /**
         * Swittches the language.
         * @param language the language to set
         */


        _createClass(_HeaderComponent, [{
          key: "switchLanguage",
          value: function switchLanguage(language) {
            this.translateService.use(language);
            this.updateActualRoute();
            this.selectTheLanguageToPrint(language);
          }
        }, {
          key: "updateActualRoute",
          value: function updateActualRoute() {
            var _this = this;

            this.subscription = this.actualRouteKeeperService.actualRouteObservable.subscribe(function (route) {
              return _this.actualRoute = route;
            });
          }
          /**
           * Selects the language to print.
           * @param language the language to set
           */

        }, {
          key: "selectTheLanguageToPrint",
          value: function selectTheLanguageToPrint(language) {
            switch (language) {
              case 'en':
                {
                  this.actualLanguage = 'English';
                  break;
                }

              case 'fr':
                {
                  this.actualLanguage = 'Français';
                  break;
                }

              case 'de':
                {
                  this.actualLanguage = 'Deutsch';
                  break;
                }
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.updateActualRoute();
          }
        }, {
          key: "setActualRoute",
          value: function setActualRoute(actualRoute) {
            this.actualRouteKeeperService.changeRoute(actualRoute);
            this.actualRoute = actualRoute;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }]);

        return _HeaderComponent;
      }();

      _HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || _HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_actual_route_keeper_service__WEBPACK_IMPORTED_MODULE_0__.ActualRouteKeeperService));
      };

      _HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _HeaderComponent,
        selectors: [["app-header"]],
        decls: 34,
        vars: 16,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["routerLink", "home", 1, "navbar-brand", 3, "click"], ["src", "./assets/images/fiacreNsanzabandi.png", "alt", "fiacreNsanzabandi.png", 1, "img-fluid", "rounded", "mx-auto", "d-block"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarTogglerDemo02", "aria-controls", "navbarTogglerDemo02", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarTogglerDemo02", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto", "mt-2", "mt-lg-0"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "home", 1, "nav-link", 3, "click"], ["routerLink", "cv", 1, "nav-link", 3, "click"], ["routerLink", "personalProjects", 1, "nav-link", 3, "click"], ["routerLink", "hobbies", 1, "nav-link", 3, "click"], [1, "navbar-nav"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", "languageDiv"], [1, "dropdown-item", 3, "routerLink", "click"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_1_listener() {
              return ctx.setActualRoute("/home");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_8_listener() {
              return ctx.setActualRoute("/home");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_12_listener() {
              return ctx.setActualRoute("/cv");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_16_listener() {
              return ctx.setActualRoute("/personalProjects");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_20_listener() {
              return ctx.setActualRoute("/hobbies");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ul", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_28_listener() {
              return ctx.switchLanguage("en");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "English");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_30_listener() {
              return ctx.switchLanguage("fr");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Fran\xE7ais");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_32_listener() {
              return ctx.switchLanguage("de");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Deutsch");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 8, "home"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 10, "cv"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 12, "personalProjects"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 14, "hobbies"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.actualLanguage, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.actualRoute);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.actualRoute);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx.actualRoute);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
        styles: [".languageDiv[_ngcontent-%COMP%] {\r\n    min-width: 6rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYW5ndWFnZURpdiB7XHJcbiAgICBtaW4td2lkdGg6IDZyZW07XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    509:
    /*!**********************************************!*\
      !*** ./src/app/hobbies/hobbies.component.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HobbiesComponent": function HobbiesComponent() {
          return (
            /* binding */
            _HobbiesComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      2457);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      2334);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      1258);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      325);

      var _HobbiesComponent = /*#__PURE__*/function () {
        function _HobbiesComponent() {
          _classCallCheck(this, _HobbiesComponent);

          this.faAngleDoubleDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faAngleDoubleDown;
        }

        _createClass(_HobbiesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _HobbiesComponent;
      }();

      _HobbiesComponent.ɵfac = function HobbiesComponent_Factory(t) {
        return new (t || _HobbiesComponent)();
      };

      _HobbiesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _HobbiesComponent,
        selectors: [["app-hobbies"]],
        decls: 58,
        vars: 39,
        consts: [["id", "accordionExample", 1, "accordion"], [1, "card"], ["id", "headingOne", "data-toggle", "collapse", "data-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "card-header", "btn", "row", "list-content-title"], [1, "row"], [1, "text-justify", "col"], [1, "text-right", "col"], [3, "icon", "spin"], ["id", "collapseOne", "arialabelledby", "headingOne", "data-parent", "#accordionExample", 1, "collapse", "show"], [1, "card-body"], ["routerLink", "/hobbies/ntimuze-muhave-mutumaramaza"], ["id", "headingTwo", "data-toggle", "collapse", "data-target", "#collapseTwo", "aria-expanded", "true", "aria-controls", "collapseTwo", 1, "card-header", "btn", "row", "list-content-title"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-parent", "#accordionExample", 1, "collapse"], ["id", "headingThree", "data-toggle", "collapse", "data-target", "#collapseThree", "aria-expanded", "true", "aria-controls", "collapseThree", 1, "card-header", "btn", "row", "list-content-title"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-parent", "#accordionExample", 1, "collapse"]],
        template: function HobbiesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](54, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](57, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 17, "hobbies.music"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faAngleDoubleDown)("spin", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 19, "hobbies.music.description"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 21, "hobbies.music.some.of.my.music"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 23, "hobbies.music.music1.title"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 25, "developmentProgress"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 27, "hobbies.sport"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faAngleDoubleDown)("spin", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 29, "hobbies.sport.description"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](41, 31, "developmentProgress"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 33, "hobbies.gardening"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faAngleDoubleDown)("spin", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](54, 35, "hobbies.gardening.description"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](57, 37, "developmentProgress"), " ");
          }
        },
        directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob2JiaWVzLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    5067:
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeComponent": function HomeComponent() {
          return (
            /* binding */
            _HomeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      325);

      var _HomeComponent = /*#__PURE__*/function () {
        function _HomeComponent() {
          _classCallCheck(this, _HomeComponent);
        }

        _createClass(_HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _HomeComponent;
      }();

      _HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || _HomeComponent)();
      };

      _HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _HomeComponent,
        selectors: [["app-home"]],
        decls: 5,
        vars: 3,
        consts: [[1, "container"], [1, "text-center", 3, "innerHTML"], ["src", "assets/images/fiacreNsanzabandiBotheImage.jpg", "alt", "FiacreNsanzabandi profile picture", 1, "rounded", "img-fluid"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "home.presentation"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
          }
        },
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    9998:
    /*!********************************************!*\
      !*** ./src/app/music1/music1.component.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Music1Component": function Music1Component() {
          return (
            /* binding */
            _Music1Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _service_actual_route_keeper_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../service/actual-route-keeper.service */
      2493);
      /* harmony import */


      var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ng2-pdf-viewer */
      5897);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      2334);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-translate/core */
      325);

      var _Music1Component = /*#__PURE__*/function () {
        function _Music1Component(actualRouteKeeperService) {
          _classCallCheck(this, _Music1Component);

          this.actualRouteKeeperService = actualRouteKeeperService;
          this.route = '/hobbies/ntimuze-muhave-mutumaramaza';
        }

        _createClass(_Music1Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.actualRouteKeeperService.changeRoute(this.route);
          }
        }]);

        return _Music1Component;
      }();

      _Music1Component.ɵfac = function Music1Component_Factory(t) {
        return new (t || _Music1Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_actual_route_keeper_service__WEBPACK_IMPORTED_MODULE_0__.ActualRouteKeeperService));
      };

      _Music1Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _Music1Component,
        selectors: [["app-music1"]],
        decls: 12,
        vars: 9,
        consts: [[1, "card"], [1, "card-body"], [3, "src"], ["role", "button", 1, "btn", "btn-primary", 3, "href"], ["name", "cloud-download"]],
        template: function Music1Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "pdf-viewer", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "fa-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, "hobbies.music.music1.file.name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 5, "hobbies.music.music1.file.name"), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 7, "hobbies.music.pdf.download"), " ");
          }
        },
        directives: [ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_1__.PdfViewerComponent, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FaIconComponent],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtdXNpYzEuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    2912:
    /*!******************************************************************!*\
      !*** ./src/app/personal-projects/personal-projects.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PersonalProjectsComponent": function PersonalProjectsComponent() {
          return (
            /* binding */
            _PersonalProjectsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      2457);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      2334);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      325);

      var _PersonalProjectsComponent = /*#__PURE__*/function () {
        function _PersonalProjectsComponent() {
          _classCallCheck(this, _PersonalProjectsComponent);

          this.faAngleDoubleDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faAngleDoubleDown;
        }

        _createClass(_PersonalProjectsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _PersonalProjectsComponent;
      }();

      _PersonalProjectsComponent.ɵfac = function PersonalProjectsComponent_Factory(t) {
        return new (t || _PersonalProjectsComponent)();
      };

      _PersonalProjectsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _PersonalProjectsComponent,
        selectors: [["app-personal-projects"]],
        decls: 35,
        vars: 22,
        consts: [["id", "personalProjectAccordionParent", 1, "accordion"], [1, "card"], ["id", "ndikoNdaklinkodaHeading", "data-toggle", "collapse", "data-target", "#ndikoNdaklinkodaCollapse", "aria-expanded", "true", "aria-controls", "ndikoNdaklinkodaCollapse", 1, "card-header", "btn", "row", "list-content-title"], [1, "row"], [1, "text-justify", "col"], [1, "text-right", "col"], [3, "icon", "spin"], ["id", "ndikoNdaklinkodaCollapse", "arialabelledby", "ndikoNdaklinkodaHeading", "data-parent", "#personalProjectAccordionParent", 1, "collapse", "show"], [1, "card-body"], ["id", "kubahoNezaResidenceHeading", "data-toggle", "collapse", "data-target", "#kubahoNezaResidenceCollapse", "aria-expanded", "true", "aria-controls", "kubahoNezaResidenceCollapse", 1, "card-header", "btn", "row", "list-content-title"], ["id", "kubahoNezaResidenceCollapse", "aria-labelledby", "kubahoNezaResidenceHeading", "data-parent", "#personalProjectAccordionParent", 1, "collapse"]],
        template: function PersonalProjectsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "NdikoNdaklinkoda");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "KubahoNezaResidence");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faAngleDoubleDown)("spin", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 10, "personalProject.description"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 12, "personalProject.description.ndiko.ndaklinkoda"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 14, "developmentProgress"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faAngleDoubleDown)("spin", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 16, "personalProject.description"), ": ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 18, "personalProject.description.kubaho.neza.residence"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 20, "developmentProgress"), " ");
          }
        },
        directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FaIconComponent],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJzb25hbC1wcm9qZWN0cy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /***/
    },

    /***/
    2493:
    /*!********************************************************!*\
      !*** ./src/app/service/actual-route-keeper.service.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ActualRouteKeeperService": function ActualRouteKeeperService() {
          return (
            /* binding */
            _ActualRouteKeeperService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      6491);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ActualRouteKeeperService = /*#__PURE__*/function () {
        function _ActualRouteKeeperService() {
          _classCallCheck(this, _ActualRouteKeeperService);

          this.actualRouteSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('/home');
          this.actualRouteObservable = this.actualRouteSubject.asObservable();
        }

        _createClass(_ActualRouteKeeperService, [{
          key: "changeRoute",
          value: function changeRoute(route) {
            this.actualRouteSubject.next(route);
          }
        }]);

        return _ActualRouteKeeperService;
      }();

      _ActualRouteKeeperService.ɵfac = function ActualRouteKeeperService_Factory(t) {
        return new (t || _ActualRouteKeeperService)();
      };

      _ActualRouteKeeperService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _ActualRouteKeeperService,
        factory: _ActualRouteKeeperService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      1570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    172:
    /*!********************!*\
      !*** fs (ignored) ***!
      \********************/

    /***/
    function _() {
      /* (ignored) */

      /***/
    },

    /***/
    2001:
    /*!**********************!*\
      !*** http (ignored) ***!
      \**********************/

    /***/
    function _() {
      /* (ignored) */

      /***/
    },

    /***/
    3779:
    /*!***********************!*\
      !*** https (ignored) ***!
      \***********************/

    /***/
    function _() {
      /* (ignored) */

      /***/
    },

    /***/
    2258:
    /*!**********************!*\
      !*** zlib (ignored) ***!
      \**********************/

    /***/
    function _() {
      /* (ignored) */

      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map