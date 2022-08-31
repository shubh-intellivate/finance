function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ui-elements-ui-elements-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-elements/buttons/buttons.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-elements/buttons/buttons.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiElementsButtonsButtonsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"az-content\">\n  <div class=\"container\">\n    <app-components-sidebar></app-components-sidebar>\n    <div class=\"az-content-body pd-lg-l-40 d-flex flex-column\">\n      <div class=\"az-content-breadcrumb\">\n        <span>Components</span>\n        <span>UI Elements</span>\n        <span>Buttons</span>\n      </div>\n      <h2 class=\"az-content-title\">Buttons</h2>\n\n      <div class=\"az-content-label mg-b-5\">Theme Buttons</div>\n      <p class=\"mg-b-20\">Predefined button styles, each serving its own semantic purpose.</p>\n\n      <div class=\"row row-xs wd-xl-80p\">\n        <div class=\"col-sm-6 col-md-3\"><button class=\"btn btn-az-primary btn-block\">Primary</button></div>\n        <div class=\"col-sm-6 col-md-3 mg-t-10 mg-sm-t-0\"><button class=\"btn btn-az-secondary btn-block\">Secondary</button></div>\n        <div class=\"col-sm-6 col-md-3 mg-t-10 mg-md-t-0\"><button class=\"btn btn-gray-500 btn-block\">Light</button></div>\n        <div class=\"col-sm-6 col-md-3 mg-t-10 mg-md-t-0\"><button class=\"btn btn-gray-700 btn-block\">Dark</button></div>\n      </div><!-- row -->\n\n      <table class=\"table az-table-reference\">\n        <thead>\n          <tr>\n            <th class=\"wd-40p\">Class Reference</th>\n            <th class=\"wd-60p\">Values</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td><code class=\"pd-0 bg-transparent\">class=\"btn btn-az-[value]\"</code></td>\n            <td>primary | secondary | light | dark</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <hr class=\"mg-y-30\">\n\n      <div class=\"az-content-label mg-b-5\">Bootstrap Buttons</div>\n      <p class=\"mg-b-20\">Predefined button styles, each serving its own semantic purpose.</p>\n\n      <div class=\"row row-xs wd-xl-80p\">\n        <div class=\"col-sm-6 col-md-3\"><button class=\"btn btn-primary btn-block\">Primary</button></div>\n        <div class=\"col-sm-6 col-md-3 mg-t-10 mg-sm-t-0\"><button class=\"btn btn-secondary btn-block\">Secondary</button></div>\n        <div class=\"col-sm-6 col-md-3 mg-t-10 mg-md-t-0\"><button class=\"btn btn-success btn-block\">Success</button></div>\n        <div class=\"col-sm-6 col-md-3 mg-t-10 mg-md-t-0\"><button class=\"btn btn-warning btn-block\">Warning</button></div>\n        <div class=\"col-sm-6 col-md-3 mg-t-10\"><button class=\"btn btn-danger btn-block\">Danger</button></div>\n        <div class=\"col-sm-6 col-md-3 mg-t-10\"><button class=\"btn btn-info btn-block\">Info</button></div>\n        <div class=\"col-sm-6 col-md-3 mg-t-10\"><button class=\"btn btn-light btn-block\">Light</button></div>\n        <div class=\"col-sm-6 col-md-3 mg-t-10\"><button class=\"btn btn-dark btn-block\">Dark</button></div>\n      </div><!-- row -->\n\n      <table class=\"table az-table-reference\">\n        <thead>\n          <tr>\n            <th class=\"wd-40p\">Class Reference</th>\n            <th class=\"wd-60p\">Values</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td><code class=\"pd-0 bg-transparent\">class=\"btn btn-[value]\"</code></td>\n            <td>primary | secondary | success | warning | danger | info | light | dark</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <hr class=\"mg-y-30\">\n\n      <div class=\"az-content-label mg-b-5\">Outline Buttons</div>\n      <p class=\"mg-b-20\">Predefined button styles, each serving its own semantic purpose.</p>\n\n      <div class=\"row row-xs wd-xl-80p\">\n        <div class=\"col-sm-6 col-md-3\"><button class=\"btn btn-outline-indigo btn-block\">Primary</button></div>\n        <div class=\"col-sm-6 col-md-3 mg-t-10 mg-sm-t-0\"><button class=\"btn btn-outline-primary btn-block\">Secondary</button></div>\n        <div class=\"col-sm-6 col-md-3 mg-t-10 mg-md-t-0\"><button class=\"btn btn-outline-light btn-block\">Light</button></div>\n        <div class=\"col-sm-6 col-md-3 mg-t-10 mg-md-t-0\"><button class=\"btn btn-outline-dark btn-block\">Dark</button></div>\n      </div><!-- row -->\n\n      <table class=\"table az-table-reference\">\n        <thead>\n          <tr>\n            <th class=\"wd-40p\">Class Reference</th>\n            <th class=\"wd-60p\">Values</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <td><code class=\"pd-0 bg-transparent\">class=\"btn btn-outline-[value]\"</code></td>\n            <td>indigo | primary | secondary | success | warning | danger | info | light | dark</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <hr class=\"mg-y-30\">\n\n      <div class=\"az-content-label mg-b-5\">Rounded Buttons</div>\n      <p class=\"mg-b-20\">Predefined button styles, each serving its own semantic purpose.</p>\n\n      <div class=\"row row-xs wd-xl-80p\">\n        <div class=\"col-sm-6 col-md-3\"><button class=\"btn btn-indigo btn-rounded btn-block\">Primary</button></div>\n        <div class=\"col-sm-6 col-md-3 mg-t-10 mg-sm-t-0\"><button class=\"btn btn-outline-indigo btn-rounded btn-block\">Primary</button></div>\n        <div class=\"col-sm-6 col-md-3 mg-t-10 mg-md-t-0\"><button class=\"btn btn-primary btn-rounded btn-block\">Secondary</button></div>\n        <div class=\"col-sm-6 col-md-3 mg-t-10 mg-md-t-0\"><button class=\"btn btn-outline-primary btn-rounded btn-block\">Secondary</button></div>\n      </div><!-- row -->\n\n      <hr class=\"mg-y-30\">\n\n      <div class=\"az-content-label mg-b-5\">Button with Icons</div>\n      <p class=\"mg-b-20\">A basic button with added icons.</p>\n\n      <div class=\"row row-xs wd-xl-80p\">\n        <div class=\"col-sm-6 col-md-3\"><button class=\"btn btn-indigo btn-with-icon btn-block\"><i class=\"typcn typcn-folder\"></i> Folder</button></div>\n        <div class=\"col-sm-6 col-md-3 mg-t-10 mg-sm-t-0\"><button class=\"btn btn-primary btn-with-icon btn-block\"><i class=\"typcn typcn-mail\"></i> Mail</button></div>\n        <div class=\"col-sm-6 col-md-3 mg-t-10 mg-md-t-0\"><button class=\"btn btn-success btn-with-icon btn-block\"><i class=\"typcn typcn-edit\"></i> Edit</button></div>\n      </div><!-- row -->\n\n      <hr class=\"mg-y-30\">\n\n      <div class=\"az-content-label mg-b-5\">Icon Buttons</div>\n      <p class=\"mg-b-20\">A button variant for using only icons.</p>\n\n      <div class=\"btn-icon-list\">\n        <button class=\"btn btn-indigo btn-icon\"><i class=\"typcn typcn-folder\"></i></button>\n        <button class=\"btn btn-primary btn-icon\"><i class=\"typcn typcn-calendar-outline\"></i></button>\n        <button class=\"btn btn-success btn-icon\"><i class=\"typcn typcn-document-add\"></i></button>\n        <button class=\"btn btn-info btn-icon\"><i class=\"typcn typcn-arrow-back-outline\"></i></button>\n      </div>\n\n      <hr class=\"mg-y-30\">\n\n      <div class=\"az-content-label mg-b-5\">Dropdown Buttons</div>\n      <p class=\"mg-b-20\">A button variant for using only icons.</p>\n\n      <div class=\"row row-xs wd-xl-80p\">\n        <div class=\"col-sm-6 col-md-3\">\n          <div ngbDropdown>\n            <button ngbDropdownToggle class=\"btn btn-indigo btn-block\" id=\"buttonDropdownOne\">Dropdown </button>\n            <div class=\"dropdown-menu\" ngbDropdownMenu aria-labelledby=\"buttonDropdownOne\">\n              <a href=\"\" class=\"dropdown-item\">Profile</a>\n              <a href=\"\" class=\"dropdown-item\">Activity Logs</a>\n              <a href=\"\" class=\"dropdown-item\">Account Settings</a>\n              <a href=\"\" class=\"dropdown-item\">Logout</a>\n            </div><!-- dropdown-menu -->\n          </div>\n        </div>\n        <div class=\"col-sm-6 col-md-3 mg-t-10 mg-sm-t-0\">\n          <div ngbDropdown>\n            <button ngbDropdownToggle class=\"btn btn-primary btn-block\" id=\"buttonDropdownTwo\">Dropdown </button>\n            <div class=\"dropdown-menu\" ngbDropdownMenu aria-labelledby=\"buttonDropdownTwo\">\n              <a href=\"\" class=\"dropdown-item\">Profile</a>\n              <a href=\"\" class=\"dropdown-item\">Activity Logs</a>\n              <a href=\"\" class=\"dropdown-item\">Account Settings</a>\n              <a href=\"\" class=\"dropdown-item\">Logout</a>\n            </div><!-- dropdown-menu -->\n          </div>\n        </div>\n      </div><!-- row -->\n\n      <hr class=\"mg-y-30\">\n\n      <div class=\"az-content-label mg-b-5\">Button Groups</div>\n      <p class=\"mg-b-20\">Group a series of buttons together on a single line with the button group.</p>\n\n      <div class=\"row row-sm\">\n        <div class=\"col-lg-4\">\n          <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n            <button type=\"button\" class=\"btn btn-secondary pd-x-25 active\">Left</button>\n            <button type=\"button\" class=\"btn btn-secondary pd-x-25\">Center</button>\n            <button type=\"button\" class=\"btn btn-secondary pd-x-25\">Right</button>\n          </div>\n        </div><!-- col-4 -->\n        <div class=\"col-lg-2 mg-t-20 mg-lg-t-0\">\n          <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n            <button type=\"button\" class=\"btn btn-secondary btn-icon active\"><i class=\"typcn typcn-media-play-outline\"></i></button>\n            <button type=\"button\" class=\"btn btn-secondary btn-icon\"><i class=\"typcn typcn-media-pause-outline\"></i></button>\n            <button type=\"button\" class=\"btn btn-secondary btn-icon\"><i class=\"typcn typcn-media-stop-outline\"></i></button>\n          </div>\n        </div><!-- col-2 -->\n        <div class=\"col-lg-4 mg-t-20 mg-lg-t-0\">\n          <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n            <button type=\"button\" class=\"btn btn-indigo btn-icon active\"><i class=\"typcn typcn-media-play-outline\"></i></button>\n            <button type=\"button\" class=\"btn btn-primary btn-icon\"><i class=\"typcn typcn-media-pause-outline\"></i></button>\n            <button type=\"button\" class=\"btn btn-primary btn-icon\"><i class=\"typcn typcn-media-stop-outline\"></i></button>\n          </div>\n        </div><!-- col-4 -->\n      </div><!-- row -->\n      \n    </div><!-- az-content-body -->\n  </div><!-- container -->\n</div><!-- az-content -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-elements/dropdown/dropdown.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-elements/dropdown/dropdown.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiElementsDropdownDropdownComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"az-content\">\n  <div class=\"container\">\n    <app-components-sidebar></app-components-sidebar>\n    <div class=\"az-content-body pd-lg-l-40 d-flex flex-column\">\n      <div class=\"az-content-breadcrumb\">\n        <span>Components</span>\n        <span>UI Elements</span>\n        <span>Dropdown</span>\n      </div>\n      <h2 class=\"az-content-title\">Dropdown</h2>\n\n      <div class=\"az-content-label mg-b-5\">Basic Example</div>\n      <p class=\"mg-b-20\">Wrap the dropdown’s toggle (your button or link) and the dropdown menu within .dropdown, or another element that declares position relative. Dropdowns can be triggered from link or button elements to better fit your potential needs.</p>\n\n      <div ngbDropdown>\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenu\" ngbDropdownToggle>\n          Dropdown Menu\n        </button>\n        <div class=\"dropdown-menu tx-13\" ngbDropdownMenu aria-labelledby=\"dropdownMenu\">\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"$event.preventDefault()\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"$event.preventDefault()\">Another action</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"$event.preventDefault()\">Something else here</a>\n        </div>\n      </div>\n\n      <hr class=\"mg-y-40\">\n\n      <div class=\"az-content-label mg-b-5\">Dropup</div>\n      <p class=\"mg-b-20\">Trigger dropdown menus above elements by adding dropup class to the parent element.</p>\n\n      <div ngbDropdown placement=\"top-right\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropupMenu\" ngbDropdownToggle>\n          Dropup Menu\n        </button>\n        <div class=\"dropdown-menu tx-13\" ngbDropdownMenu aria-labelledby=\"dropupMenu\">\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"$event.preventDefault()\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"$event.preventDefault()\">Another action</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"$event.preventDefault()\">Something else here</a>\n        </div>\n      </div>\n\n      <hr class=\"mg-y-40\">\n\n      <div class=\"az-content-label mg-b-5\">Active Menu Item</div>\n      <p class=\"mg-b-20\">Add active class to items in the dropdown to style them as active.</p>\n\n      <div class=\"dropdown\" ngbDropdown>\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"activeMenuItem\" ngbDropdownToggle>\n          Dropdown Menu\n        </button>\n        <div class=\"dropdown-menu tx-13\" ngbDropdownMenu aria-labelledby=\"activeMenuItem\">\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"$event.preventDefault()\">Action</a>\n          <a class=\"dropdown-item active\" href=\"#\" (click)=\"$event.preventDefault()\">Another action</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"$event.preventDefault()\">Something else here</a>\n        </div>\n      </div>\n\n      <hr class=\"mg-y-40\">\n\n      <div class=\"az-content-label mg-b-5\">Disabled Menu Item</div>\n      <p class=\"mg-b-20\">Add disabled class to items in the dropdown to style them as disabled.</p>\n\n      <div class=\"dropdown\" ngbDropdown>\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"disableMenuItem\" ngbDropdownToggle>\n          Dropdown Menu\n        </button>\n        <div class=\"dropdown-menu tx-13\" ngbDropdownMenu aria-labelledby=\"disableMenuItem\">\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"$event.preventDefault()\">Action</a>\n          <a class=\"dropdown-item disabled\" href=\"#\" (click)=\"$event.preventDefault()\">Another action</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"$event.preventDefault()\">Something else here</a>\n        </div>\n      </div>\n\n      <hr class=\"mg-y-40\">\n\n      <div class=\"az-content-label mg-b-5\">Dropdown Header</div>\n      <p class=\"mg-b-20\">Add a header to label sections of actions in any dropdown menu.</p>\n\n      <div class=\"dropdown\" ngbDropdown>\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownHeader\" ngbDropdownToggle>\n          Dropdown Menu\n        </button>\n        <div class=\"dropdown-menu tx-13\" ngbDropdownMenu aria-labelledby=\"dropdownHeader\">\n          <h6 class=\"dropdown-header tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1\">Dropdown header</h6>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"$event.preventDefault()\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"$event.preventDefault()\">Another action</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"$event.preventDefault()\">Something else here</a>\n        </div>\n      </div>\n\n      <hr class=\"mg-y-40\">\n\n      <div class=\"az-content-label mg-b-5\">Dropdown Divider</div>\n      <p class=\"mg-b-20\">Separate groups of related menu items with a divider.</p>\n\n      <div class=\"dropdown\" ngbDropdown>\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" ngbDropdownToggle>\n          Dropdown Menu\n        </button>\n        <div class=\"dropdown-menu tx-13\" ngbDropdownMenu>\n          <h6 class=\"dropdown-header tx-uppercase tx-11 tx-bold tx-inverse tx-spacing-1\">Dropdown header</h6>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"$event.preventDefault()\">Action</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"$event.preventDefault()\">Another action</a>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"$event.preventDefault()\">Something else here</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item\" href=\"#\" (click)=\"$event.preventDefault()\">Separated link</a>\n        </div>\n      </div>\n\n      <div class=\"ht-40\"></div>\n\n    </div><!-- az-content-body -->\n  </div><!-- container -->\n</div><!-- az-content -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-elements/icons/icons.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui-elements/icons/icons.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUiElementsIconsIconsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"az-content\">\n  <div class=\"container\">\n    <app-components-sidebar></app-components-sidebar>\n    <div class=\"az-content-body pd-lg-l-40 d-flex flex-column\">\n      <div class=\"az-content-breadcrumb\">\n        <span>Components</span>\n        <span>UI Elements</span>\n        <span>Icons</span>\n      </div>\n      <h2 class=\"az-content-title\">Icons</h2>\n\n      <div class=\"az-content-label mg-b-5\">FontAwesome Icons</div>\n      <p class=\"mg-b-20\">The world’s most popular and easiest to use icon set just got an upgrade. More icons. More styles. More options.</p>\n\n      <div class=\"az-icon-group bg-gray-200\">\n        <div class=\"row row-xs\">\n          <div class=\"col\"><i class=\"far fa-address-book\"></i></div>\n          <div class=\"col\"><i class=\"far fa-address-card\"></i></div>\n          <div class=\"col\"><i class=\"far fa-arrow-alt-circle-down\"></i></div>\n          <div class=\"col\"><i class=\"far fa-arrow-alt-circle-left\"></i></div>\n          <div class=\"col\"><i class=\"far fa-arrow-alt-circle-up\"></i></div>\n          <div class=\"col\"><i class=\"far fa-arrow-alt-circle-right\"></i></div>\n          <div class=\"col\"><i class=\"fas fa-ban\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"far fa-bell\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"far fa-bell-slash\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"far fa-bookmark\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"far fa-calendar\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"far fa-calendar-check\"></i></div>\n        </div><!-- row -->\n      </div>\n      <div class=\"az-icon-group bg-gray-800 tx-white\">\n        <div class=\"row row-xs\">\n          <div class=\"col\"><i class=\"far fa-check-circle\"></i></div>\n          <div class=\"col\"><i class=\"far fa-clipboard\"></i></div>\n          <div class=\"col\"><i class=\"far fa-clock\"></i></div>\n          <div class=\"col\"><i class=\"far fa-clone\"></i></div>\n          <div class=\"col\"><i class=\"far fa-comment\"></i></div>\n          <div class=\"col\"><i class=\"far fa-compass\"></i></div>\n          <div class=\"col\"><i class=\"fas fa-desktop\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"far fa-envelope\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"fas fa-envelope-open-text\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"far fa-eye\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"far fa-eye-slash\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"far fa-file-alt\"></i></div>\n        </div><!-- row -->\n      </div>\n\n      <p class=\"mg-t-15 mg-b-0\">See more FontAwesome icons at <a href=\"https://fontawesome.com/icons\" target=\"_blank\">FontAwesome Icons</a></p>\n\n      <hr class=\"mg-y-30\">\n\n      <div class=\"az-content-label mg-b-5\">Ionicons Icons</div>\n      <p class=\"mg-b-20\">Premium designed icons for use in web, iOS, Android, and desktop apps. Support for SVG and web font.</p>\n\n      <div class=\"az-icon-group bg-gray-200\">\n        <div class=\"row row-xs\">\n          <div class=\"col\"><i class=\"icon ion-md-alarm\"></i></div>\n          <div class=\"col\"><i class=\"icon ion-md-chatboxes\"></i></div>\n          <div class=\"col\"><i class=\"icon ion-md-copy\"></i></div>\n          <div class=\"col\"><i class=\"icon ion-md-cube\"></i></div>\n          <div class=\"col\"><i class=\"icon ion-md-filing\"></i></div>\n          <div class=\"col\"><i class=\"icon ion-md-eye\"></i></div>\n          <div class=\"col\"><i class=\"icon ion-md-globe\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"icon ion-md-images\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"icon ion-md-laptop\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"icon ion-md-paper\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"icon ion-md-paper-plane\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"icon ion-md-pricetags\"></i></div>\n        </div><!-- row -->\n      </div>\n      <div class=\"az-icon-group bg-gray-800 tx-white\">\n        <div class=\"row row-xs\">\n          <div class=\"col\"><i class=\"icon ion-ios-settings\"></i></div>\n          <div class=\"col\"><i class=\"icon ion-ios-stats\"></i></div>\n          <div class=\"col\"><i class=\"icon ion-ios-share-alt\"></i></div>\n          <div class=\"col\"><i class=\"icon ion-ios-rocket\"></i></div>\n          <div class=\"col\"><i class=\"icon ion-ios-rainy\"></i></div>\n          <div class=\"col\"><i class=\"icon ion-ios-print\"></i></div>\n          <div class=\"col\"><i class=\"icon ion-ios-pie\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"icon ion-ios-person\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"icon ion-ios-mic\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"icon ion-ios-locate\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"icon ion-ios-list-box\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"icon ion-ios-home\"></i></div>\n        </div><!-- row -->\n      </div>\n\n      <p class=\"mg-t-15 mg-b-0\">See more Ionicons icons at <a href=\"https://ionicons.com\" target=\"_blank\">Ionicons</a></p>\n\n      <hr class=\"mg-y-30\">\n\n      <div class=\"az-content-label mg-b-5\">Typicons Icons</div>\n      <p class=\"mg-b-20\">Typicons are free-to-use vector icons embedded in a webfont for easy use in any UI, whether it be on the web or in a native app.</p>\n\n      <div class=\"az-icon-group bg-gray-200\">\n        <div class=\"row row-xs\">\n          <div class=\"col\"><i class=\"typcn typcn-archive\"></i></div>\n          <div class=\"col\"><i class=\"typcn typcn-arrow-back-outline\"></i></div>\n          <div class=\"col\"><i class=\"typcn typcn-arrow-right-outline\"></i></div>\n          <div class=\"col\"><i class=\"typcn typcn-attachment-outline\"></i></div>\n          <div class=\"col\"><i class=\"typcn typcn-bell\"></i></div>\n          <div class=\"col\"><i class=\"typcn typcn-book\"></i></div>\n          <div class=\"col\"><i class=\"typcn typcn-bookmark\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"typcn typcn-briefcase\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"typcn typcn-calendar-outline\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"typcn typcn-camera-outline\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"typcn typcn-chart-pie-outline\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"typcn typcn-coffee\"></i></div>\n        </div><!-- row -->\n      </div>\n      <div class=\"az-icon-group bg-gray-800 tx-white\">\n        <div class=\"row row-xs\">\n          <div class=\"col\"><i class=\"typcn typcn-document-add\"></i></div>\n          <div class=\"col\"><i class=\"typcn typcn-document-delete\"></i></div>\n          <div class=\"col\"><i class=\"typcn typcn-document-text\"></i></div>\n          <div class=\"col\"><i class=\"typcn typcn-edit\"></i></div>\n          <div class=\"col\"><i class=\"typcn typcn-export-outline\"></i></div>\n          <div class=\"col\"><i class=\"typcn typcn-flash-outline\"></i></div>\n          <div class=\"col\"><i class=\"typcn typcn-folder-open\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"typcn typcn-folder\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"typcn typcn-group-outline\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"typcn typcn-mail\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"typcn typcn-message\"></i></div>\n          <div class=\"col d-none d-sm-block\"><i class=\"typcn typcn-shopping-cart\"></i></div>\n        </div><!-- row -->\n      </div>\n      <p class=\"mg-t-15 mg-b-0\">See more Typicons icons at <a href=\"https://www.s-ings.com/typicons/\" target=\"_blank\">Typicons Icons</a></p>\n\n      <div class=\"mg-lg-b-30\"></div>\n\n    </div><!-- az-content-body -->\n  </div><!-- container -->\n</div><!-- az-content -->";
    /***/
  },

  /***/
  "./src/app/ui-elements/buttons/buttons.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/ui-elements/buttons/buttons.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiElementsButtonsButtonsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWVsZW1lbnRzL2J1dHRvbnMvYnV0dG9ucy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ui-elements/buttons/buttons.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/ui-elements/buttons/buttons.component.ts ***!
    \**********************************************************/

  /*! exports provided: ButtonsComponent */

  /***/
  function srcAppUiElementsButtonsButtonsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function () {
      return ButtonsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ButtonsComponent = /*#__PURE__*/function () {
      function ButtonsComponent() {
        _classCallCheck(this, ButtonsComponent);
      }

      _createClass(ButtonsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ButtonsComponent;
    }();

    ButtonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-buttons',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./buttons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-elements/buttons/buttons.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./buttons.component.scss */
      "./src/app/ui-elements/buttons/buttons.component.scss"))["default"]]
    })], ButtonsComponent);
    /***/
  },

  /***/
  "./src/app/ui-elements/dropdown/dropdown.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/ui-elements/dropdown/dropdown.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiElementsDropdownDropdownComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWVsZW1lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ui-elements/dropdown/dropdown.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/ui-elements/dropdown/dropdown.component.ts ***!
    \************************************************************/

  /*! exports provided: DropdownComponent */

  /***/
  function srcAppUiElementsDropdownDropdownComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownComponent", function () {
      return DropdownComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DropdownComponent = /*#__PURE__*/function () {
      // constructor() { }
      function DropdownComponent() {
        _classCallCheck(this, DropdownComponent);
      }

      _createClass(DropdownComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DropdownComponent;
    }();

    DropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dropdown',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dropdown.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-elements/dropdown/dropdown.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dropdown.component.scss */
      "./src/app/ui-elements/dropdown/dropdown.component.scss"))["default"]]
    })], DropdownComponent);
    /***/
  },

  /***/
  "./src/app/ui-elements/icons/icons.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/ui-elements/icons/icons.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUiElementsIconsIconsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpLWVsZW1lbnRzL2ljb25zL2ljb25zLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ui-elements/icons/icons.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/ui-elements/icons/icons.component.ts ***!
    \******************************************************/

  /*! exports provided: IconsComponent */

  /***/
  function srcAppUiElementsIconsIconsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IconsComponent", function () {
      return IconsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IconsComponent = /*#__PURE__*/function () {
      function IconsComponent() {
        _classCallCheck(this, IconsComponent);
      }

      _createClass(IconsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IconsComponent;
    }();

    IconsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-icons',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./icons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ui-elements/icons/icons.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./icons.component.scss */
      "./src/app/ui-elements/icons/icons.component.scss"))["default"]]
    })], IconsComponent);
    /***/
  },

  /***/
  "./src/app/ui-elements/ui-elements.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/ui-elements/ui-elements.module.ts ***!
    \***************************************************/

  /*! exports provided: UiElementsModule */

  /***/
  function srcAppUiElementsUiElementsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiElementsModule", function () {
      return UiElementsModule;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./buttons/buttons.component */
    "./src/app/ui-elements/buttons/buttons.component.ts");
    /* harmony import */


    var _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dropdown/dropdown.component */
    "./src/app/ui-elements/dropdown/dropdown.component.ts");
    /* harmony import */


    var _icons_icons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./icons/icons.component */
    "./src/app/ui-elements/icons/icons.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var routes = [{
      path: 'buttons',
      component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_5__["ButtonsComponent"]
    }, {
      path: 'dropdown',
      component: _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_6__["DropdownComponent"]
    }, {
      path: 'icons',
      component: _icons_icons_component__WEBPACK_IMPORTED_MODULE_7__["IconsComponent"]
    }];

    var UiElementsModule = function UiElementsModule() {
      _classCallCheck(this, UiElementsModule);
    };

    UiElementsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [// ComponentsSidebarComponent, 
      _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_5__["ButtonsComponent"], _dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_6__["DropdownComponent"], _icons_icons_component__WEBPACK_IMPORTED_MODULE_7__["IconsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]]
    })], UiElementsModule);
    /***/
  }
}]);
//# sourceMappingURL=ui-elements-ui-elements-module-es5.js.map