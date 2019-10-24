(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin-panel/admin-panel.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin-panel/admin-panel.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-2\">\r\n  <h2 class=\"text-center\">Admin Panel</h2>\r\n  <div class=\"tab-panel\">\r\n    <tabset class=\"member-tabset\">\r\n      <tab heading=\"Roles\" *appHasRole=\"['Admin']\">\r\n        <div class=\"container\">\r\n            <app-user-management></app-user-management>\r\n        </div>\r\n      </tab>\r\n      <tab heading=\"Create account\" *appHasRole=\"['Admin','Moderator']\">\r\n          <div class=\"row justify-content-center\">\r\n              <div class=\"col-4\">\r\n                <app-register></app-register>\r\n              </div>\r\n            </div>\r\n      </tab>\r\n      <tab heading=\"Sessions\" *appHasRole=\"['Admin','Moderator']\">\r\n        <app-session-management></app-session-management>\r\n      </tab>\r\n      <tab heading=\"Payments\" *appHasRole=\"['Admin','Moderator']\">\r\n        Payments will go here\r\n      </tab>\r\n    </tabset>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/assignment-audit/assignment-audit.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/assignment-audit/assignment-audit.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row justify-content-center\">\n    <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"loadAssignments()\" novalidate>\n      <div class=\"form-group ml-1\">\n        <label for=\"member\"><i class=\"fa fa-user px-1\"></i></label>\n        <select class=\"form-control ml-1\" style=\"width: 180px\" [(ngModel)]=\"userId\" id=\"member\" name=\"member\">\n          <option value=\"-1\">All</option>\n          <option *ngFor=\"let user of users\" [value]=\"user.id\">\n            {{user.knownAs}}\n          </option>\n        </select>\n      </div>\n\n      <div class=\"form-group ml-1\">\n        <label for=\"session\"><i class=\"fa fa-calendar px-1\"></i></label>\n        <select class=\"form-control ml-1\" style=\"width: 180px\" [(ngModel)]=\"sessionId\" id=\"session\" name=\"session\">\n          <option value=\"-1\">All</option>\n          <option *ngFor=\"let session of sessions\" [value]=\"session.id\">\n            {{session.name}}\n          </option>\n        </select>\n      </div>\n\n      <div class=\"form-group ml-1\">\n        <label for=\"isComplete\"><i class=\"fa fa-check-square px-1\"></i></label>\n        <select class=\"form-control ml-1\" style=\"width: 150px\" [(ngModel)]=\"isCompleted\" id=\"isComplete\" name=\"isComplete\">\n          <option *ngFor=\"let item of completeList\" [value]=\"item.value\">\n            {{item.display}}\n          </option>\n        </select>\n      </div>\n      <div class=\"form-group ml-1\">\n        <label for=\"bookAsin\"><i class=\"fa fa-list-ol px-1\"></i></label>\n        <input type=\"text\" class=\"form-control ml-1\" style=\"width: 150px\" [(ngModel)]=\"bookAsin\"\n        placeholder=\"Book Asin\"\n        id=\"bookAsin\" name=\"knownAs\">\n      </div>\n\n      <div class=\"form-group ml-1\">\n        <label for=\"country\"><i class=\"fa fa-flag px-1\"></i></label>\n        <select class=\"form-control ml-1\" style=\"width: 100px\" [(ngModel)]=\"country\" id=\"country\" name=\"country\">\n          <option *ngFor=\"let country of countryList\" [value]=\"country.value\">\n            {{country.display}}\n          </option>\n        </select>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-info\" style=\"margin-left:10px\"><i class=\"fa fa-search-minus\"></i></button>\n      <span class=\"ml-2\">Total Codes: {{totalCodes}}</span>\n    </form>\n  </div>\n    <br>\n    <div class=\"row\">\n      <table class=\"table\">\n        <tr>\n          <th style=\"width: 5%\">SL</th>\n          <th style=\"width: 15%\">Assigned Date</th>\n          <th style=\"width: 10%\">Total Codes</th>\n          <th style=\"width: 15%\">Starting Rating</th>\n          <th style=\"width: 10%\">Book Asin</th>\n          <th style=\"width: 5%\">Country</th>\n          <th style=\"width: 10%\">Assigned To</th>\n          <th style=\"width: 20%\">Last Modified On</th>\n          <th style=\"width: 10%\">Status</th>\n        </tr>\n        <tr *ngFor=\"let assignment of assignments; index as i\">\n          <td>{{i+1}}</td>\n          <td>{{assignment.assignedDate|date:'mediumDate'}}</td>\n          <td>{{assignment.totalCodes}}</td>\n          <td>{{assignment.startingRating}}</td>\n          <td>{{assignment.bookAsin}}</td>\n          <td>{{assignment.country|uppercase}}</td>\n          <td>{{assignment.assignedTo.knownAs}}</td>\n          <td>{{assignment.lastModifiedOn|date:'medium'}}</td>\n          <td>{{assignment.isCompleted? 'Completed':\"Incomplete\"}}</td>\n        </tr>\n      </table>\n    </div>\n  </div>\n\n  <div class=\"d-flex justify-content-center\">\n    <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\"\n    [(ngModel)]=\"pagination.currentPage\" [itemsPerPage]=\"pagination.itemsPerPage\"\n    (pageChanged)=\"pageChanged($event)\"\n    previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"\n    [maxSize]=\"5\" [rotate]=\"false\"></pagination>\n  </div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/review-audit/review-audit.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/review-audit/review-audit.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row justify-content-center\">\n    <form\n      class=\"form-inline\"\n      #form=\"ngForm\"\n      (ngSubmit)=\"loadReviews()\"\n      novalidate\n    >\n      <div class=\"form-group ml-1\">\n        <label for=\"member\"><i class=\"fa fa-user px-1\"></i></label>\n        <select\n          class=\"form-control ml-1\"\n          style=\"width: 200px\"\n          [(ngModel)]=\"userId\"\n          id=\"member\"\n          name=\"member\"\n        >\n          <option value=\"-1\">All</option>\n          <option *ngFor=\"let user of users\" [value]=\"user.id\">\n            {{ user.knownAs }}\n          </option>\n        </select>\n      </div>\n\n      <div class=\"form-group ml-1\">\n        <label for=\"session\"><i class=\"fa fa-calendar px-1\"></i></label>\n        <select\n          class=\"form-control ml-1\"\n          style=\"width: 200px\"\n          [(ngModel)]=\"sessionId\"\n          id=\"session\"\n          name=\"session\"\n        >\n          <option value=\"-1\">All</option>\n          <option *ngFor=\"let session of sessions\" [value]=\"session.id\">\n            {{ session.name }}\n          </option>\n        </select>\n      </div>\n\n      <div class=\"form-group ml-1\">\n        <label for=\"bookAsin\"><i class=\"fa fa-list-ol\"></i></label>\n        <input\n          type=\"text\"\n          class=\"form-control ml-1\"\n          style=\"width: 150px\"\n          [(ngModel)]=\"bookAsin\"\n          placeholder=\"Book Asin\"\n          id=\"bookAsin\"\n          name=\"knownAs\"\n        />\n      </div>\n\n      <div class=\"form-group ml-1\">\n        <label for=\"country\"><i class=\"fa fa-flag\"></i></label>\n        <select\n          class=\"form-control ml-1\"\n          style=\"width: 100px\"\n          [(ngModel)]=\"country\"\n          id=\"country\"\n          name=\"country\"\n        >\n          <option *ngFor=\"let country of countryList\" [value]=\"country.value\">\n            {{ country.display }}\n          </option>\n        </select>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-info\" style=\"margin-left:10px\">\n        <i class=\"fa fa-search-minus\"></i>\n      </button>\n      <button title=\"delete all\" type=\"button\" (click)=\"deleteAll()\" class=\"btn btn-danger\" style=\"margin-left:10px\">\n        <i class=\"fa fa-trash\"></i>\n      </button>\n      <span class=\"ml-2\">Total Reviews: {{ pagination.totalItems }}</span>\n    </form>\n  </div>\n  <br />\n  <div class=\"row\">\n    <table class=\"table\">\n      <tr>\n        <th style=\"width: 15%\">Pen Name</th>\n        <th style=\"width: 50%\">Review Title</th>\n        <th style=\"width: 10%\">Date</th>\n        <th style=\"width: 10%\">Book Asin</th>\n        <th style=\"width: 5%\">Country</th>\n        <th style=\"width: 10%\">Reviewer</th>\n      </tr>\n      <tr *ngFor=\"let review of reviews\">\n        <td>{{ review.penName }}</td>\n        <td>{{ review.reviewTitle }}</td>\n        <td>{{ review.reviewDate | date: \"mediumDate\" }}</td>\n        <td>{{ review.bookAsin }}</td>\n        <td>{{ review.country | uppercase }}</td>\n        <td>{{ review.reviewer.knownAs }}</td>\n      </tr>\n    </table>\n  </div>\n</div>\n\n<div class=\"d-flex justify-content-center\">\n  <pagination\n    [boundaryLinks]=\"true\"\n    [totalItems]=\"pagination.totalItems\"\n    [(ngModel)]=\"pagination.currentPage\"\n    [itemsPerPage]=\"pagination.itemsPerPage\"\n    (pageChanged)=\"pageChanged($event)\"\n    previousText=\"&lsaquo;\"\n    nextText=\"&rsaquo;\"\n    firstText=\"&laquo;\"\n    lastText=\"&raquo;\"\n    [maxSize]=\"5\"\n    [rotate]=\"false\"\n  ></pagination>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/roles-modal/roles-modal.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/roles-modal/roles-modal.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title pull-left\">Edit roles for {{user.userName}}</h4>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form #rolesForm=\"ngForm\" id=\"rolesForm\">\r\n    <div class=\"form-check\" *ngFor=\"let role of roles\">\r\n      <input type=\"checkbox\"\r\n      id=\"{{role.name}}\"\r\n      value=\"{{role.name}}\"\r\n      [checked]=\"role.checked\"\r\n      (change)=\"role.checked = !role.checked\"\r\n      [disabled]=\"role.name === 'Admin' && user.userName === 'Admin'\"\r\n      class=\"form-check-input\"\r\n      >\r\n      <label for=\"{{role.name}}\">{{role.name}}</label>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">Cancel</button>\r\n  <button type=\"button\" class=\"btn btn-success\" (click)=\"updateRoles()\" form=\"rolesForm\">Submit</button>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/session-management/session-management.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/session-management/session-management.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"addSession()\" novalidate>\n    <div class=\"form-group\">\n      <label for=\"dateFrom\">Date From</label>\n      <input autocomplete=\"off\" type=\"text\" class=\"form-control ml-1\" [(ngModel)]=\"startDate\"\n      bsDatepicker\n      [bsConfig]=\"bsConfig\"\n      style=\"width: 150px\" id=\"dateFrom\" name=\"startDate\">\n    </div>\n\n    <div class=\"form-group ml-1\">\n        <label for=\"dateTo\">Date To</label>\n        <input autocomplete=\"off\" type=\"text\" class=\"form-control ml-1\" [(ngModel)]=\"endDate\"\n        bsDatepicker\n        [bsConfig]=\"bsConfig\"\n        style=\"width: 150px\" id=\"dateTo\" name=\"endDate\">\n      </div>\n\n    <div class=\"form-group ml-1\">\n      <label for=\"name\">Session Name</label>\n      <input type=\"text\" class=\"form-control ml-1\" style=\"width: 150px\" [(ngModel)]=\"name\" id=\"name\" name=\"name\">\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-outline-primary\" style=\"margin-left:10px\"><i class=\"fa fa-plus-square\"></i></button>\n  </form>\n  <br>\n  <div class=\"row\">\n    <table class=\"table\">\n      <tr>\n        <th style=\"width: 10%\">ID</th>\n        <th style=\"width: 15%\">Session Name</th>\n        <th style=\"width: 15%\">Start Date</th>\n        <th style=\"width: 15%\">End Date</th>\n        <th style=\"width: 15%\">Created By</th>\n        <th style=\"width: 15%\">Created On</th>\n        <th style=\"width: 15%\">Action</th>\n      </tr>\n      <tr *ngFor=\"let session of sessions\">\n        <td>{{session.id}}</td>\n        <td>{{session.name}}</td>\n        <td>{{session.startDate|date:'mediumDate'}}</td>\n        <td>{{session.endDate|date:'mediumDate'}}</td>\n        <td>{{session.createdBy}}</td>\n        <td>{{session.createdOn|date:'mediumDate'}}</td>\n        <td>\n          <button class=\"btn btn-outline-info\" (click)=\"editSessionModal(session)\"><i class=\"fa fa-edit\"></i></button>\n          <button class=\"btn btn-outline-danger ml-2\" (click)=\"deleteSession(session.id)\"><i class=\"fa fa-trash\" ></i></button>\n        </td>\n      </tr>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/session-modal/session-modal.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/session-modal/session-modal.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Edit {{session.name}}</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form #rolesForm=\"ngForm\" id=\"sessionForm\">\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control ml-1\" [(ngModel)]=\"session.name\"\n      placeholder=\"Session Name\"\n      name=\"sessionName\">\n    </div>\n    <div class=\"form-group\">\n      <input autocomplete=\"off\" type=\"text\" class=\"form-control ml-1\" [(ngModel)]=\"session.startDate\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            name=\"dateFrom\">\n    </div>\n    <div class=\"form-group\">\n      <input autocomplete=\"off\" type=\"text\" class=\"form-control ml-1\" [(ngModel)]=\"session.endDate\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            name=\"dateTo\">\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">Cancel</button>\n  <button type=\"button\" class=\"btn btn-success\" (click)=\"update()\" form=\"sessionForm\">Submit</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/user-management/user-management.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/user-management/user-management.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <table class=\"table\">\r\n    <tr>\r\n      <th style=\"width: 10%\">User ID</th>\r\n      <th style=\"width: 30%\">User Name</th>\r\n      <th style=\"width: 40%\">Active roles</th>\r\n      <th style=\"width: 20%\">Action</th>\r\n    </tr>\r\n    <tr *ngFor=\"let user of users\">\r\n      <td>{{user.id}}</td>\r\n      <td>{{user.userName}}</td>\r\n      <td>{{user.roles}}</td>\r\n      <td>\r\n        <button class=\"btn btn-outline-info\" (click)=\"editRoleModal(user)\"><i class=\"fa fa-edit\"></i></button>\r\n        <button class=\"btn btn-outline-danger ml-2\" (click)=\"deleteUser(user.id)\"><i class=\"fa fa-trash\"></i></button>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-nav></app-nav>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/assignment/add-assignment/add-assignment.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/assignment/add-assignment/add-assignment.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-6\">\n      <h2 class=\"text-center mt-3\">Add Assignment</h2>\n      <div class=\"form-group text-center\">\n        <label class=\"radio-inline\">\n          <input\n            class=\"mr-3\"\n            type=\"radio\"\n            value=\"us\"\n            name=\"Country\"\n            [(ngModel)]=\"assignment.country\"\n          />US\n        </label>\n        <label class=\"radio-inline ml-3\">\n          <input\n            class=\"mr-3\"\n            type=\"radio\"\n            value=\"uk\"\n            name=\"Country\"\n            [(ngModel)]=\"assignment.country\"\n          />UK\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          [(ngModel)]=\"assignment.bookAsin\"\n          name=\"bookAsin\"\n          placeholder=\"Book Asin\"\n        />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"assignedDate\" class=\"pl-1\">Assigned Date</label>\n        <input\n          autocomplete=\"off\"\n          type=\"text\"\n          class=\"form-control ml-1 text-primary\"\n          [(ngModel)]=\"todayDate\"\n          bsDatepicker\n          [bsConfig]=\"bsConfig\"\n          id=\"assignedDate\"\n          disabled\n          name=\"assignedDate\"\n        />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"startingRating\" class=\"pl-1\">Starting Rating</label>\n        <input\n          type=\"number\"\n          class=\"form-control\"\n          [(ngModel)]=\"assignment.startingRating\"\n          id=\"startingRating\"\n          name=\"startingRating\"\n        />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"totalCodes\" class=\"pl-1\">Total Code</label>\n        <input\n          type=\"number\"\n          class=\"form-control\"\n          [(ngModel)]=\"assignment.totalCodes\"\n          id=\"totalCodes\"\n          name=\"totalCodes\"\n        />\n      </div>\n      <div class=\"form-group text-center\">\n        <button class=\"btn btn-primary\" type=\"button\" (click)=\"AddAssignment()\">\n          Submit\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/assignment/assignment-list/assignment-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/assignment/assignment-list/assignment-list.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12 text-center mt-3\">\n    <h2>\n      {{ pagination.totalItems }} assignments found\n      <span *ngIf=\"user\">for {{ user.knownAs }} </span>\n      <span>\n        <a\n          [routerLink]=\"['/assignments/add']\"\n          title=\"add assignments\"\n          routerLinkActive=\"router-link-active\"\n          class=\"btn btn-primary roudedBtn\"\n        >\n          <i class=\"fa fa-plus-square\"></i>\n        </a>\n      </span>\n      <span class=\"text-small ml-3\"> Total codes: {{ this.totalCodes }} </span>\n    </h2>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <form\n      class=\"form-inline\"\n      #form=\"ngForm\"\n      (ngSubmit)=\"loadAssignments()\"\n      novalidate\n    >\n      <div class=\"form-group\">\n        <label for=\"dateFrom\"><i class=\"fa fa-hourglass-start px-1\"></i></label>\n        <input\n          autocomplete=\"off\"\n          type=\"text\"\n          class=\"form-control ml-1\"\n          [(ngModel)]=\"dateFrom\"\n          bsDatepicker\n          [bsConfig]=\"bsConfig\"\n          style=\"width: 150px\"\n          id=\"dateFrom\"\n          name=\"dateFrom\"\n        />\n      </div>\n\n      <div class=\"form-group ml-1\">\n        <label for=\"dateTo\"><i class=\"fa fa-hourglass-end px-1\"></i></label>\n        <input\n          autocomplete=\"off\"\n          type=\"text\"\n          class=\"form-control ml-1\"\n          [(ngModel)]=\"dateTo\"\n          bsDatepicker\n          [bsConfig]=\"bsConfig\"\n          style=\"width: 150px\"\n          id=\"dateTo\"\n          name=\"dateTo\"\n        />\n      </div>\n\n      <div class=\"form-group ml-1\">\n        <label for=\"country\"><i class=\"fa fa-flag px-1\"></i></label>\n        <select\n          class=\"form-control ml-1\"\n          style=\"width: 100px\"\n          [(ngModel)]=\"country\"\n          id=\"country\"\n          name=\"country\"\n        >\n          <option *ngFor=\"let country of countryList\" [value]=\"country.value\">\n            {{ country.display }}\n          </option>\n        </select>\n      </div>\n\n      <div class=\"form-group ml-1\">\n        <label for=\"isComplete\"><i class=\"fa fa-check-square px-1\"></i></label>\n        <select\n          class=\"form-control ml-1\"\n          style=\"width: 150px\"\n          [(ngModel)]=\"isCompleted\"\n          id=\"isComplete\"\n          name=\"isComplete\"\n        >\n          <option *ngFor=\"let item of completeList\" [value]=\"item.value\">\n            {{ item.display }}\n          </option>\n        </select>\n      </div>\n\n      <div class=\"form-group ml-1\">\n        <label for=\"bookAsin\"><i class=\"fa fa-list-ol px-1\"></i></label>\n        <input\n          type=\"text\"\n          class=\"form-control ml-1\"\n          style=\"width: 150px\"\n          [(ngModel)]=\"bookAsin\"\n          placeholder=\"Book Asin\"\n          id=\"bookAsin\"\n          name=\"bookAsin\"\n        />\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-info\" style=\"margin-left:10px\">\n        <i class=\"fa fa-search-minus\"></i>\n      </button>\n    </form>\n  </div>\n  <br />\n  <div class=\"row\">\n    <table class=\"table\">\n      <tr>\n        <th style=\"width: 5%\">SL</th>\n        <th style=\"width: 15%\">Assigned Date</th>\n        <th style=\"width: 15%\">Book Asin</th>\n        <th style=\"width: 10%\">Country</th>\n        <th style=\"width: 10%\">Total Code</th>\n        <th style=\"width: 15%\">Starting Rating</th>\n        <th style=\"width: 15%\">Last Modified On</th>\n        <th style=\"width: 15%\">Action</th>\n      </tr>\n      <tr *ngFor=\"let assignment of assignments; index as i\">\n        <td>{{ i + 1 }}</td>\n        <td>{{ assignment.assignedDate | date: \"mediumDate\" }}</td>\n        <td>{{ assignment.bookAsin }}</td>\n        <td>{{ assignment.country | uppercase }}</td>\n        <td>{{ assignment.totalCodes }}</td>\n        <td>{{ assignment.startingRating }}</td>\n        <td>{{ assignment.lastModifiedOn | date: \"shortTime\" }}</td>\n        <td>\n          <button\n            *ngIf=\"!assignment.isCompleted\"\n            class=\"btn  btn-outline-info\"\n            (click)=\"editAssignmentModal(assignment)\"\n            title=\"edit\"\n          >\n            <i class=\"fa fa-edit\"></i>\n          </button>\n          <button\n            *ngIf=\"!assignment.isCompleted\"\n            class=\"btn  btn-outline-success ml-1\"\n            (click)=\"markAsComplete(assignment.id)\"\n            title=\"mark as complete\"\n          >\n            <i class=\"fa fa-check-circle\"></i>\n          </button>\n          <button\n            class=\"btn  btn-outline-danger ml-1\"\n            (click)=\"deleteAssignment(assignment.id)\"\n            title=\"delete\"\n          >\n            <i class=\"fa fa-trash\"></i>\n          </button>\n        </td>\n      </tr>\n    </table>\n  </div>\n</div>\n\n<div class=\"d-flex justify-content-center\">\n  <pagination\n    [boundaryLinks]=\"true\"\n    [totalItems]=\"pagination.totalItems\"\n    [(ngModel)]=\"pagination.currentPage\"\n    [itemsPerPage]=\"pagination.itemsPerPage\"\n    (pageChanged)=\"pageChanged($event)\"\n    previousText=\"&lsaquo;\"\n    nextText=\"&rsaquo;\"\n    firstText=\"&laquo;\"\n    lastText=\"&raquo;\"\n    [maxSize]=\"5\"\n    [rotate]=\"false\"\n  ></pagination>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/assignment/assignment-modal/assignment-modal.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/assignment/assignment-modal/assignment-modal.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Edit Assignment</h4>\n  <button\n    type=\"button\"\n    class=\"close pull-right\"\n    aria-label=\"Close\"\n    (click)=\"bsModalRef.hide()\"\n  >\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form #rolesForm=\"ngForm\" id=\"assignmentForm\">\n    <div class=\"form-group text-center\">\n      <label class=\"radio-inline\">\n        <input\n          class=\"mr-3\"\n          type=\"radio\"\n          value=\"us\"\n          name=\"Country\"\n          [(ngModel)]=\"assignment.country\"\n        />US\n      </label>\n      <label class=\"radio-inline ml-3\">\n        <input\n          class=\"mr-3\"\n          type=\"radio\"\n          value=\"uk\"\n          name=\"Country\"\n          [(ngModel)]=\"assignment.country\"\n        />UK\n      </label>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"bookAsin\" class=\"pl-1\">Book Asin</label>\n      <input\n        type=\"text\"\n        class=\"form-control ml-1\"\n        [(ngModel)]=\"assignment.bookAsin\"\n        placeholder=\"Book Asin\"\n        name=\"bookAsin\"\n      />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"startingRating\" class=\"pl-1\">Starting Rating</label>\n      <input\n        type=\"number\"\n        class=\"form-control ml-1\"\n        [(ngModel)]=\"assignment.startingRating\"\n        name=\"startingRating\"\n      />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"totalCodes\" class=\"pl-1\">Total Codes</label>\n      <input\n        type=\"number\"\n        class=\"form-control ml-1\"\n        [(ngModel)]=\"assignment.totalCodes\"\n        name=\"totalCodes\"\n      />\n    </div>\n  </form>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">\n    Cancel\n  </button>\n  <button\n    type=\"button\"\n    class=\"btn btn-success\"\n    (click)=\"update()\"\n    form=\"sessionForm\"\n  >\n    Submit\n  </button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/change-password/change-password.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/change-password/change-password.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"passwordChangeForm\" (ngSubmit)=\"changePassword()\">\n  <div class=\"row justify-content-center mt-5\">\n    <div class=\"col-4\">\n      <h2 class=\"text-center\">Change Password</h2>\n      <div class=\"form-group\">\n        <input\n          [ngClass]=\"{\n            'is-invalid':\n              passwordChangeForm.get('oldPassword').errors &&\n              passwordChangeForm.get('oldPassword').touched\n          }\"\n          type=\"password\"\n          class=\"form-control\"\n          formControlName=\"oldPassword\"\n          placeholder=\"Old Password\"\n        />\n        <div\n          class=\"invalid-feedback\"\n          *ngIf=\"\n            passwordChangeForm.get('oldPassword').hasError('required') &&\n            passwordChangeForm.get('oldPassword').touched\n          \"\n        >\n          Password is required\n        </div>\n        <div\n          class=\"invalid-feedback\"\n          *ngIf=\"\n            passwordChangeForm.get('oldPassword').hasError('minlength') &&\n            passwordChangeForm.get('oldPassword').touched\n          \"\n        >\n          Old password must be at least 4 characters\n        </div>\n        <div\n          class=\"invalid-feedback\"\n          *ngIf=\"\n            passwordChangeForm.get('oldPassword').hasError('maxlength') &&\n            passwordChangeForm.get('oldPassword').touched\n          \"\n        >\n          Old password can't exceed 8 characters\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <input\n          [ngClass]=\"{\n            'is-invalid':\n              passwordChangeForm.get('newPassword').errors &&\n              passwordChangeForm.get('newPassword').touched\n          }\"\n          type=\"password\"\n          class=\"form-control\"\n          formControlName=\"newPassword\"\n          placeholder=\"New Password\"\n        />\n        <div\n          class=\"invalid-feedback\"\n          *ngIf=\"\n            passwordChangeForm.get('newPassword').hasError('required') &&\n            passwordChangeForm.get('newPassword').touched\n          \"\n        >\n          New password is required\n        </div>\n        <div\n          class=\"invalid-feedback\"\n          *ngIf=\"\n            passwordChangeForm.get('newPassword').hasError('minlength') &&\n            passwordChangeForm.get('newPassword').touched\n          \"\n        >\n          New password must be at least 4 characters\n        </div>\n        <div\n          class=\"invalid-feedback\"\n          *ngIf=\"\n            passwordChangeForm.get('newPassword').hasError('maxlength') &&\n            passwordChangeForm.get('newPassword').touched\n          \"\n        >\n          New password can't exceed 8 characters\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <input\n          [ngClass]=\"{\n            'is-invalid':\n              (passwordChangeForm.get('confirmPassword').errors &&\n                passwordChangeForm.get('confirmPassword').touched) ||\n              (passwordChangeForm.get('confirmPassword').touched &&\n                passwordChangeForm.hasError('mismatch'))\n          }\"\n          type=\"password\"\n          class=\"form-control\"\n          formControlName=\"confirmPassword\"\n          placeholder=\"Confirm password\"\n        />\n        <div\n          class=\"invalid-feedback\"\n          *ngIf=\"\n            passwordChangeForm.get('confirmPassword').hasError('required') &&\n            passwordChangeForm.get('confirmPassword').touched\n          \"\n        >\n          Confirmation is required\n        </div>\n        <div\n          class=\"invalid-feedback\"\n          *ngIf=\"\n            passwordChangeForm.hasError('mismatch') &&\n            passwordChangeForm.get('confirmPassword').touched\n          \"\n        >\n          Passwords don't match\n        </div>\n      </div>\n      <div class=\"form-group text-center\">\n        <button\n          class=\"btn btn-success\"\n          [disabled]=\"!passwordChangeForm.valid\"\n          type=\"submit\"\n        >\n          Submit\n        </button>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center\">\n  <h3 class=\"mt-1\">Dashboard</h3>\n</div>\n<div class=\"container\">\n  <tabset class=\"member-tabset\">\n    <tab heading=\"Reviews\">\n      <app-review-audit></app-review-audit>\n    </tab>\n    <tab heading=\"Assignments\">\n      <app-assignment-audit></app-assignment-audit>\n    </tab>\n  </tabset>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/fetch-review/fetch-review.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/fetch-review/fetch-review.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <tabset class=\"member-tabset\">\n    <tab heading=\"Normal Task\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-6\">\n          <h2 class=\"text-center mt-3\">Add Normal Task Reviews</h2>\n          <div class=\"form-group text-center\">\n            <label class=\"radio-inline\">\n              <input\n                class=\"mr-3\"\n                type=\"radio\"\n                value=\"us\"\n                name=\"normalCountry\"\n                [(ngModel)]=\"normalTask.country\"\n              />US\n            </label>\n            <label class=\"radio-inline ml-3\">\n              <input\n                class=\"mr-3\"\n                type=\"radio\"\n                value=\"uk\"\n                name=\"normalCountry\"\n                [(ngModel)]=\"normalTask.country\"\n              />UK\n            </label>\n          </div>\n          <div class=\"form-group\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              [(ngModel)]=\"normalTask.bookAsin\"\n              name=\"bookAsin\"\n              placeholder=\"Book Asin\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <input autocomplete=\"off\" type=\"text\" class=\"form-control ml-1\"\n            [(ngModel)]=\"normalTask.minimumDate\"\n            bsDatepicker\n            [bsConfig]=\"bsConfig\"\n            id=\"minimumDate\" name=\"minimumDate\">\n          </div>\n          <div class=\"form-group text-center\">\n            <button\n              class=\"btn btn-primary\"\n              type=\"button\"\n              (click)=\"AddNormalReviews()\"\n            >\n              Submit\n            </button>\n          </div>\n        </div>\n      </div>\n    </tab>\n    <tab heading=\"Daily Task\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-6\">\n          <h2 class=\"text-center mt-3\">Add Daily Task Reviews</h2>\n          <div class=\"form-group text-center\">\n            <label class=\"radio-inline\">\n              <input\n                class=\"mr-3\"\n                type=\"radio\"\n                value=\"us\"\n                name=\"country\"\n                [(ngModel)]=\"country\"\n              />US\n            </label>\n            <label class=\"radio-inline ml-3\">\n              <input\n                class=\"mr-3\"\n                type=\"radio\"\n                value=\"uk\"\n                name=\"country\"\n                [(ngModel)]=\"country\"\n              />UK\n            </label>\n          </div>\n          <div class=\"form-group\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              [(ngModel)]=\"bookAsin\"\n              name=\"bookAsin\"\n              placeholder=\"Book Asin\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <input\n              accept=\".xlsx\"\n              type=\"file\"\n              (change)=\"handleFileInput($event.target.files)\"\n              class=\"form-control\"\n            />\n          </div>\n          <div class=\"form-group text-center\">\n            <button\n              class=\"btn btn-primary\"\n              type=\"button\"\n              (click)=\"AddReviews()\"\n            >\n              Submit\n            </button>\n          </div>\n        </div>\n      </div>\n    </tab>\n  </tabset>\n</div>\n<ngx-spinner></ngx-spinner>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-1\">\r\n  <h3 class=\"text-center text-bold text-info\">Icons used for Labels</h3>\r\n  <div class=\"row\">\r\n    <div class=\"col-6 text-center\">\r\n      <h4>\r\n        <i class=\"fa fa-search-minus\"></i\r\n        ><span class=\"label-icon\"> Apply Filter</span>\r\n      </h4>\r\n      <h4>\r\n        <i class=\"fa fa-minus-circle\"></i\r\n        ><span class=\"label-icon\"> Reset Filter</span>\r\n      </h4>\r\n      <h4>\r\n        <i class=\"fa fa-bolt\"></i><span class=\"label-icon\"> Last Active</span>\r\n      </h4>\r\n      <h4>\r\n        <i class=\"fa fa-id-badge\"></i><span class=\"label-icon\"> Newest</span>\r\n      </h4>\r\n      <h4>\r\n        <i class=\"fa fa-plus-square\"></i\r\n        ><span class=\"label-icon\"> Add Something to Collection</span>\r\n      </h4>\r\n      <h4>\r\n        <i class=\"fa fa-hourglass-start\"></i\r\n        ><span class=\"label-icon\"> Date From</span>\r\n      </h4>\r\n      <h4>\r\n        <i class=\"fa fa-hourglass-end\"></i\r\n        ><span class=\"label-icon\"> Date To</span>\r\n      </h4>\r\n      <h4>\r\n        <i class=\"fa fa-flag\"></i><span class=\"label-icon\"> Country</span>\r\n      </h4>\r\n      <h4>\r\n        <i class=\"fa fa-list-ol\"></i><span class=\"label-icon\"> Book Asin</span>\r\n      </h4>\r\n      <h4>\r\n        <i class=\"fa fa-address-book\"></i\r\n        ><span class=\"label-icon\"> Pen Name</span>\r\n      </h4>\r\n    </div>\r\n    <div class=\"col-6 text-center\">\r\n      <h4>\r\n        <i class=\"fa fa-trash\"></i><span class=\"label-icon\"> Delete</span>\r\n      </h4>\r\n      <h4>\r\n        <i class=\"fa fa-check-square\"></i\r\n        ><span class=\"label-icon\"> Status</span>\r\n      </h4>\r\n      <h4><i class=\"fa fa-edit\"></i><span class=\"label-icon\"> Edit</span></h4>\r\n      <h4>\r\n        <i class=\"fa fa-check-circle\"></i\r\n        ><span class=\"label-icon\"> Mark as Complete</span>\r\n      </h4>\r\n      <h4>\r\n        <i class=\"fa fa-history\"></i><span class=\"label-icon\"> Assignment</span>\r\n      </h4>\r\n      <h4>\r\n        <i class=\"fa fa-amazon\"></i><span class=\"label-icon\"> Review</span>\r\n      </h4>\r\n      <h4><i class=\"fa fa-user\"></i><span class=\"label-icon\"> Member</span></h4>\r\n      <h4>\r\n        <i class=\"fa fa-calendar\"></i><span class=\"label-icon\"> Session</span>\r\n      </h4>\r\n      <h4>\r\n        <i class=\"fa fa-envelope\"></i><span class=\"label-icon\"> Message</span>\r\n      </h4>\r\n      <h4>\r\n        <i class=\"fa fa-times\"></i><span class=\"label-icon\"> Close</span>\r\n      </h4>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/members/member-card/member-card.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/members/member-card/member-card.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-4\">\r\n  <div class=\"card-img-wrapper\">\r\n    <img [src]=\"user.photoUrl || '../../../assets/user.png'\" [alt]=\"user.knownAs\" class=\"card-img-top\" />\r\n    <ul class=\"list-inline member-icons animate text-center\">\r\n      <li class=\"list-inline-item\">\r\n        <button [routerLink]=\"['/assignments', user.id]\"  *appHasRole=\"['Admin','Moderator']\" title=\"assignments\" class=\"btn btn-outline-primary\">\r\n          <i class=\"fa fa-history\"></i>\r\n        </button>\r\n      </li>\r\n      <li class=\"list-inline-item\" *appHasRole=\"['Admin','Moderator']\">\r\n        <button [routerLink]=\"['/reviews',user.id]\" title=\"reviews\" routerLinkActive=\"router-link-active\"  class=\"btn btn-outline-primary\">\r\n          <i class=\"fa fa-amazon\" ></i>\r\n        </button>\r\n      </li>\r\n      <li class=\"list-inline-item\">\r\n        <button class=\"btn btn-outline-primary\" title=\"message\" [routerLink]=\"['/members', user.id]\" [queryParams]=\"{tab: 2}\"><i class=\"fa fa-envelope\"></i></button>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"card-body p-1\">\r\n    <h6 class=\"card-title mb-1 text-center btn\" [routerLink]=\"['/members', user.id]\" routerLinkActive=\"router-link-active\" >\r\n      <i class=\"fa fa-user\"></i> {{ user.knownAs }}, {{ user.age }}\r\n    </h6>\r\n    <p class=\"card-text text-muted text-center\">{{ user.city }}</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/members/member-detail/member-detail.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/members/member-detail/member-detail.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\r\n  <div class=\"row ml-1\">\r\n    <h2>{{user.knownAs}}'s Profile</h2>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"card\">\r\n        <img src=\"{{user.photoUrl|| '../../../assets/user.png'}}\" alt=\"{{user.knownAs}}\" class=\"card-img-top img-thumbnail\">\r\n        <div class=\"card-body\">\r\n          <div>\r\n            <strong>Location:</strong>\r\n            <p>{{user.city}}, {{user.country}}</p>\r\n          </div>\r\n          <div>\r\n            <strong>Age:</strong>\r\n            <p>{{user.age}}</p>\r\n          </div>\r\n          <div>\r\n            <strong>Last active:</strong>\r\n            <p>{{user.lastActive|timeAgo}}</p>\r\n          </div>\r\n          <div>\r\n            <strong>Member since:</strong>\r\n            <p>{{user.created | date:'mediumDate'}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\" *appHasRole=\"['Admin']\">\r\n          <div class=\"btn-group d-flex\" >\r\n            <button class=\"btn btn-primary w-100\" [routerLink]=\"['/reviews',user.id]\" title=\"reviews\"><i class=\"fa fa-amazon\"></i></button>\r\n            <button class=\"btn btn-success w-100\"[routerLink]=\"['/assignments',user.id]\" title=\"assignments\"><i class=\"fa fa-history\"></i></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n      <div class=\"tab-panel\">\r\n        <tabset class=\"member-tabset bg-dark\" #memberTabs>\r\n          <tab heading=\"About {{user.knownAs}}\">\r\n            <h4>Description</h4>\r\n            <p>{{user.introduction}}</p>\r\n            <h4>Looking for</h4>\r\n            <p>{{user.lookingFor}}</p>\r\n          </tab>\r\n          <tab heading=\"Photos\">\r\n            <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\r\n          </tab>\r\n          <tab heading=\"Messages\">\r\n            <app-member-messages [recipientId]=\"user.id\"></app-member-messages>\r\n          </tab>\r\n        </tabset>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/members/member-edit/member-edit.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/members/member-edit/member-edit.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <h2>Your Profile</h2>\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n      <div *ngIf=\"editForm.dirty\" class=\"alert alert-info\">\r\n        <strong>Information:</strong>You have made changes. Any unsaved changes will be lost!\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"card\">\r\n        <img src=\"{{photoUrl|| '../../../assets/user.png'}}\" alt=\"{{user.knownAs}}\" class=\"card-img-top img-thumbnail\">\r\n        <div class=\"card-body\">\r\n          <div>\r\n            <strong>Location:</strong>\r\n            <p>{{user.city}}, {{user.country}}</p>\r\n          </div>\r\n          <div>\r\n            <strong>Age:</strong>\r\n            <p>{{user.age}}</p>\r\n          </div>\r\n          <div>\r\n            <strong>Last active:</strong>\r\n            <p>{{user.lastActive|timeAgo}}</p>\r\n          </div>\r\n          <div>\r\n            <strong>Member since:</strong>\r\n            <p>{{user.created| date:'mediumDate'}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <div class=\"btn-group d-flex\">\r\n            <button [disabled]=\"!editForm.dirty\" form=\"editForm\" class=\"btn btn-success btn-block\">Save changes</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n      <div class=\"tab-panel\">\r\n        <tabset class=\"member-tabset\">\r\n          <tab heading=\"Edit Profile\">\r\n            <form #editForm=\"ngForm\" id=\"editForm\" (ngSubmit)=\"updateUser()\">\r\n                <h4>Description</h4>\r\n                <textarea name=\"introduction\" class=\"form-control\" rows=\"6\" [(ngModel)]=\"user.introduction\"></textarea>\r\n                <h4>Looking for</h4>\r\n                <textarea name=\"lookingFor\" class=\"form-control\" rows=\"6\" [(ngModel)]=\"user.lookingFor\"></textarea>\r\n                <div class=\"form-inline mt-4\">\r\n                  <label for=\"city\" class=\"mr-1\">City </label>\r\n                  <input type=\"text\" name=\"city\" class=\"form-control\" [(ngModel)]=\"user.city\">\r\n                  <label for=\"country\"  class=\"ml-1 mr-1\">Country </label>\r\n                  <input type=\"text\" name=\"country\" class=\"form-control\" [(ngModel)]=\"user.country\">\r\n                </div>\r\n            </form>\r\n          </tab>\r\n          <tab heading=\"Photos\">\r\n            <app-photo-editor [photos]=\"user.photos\"(memberMainPhotoChange)=\"mainPhotoChange($event)\" ></app-photo-editor>\r\n          </tab>\r\n        </tabset>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/members/member-list/member-list.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/members/member-list/member-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center mt-3\">\r\n  <h2>{{pagination.totalItems}} members found</h2>\r\n</div>\r\n\r\n<div class=\"container mt-3\">\r\n    <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"loadUsers()\" novalidate>\r\n        <div class=\"form-group\">\r\n          <label for=\"minAge\">Age From</label>\r\n          <input type=\"number\" class=\"form-control ml-1\" [(ngModel)]=\"userParams.minAge\" style=\"width: 70px\" id=\"minAge\" name=\"minAge\">\r\n        </div>\r\n\r\n        <div class=\"form-group px-2\">\r\n          <label for=\"maxAge\">To</label>\r\n          <input type=\"number\" class=\"form-control ml-1\" [(ngModel)]=\"userParams.maxAge\" style=\"width: 70px\" id=\"maxAge\" name=\"maxAge\">\r\n        </div>\r\n\r\n        <div class=\"form-group px-2\">\r\n          <label for=\"gender\">Show: </label>\r\n          <select class=\"form-control ml-1\" style=\"width: 110px\" [(ngModel)]=\"userParams.gender\" id=\"gender\" name=\"gender\">\r\n            <option *ngFor=\"let gender of genderList\" [value]=\"gender.value\">\r\n              {{gender.display}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"minAge\">Name</label>\r\n          <input type=\"text\" class=\"form-control ml-1\" style=\"width: 120px\" [(ngModel)]=\"userParams.knownAs\" id=\"knownAs\" name=\"knownAs\">\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-info\" title=\"apply filters\" style=\"margin-left:10px\"><i class=\"fa fa-search-minus\"></i></button>\r\n        <button type=\"button\" class=\"btn btn-default\" title=\"reset filters\" (click)=\"resetFilters()\" style=\"margin-left:10px\"><i class=\"fa fa-minus-circle\"></i></button>\r\n\r\n        <div class=\"col\">\r\n            <div class=\"btn-group float-right\">\r\n              <button type=\"button\" name=\"orderBy\" class=\"btn btn-primary\" (click)=\"loadUsers()\"\r\n              [(ngModel)]=\"userParams.orderBy\" btnRadio=\"lastActive\" title=\"last active\"><i class=\"fa fa-bolt\"></i></button>\r\n              <button type=\"button\" name=\"orderBy\" class=\"btn btn-primary\" (click)=\"loadUsers()\"\r\n              [(ngModel)]=\"userParams.orderBy\" btnRadio=\"created\" title=\"newest\"><i class=\"fa fa-id-badge\"></i></button>\r\n            </div>\r\n          </div>\r\n\r\n      </form>\r\n      <br>\r\n\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let user of users\" class=\"col-lg-2 col-md-3 col-sm-6\">\r\n      <app-member-card [user]=\"user\"></app-member-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"d-flex justify-content-center\">\r\n  <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\"\r\n  [(ngModel)]=\"pagination.currentPage\" [itemsPerPage]=\"pagination.itemsPerPage\"\r\n  (pageChanged)=\"pageChanged($event)\"\r\n  previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\"\r\n  [maxSize]=\"5\" [rotate]=\"false\"></pagination>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/members/member-messages/member-messages.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/members/member-messages/member-messages.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-body\" #chatBox>\r\n    <div *ngIf=\"messages?.length === 0\">\r\n      <p>No messages yet</p>\r\n    </div>\r\n    <ul class=\"chat\" >\r\n      <li *ngFor=\"let message of messages\">\r\n        <!-- to them -->\r\n        <div *ngIf=\"message.senderId == recipientId\">\r\n          <span class=\"chat-img float-left\">\r\n            <img\r\n              src=\"{{ message.senderPhotoUrl|| '../../../../../assets/user.png' }}\"\r\n              alt=\"{{ message.senderKnownAs }}\"\r\n              class=\"rounded-circle mr-1\"\r\n            />\r\n          </span>\r\n          <div class=\"chat-body\">\r\n            <div class=\"header\">\r\n              <!-- <strong class=\"primary-font\">{{ message.senderKnownAs }}</strong> -->\r\n              <small class=\"text-muted\">\r\n                <span class=\"fa fa-clock-o\"> {{\r\n                  message.messageSent | timeAgo\r\n                }}</span>\r\n              </small>\r\n            </div>\r\n            <!-- <p>{{ message.content }}</p> -->\r\n            <pre>{{ message.content }}</pre>\r\n          </div>\r\n        </div>\r\n        <!-- to me -->\r\n        <div *ngIf=\"message.senderId != recipientId\" class=\"text-info\">\r\n          <span class=\"chat-img float-right\">\r\n            <img\r\n              src=\"{{ message.senderPhotoUrl || '../../../../../assets/user.png'}}\"\r\n              alt=\"{{ message.senderKnownAs }}\"\r\n              class=\"rounded-circle ml-1\"\r\n            />\r\n          </span>\r\n          <div class=\"chat-body \">\r\n            <div class=\"header text-right\">\r\n              <small class=\"text-muted \">\r\n                <span class=\"fa fa-clock-o \"> {{\r\n                  message.messageSent | timeAgo\r\n                }}</span>\r\n                <span *ngIf=\"message.isRead\" class=\"text-success\"\r\n                  >(read {{ message.dateRead | timeAgo }})</span\r\n                >\r\n              </small>\r\n              <!-- <strong class=\"primary-font float-right\">{{ message.senderKnownAs }}</strong> -->\r\n            </div>\r\n            <pre class=\"text-right\">{{ message.content }}</pre>\r\n          </div>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"card-footer\">\r\n    <form #messageForm=\"ngForm\" (ngSubmit)=\"messageForm.valid && sendMessage()\">\r\n      <div class=\"input-group\">\r\n        <textarea type=\"text\"\r\n        [(ngModel)]=\"newMessage.content\"\r\n        name=\"content\"\r\n        required\r\n        class=\"form-control input-sm\"\r\n        placeholder=\"Send private message\">\r\n        </textarea>\r\n        <div class=\"input-group-append\">\r\n          <button class=\"btn btn-primary\" [disabled]=\"!messageForm.valid\"><i class=\"fa fa-paper-plane\"></i></button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/members/photo-editor/photo-editor.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/members/photo-editor/photo-editor.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-sm-2\" *ngFor=\"let photo of photos\">\r\n    <img [src]=\"photo.url\" class=\"img-thumbnail p-1\" alt=\"\">\r\n    <div class=\"text-center\">\r\n      <button type=\"button\" class=\"btn btn-sm mr-1\"(click)=\"setMainPhoto(photo.id)\"\r\n      [disabled]=\"photo.isMain\"\r\n      [ngClass]=\"photo.isMain?'btn-success active':'btn-secondary'\"\r\n       >Main</button>\r\n      <button type=\"button\" class=\"btn btn-sm btn-danger\"\r\n      [disabled]=\"photo.isMain\"\r\n      (click)=\"deletePhoto(photo.id)\"\r\n      ><i class=\"fa fa-trash-o\"></i></button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row mt-3\">\r\n\r\n  <div class=\"col-md-3\">\r\n\r\n      <h3>Add photos</h3>\r\n\r\n      <div ng2FileDrop\r\n           [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\r\n           (fileOver)=\"fileOverBase($event)\"\r\n           [uploader]=\"uploader\"\r\n           class=\"card bg-faded p-3 text-center mb-3 my-drop-zone\">\r\n           <i class=\"fa fa-upload fa-3x\"></i>\r\n          Drop photos here\r\n      </div>\r\n      Multiple\r\n      <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple  /><br/>\r\n      Single\r\n      <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" />\r\n  </div>\r\n\r\n  <div class=\"col-md-9\" style=\"margin-bottom: 40px\" *ngIf=\"uploader?.queue?.length\">\r\n\r\n      <h3>Upload queue</h3>\r\n      <p>Queue length: {{ uploader?.queue?.length }}</p>\r\n\r\n      <table class=\"table\">\r\n          <thead>\r\n          <tr>\r\n              <th width=\"50%\">Name</th>\r\n              <th>Size</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let item of uploader.queue\">\r\n              <td><strong>{{ item?.file?.name }}</strong></td>\r\n              <td *ngIf=\"uploader.options.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\r\n          </tr>\r\n          </tbody>\r\n      </table>\r\n\r\n      <div>\r\n          <div>\r\n              Queue progress:\r\n              <div class=\"progress mb-4\">\r\n                  <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\r\n              </div>\r\n          </div>\r\n          <button type=\"button\" class=\"btn btn-success btn-s\"\r\n                  (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\r\n              <span class=\"fa fa-upload\"></span> Upload\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-warning btn-s\"\r\n                  (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\r\n              <span class=\"fa fa-ban\"></span> Cancel\r\n          </button>\r\n          <button type=\"button\" class=\"btn btn-danger btn-s\"\r\n                  (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\r\n              <span class=\"fa fa-trash\"></span> Remove\r\n          </button>\r\n      </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/messages/messages.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/messages/messages.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\r\n  <div class=\"row\">\r\n    <div class=\"btn-group \">\r\n      <button class=\"btn btn-primary py-0\" [(ngModel)]=\"messageContainer\" btnRadio=\"Unread\" (click)=\"loadMessages()\">\r\n        <i class=\"fa fa-envelope\"></i> Unread\r\n      </button>\r\n      <button class=\"btn btn-primary py-0\" [(ngModel)]=\"messageContainer\" btnRadio=\"Inbox\" (click)=\"loadMessages()\">\r\n        <i class=\"fa fa-envelope-open\"></i> Inbox\r\n      </button>\r\n      <button class=\"btn btn-primary py-0\" [(ngModel)]=\"messageContainer\" btnRadio=\"Outbox\" (click)=\"loadMessages()\">\r\n        <i class=\"fa fa-paper-plane\"></i> Outbox\r\n      </button>\r\n    </div>\r\n    <div class=\"ml-auto\" *appHasRole=\"['Admin']\">\r\n        <div class=\"form-group ml-1 form-inline\">\r\n            <label for=\"dateTo\"><i class=\"fa fa-hourglass-end px-1\"></i></label>\r\n            <input\r\n              autocomplete=\"off\"\r\n              type=\"text\"\r\n              class=\"form-control ml-1\"\r\n              [(ngModel)]=\"dateTo\"\r\n              bsDatepicker\r\n              [bsConfig]=\"bsConfig\"\r\n              style=\"width: 150px\"\r\n              id=\"dateTo\"\r\n              name=\"dateTo\"\r\n            />\r\n            <button (click)=\"deleteAllMessage()\" class=\"btn btn-outline-danger ml-1\">\r\n                <i class=\"fa fa-trash\"> </i> Delete Messages\r\n              </button>\r\n          </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"messages.length == 0\">\r\n    <h3 class=\"mt-2\">No new messages</h3>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"messages.length > 0\">\r\n    <table class=\"table table-hover\" style=\"cursor: pointer\">\r\n      <tr>\r\n        <th style=\"width: 40%\">Message</th>\r\n        <th style=\"width: 20%\">From / To</th>\r\n        <th style=\"width: 20%\">Sent / Received</th>\r\n        <th style=\"width: 20%\"></th>\r\n      </tr>\r\n      <tr *ngFor=\"let message of messages\" [routerLink]=\"['/members',\r\n        messageContainer == 'Outbox' ? message.recipientId : message.senderId]\" [queryParams]=\"{tab: 2}\">\r\n        <td><pre>{{message.content}}</pre></td>\r\n        <td>\r\n          <div *ngIf=\"messageContainer != 'Outbox'\">\r\n                <img src={{message?.senderPhotoUrl}} class=\"img-circle rounded-circle mr-1\">\r\n                <strong>{{message.senderKnownAs}}</strong>\r\n          </div>\r\n          <div *ngIf=\"messageContainer == 'Outbox'\">\r\n                <img src={{message?.recipientPhotoUrl}} class=\"img-circle rounded-circle mr-1\">\r\n                <strong>{{message.recipientKnownAs}}</strong>\r\n          </div>\r\n        </td>\r\n        <td>{{message.messageSent | timeAgo}}</td>\r\n        <td>\r\n          <button class=\"btn btn-outline-danger\" (click)=\"$event.stopPropagation()\" (click)=\"deleteMessage(message.id)\">\r\n            <i class=\"fa fa-trash\"></i>\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"d-flex justify-content-center\">\r\n    <pagination [boundaryLinks]=\"true\"\r\n                [totalItems]=\"pagination.totalItems\"\r\n                [itemsPerPage]=\"pagination.itemsPerPage\"\r\n                [(ngModel)]=\"pagination.currentPage\"\r\n                (pageChanged)=\"pageChanged($event)\"\r\n                [maxSize]=\"3\"\r\n              previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\r\n  </pagination>\r\n  </div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav/nav.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand text-warning\" [routerLink]=\"['']\" routerLinkActive=\"router-link-active\" >Audible Helper</a>\r\n    <button\r\n      class=\"navbar-toggler\"\r\n      type=\"button\"\r\n      data-toggle=\"collapse\"\r\n      data-target=\"#navbarCollapse\"\r\n      aria-controls=\"navbarCollapse\"\r\n      aria-expanded=\"false\"\r\n      aria-label=\"Toggle navigation\"\r\n    >\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <ul *ngIf=\"loggedIn()\" class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\" routerLinkActive=\"active\" *appHasRole=\"['Admin','Moderator']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\"  >Dashboard</a>\r\n      </li>\r\n      <li class=\"nav-item \" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/members']\">Members </a\r\n        >\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\" >\r\n        <a class=\"nav-link\" [routerLink]=\"['/reviews']\" >Reviews</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\" >\r\n        <a class=\"nav-link\" [routerLink]=\"['/assignments']\" >Assignments</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/messages']\"  >Messages <span *ngIf=\"unreadMessageCount !== 0\" class=\"badge badge-info\">{{unreadMessageCount}}</span></a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\" *appHasRole=\"['Admin','Moderator']\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/admin']\"  >Admin</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <div *ngIf=\"loggedIn()\" class=\"dropdown\" dropdown>\r\n      <span class=\"mr-1\">\r\n        <img [src]=\"photoUrl|| '../../assets/user.png'\" alt=\"\">\r\n      </span>\r\n      <a class=\"dropdown-toggle text-light\" dropdownToggle>\r\n        Welcome {{ authService.decodedToken?.unique_name | titlecase }}\r\n      </a>\r\n      <div class=\"dropdown-menu mt-3\" *dropdownMenu>\r\n        <a class=\"dropdown-item\" [routerLink]=\"['member/edit']\"\r\n          ><i class=\"fa fa-user\"></i> Edit Profile</a\r\n        >\r\n        <div class=\"dropdown-divider\"></div>\r\n        <a class=\"dropdown-item\" [routerLink]=\"['changePassword']\"\r\n          ><i class=\"fa fa-key\"></i> Change Password</a\r\n        >\r\n        <div class=\"dropdown-divider\"></div>\r\n        <a class=\"dropdown-item\" (click)=\"logout()\"\r\n          ><i class=\"fa fa-sign-out\"></i> Log out</a\r\n        >\r\n      </div>\r\n    </div>\r\n\r\n    <form\r\n      *ngIf=\"!loggedIn()\"\r\n      #loginForm=\"ngForm\"\r\n      class=\"form-inline mt-2 mt-md-0\"\r\n      (ngSubmit)=\"login()\"\r\n    >\r\n      <input\r\n        class=\"form-control mr-sm-2\"\r\n        type=\"text\"\r\n        placeholder=\"Username\"\r\n        name=\"username\"\r\n        required\r\n        [(ngModel)]=\"model.username\"\r\n      />\r\n      <input\r\n        class=\"form-control mr-sm-2\"\r\n        type=\"password\"\r\n        name=\"password\"\r\n        required\r\n        placeholder=\"Password\"\r\n        [(ngModel)]=\"model.password\"\r\n      />\r\n      <button\r\n        class=\"btn btn-success my-2 my-sm-0\"\r\n        [disabled]=\"!loginForm.valid\"\r\n        type=\"submit\"\r\n      >\r\n        Login\r\n      </button>\r\n    </form>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\r\n  <div class=\"form-group text-center\">\r\n    <!-- <label class=\"control-label\" style=\"margin-right:10px\">Gender: </label> -->\r\n    <label class=\"radio-inline\">\r\n      <input\r\n        class=\"mr-3\"\r\n        type=\"radio\"\r\n        value=\"male\"\r\n        formControlName=\"gender\"\r\n      />Male\r\n    </label>\r\n    <label class=\"radio-inline ml-3\">\r\n      <input\r\n        class=\"mr-3\"\r\n        type=\"radio\"\r\n        value=\"female\"\r\n        formControlName=\"gender\"\r\n      />Female\r\n    </label>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <input\r\n      [ngClass]=\"{\r\n        'is-invalid':\r\n          registerForm.get('username').errors &&\r\n          registerForm.get('username').touched\r\n      }\"\r\n      autocomplete=\"off\"\r\n      type=\"text\"\r\n      class=\"form-control\"\r\n      formControlName=\"username\"\r\n      placeholder=\"username\"\r\n    />\r\n    <div class=\"invalid-feedback\">Please choose a user name</div>\r\n  </div>\r\n\r\n  <div class=\" form-group\">\r\n    <input\r\n      [ngClass]=\"{\r\n        'is-invalid':\r\n          registerForm.get('knownAs').errors &&\r\n          registerForm.get('knownAs').touched\r\n      }\"\r\n      class=\"form-control\"\r\n      placeholder=\"Known as\"\r\n      formControlName=\"knownAs\"\r\n      id=\"knownAs\"\r\n      autocomplete=\"off\"\r\n    />\r\n    <div\r\n      class=\"invalid-feedback\"\r\n      *ngIf=\"\r\n        registerForm.get('knownAs').touched &&\r\n        registerForm.get('knownAs').hasError('required')\r\n      \"\r\n    >\r\n      Known as is required\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <input\r\n      [ngClass]=\"{\r\n        'is-invalid':\r\n          registerForm.get('dateOfBirth').errors &&\r\n          registerForm.get('dateOfBirth').touched\r\n      }\"\r\n      class=\"form-control\"\r\n      placeholder=\"Date of Birth\"\r\n      formControlName=\"dateOfBirth\"\r\n      type=\"text\"\r\n      bsDatepicker\r\n      [bsConfig]=\"bsConfig\"\r\n    />\r\n    <div\r\n      class=\"invalid-feedback\"\r\n      *ngIf=\"\r\n        registerForm.get('dateOfBirth').touched &&\r\n        registerForm.get('dateOfBirth').hasError('required')\r\n      \"\r\n    >\r\n      Date of Birth is required\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <input\r\n      [ngClass]=\"{\r\n        'is-invalid':\r\n          registerForm.get('city').errors && registerForm.get('city').touched\r\n      }\"\r\n      class=\"form-control\"\r\n      placeholder=\"City\"\r\n      formControlName=\"city\"\r\n    />\r\n    <div\r\n      class=\"invalid-feedback\"\r\n      *ngIf=\"\r\n        registerForm.get('city').touched &&\r\n        registerForm.get('city').hasError('required')\r\n      \"\r\n    >\r\n      City is required\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <input\r\n      [ngClass]=\"{\r\n        'is-invalid':\r\n          registerForm.get('country').errors &&\r\n          registerForm.get('country').touched\r\n      }\"\r\n      class=\"form-control\"\r\n      placeholder=\"Country \"\r\n      formControlName=\"country\"\r\n    />\r\n    <div\r\n      class=\"invalid-feedback\"\r\n      *ngIf=\"\r\n        registerForm.get('country').touched &&\r\n        registerForm.get('country').hasError('required')\r\n      \"\r\n    >\r\n      Country is required\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <input\r\n      [ngClass]=\"{\r\n        'is-invalid':\r\n          registerForm.get('password').errors &&\r\n          registerForm.get('password').touched\r\n      }\"\r\n      type=\"password\"\r\n      class=\"form-control\"\r\n      formControlName=\"password\"\r\n      placeholder=\"password\"\r\n    />\r\n    <div\r\n      class=\"invalid-feedback\"\r\n      *ngIf=\"\r\n        registerForm.get('password').hasError('required') &&\r\n        registerForm.get('password').touched\r\n      \"\r\n    >\r\n      Password is required\r\n    </div>\r\n    <div\r\n      class=\"invalid-feedback\"\r\n      *ngIf=\"\r\n        registerForm.get('password').hasError('minlength') &&\r\n        registerForm.get('password').touched\r\n      \"\r\n    >\r\n      Password must be at least 4 characters\r\n    </div>\r\n    <div\r\n      class=\"invalid-feedback\"\r\n      *ngIf=\"\r\n        registerForm.get('password').hasError('maxlength') &&\r\n        registerForm.get('password').touched\r\n      \"\r\n    >\r\n      Password can't exceed 8 characters\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <input\r\n      [ngClass]=\"{\r\n        'is-invalid':\r\n          (registerForm.get('confirmPassword').errors &&\r\n            registerForm.get('confirmPassword').touched) ||\r\n          (registerForm.get('confirmPassword').touched &&\r\n            registerForm.hasError('mismatch'))\r\n      }\"\r\n      type=\"password\"\r\n      class=\"form-control\"\r\n      formControlName=\"confirmPassword\"\r\n      placeholder=\"Confirm password\"\r\n    />\r\n    <div\r\n      class=\"invalid-feedback\"\r\n      *ngIf=\"\r\n        registerForm.get('confirmPassword').hasError('required') &&\r\n        registerForm.get('confirmPassword').touched\r\n      \"\r\n    >\r\n      Confirmation is required\r\n    </div>\r\n    <div\r\n      class=\"invalid-feedback\"\r\n      *ngIf=\"\r\n        registerForm.hasError('mismatch') &&\r\n        registerForm.get('password').touched\r\n      \"\r\n    >\r\n      Passwords don't match\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group text-center\">\r\n    <button\r\n      class=\"btn btn-success\"\r\n      [disabled]=\"!registerForm.valid\"\r\n      type=\"submit\"\r\n    >\r\n      Register\r\n    </button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/review-list/review-list.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/review-list/review-list.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12 text-center mt-3\">\n    <h2>\n      {{ pagination.totalItems }} reviews found\n      <span *ngIf=\"user\">for {{ user.knownAs }} </span>\n      <span>\n        <a\n          [routerLink]=\"['/reviews/add']\"\n          title=\"add reviews\"\n          routerLinkActive=\"router-link-active\"\n          class=\"btn btn-primary roudedBtn\"\n        >\n          <i class=\"fa fa-plus-square\"></i>\n        </a>\n      </span>\n    </h2>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <form\n      class=\"form-inline\"\n      #form=\"ngForm\"\n      (ngSubmit)=\"loadReviews()\"\n      novalidate\n    >\n      <div class=\"form-group\">\n        <label for=\"dateFrom\"><i class=\"fa fa-hourglass-start px-1\"></i></label>\n        <input\n          autocomplete=\"off\"\n          type=\"text\"\n          class=\"form-control ml-1\"\n          [(ngModel)]=\"dateFrom\"\n          bsDatepicker\n          [bsConfig]=\"bsConfig\"\n          style=\"width: 150px\"\n          id=\"dateFrom\"\n          name=\"dateFrom\"\n        />\n      </div>\n\n      <div class=\"form-group ml-1\">\n        <label for=\"dateTo\"><i class=\"fa fa-hourglass-end px-1\"></i></label>\n        <input\n          autocomplete=\"off\"\n          type=\"text\"\n          class=\"form-control ml-1\"\n          [(ngModel)]=\"dateTo\"\n          bsDatepicker\n          [bsConfig]=\"bsConfig\"\n          style=\"width: 150px\"\n          id=\"dateTo\"\n          name=\"dateTo\"\n        />\n      </div>\n\n      <div class=\"form-group ml-1\">\n        <label for=\"country\"><i class=\"fa fa-flag px-1\"></i></label>\n        <select\n          class=\"form-control ml-1\"\n          style=\"width: 100px\"\n          [(ngModel)]=\"country\"\n          id=\"country\"\n          name=\"country\"\n        >\n          <option *ngFor=\"let country of countryList\" [value]=\"country.value\">\n            {{ country.display }}\n          </option>\n        </select>\n      </div>\n\n      <div class=\"form-group ml-1\">\n        <label for=\"bookAsin\"><i class=\"fa fa-list-ol px-1\"></i></label>\n        <input\n          type=\"text\"\n          class=\"form-control ml-1\"\n          style=\"width: 150px\"\n          [(ngModel)]=\"bookAsin\"\n          placeholder=\"Book Asin\"\n          id=\"bookAsin\"\n          name=\"bookAsin\"\n        />\n      </div>\n\n      <div class=\"form-group ml-1\">\n        <label for=\"penName\"><i class=\"fa fa-address-book px-1\"></i></label>\n        <input\n          type=\"text\"\n          class=\"form-control ml-1\"\n          style=\"width: 150px\"\n          [(ngModel)]=\"penName\"\n          placeholder=\"Pen name\"\n          id=\"penName\"\n          name=\"penName\"\n        />\n      </div>\n      <button type=\"submit\" class=\"btn btn-info\" style=\"margin-left:10px\">\n        <i class=\"fa fa-search-minus\"></i>\n      </button>\n    </form>\n  </div>\n  <br />\n  <div class=\"row\">\n    <table class=\"table\">\n      <tr>\n        <th style=\"width: 15%\">Pen Name</th>\n        <th style=\"width: 50%\">Review Title</th>\n        <th style=\"width: 10%\">Date</th>\n        <th style=\"width: 10%\">Book Asin</th>\n        <th style=\"width: 10%\">Country</th>\n        <th style=\"width: 5%\">Delete</th>\n      </tr>\n      <tr *ngFor=\"let review of reviews\">\n        <td>{{ review.penName }}</td>\n        <td>{{ review.reviewTitle }}</td>\n        <td>{{ review.reviewDate | date: \"mediumDate\" }}</td>\n        <td>{{ review.bookAsin }}</td>\n        <td>{{ review.country | uppercase }}</td>\n        <td>\n          <button\n            (click)=\"deleteReview(review)\"\n            class=\"btn  btn-outline-danger\"\n          >\n            <i class=\"fa fa-trash\"></i>\n          </button>\n        </td>\n      </tr>\n    </table>\n  </div>\n</div>\n\n<div class=\"d-flex justify-content-center\">\n  <pagination\n    [boundaryLinks]=\"true\"\n    [totalItems]=\"pagination.totalItems\"\n    [(ngModel)]=\"pagination.currentPage\"\n    [itemsPerPage]=\"pagination.itemsPerPage\"\n    (pageChanged)=\"pageChanged($event)\"\n    previousText=\"&lsaquo;\"\n    nextText=\"&rsaquo;\"\n    firstText=\"&laquo;\"\n    lastText=\"&raquo;\"\n    [maxSize]=\"5\"\n    [rotate]=\"false\"\n  ></pagination>\n</div>\n"

/***/ }),

/***/ "./src/app/_directives/hasRole.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/_directives/hasRole.directive.ts ***!
  \**************************************************/
/*! exports provided: HasRoleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasRoleDirective", function() { return HasRoleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");



var HasRoleDirective = /** @class */ (function () {
    function HasRoleDirective(viewContainerRef, templateRef, authService) {
        this.viewContainerRef = viewContainerRef;
        this.templateRef = templateRef;
        this.authService = authService;
        this.isVisible = false;
    }
    HasRoleDirective.prototype.ngOnInit = function () {
        var userRoles = this.authService.decodedToken.role;
        if (!userRoles) {
            this.viewContainerRef.clear();
        }
        if (this.authService.roleMatch(this.appHasRole)) {
            if (!this.isVisible) {
                this.isVisible = true;
                this.viewContainerRef.createEmbeddedView(this.templateRef);
            }
        }
        else {
            this.isVisible = false;
            this.viewContainerRef.clear();
        }
    };
    HasRoleDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], HasRoleDirective.prototype, "appHasRole", void 0);
    HasRoleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appHasRole]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HasRoleDirective);
    return HasRoleDirective;
}());



/***/ }),

/***/ "./src/app/_guards/Auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/Auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, alertify) {
        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
    }
    AuthGuard.prototype.canActivate = function (next) {
        var roles = next.firstChild.data.roles;
        if (roles) {
            var match = this.authService.roleMatch(roles);
            if (match) {
                return true;
            }
            else {
                this.router.navigate(['/members']);
                this.alertify.error('You are not allowed to access this area');
                return false;
            }
        }
        if (this.authService.loggedIn()) {
            return true;
        }
        this.alertify.error('Please login first !!!');
        this.router.navigate(['/home']);
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/prevent-unsaved-changes.guard.ts":
/*!**********************************************************!*\
  !*** ./src/app/_guards/prevent-unsaved-changes.guard.ts ***!
  \**********************************************************/
/*! exports provided: PreventUnsavedChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreventUnsavedChanges", function() { return PreventUnsavedChanges; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PreventUnsavedChanges = /** @class */ (function () {
    function PreventUnsavedChanges() {
    }
    PreventUnsavedChanges.prototype.canDeactivate = function (component) {
        if (component.editForm.dirty) {
            return confirm('Are you sure to leave this page? Any unsaved changes will be lost');
        }
        return true;
    };
    PreventUnsavedChanges = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], PreventUnsavedChanges);
    return PreventUnsavedChanges;
}());



/***/ }),

/***/ "./src/app/_models/pagination.ts":
/*!***************************************!*\
  !*** ./src/app/_models/pagination.ts ***!
  \***************************************/
/*! exports provided: PaginatedResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatedResult", function() { return PaginatedResult; });
var PaginatedResult = /** @class */ (function () {
    function PaginatedResult() {
    }
    return PaginatedResult;
}());



/***/ }),

/***/ "./src/app/_resolvers/assignment-list.resolver.ts":
/*!********************************************************!*\
  !*** ./src/app/_resolvers/assignment-list.resolver.ts ***!
  \********************************************************/
/*! exports provided: AssignmentListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentListResolver", function() { return AssignmentListResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_assignment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/assignment.service */ "./src/app/_services/assignment.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var AssignmentListResolver = /** @class */ (function () {
    function AssignmentListResolver(assService, router, alertify, datePipe) {
        this.assService = assService;
        this.router = router;
        this.alertify = alertify;
        this.datePipe = datePipe;
        this.pageNumber = 1;
        this.pageSize = 10;
    }
    AssignmentListResolver.prototype.resolve = function (route) {
        var _this = this;
        var assignedToId = 0;
        if (route.params.id) {
            assignedToId = +route.params.id;
        }
        var dateFrom = this.datePipe.transform(new Date(), 'MM/dd/yyyy');
        var dateTo = this.datePipe.transform(new Date(), 'MM/dd/yyyy');
        return this.assService.getAssignments({
            pageNumber: this.pageNumber,
            pageSize: this.pageSize,
            assignedToId: assignedToId,
            dateFrom: dateFrom,
            dateTo: dateTo
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this.alertify.error(error);
            _this.router.navigate(['/']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    };
    AssignmentListResolver.ctorParameters = function () { return [
        { type: _services_assignment_service__WEBPACK_IMPORTED_MODULE_6__["AssignmentService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] }
    ]; };
    AssignmentListResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_assignment_service__WEBPACK_IMPORTED_MODULE_6__["AssignmentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]])
    ], AssignmentListResolver);
    return AssignmentListResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/member-detail.resolver.ts":
/*!******************************************************!*\
  !*** ./src/app/_resolvers/member-detail.resolver.ts ***!
  \******************************************************/
/*! exports provided: MemberDetailResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailResolver", function() { return MemberDetailResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var MemberDetailResolver = /** @class */ (function () {
    function MemberDetailResolver(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
    }
    MemberDetailResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUser(route.params.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            _this.alertify.error(error);
            _this.router.navigate(['/members']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }));
    };
    MemberDetailResolver.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] }
    ]; };
    MemberDetailResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], MemberDetailResolver);
    return MemberDetailResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/member-edit.resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/_resolvers/member-edit.resolver.ts ***!
  \****************************************************/
/*! exports provided: MemberEditResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberEditResolver", function() { return MemberEditResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");








var MemberEditResolver = /** @class */ (function () {
    function MemberEditResolver(userService, router, alertify, authService) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.authService = authService;
    }
    MemberEditResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUser(this.authService.decodedToken.nameid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            _this.alertify.error('Problem retreiving your data');
            _this.router.navigate(['/members']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }));
    };
    MemberEditResolver.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
    ]; };
    MemberEditResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], MemberEditResolver);
    return MemberEditResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/member-list.resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/_resolvers/member-list.resolver.ts ***!
  \****************************************************/
/*! exports provided: MemberListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberListResolver", function() { return MemberListResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var MemberListResolver = /** @class */ (function () {
    function MemberListResolver(userService, router, alertify) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.pageNumber = 1;
        this.pageSize = 6;
    }
    MemberListResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getUsers(this.pageNumber, this.pageSize).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            _this.alertify.error(error);
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }));
    };
    MemberListResolver.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] }
    ]; };
    MemberListResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], MemberListResolver);
    return MemberListResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/messages.resolver.ts":
/*!*************************************************!*\
  !*** ./src/app/_resolvers/messages.resolver.ts ***!
  \*************************************************/
/*! exports provided: MessagesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesResolver", function() { return MessagesResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");








var MessagesResolver = /** @class */ (function () {
    function MessagesResolver(userService, router, alertify, authService) {
        this.userService = userService;
        this.router = router;
        this.alertify = alertify;
        this.authService = authService;
        this.pageNumber = 1;
        this.pageSize = 5;
        this.messageContainer = 'Unread';
    }
    MessagesResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.userService.getMessages(this.authService.decodedToken.nameid, this.pageNumber, this.pageSize, this.messageContainer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            _this.alertify.error(error);
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
        }));
    };
    MessagesResolver.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
    ]; };
    MessagesResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], MessagesResolver);
    return MessagesResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/review-list.resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/_resolvers/review-list.resolver.ts ***!
  \****************************************************/
/*! exports provided: ReviewListResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewListResolver", function() { return ReviewListResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_review_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/review.service */ "./src/app/_services/review.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var ReviewListResolver = /** @class */ (function () {
    function ReviewListResolver(revService, router, alertify, datePipe) {
        this.revService = revService;
        this.router = router;
        this.alertify = alertify;
        this.datePipe = datePipe;
        this.pageNumber = 1;
        this.pageSize = 10;
    }
    ReviewListResolver.prototype.resolve = function (route) {
        var _this = this;
        var reviewerId = 0;
        if (route.params.id) {
            reviewerId = +route.params.id;
            // console.log(reviewerId);
        }
        return this.revService.getReviews({
            pageNumber: this.pageNumber,
            pageSize: this.pageSize,
            reviewerId: reviewerId,
            dateFrom: this.datePipe.transform(new Date(), 'MM/dd/yyyy'),
            dateTo: this.datePipe.transform(new Date(), 'MM/dd/yyyy')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this.alertify.error(error);
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    };
    ReviewListResolver.ctorParameters = function () { return [
        { type: _services_review_service__WEBPACK_IMPORTED_MODULE_6__["ReviewService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] }
    ]; };
    ReviewListResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_review_service__WEBPACK_IMPORTED_MODULE_6__["ReviewService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]])
    ], ReviewListResolver);
    return ReviewListResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/userKnownAs.resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/_resolvers/userKnownAs.resolver.ts ***!
  \****************************************************/
/*! exports provided: UserKnownAsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserKnownAsResolver", function() { return UserKnownAsResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");







var UserKnownAsResolver = /** @class */ (function () {
    function UserKnownAsResolver(router, alertify, userService) {
        this.router = router;
        this.alertify = alertify;
        this.userService = userService;
    }
    UserKnownAsResolver.prototype.resolve = function (route) {
        var _this = this;
        var reviewerId = 0;
        if (route.params.id) {
            reviewerId = +route.params.id;
        }
        return this.userService.getUser(reviewerId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this.alertify.error(error);
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
        }));
    };
    UserKnownAsResolver.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
    ]; };
    UserKnownAsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], UserKnownAsResolver);
    return UserKnownAsResolver;
}());



/***/ }),

/***/ "./src/app/_services/admin.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/admin.service.ts ***!
  \********************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    AdminService.prototype.getUsersWithRoles = function () {
        return this.http.get(this.baseUrl + 'admin/usersWithRoles');
    };
    AdminService.prototype.updateUserRoles = function (user, roles) {
        return this.http.post(this.baseUrl + 'admin/editRoles/' + user.userName, roles);
    };
    AdminService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/_services/alertify.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/alertify.service.ts ***!
  \***********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallback) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
        });
    };
    AlertifyService.prototype.confirmWithTitle = function (title, message, okCallback) {
        alertify.confirm(title, message, function (e) {
            if (e) {
                okCallback();
            }
        }, function (e) { });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/_services/assignment.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_services/assignment.service.ts ***!
  \*************************************************/
/*! exports provided: AssignmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentService", function() { return AssignmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/pagination */ "./src/app/_models/pagination.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var AssignmentService = /** @class */ (function () {
    function AssignmentService(http, datePipe) {
        this.http = http;
        this.datePipe = datePipe;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    AssignmentService.prototype.getAssignments = function (assParams) {
        var paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatedResult"]();
        return this.http
            .post(this.baseUrl + 'assignment/GetAllAssignments', assParams, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            paginatedResult.result = response.body;
            var header = response.headers.get('Pagination');
            if (header != null) {
                paginatedResult.pagination = JSON.parse(header);
            }
            return paginatedResult;
        }));
    };
    AssignmentService.prototype.addAssignment = function (assignment) {
        return this.http.post(this.baseUrl + 'assignment', assignment);
    };
    AssignmentService.prototype.markAsComplete = function (id) {
        return this.http.post(this.baseUrl + 'assignment/markComplete/' + id, {});
    };
    AssignmentService.prototype.updateAssignment = function (assignment) {
        return this.http.put(this.baseUrl + 'assignment', assignment);
    };
    AssignmentService.prototype.deleteAssignment = function (id) {
        return this.http.post(this.baseUrl + 'assignment/DeleteAssignment/' + id, {});
    };
    AssignmentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] }
    ]; };
    AssignmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]])
    ], AssignmentService);
    return AssignmentService;
}());



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'auth/';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        this.photoUrl = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]('../../assets/user.png');
        this.currentPhotoUrl = this.photoUrl.asObservable();
    }
    AuthService.prototype.changeMemberPhoto = function (photoUrl) {
        this.photoUrl.next(photoUrl);
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(this.baseUrl + 'login', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (res) {
                localStorage.setItem('token', res.token);
                localStorage.setItem('user', JSON.stringify(res.user));
                _this.currentUser = res.user;
                _this.decodedToken = _this.jwtHelper.decodeToken(res.token);
                _this.changeMemberPhoto(_this.currentUser.photoUrl);
            }
        }));
    };
    AuthService.prototype.register = function (user) {
        return this.http.post(this.baseUrl + 'register', user);
    };
    AuthService.prototype.loggedIn = function () {
        var token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService.prototype.roleMatch = function (allowedRoles) {
        var isMatch = false;
        var userRoles = this.decodedToken.role;
        allowedRoles.forEach(function (element) {
            if (userRoles.includes(element)) {
                isMatch = true;
                return;
            }
        });
        return isMatch;
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/error.interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/_services/error.interceptor.ts ***!
  \************************************************/
/*! exports provided: ErrorInterceptor, ErrorInterceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptorProvider", function() { return ErrorInterceptorProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (err.status === 401) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err.statusText);
                }
                var applicationError = err.headers.get("Application-Error");
                if (applicationError) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(applicationError);
                }
                var serverError = err.error;
                var modelStateErrors = '';
                if (serverError && typeof serverError === "object") {
                    for (var key in serverError) {
                        if (serverError[key]) {
                            modelStateErrors += serverError[key] + "\n";
                        }
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(modelStateErrors || serverError || 'Server Error');
            }
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());

var ErrorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: ErrorInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_services/review.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/review.service.ts ***!
  \*********************************************/
/*! exports provided: ReviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewService", function() { return ReviewService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/pagination */ "./src/app/_models/pagination.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var ReviewService = /** @class */ (function () {
    function ReviewService(http, datePipe) {
        this.http = http;
        this.datePipe = datePipe;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    ReviewService.prototype.getReviews = function (revParams) {
        var paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatedResult"]();
        return this.http
            .post(this.baseUrl + 'reviews/GetReviews', revParams, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            paginatedResult.result = response.body;
            var header = response.headers.get('Pagination');
            if (header != null) {
                paginatedResult.pagination = JSON.parse(header);
            }
            return paginatedResult;
        }));
    };
    ReviewService.prototype.addReviews = function (file, country, bookAsin) {
        var formData = new FormData();
        formData.append('File', file);
        formData.append('Country', country);
        formData.append('BookAsin', bookAsin);
        return this.http.post(this.baseUrl + 'Reviews', formData);
    };
    ReviewService.prototype.addReviewByDate = function (bookAsin, country, minimumDate) {
        var minDate = this.datePipe.transform(minimumDate, 'MM/dd/yyyy');
        return this.http.post(this.baseUrl + 'Reviews/AddReviewByDate', { bookAsin: bookAsin, country: country, minimumDate: minDate });
    };
    ReviewService.prototype.deleteReview = function (review) {
        return this.http.post(this.baseUrl + 'Reviews/DeleteReview', review);
    };
    ReviewService.prototype.deleteReviews = function (revParams) {
        return this.http.post(this.baseUrl + 'Reviews/DeleteRange', revParams);
    };
    ReviewService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] }
    ]; };
    ReviewService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]])
    ], ReviewService);
    return ReviewService;
}());



/***/ }),

/***/ "./src/app/_services/session.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/session.service.ts ***!
  \**********************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var SessionService = /** @class */ (function () {
    function SessionService(http, datePipe) {
        this.http = http;
        this.datePipe = datePipe;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    SessionService.prototype.addSession = function (StartDate, EndDate, name) {
        var startDate = this.datePipe.transform(StartDate, 'MM/dd/yyyy');
        var endDate = this.datePipe.transform(EndDate, 'MM/dd/yyyy');
        return this.http.post(this.baseUrl + 'session', { startDate: startDate, endDate: endDate, name: name });
    };
    SessionService.prototype.getSessions = function () {
        return this.http.get(this.baseUrl + 'session');
    };
    SessionService.prototype.updateSession = function (session) {
        return this.http.put(this.baseUrl + 'session', session);
    };
    SessionService.prototype.deleteSession = function (id) {
        return this.http.post(this.baseUrl + 'session/DeleteSession/' + id, {});
    };
    SessionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] }
    ]; };
    SessionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/pagination */ "./src/app/_models/pagination.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var UserService = /** @class */ (function () {
    function UserService(http, datePipe) {
        this.http = http;
        this.datePipe = datePipe;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    UserService.prototype.getUsers = function (page, itemsPerPage, userParams, likeParams) {
        var paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatedResult"]();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }
        if (userParams != null) {
            params = params.append('minAge', userParams.minAge);
            params = params.append('maxAge', userParams.maxAge);
            params = params.append('gender', userParams.gender);
            params = params.append('orderBy', userParams.orderBy);
            params = params.append('knownAs', userParams.knownAs);
        }
        if (likeParams === 'Likers') {
            params = params.append('likers', 'true');
        }
        if (likeParams === 'Likees') {
            params = params.append('likees', 'true');
        }
        return this.http
            .get(this.baseUrl + 'users', { observe: 'response', params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            paginatedResult.result = response.body;
            var header = response.headers.get('Pagination');
            if (header != null) {
                paginatedResult.pagination = JSON.parse(header);
            }
            return paginatedResult;
        }));
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.baseUrl + 'users/' + id);
    };
    UserService.prototype.changePassword = function (id, model) {
        return this.http.post(this.baseUrl + 'users/' + id + '/changePassword', model);
    };
    UserService.prototype.updateUser = function (id, user) {
        return this.http.put(this.baseUrl + 'users/' + id, user);
    };
    UserService.prototype.setMainPhoto = function (userId, id) {
        return this.http.post(this.baseUrl + 'users/' + userId + '/photos/' + id + '/setmain', {});
    };
    UserService.prototype.deletePhoto = function (userId, id) {
        return this.http.delete(this.baseUrl + 'users/' + userId + '/photos/' + id);
    };
    UserService.prototype.sendLike = function (id, recipientId) {
        console.log(recipientId);
        return this.http.post(this.baseUrl + 'users/' + id + '/like/' + recipientId, {});
    };
    UserService.prototype.getMessages = function (id, page, itemsPerPage, messageContainer) {
        var paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatedResult"]();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]();
        params = params.append('MessageContainer', messageContainer);
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }
        return this.http.get(this.baseUrl + 'users/' + id + '/messages', { observe: 'response', params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            paginatedResult.result = response.body;
            var header = response.headers.get('Pagination');
            if (header != null) {
                paginatedResult.pagination = JSON.parse(header);
            }
            return paginatedResult;
        }));
    };
    UserService.prototype.getMessageThread = function (id, recipientId) {
        return this.http.get(this.baseUrl + 'users/' + id + '/messages/thread/' + recipientId);
    };
    UserService.prototype.sendMessage = function (id, message) {
        return this.http.post(this.baseUrl + 'users/' + id + '/messages', message);
    };
    UserService.prototype.deleteMessage = function (userId, id) {
        return this.http.post(this.baseUrl + 'users/' + userId + '/messages/' + id, {});
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.post(this.baseUrl + 'users/deleteUser/' + id, {});
    };
    UserService.prototype.getAllUser = function () {
        return this.http.get(this.baseUrl + 'users/getalluser');
    };
    UserService.prototype.getUnreadMessage = function () {
        return this.http.get(this.baseUrl + 'users/GetUnreadMessageCount');
    };
    UserService.prototype.deleteMessages = function (endDate) {
        var deleteDto = {
            dateTo: this.datePipe.transform(endDate, 'MM/dd/yyyy')
        };
        return this.http.post(this.baseUrl + 'users/DeleteMessageRange', deleteDto);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/admin/admin-panel/admin-panel.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-panel/admin-panel.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXBhbmVsL2FkbWluLXBhbmVsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin-panel/admin-panel.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/admin-panel/admin-panel.component.ts ***!
  \************************************************************/
/*! exports provided: AdminPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelComponent", function() { return AdminPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminPanelComponent = /** @class */ (function () {
    function AdminPanelComponent() {
    }
    AdminPanelComponent.prototype.ngOnInit = function () {
    };
    AdminPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-panel',
            template: __webpack_require__(/*! raw-loader!./admin-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin-panel/admin-panel.component.html"),
            styles: [__webpack_require__(/*! ./admin-panel.component.css */ "./src/app/admin/admin-panel/admin-panel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminPanelComponent);
    return AdminPanelComponent;
}());



/***/ }),

/***/ "./src/app/admin/assignment-audit/assignment-audit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin/assignment-audit/assignment-audit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Fzc2lnbm1lbnQtYXVkaXQvYXNzaWdubWVudC1hdWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/assignment-audit/assignment-audit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/assignment-audit/assignment-audit.component.ts ***!
  \**********************************************************************/
/*! exports provided: AssignmentAuditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentAuditComponent", function() { return AssignmentAuditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/session.service */ "./src/app/_services/session.service.ts");
/* harmony import */ var src_app_services_assignment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/assignment.service */ "./src/app/_services/assignment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AssignmentAuditComponent = /** @class */ (function () {
    function AssignmentAuditComponent(userService, sessionService, assService, route) {
        this.userService = userService;
        this.sessionService = sessionService;
        this.assService = assService;
        this.route = route;
        this.users = [];
        this.sessions = [];
        this.assignments = [];
        this.country = '';
        this.totalCodes = 0;
        this.countryList = [
            { value: '', display: 'All' },
            { value: 'us', display: 'US' },
            { value: 'uk', display: 'UK' }
        ];
        this.sessionId = -1;
        this.userId = -1;
        this.bookAsin = '';
        this.completeList = [{ value: true, display: 'Complete' }, { value: false, display: 'Incomplete' }];
        this.isCompleted = true;
    }
    AssignmentAuditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadUsers();
        this.loadSessions();
        this.route.data.subscribe(function (data) {
            _this.assignments = data.assignments.result;
            _this.pagination = data.assignments.pagination;
            _this.calculateTotalCodes();
        });
    };
    AssignmentAuditComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getAllUser().subscribe(function (users) {
            _this.users = users;
        }, function (err) {
            console.log(err);
        });
    };
    AssignmentAuditComponent.prototype.loadSessions = function () {
        var _this = this;
        this.sessionService.getSessions().subscribe(function (sessions) {
            _this.sessions = sessions;
        }, function (err) {
            console.log(err);
        });
    };
    AssignmentAuditComponent.prototype.loadAssignments = function () {
        var _this = this;
        var assParam = {
            pageNumber: this.pagination.currentPage,
            pageSize: 10,
            assignedToId: this.userId,
            country: this.country,
            bookAsin: this.bookAsin,
            sessionId: this.sessionId,
            isCompleted: this.isCompleted
        };
        this.assService.getAssignments(assParam).subscribe(function (res) {
            _this.assignments = res.result;
            _this.pagination = res.pagination;
            _this.calculateTotalCodes();
        }, function (error) {
            console.log(error);
        });
    };
    AssignmentAuditComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadAssignments();
    };
    AssignmentAuditComponent.prototype.calculateTotalCodes = function () {
        var _this = this;
        this.totalCodes = 0;
        this.assignments.forEach(function (element) {
            _this.totalCodes += element.totalCodes;
        });
    };
    AssignmentAuditComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: src_app_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] },
        { type: src_app_services_assignment_service__WEBPACK_IMPORTED_MODULE_4__["AssignmentService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    AssignmentAuditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assignment-audit',
            template: __webpack_require__(/*! raw-loader!./assignment-audit.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/assignment-audit/assignment-audit.component.html"),
            styles: [__webpack_require__(/*! ./assignment-audit.component.css */ "./src/app/admin/assignment-audit/assignment-audit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"],
            src_app_services_assignment_service__WEBPACK_IMPORTED_MODULE_4__["AssignmentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], AssignmentAuditComponent);
    return AssignmentAuditComponent;
}());



/***/ }),

/***/ "./src/app/admin/review-audit/review-audit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/review-audit/review-audit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Jldmlldy1hdWRpdC9yZXZpZXctYXVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/review-audit/review-audit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/review-audit/review-audit.component.ts ***!
  \**************************************************************/
/*! exports provided: ReviewAuditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewAuditComponent", function() { return ReviewAuditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/session.service */ "./src/app/_services/session.service.ts");
/* harmony import */ var src_app_services_review_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/review.service */ "./src/app/_services/review.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");







var ReviewAuditComponent = /** @class */ (function () {
    function ReviewAuditComponent(userService, sessionService, revService, route, alertify) {
        this.userService = userService;
        this.sessionService = sessionService;
        this.revService = revService;
        this.route = route;
        this.alertify = alertify;
        this.users = [];
        this.sessions = [];
        this.reviews = [];
        this.country = '';
        this.countryList = [{ value: '', display: 'All' }, { value: 'us', display: 'US' }, { value: 'uk', display: 'UK' }];
        this.sessionId = -1;
        this.userId = -1;
        this.bookAsin = '';
    }
    ReviewAuditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadUsers();
        this.loadSessions();
        this.route.data.subscribe(function (data) {
            _this.reviews = data.reviews.result;
            _this.pagination = data.reviews.pagination;
        });
    };
    ReviewAuditComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getAllUser().subscribe(function (users) {
            _this.users = users;
        }, function (err) {
            console.log(err);
        });
    };
    ReviewAuditComponent.prototype.loadSessions = function () {
        var _this = this;
        this.sessionService.getSessions().subscribe(function (sessions) {
            _this.sessions = sessions;
        }, function (err) {
            console.log(err);
        });
    };
    ReviewAuditComponent.prototype.loadReviews = function () {
        var _this = this;
        var revParam = {
            pageNumber: this.pagination.currentPage,
            pageSize: 10,
            reviewerId: this.userId,
            country: this.country,
            bookAsin: this.bookAsin,
            sessionId: this.sessionId
        };
        this.revService.getReviews(revParam)
            .subscribe(function (res) {
            _this.reviews = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            console.log(error);
        });
    };
    ReviewAuditComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadReviews();
    };
    ReviewAuditComponent.prototype.deleteAll = function () {
        var _this = this;
        this.loadReviews();
        var revParam = {
            reviewerId: this.userId,
            country: this.country,
            bookAsin: this.bookAsin,
            sessionId: this.sessionId
        };
        this.alertify.confirmWithTitle('Are you sure?', 'All data will be deleted if you click Ok', function () {
            _this.revService.deleteReviews(revParam).subscribe(function () {
                _this.alertify.success('All reviews have been deleted');
            }, function (err) {
                _this.alertify.error(err);
            }, function () {
                _this.loadReviews();
            });
        });
    };
    ReviewAuditComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: src_app_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] },
        { type: src_app_services_review_service__WEBPACK_IMPORTED_MODULE_4__["ReviewService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"] }
    ]; };
    ReviewAuditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-review-audit',
            template: __webpack_require__(/*! raw-loader!./review-audit.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/review-audit/review-audit.component.html"),
            styles: [__webpack_require__(/*! ./review-audit.component.css */ "./src/app/admin/review-audit/review-audit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], src_app_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"],
            src_app_services_review_service__WEBPACK_IMPORTED_MODULE_4__["ReviewService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"]])
    ], ReviewAuditComponent);
    return ReviewAuditComponent;
}());



/***/ }),

/***/ "./src/app/admin/roles-modal/roles-modal.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/roles-modal/roles-modal.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JvbGVzLW1vZGFsL3JvbGVzLW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/roles-modal/roles-modal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/roles-modal/roles-modal.component.ts ***!
  \************************************************************/
/*! exports provided: RolesModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesModalComponent", function() { return RolesModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");



var RolesModalComponent = /** @class */ (function () {
    function RolesModalComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.updateSelectedRoles = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    RolesModalComponent.prototype.ngOnInit = function () {
    };
    RolesModalComponent.prototype.updateRoles = function () {
        this.updateSelectedRoles.emit(this.roles);
        this.bsModalRef.hide();
    };
    RolesModalComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RolesModalComponent.prototype, "updateSelectedRoles", void 0);
    RolesModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-roles-modal',
            template: __webpack_require__(/*! raw-loader!./roles-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/roles-modal/roles-modal.component.html"),
            styles: [__webpack_require__(/*! ./roles-modal.component.css */ "./src/app/admin/roles-modal/roles-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]])
    ], RolesModalComponent);
    return RolesModalComponent;
}());



/***/ }),

/***/ "./src/app/admin/session-management/session-management.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/admin/session-management/session-management.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Nlc3Npb24tbWFuYWdlbWVudC9zZXNzaW9uLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/session-management/session-management.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/session-management/session-management.component.ts ***!
  \**************************************************************************/
/*! exports provided: SessionManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionManagementComponent", function() { return SessionManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/session.service */ "./src/app/_services/session.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _session_modal_session_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../session-modal/session-modal.component */ "./src/app/admin/session-modal/session-modal.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var SessionManagementComponent = /** @class */ (function () {
    function SessionManagementComponent(sessionService, alertify, modalService, datePipe) {
        this.sessionService = sessionService;
        this.alertify = alertify;
        this.modalService = modalService;
        this.datePipe = datePipe;
        this.startDate = new Date();
        this.endDate = new Date();
        this.name = '';
        this.sessions = [];
    }
    SessionManagementComponent.prototype.ngOnInit = function () {
        this.loadSessions();
    };
    SessionManagementComponent.prototype.loadSessions = function () {
        var _this = this;
        this.sessionService.getSessions().subscribe(function (sessions) {
            _this.sessions = sessions;
        });
    };
    SessionManagementComponent.prototype.addSession = function () {
        var _this = this;
        if (this.name === '') {
            this.alertify.error('Please enter session name first');
            return;
        }
        this.sessionService.addSession(this.startDate, this.endDate, this.name).subscribe(function () {
            _this.alertify.success('Session added successfully');
            _this.loadSessions();
        }, function (err) {
            _this.alertify.error('Could not add session');
        });
    };
    SessionManagementComponent.prototype.editSessionModal = function (session) {
        var _this = this;
        var initialState = {
            session: session
        };
        this.bsModalRef = this.modalService.show(_session_modal_session_modal_component__WEBPACK_IMPORTED_MODULE_5__["SessionModalComponent"], { initialState: initialState });
        this.bsModalRef.content.updateSession.subscribe(function (session) {
            _this.updateSession(session);
        });
    };
    SessionManagementComponent.prototype.updateSession = function (session) {
        var _this = this;
        session.startDate = this.datePipe.transform(session.startDate, 'MM/dd/yyyy');
        session.endDate = this.datePipe.transform(session.endDate, 'MM/dd/yyyy');
        this.sessionService.updateSession(session).subscribe(function () {
            _this.loadSessions();
            _this.alertify.success('Session was updated');
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    SessionManagementComponent.prototype.deleteSession = function (id) {
        var _this = this;
        this.alertify.confirmWithTitle('Are you sure to delete this session?', 'This will be permanently deleted if you click Ok', function () {
            _this.sessionService.deleteSession(id).subscribe(function () {
                _this.loadSessions();
                _this.alertify.success('Session was deleted');
            }, function (err) {
                _this.alertify.error(err);
            });
        });
    };
    SessionManagementComponent.ctorParameters = function () { return [
        { type: src_app_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] },
        { type: src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] },
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] }
    ]; };
    SessionManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-session-management',
            template: __webpack_require__(/*! raw-loader!./session-management.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/session-management/session-management.component.html"),
            styles: [__webpack_require__(/*! ./session-management.component.css */ "./src/app/admin/session-management/session-management.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"], src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]])
    ], SessionManagementComponent);
    return SessionManagementComponent;
}());



/***/ }),

/***/ "./src/app/admin/session-modal/session-modal.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/session-modal/session-modal.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Nlc3Npb24tbW9kYWwvc2Vzc2lvbi1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/session-modal/session-modal.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/session-modal/session-modal.component.ts ***!
  \****************************************************************/
/*! exports provided: SessionModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionModalComponent", function() { return SessionModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");



var SessionModalComponent = /** @class */ (function () {
    function SessionModalComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.updateSession = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SessionModalComponent.prototype.ngOnInit = function () {
        this.session.startDate = new Date(this.session.startDate);
        this.session.endDate = new Date(this.session.endDate);
    };
    SessionModalComponent.prototype.update = function () {
        this.updateSession.emit(this.session);
        this.bsModalRef.hide();
    };
    SessionModalComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SessionModalComponent.prototype, "updateSession", void 0);
    SessionModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-session-modal',
            template: __webpack_require__(/*! raw-loader!./session-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/session-modal/session-modal.component.html"),
            styles: [__webpack_require__(/*! ./session-modal.component.css */ "./src/app/admin/session-modal/session-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]])
    ], SessionModalComponent);
    return SessionModalComponent;
}());



/***/ }),

/***/ "./src/app/admin/user-management/user-management.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/user-management/user-management.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXItbWFuYWdlbWVudC91c2VyLW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/user-management/user-management.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/user-management/user-management.component.ts ***!
  \********************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/admin.service */ "./src/app/_services/admin.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../roles-modal/roles-modal.component */ "./src/app/admin/roles-modal/roles-modal.component.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");







var UserManagementComponent = /** @class */ (function () {
    function UserManagementComponent(adminService, userService, alertify, modalService) {
        this.adminService = adminService;
        this.userService = userService;
        this.alertify = alertify;
        this.modalService = modalService;
    }
    UserManagementComponent.prototype.ngOnInit = function () {
        this.getUsersWithRoles();
    };
    UserManagementComponent.prototype.getUsersWithRoles = function () {
        var _this = this;
        this.adminService.getUsersWithRoles().subscribe(function (users) {
            _this.users = users;
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    UserManagementComponent.prototype.editRoleModal = function (user) {
        var _this = this;
        var initialState = {
            user: user,
            roles: this.getRolesArray(user)
        };
        this.bsModalRef = this.modalService.show(_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_5__["RolesModalComponent"], { initialState: initialState });
        this.bsModalRef.content.updateSelectedRoles.subscribe(function (values) {
            var rolesToUpdate = {
                roleNames: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](values.filter(function (el) { return el.checked === true; }).map(function (el) { return el.name; }))
            };
            if (rolesToUpdate) {
                _this.adminService.updateUserRoles(user, rolesToUpdate).subscribe(function () {
                    user.roles = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](rolesToUpdate.roleNames);
                }, function (err) {
                    console.log(err);
                });
            }
        });
    };
    UserManagementComponent.prototype.getRolesArray = function (user) {
        var roles = [];
        var userRoles = user.roles;
        var availableRoles = [
            { name: 'Admin', value: 'Admin' },
            { name: 'Moderator', value: 'Moderator' },
            { name: 'Member', value: 'Member' },
            { name: 'VIP', value: 'VIP' }
        ];
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < availableRoles.length; i++) {
            var isMatch = false;
            // tslint:disable-next-line: prefer-for-of
            for (var j = 0; j < userRoles.length; j++) {
                if (availableRoles[i].name === userRoles[j]) {
                    isMatch = true;
                    availableRoles[i].checked = true;
                    roles.push(availableRoles[i]);
                    break;
                }
            }
            if (!isMatch) {
                availableRoles[i].checked = false;
                roles.push(availableRoles[i]);
            }
        }
        return roles;
    };
    UserManagementComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.alertify.confirmWithTitle('Are you sure to delete this user?', 'This will be permanently deleted if you click Ok', function () {
            _this.userService.deleteUser(id).subscribe(function () {
                _this.getUsersWithRoles();
                _this.alertify.success('User was deleted');
            }, function (err) {
                _this.alertify.error(err);
            });
        });
    };
    UserManagementComponent.ctorParameters = function () { return [
        { type: src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
        { type: src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalService"] }
    ]; };
    UserManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-management',
            template: __webpack_require__(/*! raw-loader!./user-management.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/user-management/user-management.component.html"),
            styles: [__webpack_require__(/*! ./user-management.component.css */ "./src/app/admin/user-management/user-management.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]])
    ], UserManagementComponent);
    return UserManagementComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        if (token) {
            this.authService.decodedToken = this.jwtHelper.decodeToken(token);
        }
        var user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            this.authService.currentUser = user;
            this.authService.changeMemberPhoto(user.photoUrl);
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _services_error_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_services/error.interceptor */ "./src/app/_services/error.interceptor.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./members/member-list/member-list.component */ "./src/app/members/member-list/member-list.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _guards_Auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_guards/Auth.guard */ "./src/app/_guards/Auth.guard.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./members/member-card/member-card.component */ "./src/app/members/member-card/member-card.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./members/member-detail/member-detail.component */ "./src/app/members/member-detail/member-detail.component.ts");
/* harmony import */ var _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./_resolvers/member-detail.resolver */ "./src/app/_resolvers/member-detail.resolver.ts");
/* harmony import */ var _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_resolvers/member-list.resolver */ "./src/app/_resolvers/member-list.resolver.ts");
/* harmony import */ var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./members/member-edit/member-edit.component */ "./src/app/members/member-edit/member-edit.component.ts");
/* harmony import */ var _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_resolvers/member-edit.resolver */ "./src/app/_resolvers/member-edit.resolver.ts");
/* harmony import */ var _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./_guards/prevent-unsaved-changes.guard */ "./src/app/_guards/prevent-unsaved-changes.guard.ts");
/* harmony import */ var _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./members/photo-editor/photo-editor.component */ "./src/app/members/photo-editor/photo-editor.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var _resolvers_messages_resolver__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./_resolvers/messages.resolver */ "./src/app/_resolvers/messages.resolver.ts");
/* harmony import */ var _members_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./members/member-messages/member-messages.component */ "./src/app/members/member-messages/member-messages.component.ts");
/* harmony import */ var _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./admin/admin-panel/admin-panel.component */ "./src/app/admin/admin-panel/admin-panel.component.ts");
/* harmony import */ var _directives_hasRole_directive__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./_directives/hasRole.directive */ "./src/app/_directives/hasRole.directive.ts");
/* harmony import */ var _admin_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./admin/user-management/user-management.component */ "./src/app/admin/user-management/user-management.component.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./_services/admin.service */ "./src/app/_services/admin.service.ts");
/* harmony import */ var _admin_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./admin/roles-modal/roles-modal.component */ "./src/app/admin/roles-modal/roles-modal.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./review-list/review-list.component */ "./src/app/review-list/review-list.component.ts");
/* harmony import */ var _services_review_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./_services/review.service */ "./src/app/_services/review.service.ts");
/* harmony import */ var _resolvers_review_list_resolver__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./_resolvers/review-list.resolver */ "./src/app/_resolvers/review-list.resolver.ts");
/* harmony import */ var _fetch_review_fetch_review_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./fetch-review/fetch-review.component */ "./src/app/fetch-review/fetch-review.component.ts");
/* harmony import */ var _resolvers_userKnownAs_resolver__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./_resolvers/userKnownAs.resolver */ "./src/app/_resolvers/userKnownAs.resolver.ts");
/* harmony import */ var _admin_session_management_session_management_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./admin/session-management/session-management.component */ "./src/app/admin/session-management/session-management.component.ts");
/* harmony import */ var _admin_session_modal_session_modal_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./admin/session-modal/session-modal.component */ "./src/app/admin/session-modal/session-modal.component.ts");
/* harmony import */ var _admin_review_audit_review_audit_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./admin/review-audit/review-audit.component */ "./src/app/admin/review-audit/review-audit.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _assignment_assignment_list_assignment_list_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./assignment/assignment-list/assignment-list.component */ "./src/app/assignment/assignment-list/assignment-list.component.ts");
/* harmony import */ var _services_assignment_service__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./_services/assignment.service */ "./src/app/_services/assignment.service.ts");
/* harmony import */ var _resolvers_assignment_list_resolver__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./_resolvers/assignment-list.resolver */ "./src/app/_resolvers/assignment-list.resolver.ts");
/* harmony import */ var _assignment_add_assignment_add_assignment_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./assignment/add-assignment/add-assignment.component */ "./src/app/assignment/add-assignment/add-assignment.component.ts");
/* harmony import */ var _assignment_assignment_modal_assignment_modal_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./assignment/assignment-modal/assignment-modal.component */ "./src/app/assignment/assignment-modal/assignment-modal.component.ts");
/* harmony import */ var _admin_assignment_audit_assignment_audit_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./admin/assignment-audit/assignment-audit.component */ "./src/app/admin/assignment-audit/assignment-audit.component.ts");
























































function tokenGetter() {
    return localStorage.getItem('token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_16__["MemberListComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_17__["MessagesComponent"],
                _members_member_card_member_card_component__WEBPACK_IMPORTED_MODULE_21__["MemberCardComponent"],
                _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_23__["MemberDetailComponent"],
                _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_26__["MemberEditComponent"],
                _members_photo_editor_photo_editor_component__WEBPACK_IMPORTED_MODULE_29__["PhotoEditorComponent"],
                time_ago_pipe__WEBPACK_IMPORTED_MODULE_31__["TimeAgoPipe"],
                _members_member_messages_member_messages_component__WEBPACK_IMPORTED_MODULE_33__["MemberMessagesComponent"],
                _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_34__["AdminPanelComponent"],
                _directives_hasRole_directive__WEBPACK_IMPORTED_MODULE_35__["HasRoleDirective"],
                _admin_user_management_user_management_component__WEBPACK_IMPORTED_MODULE_36__["UserManagementComponent"],
                _admin_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_38__["RolesModalComponent"],
                _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_39__["ChangePasswordComponent"],
                _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_40__["ReviewListComponent"],
                _fetch_review_fetch_review_component__WEBPACK_IMPORTED_MODULE_43__["FetchReviewComponent"],
                _admin_session_management_session_management_component__WEBPACK_IMPORTED_MODULE_45__["SessionManagementComponent"],
                _admin_session_modal_session_modal_component__WEBPACK_IMPORTED_MODULE_46__["SessionModalComponent"],
                _admin_review_audit_review_audit_component__WEBPACK_IMPORTED_MODULE_47__["ReviewAuditComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_48__["DashboardComponent"],
                _assignment_assignment_list_assignment_list_component__WEBPACK_IMPORTED_MODULE_50__["AssignmentListComponent"],
                _assignment_add_assignment_add_assignment_component__WEBPACK_IMPORTED_MODULE_53__["AddAssignmentComponent"],
                _assignment_assignment_modal_assignment_modal_component__WEBPACK_IMPORTED_MODULE_54__["AssignmentModalComponent"],
                _admin_assignment_audit_assignment_audit_component__WEBPACK_IMPORTED_MODULE_55__["AssignmentAuditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDatepickerModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                ngx_gallery__WEBPACK_IMPORTED_MODULE_8__["NgxGalleryModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_30__["FileUploadModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["PaginationModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_18__["appRoutes"]),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["TabsModule"].forRoot(),
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_22__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:5000']
                    }
                })
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
                _services_error_interceptor__WEBPACK_IMPORTED_MODULE_14__["ErrorInterceptorProvider"],
                _services_alertify_service__WEBPACK_IMPORTED_MODULE_15__["AlertifyService"],
                _guards_Auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_20__["UserService"],
                _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_24__["MemberDetailResolver"],
                _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_25__["MemberListResolver"],
                _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_27__["MemberEditResolver"],
                _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_28__["PreventUnsavedChanges"],
                _resolvers_messages_resolver__WEBPACK_IMPORTED_MODULE_32__["MessagesResolver"],
                _services_admin_service__WEBPACK_IMPORTED_MODULE_37__["AdminService"],
                _services_review_service__WEBPACK_IMPORTED_MODULE_41__["ReviewService"],
                _resolvers_review_list_resolver__WEBPACK_IMPORTED_MODULE_42__["ReviewListResolver"],
                _resolvers_userKnownAs_resolver__WEBPACK_IMPORTED_MODULE_44__["UserKnownAsResolver"],
                _angular_common__WEBPACK_IMPORTED_MODULE_49__["DatePipe"],
                _services_assignment_service__WEBPACK_IMPORTED_MODULE_51__["AssignmentService"],
                _resolvers_assignment_list_resolver__WEBPACK_IMPORTED_MODULE_52__["AssignmentListResolver"]
            ],
            entryComponents: [
                _admin_roles_modal_roles_modal_component__WEBPACK_IMPORTED_MODULE_38__["RolesModalComponent"],
                _admin_session_modal_session_modal_component__WEBPACK_IMPORTED_MODULE_46__["SessionModalComponent"],
                _assignment_assignment_modal_assignment_modal_component__WEBPACK_IMPORTED_MODULE_54__["AssignmentModalComponent"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/assignment/add-assignment/add-assignment.component.css":
/*!************************************************************************!*\
  !*** ./src/app/assignment/add-assignment/add-assignment.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnQvYWRkLWFzc2lnbm1lbnQvYWRkLWFzc2lnbm1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/assignment/add-assignment/add-assignment.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/assignment/add-assignment/add-assignment.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddAssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAssignmentComponent", function() { return AddAssignmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var src_app_services_assignment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/assignment.service */ "./src/app/_services/assignment.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var AddAssignmentComponent = /** @class */ (function () {
    function AddAssignmentComponent(authService, assService, alertify, datePipe) {
        this.authService = authService;
        this.assService = assService;
        this.alertify = alertify;
        this.datePipe = datePipe;
        this.assignment = {
            bookAsin: '',
            assignedToId: this.authService.decodedToken.nameid,
            totalCodes: 25,
            country: 'us',
            startingRating: 0,
            assignedDate: ''
        };
        this.todayDate = new Date();
    }
    AddAssignmentComponent.prototype.ngOnInit = function () {
    };
    AddAssignmentComponent.prototype.AddAssignment = function () {
        var _this = this;
        if (this.assignment.bookAsin === '') {
            this.alertify.error('Please enter book asin first');
            return;
        }
        this.assignment.assignedDate = this.datePipe.transform(this.todayDate, 'MM/dd/yyyy');
        this.assService.addAssignment(this.assignment).subscribe(function () {
            _this.alertify.success('Assignment added');
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    AddAssignmentComponent.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: src_app_services_assignment_service__WEBPACK_IMPORTED_MODULE_3__["AssignmentService"] },
        { type: src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }
    ]; };
    AddAssignmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-assignment',
            template: __webpack_require__(/*! raw-loader!./add-assignment.component.html */ "./node_modules/raw-loader/index.js!./src/app/assignment/add-assignment/add-assignment.component.html"),
            styles: [__webpack_require__(/*! ./add-assignment.component.css */ "./src/app/assignment/add-assignment/add-assignment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_services_assignment_service__WEBPACK_IMPORTED_MODULE_3__["AssignmentService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])
    ], AddAssignmentComponent);
    return AddAssignmentComponent;
}());



/***/ }),

/***/ "./src/app/assignment/assignment-list/assignment-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/assignment/assignment-list/assignment-list.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-small {\r\n  font-size: 12px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzaWdubWVudC9hc3NpZ25tZW50LWxpc3QvYXNzaWdubWVudC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXNzaWdubWVudC9hc3NpZ25tZW50LWxpc3QvYXNzaWdubWVudC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1zbWFsbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/assignment/assignment-list/assignment-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/assignment/assignment-list/assignment-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: AssignmentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentListComponent", function() { return AssignmentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_assignment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/assignment.service */ "./src/app/_services/assignment.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _assignment_modal_assignment_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assignment-modal/assignment-modal.component */ "./src/app/assignment/assignment-modal/assignment-modal.component.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");









var AssignmentListComponent = /** @class */ (function () {
    function AssignmentListComponent(assService, alertify, route, datePipe, authService, modalService) {
        this.assService = assService;
        this.alertify = alertify;
        this.route = route;
        this.datePipe = datePipe;
        this.authService = authService;
        this.modalService = modalService;
        this.revParams = {};
        this.assignedToId = 0;
        this.dateFrom = new Date();
        this.dateTo = new Date();
        this.country = '';
        this.totalCodes = 0;
        this.isCompleted = false;
        this.countryList = [{ value: '', display: 'All' }, { value: 'us', display: 'US' }, { value: 'uk', display: 'UK' }];
        this.completeList = [{ value: true, display: 'Complete' }, { value: false, display: 'Incomplete' }];
    }
    AssignmentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.assignments = data.assignments.result;
            _this.pagination = data.assignments.pagination;
            _this.user = data.user;
            _this.calculateTotalCodes();
        });
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.assignedToId = +params.id;
            }
        });
    };
    AssignmentListComponent.prototype.calculateTotalCodes = function () {
        var _this = this;
        this.totalCodes = 0;
        this.assignments.forEach(function (element) {
            _this.totalCodes += element.totalCodes;
        });
    };
    AssignmentListComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadAssignments();
    };
    AssignmentListComponent.prototype.loadAssignments = function () {
        var _this = this;
        var dateFrom = this.datePipe.transform(this.dateFrom, 'MM/dd/yyyy');
        var dateTo = this.datePipe.transform(this.dateTo, 'MM/dd/yyyy');
        var assignment = {
            pageNumber: this.pagination.currentPage,
            pageSize: this.pagination.itemsPerPage,
            assignedToId: this.assignedToId,
            dateFrom: dateFrom,
            dateTo: dateTo,
            isCompleted: this.isCompleted
        };
        this.assService.getAssignments(assignment).subscribe(function (res) {
            _this.assignments = res.result;
            _this.pagination = res.pagination;
            _this.calculateTotalCodes();
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    AssignmentListComponent.prototype.markAsComplete = function (id) {
        var _this = this;
        this.alertify.confirmWithTitle('Are you sure?', 'This will be marked as complete', function () {
            _this.assService.markAsComplete(id).subscribe(function () {
                _this.alertify.success('Marked the assignment as complete');
                _this.loadAssignments();
            }, function (err) {
                _this.alertify.error(err);
            });
        });
    };
    AssignmentListComponent.prototype.editAssignmentModal = function (assignment) {
        var _this = this;
        var initialState = {
            assignment: assignment
        };
        this.bsModalRef = this.modalService.show(_assignment_modal_assignment_modal_component__WEBPACK_IMPORTED_MODULE_7__["AssignmentModalComponent"], { initialState: initialState });
        this.bsModalRef.content.updateAssignment.subscribe(function (assignment) {
            _this.updateAssignment(assignment);
        });
    };
    AssignmentListComponent.prototype.updateAssignment = function (assignment) {
        var _this = this;
        var isAdmin = this.authService.roleMatch(['Admin']);
        var today = this.datePipe.transform(new Date(), 'MM/dd/yyyy');
        var assignedDate = this.datePipe.transform(assignment.assignedDate, 'MM/dd/yyyy');
        if (isAdmin || today !== assignedDate) {
            this.alertify.error('You are not allowed to edit previous assignments');
            return;
        }
        this.assService.updateAssignment(assignment).subscribe(function () {
            _this.alertify.success('Assignment updated');
            _this.loadAssignments();
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    AssignmentListComponent.prototype.deleteAssignment = function (id) {
        var _this = this;
        this.alertify.confirmWithTitle('Are you sure', 'This will be deleted', function () {
            _this.assService.deleteAssignment(id).subscribe(function () {
                _this.alertify.success('Assignment deleted');
                _this.loadAssignments();
            }, function (err) {
                _this.alertify.error(err);
            });
        });
    };
    AssignmentListComponent.ctorParameters = function () { return [
        { type: src_app_services_assignment_service__WEBPACK_IMPORTED_MODULE_2__["AssignmentService"] },
        { type: src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] }
    ]; };
    AssignmentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assignment-list',
            template: __webpack_require__(/*! raw-loader!./assignment-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/assignment/assignment-list/assignment-list.component.html"),
            styles: [__webpack_require__(/*! ./assignment-list.component.css */ "./src/app/assignment/assignment-list/assignment-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_assignment_service__WEBPACK_IMPORTED_MODULE_2__["AssignmentService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]])
    ], AssignmentListComponent);
    return AssignmentListComponent;
}());



/***/ }),

/***/ "./src/app/assignment/assignment-modal/assignment-modal.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/assignment/assignment-modal/assignment-modal.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fzc2lnbm1lbnQvYXNzaWdubWVudC1tb2RhbC9hc3NpZ25tZW50LW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/assignment/assignment-modal/assignment-modal.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/assignment/assignment-modal/assignment-modal.component.ts ***!
  \***************************************************************************/
/*! exports provided: AssignmentModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentModalComponent", function() { return AssignmentModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");



var AssignmentModalComponent = /** @class */ (function () {
    function AssignmentModalComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.updateAssignment = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AssignmentModalComponent.prototype.ngOnInit = function () {
        this.assignment.assignedDate = new Date(this.assignment.assignedDate);
    };
    AssignmentModalComponent.prototype.update = function () {
        this.updateAssignment.emit(this.assignment);
        this.bsModalRef.hide();
    };
    AssignmentModalComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AssignmentModalComponent.prototype, "updateAssignment", void 0);
    AssignmentModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assignment-modal',
            template: __webpack_require__(/*! raw-loader!./assignment-modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/assignment/assignment-modal/assignment-modal.component.html"),
            styles: [__webpack_require__(/*! ./assignment-modal.component.css */ "./src/app/assignment/assignment-modal/assignment-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_bootstrap__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"]])
    ], AssignmentModalComponent);
    return AssignmentModalComponent;
}());



/***/ }),

/***/ "./src/app/change-password/change-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/change-password/change-password.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/change-password/change-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/change-password/change-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(fb, userService, authService, alertify, router) {
        this.fb = fb;
        this.userService = userService;
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    ChangePasswordComponent.prototype.createForm = function () {
        this.passwordChangeForm = this.fb.group({
            oldPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(8)]],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(8)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
            validators: [this.passwordMatchValidators]
        });
    };
    ChangePasswordComponent.prototype.passwordMatchValidators = function (g) {
        return g.get('newPassword').value === g.get('confirmPassword').value ? null : { mismatch: true };
    };
    ChangePasswordComponent.prototype.changePassword = function () {
        var _this = this;
        if (this.passwordChangeForm.valid) {
            this.passChange = Object.assign({}, this.passwordChangeForm.value);
            this.userService.changePassword(this.authService.decodedToken.nameid, this.passChange).subscribe(function () {
                _this.alertify.success('Password changed successfully ');
            }, function (err) {
                console.log(err);
                _this.alertify.error(err);
            }, function () {
                var model = {
                    username: _this.authService.decodedToken.unique_name,
                    password: _this.passChange.newPassword
                };
                _this.authService.login(model).subscribe(function () {
                    _this.router.navigate(['/members']);
                });
            });
        }
    };
    ChangePasswordComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/change-password/change-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/fetch-review/fetch-review.component.css":
/*!*********************************************************!*\
  !*** ./src/app/fetch-review/fetch-review.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZldGNoLXJldmlldy9mZXRjaC1yZXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/fetch-review/fetch-review.component.ts":
/*!********************************************************!*\
  !*** ./src/app/fetch-review/fetch-review.component.ts ***!
  \********************************************************/
/*! exports provided: FetchReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchReviewComponent", function() { return FetchReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/review.service */ "./src/app/_services/review.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");





var FetchReviewComponent = /** @class */ (function () {
    function FetchReviewComponent(reviewService, alertify, spinner) {
        this.reviewService = reviewService;
        this.alertify = alertify;
        this.spinner = spinner;
        this.normalTask = {
            country: 'us',
            bookAsin: '',
            minimumDate: new Date()
        };
        this.fileToUpload = null;
        this.country = 'us';
        this.bookAsin = '';
    }
    FetchReviewComponent.prototype.ngOnInit = function () {
    };
    FetchReviewComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
    };
    FetchReviewComponent.prototype.AddReviews = function () {
        var _this = this;
        if (this.bookAsin === '') {
            this.alertify.error('Please enter the book asin first');
            return;
        }
        var extension = this.fileToUpload.name.split('.').pop();
        if (extension.toLowerCase() !== 'xlsx') {
            this.alertify.error('Only .xlsx files allowed!');
            return;
        }
        this.spinner.show();
        this.reviewService.addReviews(this.fileToUpload, this.country, this.bookAsin).subscribe(function (data) {
            _this.alertify.success(data + ' reviews added');
        }, function (err) {
            _this.alertify.error('Could not add reviews');
            _this.spinner.hide();
        }, function () {
            _this.spinner.hide();
        });
    };
    FetchReviewComponent.prototype.AddNormalReviews = function () {
        var _this = this;
        if (this.normalTask.bookAsin === '') {
            this.alertify.error('Please enter the book asin first');
            return;
        }
        this.spinner.show();
        this.reviewService.addReviewByDate(this.normalTask.bookAsin, this.normalTask.country, this.normalTask.minimumDate).subscribe(function (data) {
            _this.alertify.success(data + ' reviews added');
        }, function (err) {
            _this.alertify.error('Could not add reviews');
            _this.spinner.hide();
        }, function () {
            _this.spinner.hide();
        });
    };
    FetchReviewComponent.ctorParameters = function () { return [
        { type: _services_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
    ]; };
    FetchReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fetch-review',
            template: __webpack_require__(/*! raw-loader!./fetch-review.component.html */ "./node_modules/raw-loader/index.js!./src/app/fetch-review/fetch-review.component.html"),
            styles: [__webpack_require__(/*! ./fetch-review.component.css */ "./src/app/fetch-review/fetch-review.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], FetchReviewComponent);
    return FetchReviewComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".label-icon {\r\n  color: yellow;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC1pY29uIHtcclxuICBjb2xvcjogeWVsbG93O1xyXG59XHJcbiJdfQ== */"

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
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/members/member-card/member-card.component.css":
/*!***************************************************************!*\
  !*** ./src/app/members/member-card/member-card.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card:hover img{\r\n  -webkit-transform: scale(1.2,1.2);\r\n          transform: scale(1.2,1.2);\r\n  transition-duration: 500ms;\r\n  transition-timing-function: ease-out;\r\n  opacity: 0.8;\r\n}\r\n\r\n.card img{\r\n  -webkit-transform: scale(1,1);\r\n          transform: scale(1,1);\r\n  transition-duration: 500ms;\r\n  transition-timing-function: ease-out;\r\n}\r\n\r\n.card-img-wrapper{\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.member-icons{\r\n  position: absolute;\r\n  bottom : -30%;\r\n  left:0;\r\n  right:0;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  opacity: 0;\r\n}\r\n\r\n.card-img-wrapper:hover .member-icons{\r\n  bottom: 0;\r\n  opacity: 1;\r\n}\r\n\r\n.animate{\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItY2FyZC9tZW1iZXItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQXlCO1VBQXpCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsb0NBQW9DO0VBQ3BDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLE1BQU07RUFDTixPQUFPO0VBQ1AsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVycy9tZW1iZXItY2FyZC9tZW1iZXItY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQ6aG92ZXIgaW1ne1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yLDEuMik7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTAwbXM7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmNhcmQgaW1ne1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSwxKTtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MDBtcztcclxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5jYXJkLWltZy13cmFwcGVye1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWVtYmVyLWljb25ze1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b20gOiAtMzAlO1xyXG4gIGxlZnQ6MDtcclxuICByaWdodDowO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY2FyZC1pbWctd3JhcHBlcjpob3ZlciAubWVtYmVyLWljb25ze1xyXG4gIGJvdHRvbTogMDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uYW5pbWF0ZXtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/members/member-card/member-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/members/member-card/member-card.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberCardComponent", function() { return MemberCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");





var MemberCardComponent = /** @class */ (function () {
    function MemberCardComponent(authService, userService, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
    }
    MemberCardComponent.prototype.ngOnInit = function () {
    };
    MemberCardComponent.prototype.sendLike = function () {
        var _this = this;
        this.userService.sendLike(this.authService.decodedToken.nameid, this.user.id).subscribe(function () {
            _this.alertify.success('You have liked ' + _this.user.knownAs);
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    MemberCardComponent.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MemberCardComponent.prototype, "user", void 0);
    MemberCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-member-card',
            template: __webpack_require__(/*! raw-loader!./member-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/members/member-card/member-card.component.html"),
            styles: [__webpack_require__(/*! ./member-card.component.css */ "./src/app/members/member-card/member-card.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], MemberCardComponent);
    return MemberCardComponent;
}());



/***/ }),

/***/ "./src/app/members/member-detail/member-detail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/members/member-detail/member-detail.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-thumbnail{\r\n  margin:25px;\r\n  width: 85%;\r\n  height: 85%;\r\n}\r\n.card-body{\r\n  padding: 0 25px;\r\n}\r\n.card-footer{\r\n  padding: 10px 15px;\r\n  background-color: #fff;\r\n  border-top:none;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItZGV0YWlsL21lbWJlci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL21lbWJlci1kZXRhaWwvbWVtYmVyLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy10aHVtYm5haWx7XHJcbiAgbWFyZ2luOjI1cHg7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBoZWlnaHQ6IDg1JTtcclxufVxyXG4uY2FyZC1ib2R5e1xyXG4gIHBhZGRpbmc6IDAgMjVweDtcclxufVxyXG5cclxuLmNhcmQtZm9vdGVye1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci10b3A6bm9uZTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/members/member-detail/member-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/members/member-detail/member-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: MemberDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDetailComponent", function() { return MemberDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");







var MemberDetailComponent = /** @class */ (function () {
    function MemberDetailComponent(userService, alertify, route) {
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
    }
    MemberDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.user = data.user;
        });
        this.route.queryParams.subscribe(function (params) {
            var selectedTab = params.tab;
            _this.memberTabs.tabs[selectedTab > 0 ? selectedTab : 0].active = true;
        });
        this.galleryOptions = [
            {
                width: '500px',
                height: '500px',
                imagePercent: 100,
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_5__["NgxGalleryAnimation"].Slide,
                preview: false
            }
        ];
        this.galleryImages = this.getImages();
    };
    MemberDetailComponent.prototype.getImages = function () {
        var imageUrls = [];
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < this.user.photos.length; i++) {
            imageUrls.push({
                small: this.user.photos[i].url,
                medium: this.user.photos[i].url,
                big: this.user.photos[i].url,
                description: this.user.photos[i].description
            });
        }
        return imageUrls;
    };
    // loadUser() {
    //   this.userService.getUser(+this.route.snapshot.params.id).subscribe((user: User) => {
    //     this.user = user;
    //  }, error => {
    //     this.alertify.error(error);
    //   });
    // }
    MemberDetailComponent.prototype.selectTab = function (tabId) {
        this.memberTabs.tabs[tabId].active = true;
    };
    MemberDetailComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('memberTabs', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["TabsetComponent"])
    ], MemberDetailComponent.prototype, "memberTabs", void 0);
    MemberDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-member-detail',
            template: __webpack_require__(/*! raw-loader!./member-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/members/member-detail/member-detail.component.html"),
            styles: [__webpack_require__(/*! ./member-detail.component.css */ "./src/app/members/member-detail/member-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], MemberDetailComponent);
    return MemberDetailComponent;
}());



/***/ }),

/***/ "./src/app/members/member-edit/member-edit.component.css":
/*!***************************************************************!*\
  !*** ./src/app/members/member-edit/member-edit.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-thumbnail{\r\n  margin:25px;\r\n  width: 85%;\r\n  height: 85%;\r\n}\r\n.card-body{\r\n  padding: 0 25px;\r\n}\r\n.card-footer{\r\n  padding: 10px 15px;\r\n  background-color: #fff;\r\n  border-top:none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItZWRpdC9tZW1iZXItZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvbWVtYmVyLWVkaXQvbWVtYmVyLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWctdGh1bWJuYWlse1xyXG4gIG1hcmdpbjoyNXB4O1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgaGVpZ2h0OiA4NSU7XHJcbn1cclxuLmNhcmQtYm9keXtcclxuICBwYWRkaW5nOiAwIDI1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWZvb3RlcntcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItdG9wOm5vbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/members/member-edit/member-edit.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/members/member-edit/member-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberEditComponent", function() { return MemberEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");







var MemberEditComponent = /** @class */ (function () {
    function MemberEditComponent(route, alertify, userService, authService) {
        this.route = route;
        this.alertify = alertify;
        this.userService = userService;
        this.authService = authService;
    }
    MemberEditComponent.prototype.unloadNotification = function ($event) {
        if (this.editForm.dirty) {
            $event.returnValue = true;
        }
    };
    MemberEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.user = data.user;
        });
        this.authService.currentPhotoUrl.subscribe(function (photoUrl) { return _this.photoUrl = photoUrl; });
    };
    MemberEditComponent.prototype.updateUser = function () {
        var _this = this;
        this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(function (next) {
            _this.alertify.success('Profile updated successfully');
            _this.editForm.reset(_this.user);
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberEditComponent.prototype.mainPhotoChange = function (photoUrl) {
        this.authService.changeMemberPhoto(photoUrl);
        this.authService.currentUser.photoUrl = photoUrl;
        localStorage.setItem('user', JSON.stringify(this.authService.currentUser));
    };
    MemberEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('editForm', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], MemberEditComponent.prototype, "editForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:beforeunload', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MemberEditComponent.prototype, "unloadNotification", null);
    MemberEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-member-edit',
            template: __webpack_require__(/*! raw-loader!./member-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/members/member-edit/member-edit.component.html"),
            styles: [__webpack_require__(/*! ./member-edit.component.css */ "./src/app/members/member-edit/member-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], MemberEditComponent);
    return MemberEditComponent;
}());



/***/ }),

/***/ "./src/app/members/member-list/member-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/members/member-list/member-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvbWVtYmVyLWxpc3QvbWVtYmVyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/members/member-list/member-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/members/member-list/member-list.component.ts ***!
  \**************************************************************/
/*! exports provided: MemberListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberListComponent", function() { return MemberListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var MemberListComponent = /** @class */ (function () {
    function MemberListComponent(userService, alertify, route) {
        this.userService = userService;
        this.alertify = alertify;
        this.route = route;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.genderList = [{ value: 'all', display: 'All' },
            { value: 'male', display: 'Male' }, { value: 'female', display: 'Female' }];
        this.userParams = {};
    }
    MemberListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.users = data.users.result;
            _this.pagination = data.users.pagination;
        });
        this.userParams.gender = 'all';
        this.userParams.minAge = 18;
        this.userParams.maxAge = 99;
        this.userParams.knownAs = '';
    };
    MemberListComponent.prototype.resetFilters = function () {
        this.userParams.gender = 'all';
        this.userParams.minAge = 18;
        this.userParams.maxAge = 99;
        this.userParams.orderBy = 'lastActive';
        this.userParams.knownAs = '';
        this.loadUsers();
    };
    MemberListComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadUsers();
    };
    MemberListComponent.prototype.loadUsers = function () {
        var _this = this;
        this.userService.getUsers(this.pagination.currentPage, this.pagination.itemsPerPage, this.userParams).subscribe(function (res) {
            _this.users = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    MemberListComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    MemberListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-member-list',
            template: __webpack_require__(/*! raw-loader!./member-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/members/member-list/member-list.component.html"),
            styles: [__webpack_require__(/*! ./member-list.component.css */ "./src/app/members/member-list/member-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], MemberListComponent);
    return MemberListComponent;
}());



/***/ }),

/***/ "./src/app/members/member-messages/member-messages.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/members/member-messages/member-messages.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n  border: none;\r\n}\r\n\r\n.chat{\r\n  list-style: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.chat li{\r\n  margin-bottom: 10px;\r\n  padding-bottom: 5px;\r\n  border-bottom: 1px dotted #B3A9A9;\r\n}\r\n\r\n.rounded-circle {\r\n  height: 50px;\r\n  width: 50px;\r\n}\r\n\r\n.card-body {\r\n  overflow-y: scroll;\r\n  height: 400px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9tZW1iZXItbWVzc2FnZXMvbWVtYmVyLW1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJzL21lbWJlci1tZXNzYWdlcy9tZW1iZXItbWVzc2FnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmNoYXR7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNoYXQgbGl7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgI0IzQTlBOTtcclxufVxyXG5cclxuLnJvdW5kZWQtY2lyY2xlIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/members/member-messages/member-messages.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/members/member-messages/member-messages.component.ts ***!
  \**********************************************************************/
/*! exports provided: MemberMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberMessagesComponent", function() { return MemberMessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var MemberMessagesComponent = /** @class */ (function () {
    function MemberMessagesComponent(userService, authService, alertify) {
        this.userService = userService;
        this.authService = authService;
        this.alertify = alertify;
        this.newMessage = {};
        this.firstTime = true;
    }
    MemberMessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadMessages();
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(0, 10000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () { return _this.userService
            .getMessageThread(_this.authService.decodedToken.nameid, _this.recipientId); })).subscribe(function (messages) {
            if (_this.messages[_this.messages.length - 1].content !== messages[messages.length - 1].content) {
                _this.messages = messages;
                _this.firstTime = true;
            }
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    MemberMessagesComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    MemberMessagesComponent.prototype.ngAfterViewChecked = function () {
        if (this.firstTime !== false) {
            this.scrollToBottom();
        }
    };
    MemberMessagesComponent.prototype.scrollToBottom = function () {
        var _this = this;
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
            setTimeout(function () {
                _this.firstTime = false;
            }, 2000);
        }
        catch (err) { }
    };
    MemberMessagesComponent.prototype.loadMessages = function () {
        var _this = this;
        this.userService
            .getMessageThread(this.authService.decodedToken.nameid, this.recipientId)
            .subscribe(function (messages) {
            _this.messages = messages;
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    MemberMessagesComponent.prototype.sendMessage = function () {
        var _this = this;
        this.newMessage.recipientId = this.recipientId;
        this.userService
            .sendMessage(this.authService.decodedToken.nameid, this.newMessage)
            .subscribe(function (message) {
            _this.messages.push(message);
            _this.newMessage.content = '';
            _this.firstTime = true;
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    MemberMessagesComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chatBox', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MemberMessagesComponent.prototype, "myScrollContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MemberMessagesComponent.prototype, "recipientId", void 0);
    MemberMessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-member-messages',
            template: __webpack_require__(/*! raw-loader!./member-messages.component.html */ "./node_modules/raw-loader/index.js!./src/app/members/member-messages/member-messages.component.html"),
            styles: [__webpack_require__(/*! ./member-messages.component.css */ "./src/app/members/member-messages/member-messages.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], MemberMessagesComponent);
    return MemberMessagesComponent;
}());



/***/ }),

/***/ "./src/app/members/photo-editor/photo-editor.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/members/photo-editor/photo-editor.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img.img-thumbnail{\r\n  height: 100px;\r\n  min-width: 100px;\r\n  margin-bottom: 2px;\r\n}\r\n\r\n.nv-file-over{\r\n  border: dotted 3px red;\r\n}\r\n\r\ninput[type=file]{\r\n  color: transparent;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVycy9waG90by1lZGl0b3IvcGhvdG8tZWRpdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvcGhvdG8tZWRpdG9yL3Bob3RvLWVkaXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nLmltZy10aHVtYm5haWx7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxuLm52LWZpbGUtb3ZlcntcclxuICBib3JkZXI6IGRvdHRlZCAzcHggcmVkO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWZpbGVde1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/members/photo-editor/photo-editor.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/members/photo-editor/photo-editor.component.ts ***!
  \****************************************************************/
/*! exports provided: PhotoEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoEditorComponent", function() { return PhotoEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");







var PhotoEditorComponent = /** @class */ (function () {
    function PhotoEditorComponent(authService, userService, alertify) {
        this.authService = authService;
        this.userService = userService;
        this.alertify = alertify;
        this.memberMainPhotoChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hasBaseDropZoneOver = false;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    PhotoEditorComponent.prototype.ngOnInit = function () {
        this.initializeUploader();
    };
    PhotoEditorComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    PhotoEditorComponent.prototype.initializeUploader = function () {
        var _this = this;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({
            url: this.baseUrl + 'users/' + this.authService.decodedToken.nameid + '/photos',
            authToken: 'Bearer ' + localStorage.getItem('token'),
            isHTML5: true,
            allowedFileType: ['image'],
            removeAfterUpload: true,
            autoUpload: false,
            maxFileSize: 10 * 1024 * 1024
        });
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            if (response) {
                var res = JSON.parse(response);
                var photo = {
                    id: res.id,
                    url: res.url,
                    dateAdded: res.dateAdded,
                    isMain: res.isMain,
                    description: res.description
                };
                _this.photos.push(photo);
                if (photo.isMain) {
                    _this.memberMainPhotoChange.emit(photo.url);
                }
            }
        };
    };
    PhotoEditorComponent.prototype.setMainPhoto = function (photoId) {
        var _this = this;
        this.userService.setMainPhoto(this.authService.decodedToken.nameid, photoId).subscribe(function () {
            _this.photos.filter(function (p) { return p.isMain === true; })[0].isMain = false;
            var photo = _this.photos.filter(function (p) { return p.id === photoId; })[0];
            photo.isMain = true;
            _this.memberMainPhotoChange.emit(photo.url);
        }, function (errr) {
            _this.alertify.error(errr);
        });
    };
    PhotoEditorComponent.prototype.deletePhoto = function (photoId) {
        var _this = this;
        this.alertify.confirmWithTitle('Are you sure to delete this photo', 'This will be permanently deleted if you click Ok', function () {
            _this.userService.deletePhoto(_this.authService.decodedToken.nameid, photoId).subscribe(function () {
                _this.photos.splice(_this.photos.findIndex(function (p) { return p.id === photoId; }), 1);
                _this.alertify.success('Photo has been deleted ');
            }, function (err) {
                _this.alertify.error('Could not delete the photo');
            });
        });
    };
    PhotoEditorComponent.ctorParameters = function () { return [
        { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], PhotoEditorComponent.prototype, "photos", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PhotoEditorComponent.prototype, "memberMainPhotoChange", void 0);
    PhotoEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-photo-editor',
            template: __webpack_require__(/*! raw-loader!./photo-editor.component.html */ "./node_modules/raw-loader/index.js!./src/app/members/photo-editor/photo-editor.component.html"),
            styles: [__webpack_require__(/*! ./photo-editor.component.css */ "./src/app/members/photo-editor/photo-editor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"]])
    ], PhotoEditorComponent);
    return PhotoEditorComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  margin-top: 15px;\r\n}\r\n\r\n.img-circle {\r\n  max-height: 50px;\r\n}\r\n\r\ntd{\r\n  vertical-align: middle;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmltZy1jaXJjbGUge1xyXG4gIG1heC1oZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbnRke1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");






var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(userService, authService, route, alertify) {
        this.userService = userService;
        this.authService = authService;
        this.route = route;
        this.alertify = alertify;
        this.dateTo = new Date();
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.messages = data.messages.result;
            _this.pagination = data.messages.pagination;
        });
    };
    MessagesComponent.prototype.loadMessages = function () {
        var _this = this;
        this.userService.getMessages(this.authService.decodedToken.nameid, this.pagination.currentPage, this.pagination.itemsPerPage, this.messageContainer).subscribe(function (res) {
            _this.messages = res.result;
            _this.pagination = res.pagination;
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    MessagesComponent.prototype.deleteMessage = function (id) {
        var _this = this;
        this.alertify.confirmWithTitle('Confirmation', 'Are you sure to delete this message?', function () {
            _this.userService.deleteMessage(_this.authService.decodedToken.nameid, id).subscribe(function () {
                _this.messages.splice(_this.messages.findIndex(function (m) { return m.id === id; }), 1);
                _this.alertify.success('Message has been deleted');
            }, function (err) {
                _this.alertify.error('Failed to delete message');
            });
        });
    };
    MessagesComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadMessages();
    };
    MessagesComponent.prototype.deleteAllMessage = function () {
        var _this = this;
        this.alertify.confirmWithTitle('Are you sure?', 'All messages before ' + this.dateTo + ' will be permanently deleted', function () {
            _this.userService.deleteMessages(_this.dateTo).subscribe(function () {
                _this.alertify.success('All messages have been deleted');
                _this.loadMessages();
            }, function (err) {
                _this.alertify.error(err);
            });
        });
    };
    MessagesComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"] }
    ]; };
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/index.js!./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-toggle,.dropdown-item{\r\n  cursor: pointer;\r\n}\r\nimg{\r\n  max-height: 50px;\r\n  border: 2px solid white;\r\n  display: inline;\r\n}\r\n.navbar-brand{\r\n  color: #f5d442;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duLXRvZ2dsZSwuZHJvcGRvd24taXRlbXtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuaW1ne1xyXG4gIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcbi5uYXZiYXItYnJhbmR7XHJcbiAgY29sb3I6ICNmNWQ0NDI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var NavComponent = /** @class */ (function () {
    function NavComponent(authService, alertify, userService, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.userService = userService;
        this.router = router;
        this.model = {};
        this.unreadMessageCount = 0;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.currentPhotoUrl.subscribe(function (photoUrl) { return _this.photoUrl = photoUrl; });
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["timer"])(0, 15000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function () { return _this.userService.getUnreadMessage(); })).subscribe(function (count) { return _this.unreadMessageCount = count; }, function (err) { return console.log(err); });
    };
    NavComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    NavComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (next) {
            _this.alertify.success('Login successful ');
        }, function (err) {
            _this.alertify.error(err);
        }, function () {
            _this.router.navigate(['/members']);
        });
    };
    NavComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    NavComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.authService.decodedToken = null;
        this.authService.currentUser = null;
        this.alertify.message('Logged out ');
        this.router.navigate(['/']);
    };
    NavComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, fb, router, alertify) {
        this.authService = authService;
        this.fb = fb;
        this.router = router;
        this.alertify = alertify;
        this.cancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.bsConfig = {
            containerClass: 'theme-red'
        };
        this.createRegisterForm();
    };
    RegisterComponent.prototype.createRegisterForm = function () {
        this.registerForm = this.fb.group({
            gender: ['male'],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            knownAs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            city: ['Dhaka', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            country: ['Bangladesh', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(8)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        }, {
            validators: [this.passwordMatchValidators]
        });
    };
    RegisterComponent.prototype.passwordMatchValidators = function (g) {
        return g.get('password').value === g.get('confirmPassword').value ? null : { mismatch: true };
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.user = Object.assign({}, this.registerForm.value);
            this.authService.register(this.user).subscribe(function () {
                _this.alertify.success('Registration successful');
            }, function (err) {
                _this.alertify.error('Could not create account');
            });
        }
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RegisterComponent.prototype, "cancelRegister", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/review-list/review-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/review-list/review-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jldmlldy1saXN0L3Jldmlldy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/review-list/review-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/review-list/review-list.component.ts ***!
  \******************************************************/
/*! exports provided: ReviewListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewListComponent", function() { return ReviewListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_review_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/review.service */ "./src/app/_services/review.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var ReviewListComponent = /** @class */ (function () {
    function ReviewListComponent(revService, alertify, route, datePipe) {
        this.revService = revService;
        this.alertify = alertify;
        this.route = route;
        this.datePipe = datePipe;
        this.revParams = {};
        this.reviewerId = 0;
        this.country = '';
        this.penName = '';
        this.countryList = [{ value: '', display: 'All' }, { value: 'us', display: 'US' }, { value: 'uk', display: 'UK' }];
    }
    ReviewListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.reviews = data.reviews.result;
            _this.pagination = data.reviews.pagination;
            _this.user = data.user;
        });
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.reviewerId = +params.id;
            }
        });
        this.dateFrom = new Date();
        this.dateTo = new Date();
    };
    ReviewListComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.loadReviews();
    };
    ReviewListComponent.prototype.loadReviews = function () {
        var _this = this;
        var revParam = {
            pageNumber: this.pagination.currentPage,
            pageSize: 10,
            reviewerId: this.reviewerId,
            dateFrom: this.datePipe.transform(this.dateFrom, 'MM/dd/yyyy'),
            dateTo: this.datePipe.transform(this.dateTo, 'MM/dd/yyyy'),
            country: this.country,
            bookAsin: this.bookAsin,
            penName: this.penName
        };
        this.revService
            .getReviews(revParam)
            .subscribe(function (res) {
            _this.reviews = res.result;
            _this.pagination = res.pagination;
        }, function (error) {
            _this.alertify.error(error);
        });
    };
    ReviewListComponent.prototype.deleteReview = function (review) {
        var _this = this;
        this.alertify.confirmWithTitle('Are you sure to delete this review?', 'This will be permanently deleted if you click Ok', function () {
            _this.revService.deleteReview(review).subscribe(function () {
                // this.reviews.splice(this.reviews.findIndex(rev => rev === review), 1);
                _this.loadReviews();
                _this.alertify.success('Review has been deleted ');
            }, function (err) {
                _this.alertify.error('Could not delete review !');
            });
        });
    };
    ReviewListComponent.prototype.resetFilters = function () {
        this.bookAsin = '';
        this.dateFrom = undefined;
        this.dateTo = undefined;
        this.country = '';
    };
    ReviewListComponent.ctorParameters = function () { return [
        { type: _services_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }
    ]; };
    ReviewListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-review-list',
            template: __webpack_require__(/*! raw-loader!./review-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/review-list/review-list.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
            styles: [__webpack_require__(/*! ./review-list.component.css */ "./src/app/review-list/review-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_review_service__WEBPACK_IMPORTED_MODULE_2__["ReviewService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])
    ], ReviewListComponent);
    return ReviewListComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./members/member-list/member-list.component */ "./src/app/members/member-list/member-list.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _guards_Auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_guards/Auth.guard */ "./src/app/_guards/Auth.guard.ts");
/* harmony import */ var _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./members/member-detail/member-detail.component */ "./src/app/members/member-detail/member-detail.component.ts");
/* harmony import */ var _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_resolvers/member-detail.resolver */ "./src/app/_resolvers/member-detail.resolver.ts");
/* harmony import */ var _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_resolvers/member-list.resolver */ "./src/app/_resolvers/member-list.resolver.ts");
/* harmony import */ var _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./members/member-edit/member-edit.component */ "./src/app/members/member-edit/member-edit.component.ts");
/* harmony import */ var _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_resolvers/member-edit.resolver */ "./src/app/_resolvers/member-edit.resolver.ts");
/* harmony import */ var _guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_guards/prevent-unsaved-changes.guard */ "./src/app/_guards/prevent-unsaved-changes.guard.ts");
/* harmony import */ var _resolvers_messages_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_resolvers/messages.resolver */ "./src/app/_resolvers/messages.resolver.ts");
/* harmony import */ var _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/admin-panel/admin-panel.component */ "./src/app/admin/admin-panel/admin-panel.component.ts");
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./change-password/change-password.component */ "./src/app/change-password/change-password.component.ts");
/* harmony import */ var _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./review-list/review-list.component */ "./src/app/review-list/review-list.component.ts");
/* harmony import */ var _resolvers_review_list_resolver__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_resolvers/review-list.resolver */ "./src/app/_resolvers/review-list.resolver.ts");
/* harmony import */ var _fetch_review_fetch_review_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fetch-review/fetch-review.component */ "./src/app/fetch-review/fetch-review.component.ts");
/* harmony import */ var _resolvers_userKnownAs_resolver__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_resolvers/userKnownAs.resolver */ "./src/app/_resolvers/userKnownAs.resolver.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _assignment_assignment_list_assignment_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assignment/assignment-list/assignment-list.component */ "./src/app/assignment/assignment-list/assignment-list.component.ts");
/* harmony import */ var _resolvers_assignment_list_resolver__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_resolvers/assignment-list.resolver */ "./src/app/_resolvers/assignment-list.resolver.ts");
/* harmony import */ var _assignment_add_assignment_add_assignment_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assignment/add-assignment/add-assignment.component */ "./src/app/assignment/add-assignment/add-assignment.component.ts");





















var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [_guards_Auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [
            { path: 'changePassword', component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_12__["ChangePasswordComponent"] },
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"], resolve: { reviews: _resolvers_review_list_resolver__WEBPACK_IMPORTED_MODULE_14__["ReviewListResolver"],
                    assignments: _resolvers_assignment_list_resolver__WEBPACK_IMPORTED_MODULE_19__["AssignmentListResolver"] },
                data: { roles: ['Admin', 'Moderator'] } },
            { path: 'members', component: _members_member_list_member_list_component__WEBPACK_IMPORTED_MODULE_1__["MemberListComponent"], resolve: { users: _resolvers_member_list_resolver__WEBPACK_IMPORTED_MODULE_6__["MemberListResolver"] } },
            { path: 'members/:id', component: _members_member_detail_member_detail_component__WEBPACK_IMPORTED_MODULE_4__["MemberDetailComponent"], resolve: { user: _resolvers_member_detail_resolver__WEBPACK_IMPORTED_MODULE_5__["MemberDetailResolver"] } },
            { path: 'member/edit', component: _members_member_edit_member_edit_component__WEBPACK_IMPORTED_MODULE_7__["MemberEditComponent"], resolve: { user: _resolvers_member_edit_resolver__WEBPACK_IMPORTED_MODULE_8__["MemberEditResolver"] },
                canDeactivate: [_guards_prevent_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_9__["PreventUnsavedChanges"]] },
            { path: 'messages', component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__["MessagesComponent"], resolve: { messages: _resolvers_messages_resolver__WEBPACK_IMPORTED_MODULE_10__["MessagesResolver"] } },
            { path: 'admin', component: _admin_admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_11__["AdminPanelComponent"], data: { roles: ['Admin', 'Moderator'] } },
            { path: 'reviews/add', component: _fetch_review_fetch_review_component__WEBPACK_IMPORTED_MODULE_15__["FetchReviewComponent"] },
            { path: 'reviews/:id', component: _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_13__["ReviewListComponent"], data: { roles: ['Admin', 'Moderator'] },
                resolve: { reviews: _resolvers_review_list_resolver__WEBPACK_IMPORTED_MODULE_14__["ReviewListResolver"], user: _resolvers_userKnownAs_resolver__WEBPACK_IMPORTED_MODULE_16__["UserKnownAsResolver"] } },
            { path: 'reviews', component: _review_list_review_list_component__WEBPACK_IMPORTED_MODULE_13__["ReviewListComponent"], resolve: { reviews: _resolvers_review_list_resolver__WEBPACK_IMPORTED_MODULE_14__["ReviewListResolver"] } },
            { path: 'assignments/add', component: _assignment_add_assignment_add_assignment_component__WEBPACK_IMPORTED_MODULE_20__["AddAssignmentComponent"] },
            { path: 'assignments/:id', component: _assignment_assignment_list_assignment_list_component__WEBPACK_IMPORTED_MODULE_18__["AssignmentListComponent"], data: { roles: ['Admin', 'Moderator'] },
                resolve: { assignments: _resolvers_assignment_list_resolver__WEBPACK_IMPORTED_MODULE_19__["AssignmentListResolver"], user: _resolvers_userKnownAs_resolver__WEBPACK_IMPORTED_MODULE_16__["UserKnownAsResolver"] } },
            { path: 'assignments', component: _assignment_assignment_list_assignment_list_component__WEBPACK_IMPORTED_MODULE_18__["AssignmentListComponent"], resolve: { assignments: _resolvers_assignment_list_resolver__WEBPACK_IMPORTED_MODULE_19__["AssignmentListResolver"] } }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


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
    production: false,
    apiUrl: 'http://localhost:5000/api/'
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

module.exports = __webpack_require__(/*! D:\Projects\AudibleHelper\AudibleHelper-SPA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map