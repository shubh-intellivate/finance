function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["general-pages-general-pages-module"], {
  /***/
  "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js ***!
    \*******************************************************************************************/

  /*! exports provided: Geometry, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarComponent, PerfectScrollbarConfig, PerfectScrollbarDirective, PerfectScrollbarModule, Position */

  /***/
  function node_modulesNgxPerfectScrollbar__ivy_ngcc__Fesm2015NgxPerfectScrollbarJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Geometry", function () {
      return Geometry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PERFECT_SCROLLBAR_CONFIG", function () {
      return PERFECT_SCROLLBAR_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfectScrollbarComponent", function () {
      return PerfectScrollbarComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfectScrollbarConfig", function () {
      return PerfectScrollbarConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfectScrollbarDirective", function () {
      return PerfectScrollbarDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerfectScrollbarModule", function () {
      return PerfectScrollbarModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Position", function () {
      return Position;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! perfect-scrollbar */
    "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
    /* harmony import */


    var resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! resize-observer-polyfill */
    "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js");

    function PerfectScrollbarComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ps-at-top", ctx_r0.states.top)("ps-at-left", ctx_r0.states.left)("ps-at-right", ctx_r0.states.right)("ps-at-bottom", ctx_r0.states.bottom);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ps-indicator-show", ctx_r0.indicatorY && ctx_r0.interaction);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ps-indicator-show", ctx_r0.indicatorX && ctx_r0.interaction);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ps-indicator-show", ctx_r0.indicatorX && ctx_r0.interaction);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ps-indicator-show", ctx_r0.indicatorY && ctx_r0.interaction);
      }
    }

    var _c0 = ["*"];
    var PERFECT_SCROLLBAR_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('PERFECT_SCROLLBAR_CONFIG');

    var Geometry = function Geometry(x, y, w, h) {
      _classCallCheck(this, Geometry);

      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    };

    var Position = function Position(x, y) {
      _classCallCheck(this, Position);

      this.x = x;
      this.y = y;
    };

    var PerfectScrollbarEvents = ['psScrollY', 'psScrollX', 'psScrollUp', 'psScrollDown', 'psScrollLeft', 'psScrollRight', 'psYReachEnd', 'psYReachStart', 'psXReachEnd', 'psXReachStart'];

    var PerfectScrollbarConfig = /*#__PURE__*/function () {
      function PerfectScrollbarConfig() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, PerfectScrollbarConfig);

        this.assign(config);
      }

      _createClass(PerfectScrollbarConfig, [{
        key: "assign",
        value: function assign() {
          var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          for (var key in config) {
            this[key] = config[key];
          }
        }
      }]);

      return PerfectScrollbarConfig;
    }();

    var PerfectScrollbarDirective = /*#__PURE__*/function () {
      function PerfectScrollbarDirective(zone, differs, elementRef, platformId, defaults) {
        _classCallCheck(this, PerfectScrollbarDirective);

        this.zone = zone;
        this.differs = differs;
        this.elementRef = elementRef;
        this.platformId = platformId;
        this.defaults = defaults;
        this.instance = null;
        this.ro = null;
        this.timeout = null;
        this.animation = null;
        this.configDiff = null;
        this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.disabled = false;
        this.psScrollY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psScrollX = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psScrollUp = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psScrollDown = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psScrollLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psScrollRight = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psYReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psYReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psXReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psXReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
      }

      _createClass(PerfectScrollbarDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          if (!this.disabled && Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            var config = new PerfectScrollbarConfig(this.defaults);
            config.assign(this.config); // Custom configuration

            this.zone.runOutsideAngular(function () {
              _this2.instance = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["default"](_this2.elementRef.nativeElement, config);
            });

            if (!this.configDiff) {
              this.configDiff = this.differs.find(this.config || {}).create();
              this.configDiff.diff(this.config || {});
            }

            this.zone.runOutsideAngular(function () {
              _this2.ro = new resize_observer_polyfill__WEBPACK_IMPORTED_MODULE_6__["default"](function () {
                _this2.update();
              });

              if (_this2.elementRef.nativeElement.children[0]) {
                _this2.ro.observe(_this2.elementRef.nativeElement.children[0]);
              }

              _this2.ro.observe(_this2.elementRef.nativeElement);
            });
            this.zone.runOutsideAngular(function () {
              PerfectScrollbarEvents.forEach(function (eventName) {
                var eventType = eventName.replace(/([A-Z])/g, function (c) {
                  return "-".concat(c.toLowerCase());
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(_this2.elementRef.nativeElement, eventType).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["auditTime"])(20), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this2.ngDestroy)).subscribe(function (event) {
                  _this2[eventName].emit(event);
                });
              });
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this3 = this;

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.complete();

            if (this.ro) {
              this.ro.disconnect();
            }

            if (this.timeout && typeof window !== 'undefined') {
              window.clearTimeout(this.timeout);
            }

            this.zone.runOutsideAngular(function () {
              if (_this3.instance) {
                _this3.instance.destroy();
              }
            });
            this.instance = null;
          }
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (!this.disabled && this.configDiff && Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            var changes = this.configDiff.diff(this.config || {});

            if (changes) {
              this.ngOnDestroy();
              this.ngOnInit();
            }
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes['disabled'] && !changes['disabled'].isFirstChange() && Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
              if (changes['disabled'].currentValue === true) {
                this.ngOnDestroy();
              } else if (changes['disabled'].currentValue === false) {
                this.ngOnInit();
              }
            }
          }
        }
      }, {
        key: "ps",
        value: function ps() {
          return this.instance;
        }
      }, {
        key: "update",
        value: function update() {
          var _this4 = this;

          if (typeof window !== 'undefined') {
            if (this.timeout) {
              window.clearTimeout(this.timeout);
            }

            this.timeout = window.setTimeout(function () {
              if (!_this4.disabled && _this4.configDiff) {
                try {
                  _this4.zone.runOutsideAngular(function () {
                    if (_this4.instance) {
                      _this4.instance.update();
                    }
                  });
                } catch (error) {// Update can be finished after destroy so catch errors
                }
              }
            }, 0);
          }
        }
      }, {
        key: "geometry",
        value: function geometry() {
          var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'scroll';
          return new Geometry(this.elementRef.nativeElement[prefix + 'Left'], this.elementRef.nativeElement[prefix + 'Top'], this.elementRef.nativeElement[prefix + 'Width'], this.elementRef.nativeElement[prefix + 'Height']);
        }
      }, {
        key: "position",
        value: function position() {
          var absolute = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!absolute && this.instance) {
            return new Position(this.instance.reach.x || 0, this.instance.reach.y || 0);
          } else {
            return new Position(this.elementRef.nativeElement.scrollLeft, this.elementRef.nativeElement.scrollTop);
          }
        }
      }, {
        key: "scrollable",
        value: function scrollable() {
          var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'any';
          var element = this.elementRef.nativeElement;

          if (direction === 'any') {
            return element.classList.contains('ps--active-x') || element.classList.contains('ps--active-y');
          } else if (direction === 'both') {
            return element.classList.contains('ps--active-x') && element.classList.contains('ps--active-y');
          } else {
            return element.classList.contains('ps--active-' + direction);
          }
        }
      }, {
        key: "scrollTo",
        value: function scrollTo(x, y, speed) {
          if (!this.disabled) {
            if (y == null && speed == null) {
              this.animateScrolling('scrollTop', x, speed);
            } else {
              if (x != null) {
                this.animateScrolling('scrollLeft', x, speed);
              }

              if (y != null) {
                this.animateScrolling('scrollTop', y, speed);
              }
            }
          }
        }
      }, {
        key: "scrollToX",
        value: function scrollToX(x, speed) {
          this.animateScrolling('scrollLeft', x, speed);
        }
      }, {
        key: "scrollToY",
        value: function scrollToY(y, speed) {
          this.animateScrolling('scrollTop', y, speed);
        }
      }, {
        key: "scrollToTop",
        value: function scrollToTop(offset, speed) {
          this.animateScrolling('scrollTop', offset || 0, speed);
        }
      }, {
        key: "scrollToLeft",
        value: function scrollToLeft(offset, speed) {
          this.animateScrolling('scrollLeft', offset || 0, speed);
        }
      }, {
        key: "scrollToRight",
        value: function scrollToRight(offset, speed) {
          var left = this.elementRef.nativeElement.scrollWidth - this.elementRef.nativeElement.clientWidth;
          this.animateScrolling('scrollLeft', left - (offset || 0), speed);
        }
      }, {
        key: "scrollToBottom",
        value: function scrollToBottom(offset, speed) {
          var top = this.elementRef.nativeElement.scrollHeight - this.elementRef.nativeElement.clientHeight;
          this.animateScrolling('scrollTop', top - (offset || 0), speed);
        }
      }, {
        key: "scrollToElement",
        value: function scrollToElement(qs, offset, speed) {
          var element = this.elementRef.nativeElement.querySelector(qs);

          if (element) {
            var elementPos = element.getBoundingClientRect();
            var scrollerPos = this.elementRef.nativeElement.getBoundingClientRect();

            if (this.elementRef.nativeElement.classList.contains('ps--active-x')) {
              var currentPos = this.elementRef.nativeElement['scrollLeft'];
              var position = elementPos.left - scrollerPos.left + currentPos;
              this.animateScrolling('scrollLeft', position + (offset || 0), speed);
            }

            if (this.elementRef.nativeElement.classList.contains('ps--active-y')) {
              var _currentPos = this.elementRef.nativeElement['scrollTop'];

              var _position = elementPos.top - scrollerPos.top + _currentPos;

              this.animateScrolling('scrollTop', _position + (offset || 0), speed);
            }
          }
        }
      }, {
        key: "animateScrolling",
        value: function animateScrolling(target, value, speed) {
          var _this5 = this;

          if (this.animation) {
            window.cancelAnimationFrame(this.animation);
            this.animation = null;
          }

          if (!speed || typeof window === 'undefined') {
            this.elementRef.nativeElement[target] = value;
          } else if (value !== this.elementRef.nativeElement[target]) {
            var newValue = 0;
            var scrollCount = 0;
            var oldTimestamp = performance.now();
            var oldValue = this.elementRef.nativeElement[target];
            var cosParameter = (oldValue - value) / 2;

            var step = function step(newTimestamp) {
              scrollCount += Math.PI / (speed / (newTimestamp - oldTimestamp));
              newValue = Math.round(value + cosParameter + cosParameter * Math.cos(scrollCount)); // Only continue animation if scroll position has not changed

              if (_this5.elementRef.nativeElement[target] === oldValue) {
                if (scrollCount >= Math.PI) {
                  _this5.animateScrolling(target, value, 0);
                } else {
                  _this5.elementRef.nativeElement[target] = newValue; // On a zoomed out page the resulting offset may differ

                  oldValue = _this5.elementRef.nativeElement[target];
                  oldTimestamp = newTimestamp;
                  _this5.animation = window.requestAnimationFrame(step);
                }
              }
            };

            window.requestAnimationFrame(step);
          }
        }
      }]);

      return PerfectScrollbarDirective;
    }();

    PerfectScrollbarDirective.ɵfac = function PerfectScrollbarDirective_Factory(t) {
      return new (t || PerfectScrollbarDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["KeyValueDiffers"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](PERFECT_SCROLLBAR_CONFIG, 8));
    };

    PerfectScrollbarDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: PerfectScrollbarDirective,
      selectors: [["", "perfectScrollbar", ""]],
      inputs: {
        disabled: "disabled",
        config: ["perfectScrollbar", "config"]
      },
      outputs: {
        psScrollY: "psScrollY",
        psScrollX: "psScrollX",
        psScrollUp: "psScrollUp",
        psScrollDown: "psScrollDown",
        psScrollLeft: "psScrollLeft",
        psScrollRight: "psScrollRight",
        psYReachEnd: "psYReachEnd",
        psYReachStart: "psYReachStart",
        psXReachEnd: "psXReachEnd",
        psXReachStart: "psXReachStart"
      },
      exportAs: ["ngxPerfectScrollbar"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
    });

    PerfectScrollbarDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["KeyValueDiffers"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [PERFECT_SCROLLBAR_CONFIG]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], PerfectScrollbarDirective.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])('perfectScrollbar')], PerfectScrollbarDirective.prototype, "config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarDirective.prototype, "psScrollY", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarDirective.prototype, "psScrollX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarDirective.prototype, "psScrollUp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarDirective.prototype, "psScrollDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarDirective.prototype, "psScrollLeft", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarDirective.prototype, "psScrollRight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarDirective.prototype, "psYReachEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarDirective.prototype, "psYReachStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarDirective.prototype, "psXReachEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarDirective.prototype, "psXReachStart", void 0);
    PerfectScrollbarDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(PERFECT_SCROLLBAR_CONFIG))], PerfectScrollbarDirective);

    var PerfectScrollbarComponent = /*#__PURE__*/function () {
      function PerfectScrollbarComponent(zone, cdRef, platformId) {
        _classCallCheck(this, PerfectScrollbarComponent);

        this.zone = zone;
        this.cdRef = cdRef;
        this.platformId = platformId;
        this.states = {};
        this.indicatorX = false;
        this.indicatorY = false;
        this.interaction = false;
        this.scrollPositionX = 0;
        this.scrollPositionY = 0;
        this.scrollDirectionX = 0;
        this.scrollDirectionY = 0;
        this.usePropagationX = false;
        this.usePropagationY = false;
        this.allowPropagationX = false;
        this.allowPropagationY = false;
        this.stateTimeout = null;
        this.ngDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.stateUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.disabled = false;
        this.usePSClass = true;
        this.autoPropagation = false;
        this.scrollIndicators = false;
        this.psScrollY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psScrollX = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psScrollUp = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psScrollDown = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psScrollLeft = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psScrollRight = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psYReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psYReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psXReachEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.psXReachStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
      }

      _createClass(PerfectScrollbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            this.stateUpdate.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngDestroy), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(function (a, b) {
              return a === b && !_this6.stateTimeout;
            })).subscribe(function (state) {
              if (_this6.stateTimeout && typeof window !== 'undefined') {
                window.clearTimeout(_this6.stateTimeout);
                _this6.stateTimeout = null;
              }

              if (state === 'x' || state === 'y') {
                _this6.interaction = false;

                if (state === 'x') {
                  _this6.indicatorX = false;
                  _this6.states.left = false;
                  _this6.states.right = false;

                  if (_this6.autoPropagation && _this6.usePropagationX) {
                    _this6.allowPropagationX = false;
                  }
                } else if (state === 'y') {
                  _this6.indicatorY = false;
                  _this6.states.top = false;
                  _this6.states.bottom = false;

                  if (_this6.autoPropagation && _this6.usePropagationY) {
                    _this6.allowPropagationY = false;
                  }
                }
              } else {
                if (state === 'left' || state === 'right') {
                  _this6.states.left = false;
                  _this6.states.right = false;
                  _this6.states[state] = true;

                  if (_this6.autoPropagation && _this6.usePropagationX) {
                    _this6.indicatorX = true;
                  }
                } else if (state === 'top' || state === 'bottom') {
                  _this6.states.top = false;
                  _this6.states.bottom = false;
                  _this6.states[state] = true;

                  if (_this6.autoPropagation && _this6.usePropagationY) {
                    _this6.indicatorY = true;
                  }
                }

                if (_this6.autoPropagation && typeof window !== 'undefined') {
                  _this6.stateTimeout = window.setTimeout(function () {
                    _this6.indicatorX = false;
                    _this6.indicatorY = false;
                    _this6.stateTimeout = null;

                    if (_this6.interaction && (_this6.states.left || _this6.states.right)) {
                      _this6.allowPropagationX = true;
                    }

                    if (_this6.interaction && (_this6.states.top || _this6.states.bottom)) {
                      _this6.allowPropagationY = true;
                    }

                    _this6.cdRef.markForCheck();
                  }, 500);
                }
              }

              _this6.cdRef.markForCheck();

              _this6.cdRef.detectChanges();
            });
            this.zone.runOutsideAngular(function () {
              if (_this6.directiveRef) {
                var element = _this6.directiveRef.elementRef.nativeElement;
                Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(element, 'wheel').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this6.ngDestroy)).subscribe(function (event) {
                  if (!_this6.disabled && _this6.autoPropagation) {
                    var scrollDeltaX = event.deltaX;
                    var scrollDeltaY = event.deltaY;

                    _this6.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                  }
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(element, 'touchmove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this6.ngDestroy)).subscribe(function (event) {
                  if (!_this6.disabled && _this6.autoPropagation) {
                    var scrollPositionX = event.touches[0].clientX;
                    var scrollPositionY = event.touches[0].clientY;
                    var scrollDeltaX = scrollPositionX - _this6.scrollPositionX;
                    var scrollDeltaY = scrollPositionY - _this6.scrollPositionY;

                    _this6.checkPropagation(event, scrollDeltaX, scrollDeltaY);

                    _this6.scrollPositionX = scrollPositionX;
                    _this6.scrollPositionY = scrollPositionY;
                  }
                });
                Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(element, 'ps-scroll-x').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])('x')), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(element, 'ps-scroll-y').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])('y')), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(element, 'ps-x-reach-end').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])('right')), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(element, 'ps-y-reach-end').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])('bottom')), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(element, 'ps-x-reach-start').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])('left')), Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(element, 'ps-y-reach-start').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])('top'))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this6.ngDestroy)).subscribe(function (state) {
                  if (!_this6.disabled && (_this6.autoPropagation || _this6.scrollIndicators)) {
                    _this6.stateUpdate.next(state);
                  }
                });
              }
            });
            window.setTimeout(function () {
              PerfectScrollbarEvents.forEach(function (eventName) {
                if (_this6.directiveRef) {
                  _this6.directiveRef[eventName] = _this6[eventName];
                }
              });
            }, 0);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.unsubscribe();

            if (this.stateTimeout && typeof window !== 'undefined') {
              window.clearTimeout(this.stateTimeout);
            }
          }
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformId)) {
            if (!this.disabled && this.autoPropagation && this.directiveRef) {
              var element = this.directiveRef.elementRef.nativeElement;
              this.usePropagationX = element.classList.contains('ps--active-x');
              this.usePropagationY = element.classList.contains('ps--active-y');
            }
          }
        }
      }, {
        key: "checkPropagation",
        value: function checkPropagation(event, deltaX, deltaY) {
          this.interaction = true;
          var scrollDirectionX = deltaX < 0 ? -1 : 1;
          var scrollDirectionY = deltaY < 0 ? -1 : 1;

          if (this.usePropagationX && this.usePropagationY || this.usePropagationX && (!this.allowPropagationX || this.scrollDirectionX !== scrollDirectionX) || this.usePropagationY && (!this.allowPropagationY || this.scrollDirectionY !== scrollDirectionY)) {
            event.preventDefault();
            event.stopPropagation();
          }

          if (!!deltaX) {
            this.scrollDirectionX = scrollDirectionX;
          }

          if (!!deltaY) {
            this.scrollDirectionY = scrollDirectionY;
          }

          this.stateUpdate.next('interaction');
          this.cdRef.detectChanges();
        }
      }]);

      return PerfectScrollbarComponent;
    }();

    PerfectScrollbarComponent.ɵfac = function PerfectScrollbarComponent_Factory(t) {
      return new (t || PerfectScrollbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]));
    };

    PerfectScrollbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: PerfectScrollbarComponent,
      selectors: [["perfect-scrollbar"]],
      viewQuery: function PerfectScrollbarComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstaticViewQuery"](PerfectScrollbarDirective, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.directiveRef = _t.first);
        }
      },
      hostVars: 4,
      hostBindings: function PerfectScrollbarComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ps-show-limits", ctx.autoPropagation)("ps-show-active", ctx.scrollIndicators);
        }
      },
      inputs: {
        disabled: "disabled",
        usePSClass: "usePSClass",
        autoPropagation: "autoPropagation",
        scrollIndicators: "scrollIndicators",
        config: "config"
      },
      outputs: {
        psScrollY: "psScrollY",
        psScrollX: "psScrollX",
        psScrollUp: "psScrollUp",
        psScrollDown: "psScrollDown",
        psScrollLeft: "psScrollLeft",
        psScrollRight: "psScrollRight",
        psYReachEnd: "psYReachEnd",
        psYReachStart: "psYReachStart",
        psXReachEnd: "psXReachEnd",
        psXReachStart: "psXReachStart"
      },
      exportAs: ["ngxPerfectScrollbar"],
      ngContentSelectors: _c0,
      decls: 4,
      vars: 5,
      consts: [[2, "position", "static", 3, "perfectScrollbar", "disabled"], [1, "ps-content"], ["class", "ps-overlay", 3, "ps-at-top", "ps-at-left", "ps-at-right", "ps-at-bottom", 4, "ngIf"], [1, "ps-overlay"], [1, "ps-indicator-top"], [1, "ps-indicator-left"], [1, "ps-indicator-right"], [1, "ps-indicator-bottom"]],
      template: function PerfectScrollbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PerfectScrollbarComponent_div_3_Template, 5, 16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ps", ctx.usePSClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("perfectScrollbar", ctx.config)("disabled", ctx.disabled);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.scrollIndicators);
        }
      },
      directives: [PerfectScrollbarDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["perfect-scrollbar{position:relative;display:block;overflow:hidden;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar[hidden]{display:none}perfect-scrollbar[fxflex]{display:-webkit-box;display:flex;flex-direction:column;height:auto;min-width:0;min-height:0;-webkit-box-direction:column;-webkit-box-orient:column}perfect-scrollbar[fxflex]>.ps{flex:1 1 auto;width:auto;height:auto;min-width:0;min-height:0;-webkit-box-flex:1}perfect-scrollbar[fxlayout]>.ps,perfect-scrollbar[fxlayout]>.ps>.ps-content{display:-webkit-box;display:flex;flex:1 1 auto;flex-direction:inherit;align-items:inherit;align-content:inherit;justify-content:inherit;width:100%;height:100%;-webkit-box-align:inherit;-webkit-box-direction:inherit;-webkit-box-flex:1;-webkit-box-orient:inherit;-webkit-box-pack:inherit},perfect-scrollbar[fxlayout=row]>.ps,perfect-scrollbar[fxlayout=row]>.ps>.ps-content{flex-direction:row!important;-webkit-box-direction:row!important;-webkit-box-orient:row!important}perfect-scrollbar[fxlayout=column]>.ps,perfect-scrollbar[fxlayout=column]>.ps>.ps-content{flex-direction:column!important;-webkit-box-direction:column!important;-webkit-box-orient:column!important}perfect-scrollbar>.ps{position:static;display:block;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar>.ps textarea{-ms-overflow-style:scrollbar}perfect-scrollbar>.ps>.ps-overlay{position:absolute;top:0;right:0;bottom:0;left:0;display:block;overflow:hidden;pointer-events:none}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{position:absolute;opacity:0;-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{left:0;min-width:100%;min-height:24px}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{top:0;min-width:24px;min-height:100%}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left{left:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{right:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom{bottom:0}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y{top:0!important;right:0!important;left:auto!important;width:10px;cursor:default;-webkit-transition:width .2s linear,opacity .2s linear,background-color .2s linear;transition:width .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y.ps--clicking,perfect-scrollbar>.ps.ps--active-y>.ps__rail-y:hover{width:15px}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x{top:auto!important;bottom:0!important;left:0!important;height:10px;cursor:default;-webkit-transition:height .2s linear,opacity .2s linear,background-color .2s linear;transition:height .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x.ps--clicking,perfect-scrollbar>.ps.ps--active-x>.ps__rail-x:hover{height:15px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-y{margin:0 0 10px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-x{margin:0 10px 0 0}perfect-scrollbar>.ps.ps--scrolling-x>.ps__rail-x,perfect-scrollbar>.ps.ps--scrolling-y>.ps__rail-y{opacity:.9;background-color:#eee}perfect-scrollbar.ps-show-always>.ps.ps--active-x>.ps__rail-x,perfect-scrollbar.ps-show-always>.ps.ps--active-y>.ps__rail-y{opacity:.6}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-top) .ps-indicator-top{opacity:1;background:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to bottom,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom{opacity:1;background:-webkit-gradient(linear,left bottom,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to top,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-left) .ps-indicator-left{opacity:1;background:-webkit-gradient(linear,left top,right top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to right,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-right) .ps-indicator-right{opacity:1;background:-webkit-gradient(linear,right top,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to left,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top{background:-webkit-gradient(linear,left top,left bottom,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to bottom,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom{background:-webkit-gradient(linear,left bottom,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to top,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left{background:-webkit-gradient(linear,left top,right top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to right,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right{background:-webkit-gradient(linear,right top,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to left,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show{opacity:1}", ".ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;height:15px;bottom:0;position:absolute}.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;width:15px;right:0;position:absolute}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px;position:absolute}.ps__thumb-y{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px;position:absolute}.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.ps{overflow:auto!important}}"],
      encapsulation: 2
    });

    PerfectScrollbarComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: Object,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], PerfectScrollbarComponent.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], PerfectScrollbarComponent.prototype, "usePSClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"])('class.ps-show-limits'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], PerfectScrollbarComponent.prototype, "autoPropagation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"])('class.ps-show-active'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], PerfectScrollbarComponent.prototype, "scrollIndicators", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], PerfectScrollbarComponent.prototype, "config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarComponent.prototype, "psScrollY", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarComponent.prototype, "psScrollX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarComponent.prototype, "psScrollUp", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarComponent.prototype, "psScrollDown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarComponent.prototype, "psScrollLeft", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarComponent.prototype, "psScrollRight", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarComponent.prototype, "psYReachEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarComponent.prototype, "psYReachStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarComponent.prototype, "psXReachEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], PerfectScrollbarComponent.prototype, "psXReachStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(PerfectScrollbarDirective, {
      "static": true
    })], PerfectScrollbarComponent.prototype, "directiveRef", void 0);
    PerfectScrollbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]))], PerfectScrollbarComponent);

    var PerfectScrollbarModule = function PerfectScrollbarModule() {
      _classCallCheck(this, PerfectScrollbarModule);
    };

    PerfectScrollbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: PerfectScrollbarModule
    });
    PerfectScrollbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function PerfectScrollbarModule_Factory(t) {
        return new (t || PerfectScrollbarModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PerfectScrollbarDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[perfectScrollbar]',
          exportAs: 'ngxPerfectScrollbar'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["KeyValueDiffers"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [PERFECT_SCROLLBAR_CONFIG]
          }]
        }];
      }, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        psScrollY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        psScrollX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        psScrollUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        psScrollDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        psScrollLeft: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        psScrollRight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        psYReachEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        psYReachStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        psXReachEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        psXReachStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['perfectScrollbar']
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PerfectScrollbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'perfect-scrollbar',
          exportAs: 'ngxPerfectScrollbar',
          template: "<div style=\"position: static;\" [class.ps]=\"usePSClass\" [perfectScrollbar]=\"config\" [disabled]=\"disabled\">\n  <div class=\"ps-content\">\n    <ng-content></ng-content>\n  </div>\n\n  <div *ngIf=\"scrollIndicators\" class=\"ps-overlay\" [class.ps-at-top]=\"states.top\" [class.ps-at-left]=\"states.left\" [class.ps-at-right]=\"states.right\" [class.ps-at-bottom]=\"states.bottom\">\n    <div class=\"ps-indicator-top\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n    <div class=\"ps-indicator-left\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-right\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-bottom\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n  </div>\n</div>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          styles: ["perfect-scrollbar{position:relative;display:block;overflow:hidden;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar[hidden]{display:none}perfect-scrollbar[fxflex]{display:-webkit-box;display:flex;flex-direction:column;height:auto;min-width:0;min-height:0;-webkit-box-direction:column;-webkit-box-orient:column}perfect-scrollbar[fxflex]>.ps{flex:1 1 auto;width:auto;height:auto;min-width:0;min-height:0;-webkit-box-flex:1}perfect-scrollbar[fxlayout]>.ps,perfect-scrollbar[fxlayout]>.ps>.ps-content{display:-webkit-box;display:flex;flex:1 1 auto;flex-direction:inherit;align-items:inherit;align-content:inherit;justify-content:inherit;width:100%;height:100%;-webkit-box-align:inherit;-webkit-box-direction:inherit;-webkit-box-flex:1;-webkit-box-orient:inherit;-webkit-box-pack:inherit},perfect-scrollbar[fxlayout=row]>.ps,perfect-scrollbar[fxlayout=row]>.ps>.ps-content{flex-direction:row!important;-webkit-box-direction:row!important;-webkit-box-orient:row!important}perfect-scrollbar[fxlayout=column]>.ps,perfect-scrollbar[fxlayout=column]>.ps>.ps-content{flex-direction:column!important;-webkit-box-direction:column!important;-webkit-box-orient:column!important}perfect-scrollbar>.ps{position:static;display:block;width:100%;height:100%;max-width:100%;max-height:100%}perfect-scrollbar>.ps textarea{-ms-overflow-style:scrollbar}perfect-scrollbar>.ps>.ps-overlay{position:absolute;top:0;right:0;bottom:0;left:0;display:block;overflow:hidden;pointer-events:none}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{position:absolute;opacity:0;-webkit-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{left:0;min-width:100%;min-height:24px}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{top:0;min-width:24px;min-height:100%}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left{left:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{right:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom{bottom:0}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y{top:0!important;right:0!important;left:auto!important;width:10px;cursor:default;-webkit-transition:width .2s linear,opacity .2s linear,background-color .2s linear;transition:width .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y.ps--clicking,perfect-scrollbar>.ps.ps--active-y>.ps__rail-y:hover{width:15px}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x{top:auto!important;bottom:0!important;left:0!important;height:10px;cursor:default;-webkit-transition:height .2s linear,opacity .2s linear,background-color .2s linear;transition:height .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x.ps--clicking,perfect-scrollbar>.ps.ps--active-x>.ps__rail-x:hover{height:15px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-y{margin:0 0 10px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-x{margin:0 10px 0 0}perfect-scrollbar>.ps.ps--scrolling-x>.ps__rail-x,perfect-scrollbar>.ps.ps--scrolling-y>.ps__rail-y{opacity:.9;background-color:#eee}perfect-scrollbar.ps-show-always>.ps.ps--active-x>.ps__rail-x,perfect-scrollbar.ps-show-always>.ps.ps--active-y>.ps__rail-y{opacity:.6}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-top) .ps-indicator-top{opacity:1;background:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to bottom,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom{opacity:1;background:-webkit-gradient(linear,left bottom,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to top,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-left) .ps-indicator-left{opacity:1;background:-webkit-gradient(linear,left top,right top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to right,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-right) .ps-indicator-right{opacity:1;background:-webkit-gradient(linear,right top,left top,from(rgba(255,255,255,.5)),to(rgba(255,255,255,0)));background:linear-gradient(to left,rgba(255,255,255,.5) 0,rgba(255,255,255,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top{background:-webkit-gradient(linear,left top,left bottom,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to bottom,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom{background:-webkit-gradient(linear,left bottom,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to top,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left{background:-webkit-gradient(linear,left top,right top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to right,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right{background:-webkit-gradient(linear,right top,left top,from(rgba(170,170,170,.5)),to(rgba(170,170,170,0)));background:linear-gradient(to left,rgba(170,170,170,.5) 0,rgba(170,170,170,0) 100%)}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show{opacity:1}", ".ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;height:15px;bottom:0;position:absolute}.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;width:15px;right:0;position:absolute}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px;position:absolute}.ps__thumb-y{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px;position:absolute}.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.ps{overflow:auto!important}}"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
          }]
        }];
      }, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        usePSClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        autoPropagation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
          args: ['class.ps-show-limits']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        scrollIndicators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
          args: ['class.ps-show-active']
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        psScrollY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        psScrollX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        psScrollUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        psScrollDown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        psScrollLeft: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        psScrollRight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        psYReachEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        psYReachStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        psXReachEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        psXReachStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }],
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        directiveRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [PerfectScrollbarDirective, {
            "static": true
          }]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PerfectScrollbarModule, {
        declarations: function declarations() {
          return [PerfectScrollbarComponent, PerfectScrollbarDirective];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]];
        },
        exports: function exports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], PerfectScrollbarComponent, PerfectScrollbarDirective];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](PerfectScrollbarModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
          declarations: [PerfectScrollbarComponent, PerfectScrollbarDirective],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], PerfectScrollbarComponent, PerfectScrollbarDirective]
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-perfect-scrollbar.js.map

    /***/

  },

  /***/
  "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesPerfectScrollbarDistPerfectScrollbarEsmJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /*!
     * perfect-scrollbar v1.5.0
     * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
     * Licensed under MIT
     */


    function get(element) {
      return getComputedStyle(element);
    }

    function set(element, obj) {
      for (var key in obj) {
        var val = obj[key];

        if (typeof val === 'number') {
          val = val + "px";
        }

        element.style[key] = val;
      }

      return element;
    }

    function div(className) {
      var div = document.createElement('div');
      div.className = className;
      return div;
    }

    var elMatches = typeof Element !== 'undefined' && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);

    function matches(element, query) {
      if (!elMatches) {
        throw new Error('No element matching method supported');
      }

      return elMatches.call(element, query);
    }

    function remove(element) {
      if (element.remove) {
        element.remove();
      } else {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      }
    }

    function queryChildren(element, selector) {
      return Array.prototype.filter.call(element.children, function (child) {
        return matches(child, selector);
      });
    }

    var cls = {
      main: 'ps',
      rtl: 'ps__rtl',
      element: {
        thumb: function thumb(x) {
          return "ps__thumb-" + x;
        },
        rail: function rail(x) {
          return "ps__rail-" + x;
        },
        consuming: 'ps__child--consume'
      },
      state: {
        focus: 'ps--focus',
        clicking: 'ps--clicking',
        active: function active(x) {
          return "ps--active-" + x;
        },
        scrolling: function scrolling(x) {
          return "ps--scrolling-" + x;
        }
      }
    };
    /*
     * Helper methods
     */

    var scrollingClassTimeout = {
      x: null,
      y: null
    };

    function addScrollingClass(i, x) {
      var classList = i.element.classList;
      var className = cls.state.scrolling(x);

      if (classList.contains(className)) {
        clearTimeout(scrollingClassTimeout[x]);
      } else {
        classList.add(className);
      }
    }

    function removeScrollingClass(i, x) {
      scrollingClassTimeout[x] = setTimeout(function () {
        return i.isAlive && i.element.classList.remove(cls.state.scrolling(x));
      }, i.settings.scrollingThreshold);
    }

    function setScrollingClassInstantly(i, x) {
      addScrollingClass(i, x);
      removeScrollingClass(i, x);
    }

    var EventElement = function EventElement(element) {
      this.element = element;
      this.handlers = {};
    };

    var prototypeAccessors = {
      isEmpty: {
        configurable: true
      }
    };

    EventElement.prototype.bind = function bind(eventName, handler) {
      if (typeof this.handlers[eventName] === 'undefined') {
        this.handlers[eventName] = [];
      }

      this.handlers[eventName].push(handler);
      this.element.addEventListener(eventName, handler, false);
    };

    EventElement.prototype.unbind = function unbind(eventName, target) {
      var this$1 = this;
      this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
        if (target && handler !== target) {
          return true;
        }

        this$1.element.removeEventListener(eventName, handler, false);
        return false;
      });
    };

    EventElement.prototype.unbindAll = function unbindAll() {
      for (var name in this.handlers) {
        this.unbind(name);
      }
    };

    prototypeAccessors.isEmpty.get = function () {
      var this$1 = this;
      return Object.keys(this.handlers).every(function (key) {
        return this$1.handlers[key].length === 0;
      });
    };

    Object.defineProperties(EventElement.prototype, prototypeAccessors);

    var EventManager = function EventManager() {
      this.eventElements = [];
    };

    EventManager.prototype.eventElement = function eventElement(element) {
      var ee = this.eventElements.filter(function (ee) {
        return ee.element === element;
      })[0];

      if (!ee) {
        ee = new EventElement(element);
        this.eventElements.push(ee);
      }

      return ee;
    };

    EventManager.prototype.bind = function bind(element, eventName, handler) {
      this.eventElement(element).bind(eventName, handler);
    };

    EventManager.prototype.unbind = function unbind(element, eventName, handler) {
      var ee = this.eventElement(element);
      ee.unbind(eventName, handler);

      if (ee.isEmpty) {
        // remove
        this.eventElements.splice(this.eventElements.indexOf(ee), 1);
      }
    };

    EventManager.prototype.unbindAll = function unbindAll() {
      this.eventElements.forEach(function (e) {
        return e.unbindAll();
      });
      this.eventElements = [];
    };

    EventManager.prototype.once = function once(element, eventName, handler) {
      var ee = this.eventElement(element);

      var onceHandler = function onceHandler(evt) {
        ee.unbind(eventName, onceHandler);
        handler(evt);
      };

      ee.bind(eventName, onceHandler);
    };

    function createEvent(name) {
      if (typeof window.CustomEvent === 'function') {
        return new CustomEvent(name);
      } else {
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(name, false, false, undefined);
        return evt;
      }
    }

    function processScrollDiff(i, axis, diff, useScrollingClass, forceFireReachEvent) {
      if (useScrollingClass === void 0) useScrollingClass = true;
      if (forceFireReachEvent === void 0) forceFireReachEvent = false;
      var fields;

      if (axis === 'top') {
        fields = ['contentHeight', 'containerHeight', 'scrollTop', 'y', 'up', 'down'];
      } else if (axis === 'left') {
        fields = ['contentWidth', 'containerWidth', 'scrollLeft', 'x', 'left', 'right'];
      } else {
        throw new Error('A proper axis should be provided');
      }

      processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
    }

    function processScrollDiff$1(i, diff, ref, useScrollingClass, forceFireReachEvent) {
      var contentHeight = ref[0];
      var containerHeight = ref[1];
      var scrollTop = ref[2];
      var y = ref[3];
      var up = ref[4];
      var down = ref[5];
      if (useScrollingClass === void 0) useScrollingClass = true;
      if (forceFireReachEvent === void 0) forceFireReachEvent = false;
      var element = i.element; // reset reach

      i.reach[y] = null; // 1 for subpixel rounding

      if (element[scrollTop] < 1) {
        i.reach[y] = 'start';
      } // 1 for subpixel rounding


      if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
        i.reach[y] = 'end';
      }

      if (diff) {
        element.dispatchEvent(createEvent("ps-scroll-" + y));

        if (diff < 0) {
          element.dispatchEvent(createEvent("ps-scroll-" + up));
        } else if (diff > 0) {
          element.dispatchEvent(createEvent("ps-scroll-" + down));
        }

        if (useScrollingClass) {
          setScrollingClassInstantly(i, y);
        }
      }

      if (i.reach[y] && (diff || forceFireReachEvent)) {
        element.dispatchEvent(createEvent("ps-" + y + "-reach-" + i.reach[y]));
      }
    }

    function toInt(x) {
      return parseInt(x, 10) || 0;
    }

    function isEditable(el) {
      return matches(el, 'input,[contenteditable]') || matches(el, 'select,[contenteditable]') || matches(el, 'textarea,[contenteditable]') || matches(el, 'button,[contenteditable]');
    }

    function outerWidth(element) {
      var styles = get(element);
      return toInt(styles.width) + toInt(styles.paddingLeft) + toInt(styles.paddingRight) + toInt(styles.borderLeftWidth) + toInt(styles.borderRightWidth);
    }

    var env = {
      isWebKit: typeof document !== 'undefined' && 'WebkitAppearance' in document.documentElement.style,
      supportsTouch: typeof window !== 'undefined' && ('ontouchstart' in window || 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
      supportsIePointer: typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
      isChrome: typeof navigator !== 'undefined' && /Chrome/i.test(navigator && navigator.userAgent)
    };

    function updateGeometry(i) {
      var element = i.element;
      var roundedScrollTop = Math.floor(element.scrollTop);
      var rect = element.getBoundingClientRect();
      i.containerWidth = Math.ceil(rect.width);
      i.containerHeight = Math.ceil(rect.height);
      i.contentWidth = element.scrollWidth;
      i.contentHeight = element.scrollHeight;

      if (!element.contains(i.scrollbarXRail)) {
        // clean up and append
        queryChildren(element, cls.element.rail('x')).forEach(function (el) {
          return remove(el);
        });
        element.appendChild(i.scrollbarXRail);
      }

      if (!element.contains(i.scrollbarYRail)) {
        // clean up and append
        queryChildren(element, cls.element.rail('y')).forEach(function (el) {
          return remove(el);
        });
        element.appendChild(i.scrollbarYRail);
      }

      if (!i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth) {
        i.scrollbarXActive = true;
        i.railXWidth = i.containerWidth - i.railXMarginWidth;
        i.railXRatio = i.containerWidth / i.railXWidth;
        i.scrollbarXWidth = getThumbSize(i, toInt(i.railXWidth * i.containerWidth / i.contentWidth));
        i.scrollbarXLeft = toInt((i.negativeScrollAdjustment + element.scrollLeft) * (i.railXWidth - i.scrollbarXWidth) / (i.contentWidth - i.containerWidth));
      } else {
        i.scrollbarXActive = false;
      }

      if (!i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight) {
        i.scrollbarYActive = true;
        i.railYHeight = i.containerHeight - i.railYMarginHeight;
        i.railYRatio = i.containerHeight / i.railYHeight;
        i.scrollbarYHeight = getThumbSize(i, toInt(i.railYHeight * i.containerHeight / i.contentHeight));
        i.scrollbarYTop = toInt(roundedScrollTop * (i.railYHeight - i.scrollbarYHeight) / (i.contentHeight - i.containerHeight));
      } else {
        i.scrollbarYActive = false;
      }

      if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
        i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
      }

      if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
        i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
      }

      updateCss(element, i);

      if (i.scrollbarXActive) {
        element.classList.add(cls.state.active('x'));
      } else {
        element.classList.remove(cls.state.active('x'));
        i.scrollbarXWidth = 0;
        i.scrollbarXLeft = 0;
        element.scrollLeft = i.isRtl === true ? i.contentWidth : 0;
      }

      if (i.scrollbarYActive) {
        element.classList.add(cls.state.active('y'));
      } else {
        element.classList.remove(cls.state.active('y'));
        i.scrollbarYHeight = 0;
        i.scrollbarYTop = 0;
        element.scrollTop = 0;
      }
    }

    function getThumbSize(i, thumbSize) {
      if (i.settings.minScrollbarLength) {
        thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
      }

      if (i.settings.maxScrollbarLength) {
        thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
      }

      return thumbSize;
    }

    function updateCss(element, i) {
      var xRailOffset = {
        width: i.railXWidth
      };
      var roundedScrollTop = Math.floor(element.scrollTop);

      if (i.isRtl) {
        xRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth - i.contentWidth;
      } else {
        xRailOffset.left = element.scrollLeft;
      }

      if (i.isScrollbarXUsingBottom) {
        xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
      } else {
        xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
      }

      set(i.scrollbarXRail, xRailOffset);
      var yRailOffset = {
        top: roundedScrollTop,
        height: i.railYHeight
      };

      if (i.isScrollbarYUsingRight) {
        if (i.isRtl) {
          yRailOffset.right = i.contentWidth - (i.negativeScrollAdjustment + element.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth - 9;
        } else {
          yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
        }
      } else {
        if (i.isRtl) {
          yRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth * 2 - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth;
        } else {
          yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
        }
      }

      set(i.scrollbarYRail, yRailOffset);
      set(i.scrollbarX, {
        left: i.scrollbarXLeft,
        width: i.scrollbarXWidth - i.railBorderXWidth
      });
      set(i.scrollbarY, {
        top: i.scrollbarYTop,
        height: i.scrollbarYHeight - i.railBorderYWidth
      });
    }

    function clickRail(i) {
      var element = i.element;
      i.event.bind(i.scrollbarY, 'mousedown', function (e) {
        return e.stopPropagation();
      });
      i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
        var positionTop = e.pageY - window.pageYOffset - i.scrollbarYRail.getBoundingClientRect().top;
        var direction = positionTop > i.scrollbarYTop ? 1 : -1;
        i.element.scrollTop += direction * i.containerHeight;
        updateGeometry(i);
        e.stopPropagation();
      });
      i.event.bind(i.scrollbarX, 'mousedown', function (e) {
        return e.stopPropagation();
      });
      i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
        var positionLeft = e.pageX - window.pageXOffset - i.scrollbarXRail.getBoundingClientRect().left;
        var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;
        i.element.scrollLeft += direction * i.containerWidth;
        updateGeometry(i);
        e.stopPropagation();
      });
    }

    function dragThumb(i) {
      bindMouseScrollHandler(i, ['containerWidth', 'contentWidth', 'pageX', 'railXWidth', 'scrollbarX', 'scrollbarXWidth', 'scrollLeft', 'x', 'scrollbarXRail']);
      bindMouseScrollHandler(i, ['containerHeight', 'contentHeight', 'pageY', 'railYHeight', 'scrollbarY', 'scrollbarYHeight', 'scrollTop', 'y', 'scrollbarYRail']);
    }

    function bindMouseScrollHandler(i, ref) {
      var containerHeight = ref[0];
      var contentHeight = ref[1];
      var pageY = ref[2];
      var railYHeight = ref[3];
      var scrollbarY = ref[4];
      var scrollbarYHeight = ref[5];
      var scrollTop = ref[6];
      var y = ref[7];
      var scrollbarYRail = ref[8];
      var element = i.element;
      var startingScrollTop = null;
      var startingMousePageY = null;
      var scrollBy = null;

      function mouseMoveHandler(e) {
        if (e.touches && e.touches[0]) {
          e[pageY] = e.touches[0].pageY;
        }

        element[scrollTop] = startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
        addScrollingClass(i, y);
        updateGeometry(i);
        e.stopPropagation();
        e.preventDefault();
      }

      function mouseUpHandler() {
        removeScrollingClass(i, y);
        i[scrollbarYRail].classList.remove(cls.state.clicking);
        i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
      }

      function bindMoves(e, touchMode) {
        startingScrollTop = element[scrollTop];

        if (touchMode && e.touches) {
          e[pageY] = e.touches[0].pageY;
        }

        startingMousePageY = e[pageY];
        scrollBy = (i[contentHeight] - i[containerHeight]) / (i[railYHeight] - i[scrollbarYHeight]);

        if (!touchMode) {
          i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
          i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
          e.preventDefault();
        } else {
          i.event.bind(i.ownerDocument, 'touchmove', mouseMoveHandler);
        }

        i[scrollbarYRail].classList.add(cls.state.clicking);
        e.stopPropagation();
      }

      i.event.bind(i[scrollbarY], 'mousedown', function (e) {
        bindMoves(e);
      });
      i.event.bind(i[scrollbarY], 'touchstart', function (e) {
        bindMoves(e, true);
      });
    }

    function keyboard(i) {
      var element = i.element;

      var elementHovered = function elementHovered() {
        return matches(element, ':hover');
      };

      var scrollbarFocused = function scrollbarFocused() {
        return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus');
      };

      function shouldPreventDefault(deltaX, deltaY) {
        var scrollTop = Math.floor(element.scrollTop);

        if (deltaX === 0) {
          if (!i.scrollbarYActive) {
            return false;
          }

          if (scrollTop === 0 && deltaY > 0 || scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0) {
            return !i.settings.wheelPropagation;
          }
        }

        var scrollLeft = element.scrollLeft;

        if (deltaY === 0) {
          if (!i.scrollbarXActive) {
            return false;
          }

          if (scrollLeft === 0 && deltaX < 0 || scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0) {
            return !i.settings.wheelPropagation;
          }
        }

        return true;
      }

      i.event.bind(i.ownerDocument, 'keydown', function (e) {
        if (e.isDefaultPrevented && e.isDefaultPrevented() || e.defaultPrevented) {
          return;
        }

        if (!elementHovered() && !scrollbarFocused()) {
          return;
        }

        var activeElement = document.activeElement ? document.activeElement : i.ownerDocument.activeElement;

        if (activeElement) {
          if (activeElement.tagName === 'IFRAME') {
            activeElement = activeElement.contentDocument.activeElement;
          } else {
            // go deeper if element is a webcomponent
            while (activeElement.shadowRoot) {
              activeElement = activeElement.shadowRoot.activeElement;
            }
          }

          if (isEditable(activeElement)) {
            return;
          }
        }

        var deltaX = 0;
        var deltaY = 0;

        switch (e.which) {
          case 37:
            // left
            if (e.metaKey) {
              deltaX = -i.contentWidth;
            } else if (e.altKey) {
              deltaX = -i.containerWidth;
            } else {
              deltaX = -30;
            }

            break;

          case 38:
            // up
            if (e.metaKey) {
              deltaY = i.contentHeight;
            } else if (e.altKey) {
              deltaY = i.containerHeight;
            } else {
              deltaY = 30;
            }

            break;

          case 39:
            // right
            if (e.metaKey) {
              deltaX = i.contentWidth;
            } else if (e.altKey) {
              deltaX = i.containerWidth;
            } else {
              deltaX = 30;
            }

            break;

          case 40:
            // down
            if (e.metaKey) {
              deltaY = -i.contentHeight;
            } else if (e.altKey) {
              deltaY = -i.containerHeight;
            } else {
              deltaY = -30;
            }

            break;

          case 32:
            // space bar
            if (e.shiftKey) {
              deltaY = i.containerHeight;
            } else {
              deltaY = -i.containerHeight;
            }

            break;

          case 33:
            // page up
            deltaY = i.containerHeight;
            break;

          case 34:
            // page down
            deltaY = -i.containerHeight;
            break;

          case 36:
            // home
            deltaY = i.contentHeight;
            break;

          case 35:
            // end
            deltaY = -i.contentHeight;
            break;

          default:
            return;
        }

        if (i.settings.suppressScrollX && deltaX !== 0) {
          return;
        }

        if (i.settings.suppressScrollY && deltaY !== 0) {
          return;
        }

        element.scrollTop -= deltaY;
        element.scrollLeft += deltaX;
        updateGeometry(i);

        if (shouldPreventDefault(deltaX, deltaY)) {
          e.preventDefault();
        }
      });
    }

    function wheel(i) {
      var element = i.element;

      function shouldPreventDefault(deltaX, deltaY) {
        var roundedScrollTop = Math.floor(element.scrollTop);
        var isTop = element.scrollTop === 0;
        var isBottom = roundedScrollTop + element.offsetHeight === element.scrollHeight;
        var isLeft = element.scrollLeft === 0;
        var isRight = element.scrollLeft + element.offsetWidth === element.scrollWidth;
        var hitsBound; // pick axis with primary direction

        if (Math.abs(deltaY) > Math.abs(deltaX)) {
          hitsBound = isTop || isBottom;
        } else {
          hitsBound = isLeft || isRight;
        }

        return hitsBound ? !i.settings.wheelPropagation : true;
      }

      function getDeltaFromEvent(e) {
        var deltaX = e.deltaX;
        var deltaY = -1 * e.deltaY;

        if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
          // OS X Safari
          deltaX = -1 * e.wheelDeltaX / 6;
          deltaY = e.wheelDeltaY / 6;
        }

        if (e.deltaMode && e.deltaMode === 1) {
          // Firefox in deltaMode 1: Line scrolling
          deltaX *= 10;
          deltaY *= 10;
        }

        if (deltaX !== deltaX && deltaY !== deltaY
        /* NaN checks */
        ) {
            // IE in some mouse drivers
            deltaX = 0;
            deltaY = e.wheelDelta;
          }

        if (e.shiftKey) {
          // reverse axis with shift key
          return [-deltaY, -deltaX];
        }

        return [deltaX, deltaY];
      }

      function shouldBeConsumedByChild(target, deltaX, deltaY) {
        // FIXME: this is a workaround for <select> issue in FF and IE #571
        if (!env.isWebKit && element.querySelector('select:focus')) {
          return true;
        }

        if (!element.contains(target)) {
          return false;
        }

        var cursor = target;

        while (cursor && cursor !== element) {
          if (cursor.classList.contains(cls.element.consuming)) {
            return true;
          }

          var style = get(cursor); // if deltaY && vertical scrollable

          if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
            var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;

            if (maxScrollTop > 0) {
              if (cursor.scrollTop > 0 && deltaY < 0 || cursor.scrollTop < maxScrollTop && deltaY > 0) {
                return true;
              }
            }
          } // if deltaX && horizontal scrollable


          if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
            var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;

            if (maxScrollLeft > 0) {
              if (cursor.scrollLeft > 0 && deltaX < 0 || cursor.scrollLeft < maxScrollLeft && deltaX > 0) {
                return true;
              }
            }
          }

          cursor = cursor.parentNode;
        }

        return false;
      }

      function mousewheelHandler(e) {
        var ref = getDeltaFromEvent(e);
        var deltaX = ref[0];
        var deltaY = ref[1];

        if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
          return;
        }

        var shouldPrevent = false;

        if (!i.settings.useBothWheelAxes) {
          // deltaX will only be used for horizontal scrolling and deltaY will
          // only be used for vertical scrolling - this is the default
          element.scrollTop -= deltaY * i.settings.wheelSpeed;
          element.scrollLeft += deltaX * i.settings.wheelSpeed;
        } else if (i.scrollbarYActive && !i.scrollbarXActive) {
          // only vertical scrollbar is active and useBothWheelAxes option is
          // active, so let's scroll vertical bar using both mouse wheel axes
          if (deltaY) {
            element.scrollTop -= deltaY * i.settings.wheelSpeed;
          } else {
            element.scrollTop += deltaX * i.settings.wheelSpeed;
          }

          shouldPrevent = true;
        } else if (i.scrollbarXActive && !i.scrollbarYActive) {
          // useBothWheelAxes and only horizontal bar is active, so use both
          // wheel axes for horizontal bar
          if (deltaX) {
            element.scrollLeft += deltaX * i.settings.wheelSpeed;
          } else {
            element.scrollLeft -= deltaY * i.settings.wheelSpeed;
          }

          shouldPrevent = true;
        }

        updateGeometry(i);
        shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);

        if (shouldPrevent && !e.ctrlKey) {
          e.stopPropagation();
          e.preventDefault();
        }
      }

      if (typeof window.onwheel !== 'undefined') {
        i.event.bind(element, 'wheel', mousewheelHandler);
      } else if (typeof window.onmousewheel !== 'undefined') {
        i.event.bind(element, 'mousewheel', mousewheelHandler);
      }
    }

    function touch(i) {
      if (!env.supportsTouch && !env.supportsIePointer) {
        return;
      }

      var element = i.element;

      function shouldPrevent(deltaX, deltaY) {
        var scrollTop = Math.floor(element.scrollTop);
        var scrollLeft = element.scrollLeft;
        var magnitudeX = Math.abs(deltaX);
        var magnitudeY = Math.abs(deltaY);

        if (magnitudeY > magnitudeX) {
          // user is perhaps trying to swipe up/down the page
          if (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight || deltaY > 0 && scrollTop === 0) {
            // set prevent for mobile Chrome refresh
            return window.scrollY === 0 && deltaY > 0 && env.isChrome;
          }
        } else if (magnitudeX > magnitudeY) {
          // user is perhaps trying to swipe left/right across the page
          if (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth || deltaX > 0 && scrollLeft === 0) {
            return true;
          }
        }

        return true;
      }

      function applyTouchMove(differenceX, differenceY) {
        element.scrollTop -= differenceY;
        element.scrollLeft -= differenceX;
        updateGeometry(i);
      }

      var startOffset = {};
      var startTime = 0;
      var speed = {};
      var easingLoop = null;

      function getTouch(e) {
        if (e.targetTouches) {
          return e.targetTouches[0];
        } else {
          // Maybe IE pointer
          return e;
        }
      }

      function shouldHandle(e) {
        if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
          return false;
        }

        if (e.targetTouches && e.targetTouches.length === 1) {
          return true;
        }

        if (e.pointerType && e.pointerType !== 'mouse' && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
          return true;
        }

        return false;
      }

      function touchStart(e) {
        if (!shouldHandle(e)) {
          return;
        }

        var touch = getTouch(e);
        startOffset.pageX = touch.pageX;
        startOffset.pageY = touch.pageY;
        startTime = new Date().getTime();

        if (easingLoop !== null) {
          clearInterval(easingLoop);
        }
      }

      function shouldBeConsumedByChild(target, deltaX, deltaY) {
        if (!element.contains(target)) {
          return false;
        }

        var cursor = target;

        while (cursor && cursor !== element) {
          if (cursor.classList.contains(cls.element.consuming)) {
            return true;
          }

          var style = get(cursor); // if deltaY && vertical scrollable

          if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
            var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;

            if (maxScrollTop > 0) {
              if (cursor.scrollTop > 0 && deltaY < 0 || cursor.scrollTop < maxScrollTop && deltaY > 0) {
                return true;
              }
            }
          } // if deltaX && horizontal scrollable


          if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
            var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;

            if (maxScrollLeft > 0) {
              if (cursor.scrollLeft > 0 && deltaX < 0 || cursor.scrollLeft < maxScrollLeft && deltaX > 0) {
                return true;
              }
            }
          }

          cursor = cursor.parentNode;
        }

        return false;
      }

      function touchMove(e) {
        if (shouldHandle(e)) {
          var touch = getTouch(e);
          var currentOffset = {
            pageX: touch.pageX,
            pageY: touch.pageY
          };
          var differenceX = currentOffset.pageX - startOffset.pageX;
          var differenceY = currentOffset.pageY - startOffset.pageY;

          if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
            return;
          }

          applyTouchMove(differenceX, differenceY);
          startOffset = currentOffset;
          var currentTime = new Date().getTime();
          var timeGap = currentTime - startTime;

          if (timeGap > 0) {
            speed.x = differenceX / timeGap;
            speed.y = differenceY / timeGap;
            startTime = currentTime;
          }

          if (shouldPrevent(differenceX, differenceY)) {
            e.preventDefault();
          }
        }
      }

      function touchEnd() {
        if (i.settings.swipeEasing) {
          clearInterval(easingLoop);
          easingLoop = setInterval(function () {
            if (i.isInitialized) {
              clearInterval(easingLoop);
              return;
            }

            if (!speed.x && !speed.y) {
              clearInterval(easingLoop);
              return;
            }

            if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
              clearInterval(easingLoop);
              return;
            }

            applyTouchMove(speed.x * 30, speed.y * 30);
            speed.x *= 0.8;
            speed.y *= 0.8;
          }, 10);
        }
      }

      if (env.supportsTouch) {
        i.event.bind(element, 'touchstart', touchStart);
        i.event.bind(element, 'touchmove', touchMove);
        i.event.bind(element, 'touchend', touchEnd);
      } else if (env.supportsIePointer) {
        if (window.PointerEvent) {
          i.event.bind(element, 'pointerdown', touchStart);
          i.event.bind(element, 'pointermove', touchMove);
          i.event.bind(element, 'pointerup', touchEnd);
        } else if (window.MSPointerEvent) {
          i.event.bind(element, 'MSPointerDown', touchStart);
          i.event.bind(element, 'MSPointerMove', touchMove);
          i.event.bind(element, 'MSPointerUp', touchEnd);
        }
      }
    }

    var defaultSettings = function defaultSettings() {
      return {
        handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
        maxScrollbarLength: null,
        minScrollbarLength: null,
        scrollingThreshold: 1000,
        scrollXMarginOffset: 0,
        scrollYMarginOffset: 0,
        suppressScrollX: false,
        suppressScrollY: false,
        swipeEasing: true,
        useBothWheelAxes: false,
        wheelPropagation: true,
        wheelSpeed: 1
      };
    };

    var handlers = {
      'click-rail': clickRail,
      'drag-thumb': dragThumb,
      keyboard: keyboard,
      wheel: wheel,
      touch: touch
    };

    var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
      var this$1 = this;
      if (userSettings === void 0) userSettings = {};

      if (typeof element === 'string') {
        element = document.querySelector(element);
      }

      if (!element || !element.nodeName) {
        throw new Error('no element is specified to initialize PerfectScrollbar');
      }

      this.element = element;
      element.classList.add(cls.main);
      this.settings = defaultSettings();

      for (var key in userSettings) {
        this.settings[key] = userSettings[key];
      }

      this.containerWidth = null;
      this.containerHeight = null;
      this.contentWidth = null;
      this.contentHeight = null;

      var focus = function focus() {
        return element.classList.add(cls.state.focus);
      };

      var blur = function blur() {
        return element.classList.remove(cls.state.focus);
      };

      this.isRtl = get(element).direction === 'rtl';

      if (this.isRtl === true) {
        element.classList.add(cls.rtl);
      }

      this.isNegativeScroll = function () {
        var originalScrollLeft = element.scrollLeft;
        var result = null;
        element.scrollLeft = -1;
        result = element.scrollLeft < 0;
        element.scrollLeft = originalScrollLeft;
        return result;
      }();

      this.negativeScrollAdjustment = this.isNegativeScroll ? element.scrollWidth - element.clientWidth : 0;
      this.event = new EventManager();
      this.ownerDocument = element.ownerDocument || document;
      this.scrollbarXRail = div(cls.element.rail('x'));
      element.appendChild(this.scrollbarXRail);
      this.scrollbarX = div(cls.element.thumb('x'));
      this.scrollbarXRail.appendChild(this.scrollbarX);
      this.scrollbarX.setAttribute('tabindex', 0);
      this.event.bind(this.scrollbarX, 'focus', focus);
      this.event.bind(this.scrollbarX, 'blur', blur);
      this.scrollbarXActive = null;
      this.scrollbarXWidth = null;
      this.scrollbarXLeft = null;
      var railXStyle = get(this.scrollbarXRail);
      this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);

      if (isNaN(this.scrollbarXBottom)) {
        this.isScrollbarXUsingBottom = false;
        this.scrollbarXTop = toInt(railXStyle.top);
      } else {
        this.isScrollbarXUsingBottom = true;
      }

      this.railBorderXWidth = toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth); // Set rail to display:block to calculate margins

      set(this.scrollbarXRail, {
        display: 'block'
      });
      this.railXMarginWidth = toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
      set(this.scrollbarXRail, {
        display: ''
      });
      this.railXWidth = null;
      this.railXRatio = null;
      this.scrollbarYRail = div(cls.element.rail('y'));
      element.appendChild(this.scrollbarYRail);
      this.scrollbarY = div(cls.element.thumb('y'));
      this.scrollbarYRail.appendChild(this.scrollbarY);
      this.scrollbarY.setAttribute('tabindex', 0);
      this.event.bind(this.scrollbarY, 'focus', focus);
      this.event.bind(this.scrollbarY, 'blur', blur);
      this.scrollbarYActive = null;
      this.scrollbarYHeight = null;
      this.scrollbarYTop = null;
      var railYStyle = get(this.scrollbarYRail);
      this.scrollbarYRight = parseInt(railYStyle.right, 10);

      if (isNaN(this.scrollbarYRight)) {
        this.isScrollbarYUsingRight = false;
        this.scrollbarYLeft = toInt(railYStyle.left);
      } else {
        this.isScrollbarYUsingRight = true;
      }

      this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
      this.railBorderYWidth = toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
      set(this.scrollbarYRail, {
        display: 'block'
      });
      this.railYMarginHeight = toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
      set(this.scrollbarYRail, {
        display: ''
      });
      this.railYHeight = null;
      this.railYRatio = null;
      this.reach = {
        x: element.scrollLeft <= 0 ? 'start' : element.scrollLeft >= this.contentWidth - this.containerWidth ? 'end' : null,
        y: element.scrollTop <= 0 ? 'start' : element.scrollTop >= this.contentHeight - this.containerHeight ? 'end' : null
      };
      this.isAlive = true;
      this.settings.handlers.forEach(function (handlerName) {
        return handlers[handlerName](this$1);
      });
      this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only

      this.lastScrollLeft = element.scrollLeft; // for onScroll only

      this.event.bind(this.element, 'scroll', function (e) {
        return this$1.onScroll(e);
      });
      updateGeometry(this);
    };

    PerfectScrollbar.prototype.update = function update() {
      if (!this.isAlive) {
        return;
      } // Recalcuate negative scrollLeft adjustment


      this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0; // Recalculate rail margins

      set(this.scrollbarXRail, {
        display: 'block'
      });
      set(this.scrollbarYRail, {
        display: 'block'
      });
      this.railXMarginWidth = toInt(get(this.scrollbarXRail).marginLeft) + toInt(get(this.scrollbarXRail).marginRight);
      this.railYMarginHeight = toInt(get(this.scrollbarYRail).marginTop) + toInt(get(this.scrollbarYRail).marginBottom); // Hide scrollbars not to affect scrollWidth and scrollHeight

      set(this.scrollbarXRail, {
        display: 'none'
      });
      set(this.scrollbarYRail, {
        display: 'none'
      });
      updateGeometry(this);
      processScrollDiff(this, 'top', 0, false, true);
      processScrollDiff(this, 'left', 0, false, true);
      set(this.scrollbarXRail, {
        display: ''
      });
      set(this.scrollbarYRail, {
        display: ''
      });
    };

    PerfectScrollbar.prototype.onScroll = function onScroll(e) {
      if (!this.isAlive) {
        return;
      }

      updateGeometry(this);
      processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
      processScrollDiff(this, 'left', this.element.scrollLeft - this.lastScrollLeft);
      this.lastScrollTop = Math.floor(this.element.scrollTop);
      this.lastScrollLeft = this.element.scrollLeft;
    };

    PerfectScrollbar.prototype.destroy = function destroy() {
      if (!this.isAlive) {
        return;
      }

      this.event.unbindAll();
      remove(this.scrollbarX);
      remove(this.scrollbarY);
      remove(this.scrollbarXRail);
      remove(this.scrollbarYRail);
      this.removePsClasses(); // unset elements

      this.element = null;
      this.scrollbarX = null;
      this.scrollbarY = null;
      this.scrollbarXRail = null;
      this.scrollbarYRail = null;
      this.isAlive = false;
    };

    PerfectScrollbar.prototype.removePsClasses = function removePsClasses() {
      this.element.className = this.element.className.split(' ').filter(function (name) {
        return !name.match(/^ps([-_].+|)$/);
      }).join(' ');
    };
    /* harmony default export */


    __webpack_exports__["default"] = PerfectScrollbar; //# sourceMappingURL=perfect-scrollbar.esm.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/general-pages/signin/signin.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/general-pages/signin/signin.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGeneralPagesSigninSigninComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"az-signin-wrapper\">\n  <div class=\"az-card-signin\">\n    <h1 class=\"az-logo\">az<span>i</span>a</h1>\n    <div class=\"az-signin-header\">\n      <h2>Welcome back!</h2>\n      <h4>Please sign in to continue</h4>\n\n      <form>\n        <div class=\"form-group\">\n          <label>Email</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Enter your email\" value=\"demo@bootstrapdash.com\">\n        </div><!-- form-group -->\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input type=\"password\" class=\"form-control\" placeholder=\"Enter your password\" value=\"thisisademo\">\n        </div><!-- form-group -->\n        <a class=\"btn btn-az-primary btn-block\" routerLink=\"/\">Sign In</a>\n      </form>\n    </div><!-- az-signin-header -->\n    <div class=\"az-signin-footer\">\n      <p><a href=\"\">Forgot password?</a></p>\n      <p>Don't have an account? <a routerLink=\"/general-pages/signup\">Create an Account</a></p>\n    </div><!-- az-signin-footer -->\n  </div><!-- az-card-signin -->\n</div><!-- az-signin-wrapper -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/general-pages/signup/signup.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/general-pages/signup/signup.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGeneralPagesSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"az-signup-wrapper\">\n  <div class=\"az-column-signup-left\">\n    <div>\n      <i class=\"typcn typcn-chart-bar-outline\"></i>\n      <h1 class=\"az-logo\">az<span>i</span>a</h1>\n      <h5>Responsive Modern Dashboard &amp; Admin Template</h5>\n      <p>We are excited to launch our new company and product Azia. After being featured in too many magazines to mention and having created an online stir, we know that BootstrapDash is going to be big. We also hope to win Startup Fictional Business of the Year this year.</p>\n      <p>Browse our site and see for yourself why you need Azia.</p>\n      <a routerLink=\"/\" class=\"btn btn-outline-indigo\">Learn More</a>\n    </div>\n  </div><!-- az-column-signup-left -->\n  <div class=\"az-column-signup\">\n    <h1 class=\"az-logo\">az<span>i</span>a</h1>\n    <div class=\"az-signup-header\">\n      <h2>Get Started</h2>\n      <h4>It's free to signup and only takes a minute.</h4>\n\n      <form>\n        <div class=\"form-group\">\n          <label>Firstname &amp; Lastname</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Enter your firstname and lastname\">\n        </div><!-- form-group -->\n        <div class=\"form-group\">\n          <label>Email</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Enter your email\">\n        </div><!-- form-group -->\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input type=\"password\" class=\"form-control\" placeholder=\"Enter your password\">\n        </div><!-- form-group -->\n        <a class=\"btn btn-az-primary btn-block\" routerLink=\"/\">Create Account</a>\n        <div class=\"row row-xs\">\n          <div class=\"col-sm-6\"><button class=\"btn btn-block\"><i class=\"fab fa-facebook-f\"></i> Signup with Facebook</button></div>\n          <div class=\"col-sm-6 mg-t-10 mg-sm-t-0\"><button class=\"btn btn-primary btn-block\"><i class=\"fab fa-twitter\"></i> Signup with Twitter</button></div>\n        </div><!-- row -->\n      </form>\n    </div><!-- az-signup-header -->\n    <div class=\"az-signup-footer\">\n      <p>Already have an account? <a routerLink=\"general-pages/signin\">Sign In</a></p>\n    </div><!-- az-signin-footer -->\n  </div><!-- az-column-signup -->\n</div><!-- az-signup-wrapper -->";
    /***/
  },

  /***/
  "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesResizeObserverPolyfillDistResizeObserverEsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /**
     * A collection of shims that provide minimal functionality of the ES6 collections.
     *
     * These implementations are not meant to be used outside of the ResizeObserver
     * modules as they cover only a limited range of use cases.
     */

    /* eslint-disable require-jsdoc, valid-jsdoc */


    var MapShim = function () {
      if (typeof Map !== 'undefined') {
        return Map;
      }
      /**
       * Returns index in provided array that matches the specified key.
       *
       * @param {Array<Array>} arr
       * @param {*} key
       * @returns {number}
       */


      function getIndex(arr, key) {
        var result = -1;
        arr.some(function (entry, index) {
          if (entry[0] === key) {
            result = index;
            return true;
          }

          return false;
        });
        return result;
      }

      return (
        /** @class */
        function () {
          function class_1() {
            this.__entries__ = [];
          }

          Object.defineProperty(class_1.prototype, "size", {
            /**
             * @returns {boolean}
             */
            get: function get() {
              return this.__entries__.length;
            },
            enumerable: true,
            configurable: true
          });
          /**
           * @param {*} key
           * @returns {*}
           */

          class_1.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];
            return entry && entry[1];
          };
          /**
           * @param {*} key
           * @param {*} value
           * @returns {void}
           */


          class_1.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);

            if (~index) {
              this.__entries__[index][1] = value;
            } else {
              this.__entries__.push([key, value]);
            }
          };
          /**
           * @param {*} key
           * @returns {void}
           */


          class_1.prototype["delete"] = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);

            if (~index) {
              entries.splice(index, 1);
            }
          };
          /**
           * @param {*} key
           * @returns {void}
           */


          class_1.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
          };
          /**
           * @returns {void}
           */


          class_1.prototype.clear = function () {
            this.__entries__.splice(0);
          };
          /**
           * @param {Function} callback
           * @param {*} [ctx=null]
           * @returns {void}
           */


          class_1.prototype.forEach = function (callback, ctx) {
            if (ctx === void 0) {
              ctx = null;
            }

            for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
              var entry = _a[_i];
              callback.call(ctx, entry[1], entry[0]);
            }
          };

          return class_1;
        }()
      );
    }();
    /**
     * Detects whether window and document objects are available in current environment.
     */


    var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document; // Returns global object of a current environment.

    var global$1 = function () {
      if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
      }

      if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
      }

      if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
      } // eslint-disable-next-line no-new-func


      return Function('return this')();
    }();
    /**
     * A shim for the requestAnimationFrame which falls back to the setTimeout if
     * first one is not supported.
     *
     * @returns {number} Requests' identifier.
     */


    var requestAnimationFrame$1 = function () {
      if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
      }

      return function (callback) {
        return setTimeout(function () {
          return callback(Date.now());
        }, 1000 / 60);
      };
    }(); // Defines minimum timeout before adding a trailing call.


    var trailingTimeout = 2;
    /**
     * Creates a wrapper function which ensures that provided callback will be
     * invoked only once during the specified delay period.
     *
     * @param {Function} callback - Function to be invoked after the delay period.
     * @param {number} delay - Delay after which to invoke callback.
     * @returns {Function}
     */

    function throttle(callback, delay) {
      var leadingCall = false,
          trailingCall = false,
          lastCallTime = 0;
      /**
       * Invokes the original callback function and schedules new invocation if
       * the "proxy" was called during current request.
       *
       * @returns {void}
       */

      function resolvePending() {
        if (leadingCall) {
          leadingCall = false;
          callback();
        }

        if (trailingCall) {
          proxy();
        }
      }
      /**
       * Callback invoked after the specified delay. It will further postpone
       * invocation of the original function delegating it to the
       * requestAnimationFrame.
       *
       * @returns {void}
       */


      function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
      }
      /**
       * Schedules invocation of the original function.
       *
       * @returns {void}
       */


      function proxy() {
        var timeStamp = Date.now();

        if (leadingCall) {
          // Reject immediately following calls.
          if (timeStamp - lastCallTime < trailingTimeout) {
            return;
          } // Schedule new call to be in invoked when the pending one is resolved.
          // This is important for "transitions" which never actually start
          // immediately so there is a chance that we might miss one if change
          // happens amids the pending invocation.


          trailingCall = true;
        } else {
          leadingCall = true;
          trailingCall = false;
          setTimeout(timeoutCallback, delay);
        }

        lastCallTime = timeStamp;
      }

      return proxy;
    } // Minimum delay before invoking the update of observers.


    var REFRESH_DELAY = 20; // A list of substrings of CSS properties used to find transition events that
    // might affect dimensions of observed elements.

    var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight']; // Check if MutationObserver is available.

    var mutationObserverSupported = typeof MutationObserver !== 'undefined';
    /**
     * Singleton controller class which handles updates of ResizeObserver instances.
     */

    var ResizeObserverController =
    /** @class */
    function () {
      /**
       * Creates a new instance of ResizeObserverController.
       *
       * @private
       */
      function ResizeObserverController() {
        /**
         * Indicates whether DOM listeners have been added.
         *
         * @private {boolean}
         */
        this.connected_ = false;
        /**
         * Tells that controller has subscribed for Mutation Events.
         *
         * @private {boolean}
         */

        this.mutationEventsAdded_ = false;
        /**
         * Keeps reference to the instance of MutationObserver.
         *
         * @private {MutationObserver}
         */

        this.mutationsObserver_ = null;
        /**
         * A list of connected observers.
         *
         * @private {Array<ResizeObserverSPI>}
         */

        this.observers_ = [];
        this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
        this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
      }
      /**
       * Adds observer to observers list.
       *
       * @param {ResizeObserverSPI} observer - Observer to be added.
       * @returns {void}
       */


      ResizeObserverController.prototype.addObserver = function (observer) {
        if (!~this.observers_.indexOf(observer)) {
          this.observers_.push(observer);
        } // Add listeners if they haven't been added yet.


        if (!this.connected_) {
          this.connect_();
        }
      };
      /**
       * Removes observer from observers list.
       *
       * @param {ResizeObserverSPI} observer - Observer to be removed.
       * @returns {void}
       */


      ResizeObserverController.prototype.removeObserver = function (observer) {
        var observers = this.observers_;
        var index = observers.indexOf(observer); // Remove observer if it's present in registry.

        if (~index) {
          observers.splice(index, 1);
        } // Remove listeners if controller has no connected observers.


        if (!observers.length && this.connected_) {
          this.disconnect_();
        }
      };
      /**
       * Invokes the update of observers. It will continue running updates insofar
       * it detects changes.
       *
       * @returns {void}
       */


      ResizeObserverController.prototype.refresh = function () {
        var changesDetected = this.updateObservers_(); // Continue running updates if changes have been detected as there might
        // be future ones caused by CSS transitions.

        if (changesDetected) {
          this.refresh();
        }
      };
      /**
       * Updates every observer from observers list and notifies them of queued
       * entries.
       *
       * @private
       * @returns {boolean} Returns "true" if any observer has detected changes in
       *      dimensions of it's elements.
       */


      ResizeObserverController.prototype.updateObservers_ = function () {
        // Collect observers that have active observations.
        var activeObservers = this.observers_.filter(function (observer) {
          return observer.gatherActive(), observer.hasActive();
        }); // Deliver notifications in a separate cycle in order to avoid any
        // collisions between observers, e.g. when multiple instances of
        // ResizeObserver are tracking the same element and the callback of one
        // of them changes content dimensions of the observed target. Sometimes
        // this may result in notifications being blocked for the rest of observers.

        activeObservers.forEach(function (observer) {
          return observer.broadcastActive();
        });
        return activeObservers.length > 0;
      };
      /**
       * Initializes DOM listeners.
       *
       * @private
       * @returns {void}
       */


      ResizeObserverController.prototype.connect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already added.
        if (!isBrowser || this.connected_) {
          return;
        } // Subscription to the "Transitionend" event is used as a workaround for
        // delayed transitions. This way it's possible to capture at least the
        // final state of an element.


        document.addEventListener('transitionend', this.onTransitionEnd_);
        window.addEventListener('resize', this.refresh);

        if (mutationObserverSupported) {
          this.mutationsObserver_ = new MutationObserver(this.refresh);
          this.mutationsObserver_.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
          });
        } else {
          document.addEventListener('DOMSubtreeModified', this.refresh);
          this.mutationEventsAdded_ = true;
        }

        this.connected_ = true;
      };
      /**
       * Removes DOM listeners.
       *
       * @private
       * @returns {void}
       */


      ResizeObserverController.prototype.disconnect_ = function () {
        // Do nothing if running in a non-browser environment or if listeners
        // have been already removed.
        if (!isBrowser || !this.connected_) {
          return;
        }

        document.removeEventListener('transitionend', this.onTransitionEnd_);
        window.removeEventListener('resize', this.refresh);

        if (this.mutationsObserver_) {
          this.mutationsObserver_.disconnect();
        }

        if (this.mutationEventsAdded_) {
          document.removeEventListener('DOMSubtreeModified', this.refresh);
        }

        this.mutationsObserver_ = null;
        this.mutationEventsAdded_ = false;
        this.connected_ = false;
      };
      /**
       * "Transitionend" event handler.
       *
       * @private
       * @param {TransitionEvent} event
       * @returns {void}
       */


      ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
        var _b = _a.propertyName,
            propertyName = _b === void 0 ? '' : _b; // Detect whether transition may affect dimensions of an element.

        var isReflowProperty = transitionKeys.some(function (key) {
          return !!~propertyName.indexOf(key);
        });

        if (isReflowProperty) {
          this.refresh();
        }
      };
      /**
       * Returns instance of the ResizeObserverController.
       *
       * @returns {ResizeObserverController}
       */


      ResizeObserverController.getInstance = function () {
        if (!this.instance_) {
          this.instance_ = new ResizeObserverController();
        }

        return this.instance_;
      };
      /**
       * Holds reference to the controller's instance.
       *
       * @private {ResizeObserverController}
       */


      ResizeObserverController.instance_ = null;
      return ResizeObserverController;
    }();
    /**
     * Defines non-writable/enumerable properties of the provided target object.
     *
     * @param {Object} target - Object for which to define properties.
     * @param {Object} props - Properties to be defined.
     * @returns {Object} Target object.
     */


    var defineConfigurable = function defineConfigurable(target, props) {
      for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
        var key = _a[_i];
        Object.defineProperty(target, key, {
          value: props[key],
          enumerable: false,
          writable: false,
          configurable: true
        });
      }

      return target;
    };
    /**
     * Returns the global object associated with provided element.
     *
     * @param {Object} target
     * @returns {Object}
     */


    var getWindowOf = function getWindowOf(target) {
      // Assume that the element is an instance of Node, which means that it
      // has the "ownerDocument" property from which we can retrieve a
      // corresponding global object.
      var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView; // Return the local global object if it's not possible extract one from
      // provided element.

      return ownerGlobal || global$1;
    }; // Placeholder of an empty content rectangle.


    var emptyRect = createRectInit(0, 0, 0, 0);
    /**
     * Converts provided string to a number.
     *
     * @param {number|string} value
     * @returns {number}
     */

    function toFloat(value) {
      return parseFloat(value) || 0;
    }
    /**
     * Extracts borders size from provided styles.
     *
     * @param {CSSStyleDeclaration} styles
     * @param {...string} positions - Borders positions (top, right, ...)
     * @returns {number}
     */


    function getBordersSize(styles) {
      var positions = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        positions[_i - 1] = arguments[_i];
      }

      return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];
        return size + toFloat(value);
      }, 0);
    }
    /**
     * Extracts paddings sizes from provided styles.
     *
     * @param {CSSStyleDeclaration} styles
     * @returns {Object} Paddings box.
     */


    function getPaddings(styles) {
      var positions = ['top', 'right', 'bottom', 'left'];
      var paddings = {};

      for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
        var position = positions_1[_i];
        var value = styles['padding-' + position];
        paddings[position] = toFloat(value);
      }

      return paddings;
    }
    /**
     * Calculates content rectangle of provided SVG element.
     *
     * @param {SVGGraphicsElement} target - Element content rectangle of which needs
     *      to be calculated.
     * @returns {DOMRectInit}
     */


    function getSVGContentRect(target) {
      var bbox = target.getBBox();
      return createRectInit(0, 0, bbox.width, bbox.height);
    }
    /**
     * Calculates content rectangle of provided HTMLElement.
     *
     * @param {HTMLElement} target - Element for which to calculate the content rectangle.
     * @returns {DOMRectInit}
     */


    function getHTMLElementContentRect(target) {
      // Client width & height properties can't be
      // used exclusively as they provide rounded values.
      var clientWidth = target.clientWidth,
          clientHeight = target.clientHeight; // By this condition we can catch all non-replaced inline, hidden and
      // detached elements. Though elements with width & height properties less
      // than 0.5 will be discarded as well.
      //
      // Without it we would need to implement separate methods for each of
      // those cases and it's not possible to perform a precise and performance
      // effective test for hidden elements. E.g. even jQuery's ':visible' filter
      // gives wrong results for elements with width & height less than 0.5.

      if (!clientWidth && !clientHeight) {
        return emptyRect;
      }

      var styles = getWindowOf(target).getComputedStyle(target);
      var paddings = getPaddings(styles);
      var horizPad = paddings.left + paddings.right;
      var vertPad = paddings.top + paddings.bottom; // Computed styles of width & height are being used because they are the
      // only dimensions available to JS that contain non-rounded values. It could
      // be possible to utilize the getBoundingClientRect if only it's data wasn't
      // affected by CSS transformations let alone paddings, borders and scroll bars.

      var width = toFloat(styles.width),
          height = toFloat(styles.height); // Width & height include paddings and borders when the 'border-box' box
      // model is applied (except for IE).

      if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
          width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }

        if (Math.round(height + vertPad) !== clientHeight) {
          height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
      } // Following steps can't be applied to the document's root element as its
      // client[Width/Height] properties represent viewport area of the window.
      // Besides, it's as well not necessary as the <html> itself neither has
      // rendered scroll bars nor it can be clipped.


      if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight; // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.

        if (Math.abs(vertScrollbar) !== 1) {
          width -= vertScrollbar;
        }

        if (Math.abs(horizScrollbar) !== 1) {
          height -= horizScrollbar;
        }
      }

      return createRectInit(paddings.left, paddings.top, width, height);
    }
    /**
     * Checks whether provided element is an instance of the SVGGraphicsElement.
     *
     * @param {Element} target - Element to be checked.
     * @returns {boolean}
     */


    var isSVGGraphicsElement = function () {
      // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
      // interface.
      if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) {
          return target instanceof getWindowOf(target).SVGGraphicsElement;
        };
      } // If it's so, then check that element is at least an instance of the
      // SVGElement and that it has the "getBBox" method.
      // eslint-disable-next-line no-extra-parens


      return function (target) {
        return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function';
      };
    }();
    /**
     * Checks whether provided element is a document element (<html>).
     *
     * @param {Element} target - Element to be checked.
     * @returns {boolean}
     */


    function isDocumentElement(target) {
      return target === getWindowOf(target).document.documentElement;
    }
    /**
     * Calculates an appropriate content rectangle for provided html or svg element.
     *
     * @param {Element} target - Element content rectangle of which needs to be calculated.
     * @returns {DOMRectInit}
     */


    function getContentRect(target) {
      if (!isBrowser) {
        return emptyRect;
      }

      if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
      }

      return getHTMLElementContentRect(target);
    }
    /**
     * Creates rectangle with an interface of the DOMRectReadOnly.
     * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
     *
     * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
     * @returns {DOMRectReadOnly}
     */


    function createReadOnlyRect(_a) {
      var x = _a.x,
          y = _a.y,
          width = _a.width,
          height = _a.height; // If DOMRectReadOnly is available use it as a prototype for the rectangle.

      var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
      var rect = Object.create(Constr.prototype); // Rectangle's properties are not writable and non-enumerable.

      defineConfigurable(rect, {
        x: x,
        y: y,
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
      });
      return rect;
    }
    /**
     * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
     * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
     *
     * @param {number} x - X coordinate.
     * @param {number} y - Y coordinate.
     * @param {number} width - Rectangle's width.
     * @param {number} height - Rectangle's height.
     * @returns {DOMRectInit}
     */


    function createRectInit(x, y, width, height) {
      return {
        x: x,
        y: y,
        width: width,
        height: height
      };
    }
    /**
     * Class that is responsible for computations of the content rectangle of
     * provided DOM element and for keeping track of it's changes.
     */


    var ResizeObservation =
    /** @class */
    function () {
      /**
       * Creates an instance of ResizeObservation.
       *
       * @param {Element} target - Element to be observed.
       */
      function ResizeObservation(target) {
        /**
         * Broadcasted width of content rectangle.
         *
         * @type {number}
         */
        this.broadcastWidth = 0;
        /**
         * Broadcasted height of content rectangle.
         *
         * @type {number}
         */

        this.broadcastHeight = 0;
        /**
         * Reference to the last observed content rectangle.
         *
         * @private {DOMRectInit}
         */

        this.contentRect_ = createRectInit(0, 0, 0, 0);
        this.target = target;
      }
      /**
       * Updates content rectangle and tells whether it's width or height properties
       * have changed since the last broadcast.
       *
       * @returns {boolean}
       */


      ResizeObservation.prototype.isActive = function () {
        var rect = getContentRect(this.target);
        this.contentRect_ = rect;
        return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
      };
      /**
       * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
       * from the corresponding properties of the last observed content rectangle.
       *
       * @returns {DOMRectInit} Last observed content rectangle.
       */


      ResizeObservation.prototype.broadcastRect = function () {
        var rect = this.contentRect_;
        this.broadcastWidth = rect.width;
        this.broadcastHeight = rect.height;
        return rect;
      };

      return ResizeObservation;
    }();

    var ResizeObserverEntry =
    /** @class */
    function () {
      /**
       * Creates an instance of ResizeObserverEntry.
       *
       * @param {Element} target - Element that is being observed.
       * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
       */
      function ResizeObserverEntry(target, rectInit) {
        var contentRect = createReadOnlyRect(rectInit); // According to the specification following properties are not writable
        // and are also not enumerable in the native implementation.
        //
        // Property accessors are not being used as they'd require to define a
        // private WeakMap storage which may cause memory leaks in browsers that
        // don't support this type of collections.

        defineConfigurable(this, {
          target: target,
          contentRect: contentRect
        });
      }

      return ResizeObserverEntry;
    }();

    var ResizeObserverSPI =
    /** @class */
    function () {
      /**
       * Creates a new instance of ResizeObserver.
       *
       * @param {ResizeObserverCallback} callback - Callback function that is invoked
       *      when one of the observed elements changes it's content dimensions.
       * @param {ResizeObserverController} controller - Controller instance which
       *      is responsible for the updates of observer.
       * @param {ResizeObserver} callbackCtx - Reference to the public
       *      ResizeObserver instance which will be passed to callback function.
       */
      function ResizeObserverSPI(callback, controller, callbackCtx) {
        /**
         * Collection of resize observations that have detected changes in dimensions
         * of elements.
         *
         * @private {Array<ResizeObservation>}
         */
        this.activeObservations_ = [];
        /**
         * Registry of the ResizeObservation instances.
         *
         * @private {Map<Element, ResizeObservation>}
         */

        this.observations_ = new MapShim();

        if (typeof callback !== 'function') {
          throw new TypeError('The callback provided as parameter 1 is not a function.');
        }

        this.callback_ = callback;
        this.controller_ = controller;
        this.callbackCtx_ = callbackCtx;
      }
      /**
       * Starts observing provided element.
       *
       * @param {Element} target - Element to be observed.
       * @returns {void}
       */


      ResizeObserverSPI.prototype.observe = function (target) {
        if (!arguments.length) {
          throw new TypeError('1 argument required, but only 0 present.');
        } // Do nothing if current environment doesn't have the Element interface.


        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
          return;
        }

        if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
        }

        var observations = this.observations_; // Do nothing if element is already being observed.

        if (observations.has(target)) {
          return;
        }

        observations.set(target, new ResizeObservation(target));
        this.controller_.addObserver(this); // Force the update of observations.

        this.controller_.refresh();
      };
      /**
       * Stops observing provided element.
       *
       * @param {Element} target - Element to stop observing.
       * @returns {void}
       */


      ResizeObserverSPI.prototype.unobserve = function (target) {
        if (!arguments.length) {
          throw new TypeError('1 argument required, but only 0 present.');
        } // Do nothing if current environment doesn't have the Element interface.


        if (typeof Element === 'undefined' || !(Element instanceof Object)) {
          return;
        }

        if (!(target instanceof getWindowOf(target).Element)) {
          throw new TypeError('parameter 1 is not of type "Element".');
        }

        var observations = this.observations_; // Do nothing if element is not being observed.

        if (!observations.has(target)) {
          return;
        }

        observations["delete"](target);

        if (!observations.size) {
          this.controller_.removeObserver(this);
        }
      };
      /**
       * Stops observing all elements.
       *
       * @returns {void}
       */


      ResizeObserverSPI.prototype.disconnect = function () {
        this.clearActive();
        this.observations_.clear();
        this.controller_.removeObserver(this);
      };
      /**
       * Collects observation instances the associated element of which has changed
       * it's content rectangle.
       *
       * @returns {void}
       */


      ResizeObserverSPI.prototype.gatherActive = function () {
        var _this = this;

        this.clearActive();
        this.observations_.forEach(function (observation) {
          if (observation.isActive()) {
            _this.activeObservations_.push(observation);
          }
        });
      };
      /**
       * Invokes initial callback function with a list of ResizeObserverEntry
       * instances collected from active resize observations.
       *
       * @returns {void}
       */


      ResizeObserverSPI.prototype.broadcastActive = function () {
        // Do nothing if observer doesn't have active observations.
        if (!this.hasActive()) {
          return;
        }

        var ctx = this.callbackCtx_; // Create ResizeObserverEntry instance for every active observation.

        var entries = this.activeObservations_.map(function (observation) {
          return new ResizeObserverEntry(observation.target, observation.broadcastRect());
        });
        this.callback_.call(ctx, entries, ctx);
        this.clearActive();
      };
      /**
       * Clears the collection of active observations.
       *
       * @returns {void}
       */


      ResizeObserverSPI.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      };
      /**
       * Tells whether observer has active observations.
       *
       * @returns {boolean}
       */


      ResizeObserverSPI.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      };

      return ResizeObserverSPI;
    }(); // Registry of internal observers. If WeakMap is not available use current shim
    // for the Map collection as it has all required methods and because WeakMap
    // can't be fully polyfilled anyway.


    var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
    /**
     * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
     * exposing only those methods and properties that are defined in the spec.
     */

    var ResizeObserver =
    /** @class */
    function () {
      /**
       * Creates a new instance of ResizeObserver.
       *
       * @param {ResizeObserverCallback} callback - Callback that is invoked when
       *      dimensions of the observed elements change.
       */
      function ResizeObserver(callback) {
        if (!(this instanceof ResizeObserver)) {
          throw new TypeError('Cannot call a class as a function.');
        }

        if (!arguments.length) {
          throw new TypeError('1 argument required, but only 0 present.');
        }

        var controller = ResizeObserverController.getInstance();
        var observer = new ResizeObserverSPI(callback, controller, this);
        observers.set(this, observer);
      }

      return ResizeObserver;
    }(); // Expose public methods of ResizeObserver.


    ['observe', 'unobserve', 'disconnect'].forEach(function (method) {
      ResizeObserver.prototype[method] = function () {
        var _a;

        return (_a = observers.get(this))[method].apply(_a, arguments);
      };
    });

    var index = function () {
      // Export existing implementation if available.
      if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
      }

      return ResizeObserver;
    }();
    /* harmony default export */


    __webpack_exports__["default"] = index;
    /***/
  },

  /***/
  "./src/app/general-pages/general-pages.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/general-pages/general-pages.module.ts ***!
    \*******************************************************/

  /*! exports provided: GeneralPagesModule */

  /***/
  function srcAppGeneralPagesGeneralPagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralPagesModule", function () {
      return GeneralPagesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./signin/signin.component */
    "./src/app/general-pages/signin/signin.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/general-pages/signup/signup.component.ts");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");

    var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
      suppressScrollX: true
    };
    var routes = [{
      path: 'signin',
      component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"]
    }, {
      path: 'signup',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
    }];

    var GeneralPagesModule = function GeneralPagesModule() {
      _classCallCheck(this, GeneralPagesModule);
    };

    GeneralPagesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"]],
      providers: [{
        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PERFECT_SCROLLBAR_CONFIG"],
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }]
    })], GeneralPagesModule);
    /***/
  },

  /***/
  "./src/app/general-pages/signin/signin.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/general-pages/signin/signin.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGeneralPagesSigninSigninComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYWwtcGFnZXMvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/general-pages/signin/signin.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/general-pages/signin/signin.component.ts ***!
    \**********************************************************/

  /*! exports provided: SigninComponent */

  /***/
  function srcAppGeneralPagesSigninSigninComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
      return SigninComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SigninComponent = /*#__PURE__*/function () {
      function SigninComponent() {
        _classCallCheck(this, SigninComponent);
      }

      _createClass(SigninComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SigninComponent;
    }();

    SigninComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signin',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./signin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/general-pages/signin/signin.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./signin.component.scss */
      "./src/app/general-pages/signin/signin.component.scss"))["default"]]
    })], SigninComponent);
    /***/
  },

  /***/
  "./src/app/general-pages/signup/signup.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/general-pages/signup/signup.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGeneralPagesSignupSignupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYWwtcGFnZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/general-pages/signup/signup.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/general-pages/signup/signup.component.ts ***!
    \**********************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppGeneralPagesSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent() {
        _classCallCheck(this, SignupComponent);
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignupComponent;
    }();

    SignupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/general-pages/signup/signup.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./signup.component.scss */
      "./src/app/general-pages/signup/signup.component.scss"))["default"]]
    })], SignupComponent);
    /***/
  }
}]);
//# sourceMappingURL=general-pages-general-pages-module-es5.js.map