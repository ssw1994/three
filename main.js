(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../todo/todo.module": [
		"./src/app/todo/todo.module.ts",
		"todo-todo-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  about works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/addproduct/addproduct.component.css":
/*!*****************************************************!*\
  !*** ./src/app/addproduct/addproduct.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/addproduct/addproduct.component.html":
/*!******************************************************!*\
  !*** ./src/app/addproduct/addproduct.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  addproduct works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/addproduct/addproduct.component.ts":
/*!****************************************************!*\
  !*** ./src/app/addproduct/addproduct.component.ts ***!
  \****************************************************/
/*! exports provided: AddproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddproductComponent", function() { return AddproductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddproductComponent = /** @class */ (function () {
    function AddproductComponent() {
    }
    AddproductComponent.prototype.ngOnInit = function () {
    };
    AddproductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addproduct',
            template: __webpack_require__(/*! ./addproduct.component.html */ "./src/app/addproduct/addproduct.component.html"),
            styles: [__webpack_require__(/*! ./addproduct.component.css */ "./src/app/addproduct/addproduct.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddproductComponent);
    return AddproductComponent;
}());



/***/ }),

/***/ "./src/app/api-tester/api-tester.component.css":
/*!*****************************************************!*\
  !*** ./src/app/api-tester/api-tester.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action-btn{\r\n    text-align: center;\r\n}\r\n\r\n.body-input{\r\n    width:100%;\r\n}\r\n\r\n#response pre{\r\n    min-height: 150px;\r\n    height: 350px !important;\r\n}\r\n\r\n#response:hover > .print-icon,.copy-icon{\r\n    display: block;\r\n}\r\n\r\n.print-icon{\r\n    position: absolute;\r\n    right: 35px;\r\n    display: none;\r\n}\r\n\r\n.display-none{\r\n    display: 'none';\r\n}\r\n\r\n.copy-icon{\r\n    position: absolute;\r\n    right: 65px;\r\n    display: none;\r\n}\r\n\r\n.string { color: green; }\r\n\r\n.number { color: darkorange; }\r\n\r\n.boolean { color: blue; }\r\n\r\n.null { color: magenta; }\r\n\r\n.key { color: red; }\r\n\r\n.error{\r\n    border-color:red !important;\r\n}\r\n\r\n.req-option{\r\n    padding-top:10px;\r\n    padding-bottom: 10px;\r\n    border:1px solid gray;\r\n    background-color: #eeeded;\r\n    border-radius: 5px !important;\r\n}\r\n\r\n.req-option ul{\r\n    padding: 0px !important;\r\n    margin-left:5% !important;\r\n}\r\n\r\nli i {\r\n    font-size:8px;\r\n    margin-left:5px !important;\r\n    color:green;\r\n}\r\n\r\n.req-params{\r\n    width: 100% !important;\r\n}\r\n\r\n.h_line{\r\n    width: 50%;\r\n    height: 4px;\r\n    background-color: #eea0a0;\r\n}\r\n\r\nli a{\r\n    font-family: initial !important;\r\n}\r\n\r\n.req-option ul li{\r\n    list-style-type: none;\r\n    font-family: \r\n}\r\n\r\n.req-params table th,td{\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/api-tester/api-tester.component.html":
/*!******************************************************!*\
  !*** ./src/app/api-tester/api-tester.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12\" [formGroup]=\"apiForm\">\r\n  <div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n    <div class=\"col-md-2 col-sm-2 col-xs-12\">\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Method\" [(ngModel)]=\"apiDetails.method\" formControlName=\"method\" name=\"method\">\r\n          <mat-option *ngFor=\"let method of methods\" [value]=\"method.DropDownID\">\r\n            {{method.DropDownName}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-md-8 col-sm-8 col-xs-12\">\r\n      <div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n          <mat-form-field>\r\n              <input matInput placeholder=\"URL\" [(ngModel)]=\"apiDetails.url\" formControlName=\"url\" name=\"url\">\r\n          </mat-form-field>\r\n      </div>\r\n      <div class=\"col-md-12 col-sm-12 col-xs-12 padding0 req-option\">\r\n        <ul>\r\n          <li *ngFor=\"let option of requestOptions;let i = index\" class=\"col-md-3 col-sm-3 col-xs-12 padding0\" (click)=\"currentTab = option.DropDownID;\">\r\n            <a>{{option.DropDownName}}<span><i class=\"fa fa-circle\"></i></span></a>\r\n            <div class=\"h_line\" *ngIf=\"currentTab == option.DropDownID\"></div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n        <div class=\"req-params table-responsive\" [hidden]=\"currentTab != 1\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"col-5\">KEY</th>\r\n                <th class=\"col-5\">VALUE</th>\r\n                <th class=\"col-2\"><span (click)=\"addValue('Params',1)\"><i matTooltip=\"Add\" class=\"fa fa-plus\" aria-hidden=\"true\"></i></span></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody formArrayName=\"params\">\r\n              <tr *ngFor=\"let param of apiForm.controls['params']['controls'];let i = index;\" [formGroupName]=\"i\"> \r\n                <td><input type=\"text\" formControlName=\"key\" name=\"key\"></td>\r\n                <td><input type=\"text\" formControlName=\"value\" name=\"value\"></td>\r\n                <td><span (click)=\"addValue('Params',-1,i)\"><i class=\"fa fa-trash-o\"></i></span></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"req-params table-responsive\" [hidden]=\"currentTab != 3\">\r\n          <table class=\"table table-bordered\">\r\n            <thead>\r\n              <tr>\r\n                <th class=\"col-5\">KEY</th>\r\n                <th class=\"col-5\">VALUE</th>\r\n                <th class=\"col-2\"><span (click)=\"addValue('Headers',1)\"><i matTooltip=\"Add\" class=\"fa fa-plus\" aria-hidden=\"true\"></i></span></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody formArrayName=\"headers\">\r\n              <tr *ngFor=\"let header of apiForm.controls['headers']['controls'];let i = index;\" [formGroupName]=\"i\"> \r\n                <td><input type=\"text\" formControlName=\"key\" name=\"key\"></td>\r\n                <td><input type=\"text\" formControlName=\"value\" name=\"value\"></td>\r\n                <td><span (click)=\"addValue('Headers',-1,i)\"><i class=\"fa fa-trash-o\"></i></span></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"req-params\"></div>\r\n        <div class=\"req-params\" [hidden] =\"(currentTab != 4 || apiDetails.method == 'GET')\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 padding0\"> <!--[ngClass]=\"{'error': !apiForm.get('body').valid && apiForm.get('body').touched }\"-->\r\n            <textarea  rows=5 class=\"body-input\" [(ngModel)]=\"apiDetails.body\" formControlName=\"body\" name=\"body\"></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      \r\n    </div>\r\n    <div class=\"col-md-2 col-sm-3 col-xs-3 action-btn\">\r\n      <div class=\"col-md-6 col-sm-6 col-xs-6 action-btn\">\r\n          <button mat-button (click)=\"callApi(apiDetails.method)\">send</button>\r\n      </div>\r\n      <div class=\"col-md-6 col-sm-6 col-xs-6 action-btn\">\r\n          <button mat-button (click)=\"saveToFile(apiDetails,'application/json')\">save</button>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"col-md-offset-2 col-xs-offset col-sm-offset-2 col-md-8 col-sm-8 col-xs-8\" id=\"response\">\r\n        <span class=\"print-icon\"><i matTooltip=\"print\" class=\"fa fa-print fa-lg\" aria-hidden=\"true\" (click)=\"printResponse()\"></i><i (click)=\"copyContent()\" matTooltip=\"copy\" style=\"margin-left:5px\" class=\"fa fa-files-o fa-lg\" aria-hidden=\"true\"></i></span>\r\n        <pre id=\"res-body\"></pre>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/api-tester/api-tester.component.ts":
/*!****************************************************!*\
  !*** ./src/app/api-tester/api-tester.component.ts ***!
  \****************************************************/
/*! exports provided: API, fileSave, ApiTesterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fileSave", function() { return fileSave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiTesterComponent", function() { return ApiTesterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_postman_postman_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/postman/postman.service */ "./src/app/services/postman/postman.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$"/;
var jsonRegex = /^\{.*\:\{.*\:.*\}\}/;
var API = /** @class */ (function () {
    function API() {
    }
    Object.defineProperty(API.prototype, "_request", {
        get: function () {
            return this.request;
        },
        set: function (request) {
            this.request = request;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(API.prototype, "_response", {
        get: function () {
            return this.response;
        },
        set: function (response) {
            this.response = response;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(API.prototype, "_url", {
        get: function () {
            return this.url;
        },
        set: function (url) {
            this.url = url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(API.prototype, "_body", {
        get: function () {
            return this._body;
        },
        set: function (body) {
            this.body = body;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(API.prototype, "_headers", {
        get: function () {
            return this.headers;
        },
        set: function (headers) {
            this.headers = headers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(API.prototype, "_method", {
        get: function () {
            return this.method;
        },
        set: function (method) {
            this.method = method;
        },
        enumerable: true,
        configurable: true
    });
    return API;
}());

var fileSave = /** @class */ (function () {
    function fileSave(dialogRef, dialog, data, fb) {
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.data = data;
        this.fb = fb;
        try {
            this.fileForm = this.fb.group({
                fileName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    fileSave.prototype.ngOnInit = function () {
        try {
        }
        catch (error) {
            console.error(error);
        }
    };
    fileSave.prototype.saveFile = function () {
        try {
            if (this.fileForm.valid)
                this.dialogRef.close({ fileName: this.fileName });
        }
        catch (error) {
            console.error(error);
        }
    };
    fileSave.prototype.cancel = function () {
        try {
            this.dialogRef.close();
        }
        catch (error) {
            console.error(error);
        }
    };
    fileSave = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "file-save",
            template: __webpack_require__(/*! ./file-save.component.html */ "./src/app/api-tester/file-save.component.html"),
            styles: [__webpack_require__(/*! ./api-tester.component.css */ "./src/app/api-tester/api-tester.component.css")],
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], fileSave);
    return fileSave;
}());

var ApiTesterComponent = /** @class */ (function () {
    function ApiTesterComponent(fb, _postman, _json, dialog) {
        this.fb = fb;
        this._postman = _postman;
        this._json = _json;
        this.dialog = dialog;
        this.methods = [
            { DropDownName: "GET", DropDownID: "GET" },
            { DropDownName: "POST", DropDownID: "POST" },
            { DropDownName: "PUT", DropDownID: "PUT" },
            { DropDownName: "DELETE", DropDownID: "DELETE" },
        ];
        this.contentTypes = [
            { DropDownID: "", DropDownName: "text/html" },
            { DropDownID: "", DropDownName: "multipart/form-data" },
            { DropDownID: "", DropDownName: "application/x-www-form-urlencoded" },
        ];
        this.requestOptions = [
            { DropDownID: 1, DropDownName: "Params", values: [] },
            { DropDownID: 2, DropDownName: "Authorization", values: [] },
            { DropDownID: 3, DropDownName: "Headers", values: [] },
            { DropDownID: 4, DropDownName: "Body", values: [] },
        ];
        this.apiDetails = {};
        this.currentTab = 1;
        this.loading = false;
        this.apiDetails.method = "GET";
        try {
            this.apiForm = fb.group({
                url: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                method: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                body: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(jsonRegex)]],
                params: fb.array([]),
                headers: fb.array([])
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    /**
     * @author SSW
     * @description this function is used on loading component
     */
    ApiTesterComponent.prototype.ngOnInit = function () {
        try {
            this.apiDetails.headers = this._postman.headers;
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used printing API Response
     */
    ApiTesterComponent.prototype.printResponse = function () {
        try {
            var title = this.apiDetails.url;
            var printContents = void 0, popupWin = void 0;
            printContents = document.getElementById('response').innerHTML;
            popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
            popupWin.document.open();
            popupWin.document.write("\n\t\t  <html>\n\t\t\t\t<head>\n\t\t\t\t\t<title>" + title + ("</title>\n          <style>\n          .string { color: green; }\n          .number { color: darkorange; }\n          .boolean { color: blue; }\n          .null { color: magenta; }\n          .key { color: red; }\n\t\t\t\t\t</style>\n\t\t\t\t</head>\n\n\t\t\t\t<body onload=\"window.print();window.close()\">" + printContents + "</body>\n\t\t  </html>"));
            popupWin.document.close();
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used for doing actual action
     */
    ApiTesterComponent.prototype.doAction = function (iArr, iAction, iIndex) {
        try {
            if (iAction == 1) {
                iArr.push({});
            }
            else if (iAction == -1 && iIndex >= 0) {
                iArr.splice(iIndex, 1);
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used for adding value
     */
    ApiTesterComponent.prototype.addValue = function (choice, action, iIndex) {
        try {
            switch (choice) {
                case "Params":
                    this.addGroup(this.apiForm, action, "params", iIndex);
                    break;
                case "Authorization": break;
                case "Headers":
                    this.addGroup(this.apiForm, action, "headers", iIndex);
                    break;
                case "Body":
                    this.doAction(this.requestOptions[3].values, action, iIndex);
                    break;
                default:
                    console.error("default error");
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used for updating API Url as per request params
     */
    ApiTesterComponent.prototype.updateUrl = function () {
        try {
            var apiUrl = this.apiDetails.url;
            if (apiUrl.indexOf('?') > -1) {
                apiUrl = apiUrl.split('?')[0];
            }
            var url = "";
            var formArray = this.apiForm.get("params");
            for (var _i = 0, _a = formArray.controls; _i < _a.length; _i++) {
                var group = _a[_i];
                var key = group.get('key').value;
                var value = group.get('value').value;
                url += url ? ("&" + (key + (value ? ("=" + value) : ""))) : (key + (value ? ("=" + value) : ""));
            }
            this.apiDetails.url = apiUrl + (url ? ("?" + url) : "");
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used for adding form group to form
     */
    ApiTesterComponent.prototype.addGroup = function (iForm, iAction, iControl, iIndex) {
        var _this = this;
        try {
            var formArray = iForm.get(iControl);
            if (iAction == 1) {
                var form = this.fb.group({
                    key: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                    value: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
                });
                if (iControl === 'params') {
                    form.get('key').valueChanges.subscribe(function () {
                        _this.updateUrl();
                    }, function (error) {
                        console.error(error);
                    });
                    form.get('value').valueChanges.subscribe(function () {
                        _this.updateUrl();
                    }, function (error) {
                        console.error(error);
                    });
                    this.updateUrl();
                }
                formArray.push(form);
            }
            else if (iAction == -1 && iIndex >= 0) {
                formArray.removeAt(iIndex);
            }
            formArray.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        }
        catch (error) {
            console.error(error);
        }
    };
    ApiTesterComponent.prototype.copyContent = function () {
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
        }
        catch (error) {
            console.error(error);
        }
    };
    ApiTesterComponent.prototype.saveToFile = function (content, contentType) {
        try {
            var dialogRef = this.dialog.open(fileSave, {
                width: '350px',
                data: {}
            });
            dialogRef.afterClosed().subscribe(function (res) {
                if (res.fileName) {
                    var fileName = res.fileName + ".doc"; //+ contentType.substring(contentType.lastIndexOf('/')+1);
                    var a = document.createElement("a");
                    var file = new Blob([JSON.stringify(content, null, 2)], { type: contentType });
                    a.href = URL.createObjectURL(file);
                    a.download = fileName;
                    a.click();
                }
            }, function (error) {
                console.error(error);
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    ApiTesterComponent.prototype.beutifyJson = function () {
        try {
            this.apiDetails.body = JSON.stringify(this._json.transform(this.apiDetails.body), null, 2);
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @param choice
     * @description this function is used for calling respective api
     */
    ApiTesterComponent.prototype.callApi = function (choice) {
        try {
            switch (choice) {
                case "GET":
                    this.getApi();
                    break;
                case "POST":
                    this.postApi();
                    break;
                case "PUT":
                    this.putApi();
                    break;
                case "DELETE":
                    this.deleteApi();
                    break;
                default:
                    console.error("In default case");
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used for calling get api
     */
    ApiTesterComponent.prototype.getApi = function () {
        var _this = this;
        try {
            this.loading = true;
            this._postman.get(this.apiDetails.url).subscribe(function (res) {
                console.log(res);
                if (res) {
                    _this.loading = false;
                    _this.apiDetails.response = res;
                    _this.output(_this.syntaxHighlight(_this._json.transform(res)));
                }
            }, function (error) {
                console.error(error);
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used for calling put api
     */
    ApiTesterComponent.prototype.putApi = function () {
        var _this = this;
        try {
            this.loading = true;
            this._postman.put(this.apiDetails.url, this.apiDetails.body).subscribe(function (res) {
                console.log(res);
                if (res) {
                    _this.loading = false;
                    _this.apiDetails.response = res;
                    _this.output(_this.syntaxHighlight(_this._json.transform(res)));
                }
            }, function (error) {
                console.error(error);
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used for calling post api
     */
    ApiTesterComponent.prototype.postApi = function () {
        var _this = this;
        try {
            this.loading = true;
            this._postman.post(this.apiDetails.url, this.apiDetails.body).subscribe(function (res) {
                console.log(res);
                if (res) {
                    _this.loading = false;
                    _this.apiDetails.response = res;
                    _this.output(_this.syntaxHighlight(_this._json.transform(res)));
                }
            }, function (error) {
                console.error(error);
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used for calling delete api
     */
    ApiTesterComponent.prototype.deleteApi = function () {
        var _this = this;
        try {
            this.loading = true;
            this._postman.delete(this.apiDetails.url).subscribe(function (res) {
                console.log(res);
                if (res) {
                    _this.loading = false;
                    _this.apiDetails.response = res;
                    _this.output(_this.syntaxHighlight(_this._json.transform(res)));
                }
            }, function (error) {
                console.error(error);
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    ApiTesterComponent.prototype.output = function (inp) {
        document.getElementById("res-body").innerHTML = inp;
    };
    ApiTesterComponent.prototype.syntaxHighlight = function (json) {
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            var cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                }
                else {
                    cls = 'string';
                }
            }
            else if (/true|false/.test(match)) {
                cls = 'boolean';
            }
            else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    };
    ApiTesterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-api-tester',
            template: __webpack_require__(/*! ./api-tester.component.html */ "./src/app/api-tester/api-tester.component.html"),
            styles: [__webpack_require__(/*! ./api-tester.component.css */ "./src/app/api-tester/api-tester.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_postman_postman_service__WEBPACK_IMPORTED_MODULE_2__["PostmanService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], ApiTesterComponent);
    return ApiTesterComponent;
}());



/***/ }),

/***/ "./src/app/api-tester/file-save.component.html":
/*!*****************************************************!*\
  !*** ./src/app/api-tester/file-save.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-container [formGroup]=\"fileForm\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n        <mat-form-field>\r\n            <input matInput [(ngModel)]=\"fileName\" formControlName=\"fileName\" name=\"fileName\">  \r\n            <mat-error *ngIf=\"fileForm.get('fileName').hasError('required') && fileForm.get('fileName').touched\">\r\n                <strong>Required</strong>\r\n            </mat-error>      \r\n        </mat-form-field>\r\n    </div>\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n        <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n            <button mat-button (click)=\"saveFile()\">Save</button>\r\n        </div>\r\n        <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n            <button mat-button (click)=\"cancel()\">Cancel</button>\r\n        </div>\r\n    </div> \r\n</div>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 padding0 header\">\r\n        <app-header></app-header>\r\n    </div>\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <div clas=\"col-md-12 col-sm-12 col-xs-12 padding0 footer\">\r\n        <app-footer></app-footer>\r\n    </div>\r\n</div>\r\n\r\n<!-- <button (click)=\"getSampleNotification()\">Get Sample Notification</button> -->\r\n\r\n<!-- <app-auth></app-auth> -->"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/products.service */ "./src/app/services/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(swPush, location, prd_service) {
        this.swPush = swPush;
        this.location = location;
        this.prd_service = prd_service;
        this.title = 'app';
        this.VAPID_PUBLIC_KEY = "BA08CYw1WPNcMruNuGLWG29Di94jEkp3W_U_IFKqpIOflwVCOJvsf5nC7aCk_sYNkt_nRVauxzminUH_bNyk8Oc";
        this.disAccNo = "Account Number : ";
        this.disSortCode = "Sort Code : ";
        this.message = "";
        this.mapStyle = {
            "width": "60%",
            "height": "400px"
        };
        this.placeholder = "Name";
        this.list = [];
        //this.state = new StateManager(location);
        console.log(this.state);
    }
    AppComponent.prototype.onSave = function () {
        try {
            console.log("Account Number : ", this.AccountNumber);
            console.log("Sort Code : ", this.SortCode);
            this.disAccNo += this.AccountNumber;
            this.disSortCode += this.SortCode;
        }
        catch (_a) {
            console.error("Error");
        }
    };
    AppComponent.prototype.getBytes = function (iText) {
        var bytes = [];
        for (var i = 0; i < iText.length; ++i) {
            bytes.push(iText.charCodeAt(i));
        }
        return bytes;
    };
    AppComponent.prototype.encrypt = function () {
        // Approach 1
        var keyHex = CryptoJS.enc.Base64.parse("E$@Efd45$#Wddsf#0WSdPSD4");
        var plainKey = "E$@Efd45$#Wddsf#0WSdPSD4";
        var plainIv = "5%&ERfd4";
        console.log(keyHex);
        //var iv = CryptoJS.enc.Base64.parse("5%&ERfd4");
        //var iv = CryptoJS.enc.Utf8.parse("5%&ERfd4");
        /*var encryptd = CryptoJS.TripleDES.encrypt(this.message, keyHex, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });*/
        // Approach 2
        //var keyWords = CryptoJS.enc.Utf8.parse(plainKey);
        //var iv = CryptoJS.enc.Utf8.parse(plainIv);
        var keyWords = CryptoJS.enc.Latin1.parse(plainKey);
        var iv = CryptoJS.enc.Latin1.parse(plainIv);
        console.log(keyWords);
        console.log(iv);
        //var keyWords = this.getBytes(plainKey);
        var messageWords = CryptoJS.enc.Utf8.parse(this.message);
        console.log(messageWords);
        //var desEncryptor = CryptoJS.algo.TripleDES.createEncryptor(keyWords,iv);
        //console.log(desEncryptor);
        var encrypted = CryptoJS.TripleDES.encrypt(messageWords, keyWords, { iv: iv });
        console.log(encrypted);
        var ciphertext = CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
        console.log(ciphertext);
        //var ivWords = CryptoJS.lib.WordArray.create(iv);
        //var encryptd = CryptoJS.TripleDES.encrypt(this.message, keyHex);
        //console.log(encryptd.ciphertext.toString());
        this.message = ciphertext;
        //this.message = encryptd.toString();
    };
    AppComponent.prototype.decrypt = function () {
        var keyHex = CryptoJS.enc.Base64.parse("E$@Efd45$#Wddsf#0WSdPSD4");
        var plainIv = "5%&ERfd4";
        var iv = CryptoJS.enc.Base64.parse("5%&ERfd4");
        var plainKey = "E$@Efd45$#Wddsf#0WSdPSD4";
        /*var decrypted = CryptoJS.TripleDES.decrypt(this.message,keyHex,{
          iv: iv,
          mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });*/
        //var keyWords = CryptoJS.enc.Utf8.parse(plainKey);
        var keyWords = CryptoJS.enc.Latin1.parse(plainKey);
        var iv = CryptoJS.enc.Latin1.parse(plainIv);
        console.log(keyWords);
        console.log(iv);
        //var messageWords = CryptoJS.enc.Utf8.parse(this.message);
        //var messageWords = CryptoJS.enc.Base64.parse(this.message);
        //console.log(messageWords);
        //var desDecryptor = CryptoJS.algo.TripleDES.createEncryptor(keyWords,iv);
        //console.log(desDecryptor);
        var decrypted = CryptoJS.TripleDES.decrypt(this.message, keyWords, { iv: iv });
        console.log(decrypted);
        var plainText = CryptoJS.enc.Utf8.stringify(decrypted);
        console.log(plainText);
        //var decrypted = CryptoJS.TripleDES.decrypt(this.message,plainKey)
        //console.log(decrypted.toString(CryptoJS.enc.Base64));
        this.message = plainText;
    };
    AppComponent.prototype.back = function () {
        try {
            this.state.goBack();
        }
        catch (error) {
            console.error(error);
        }
    };
    AppComponent.prototype.forward = function () {
        try {
            this.state.goForward();
        }
        catch (error) {
            console.error(error);
        }
    };
    AppComponent.prototype.go = function () {
        try {
            this.state.go("localhost:4201/register");
        }
        catch (error) {
            console.error(error);
        }
    };
    AppComponent.prototype.onSelect = function (iEvent) {
        try {
            this.roll = iEvent;
        }
        catch (error) {
            console.error(error);
        }
    };
    AppComponent.prototype.setId = function () {
        this.id = this.roll;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.subscribeToNotifications();
    };
    AppComponent.prototype.subscribeToNotifications = function () {
        this.swPush.requestSubscription({
            serverPublicKey: this.VAPID_PUBLIC_KEY
        })
            .then(function (sub) { console.log(sub); })
            .catch(function (err) { return console.error("Could not subscribe to notifications", err); });
    };
    AppComponent.prototype.getSampleNotification = function () {
        try {
            this.prd_service.sendNotification().subscribe(function (res) {
                console.log(res);
            }, function (error) {
                console.error(error);
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwPush"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
/* harmony import */ var ng4_popover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng4-popover */ "./node_modules/ng4-popover/index.js");
/* harmony import */ var ng4_popover__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng4_popover__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _mech_mech_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mech/mech.component */ "./src/app/mech/mech.component.ts");
/* harmony import */ var _mails_mails_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mails/mails.component */ "./src/app/mails/mails.component.ts");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rating/rating.component */ "./src/app/rating/rating.component.ts");
/* harmony import */ var _image_gallary_image_gallary_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./image-gallary/image-gallary.component */ "./src/app/image-gallary/image-gallary.component.ts");
/* harmony import */ var _addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./addproduct/addproduct.component */ "./src/app/addproduct/addproduct.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _customcheckbox_customcheckbox_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./customcheckbox/customcheckbox.component */ "./src/app/customcheckbox/customcheckbox.component.ts");
/* harmony import */ var _itr_itr_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./itr/itr.component */ "./src/app/itr/itr.component.ts");
/* harmony import */ var _multiple_maps_multiple_maps_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./multiple-maps/multiple-maps.component */ "./src/app/multiple-maps/multiple-maps.component.ts");
/* harmony import */ var _custom_autocomplete_custom_autocomplete_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./custom-autocomplete/custom-autocomplete.component */ "./src/app/custom-autocomplete/custom-autocomplete.component.ts");
/* harmony import */ var _custom_drop_custom_drop_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./custom-drop/custom-drop.component */ "./src/app/custom-drop/custom-drop.component.ts");
/* harmony import */ var _rules_step_rules_step_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./rules-step/rules-step.component */ "./src/app/rules-step/rules-step.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _ruletype_ruletype_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ruletype/ruletype.component */ "./src/app/ruletype/ruletype.component.ts");
/* harmony import */ var _rulefilters_rulefilters_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./rulefilters/rulefilters.component */ "./src/app/rulefilters/rulefilters.component.ts");
/* harmony import */ var _rulecondition_rulecondition_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./rulecondition/rulecondition.component */ "./src/app/rulecondition/rulecondition.component.ts");
/* harmony import */ var _ruleattribute_ruleattribute_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ruleattribute/ruleattribute.component */ "./src/app/ruleattribute/ruleattribute.component.ts");
/* harmony import */ var _ruletest_ruletest_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ruletest/ruletest.component */ "./src/app/ruletest/ruletest.component.ts");
/* harmony import */ var _ruleattachment_ruleattachment_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ruleattachment/ruleattachment.component */ "./src/app/ruleattachment/ruleattachment.component.ts");
/* harmony import */ var _ruleapproval_ruleapproval_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ruleapproval/ruleapproval.component */ "./src/app/ruleapproval/ruleapproval.component.ts");
/* harmony import */ var _custom_stepper_custom_stepper_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./custom-stepper/custom-stepper.component */ "./src/app/custom-stepper/custom-stepper.component.ts");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/calculator/calculator.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _api_tester_api_tester_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./api-tester/api-tester.component */ "./src/app/api-tester/api-tester.component.ts");
/* harmony import */ var _common_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./common-components/product-card/product-card.component */ "./src/app/common-components/product-card/product-card.component.ts");
/* harmony import */ var _common_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./common-components/pagination/pagination.component */ "./src/app/common-components/pagination/pagination.component.ts");
/* harmony import */ var _common_components_pagination_pageSync__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./common-components/pagination/pageSync */ "./src/app/common-components/pagination/pageSync.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/product-details/product-details.component.ts");
/* harmony import */ var _common_components_qty_counter_qty_counter_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./common-components/qty-counter/qty-counter.component */ "./src/app/common-components/qty-counter/qty-counter.component.ts");
/* harmony import */ var _common_routeGuards_detailsGuard__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./common/routeGuards/detailsGuard */ "./src/app/common/routeGuards/detailsGuard.ts");
/* harmony import */ var _common_components_img_gallary_img_gallary_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./common-components/img-gallary/img-gallary.component */ "./src/app/common-components/img-gallary/img-gallary.component.ts");
/* harmony import */ var _common_components_img_gallary_imgSync__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./common-components/img-gallary/imgSync */ "./src/app/common-components/img-gallary/imgSync.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _map_g_map_g_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./map-g/map-g.component */ "./src/app/map-g/map-g.component.ts");
/* harmony import */ var _common_components_search_search_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./common-components/search/search.component */ "./src/app/common-components/search/search.component.ts");
/* harmony import */ var _common_components_showerror_showerror_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./common-components/showerror/showerror.component */ "./src/app/common-components/showerror/showerror.component.ts");
/* harmony import */ var _cproduct_cproduct_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./cproduct/cproduct.component */ "./src/app/cproduct/cproduct.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _mycart_mycart_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./mycart/mycart.component */ "./src/app/mycart/mycart.component.ts");
/* harmony import */ var _shipping_cart_cart_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./shipping/cart/cart.component */ "./src/app/shipping/cart/cart.component.ts");
/* harmony import */ var _shipping_ship_address_ship_address_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./shipping/ship-address/ship-address.component */ "./src/app/shipping/ship-address/ship-address.component.ts");
/* harmony import */ var _shipping_payment_payment_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./shipping/payment/payment.component */ "./src/app/shipping/payment/payment.component.ts");
/* harmony import */ var _shipping_host_directive__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./shipping//host.directive */ "./src/app/shipping/host.directive.ts");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./summary/summary.component */ "./src/app/summary/summary.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _mech_mech_component__WEBPACK_IMPORTED_MODULE_11__["MechComponent"],
                _mech_mech_component__WEBPACK_IMPORTED_MODULE_11__["CSliceFilter"],
                _mails_mails_component__WEBPACK_IMPORTED_MODULE_12__["MailsComponent"],
                _rating_rating_component__WEBPACK_IMPORTED_MODULE_13__["RatingComponent"],
                _image_gallary_image_gallary_component__WEBPACK_IMPORTED_MODULE_14__["ImageGallaryComponent"],
                _addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_15__["AddproductComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"],
                _customcheckbox_customcheckbox_component__WEBPACK_IMPORTED_MODULE_19__["CustomcheckboxComponent"],
                _itr_itr_component__WEBPACK_IMPORTED_MODULE_20__["ITRComponent"],
                _multiple_maps_multiple_maps_component__WEBPACK_IMPORTED_MODULE_21__["MultipleMapsComponent"],
                _custom_autocomplete_custom_autocomplete_component__WEBPACK_IMPORTED_MODULE_22__["CustomAutocompleteComponent"],
                _custom_autocomplete_custom_autocomplete_component__WEBPACK_IMPORTED_MODULE_22__["postCodePipe"],
                _custom_drop_custom_drop_component__WEBPACK_IMPORTED_MODULE_23__["CustomDropComponent"],
                _rules_step_rules_step_component__WEBPACK_IMPORTED_MODULE_24__["RulesStepComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_25__["DetailsComponent"],
                _ruletype_ruletype_component__WEBPACK_IMPORTED_MODULE_26__["RuletypeComponent"],
                _rulefilters_rulefilters_component__WEBPACK_IMPORTED_MODULE_27__["RulefiltersComponent"],
                _rulecondition_rulecondition_component__WEBPACK_IMPORTED_MODULE_28__["RuleconditionComponent"],
                _ruleattribute_ruleattribute_component__WEBPACK_IMPORTED_MODULE_29__["RuleattributeComponent"],
                _ruletest_ruletest_component__WEBPACK_IMPORTED_MODULE_30__["RuletestComponent"],
                _ruleattachment_ruleattachment_component__WEBPACK_IMPORTED_MODULE_31__["RuleattachmentComponent"],
                _ruleapproval_ruleapproval_component__WEBPACK_IMPORTED_MODULE_32__["RuleapprovalComponent"],
                _custom_stepper_custom_stepper_component__WEBPACK_IMPORTED_MODULE_33__["CustomStepperComponent"],
                _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_34__["CalculatorComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_35__["ChatComponent"],
                _api_tester_api_tester_component__WEBPACK_IMPORTED_MODULE_36__["ApiTesterComponent"],
                _api_tester_api_tester_component__WEBPACK_IMPORTED_MODULE_36__["fileSave"],
                _common_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_37__["ProductCardComponent"],
                _common_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_38__["PaginationComponent"],
                _common_components_pagination_pageSync__WEBPACK_IMPORTED_MODULE_39__["SyncPagination"],
                _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_40__["ProductDetailsComponent"],
                _common_components_qty_counter_qty_counter_component__WEBPACK_IMPORTED_MODULE_41__["QtyCounterComponent"],
                _common_components_img_gallary_img_gallary_component__WEBPACK_IMPORTED_MODULE_43__["ImgGallaryComponent"],
                _common_components_img_gallary_imgSync__WEBPACK_IMPORTED_MODULE_44__["SyncImage"],
                _map_g_map_g_component__WEBPACK_IMPORTED_MODULE_47__["MapGComponent"],
                _common_components_search_search_component__WEBPACK_IMPORTED_MODULE_48__["SearchComponent"],
                _common_components_search_search_component__WEBPACK_IMPORTED_MODULE_48__["filterPipe"],
                _common_components_showerror_showerror_component__WEBPACK_IMPORTED_MODULE_49__["ShowerrorComponent"],
                _cproduct_cproduct_component__WEBPACK_IMPORTED_MODULE_50__["CProductComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_51__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_52__["FooterComponent"],
                _mycart_mycart_component__WEBPACK_IMPORTED_MODULE_53__["MycartComponent"],
                _shipping_cart_cart_component__WEBPACK_IMPORTED_MODULE_54__["CartComponent"],
                _shipping_ship_address_ship_address_component__WEBPACK_IMPORTED_MODULE_55__["ShipAddressComponent"],
                _shipping_payment_payment_component__WEBPACK_IMPORTED_MODULE_56__["PaymentComponent"],
                _shipping_host_directive__WEBPACK_IMPORTED_MODULE_57__["HostDirective"],
                _summary_summary_component__WEBPACK_IMPORTED_MODULE_58__["SummaryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ng4_popover__WEBPACK_IMPORTED_MODULE_7__["PopoverModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _routing_routing_module__WEBPACK_IMPORTED_MODULE_6__["RoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_45__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_46__["environment"].production })
            ],
            entryComponents: [_api_tester_api_tester_component__WEBPACK_IMPORTED_MODULE_36__["fileSave"], _shipping_cart_cart_component__WEBPACK_IMPORTED_MODULE_54__["CartComponent"], _shipping_ship_address_ship_address_component__WEBPACK_IMPORTED_MODULE_55__["ShipAddressComponent"], _shipping_payment_payment_component__WEBPACK_IMPORTED_MODULE_56__["PaymentComponent"]],
            providers: [_common_routeGuards_detailsGuard__WEBPACK_IMPORTED_MODULE_42__["DetailsGuards"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calculator/calculator.component.css":
/*!*****************************************************!*\
  !*** ./src/app/calculator/calculator.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/calculator/calculator.component.html":
/*!******************************************************!*\
  !*** ./src/app/calculator/calculator.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n  <div class=\"col-md-6 col-xs-6 col-sm-6\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n      <mat-form-field>\r\n        <input type=\"number\" [(ngModel)]=\"equation\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n      <mat-form-field>\r\n        <input type=\"number\" [(ngModel)]=\"a\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n      <mat-form-field>\r\n        <input type=\"number\" [(ngModel)]=\"b\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n      <mat-form-field>\r\n        <input type=\"number\" [(ngModel)]=\"equation\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n      <mat-form-field>\r\n        <input type=\"number\" [(ngModel)]=\"c\">\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/calculator/calculator.component.ts":
/*!****************************************************!*\
  !*** ./src/app/calculator/calculator.component.ts ***!
  \****************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent() {
    }
    CalculatorComponent.prototype.ngOnInit = function () {
        this.solveEquation(1, 1, -12);
    };
    /**
     * @author SSW
     * @description this function is used for finding factor of the equation
     */
    CalculatorComponent.prototype.solveEquation = function (a, b, c) {
        try {
            var ans = ((-1 * a) + Math.sqrt((b * b) - (4 * a * c))) / (2 * a);
            var ans1 = ((-1 * a) - Math.sqrt((b * b) - (4 * a * c))) / (2 * a);
            console.log(ans, ans1);
        }
        catch (error) {
            console.error(error);
        }
    };
    CalculatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calculator',
            template: __webpack_require__(/*! ./calculator.component.html */ "./src/app/calculator/calculator.component.html"),
            styles: [__webpack_require__(/*! ./calculator.component.css */ "./src/app/calculator/calculator.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CalculatorComponent);
    return CalculatorComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  chat works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/common-components/img-gallary/img-gallary.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/common-components/img-gallary/img-gallary.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-show{\r\n    height: 250px;\r\n    width: 100%;\r\n    background-size:100% 100% !important;\r\n    background-repeat: no-repeat;\r\n    padding:10px;\r\n}\r\n\r\n.img-slide {\r\n    border:1px solid gray;\r\n    height : 40px;\r\n    background-repeat : no-repeat;\r\n    background-size : 100% 100%;\r\n    float:left;\r\n}\r\n\r\n.arrow{\r\n    text-align:center;\r\n    padding-top:1%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/common-components/img-gallary/img-gallary.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/common-components/img-gallary/img-gallary.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n  <div class=\"col-md-12 col-sm-12 col-xs-12 img-show\"\r\n  [ngStyle]=\"{'background-image': 'url(' + (filePath + currentImage) + ')'}\"></div>\r\n  <div class=\"col-md-12 col-sm-12 col-xs-12 img-list\">\r\n    <div class=\"img-slide arrow\" [ngStyle]=\"{'width' : 100 / (showCount + 2) + '%'}\"><span (click)=\"slide(-1)\"><i class=\"fa fa-angle-left fa-2x\" aria-hidden=\"true\"></i></span></div>\r\n    <div class=\"img-slide\" *ngFor=\"let img of imageList|syncImage:showCount:start;let i = index;\" [ngStyle]=\"{'background-image': 'url(' + (filePath + img) + ')','width' : 100 / (showCount + 2) + '%'}\" (click)=\"setImage(img)\"></div>\r\n    <div class=\"img-slide arrow\" [ngStyle]=\"{'width' : 100 / (showCount + 2) + '%'}\"><span (click)=\"slide(1)\"><i class=\"fa fa-angle-right fa-2x\" aria-hidden=\"true\"></i></span></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/common-components/img-gallary/img-gallary.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/common-components/img-gallary/img-gallary.component.ts ***!
  \************************************************************************/
/*! exports provided: ImgGallaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgGallaryComponent", function() { return ImgGallaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImgGallaryComponent = /** @class */ (function () {
    function ImgGallaryComponent() {
        this.start = 0;
        try {
            this.filePath = "./assets/products/Mech/images/";
        }
        catch (error) {
            console.error(error);
        }
    }
    ImgGallaryComponent.prototype.ngOnInit = function () {
        try {
        }
        catch (error) {
            console.error(error);
        }
    };
    ImgGallaryComponent.prototype.setImage = function (img) {
        try {
            this.currentImage = img;
        }
        catch (error) {
            console.error(error);
        }
    };
    ImgGallaryComponent.prototype.getStyle = function (img) {
        return {
            "width": 100 / (this.showCount + 2) + "%",
            "background-image": "url('" + this.filePath + img + "')"
        };
    };
    ImgGallaryComponent.prototype.ngOnChanges = function () {
        try {
            if (this.imageList && this.imageList.length > 0) {
                this.currentImage = this.imageList[0];
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    ImgGallaryComponent.prototype.slide = function (iSlide) {
        try {
            if (((this.start + this.showCount) < this.imageList.length - 1 && iSlide == 1) || (this.start > 0 && iSlide == -1))
                this.start += iSlide;
        }
        catch (error) {
            console.error(error);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ImgGallaryComponent.prototype, "imageList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ImgGallaryComponent.prototype, "showCount", void 0);
    ImgGallaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-img-gallary',
            template: __webpack_require__(/*! ./img-gallary.component.html */ "./src/app/common-components/img-gallary/img-gallary.component.html"),
            styles: [__webpack_require__(/*! ./img-gallary.component.css */ "./src/app/common-components/img-gallary/img-gallary.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImgGallaryComponent);
    return ImgGallaryComponent;
}());



/***/ }),

/***/ "./src/app/common-components/img-gallary/imgSync.ts":
/*!**********************************************************!*\
  !*** ./src/app/common-components/img-gallary/imgSync.ts ***!
  \**********************************************************/
/*! exports provided: SyncImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncImage", function() { return SyncImage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SyncImage = /** @class */ (function () {
    function SyncImage() {
    }
    SyncImage.prototype.transform = function (iArr, count, start) {
        try {
            if (iArr) {
                var tempArr = [];
                for (var i = start; count > 0; i++, count--) {
                    if (i < iArr.length && (start + count) < iArr.length)
                        tempArr.push(iArr[i]);
                }
                return tempArr;
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    SyncImage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'syncImage'
        })
    ], SyncImage);
    return SyncImage;
}());



/***/ }),

/***/ "./src/app/common-components/pagination/pageSync.ts":
/*!**********************************************************!*\
  !*** ./src/app/common-components/pagination/pageSync.ts ***!
  \**********************************************************/
/*! exports provided: SyncPagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncPagination", function() { return SyncPagination; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SyncPagination = /** @class */ (function () {
    function SyncPagination() {
    }
    SyncPagination.prototype.transform = function (iArr, count, start) {
        try {
            if (iArr) {
                var tempArr = [];
                for (var i = start; count > 0; i++, count--) {
                    tempArr.push(iArr[i]);
                }
                return tempArr;
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    SyncPagination = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'syncPage'
        })
    ], SyncPagination);
    return SyncPagination;
}());



/***/ }),

/***/ "./src/app/common-components/pagination/pageservice.ts":
/*!*************************************************************!*\
  !*** ./src/app/common-components/pagination/pageservice.ts ***!
  \*************************************************************/
/*! exports provided: PagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerService", function() { return PagerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PagerService = /** @class */ (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage, endPage;
        if (totalPages <= 3) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 2) {
                startPage = 1;
                endPage = 3; // replaced 10 with 3
            }
            else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - 2; // replaced 9 with 2
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 1; // replaced 5 with 1
                endPage = currentPage + 1; // replaced 4 with 1
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    PagerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], PagerService);
    return PagerService;
}());



/***/ }),

/***/ "./src/app/common-components/pagination/pagination.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/common-components/pagination/pagination.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*ul{\r\n    padding:0px;\r\n}\r\nul li{\r\n    list-style: none;\r\n    float: left;\r\n}\r\n\r\n.page-item{\r\n    display: block;\r\n    width:30px;\r\n    height: 20px;\r\n    border:1px solid gray;\r\n    margin-right:5px;\r\n    text-align: center;\r\n}*/"

/***/ }),

/***/ "./src/app/common-components/pagination/pagination.component.html":
/*!************************************************************************!*\
  !*** ./src/app/common-components/pagination/pagination.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n <nav aria-label=\"Page navigation example\">\r\n   <ul class=\"pagination\">\r\n      <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === 1}\" (click)=\"setPage(1)\">\r\n        <a class=\"page-link\" aria-label=\"Previous\">\r\n          <span aria-hidden=\"true\">&laquo;</span>\r\n        </a>\r\n      </li>\r\n      <li *ngFor=\"let page of pages;let i = index;\" class=\"page-item\" (click)=\"setPage(page)\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n        <a class=\"page-link\">{{page}}</a>\r\n     </li>\r\n     <li class=\"page-item\" [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" (click)=\"setPage(pager.totalPages)\">\r\n        <a class=\"page-link\" aria-label=\"Next\">\r\n          <span aria-hidden=\"true\">&raquo;</span>\r\n        </a>\r\n     </li>\r\n   </ul>\r\n </nav>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/common-components/pagination/pagination.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/common-components/pagination/pagination.component.ts ***!
  \**********************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/search/search.service */ "./src/app/services/search/search.service.ts");
/* harmony import */ var _pageservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pageservice */ "./src/app/common-components/pagination/pageservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(pageservice, searchservice, cdr) {
        this.pageservice = pageservice;
        this.searchservice = searchservice;
        this.cdr = cdr;
        this.pageDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pages = [];
        this.counter = Array;
        try {
            this.currentPage = 0;
        }
        catch (error) {
            console.error(error);
        }
    }
    PaginationComponent.prototype.ngOnInit = function () {
        try {
        }
        catch (error) {
            console.error(error);
        }
    };
    PaginationComponent.prototype.ngOnChanges = function () {
        try {
            //if(this.currentPage){
            this.pager = this.pageservice.getPager(this.totalRecords, 0, 8);
            this.pages = this.pager.pages;
            this.currentPage = this.pager.currentPage;
            if (this.pageClick)
                this.pageClick.emit(this.pager);
            //this.searchservice.setPageClick(this.pager);
            console.log(this.pager);
            //}
        }
        catch (error) {
            console.error(error);
        }
    };
    PaginationComponent.prototype.getPages = function () {
        try {
            return Math.ceil(this.totalRecords / this.recordsPerPage);
        }
        catch (error) {
            console.error(error);
            return null;
        }
    };
    PaginationComponent.prototype.setPage = function (iPage) {
        try {
            this.pager = this.pageservice.getPager(this.totalRecords, iPage, 8);
            this.pages = this.pager.pages;
            this.currentPage = this.pager.currentPage;
            if (this.pageClick)
                this.pageClick.emit(this.pager);
            //this.searchservice.setPageClick(this.pager);
            console.log(this.pager);
            // get current page of items
            //this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
        }
        catch (error) {
            console.error(error);
        }
    };
    PaginationComponent.prototype.ngOnDestroy = function () {
        try {
            if (!this.cdr['destroyed']) {
                this.cdr.detectChanges();
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    PaginationComponent.prototype.ngAfterContentChecked = function () {
        try {
            this.cdr.detectChanges();
        }
        catch (error) {
            console.error(error);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "totalRecords", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "recordsPerPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "currentPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PaginationComponent.prototype, "paginationType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "pageDetails", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "pageClick", void 0);
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/common-components/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/common-components/pagination/pagination.component.css")]
        }),
        __metadata("design:paramtypes", [_pageservice__WEBPACK_IMPORTED_MODULE_2__["PagerService"], _services_search_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/common-components/product-card/product-card.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/common-components/product-card/product-card.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".service-title {\r\n    font-size: 14px;\r\n    font-family: Roboto-bold;\r\n    color:#000;\r\n}\r\n.service-cards{\r\n    margin-left:5px;\r\n}\r\n.checked{\r\n    color:orange;\r\n}\r\n.select-button {\r\n    width: 100%;\r\n    border-radius: 3px;\r\n    height: 30px;\r\n    font-size: 14px;\r\n    color:#fff;\r\n    background-color: #337ab7;\r\n}\r\n.image-container {\r\n    min-height: 60%;\r\n}\r\n.text-container {\r\n    padding: 15px 15px 0px;\r\n    min-height: 20%;\r\n}\r\n.rating-container{\r\n    padding-left:15px;\r\n    min-height: 20%;\r\n}\r\n.card-height{\r\n    height:280px;\r\n    border-radius: 4px;\r\n}\r\n.imglist {\r\n    background-size: contain;\r\n    border-radius: 4px 4px 0px 0px;\r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n}\r\n.table-wrapper {\r\n    /*border-bottom: 1px solid #cdcdcd;*/\r\n    padding-top:15px;\r\n}\r\nmat-card-content{\r\n    background-size:100% 100% !important;\r\n}\r\n.cls-dis{\r\n    border-radius: 5px;\r\n    background: #54e954;\r\n    width: 50px;\r\n    font-family: fantasy;\r\n    height: 20px;\r\n    /* opacity: 0.8; */\r\n    text-align: center;\r\n    font-size: 13px;\r\n}\r\n@media (max-width: 500px) {\r\n    .listimgdiv {\r\n        width: 100%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/common-components/product-card/product-card.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/common-components/product-card/product-card.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 padding0 service-cards\" (click)=\"clicked.next(product)\">\r\n  <mat-card class=\"card-height\">\r\n      <mat-card-content class=\"image-container imglist\" [ngStyle]=\"{'backgroundImage':'url(' + filePath + product.productImages[0] + ')'}\">\r\n            <div *ngIf=\"product.productDiscount\" class=\"cls-dis\">{{product.productDiscount}} off</div>\r\n      </mat-card-content>\r\n      <mat-card-content class=\"text-container\">\r\n          <mat-card-title class=\"service-title\"><a>{{product.productName}}</a></mat-card-title>\r\n      </mat-card-content>\r\n      <mat-card-content class=\"rating-container\">\r\n        <span><b>&pound; {{ numberFormat(product.productPrice,2)}}</b></span>\r\n         <app-rating [rating]=\"product.productRating\" [enableRating]=\"true\"></app-rating>\r\n      </mat-card-content>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/common-components/product-card/product-card.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/common-components/product-card/product-card.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent(cdr) {
        this.cdr = cdr;
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        try {
            this.filePath = "./assets/products/Mech/images/";
        }
        catch (error) {
            console.error(error);
        }
    }
    ProductCardComponent.prototype.ngOnInit = function () {
    };
    ProductCardComponent.prototype.numberFormat = function (iNumber, iPrecision) {
        try {
            return parseFloat(iNumber).toFixed(iPrecision);
        }
        catch (error) {
            console.error(error);
            return null;
        }
    };
    ProductCardComponent.prototype.showDetails = function () {
        try {
            if (this.clicked) {
                this.clicked.emit(Object.assign({}, this.product));
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    ProductCardComponent.prototype.ngAfterViewInit = function () {
        try {
            jQuery(document).ready(function () {
                jQuery('.image-container').jqzoom({
                    zoomType: 'standard',
                    lens: true,
                    preloadImages: false,
                    alwaysOn: true
                });
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    ProductCardComponent.prototype.ngOnDestroy = function () {
        try {
            if (!this.cdr['destroyed']) {
                this.cdr.detectChanges();
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "clicked", void 0);
    ProductCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-card',
            template: __webpack_require__(/*! ./product-card.component.html */ "./src/app/common-components/product-card/product-card.component.html"),
            styles: [__webpack_require__(/*! ./product-card.component.css */ "./src/app/common-components/product-card/product-card.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./src/app/common-components/qty-counter/qty-counter.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/common-components/qty-counter/qty-counter.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".counter button{\r\n    width:100% !important;\r\n    height:34px !important;\r\n}\r\n\r\n.counter button,input{\r\n    border-radius: 0px !important;\r\n}\r\n\r\n.disabled{\r\n    pointer-events: none;\r\n    cursor: none !important;\r\n    opacity: 0.7 !important;\r\n}"

/***/ }),

/***/ "./src/app/common-components/qty-counter/qty-counter.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/common-components/qty-counter/qty-counter.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 padding0 counter\">\r\n  <div class=\"col-md-3 col-sm-3 col-xs-3 padding0\">\r\n    <button (click)=\"dec()\" class=\"btn\" [ngClass]=\"{'disabled':quantity <= 0}\"><span><i class=\"fa fa-minus fa-lg\" aria-hidden=\"true\"></i></span></button>\r\n  </div>\r\n  <div class=\"col-md-6 col-sm-6 col-xs-6 padding0\">\r\n    <input [(ngModel)]=\"quantity\" (focusout)=\"getQuantity.next(quantity)\" class=\"form-control\" style=\"text-align: center;\">\r\n  </div>\r\n  <div class=\"col-md-3 col-sm-3 col-xs-3 padding0\">\r\n      <button (click)=\"inc()\" class=\"btn\"><span><i class=\"fa fa-plus fa-lg\" aria-hidden=\"true\"></i></span></button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/common-components/qty-counter/qty-counter.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/common-components/qty-counter/qty-counter.component.ts ***!
  \************************************************************************/
/*! exports provided: QtyCounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QtyCounterComponent", function() { return QtyCounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QtyCounterComponent = /** @class */ (function () {
    function QtyCounterComponent() {
        this.getQuantity = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    QtyCounterComponent.prototype.inc = function () {
        try {
            this.quantity += 1;
            if (this.getQuantity)
                this.getQuantity.emit(this.quantity);
        }
        catch (error) {
            console.error(error);
        }
    };
    QtyCounterComponent.prototype.dec = function () {
        try {
            this.quantity -= 1;
            if (this.getQuantity)
                this.getQuantity.emit(this.quantity);
        }
        catch (error) {
            console.error(error);
        }
    };
    QtyCounterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], QtyCounterComponent.prototype, "quantity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], QtyCounterComponent.prototype, "getQuantity", void 0);
    QtyCounterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-qty-counter',
            template: __webpack_require__(/*! ./qty-counter.component.html */ "./src/app/common-components/qty-counter/qty-counter.component.html"),
            styles: [__webpack_require__(/*! ./qty-counter.component.css */ "./src/app/common-components/qty-counter/qty-counter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QtyCounterComponent);
    return QtyCounterComponent;
}());



/***/ }),

/***/ "./src/app/common-components/search/search.component.css":
/*!***************************************************************!*\
  !*** ./src/app/common-components/search/search.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/common-components/search/search.component.html":
/*!****************************************************************!*\
  !*** ./src/app/common-components/search/search.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n    <div class=\"input-group\">\r\n        <input type=\"text\" [(ngModel)]=\"search\" (keyup)=\"searchItem()\" class=\"form-control\" placeholder=\"Search\" aria-describedby=\"basic-addon2\">\r\n        <span class=\"input-group-addon\" id=\"basic-addon2\" (click)=\"searchItem()\">Search</span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/common-components/search/search.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/common-components/search/search.component.ts ***!
  \**************************************************************/
/*! exports provided: filterPipe, SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterPipe", function() { return filterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/search/search.service */ "./src/app/services/search/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var filterPipe = /** @class */ (function () {
    function filterPipe() {
    }
    filterPipe.prototype.transform = function (items, search, keys) {
        try {
            if (items && items instanceof Array && items.length > 0 && search && keys instanceof Array && keys.length > 0) {
                return items.filter(function (x) {
                    var present = false;
                    keys.forEach(function (y) {
                        if (x[y].includes(search))
                            present = true;
                    });
                    if (present)
                        return x;
                });
            }
        }
        catch (error) {
            console.error(error);
            return items ? items : [];
        }
    };
    filterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: "filter"
        })
    ], filterPipe);
    return filterPipe;
}());

var SearchComponent = /** @class */ (function () {
    function SearchComponent(filter, searchservice) {
        this.filter = filter;
        this.searchservice = searchservice;
        this.getSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemsCopy = [];
    }
    SearchComponent.prototype.ngOnChanges = function () {
        try {
            if (this.items && this.itemsCopy.length == 0) {
                this.itemsCopy = this.itemsCopy.concat(this.items);
            }
        }
        catch (error) {
        }
    };
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        try {
            this.searchservice.search.subscribe(function (result) {
                _this.items = result.items;
                _this.itemsCopy = _this.itemsCopy.concat(_this.items);
                _this.keys = result.keys;
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    SearchComponent.prototype.searchItem = function () {
        try {
            //if(this.getSearch){
            if (this.search) {
                this.searchservice.completeSearch(this.filter.transform(this.itemsCopy, this.search, this.keys));
                //this.getSearch.emit(this.filter.transform(this.itemsCopy,this.search,this.keys));
            }
            else {
                this.searchservice.completeSearch(this.itemsCopy);
                //this.getSearch.emit(this.itemsCopy);
            }
            //}
        }
        catch (error) {
            console.error(error);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SearchComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SearchComponent.prototype, "getSearch", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SearchComponent.prototype, "keys", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/common-components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/common-components/search/search.component.css")],
            providers: [filterPipe]
        }),
        __metadata("design:paramtypes", [filterPipe, _services_search_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/common-components/showerror/showerror.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/common-components/showerror/showerror.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\r\n    width: 75%;\r\n    height: 250px;\r\n    border: 1px solid black;\r\n    border-radius: 10px;\r\n    box-shadow: 5px 15px 14px #cde6f8;\r\n    margin-top: 10px !important;\r\n}\r\n.msg{\r\n    color:lightseagreen;\r\n    font-size:18px;\r\n    font-family: cursive;\r\n    position: relative;\r\n    top: 25%;\r\n}\r\n.msg i{\r\n    margin-right:10px;\r\n}"

/***/ }),

/***/ "./src/app/common-components/showerror/showerror.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/common-components/showerror/showerror.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10 col-sm-10 col-xs-10 box\" style=\"text-align: center\">\r\n    <span class=\"msg\"><i class=\"fa fa-exclamation-triangle fa-3x\" aria-hidden=\"true\"></i>{{msg}}</span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/common-components/showerror/showerror.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/common-components/showerror/showerror.component.ts ***!
  \********************************************************************/
/*! exports provided: ShowerrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowerrorComponent", function() { return ShowerrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowerrorComponent = /** @class */ (function () {
    function ShowerrorComponent() {
    }
    ShowerrorComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ShowerrorComponent.prototype, "msg", void 0);
    ShowerrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-showerror',
            template: __webpack_require__(/*! ./showerror.component.html */ "./src/app/common-components/showerror/showerror.component.html"),
            styles: [__webpack_require__(/*! ./showerror.component.css */ "./src/app/common-components/showerror/showerror.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShowerrorComponent);
    return ShowerrorComponent;
}());



/***/ }),

/***/ "./src/app/common/routeGuards/detailsGuard.ts":
/*!****************************************************!*\
  !*** ./src/app/common/routeGuards/detailsGuard.ts ***!
  \****************************************************/
/*! exports provided: DetailsGuards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsGuards", function() { return DetailsGuards; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsGuards = /** @class */ (function () {
    function DetailsGuards(_prdService, route) {
        this._prdService = _prdService;
        this.route = route;
    }
    DetailsGuards.prototype.canActivate = function () {
        try {
            if (this._prdService.currentProduct) {
                return true;
            }
            else {
                this.route.navigate(["mech"]).then(function () {
                    console.log("Routing Listing Succesful");
                }, function (error) {
                    console.error(error);
                });
            }
        }
        catch (error) {
            console.error(error);
        }
        return true;
    };
    DetailsGuards = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], DetailsGuards);
    return DetailsGuards;
}());



/***/ }),

/***/ "./src/app/cproduct/cproduct.component.css":
/*!*************************************************!*\
  !*** ./src/app/cproduct/cproduct.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cproduct/cproduct.component.html":
/*!**************************************************!*\
  !*** ./src/app/cproduct/cproduct.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  cproduct works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/cproduct/cproduct.component.ts":
/*!************************************************!*\
  !*** ./src/app/cproduct/cproduct.component.ts ***!
  \************************************************/
/*! exports provided: CProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CProductComponent", function() { return CProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CProductComponent = /** @class */ (function () {
    function CProductComponent() {
    }
    CProductComponent.prototype.ngOnInit = function () {
    };
    CProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cproduct',
            template: __webpack_require__(/*! ./cproduct.component.html */ "./src/app/cproduct/cproduct.component.html"),
            styles: [__webpack_require__(/*! ./cproduct.component.css */ "./src/app/cproduct/cproduct.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CProductComponent);
    return CProductComponent;
}());



/***/ }),

/***/ "./src/app/custom-autocomplete/custom-autocomplete.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/custom-autocomplete/custom-autocomplete.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\r\n    width: 100%;\r\n    max-height: 250px;\r\n    overflow-y:auto;\r\n}\r\n.box p{\r\n    margin:0px !important;\r\n    padding: 5px !important;\r\n}\r\n.bt-border{\r\n    border-bottom:1px solid darkgray !important;\r\n}\r\n.box p:hover{\r\n    background:#eee;\r\n}\r\n.autoList{\r\n    padding:0px !important;\r\n    border:1px solid darkgray;\r\n}\r\n.input-box{\r\n    padding: 5px 20px 0px 20px!important;\r\n}\r\n.input-box .input{\r\n    width:70%;\r\n    float:left;\r\n}\r\n.input-box .actions{\r\n    width:20%;\r\n}\r\n.mat-card.mat-card{\r\n    border:0px !important;\r\n    margin:0px !important;\r\n}"

/***/ }),

/***/ "./src/app/custom-autocomplete/custom-autocomplete.component.html":
/*!************************************************************************!*\
  !*** ./src/app/custom-autocomplete/custom-autocomplete.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"autoCompleteForm\" class=\"col-md-4 col-sm-4 col-xs-4 autoList\">\r\n  <div class=\"col-md-12 col-sm-12 col-xs-12 input-box\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n        <mat-form-field>\r\n            <span matSuffix>\r\n                <i *ngIf=\"showLoad\" class=\"fa fa-spinner fa-pulse fa-lg fa-fw\" style=\"color:#993366;\"></i>\r\n                <i class=\"fa fa-search search-icon\" (click)=\"search();\"aria-hidden=\"true\" style=\"font-size: 16px;\" [ngStyle]=\"{'pointer-events': autoCompleteForm.get('postCode').valid ? '' :'none'}\"></i>\r\n                <span style=\"font-weight: bold;color:gray;margin:0px 5px 0px 5px;pointer-events:none;\">|</span>\r\n                <i [ngStyle]=\"{'pointer-events': postCode ? '' :'none'}\" class=\"fa fa-close close-icon\" (click)=\"clear();\"></i>\r\n            </span>\r\n            <input matInput [(ngModel)]=\"postCode\" formControlName=\"postCode\" name=\"postCode\" (keyup)=\"emptyList()\" (focus)=\"animateDropDown(true);\" (focusout)=\"animateDropDown(false);\">\r\n            <mat-error *ngIf=\"autoCompleteForm.get('postCode').hasError('required') && autoCompleteForm.get('postCode').touched\">\r\n                PostCode is <strong>Required</strong>\r\n            </mat-error>\r\n            <mat-error *ngIf=\"autoCompleteForm.get('postCode').hasError('pattern') && autoCompleteForm.get('postCode').touched\">\r\n                PostCode is <strong>Invalid</strong>\r\n            </mat-error>\r\n        </mat-form-field>\r\n    </div>\r\n  </div>\r\n  <mat-card *ngIf=\"locations && locations.length > 0 && isFocused\">\r\n      <div class=\"box input-box\">\r\n          <p *ngFor=\"let location of locations|postCodePipe : postCode;let i = index;\" (click)=\"setLocation(location);\">\r\n              <i class=\"fa fa-map-marker fa-lg searchmarker\" aria-hidden=\"true\" style=\"margin-right:10px;color:#993366;\"></i>\r\n              <span style=\"font-family: Roboto-Bold; color: #993366;\">{{location.postCode}}</span>\r\n              <span style=\"color:#553c3c;font-size:12px;margin-left:5px;\">{{location.display}}</span>\r\n          </p>\r\n      </div>\r\n  </mat-card>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/custom-autocomplete/custom-autocomplete.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/custom-autocomplete/custom-autocomplete.component.ts ***!
  \**********************************************************************/
/*! exports provided: postCodePipe, CustomAutocompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postCodePipe", function() { return postCodePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomAutocompleteComponent", function() { return CustomAutocompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var postCodeRegex = "^([Gg][Ii][Rr] ?0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z])))) ?[0-9][A-Za-z]{2})$";
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
/************ POST CODE PIPE */

var postCodePipe = /** @class */ (function () {
    function postCodePipe() {
    }
    postCodePipe.prototype.transform = function (data, postCode, latitude, longitude) {
        if (data && data.length > 0) {
            var returnArray = [];
            for (var i = 0; i < data.length; i++) {
                var item = data[i].split(',');
                var temp = item.filter(function (x) { return x != " "; });
                var tempItemAddr = item[0] + "," + item[1] + "," + item[2] + "," + item[3];
                var tempAddr = tempItemAddr.split(',').filter(function (x) { return x !== " "; });
                //let tempAddr = tempItemAddrNew.filter((x) => { return x != " " });
                var str = "";
                var postcode = postCode.indexOf(' ') == -1 ? postCode.toUpperCase().trim().split(/(?=.{3}$)/).join(' ') : postCode.toUpperCase();
                var param = {
                    line1: item[0],
                    line2: item[1],
                    line3: item[2],
                    line4: item[3],
                    locality: item[4],
                    city: item[5].split(' ').join(''),
                    fullAddress: temp.join(','),
                    postCode: postcode,
                    state: item[6].split(' ').join(''),
                    address: data[i],
                    onlyAddress: tempAddr.join(','),
                    display: postcode + ", " + item[0] + ", " + item[5] + ", " + item[6],
                    latitude: (latitude || Math.abs(latitude)) ? latitude : null,
                    longitude: (longitude || Math.abs(longitude)) ? longitude : null
                };
                returnArray.push(param);
            }
            return returnArray;
            //return this.removeDuplicates(returnArray, 'display');
        }
        return [];
    };
    postCodePipe.prototype.removeDuplicates = function (myArr, prop) {
        return myArr.filter(function (obj, pos, arr) {
            return arr.map(function (mapObj) { return mapObj[prop]; }).indexOf(obj[prop]) === pos;
        });
    };
    postCodePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: "postCodePipe"
        })
    ], postCodePipe);
    return postCodePipe;
}());

/***** COMPONENT */
var CustomAutocompleteComponent = /** @class */ (function () {
    function CustomAutocompleteComponent(fb, http) {
        this.fb = fb;
        this.http = http;
        this.commonUrl = "http://orderwork.iniquus.in/api/common/";
        this.locations = [];
        this.isFocused = false;
        this.showLoad = false;
        try {
            this.autoCompleteForm = this.getAutoCompleteForm();
            this.autoCompleteForm.updateValueAndValidity();
        }
        catch (error) {
            console.error(error);
        }
    }
    /**
     * @author SSW
     * @description this function is used for creating autocomplete form
     * @param iObj
     */
    CustomAutocompleteComponent.prototype.getAutoCompleteForm = function (iObj) {
        var _this = this;
        try {
            var formGroup_1;
            if (iObj && Object.keys(iObj).length > 0) {
                formGroup_1 = this.fb.group({
                    postCode: [iObj.location, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(postCodeRegex)]]
                });
            }
            else {
                formGroup_1 = this.fb.group({
                    postCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(postCodeRegex)]]
                });
            }
            formGroup_1.get("postCode").valueChanges.subscribe(function (res) {
                if (formGroup_1.get("postCode").valid) {
                    _this.showLoad = true;
                    _this.getLocationByPostCode({ postCode: formGroup_1.get("postCode").value }).subscribe(function (res) {
                        console.log(res);
                        if (res && res.data) {
                            var data = res.data;
                            if (data && typeof data == 'string') {
                                _this.locations = JSON.parse(data).addresses;
                            }
                            _this.showLoad = false;
                        }
                    });
                }
            });
            return formGroup_1;
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
       * @author SSW
       * @description this function is used filter array according to ivalue
       * @param iArr
       * @param iValue
       */
    CustomAutocompleteComponent.prototype.filter = function (iArr, iValue) {
        try {
            return iArr.filter(function (value) {
                return value.label.toLowerCase().indexOf(iValue.toLowerCase()) > -1;
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used for open/close box
     */
    CustomAutocompleteComponent.prototype.opencloseDropdown = function () {
        try {
            jQuery(".box").animate({
                height: 'toggle'
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    CustomAutocompleteComponent.prototype.ngAfterViewInit = function () {
        try {
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used on initializing component
     */
    CustomAutocompleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        try {
            this.filteredLocation = this.autoCompleteForm.get('postCode').valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (location) { return location ? _this.filter(_this.locations, location) : _this.locations.slice(); }));
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used for animate dropdowns
     * @param iFlag
     */
    CustomAutocompleteComponent.prototype.animateDropDown = function (iFlag) {
        var _this = this;
        try {
            setTimeout(function () {
                _this.isFocused = iFlag;
                _this.opencloseDropdown();
            }, 500);
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used showing alert if error in fetching records=
     * @param error
     */
    CustomAutocompleteComponent.prototype.showAlert = function (error) {
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.message || "Service Error");
    };
    /**
     * @author SSW
     * @description this function is used for gettting locations by postCodes
     * */
    CustomAutocompleteComponent.prototype.getLocationByPostCode = function (param) {
        try {
            var url = this.commonUrl + "addresses/" + param.postCode.trim().replace(' ', '');
            return this.http.get(url, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.showAlert));
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used for clering postcode
     */
    CustomAutocompleteComponent.prototype.clear = function () {
        try {
            this.autoCompleteForm.get('postCode').setValue(null);
            this.autoCompleteForm.get('postCode').updateValueAndValidity({ onlySelf: true, emitEvent: false });
            this.postCode = null;
            this.emptyList();
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used for setting location
     */
    CustomAutocompleteComponent.prototype.setLocation = function (iLocation) {
        try {
            console.log(iLocation);
            // setTimeout(() =>{
            //   this.isFocused = false;
            //},500);
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used for clearing list
     */
    CustomAutocompleteComponent.prototype.emptyList = function () {
        try {
            if (this.postCode)
                this.postCode = this.postCode.toUpperCase();
            this.locations = [];
        }
        catch (error) {
            console.error(error);
        }
    };
    CustomAutocompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-autocomplete',
            template: __webpack_require__(/*! ./custom-autocomplete.component.html */ "./src/app/custom-autocomplete/custom-autocomplete.component.html"),
            styles: [__webpack_require__(/*! ./custom-autocomplete.component.css */ "./src/app/custom-autocomplete/custom-autocomplete.component.css")],
            providers: [postCodePipe]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CustomAutocompleteComponent);
    return CustomAutocompleteComponent;
}());



/***/ }),

/***/ "./src/app/custom-drop/custom-drop.component.css":
/*!*******************************************************!*\
  !*** ./src/app/custom-drop/custom-drop.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drop-box{\r\n    width:100%;\r\n}"

/***/ }),

/***/ "./src/app/custom-drop/custom-drop.component.html":
/*!********************************************************!*\
  !*** ./src/app/custom-drop/custom-drop.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"drop-box\" [formGroup]=\"listForm\">\r\n  <mat-form-field>\r\n    <input matInput placeholder=\"{{placeholder}}\" [matAutocomplete]=\"auto\" formControlName=\"choice\" [(ngModel)]=\"label\" (click)=\"clearFilter()\" (focusout)=\"setDefaultFilter()\">\r\n    <mat-autocomplete #auto=\"matAutocomplete\">\r\n        <mat-option *ngFor=\"let item of filteredList | async\" [value]=\"item.label\" (click)=\"optionSelected(item)\" (onSelectionChange)=\"optionSelected(item)\">\r\n            <span>{{ item.label }}</span>\r\n        </mat-option>\r\n    </mat-autocomplete>\r\n    <mat-error *ngIf=\"listForm.get('choice').hasError('required') && listForm.get('choice').touched\">\r\n      {{placeholder}} is <strong>required</strong>\r\n    </mat-error>\r\n  </mat-form-field>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/custom-drop/custom-drop.component.ts":
/*!******************************************************!*\
  !*** ./src/app/custom-drop/custom-drop.component.ts ***!
  \******************************************************/
/*! exports provided: CustomDropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDropComponent", function() { return CustomDropComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomDropComponent = /** @class */ (function () {
    function CustomDropComponent(fb) {
        this.fb = fb;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        try {
            this.listForm = this.getListForm();
        }
        catch (error) {
            console.error(error);
        }
    }
    ;
    /**
     * @author SSW
     * @description this function is used for creating list form
     * @param iObj
     */
    CustomDropComponent.prototype.getListForm = function (iObj) {
        try {
            var formGroup = void 0;
            if (iObj && Object.keys(iObj).length > 0) {
                formGroup = this.fb.group({
                    choice: ['']
                });
            }
            else {
                formGroup = this.fb.group({
                    choice: ['']
                });
            }
            return formGroup;
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used for clearing filter
     */
    CustomDropComponent.prototype.clearFilter = function () {
        try {
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used on selection of option
     * @param item
     */
    CustomDropComponent.prototype.optionSelected = function (item) {
        try {
            this.id = item.value;
            if (this.selected)
                this.selected.emit(this.id);
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used for setting default filters
     */
    CustomDropComponent.prototype.setDefaultFilter = function () {
        try {
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used filter array according to ivalue
     * @param iArr
     * @param iValue
     */
    CustomDropComponent.prototype.filter = function (iArr, iValue) {
        return iArr.filter(function (value) {
            return value.label.toLowerCase().indexOf(iValue.toLowerCase()) > -1;
        });
    };
    CustomDropComponent.prototype.mapValueToLabel = function (id) {
        try {
            if (this.list && this.list instanceof Array) {
                var index = this.list.findIndex(function (x) { return x.value == id; });
                if (index >= 0) {
                    this.label = this.list[index].label;
                }
                else {
                    this.label = null;
                }
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    CustomDropComponent.prototype.ngOnChanges = function () {
        var _this = this;
        try {
            if (this.list && this.list instanceof Array) {
                this.filteredList = this.listForm.get('choice').valueChanges
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (item) { return item ? _this.filter(_this.list, item) : _this.list.slice(); }));
            }
            if (this.id) {
                this.mapValueToLabel(this.id);
            }
            if (this.required) {
                this.listForm.get('choice').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
                this.listForm.updateValueAndValidity({ onlySelf: true, emitEvent: false });
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    CustomDropComponent.prototype.ngOnInit = function () {
        try {
        }
        catch (error) {
            console.error(error);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CustomDropComponent.prototype, "list", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CustomDropComponent.prototype, "required", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomDropComponent.prototype, "selected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CustomDropComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CustomDropComponent.prototype, "placeholder", void 0);
    CustomDropComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-drop',
            template: __webpack_require__(/*! ./custom-drop.component.html */ "./src/app/custom-drop/custom-drop.component.html"),
            styles: [__webpack_require__(/*! ./custom-drop.component.css */ "./src/app/custom-drop/custom-drop.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CustomDropComponent);
    return CustomDropComponent;
}());



/***/ }),

/***/ "./src/app/custom-stepper/custom-stepper.component.css":
/*!*************************************************************!*\
  !*** ./src/app/custom-stepper/custom-stepper.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".step-box{\r\n    float: left;\r\n    padding:15px 8px;\r\n}\r\n.step-title{\r\n    font-family: sans-serif;\r\n    font-size:0.7vw !important;\r\n    margin-top:5px;\r\n    font-weight: 550 !important;\r\n    text-align: center;\r\n}\r\n.disabled{\r\n    pointer-events: none;\r\n    opacity: 0.8;\r\n}\r\n.step-box .step-number{\r\n    text-align: center;\r\n}\r\n.step-box .step-number button{\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 5px;\r\n}\r\n.line{\r\n    width:100%;\r\n    height: 5px;\r\n    background-color: gray;\r\n}\r\n.active{\r\n    background: #53a1d8 !important;\r\n    color: white !important;\r\n    z-index: -1;\r\n    border:1px solid #53a1d8 !important;\r\n}\r\n.action-btn{\r\n    width: 100px;\r\n    background: #53a1d8;\r\n    font-weight: bold;\r\n    color: white;\r\n    border: 0 none;\r\n    font-family: sans-serif;\r\n    border-radius: 1px;\r\n    cursor: pointer;\r\n    padding: 10px 5px;\r\n    margin: 10px 5px;\r\n}\r\n.nxt{\r\n    float: right;\r\n}\r\n.mat-card.mat-card {\r\n    background: white;\r\n    border: 0 none;\r\n    border-radius: 3px;\r\n    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4) !important;\r\n    padding: 20px 30px;\r\n    box-sizing: border-box;\r\n    width: 98.5%;\r\n    margin: 0px 10px;\r\n}\r\n.progress-bar{\r\n\r\n}\r\n.fs-title{\r\n    font-size: 15px;\r\n    text-transform: uppercase;\r\n    color: #3f3f40;\r\n    height: 32px;\r\n    padding: 10px;\r\n    margin-bottom: 10px;\r\n    text-align: left;\r\n    background: #eee;\r\n    font-family: sans-serif;\r\n}\r\n.fs-subtitle {\r\n    font-weight: normal;\r\n    font-size: 13px;\r\n    color: #666;\r\n    margin-bottom: 20px;\r\n    text-align: center;\r\n}\r\nh2{\r\n    font-weight: 700 !important;\r\n}\r\n.top-spacing{\r\n    margin-top: 15px !important;\r\n}\r\n.completed_h_line{\r\n    background: #53a1d8;\r\n}\r\n.in-completed_h_line{\r\n    background: #dddddd;\r\n}\r\n.h_line { \r\n    width: 80%;\r\n    height: 4px;\r\n    position: absolute;\r\n    top: 30px;\r\n    z-index: 11;\r\n    left: 60%;\r\n}\r\n.prg-bar .col-md-2 {\r\n    width: 12.5%;\r\n}"

/***/ }),

/***/ "./src/app/custom-stepper/custom-stepper.component.html":
/*!**************************************************************!*\
  !*** ./src/app/custom-stepper/custom-stepper.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 stepper padding0\">\r\n  <div>\r\n    <mat-card>\r\n      <div class=\"prg-bar\" [ngClass]=\"{'disabled':isLinear}\">\r\n          <div *ngFor=\"let step of steps;let i = index\" class=\"step-box col-md-2\">\r\n              <div class=\"step-number\"><div class=\"h_line\" *ngIf=\"i < steps.length -1\" [ngClass]=\"{'completed_h_line':activeStep.step > step.step , 'in-completed_h_line': activeStep.step <= step.step}\"></div><button [ngClass]=\"{'active':activeStep.step >= i+1 }\" (click)=\"stepClick(step)\">{{i+1}}</button></div>\r\n              <div class=\"step-title hidden-xs\">{{step.title}}</div>\r\n          </div>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n  \r\n  <div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n    <mat-card class=\"stepBlock\">\r\n      <div *ngFor=\"let step of steps;let i = index;\">\r\n          <div *ngIf=\"step.step == activeStep.step\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                  <h2 class=\"fs-title\">{{step.title}}</h2>\r\n                  <h3 class=\"fs-subtitle\">{{\"step \" + step.step + \" of \" + steps.length}}</h3>\r\n              </div>\r\n              <div *ngIf=\"step.step == 1\"><app-details></app-details></div>\r\n              <div *ngIf=\"step.step == 2\"><app-ruletype></app-ruletype></div>\r\n              <div *ngIf=\"step.step == 3\"><app-rulefilters></app-rulefilters></div>\r\n              <div *ngIf=\"step.step == 4\"><app-rulecondition></app-rulecondition></div>\r\n              <div *ngIf=\"step.step == 5\"><app-ruleattribute></app-ruleattribute></div>\r\n              <div *ngIf=\"step.step == 6\"><app-ruletest></app-ruletest></div>\r\n              <div *ngIf=\"step.step == 7\"><app-ruleattachment></app-ruleattachment></div>\r\n              <div *ngIf=\"step.step == 8\"><app-ruleapproval></app-ruleapproval></div>\r\n          </div>\r\n      </div>\r\n      <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n          <button class=\"action-btn prev\" [ngClass]=\"{'disabled':activeStep.step == 1}\" (click)=\"changeStep(-1);\">Previous</button>\r\n          <button class=\"action-btn nxt\" [ngClass]=\"{'disabled':activeStep.step == steps.length}\" (click)=\"changeStep(1);\">Next</button>\r\n        </div>\r\n     </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/custom-stepper/custom-stepper.component.ts":
/*!************************************************************!*\
  !*** ./src/app/custom-stepper/custom-stepper.component.ts ***!
  \************************************************************/
/*! exports provided: CustomStepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomStepperComponent", function() { return CustomStepperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomStepperComponent = /** @class */ (function () {
    function CustomStepperComponent() {
        this.isLinear = false;
        this.steps = [
            { step: 1, title: "RULE DETAILS", component: "<app-details></app-details>" },
            { step: 2, title: "SELECT RULE TYPE", component: "<app-ruletype></app-ruletype>" },
            { step: 3, title: "SELECT FILTERS", component: "<app-rulefilters></app-rulefilters>" },
            { step: 4, title: "SET CONDITION", component: "<app-rulecondition></app-rulecondition>" },
            { step: 5, title: "SELECT ATTRIBUTES", component: "<app-ruleattribute></app-ruleattribute>" },
            { step: 6, title: "TEST RULE", component: "<app-ruletest></app-ruletest>" },
            { step: 7, title: "ATTACH SCHEME(S)", component: "<app-ruleattachment></app-ruleattachment>" },
            { step: 8, title: "APPROVAL", component: "<app-ruleapproval></app-ruleapproval>" }
        ];
        try {
            if (this.steps && this.steps instanceof Array && this.steps.length > 0) {
                this.activeStep = this.steps[0];
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    CustomStepperComponent.prototype.getWidth = function () {
        return (100 / this.steps.length) + "%";
    };
    CustomStepperComponent.prototype.changeStep = function (inc) {
        try {
            this.activeStep = this.steps[(this.activeStep.step + inc) - 1];
            jQuery(".stepBlock").toggle("slide");
        }
        catch (error) {
            console.error(error);
        }
    };
    CustomStepperComponent.prototype.stepClick = function (step) {
        try {
            if (step)
                this.activeStep = step;
        }
        catch (error) {
            console.error(error);
        }
    };
    CustomStepperComponent.prototype.ngOnInit = function () {
    };
    CustomStepperComponent.prototype.ngAfterViewInit = function () {
        try {
            jQuery("body").css("background-color", "#dfdfdf");
        }
        catch (error) {
            console.error(error);
        }
    };
    CustomStepperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-stepper',
            template: __webpack_require__(/*! ./custom-stepper.component.html */ "./src/app/custom-stepper/custom-stepper.component.html"),
            styles: [__webpack_require__(/*! ./custom-stepper.component.css */ "./src/app/custom-stepper/custom-stepper.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomStepperComponent);
    return CustomStepperComponent;
}());



/***/ }),

/***/ "./src/app/customcheckbox/customcheckbox.component.css":
/*!*************************************************************!*\
  !*** ./src/app/customcheckbox/customcheckbox.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customcheckbox/customcheckbox.component.html":
/*!**************************************************************!*\
  !*** ./src/app/customcheckbox/customcheckbox.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  customcheckbox works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/customcheckbox/customcheckbox.component.ts":
/*!************************************************************!*\
  !*** ./src/app/customcheckbox/customcheckbox.component.ts ***!
  \************************************************************/
/*! exports provided: CustomcheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomcheckboxComponent", function() { return CustomcheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { ViewChild } from 
var CustomcheckboxComponent = /** @class */ (function () {
    function CustomcheckboxComponent(renderer) {
        this.renderer = renderer;
    }
    CustomcheckboxComponent.prototype.writeValue = function (obj) {
        var div = this.span.nativeElement;
        //this.renderer.setProperty(div, 'textContent', value);
    };
    CustomcheckboxComponent.prototype.registerOnChange = function (fn) {
        // this.onChange = fn;
    };
    CustomcheckboxComponent.prototype.setDisabledState = function (isDisabled) {
        //const div = this.textarea.nativeElement;
        //const action = isDisabled ? 'addClass' : 'removeClass';
        //this.renderer[action](div, 'disabled');
    };
    CustomcheckboxComponent.prototype.registerOnTouched = function (fn) {
        throw new Error("Method Not implemented");
    };
    CustomcheckboxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('span'),
        __metadata("design:type", Object)
    ], CustomcheckboxComponent.prototype, "span", void 0);
    CustomcheckboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customcheckbox',
            template: __webpack_require__(/*! ./customcheckbox.component.html */ "./src/app/customcheckbox/customcheckbox.component.html"),
            styles: [__webpack_require__(/*! ./customcheckbox.component.css */ "./src/app/customcheckbox/customcheckbox.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], CustomcheckboxComponent);
    return CustomcheckboxComponent;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wizard_lbl {\r\n    display: block;\r\n    line-height: 20px;\r\n    height: 25px;\r\n    height: 20px;\r\n    font-size: 12px;\r\n    padding: 5px;\r\n    color: #444;\r\n    font-family: sans-serif;\r\n}\r\n.top-spacing{\r\n    margin-top: 15px !important;\r\n}\r\nlabel{\r\n    max-width: 100%;\r\n    margin-bottom: 5px;\r\n    font-weight: 500;\r\n}\r\n.wiz_lbl_star {\r\n    color: #ce1e11;\r\n    font-size: 12px;\r\n}"

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12\" [formGroup]=\"detailForm\">\r\n  <div class=\"col-md-11 col-sm-11 col-xs-11 padding0\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 padding0 top-spacing\">\r\n        <div class=\"col-md-6 col-sm-6 col-xs-12 padding0\">\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n              <label class=\"wizard_lbl\">Name\r\n                  <span class=\"wiz_lbl_star\">*</span>\r\n              </label>\r\n            </div>\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n              <input type=\"text\" class=\"form-control\" formControlName=\"name\" [(ngModel)]=\"details.name\" name=\"name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-sm-6 col-xs-12 padding0\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                  <label class=\"wizard_lbl\">Short Name\r\n                      <span class=\"wiz_lbl_star\">*</span>\r\n                  </label>\r\n              </div>\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                  <input type=\"text\" class=\"form-control\" formControlName=\"shortName\" name=\"shortName\" [(ngModel)]=\"details.shortName\">\r\n              </div>\r\n          </div> \r\n    </div>\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 padding0 top-spacing\">\r\n        <div class=\"col-md-6 col-sm-6 col-xs-12 padding0\">\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <label class=\"wizard_lbl\">Reference No.\r\n                    <span class=\"wiz_lbl_star\">*</span>\r\n                </label>\r\n            </div>\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"refNo\" name=\"refNo\" [(ngModel)]=\"details.refNo\">\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6 col-sm-6 col-xs-12 padding0\">\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <label class=\"wizard_lbl\">Rule Group\r\n                    <span class=\"wiz_lbl_star\">*</span>\r\n                </label>\r\n            </div>\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"ruleGroup\" name=\"ruleGroup\" [(ngModel)]=\"details.ruleGroup\">\r\n            </div>\r\n        </div> \r\n    </div>\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 padding0 top-spacing\">\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n            <label class=\"wizard_lbl\">Description</label>\r\n        </div>\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n            <textarea  rows=\"3\" class=\"form-control\" formControlName=\"description\" name=\"description\" [(ngModel)]=\"details.description\"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 padding0 top-spacing\">\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n            <label class=\"wizard_lbl\">Resolution Tip</label>\r\n        </div>\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n            <textarea  rows=\"3\" class=\"form-control\" formControlName=\"resolutionTip\" name=\"resolutionTip\" [(ngModel)]=\"details.resolutionTip\"></textarea>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _general_lsdb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general/lsdb */ "./src/app/general/lsdb.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(fb) {
        this.fb = fb;
        try {
            this.detailForm = this.getDetailForm();
            this.detailForm.updateValueAndValidity({ onlySelf: true, emitEvent: false });
        }
        catch (error) {
            console.error(error);
        }
    }
    DetailsComponent.prototype.getDetailForm = function (iObj) {
        try {
            var formGroup = void 0;
            if (iObj && Object.keys(iObj).length > 0) {
                formGroup = this.fb.group({
                    name: [iObj.name],
                    shortName: [iObj.shortName],
                    refNo: [iObj.refNo],
                    ruleGroup: [iObj.ruleGroup],
                    description: [iObj.description],
                    resolutionTip: [iObj.resolutionTip]
                });
            }
            else {
                formGroup = this.fb.group({
                    name: [''],
                    shortName: [''],
                    refNo: [''],
                    ruleGroup: [''],
                    description: [''],
                    resolutionTip: ['']
                });
            }
            return formGroup;
        }
        catch (error) {
            console.error(error);
        }
    };
    DetailsComponent.prototype.ngOnInit = function () {
        try {
            this.details = {};
            if (_general_lsdb__WEBPACK_IMPORTED_MODULE_2__["localDB"].getDatabyKey("details")) {
                this.details = _general_lsdb__WEBPACK_IMPORTED_MODULE_2__["localDB"].getDatabyKey("details");
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    DetailsComponent.prototype.ngOnDestroy = function () {
        try {
            _general_lsdb__WEBPACK_IMPORTED_MODULE_2__["localDB"].setDatabyKey("details", this.details);
        }
        catch (error) {
            console.error(error);
        }
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-box{\r\n    background-color: gray;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-xs-12 col-sm-12 padding0 footer-box\">\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/general/lsdb.ts":
/*!*********************************!*\
  !*** ./src/app/general/lsdb.ts ***!
  \*********************************/
/*! exports provided: localDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localDB", function() { return localDB; });
var localDB = /** @class */ (function () {
    function localDB() {
        try {
        }
        catch (error) {
            console.error(error);
        }
    }
    /**
     * @author SSW
     * @description this function is used for get data from localstorage by key
     * @param key
     */
    localDB.getDatabyKey = function (key) {
        try {
            if (sessionStorage && sessionStorage.getItem(key)) {
                return JSON.parse(sessionStorage.getItem(key));
            }
            else {
                return null;
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @param key
     * @param iObj
     * @description this function is used for saving data in localstorage
     */
    localDB.setDatabyKey = function (key, iObj) {
        try {
            if (sessionStorage) {
                sessionStorage.setItem(key, JSON.stringify(iObj));
                return true;
            }
            else {
                return false;
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    return localDB;
}());



/***/ }),

/***/ "./src/app/gmap.service.ts":
/*!*********************************!*\
  !*** ./src/app/gmap.service.ts ***!
  \*********************************/
/*! exports provided: GmapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GmapService", function() { return GmapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GmapService = /** @class */ (function () {
    function GmapService() {
        this.allMaps = {};
        this.allElements = {};
        this.allIds = {};
        this.apiLoaded = false;
        this.allPleaseConnects = {};
        window["mapInit"] = function () {
            console.log("Yes");
        };
    }
    /**
     * @author SSW
     * @description this function is used for loading google javascript map API
     */
    GmapService.prototype.loadMapApi = function () {
        var _this = this;
        try {
            return new Promise(function (resolve) {
                if (!_this.apiLoaded) {
                    var script = document.createElement("script");
                    script.id = "googleMaps";
                    script.src = 'https://maps.google.com/maps/api/js?key=AIzaSyBI1Vi-V3EE4GPBOKDJFiTdgvDrLcd6jaA&callback=mapInit';
                    document.body.appendChild(script);
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    GmapService.prototype.checkForExistingMaps = function (mapElement, pleaseConnect, mapId, iCallBack) {
        try {
            if (mapElement && pleaseConnect) {
                if (mapId) {
                    this.allIds[mapId] = mapId;
                    this.allElements[mapId] = mapElement;
                }
                else {
                    if (mapElement.id) {
                        this.allIds[mapId] = mapId;
                        this.allElements[mapId] = mapElement;
                    }
                }
            }
            if (iCallBack && typeof iCallBack == 'function')
                iCallBack();
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used for initializing map
     * @param mapElement
     * @param pleaseConnect
     * @param mapId
     */
    GmapService.prototype.initMap = function (mapElement, pleaseConnect, mapId) {
        var _this = this;
        try {
            window["mapInit"] = function () {
                console.info("Script Loaded");
                _this.apiLoaded = true;
                //
                _this.checkForExistingMaps(mapElement, pleaseConnect, mapId, function () {
                    var latLng = new google.maps.LatLng(55.6351, -4.7815);
                    return new Promise(function (resolve) {
                        var mapOptions = {
                            center: latLng,
                            zoom: 4,
                            gestureHandling: 'greedy',
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            streetViewControl: false,
                            mapTypeControl: false,
                            fullscreenControl: false,
                            zoomControl: true,
                            zoomControlOptions: {
                                style: google.maps.ZoomControlStyle.LARGE,
                                position: google.maps.ControlPosition.RIGHT_TOP //change position for zoom controls
                            },
                        };
                        var id;
                        if (mapElement && pleaseConnect) {
                            if (mapId) {
                                _this.allIds[mapId] = mapId;
                                _this.allElements[mapId] = mapElement;
                                _this.allPleaseConnects[mapId] = pleaseConnect;
                                id = mapId;
                            }
                            else {
                                if (mapElement.id) {
                                    _this.allIds[mapId] = mapId;
                                    _this.allElements[mapId] = mapElement;
                                    _this.allPleaseConnects[mapId] = pleaseConnect;
                                    id = mapElement.id;
                                }
                            }
                            console.log(id);
                            _this.enableMap(_this.allPleaseConnects[mapId]);
                            _this.allMaps[id] = new google.maps.Map(mapElement, mapOptions);
                        }
                    });
                });
                //
            };
            this.loadMapApi().then(function () {
            });
            //if(this.apiLoaded){
            // } 
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used for enabling map
     */
    GmapService.prototype.enableMap = function (pleaseConnect) {
        try {
            if (pleaseConnect) {
                pleaseConnect.style.display = "none";
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    GmapService.prototype.disableMap = function () {
    };
    /**
     * @author SSW
     * @description this function is used adding Marker
     */
    GmapService.prototype.addMarker = function () {
        try {
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used setting center of map
     */
    GmapService.prototype.setCenter = function () {
        try {
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used of getting All Instances of Active maps
     */
    GmapService.prototype.getAllMaps = function () {
        try {
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used for showing Marker info
     */
    GmapService.prototype.showMarkerInfo = function () {
        try {
        }
        catch (error) {
            console.error(error);
        }
    };
    GmapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GmapService);
    return GmapService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-box{\r\n    background-color:gray;\r\n}\r\n.pad-top{\r\n    padding-top:2.5%;\r\n}\r\n.user-options p:hover{\r\n    background-color:lightgray;\r\n}\r\nsup{\r\n    font-weight: bold;\r\n    font-size:13px;\r\n    font-family: Roboto-bold;\r\n    color:yellow;\r\n    top:-1.5em !important;\r\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 padding0 header-box\">\r\n  <div class=\"col-md-3 col-sm-3 col-xs-3 padding0\">\r\n      <div class=\"logo-img\" [ngStyle]=\"{'backgroundImage':'url(' + filePath + 'sswlogo.JPG' + ')'}\"></div>\r\n  </div>\r\n  <div class=\"col-md-6 col-sm-6 col-xs-6 padding0 pad-top\">   \r\n      <app-search></app-search>\r\n  </div>\r\n  <div class=\"col-md-3 col-sm-3 col-xs-3 padding0 pad-top\">\r\n    <div class=\"col-md-6 col-sm-6 col-xs-6\" style=\"text-align: right;\">\r\n        <span (click)=\"gotoMyCart()\" *ngIf=\"currentUser\"><i class=\"fa fa-shopping-cart fa-2x\" aria-hidden=\"true\" style=\"color:white;\"></i><sup>{{cartItems.length}}</sup></span>\r\n    </div>\r\n    <div class=\"col-md-6 col-sm-6 col-xs-6\">\r\n        <div class=\"user-img\"><i class=\"fa fa-user-circle fa-2x\" style=\"color:aliceblue;\" [popover]=\"myPopover\" >\r\n            <popover-content #myPopover \r\n            title=\"{{currentUser && currentUser.username ? currentUser.username : ''}}\" \r\n            placement=\"bottom\"\r\n            [animation]=\"true\" \r\n            [closeOnClickOutside]=\"true\" >\r\n<div>\r\n  <div class=\"user-options\" *ngIf=\"currentUser\">\r\n      <p><a (click)=\"showProfile()\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>&nbsp;&nbsp;Profile</a></p>\r\n      <p><a (click)=\"SignOut()\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>&nbsp;&nbsp;Signout</a></p>\r\n  </div>\r\n  <label *ngIf=\"!currentUser\"><a (click)=\"SignIn()\"><i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>&nbsp;&nbsp;Login</a></label>\r\n</div>\r\n</popover-content>\r\n        </i></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_search_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/search/search.service */ "./src/app/services/search/search.service.ts");
/* harmony import */ var _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userservice, searchservice, cartservice, router) {
        var _this = this;
        this.userservice = userservice;
        this.searchservice = searchservice;
        this.cartservice = cartservice;
        this.router = router;
        this.filePath = "./assets/icons/";
        this.cartItems = [];
        try {
            this.searchservice.user.subscribe(function (iUser) {
                //if(iUser){
                _this.currentUser = iUser;
                if (_this.currentUser) {
                    _this.getUserCart();
                }
                //}
            });
        }
        catch (error) {
            console.error(error);
        }
    }
    HeaderComponent.prototype.getUserCart = function () {
        var _this = this;
        try {
            this.cartservice.getUserCart(this.currentUser.userId).subscribe(function (res) {
                if (res && res.length > 0) {
                    _this.cartItems = res;
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    HeaderComponent.prototype.ngOnInit = function () {
        try {
        }
        catch (error) {
            console.error(error);
        }
    };
    HeaderComponent.prototype.SignOut = function () {
        try {
            this.searchservice.setloggedUser(null);
        }
        catch (error) {
            console.error(error);
        }
    };
    HeaderComponent.prototype.gotoMyCart = function () {
        try {
            this.router.navigate(["/", "mycart"]);
        }
        catch (error) {
            console.error(error);
        }
    };
    HeaderComponent.prototype.SignIn = function () {
        try {
            this.router.navigate(["/", "login"]).then(function (res) {
                console.log("Navigated to Login", res);
            }, function (error) {
                console.log(error);
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    HeaderComponent.prototype.updateList = function () {
    };
    HeaderComponent.prototype.showProfile = function () {
        try {
        }
        catch (error) {
            console.error(error);
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _services_search_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"], _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/image-gallary/image-gallary.component.css":
/*!***********************************************************!*\
  !*** ./src/app/image-gallary/image-gallary.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul{\r\n    list-style-type:none;\r\n    padding:0px;\r\n}\r\n\r\nli{\r\n    width:80%;\r\n    height:100px;\r\n    background-size: 100% 100%;\r\n}\r\n\r\n.thumb{\r\n    margin:0px !important;\r\n}\r\n\r\n.image-thumbnail mat-card-content{\r\n    background-size:100% 100%;\r\n    width:100%;\r\n    height:80px;\r\n}\r\n\r\n.padding0{\r\n    padding:0px !important;\r\n}\r\n\r\n.direction-arrow{\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/image-gallary/image-gallary.component.html":
/*!************************************************************!*\
  !*** ./src/app/image-gallary/image-gallary.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n  <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n        <mat-card class=\"image-thumbnail\">\r\n          <mat-card-content [ngStyle]=\"{'backgroundImage':'url(' + filePath + imageSelected + ')'}\"></mat-card-content>\r\n        </mat-card>\r\n  </div>\r\n  <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"col-md-1 col-xs-2 col-sm-1\">\r\n        <mat-card class=\"image-thumbnail direction-arrow\">\r\n          <span><</span>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"col-md-2 col-xs-3 col-sm-2 padding0 thumb\" *ngFor=\"let image of images;\">\r\n        <mat-card class=\"image-thumbnail\" (mouseover)=\"setImage(image)\">\r\n            <mat-card-content [ngStyle]=\"{'backgroundImage':'url(' + filePath + image.url + ')'}\"></mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"col-md-1 col-xs-2 col-sm-1 \" >\r\n        <mat-card class=\"image-thumbnail direction-arrow\">\r\n            <span>></span>\r\n          </mat-card>\r\n    </div>\r\n  </div>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/image-gallary/image-gallary.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/image-gallary/image-gallary.component.ts ***!
  \**********************************************************/
/*! exports provided: ImageGallaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGallaryComponent", function() { return ImageGallaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageGallaryComponent = /** @class */ (function () {
    function ImageGallaryComponent() {
        this.images = [{ url: "watch1.jpeg", name: "watch" }, { url: "watch2.jpeg", name: "watch" }, { url: "watch3.jpeg", name: "watch" }, { url: "watch4.jpeg", name: "watch" }];
        this.filePath = "./assets/data/";
        this.imageSelected = this.images[0].url;
    }
    ImageGallaryComponent.prototype.ngOnInit = function () {
    };
    ImageGallaryComponent.prototype.setImage = function (image) {
        this.imageSelected = image.url;
    };
    ImageGallaryComponent.prototype.ngAfterViewInit = function () {
        $(".image-thumbnail").css("border", "0px");
        $(".mat-card.mat-card").css("border", "0px");
    };
    ImageGallaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-gallary',
            template: __webpack_require__(/*! ./image-gallary.component.html */ "./src/app/image-gallary/image-gallary.component.html"),
            styles: [__webpack_require__(/*! ./image-gallary.component.css */ "./src/app/image-gallary/image-gallary.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImageGallaryComponent);
    return ImageGallaryComponent;
}());



/***/ }),

/***/ "./src/app/itr/itr.component.css":
/*!***************************************!*\
  !*** ./src/app/itr/itr.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/itr/itr.component.html":
/*!****************************************!*\
  !*** ./src/app/itr/itr.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/itr/itr.component.ts":
/*!**************************************!*\
  !*** ./src/app/itr/itr.component.ts ***!
  \**************************************/
/*! exports provided: ITRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITRComponent", function() { return ITRComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ITRComponent = /** @class */ (function () {
    function ITRComponent() {
    }
    ITRComponent.prototype.ngOnInit = function () {
    };
    ITRComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-itr',
            template: __webpack_require__(/*! ./itr.component.html */ "./src/app/itr/itr.component.html"),
            styles: [__webpack_require__(/*! ./itr.component.css */ "./src/app/itr/itr.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ITRComponent);
    return ITRComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action-button button{\r\n    width: 100%;\r\n    font-family: Roboto-bold;\r\n    font-size:14px;\r\n    margin-botton:10px;\r\n}\r\n\r\n.login-box{\r\n    border:1px solid lightgray;\r\n    border-radius: 5px;\r\n    box-shadow: 0px 0px 15px;\r\n    padding:10px !important;\r\n    margin-top:100px;\r\n}\r\n\r\n.login-box input{\r\n    font-family: Roboto-bold;\r\n    color: lightblue;\r\n}\r\n\r\n.error-msg i{\r\n    margin-right:15px !important;\r\n}\r\n\r\n.extra-actions{\r\n    padding-top:15px;\r\n}\r\n\r\n.error-msg{\r\n    color:red;\r\n    font-family: Roboto-bold;\r\n    font-size:10px;\r\n    text-align: center;\r\n}\r\n\r\n.logo-img{\r\n    width:150px;\r\n    height: 100px;\r\n    background-size:100% 100%;\r\n    background-repeat: no-repeat;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 padding0\" [formGroup]=\"loginForm\" (ngOnSubmit)=\"submit()\">\r\n  <div class=\"col-md-offset-4 col-sm-offset-4 col-md-5 col-sm-5 col-xs-12 login-box padding0\">\r\n    <div class=\"col-md-12 col-12 col-xs-12\">\r\n      <div class=\"col-md-offset-4 col-sm-offset-4 col-xs-offset-1 logo-img\" [ngStyle]=\"{'backgroundImage':'url(' + filePath + 'sswlogo.JPG' + ')'}\"></div>\r\n    </div>\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n      <mat-form-field>\r\n          <span matPrefix><i class=\"fa fa-user-o\" aria-hidden=\"true\">&nbsp;&nbsp;&nbsp;</i></span>\r\n        <input type=\"text\" matInput formControlName=\"username\" name=\"username\" [(ngModel)]=\"login.username\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n      <mat-form-field>\r\n          <span matPrefix><i class=\"fa fa-key\" aria-hidden=\"true\">&nbsp;&nbsp;&nbsp;</i></span>\r\n          <input type=\"password\" matInput formControlName=\"password\" name=\"password\" [(ngModel)]=\"login.password\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 action-button\">\r\n      <button mat-raised-button type=\"submit\" (click)=\"submit()\" class=\"btn btn-success\">Login</button>\r\n    </div>\r\n    <div class=\"error-msg\" *ngIf=\"errorMsg\">\r\n      <span><i class=\"fa fa-exclamation-triangle\"></i>{{errorMsg}}</span>\r\n    </div>\r\n\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 extra-actions\">\r\n      <span class=\"new-user\">New to sswshop ? </span>\r\n      <p><a (click)=\"gotoRegister()\">Create sswshop account</a></p>\r\n      <span><a (click)=\"forgotPassword()\">forgot password ?</a></span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_search_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/search/search.service */ "./src/app/services/search/search.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _general_lsdb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../general/lsdb */ "./src/app/general/lsdb.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(userservice, fb, router, searchservice) {
        this.userservice = userservice;
        this.fb = fb;
        this.router = router;
        this.searchservice = searchservice;
        this.login = {};
        this.filePath = "./assets/icons/";
        try {
            this.loginForm = this.getLoginForm();
        }
        catch (error) {
            console.error(error);
        }
    }
    LoginComponent.prototype.submit = function () {
        var _this = this;
        try {
            this.userservice.login(this.login).subscribe(function (res) {
                if (res && res.statusCode == 200) {
                    _this.router.navigate(["/mech"]).then(function () {
                        console.log("Logged in Successfully");
                        _this.searchservice.setloggedUser(res.data);
                    });
                }
                else {
                    if (res && res.statusCode == 404) {
                        _this.errorMsg = res.msg;
                        _this.clearError();
                    }
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    LoginComponent.prototype.gotoRegister = function () {
        try {
            this.router.navigate(["/", "register"]).then(function () {
                console.log("Registering new user");
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    LoginComponent.prototype.clearError = function () {
        var _this = this;
        try {
            setTimeout(function () {
                _this.errorMsg = "";
            }, 3000);
        }
        catch (error) {
            console.error(error);
        }
    };
    LoginComponent.prototype.getLoginForm = function () {
        try {
            var formGroup = void 0;
            formGroup = this.fb.group({
                username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
            });
            return formGroup;
        }
        catch (error) {
            console.error(error);
        }
    };
    LoginComponent.prototype.forgotPassword = function () {
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        try {
            if (_general_lsdb__WEBPACK_IMPORTED_MODULE_5__["localDB"].getDatabyKey("user")) {
                this.router.navigate(["/mech"]).then(function () {
                    //console.log("Logged in Successfully");
                    _this.searchservice.setloggedUser(_general_lsdb__WEBPACK_IMPORTED_MODULE_5__["localDB"].getDatabyKey("user"));
                });
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        try {
            jQuery("app-header").css("display", "none");
            jQuery("app-footer").css("display", "none");
        }
        catch (error) {
            console.error(error);
        }
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        try {
            jQuery("app-header").css("display", "block");
            jQuery("app-footer").css("display", "block");
        }
        catch (error) {
            console.error(error);
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_search_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mails/mails.component.css":
/*!*******************************************!*\
  !*** ./src/app/mails/mails.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mails/mails.component.html":
/*!********************************************!*\
  !*** ./src/app/mails/mails.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  mails works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/mails/mails.component.ts":
/*!******************************************!*\
  !*** ./src/app/mails/mails.component.ts ***!
  \******************************************/
/*! exports provided: MailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailsComponent", function() { return MailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MailsComponent = /** @class */ (function () {
    function MailsComponent() {
    }
    MailsComponent.prototype.ngOnInit = function () {
    };
    MailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mails',
            template: __webpack_require__(/*! ./mails.component.html */ "./src/app/mails/mails.component.html"),
            styles: [__webpack_require__(/*! ./mails.component.css */ "./src/app/mails/mails.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MailsComponent);
    return MailsComponent;
}());



/***/ }),

/***/ "./src/app/map-g/map-g.component.css":
/*!*******************************************!*\
  !*** ./src/app/map-g/map-g.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pac-card {\r\n    margin: 10px 10px 0 0;\r\n    border-radius: 2px 0 0 2px;\r\n    box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    outline: none;\r\n    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\r\n    background-color: #fff;\r\n    font-family: Roboto;\r\n  }\r\n\r\n  #pac-container {\r\n    padding-bottom: 12px;\r\n    margin-right: 12px;\r\n  }\r\n\r\n  .pac-controls {\r\n    display: inline-block;\r\n    padding: 5px 11px;\r\n  }\r\n\r\n  .pac-controls label {\r\n    font-family: Roboto;\r\n    font-size: 13px;\r\n    font-weight: 300;\r\n  }\r\n\r\n  #pac-input {\r\n    background-color: #fff;\r\n    font-family: Roboto;\r\n    font-size: 15px;\r\n    font-weight: 300;\r\n    margin-left: 12px;\r\n    padding: 0 11px 0 13px;\r\n    text-overflow: ellipsis;\r\n    width: 400px;\r\n  }\r\n\r\n  #pac-input:focus {\r\n    border-color: #4d90fe;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/map-g/map-g.component.html":
/*!********************************************!*\
  !*** ./src/app/map-g/map-g.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input *ngIf=\"defaultSearch\" id=\"pac-input\" class=\"controls\" type=\"text\" placeholder=\"Search Box\" #pacinput>\r\n<div #gmap [ngStyle]=\"mapStyle\"></div>"

/***/ }),

/***/ "./src/app/map-g/map-g.component.ts":
/*!******************************************!*\
  !*** ./src/app/map-g/map-g.component.ts ***!
  \******************************************/
/*! exports provided: MapGComponent, MapTypeId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapGComponent", function() { return MapGComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTypeId", function() { return MapTypeId; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/// <reference types="@types/googlemaps" />
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapGComponent = /** @class */ (function () {
    function MapGComponent(datePipe) {
        this.datePipe = datePipe;
    }
    /**
     * @author SSW
     * @description this function is used after component init
     */
    MapGComponent.prototype.ngOnInit = function () {
        var _this = this;
        var mapProp = {
            center: new google.maps.LatLng(18.5793, 73.8143),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        google.maps.event.addListener(this.map, "mousemove", function (e) {
            //console.log(e);
            //console.log(e.latLng.lat(),e.latLng.lng());
            _this.latlng = { lat: e.latLng.lat(), lng: e.latLng.lng() };
        });
        google.maps.event.addListener(this.map, "mouseup", function (e) {
            console.log(e);
            console.log("LAT LNG :", _this.latlng);
            console.log(_this.map.getCenter().lat(), _this.map.getCenter().lng());
        });
    };
    /**
     * @author SSW
     * @description this function is used for enabling google default search
     */
    MapGComponent.prototype.enableDefaultSearch = function () {
        var _this = this;
        try {
            var input = this.pac_input.nativeElement;
            var searchBox_1 = new google.maps.places.SearchBox(input);
            this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
            this.map.addListener('bounds_changed', function () {
                searchBox_1.setBounds(_this.map.getBounds());
            });
            var markers = [];
            // Listen for the event fired when the user selects a prediction and retrieve
            // more details for that place.
            searchBox_1.addListener('places_changed', function () {
                var places = searchBox_1.getPlaces();
                if (places.length == 0) {
                    return;
                }
                // Clear out the old markers.
                markers.forEach(function (marker) {
                    marker.setMap(null);
                });
                markers = [];
                // For each place, get the icon, name and location.
                var bounds = new google.maps.LatLngBounds();
                places.forEach(function (place) {
                    if (!place.geometry) {
                        console.log("Returned place contains no geometry");
                        return;
                    }
                    var icon = {
                        url: place.icon,
                        size: new google.maps.Size(71, 71),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(17, 34),
                        scaledSize: new google.maps.Size(25, 25)
                    };
                    // Create a marker for each place.
                    markers.push(new google.maps.Marker({
                        map: _this.map,
                        title: place.name,
                        position: place.geometry.location
                    }));
                    if (place.geometry.viewport) {
                        // Only geocodes have viewport.
                        bounds.union(place.geometry.viewport);
                    }
                    else {
                        bounds.extend(place.geometry.location);
                    }
                });
                _this.map.fitBounds(bounds);
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used on after View init
     */
    MapGComponent.prototype.ngAfterViewInit = function () {
        try {
            if (this.defaultSearch)
                this.enableDefaultSearch();
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used on binding data changes
     */
    MapGComponent.prototype.ngOnChanges = function () {
        var _this = this;
        try {
            if (this.addMarkerOnClick) {
                setTimeout(function () {
                    google.maps.event.addListener(_this.map, "click", function (e) {
                        _this.setMarker(e.latLng);
                    });
                }, 1000);
            }
            if (this.locations && this.locations instanceof Array) {
                setTimeout(function () {
                    _this.locations.forEach(function (x) {
                        _this.setMarker(x.latlng, x);
                    });
                }, 1000);
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used for setting map type
     * @param mapTypeId
     */
    MapGComponent.prototype.setMapType = function (mapTypeId) {
        try {
            this.map.setMapTypeId(mapTypeId);
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @param latitude
     * @param longitude
     */
    MapGComponent.prototype.setCenter = function (latlng) {
        try {
            this.map.setCenter(new google.maps.LatLng(latlng.lat, latlng.lng));
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used for setting marker
     */
    MapGComponent.prototype.setMarker = function (latlng, iObj) {
        try {
            var marker = new google.maps.Marker({
                position: latlng,
                map: this.map,
            });
            this.setInfoWindow(marker, iObj);
            //this.setCenter(latlng);
        }
        catch (error) {
            console.error(error);
        }
    };
    MapGComponent.prototype.discardClicked = function (info) {
        console.log(info);
    };
    /**
     * @author SSW
     * @description this function is used for creating content format
     * @param info
     */
    MapGComponent.prototype.getContent = function (info) {
        try {
            var content = "<div>" + info.woStatus + "<br/>" +
                info.woTitle + "<br/>" +
                info.woPostCode + "<br/>" +
                this.datePipe.transform(info.woDate, "medium") + "<br/>" +
                info.woTime + "<br/>" +
                info.woPrice + "&nbsp &nbsp" + info.bidPrice + "<span><i class='fa fa-close' onclick ='discardClicked()'></i>Discard</span>";
            "</div>";
            return content;
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used for setting information window which can be viewed on marker click
     */
    MapGComponent.prototype.setInfoWindow = function (marker, content) {
        var _this = this;
        try {
            if (content) {
                var infowindow_1 = new google.maps.InfoWindow({ content: this.getContent(content) });
                marker.addListener("click", function () { infowindow_1.open(_this.map, marker); });
                //marker.addListener("mouseover",()=>{ infowindow.open(this.map,marker)});
                //marker.addListener("mouseout",()=>{ infowindow.close()});
            }
            else {
                var infowindow_2 = new google.maps.InfoWindow({ content: this.getContent({ title: "James bond", description: "london" }) });
                marker.addListener("click", function () { infowindow_2.open(_this.map, marker); });
                //marker.addListener("mouseover",()=>{infowindow.open(this.map,marker)});
                //marker.addListener("mouseout",()=>{infowindow.close()});
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gmap'),
        __metadata("design:type", Object)
    ], MapGComponent.prototype, "gmapElement", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("pacinput"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MapGComponent.prototype, "pac_input", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MapGComponent.prototype, "locations", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MapGComponent.prototype, "mapStyle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MapGComponent.prototype, "addMarkerOnClick", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MapGComponent.prototype, "defaultSearch", void 0);
    MapGComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-g',
            template: __webpack_require__(/*! ./map-g.component.html */ "./src/app/map-g/map-g.component.html"),
            styles: [__webpack_require__(/*! ./map-g.component.css */ "./src/app/map-g/map-g.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])
    ], MapGComponent);
    return MapGComponent;
}());

var MapTypeId;
(function (MapTypeId) {
    /**
       This map type displays a transparent layer of major streets on satellite
       images.
     */
    MapTypeId[MapTypeId["HYBRID"] = 0] = "HYBRID";
    /** This map type displays a normal street map. */
    MapTypeId[MapTypeId["ROADMAP"] = 1] = "ROADMAP";
    /** This map type displays satellite images. */
    MapTypeId[MapTypeId["SATELLITE"] = 2] = "SATELLITE";
    /**
       This map type displays maps with physical features such as terrain and
       vegetation.
     */
    MapTypeId[MapTypeId["TERRAIN"] = 3] = "TERRAIN";
})(MapTypeId || (MapTypeId = {}));


/***/ }),

/***/ "./src/app/mech/mech.component.css":
/*!*****************************************!*\
  !*** ./src/app/mech/mech.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".service-title {\r\n    font-size: 14px;\r\n    font-family: Roboto-bold;\r\n    color:#000;\r\n}\r\n.service-cards{\r\n    margin-left:5px;\r\n}\r\n.checked{\r\n    color:orange;\r\n}\r\n.select-button {\r\n    width: 100%;\r\n    border-radius: 3px;\r\n    height: 30px;\r\n    font-size: 14px;\r\n    color:#fff;\r\n    background-color: #337ab7;\r\n}\r\n.image-container {\r\n    min-height: 68%;\r\n}\r\n.text-container {\r\n    padding: 15px 15px 0px;\r\n    min-height: 22%;\r\n}\r\n.action-container {\r\n    padding-left:15px;\r\n    padding-right:15px;\r\n    margin-top: 5px;\r\n    min-height:10%;\r\n}\r\n.rating-container{\r\n    padding-left:15px;\r\n    min-height: 5%;\r\n}\r\n.card-height{\r\n    height:350px;\r\n    border-radius: 4px;\r\n}\r\n.imglist {\r\n    background-size: contain;\r\n    border-radius: 4px 4px 0px 0px;\r\n    background-repeat: no-repeat;\r\n    background-position: top;\r\n}\r\n.table-wrapper {\r\n    /*border-bottom: 1px solid #cdcdcd;*/\r\n    padding-top:15px;\r\n}\r\nmat-card-content{\r\n    background-size:100% 100% !important;\r\n}\r\n@media (max-width: 500px) {\r\n    .listimgdiv {\r\n        width: 100%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/mech/mech.component.html":
/*!******************************************!*\
  !*** ./src/app/mech/mech.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 padding0\" style=\"border-top:1px solid #cdcdcd\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n        <div *ngFor=\"let product of products;let i = index;\" class=\"col-md-3 col-sm-3 col-xs-6 listimgdiv\">\r\n            <app-product-card [product]=\"product\" (clicked)=\"getProductDetails($event)\"></app-product-card>\r\n        </div>\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12\" *ngIf=\"products.length == 0\" style=\"padding-left: 25%;\">\r\n                <app-showerror [msg]=\"'No record found'\"></app-showerror>\r\n        </div>\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12\" style=\"text-align: center;\">\r\n            <app-pagination [totalRecords]=\"products.length\" [recordsPerPage]=\"recordsPerPage\" (pageClick)=\"getPageDetails($event)\"></app-pagination>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/mech/mech.component.ts":
/*!****************************************!*\
  !*** ./src/app/mech/mech.component.ts ***!
  \****************************************/
/*! exports provided: CSliceFilter, MechComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSliceFilter", function() { return CSliceFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MechComponent", function() { return MechComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_search_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/search/search.service */ "./src/app/services/search/search.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CSliceFilter = /** @class */ (function () {
    function CSliceFilter() {
    }
    CSliceFilter.prototype.transform = function (iArr, start, end) {
        try {
            if (iArr && iArr.length > 0) {
                var tempArray = [];
                for (var i = start; i <= end; i++) {
                    tempArray.push(iArr[i]);
                }
                return tempArray;
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    CSliceFilter = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: "CSlice"
        })
    ], CSliceFilter);
    return CSliceFilter;
}());

var MechComponent = /** @class */ (function () {
    function MechComponent(product, route, cdr, searchservice) {
        this.product = product;
        this.route = route;
        this.cdr = cdr;
        this.searchservice = searchservice;
        this.products = [];
        this.recordsPerPage = 3;
        this.currentPage = 1;
        this.keys = ["productName"];
        this.filePath = "./assets/products/Mech/images/";
    }
    MechComponent.prototype.ngOnInit = function () {
        var _this = this;
        try {
            this.getProducts();
            this.searchservice.searchAck.subscribe(function (iArr) {
                _this.products = iArr;
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    MechComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        this.searchservice.page.subscribe(function (IPage) {
            _this.start = IPage && IPage.startIndex >= 0 ? IPage.startIndex : 0;
            _this.end = IPage && IPage.endIndex >= 0 ? IPage.endIndex : _this.products.length;
        });
    };
    MechComponent.prototype.getProducts = function () {
        var _this = this;
        try {
            var param = {
                type: "MECH"
            };
            this.product.getProducts(param).subscribe(function (result) {
                if (result) {
                    console.log(result);
                    _this.products = result;
                    _this.searchservice.registerSearch({ items: _this.products, keys: _this.keys });
                }
            });
        }
        catch (_a) {
            console.error("Something Went wrong");
        }
    };
    MechComponent.prototype.getPageDetails = function (IPage) {
        try {
            this.start = IPage && IPage.startIndex >= 0 ? IPage.startIndex : 0;
            this.end = IPage && IPage.endIndex >= 0 ? IPage.endIndex : this.products.length;
        }
        catch (error) {
            console.error(error);
        }
    };
    MechComponent.prototype.getProductDetails = function (iProduct) {
        try {
            this.product.currentProduct = Object.assign({}, iProduct);
            this.route.navigateByUrl("/product-details/" + iProduct.productName).then(function (res) {
                console.log(res);
            }, function (error) {
                console.error(error);
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    MechComponent.prototype.updateList = function (iEvent) {
        try {
            this.products = iEvent;
        }
        catch (error) {
            console.error(error);
        }
    };
    MechComponent.prototype.ngOnDestroy = function () {
        try {
            if (!this.cdr['destroyed']) {
                this.cdr.detectChanges();
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    MechComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mech',
            template: __webpack_require__(/*! ./mech.component.html */ "./src/app/mech/mech.component.html"),
            styles: [__webpack_require__(/*! ./mech.component.css */ "./src/app/mech/mech.component.css")],
            providers: [CSliceFilter]
        }),
        __metadata("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _services_search_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]])
    ], MechComponent);
    return MechComponent;
}());



/***/ }),

/***/ "./src/app/multiple-maps/multiple-maps.component.css":
/*!***********************************************************!*\
  !*** ./src/app/multiple-maps/multiple-maps.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".padding0{\r\n    padding:0px;\r\n}\r\n#map,#map1{\r\n    width:400px;\r\n    height:400px;\r\n}"

/***/ }),

/***/ "./src/app/multiple-maps/multiple-maps.component.html":
/*!************************************************************!*\
  !*** ./src/app/multiple-maps/multiple-maps.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n  <div class=\"col-md-6 col-sm-6 col-xs-6\">\r\n    <div id=\"pleaseConnect\">\r\n      <p>Please connect to the Internet...</p>\r\n  </div>\r\n  <div id=\"map\" class=\"map\"></div>\r\n  </div>\r\n  <div class=\"col-md-6 col-sm-6 col-xs-6\">\r\n    <div id=\"pleaseConnect1\">\r\n      <p>Please connect to the Internet...</p>\r\n  </div>\r\n  <div id=\"map1\" class=\"map1\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/multiple-maps/multiple-maps.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/multiple-maps/multiple-maps.component.ts ***!
  \**********************************************************/
/*! exports provided: MultipleMapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleMapsComponent", function() { return MultipleMapsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gmap_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gmap.service */ "./src/app/gmap.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MultipleMapsComponent = /** @class */ (function () {
    //@ViewChild("map") mapElement;
    //@ViewChild("pleaseConnect") pleaseconnect;
    function MultipleMapsComponent(gmap, _elem) {
        this.gmap = gmap;
        this._elem = _elem;
        try {
            this.loadMap();
            //this.loadMap(this._elem.nativeElement.querySelector('#map'),this._elem.nativeElement.querySelector('#pleaseConnect'));
            //this.loadMap(this._elem.nativeElement.querySelector('#map1'), this._elem.nativeElement.querySelector('#pleaseConnect1'));
        }
        catch (error) {
            console.error(error);
        }
    }
    MultipleMapsComponent.prototype.loadMap = function () {
        var _this = this;
        setTimeout(function () {
            //if(mapEle && pleaseEle){
            var mapLoaded = _this.gmap.initMap(_this._elem.nativeElement.querySelector('#map'), _this._elem.nativeElement.querySelector('#pleaseConnect'));
            Promise.all([
                mapLoaded,
            ]).then(function (result) {
                var locations = result[1];
            });
            var mapLoaded2 = _this.gmap.initMap(_this._elem.nativeElement.querySelector('#map1'), _this._elem.nativeElement.querySelector('#pleaseConnect1'));
            Promise.all([
                mapLoaded2,
            ]).then(function (result) {
                var locations = result[1];
            });
            //}
        });
    };
    MultipleMapsComponent.prototype.ngOnInit = function () {
    };
    MultipleMapsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multiple-maps',
            template: __webpack_require__(/*! ./multiple-maps.component.html */ "./src/app/multiple-maps/multiple-maps.component.html"),
            styles: [__webpack_require__(/*! ./multiple-maps.component.css */ "./src/app/multiple-maps/multiple-maps.component.css")]
        }),
        __metadata("design:paramtypes", [_gmap_service__WEBPACK_IMPORTED_MODULE_1__["GmapService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], MultipleMapsComponent);
    return MultipleMapsComponent;
}());



/***/ }),

/***/ "./src/app/mycart/mycart.component.css":
/*!*********************************************!*\
  !*** ./src/app/mycart/mycart.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".step-box{\r\n    float: left;\r\n    padding:15px 8px;\r\n}\r\n.step-title{\r\n    font-family: sans-serif;\r\n    font-size:0.7vw !important;\r\n    margin-top:5px;\r\n    font-weight: 550 !important;\r\n    text-align: center;\r\n}\r\n.step-box .step-number{\r\n    text-align: center;\r\n}\r\n.step-box .step-number button{\r\n    width: 35px;\r\n    height: 35px;\r\n    border-radius: 50%;\r\n    z-index: 1;\r\n}\r\n.line{\r\n    width:100%;\r\n    height: 5px;\r\n    background-color: gray;\r\n}\r\n.active-step{\r\n    background: black !important;\r\n    color: white !important;\r\n    z-index: -1;\r\n}\r\n.action-btn{\r\n    width: 100px;\r\n    background: #53a1d8;\r\n    font-weight: bold;\r\n    color: white;\r\n    border: 0 none;\r\n    font-family: sans-serif;\r\n    border-radius: 1px;\r\n    cursor: pointer;\r\n    padding: 10px 5px;\r\n    margin: 10px 5px;\r\n}\r\n.nxt{\r\n    float: right;\r\n}\r\n.mat-card.mat-card {\r\n    background: white;\r\n    border: 0 none;\r\n    border-radius: 3px;\r\n    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4) !important;\r\n    padding: 20px 30px;\r\n    box-sizing: border-box;\r\n    width: 98.5%;\r\n    margin: 0px 10px;\r\n}\r\n.progress-bar{\r\n\r\n}\r\n.fs-title{\r\n    font-size: 15px;\r\n    text-transform: uppercase;\r\n    color: #3f3f40;\r\n    height: 32px;\r\n    padding: 10px;\r\n    margin-bottom: 10px;\r\n    text-align: left;\r\n    background: #eee;\r\n    font-family: sans-serif;\r\n}\r\n.fs-subtitle {\r\n    font-weight: normal;\r\n    font-size: 13px;\r\n    color: #666;\r\n    margin-bottom: 20px;\r\n    text-align: center;\r\n}\r\nh2{\r\n    font-weight: 700 !important;\r\n}\r\n.top-spacing{\r\n    margin-top: 15px !important;\r\n}\r\n.completed_h_line{\r\n    background: black;\r\n}\r\n.in-completed_h_line{\r\n    background: #dddddd;\r\n}\r\n.prg-bar .col-md-2 {\r\n    width: 12.5%;\r\n}\r\n@media screen and (max-width: 800px) {\r\n    .h_line { \r\n        width: 80%;\r\n        height: 4px;\r\n        position: absolute;\r\n        top: 30px;\r\n        z-index: 11;\r\n        left: 64%;\r\n    }\r\n}\r\n@media screen and (min-width: 1200px) {\r\n    .h_line { \r\n        width: 90%;\r\n        height: 4px;\r\n        position: absolute;\r\n        top: 30px;\r\n        z-index: 11;\r\n        left: 56%;\r\n    }\r\n  }\r\n.summary-header{\r\n      background-color: lightgray;\r\n      color:black;\r\n      font-family: Roboto-bold;\r\n      font-size:14px;\r\n      padding:5px 0px 5px 15px !important;\r\n  }\r\n.summary-header a{\r\n      color:brown;\r\n      font-family: Roboto-bold;\r\n      font-size:14px;\r\n      float: right;\r\n  }\r\n.sum-div{\r\n      margin: 5px 0px 5px 0px !important;\r\n  }\r\n.tot-div{\r\n    background-color: lightgray;\r\n    color:black;\r\n    font-family: Roboto-bold;\r\n    font-size:14px;\r\n    padding:5px 0px 5px 15px !important;\r\n    margin:0px !important;\r\n  }\r\n.summary-label{\r\n      color:black;\r\n      font-family: Roboto-bold;\r\n  }\r\n.summary-price{\r\n      float: right;\r\n  }"

/***/ }),

/***/ "./src/app/mycart/mycart.component.html":
/*!**********************************************!*\
  !*** ./src/app/mycart/mycart.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-8 col-sm-8 col-xs-12 stepper padding0\">\r\n  <div>\r\n    <mat-card>\r\n      <div class=\"prg-bar col-md-offset-2 col-sm-offset-2 col-xs-offset-3\" [ngClass]=\"{'disabled':isLinear}\">\r\n          <div *ngFor=\"let step of steps;let i = index\" class=\"step-box col-md-3\">\r\n              <div class=\"step-number\" [ngClass]=\"{'disabled':!step.visited }\"><div class=\"h_line\" *ngIf=\"i < steps.length -1\" [ngClass]=\"{'completed_h_line':activeStep.step > step.step , 'in-completed_h_line': activeStep.step <= step.step}\"></div><button [ngClass]=\"{'active-step':activeStep.step >= i }\" (click)=\"stepClick(step)\">{{i+1}}</button></div>\r\n              <div class=\"step-title hidden-xs\">{{step.title}}</div>\r\n          </div>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n  \r\n  <div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n    <mat-card class=\"stepBlock\">\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n            <!-- <h2 class=\"fs-title\">{{activeStep.title}}</h2> -->\r\n            <!-- <h3 class=\"fs-subtitle\">{{\"step \" + (activeStep.step + 1) + \" of \" + steps.length}}</h3> -->\r\n            <ng-template appHost></ng-template>\r\n        </div>\r\n     </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"col-md-4 col-sm-4 col-xs-12\">\r\n    <mat-card class=\"stepBlock\">\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12 summary-header\">\r\n          <div class=\"col-md-8 col-sm-8 col-xs-6 padding0\"><span>Order Summary</span></div>\r\n          <div class=\"col-md-4 col-sm-4 col-xs-6\"><a>Edit Cart</a></div>\r\n        </div>\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12 padding0 sum-div\">\r\n          <div class=\"col-md-6 col-sm-6 col-xs-6\"><span class=\"summary-label\">Subtotal :</span></div>\r\n          <div class=\"col-md-6 col-sm-6 col-xs-6\"><span class=\"summary-price\"><strong>300</strong></span></div>\r\n        </div>\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12 padding0 sum-div\">\r\n            <div class=\"col-md-6 col-sm-6 col-xs-6 paddin0\"><span class=\"summary-label\">Shipping :</span></div>\r\n            <div class=\"col-md-6 col-sm-6 col-xs-6 paddin0\"><span class=\"summary-price\"><strong>50</strong></span></div>\r\n        </div>\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12 padding0 sum-div\">\r\n            <div class=\"col-md-6 col-sm-6 col-xs-6 paddin0\"><span class=\"summary-label\">Estimated Sales tax:</span></div>\r\n            <div class=\"col-md-6 col-sm-6 col-xs-6 paddin0\"><span class=\"summary-price\"><strong>25</strong></span></div>\r\n        </div>\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12 tot-div padding0 sum-div\">\r\n            <div class=\"col-md-5 col-sm-5 col-xs-6 paddin0\"><span class=\"summary-label\">2 item(s)</span></div>\r\n            <div class=\"col-md-7 col-sm-7 col-xs-6 paddin0\"><span class=\"summary-price\">Total : <strong>375</strong></span></div>\r\n        </div>\r\n     </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/mycart/mycart.component.ts":
/*!********************************************!*\
  !*** ./src/app/mycart/mycart.component.ts ***!
  \********************************************/
/*! exports provided: MycartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycartComponent", function() { return MycartComponent; });
/* harmony import */ var _shipping_host_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shipping/host.directive */ "./src/app/shipping/host.directive.ts");
/* harmony import */ var _shipping_shipsteps_shipping_steps_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shipping/shipsteps/shipping-steps.service */ "./src/app/shipping/shipsteps/shipping-steps.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MycartComponent = /** @class */ (function () {
    function MycartComponent(_cartService, _userService, shipService, componentFactoryResolver) {
        this._cartService = _cartService;
        this._userService = _userService;
        this.shipService = shipService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.isLinear = true;
        this.steps = [];
        try {
            this.getAllSteps();
        }
        catch (error) {
            console.error(error);
        }
    }
    /**
     * @author SSW
     * @description this function is used for getting all steps used
     */
    MycartComponent.prototype.getAllSteps = function () {
        try {
            this.steps = this.shipService.getStep();
            console.log(this.steps);
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used for loading step dynamically
     */
    MycartComponent.prototype.loadStep = function (currentStep) {
        var _this = this;
        try {
            var adItem = this.steps[currentStep.step];
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
            var viewContainerRef = this.host.containerRef;
            viewContainerRef.clear();
            var componentRef = viewContainerRef.createComponent(componentFactory);
            componentRef.instance.changeStep.subscribe(function (inc) {
                _this.changeStep(inc);
                if (inc >= 0)
                    jQuery(".stepBlock").toggle("slide", { direction: "left" });
                else
                    jQuery(".stepBlock").toggle("slide", { direction: "right" });
            });
            componentRef.instance.data = adItem.data;
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used on/for step change
     * @param inc
     */
    MycartComponent.prototype.changeStep = function (inc) {
        try {
            if (this.steps[(this.activeStep.step + inc)]) {
                this.steps[(this.activeStep.step + inc)].visited = true;
                this.activeStep = this.steps[(this.activeStep.step + inc)];
                this.loadStep(this.activeStep);
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used for direct navigation to clicked step
     * @param step
     */
    MycartComponent.prototype.stepClick = function (step) {
        try {
            if (step)
                this.activeStep = step;
            this.loadStep(this.activeStep);
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used on initialization of component
     */
    MycartComponent.prototype.ngOnInit = function () {
        try {
            if (this.steps && this.steps instanceof Array && this.steps.length > 0) {
                this.steps[0].visited = true;
                this.activeStep = this.steps[0];
            }
            this.loadStep(this.activeStep);
        }
        catch (error) {
            console.error(error);
        }
    };
    /**
     * @author SSW
     * @description this function is used after initiazation of view
     */
    MycartComponent.prototype.ngAfterViewInit = function () {
        try {
            //jQuery("body").css("background-color","#dfdfdf");
        }
        catch (error) {
            console.error(error);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_shipping_host_directive__WEBPACK_IMPORTED_MODULE_0__["HostDirective"]),
        __metadata("design:type", _shipping_host_directive__WEBPACK_IMPORTED_MODULE_0__["HostDirective"])
    ], MycartComponent.prototype, "host", void 0);
    MycartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-mycart',
            template: __webpack_require__(/*! ./mycart.component.html */ "./src/app/mycart/mycart.component.html"),
            styles: [__webpack_require__(/*! ./mycart.component.css */ "./src/app/mycart/mycart.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _shipping_shipsteps_shipping_steps_service__WEBPACK_IMPORTED_MODULE_1__["ShippingStepsService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"]])
    ], MycartComponent);
    return MycartComponent;
}());



/***/ }),

/***/ "./src/app/product-details/product-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/product-details/product-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".service-title {\r\n    font-size: 14px;\r\n    font-family: Roboto-bold;\r\n    color:#000;\r\n}\r\n.prd-details mat-card-content{\r\n    padding:10px !important;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size:12px !important;\r\n    border:0px !important;\r\n}\r\n.add-cart{\r\n    width:100%;\r\n    height: 34px !important;\r\n    font-size: 15px;\r\n    font-family: cursive;\r\n}\r\n.tab-buttons{\r\n    background-color:#eee;\r\n    border:1px solid #ccc;\r\n    margin-top:10px !important;\r\n    padding:5px;\r\n}\r\n.tab-buttons ul li{\r\n    list-style: none;\r\n    float: left;\r\n    width:25%;\r\n    padding:5px;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n}\r\n.user-image{\r\n    height: 90px;\r\n    background-repeat: no-repeat;\r\n    background-size:100% 100%;\r\n    border:1px solid gray;\r\n    border-radius: 50px;\r\n}\r\n.tabs{\r\n    border:1px solid gray;\r\n}\r\n.tabs .u-r{\r\n    padding-bottom:5px;\r\n    padding-top:5px;\r\n    border-bottom: 1px dotted gray;\r\n}\r\n.tabs .user-review{\r\n    font-size:18px;\r\n    font-family: cursive;\r\n    color:cadetblue;\r\n    text-align: center;\r\n}\r\n.r-tab{\r\n    height: 250px;\r\n    overflow-y: scroll;\r\n}\r\n.prd-desc{\r\n    line-height: 2;\r\n    padding: 10px;\r\n    font-size: 12px;\r\n    font-family: serif;\r\n}"

/***/ }),

/***/ "./src/app/product-details/product-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/product-details/product-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n  <mat-card>\r\n      <div class=\"col-md-5 col-sm-5 col-xs-12 img-glry padding0\">\r\n        <app-img-gallary [imageList]=\"product.productImages\" [showCount]=\"imgShow\"></app-img-gallary>\r\n      </div>\r\n      <div class=\"col-md-7 col-sm-7 col-xs-12 padding0 prd-info\">\r\n        <mat-card class=\"prd-details\">\r\n            <mat-card-content class=\"service-title\">\r\n              <div style=\"width: 100%\">\r\n                <a>{{product.productName}}</a>\r\n                <app-rating [rating]=\"product.productRating\" [enableRating]=\"false\"></app-rating>\r\n            </div>\r\n            </mat-card-content>\r\n            <mat-card-content><b>&pound; {{product.productPrice}}</b></mat-card-content>\r\n            <mat-card-content><div class=\"prd-desc\" style=\"padding: 0px;\">{{product.productDescription}}</div></mat-card-content>\r\n            <mat-card-content>\r\n              <div class=\"col-md-4 col-xs-12 col-sm-4 padding-l0\">\r\n                  <app-qty-counter [quantity]=\"product.quantity ? product.quantity : 1\" (getQuantity)=\"setQuantity($event)\"></app-qty-counter>\r\n              </div>\r\n              <div class=\"col-md-4 col-xs-12 col-sm-4\">\r\n                <button class=\"btn btn-info add-cart\" (click)=\"addToCart()\"><span><i class=\"fa fa-cart-plus\" aria-hidden=\"true\"></i> Add to cart</span></button>\r\n              </div>\r\n            </mat-card-content>\r\n            <mat-card-content>\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12 padding-l0 tab-buttons\">\r\n                <ul>\r\n                  <li *ngFor=\"let tab of tabs;let i = index;\" (click)=\"selectedTab = tab;\">\r\n                    <a>{{tab.title}}<sup><span *ngIf=\"tab.id == 2 \" class=\"badge\">{{product.productReviews && product.productReviews.length ? product.productReviews.length : 0}}</span></sup></a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n                <div class=\"tabs\" *ngIf=\"selectedTab.id == 1\">\r\n                  <ul>\r\n                    <li *ngFor=\"let specification of product.productSpecification;let i = index;\">\r\n                      {{specification}}\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n                <div class=\"tabs r-tab\" *ngIf=\"selectedTab.id == 2\">\r\n                    <div class=\"col-md-12 col-xs-12 col-sm-12 padding0 u-r\" *ngFor=\"let review of product.productReviews;let i = index;\">\r\n                      <div class=\"col-md-2 col-sm-2 col-xs-12 user-image\" [ngStyle]=\"{'background-image' : 'url('+ (userPath + review.img) +')'}\"></div>\r\n                      <div class=\"col-md-10 col-sm-10 col-xs-12 user-review\">{{\"\\\"\"+review.review +\"\\\"\"}}</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tabs prd-desc\" *ngIf=\"selectedTab.id == 3\">\r\n                    {{product.productDescription}}\r\n                </div>\r\n              </div>\r\n            </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/product-details/product-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product-details/product-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart/cart.service */ "./src/app/services/cart/cart.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_search_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/search/search.service */ "./src/app/services/search/search.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(_productService, _cartService, _userService, router, cdr, _searchService) {
        this._productService = _productService;
        this._cartService = _cartService;
        this._userService = _userService;
        this.router = router;
        this.cdr = cdr;
        this._searchService = _searchService;
        this.tabs = [
            { title: "Specification", id: 1 },
            { title: "Reviews", id: 2 },
            { title: "Description", id: 3 }
        ];
        this.selectedTab = this.tabs[0];
        this.imgShow = 3;
        this.userPath = "./assets/products/Mech/users/";
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
        try {
            this.product = this._productService.currentProduct;
        }
        catch (error) {
            console.error(error);
        }
    };
    ProductDetailsComponent.prototype.setQuantity = function (iQuantity) {
        try {
            this.product.qauntity = iQuantity;
        }
        catch (error) {
            console.error(error);
        }
    };
    ProductDetailsComponent.prototype.ngAfterViewInit = function () {
        try {
            jQuery(".prd-info .mat-card.mat-card").css("border", "0px !important");
        }
        catch (error) {
            console.error(error);
        }
    };
    ProductDetailsComponent.prototype.addToCart = function () {
        var _this = this;
        try {
            var user_1 = this._userService.loggedInUser;
            if (user_1) {
                var item = {
                    userId: user_1.userId,
                    productId: this.product.productId,
                    quantity: this.product.qauntity,
                };
                this._cartService.addToCart(item).subscribe(function (res) {
                    if (res.statusCode == 200) {
                        _this._searchService.setloggedUser(user_1);
                        _this.router.navigate(["/", "mycart"]);
                    }
                }, function (error) {
                    console.error(error);
                });
            }
            else {
                this.router.navigate(['/', 'login']);
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    ProductDetailsComponent.prototype.ngOnDestroy = function () {
        try {
            if (!this.cdr['destroyed']) {
                this.cdr.detectChanges();
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    ProductDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-details',
            template: __webpack_require__(/*! ./product-details.component.html */ "./src/app/product-details/product-details.component.html"),
            styles: [__webpack_require__(/*! ./product-details.component.css */ "./src/app/product-details/product-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"], _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _services_search_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./src/app/rating/rating.component.css":
/*!*********************************************!*\
  !*** ./src/app/rating/rating.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul{\r\nlist-style-type: none;\r\npadding:0px;\r\n}\r\nli{\r\n    float:left;\r\n}\r\nli span{\r\n    margin-left:2px;\r\n}\r\n.disabled{\r\n    pointer-events: none;\r\n}"

/***/ }),

/***/ "./src/app/rating/rating.component.html":
/*!**********************************************!*\
  !*** ./src/app/rating/rating.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 padding0\" [ngClass]=\"{'disabled': !enableRating }\">\r\n  <div>\r\n    <ul>\r\n      <li *ngFor=\"let star of stars\" >\r\n        <span class=\"fa fa-star\" matToolTip=\"star.value\" (mouseover)=\"starFocused(star.value)\" (mouseout)=\"starFocusedOut()\" (click)=\"starClicked(star.value)\" [ngStyle]=\"{'color':star.value <= rating ? '#ffa500' : 'black'}\"></span>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/rating/rating.component.ts":
/*!********************************************!*\
  !*** ./src/app/rating/rating.component.ts ***!
  \********************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RatingComponent = /** @class */ (function () {
    function RatingComponent() {
        this.stars = [{ label: 'star', value: 1 }, { label: 'star', value: 2 }, { label: 'star', value: 3 },
            { label: 'star', value: 4 }, { label: 'star', value: 5 }];
    }
    RatingComponent.prototype.ngOnChanges = function () {
        this.ratingCopy = this.rating;
    };
    RatingComponent.prototype.ngOnInit = function () {
    };
    RatingComponent.prototype.ngAfterViewInit = function () {
    };
    RatingComponent.prototype.starFocused = function (iVal) {
        //console.log("Called in");
        this.rating = iVal;
    };
    RatingComponent.prototype.starClicked = function (iVal) {
        if (iVal) {
            this.rating = iVal;
            this.ratingCopy = this.rating;
        }
    };
    RatingComponent.prototype.starFocusedOut = function (iVal) {
        //console.log("Called Out");
        this.rating = this.ratingCopy;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], RatingComponent.prototype, "enableRating", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "rating", void 0);
    RatingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rating',
            template: __webpack_require__(/*! ./rating.component.html */ "./src/app/rating/rating.component.html"),
            styles: [__webpack_require__(/*! ./rating.component.css */ "./src/app/rating/rating.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".reg-header{\r\n    min-height: 75px;\r\n    max-height: 100px;\r\n    background-color: #cdccbe;\r\n    font-size: 300%;\r\n    color: #ffffff;\r\n    text-align: center;\r\n    font-family: courier;\r\n    font-weight: 700\r\n}\r\n.register-action button{\r\n    height: 50px;\r\n    border-radius: 5px !important;\r\n    width:100%;\r\n    font-size:25px;\r\n    font-weight:700;\r\n    font-family: 'Courier New', Courier, monospace;\r\n}\r\ninput{\r\n    font-family: Roboto-bold;\r\n    color:lightblue;\r\n}\r\n.msg{\r\n    font-weight: 600;\r\n    opacity: 0.5;\r\n    font-size:12px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color:rgb(16, 31, 231);\r\n}\r\n.register-box{\r\n    box-shadow: 0px 0px 15px;\r\n    border-radius: 8px !important;\r\n}\r\n@media only screen and (min-width: 768px) {\r\n    /* For mobile phones: */\r\n    .register-box {\r\n        margin-left:25%;\r\n        margin-top:2%;\r\n        box-shadow: 0px 0px 15px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n    <div class=\"col-md-6 col-sm-6 col-xs-12 register-box\">\r\n      <div class=\"col-md-12 col-12 col-xs-12\">\r\n          <div class=\"col-md-offset-4 col-sm-offset-4 col-xs-offset-1 logo-img\" [ngStyle]=\"{'backgroundImage':'url(' + filePath + 'sswlogo.JPG' + ')'}\"></div>\r\n      </div>\r\n      <div class=\"col-md-12 col-sm-12 col-xs-12 padding0 register\">\r\n          <form [formGroup]=\"registerForm\" (ngSubmit)=\"register(registerForm)\">\r\n              <mat-card>\r\n                  <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                      <mat-form-field>\r\n                          <input matInput formControlName=\"userName\" [(ngModel)]=\"user.username\">\r\n                          <span matPrefix><i class=\"fa fa-user-o\" aria-hidden=\"true\">&nbsp;&nbsp;&nbsp;</i></span>\r\n                          <mat-error *ngIf=\"registerForm.get('userName').hasError('required') && registerForm.get('userName').touched\">\r\n                            username is <strong>required</strong>\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                      <mat-form-field>\r\n                          <input matInput formControlName=\"email\" [(ngModel)]=\"user.email\">\r\n                          <span matPrefix><i class=\"fa fa-id-card-o\" aria-hidden=\"true\">&nbsp;&nbsp;&nbsp;</i></span>\r\n                          <mat-error *ngIf=\"registerForm.get('email').hasError('required') && registerForm.get('email').touched\">\r\n                              email is <strong>required</strong>\r\n                          </mat-error>\r\n                          <mat-error *ngIf=\"registerForm.get('email').hasError('pattern') && registerForm.get('email').touched\">\r\n                              email is <strong>invalid</strong>\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-12 col-sm-12 col-xs-12\" >\r\n                      <mat-form-field>\r\n                          <input matInput formControlName=\"mobile\" [(ngModel)]=\"user.mobile\">\r\n                          <span matPrefix><i class=\"fa fa-mobile fa-lg\" aria-hidden=\"true\">&nbsp;&nbsp;&nbsp;</i></span>\r\n                          <mat-error *ngIf=\"registerForm.get('mobile').hasError('required') && registerForm.get('mobile').touched\">\r\n                              mobile number is <strong>required</strong>\r\n                          </mat-error>\r\n                          <mat-error *ngIf=\"registerForm.get('mobile').hasError('pattern') && registerForm.get('mobile').touched\">\r\n                              mobile number is <strong>is</strong>\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                      <mat-form-field>\r\n                          <input matInput type=\"password\" formControlName=\"password\" [(ngModel)]=\"user.password\">\r\n                          <span matPrefix><i class=\"fa fa-key\" aria-hidden=\"true\">&nbsp;&nbsp;&nbsp;</i></span>\r\n                          <mat-error *ngIf=\"registerForm.get('password').hasError('required') && registerForm.get('password').touched\">\r\n                              password is <strong>required</strong>\r\n                          </mat-error>\r\n                          <mat-error *ngIf=\"registerForm.get('password').hasError('pattern') && registerForm.get('password').touched\">\r\n                              password is <strong>invalid</strong>\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                      <mat-form-field>\r\n                          <input [attr.type]=\"showPassword ? 'text' : 'password'\" matInput formControlName=\"rePassword\">\r\n                          <span matPrefix><i class=\"fa fa-key\" aria-hidden=\"true\">&nbsp;&nbsp;&nbsp;</i></span>\r\n                          <mat-icon style=\"cursor:pointer\" matSuffix (click)=\"showPassword = !showPassword\">{{showPassword ? 'visibility_off':'visibility'}}</mat-icon>                          <mat-error *ngIf=\"registerForm.get('rePassword').hasError('required') && registerForm.get('rePassword').touched\">\r\n                              password is <strong>required</strong>\r\n                          </mat-error>\r\n                          <mat-error *ngIf=\"registerForm.get('rePassword').hasError('mismatch') && registerForm.get('rePassword').touched\">\r\n                              password is <strong>mismatched</strong>\r\n                          </mat-error>\r\n                      </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                    <p class=\"msg\">\r\n                      <b>Note : </b>We will send you message confirming your registration within 24 hour.\r\n                    </p>\r\n                  </div>\r\n                  <div class=\"col-md-12 col-sm-12 col-xs-12 register-action\">\r\n                      <button mat-raised-button class=\"btn btn-info\">Register</button>\r\n                  </div>\r\n                  <div class=\"col-md-12 col-sm-12 col-xs-12\" style=\"padding-top:15px;\">\r\n                      <p class=\"msg\">Already have account ? <a [routerLink]=\"['/login']\">sign in</a></p>\r\n                  </div>\r\n              </mat-card>\r\n            </form>\r\n          </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: User, RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_search_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/search/search.service */ "./src/app/services/search/search.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/global */ "./src/app/shared/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var User = /** @class */ (function () {
    function User() {
        this.username = null;
        this.email = null;
        this.mobile = null;
        this.password = null;
    }
    return User;
}());

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, userService, router, searchservice) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.searchservice = searchservice;
        this.user = new User();
        this.showPassword = false;
        this.filePath = "./assets/icons/";
        this.registerForm = this.fb.group({
            userName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].MOBILE_REGEX)])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(_shared_global__WEBPACK_IMPORTED_MODULE_5__["Global"].PASSWORD_REGEX)])],
            rePassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.checkPassword.bind(this)]],
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.checkPassword = function (control) {
        try {
            if (control && control.value) {
                var _parentForm = control.parent;
                if (_parentForm) {
                    if (control.value !== _parentForm.get('password').value) {
                        return { mismatch: true };
                    }
                }
            }
            return false;
        }
        catch (error) {
            console.error(error);
        }
    };
    RegisterComponent.prototype.register = function (iForm) {
        var _this = this;
        if (iForm.valid) {
            var user = this.user;
            this.userService.signup(user).subscribe(function (result) {
                if (result && result.statusCode == 200) {
                    _this.router.navigate(["/", "mech"]).then(function () {
                        console.log("Navigating to mech");
                        _this.searchservice.setloggedUser(result.data);
                    });
                }
            });
        }
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
        try {
            jQuery("app-header").css("display", "none");
            jQuery("app-footer").css("display", "none");
        }
        catch (error) {
            console.error(error);
        }
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        try {
            jQuery("app-header").css("display", "block");
            jQuery("app-footer").css("display", "block");
        }
        catch (error) {
            console.error(error);
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_search_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/routing/routing.module.ts ***!
  \*******************************************/
/*! exports provided: routes, RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mech_mech_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mech/mech.component */ "./src/app/mech/mech.component.ts");
/* harmony import */ var _mails_mails_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mails/mails.component */ "./src/app/mails/mails.component.ts");
/* harmony import */ var _image_gallary_image_gallary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image-gallary/image-gallary.component */ "./src/app/image-gallary/image-gallary.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _itr_itr_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../itr/itr.component */ "./src/app/itr/itr.component.ts");
/* harmony import */ var _multiple_maps_multiple_maps_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../multiple-maps/multiple-maps.component */ "./src/app/multiple-maps/multiple-maps.component.ts");
/* harmony import */ var _custom_autocomplete_custom_autocomplete_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../custom-autocomplete/custom-autocomplete.component */ "./src/app/custom-autocomplete/custom-autocomplete.component.ts");
/* harmony import */ var _custom_drop_custom_drop_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../custom-drop/custom-drop.component */ "./src/app/custom-drop/custom-drop.component.ts");
/* harmony import */ var _rules_step_rules_step_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../rules-step/rules-step.component */ "./src/app/rules-step/rules-step.component.ts");
/* harmony import */ var _custom_stepper_custom_stepper_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../custom-stepper/custom-stepper.component */ "./src/app/custom-stepper/custom-stepper.component.ts");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../calculator/calculator.component */ "./src/app/calculator/calculator.component.ts");
/* harmony import */ var _api_tester_api_tester_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../api-tester/api-tester.component */ "./src/app/api-tester/api-tester.component.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../product-details/product-details.component */ "./src/app/product-details/product-details.component.ts");
/* harmony import */ var _common_routeGuards_detailsGuard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../common/routeGuards/detailsGuard */ "./src/app/common/routeGuards/detailsGuard.ts");
/* harmony import */ var _map_g_map_g_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../map-g/map-g.component */ "./src/app/map-g/map-g.component.ts");
/* harmony import */ var _mycart_mycart_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../mycart/mycart.component */ "./src/app/mycart/mycart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'mech', component: _mech_mech_component__WEBPACK_IMPORTED_MODULE_2__["MechComponent"] },
    { path: 'mail', component: _mails_mails_component__WEBPACK_IMPORTED_MODULE_3__["MailsComponent"] },
    { path: 'gallary', component: _image_gallary_image_gallary_component__WEBPACK_IMPORTED_MODULE_4__["ImageGallaryComponent"] },
    { path: 'ITRDoc', component: _itr_itr_component__WEBPACK_IMPORTED_MODULE_7__["ITRComponent"] },
    { path: "map", component: _map_g_map_g_component__WEBPACK_IMPORTED_MODULE_17__["MapGComponent"] },
    { path: "maps", component: _multiple_maps_multiple_maps_component__WEBPACK_IMPORTED_MODULE_8__["MultipleMapsComponent"] },
    { path: "auto", component: _custom_autocomplete_custom_autocomplete_component__WEBPACK_IMPORTED_MODULE_9__["CustomAutocompleteComponent"] },
    { path: "drop", component: _custom_drop_custom_drop_component__WEBPACK_IMPORTED_MODULE_10__["CustomDropComponent"] },
    { path: "rules", component: _rules_step_rules_step_component__WEBPACK_IMPORTED_MODULE_11__["RulesStepComponent"] },
    { path: "stepper", component: _custom_stepper_custom_stepper_component__WEBPACK_IMPORTED_MODULE_12__["CustomStepperComponent"] },
    { path: "calc", component: _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_13__["CalculatorComponent"] },
    { path: "postman", component: _api_tester_api_tester_component__WEBPACK_IMPORTED_MODULE_14__["ApiTesterComponent"] },
    { path: "product-details/:id", component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_15__["ProductDetailsComponent"], canActivate: [_common_routeGuards_detailsGuard__WEBPACK_IMPORTED_MODULE_16__["DetailsGuards"]] },
    { path: "mycart", component: _mycart_mycart_component__WEBPACK_IMPORTED_MODULE_18__["MycartComponent"] },
    { path: "todo", loadChildren: "../todo/todo.module#TodoModule" }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/ruleapproval/ruleapproval.component.css":
/*!*********************************************************!*\
  !*** ./src/app/ruleapproval/ruleapproval.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ruleapproval/ruleapproval.component.html":
/*!**********************************************************!*\
  !*** ./src/app/ruleapproval/ruleapproval.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  ruleapproval works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/ruleapproval/ruleapproval.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ruleapproval/ruleapproval.component.ts ***!
  \********************************************************/
/*! exports provided: RuleapprovalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleapprovalComponent", function() { return RuleapprovalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RuleapprovalComponent = /** @class */ (function () {
    function RuleapprovalComponent() {
    }
    RuleapprovalComponent.prototype.ngOnInit = function () {
    };
    RuleapprovalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ruleapproval',
            template: __webpack_require__(/*! ./ruleapproval.component.html */ "./src/app/ruleapproval/ruleapproval.component.html"),
            styles: [__webpack_require__(/*! ./ruleapproval.component.css */ "./src/app/ruleapproval/ruleapproval.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RuleapprovalComponent);
    return RuleapprovalComponent;
}());



/***/ }),

/***/ "./src/app/ruleattachment/ruleattachment.component.css":
/*!*************************************************************!*\
  !*** ./src/app/ruleattachment/ruleattachment.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ruleattachment/ruleattachment.component.html":
/*!**************************************************************!*\
  !*** ./src/app/ruleattachment/ruleattachment.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  ruleattachment works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/ruleattachment/ruleattachment.component.ts":
/*!************************************************************!*\
  !*** ./src/app/ruleattachment/ruleattachment.component.ts ***!
  \************************************************************/
/*! exports provided: RuleattachmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleattachmentComponent", function() { return RuleattachmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RuleattachmentComponent = /** @class */ (function () {
    function RuleattachmentComponent() {
    }
    RuleattachmentComponent.prototype.ngOnInit = function () {
    };
    RuleattachmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ruleattachment',
            template: __webpack_require__(/*! ./ruleattachment.component.html */ "./src/app/ruleattachment/ruleattachment.component.html"),
            styles: [__webpack_require__(/*! ./ruleattachment.component.css */ "./src/app/ruleattachment/ruleattachment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RuleattachmentComponent);
    return RuleattachmentComponent;
}());



/***/ }),

/***/ "./src/app/ruleattribute/ruleattribute.component.css":
/*!***********************************************************!*\
  !*** ./src/app/ruleattribute/ruleattribute.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-checkbox,.mat-radio-button{\r\n    position: relative;\r\n    padding-left: 0px !important;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    line-height: 19px;\r\n    display: inline-block;\r\n    color: #666;\r\n}\r\n.expand-title{\r\n    font-size: 13px;\r\n    cursor: pointer;\r\n    height: 30px;\r\n    display: table;\r\n    text-align: left\r\n}\r\n.mat-expansion-panel{\r\n    display: contents !important;\r\n}\r\n.mat-expansion-panel-header{\r\n    font-weight: 600 !important;\r\n}\r\n.list_box1, .list_box2 {\r\n    height: 100px;\r\n    width: 250px;\r\n    border: 1px solid #ddd;\r\n    outline: none;\r\n    font-size: 12px;\r\n    font-family: sans-serif;\r\n    color: #777;\r\n    padding: 5px;\r\n}\r\n.top-spacing{\r\n    margin-top: 15px !important;\r\n}\r\n.lstbox_btn {\r\n    background: #777a7b;\r\n    border: 0;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    width: 41px;\r\n    height: 25px;\r\n    margin: 5px;\r\n}\r\n.center-align{\r\n    text-align:center;\r\n}\r\n.lbl{\r\n    font-family: sans-serif;\r\n    line-height: 20px;\r\n    font-size: 13px;\r\n    float: left;\r\n    width: 200px;\r\n    color: #444;\r\n}"

/***/ }),

/***/ "./src/app/ruleattribute/ruleattribute.component.html":
/*!************************************************************!*\
  !*** ./src/app/ruleattribute/ruleattribute.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n    <div class=\"col-md-11 col-sm-11 col-xs-12 padding0\">\r\n        <mat-accordion>\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                  User Defined Attributes\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <div>\r\n                  <div *ngFor=\"let attribute of attributes.userAttributes;let i = index;\">\r\n                      <div [ngClass]=\"{'col-md- 2 col-sm-2 col-xs-6 padding0' : attribute.options}\">\r\n                          <span class=\"lbl\">{{attribute.DropDownName}}</span>\r\n                      </div>\r\n                        <div *ngIf=\"attribute.options\" class=\"col-md-10 col-sm-10 col-xs-6\">\r\n                        <mat-radio-group [(ngModel)]=\"attribute.selected\">\r\n                          <div class=\"col-md-2 col-sm-3 col-xs-12\" *ngFor=\"let subAtr of attribute.options;let j = index;\">\r\n                            <mat-radio-button [value]=\"subAtr.DropDownID\">{{subAtr.DropDownName}}</mat-radio-button>\r\n                          </div>\r\n                        </mat-radio-group>\r\n                        </div>\r\n                  </div>\r\n              </div>\r\n            </mat-expansion-panel>\r\n        </mat-accordion>\r\n    </div>\r\n\r\n    <div class=\"col-md-11 col-sm-11 col-xs-12 padding0\">\r\n        <mat-accordion>\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                  Logic Driven Attributes\r\n                </mat-panel-title>\r\n              </mat-expansion-panel-header>\r\n              <div>\r\n                  <div *ngFor=\"let attribute of attributes.logicalAttributes;let i = index;\">\r\n                      <div [ngClass]=\"{'col-md- 2 col-sm-2 col-xs-6 padding0' : attribute.options}\">\r\n                          <span class=\"lbl\">{{attribute.DropDownName}}</span>\r\n                      </div>\r\n                        <div *ngIf=\"attribute.options\" class=\"col-md-10 col-sm-10 col-xs-6\">\r\n                          <div class=\"col-md-3 col-sm-3 col-xs-12\" *ngFor=\"let subAtr of attribute.options;let j = index;\">\r\n                            <mat-checkbox [value]=\"subAtr.DropDownID\" [(ngModel)]=\"subAtr.checked\">{{subAtr.DropDownName}}</mat-checkbox>\r\n                          </div>\r\n                        </div>\r\n                  </div>\r\n              </div>\r\n            </mat-expansion-panel>\r\n        </mat-accordion>\r\n    </div>\r\n\r\n    \r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/ruleattribute/ruleattribute.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ruleattribute/ruleattribute.component.ts ***!
  \**********************************************************/
/*! exports provided: RuleattributeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleattributeComponent", function() { return RuleattributeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_rules_rules_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/rules/rules.service */ "./src/app/services/rules/rules.service.ts");
/* harmony import */ var _general_lsdb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general/lsdb */ "./src/app/general/lsdb.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RuleattributeComponent = /** @class */ (function () {
    function RuleattributeComponent(ruleService) {
        this.ruleService = ruleService;
        this.attributes = {
            userAttributes: [],
            logicalAttributes: [],
        };
    }
    RuleattributeComponent.prototype.ngOnInit = function () {
        try {
            this.loadDropDowns();
        }
        catch (error) {
            console.error(error);
        }
    };
    RuleattributeComponent.prototype.loadDropDowns = function () {
        var _this = this;
        try {
            this.ruleService.getRuleAttribute().subscribe(function (res) {
                if (res) {
                    if (res.logicdriven) {
                        _this.attributes.logicalAttributes = res.logicdriven;
                    }
                    if (res.userdefined) {
                        _this.attributes.userAttributes = res.userdefined;
                    }
                    if (_general_lsdb__WEBPACK_IMPORTED_MODULE_2__["localDB"].getDatabyKey("attributes")) {
                        _this.attributes = _general_lsdb__WEBPACK_IMPORTED_MODULE_2__["localDB"].getDatabyKey("attributes");
                    }
                }
            }, function (error) {
                console.error(error);
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    RuleattributeComponent.prototype.ngOnDestroy = function () {
        try {
            _general_lsdb__WEBPACK_IMPORTED_MODULE_2__["localDB"].setDatabyKey("attributes", this.attributes);
        }
        catch (error) {
            console.error(error);
        }
    };
    RuleattributeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ruleattribute',
            template: __webpack_require__(/*! ./ruleattribute.component.html */ "./src/app/ruleattribute/ruleattribute.component.html"),
            styles: [__webpack_require__(/*! ./ruleattribute.component.css */ "./src/app/ruleattribute/ruleattribute.component.css")]
        }),
        __metadata("design:paramtypes", [_services_rules_rules_service__WEBPACK_IMPORTED_MODULE_1__["RulesService"]])
    ], RuleattributeComponent);
    return RuleattributeComponent;
}());



/***/ }),

/***/ "./src/app/rulecondition/rulecondition.component.css":
/*!***********************************************************!*\
  !*** ./src/app/rulecondition/rulecondition.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropwiz_frm {\r\n    background-color: #fdfbfb;\r\n    font-family: sans-serif;\r\n    color: #777;\r\n    font-size: 12px;\r\n    font-weight: normal;\r\n    padding: 2px;\r\n    border: 1px solid #cccccc;\r\n    height: 30px;\r\n    width: 100%;\r\n    outline: none;\r\n    border-radius: 4px;\r\n}\r\n.wizard_lbl {\r\n    display: block;\r\n    line-height: 20px;\r\n    height: 25px;\r\n    height: 20px;\r\n    font-size: 12px;\r\n    padding: 5px;\r\n    color: #444;\r\n    font-family: sans-serif;\r\n    font-weight: normal;\r\n}\r\n.top-spacing{\r\n    margin-top:15px;\r\n}\r\n.step5_grid {\r\n    width: 90%;\r\n    text-align: left;\r\n    font-size: 13px;\r\n    color: #444;\r\n    font-family: sans-serif;\r\n    margin-top: 15px;\r\n}\r\n.step5_grid td{\r\n    border:0px !important;\r\n}\r\n.step5_grid th{\r\n    text-align: center;\r\n    padding:8px;\r\n}\r\n.txtwiz_frm {\r\n    padding: 5px;\r\n    font-family: sans-serif;\r\n    color: #777;\r\n    font-size: 12px;\r\n    height: 30px;\r\n    width: 90%;\r\n    border-radius: 4px;\r\n    border: 1px solid #ddd;\r\n    outline: none;\r\n    margin-left: 10px;\r\n}"

/***/ }),

/***/ "./src/app/rulecondition/rulecondition.component.html":
/*!************************************************************!*\
  !*** ./src/app/rulecondition/rulecondition.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n  <div class=\"col-md-8 col-sm-8 col-xs-12\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n        <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n                <label class=\"wizard_lbl\">If (Numerator)</label>\r\n            </div>\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n                <select [(ngModel)]=\"rCondition.numerator\" class=\"dropwiz_frm\">\r\n                    <option *ngFor=\"let item of numerator;let i = index;\" [value]=\"item.DropDownID\">\r\n                      {{item.DropDownName}}\r\n                    </option>\r\n                  </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n                  <label class=\"wizard_lbl\">Of (Validation Level)</label>\r\n              </div>\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n                  <select [(ngModel)]=\"rCondition.validator\" class=\"dropwiz_frm\">\r\n                      <option *ngFor=\"let item of validator;let i = index;\" [value]=\"item.DropDownID\">\r\n                        {{item.DropDownName}}\r\n                      </option>\r\n                    </select>\r\n              </div>\r\n          </div>\r\n    </div>\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 padding0 top-spacing\">\r\n        <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n                <label class=\"wizard_lbl\">in (Aggregation Level)</label>\r\n            </div>\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n                <select [(ngModel)]=\"rCondition.aggregator\" class=\"dropwiz_frm\">\r\n                    <option *ngFor=\"let item of aggregator;let i = index;\" [value]=\"item.DropDownID\">\r\n                      {{item.DropDownName}}\r\n                    </option>\r\n                  </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-sm-6 col-xs-12\">\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n                  <label class=\"wizard_lbl\">Of (Denominator)</label>\r\n              </div>\r\n              <div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n                  <select [(ngModel)]=\"rCondition.denominator\" class=\"dropwiz_frm\">\r\n                      <option *ngFor=\"let item of denominator;let i = index;\" [value]=\"item.DropDownID\">\r\n                        {{item.DropDownName}}\r\n                      </option>\r\n                    </select>\r\n              </div>\r\n          </div>\r\n    </div>\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 table-responsive\">\r\n        <table class=\"step5_grid\" cellpadding=\"0\" cellspacing=\"5\">\r\n          <thead>\r\n            <th></th>\r\n            <th>Condition Type</th>\r\n            <th>Condition Value</th>\r\n            <th>Then</th>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let item of rCondition.conditionsArr;let i = index;\">\r\n              <td style=\"width:10%;\">{{item.sr_no}}</td>\r\n              <td style=\"width:30%;\">\r\n                <select [(ngModel)]=\"item.cType\" class=\"dropwiz_frm\">\r\n                    <option *ngFor=\"let condtion of conditions;let i = index;\" [value]=\"condtion.DropDownID\">\r\n                        {{condtion.DropDownName}}\r\n                      </option>\r\n                </select>\r\n              </td>\r\n              <td style=\"width:30%;\">\r\n                  <input type=\"text\" class=\"txtwiz_frm\" [(ngModel)]=\"item.cValue\">\r\n              </td>\r\n              <td style=\"width:30%;\">\r\n                <select [(ngModel)]=\"item.cThen\" class=\"dropwiz_frm\">\r\n                  <option *ngFor=\"let then of thens;let i = index;\" [value]=\"then.DropDownID\">\r\n                    {{then.DropDownName}}\r\n                  </option>\r\n                </select>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-3 col-sm-3 col-xs-12\">\r\n      <img alt=\"calc\"  src=\"{{'assets/calc.png'}}\" style=\"margin: 15px 0 0 30px;\">\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/rulecondition/rulecondition.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/rulecondition/rulecondition.component.ts ***!
  \**********************************************************/
/*! exports provided: RuleconditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleconditionComponent", function() { return RuleconditionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_rules_rules_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/rules/rules.service */ "./src/app/services/rules/rules.service.ts");
/* harmony import */ var _general_lsdb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general/lsdb */ "./src/app/general/lsdb.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RuleconditionComponent = /** @class */ (function () {
    function RuleconditionComponent(ruleService) {
        this.ruleService = ruleService;
        this.numerator = [];
        this.validator = [];
        this.aggregator = [];
        this.denominator = [];
        this.conditions = [];
        this.thens = [];
        this.rCondition = {
            numerator: "",
            validator: "",
            aggregator: "",
            denominator: "",
            conditionsArr: [
                { sr_no: "ls", cType: "", cValue: "", cThen: "" },
                { sr_no: "ls", cType: "", cValue: "", cThen: "" },
                { sr_no: "ls", cType: "", cValue: "", cThen: "" }
            ]
        };
    }
    RuleconditionComponent.prototype.ngOnInit = function () {
        try {
            this.loadDropDowns();
            if (_general_lsdb__WEBPACK_IMPORTED_MODULE_2__["localDB"].getDatabyKey("conditions")) {
                this.rCondition = _general_lsdb__WEBPACK_IMPORTED_MODULE_2__["localDB"].getDatabyKey("conditions");
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    RuleconditionComponent.prototype.loadDropDowns = function () {
        var _this = this;
        try {
            this.ruleService.getRuleCondion().subscribe(function (res) {
                if (res) {
                    if (res.aggregator) {
                        _this.aggregator = res.aggregator;
                    }
                    if (res.conditions) {
                        _this.conditions = res.conditions;
                    }
                    if (res.denominator) {
                        _this.denominator = res.denominator;
                    }
                    if (res.numerator) {
                        _this.numerator = res.numerator;
                    }
                    if (res.thens) {
                        _this.thens = res.thens;
                    }
                    if (res.validator) {
                        _this.validator = res.validator;
                    }
                }
            }, function (error) {
                console.error(error);
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    RuleconditionComponent.prototype.ngOnDestroy = function () {
        try {
            _general_lsdb__WEBPACK_IMPORTED_MODULE_2__["localDB"].setDatabyKey("conditions", this.rCondition);
        }
        catch (error) {
            console.error(error);
        }
    };
    RuleconditionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rulecondition',
            template: __webpack_require__(/*! ./rulecondition.component.html */ "./src/app/rulecondition/rulecondition.component.html"),
            styles: [__webpack_require__(/*! ./rulecondition.component.css */ "./src/app/rulecondition/rulecondition.component.css")]
        }),
        __metadata("design:paramtypes", [_services_rules_rules_service__WEBPACK_IMPORTED_MODULE_1__["RulesService"]])
    ], RuleconditionComponent);
    return RuleconditionComponent;
}());



/***/ }),

/***/ "./src/app/rulefilters/rulefilters.component.css":
/*!*******************************************************!*\
  !*** ./src/app/rulefilters/rulefilters.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-checkbox{\r\n    position: relative;\r\n    padding-left: 0px !important;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    line-height: 19px;\r\n    display: inline-block;\r\n    color: #666;\r\n}\r\n.expand-title{\r\n    font-size: 13px;\r\n    cursor: pointer;\r\n    height: 30px;\r\n    display: table;\r\n    text-align: left\r\n}\r\n.mat-expansion-panel{\r\n    display: contents !important;\r\n}\r\n.list_box1, .list_box2 {\r\n    height: 100px;\r\n    width: 250px;\r\n    border: 1px solid #ddd;\r\n    outline: none;\r\n    font-size: 12px;\r\n    font-family: sans-serif;\r\n    color: #777;\r\n    padding: 5px;\r\n}\r\n.top-spacing{\r\n    margin-top: 15px !important;\r\n}\r\n.lstbox_btn {\r\n    background: #777a7b;\r\n    border: 0;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    width: 41px;\r\n    height: 25px;\r\n    margin: 5px;\r\n}\r\n.center-align{\r\n    text-align:center;\r\n}"

/***/ }),

/***/ "./src/app/rulefilters/rulefilters.component.html":
/*!********************************************************!*\
  !*** ./src/app/rulefilters/rulefilters.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n  <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n    <div *ngFor=\"let filter of filters.defaultTypes;let i = index;\">\r\n      <div [ngClass]=\"{'col-md-4 col-sm-4 col-xs-6 padding0' : filter.subTypes && filter.checked}\">\r\n          <mat-checkbox [value]=\"filter.DropDownID\" [(ngModel)]=\"filter.checked\" (change)=\"checkBoxChecked(filter,'assetGroup')\">{{filter.DropDownName}}</mat-checkbox>\r\n      </div>\r\n        <div *ngIf=\"filter.subTypes && filter.checked\" class=\"col-md-8 col-sm-8 col-xs-6\">\r\n          <div *ngFor=\"let subfilter of filter.subTypes;let j = index;\">\r\n            <mat-checkbox [value]=\"subfilter.DropDownID\" [(ngModel)]=\"subfilter.checked\" (change)=\"checkBoxChecked(subfilter,'assetTypes')\">{{subfilter.DropDownName}}</mat-checkbox>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-md-12 col-sm-12 col-xs-12 padding0 top-spacing\" *ngIf=\"showAssetGroup\">\r\n      <div class=\"col-md-3 col-sm-3 col-xs-12\">\r\n          <select multiple=\"multiple\" class=\"list_box1\" [(ngModel)]=\"filters.selectedGroups\">\r\n            <option *ngFor=\"let group of filters.assetGroups;let i = index;\" [value]=\"group.DropDownID\">\r\n              {{group.DropDownName}}\r\n            </option>\r\n          </select>\r\n      </div>\r\n      <div class=\"col-md-2 col-sm-2 col-xs-12\">\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 padding0 center-align\">\r\n              <button class=\"lstbox_btn\" (click)=\"transferFilters(filters.assetGroups,filters.selectedAssetGroups,filters.selectedGroups)\"><i class=\"fa fa-angle-right fa-lg\"></i></button>\r\n          </div>\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12 padding0 center-align\">\r\n              <button class=\"lstbox_btn\" (click)=\"transferFilters(filters.selectedAssetGroups,filters.assetGroups,filters.selectedGroups)\"><i class=\"fa fa-angle-left fa-lg\"></i></button>\r\n          </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-3 col-xs-12\">\r\n          <select multiple=\"multiple\" class=\"list_box1\" [(ngModel)]=\"selectedGroups\">\r\n            <option *ngFor=\"let group of filters.selectedAssetGroups;let i = index;\" [value]=\"group.DropDownID\">\r\n              {{group.DropDownName}}\r\n            </option>\r\n          </select>\r\n      </div>\r\n  </div>\r\n  \r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 padding0 top-spacing\" *ngIf=\"showAssetType\">\r\n      <div class=\"col-md-3 col-sm-3 col-xs-12\">\r\n        <select multiple=\"multiple\" class=\"list_box1\" [(ngModel)]=\"filters.selectedAssets\">\r\n           <option *ngFor=\"let group of filters.assetTypes;let i = index;\" [value]=\"group.DropDownID\">\r\n             {{group.DropDownName}}\r\n           </option>\r\n        </select>\r\n      </div>\r\n      <div class=\"col-md-2 col-sm-2 col-xs-12\">\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12 padding0 center-align\">\r\n            <button class=\"lstbox_btn\" (click)=\"transferFilters(filters.assetTypes,filters.selectedAssetTypes,filters.selectedAssets)\"><i class=\"fa fa-angle-right fa-lg\"></i></button>\r\n        </div>\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12 padding0 center-align\">\r\n            <button class=\"lstbox_btn\" (click)=\"transferFilters(filters.selectedAssetTypes,filters.assetTypes,filters.selectedAssets)\"><i class=\"fa fa-angle-left fa-lg\"></i></button>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-3 col-xs-12\">\r\n        <select multiple=\"multiple\" class=\"list_box1\" [(ngModel)]=\"filters.selectedAssets\">\r\n          <option *ngFor=\"let group of filters.selectedAssetTypes;let i = index;\" [value]=\"group.DropDownID\">\r\n            {{group.DropDownName}}\r\n          </option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n\r\n  <div class=\"col-md-11 col-sm-11 col-xs-12 padding0 top-spacing\">\r\n      <mat-accordion>\r\n          <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                User Defined Attributes\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            <div>\r\n                <div *ngFor=\"let filter of filters.userTypes;let i = index;\">\r\n                    <div [ngClass]=\"{'col-md-2 col-sm-2 col-xs-6 padding0' : filter.options && filter.checked}\">\r\n                        <mat-checkbox [value]=\"filter.DropDownID\" [(ngModel)]=\"filter.checked\">{{filter.DropDownName}}</mat-checkbox>\r\n                    </div>\r\n                      <div *ngIf=\"filter.options && filter.checked\" class=\"col-md-10 col-sm-10 col-xs-6\">\r\n                        <div class=\"col-md-3 col-sm-3 col-xs-12\" *ngFor=\"let subfilter of filter.options;let j = index;\">\r\n                          <mat-checkbox [value]=\"subfilter.DropDownID\" [(ngModel)]=\"subfilter.checked\">{{subfilter.DropDownName}}</mat-checkbox>\r\n                        </div>\r\n                      </div>\r\n                </div>\r\n            </div>\r\n          </mat-expansion-panel>\r\n      </mat-accordion>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/rulefilters/rulefilters.component.ts":
/*!******************************************************!*\
  !*** ./src/app/rulefilters/rulefilters.component.ts ***!
  \******************************************************/
/*! exports provided: RulefiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulefiltersComponent", function() { return RulefiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_rules_rules_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/rules/rules.service */ "./src/app/services/rules/rules.service.ts");
/* harmony import */ var _general_lsdb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general/lsdb */ "./src/app/general/lsdb.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RulefiltersComponent = /** @class */ (function () {
    function RulefiltersComponent(ruleService) {
        this.ruleService = ruleService;
        this.filters = {
            defaultTypes: [],
            userTypes: [],
            assetGroups: [],
            assetTypes: [],
            selectedAssetTypes: [],
            selectedAssetGroups: [],
            selectedAssets: null,
            selectedGroups: null,
        };
        this.showAssetType = false;
        this.showAssetGroup = false;
    }
    RulefiltersComponent.prototype.ngOnInit = function () {
        try {
            this.loadDropDowns("default");
            //this.loadDropDowns("user");
            //this.loadDropDowns("assetgroup");
            //this.loadDropDowns("assettype")
        }
        catch (error) {
            console.info(error);
        }
    };
    RulefiltersComponent.prototype.loadDropDowns = function (type) {
        var _this = this;
        try {
            this.ruleService.getRuleFilters().subscribe(function (res) {
                console.log(res);
                switch (type) {
                    case "default":
                        _this.filters.defaultTypes = res.default ? res.default : [];
                    //break;
                    case "user":
                        _this.filters.userTypes = res.userdefined ? res.userdefined : [];
                    //break;
                    case "assetgroup":
                        _this.filters.assetGroups = res.assetgroups ? res.assetgroups : [];
                    //break;
                    case "assettype":
                        _this.filters.assetTypes = res.assettypes ? res.assettypes : [];
                }
                if (_general_lsdb__WEBPACK_IMPORTED_MODULE_2__["localDB"].getDatabyKey("filters")) {
                    var filters = _general_lsdb__WEBPACK_IMPORTED_MODULE_2__["localDB"].getDatabyKey("filters");
                    _this.checkBoxChecked(filters.defaultTypes[0], "assetGroup");
                    _this.checkBoxChecked(filters.defaultTypes[0].subTypes[0], "assetTypes");
                    _this.filters = filters;
                }
            }, function (error) {
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    RulefiltersComponent.prototype.checkBoxChecked = function (filter, iChoice) {
        try {
            switch (iChoice) {
                case "assetTypes":
                    if (filter && (filter.DropDownID == "7" && filter.checked)) {
                        this.showAssetType = true;
                    }
                    else if (filter && (filter.DropDownID == "7" && !filter.checked)) {
                        this.showAssetType = false;
                    }
                    break;
                case "assetGroup":
                    if (filter && (filter.DropDownID == "1" && filter.checked)) {
                        this.showAssetGroup = true;
                    }
                    else if (filter && (filter.DropDownID == "1" && !filter.checked)) {
                        this.showAssetGroup = false;
                    }
                    break;
            }
        }
        catch (error) {
        }
    };
    RulefiltersComponent.prototype.transferFilters = function (fromArray, toArray, iArr) {
        try {
            for (var i = fromArray.length - 1; i >= 0; i--) {
                if (fromArray[i].DropDownID && iArr.indexOf(fromArray[i].DropDownID) > -1) {
                    toArray.push(fromArray[i]);
                    fromArray.splice(i, 1);
                }
            }
            iArr = [];
        }
        catch (error) {
            console.error(error);
        }
    };
    RulefiltersComponent.prototype.ngOnDestroy = function () {
        try {
            console.log(JSON.stringify(this.filters));
            _general_lsdb__WEBPACK_IMPORTED_MODULE_2__["localDB"].setDatabyKey("filters", this.filters);
        }
        catch (error) {
            console.error(error);
        }
    };
    RulefiltersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rulefilters',
            template: __webpack_require__(/*! ./rulefilters.component.html */ "./src/app/rulefilters/rulefilters.component.html"),
            styles: [__webpack_require__(/*! ./rulefilters.component.css */ "./src/app/rulefilters/rulefilters.component.css")]
        }),
        __metadata("design:paramtypes", [_services_rules_rules_service__WEBPACK_IMPORTED_MODULE_1__["RulesService"]])
    ], RulefiltersComponent);
    return RulefiltersComponent;
}());



/***/ }),

/***/ "./src/app/rules-step/rules-step.component.css":
/*!*****************************************************!*\
  !*** ./src/app/rules-step/rules-step.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action-btn{\r\n    width: 100px;\r\n    background: #53a1d8;\r\n    font-weight: bold;\r\n    color: white;\r\n    border: 0 none;\r\n    font-family: sans-serif;\r\n    border-radius: 1px;\r\n    cursor: pointer;\r\n    padding: 10px 5px;\r\n    margin: 10px 5px;\r\n}\r\n.nxt{\r\n    float: right;\r\n}\r\n.mat-card.mat-card {\r\n    background: white;\r\n    border: 0 none;\r\n    border-radius: 3px;\r\n    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);\r\n    padding: 20px 30px;\r\n    box-sizing: border-box;\r\n    width: 98.5%;\r\n    margin: 0px 10px;\r\n}\r\n.fs-title{\r\n    font-size: 15px;\r\n    text-transform: uppercase;\r\n    color: #3f3f40;\r\n    height: 32px;\r\n    padding: 10px;\r\n    margin-bottom: 10px;\r\n    text-align: left;\r\n    background: #eee;\r\n    font-family: sans-serif;\r\n}\r\n.fs-subtitle {\r\n    font-weight: normal;\r\n    font-size: 13px;\r\n    color: #666;\r\n    margin-bottom: 20px;\r\n    text-align: center;\r\n}\r\nh2{\r\n    font-weight: 700 !important;\r\n}\r\n.top-spacing{\r\n    margin-top: 15px !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/rules-step/rules-step.component.html":
/*!******************************************************!*\
  !*** ./src/app/rules-step/rules-step.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\r\n  <mat-step label=\"RULE DETAILS\">\r\n    <div *ngIf=\"stepper.selectedIndex  == 0\">\r\n      <mat-card>\r\n        <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n            <h2 class=\"fs-title\">Rule Basic Details</h2>\r\n            <h3 class=\"fs-subtitle\">step 1 of 8</h3>\r\n        </div>\r\n          <app-details></app-details>\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n              <button class=\"action-btn prev\" (click)=\"changeStep(-1);\">Previous</button>\r\n              <button class=\"action-btn nxt\" (click)=\"changeStep(1);\">Next</button>\r\n            </div>\r\n      </mat-card>\r\n    </div>\r\n  </mat-step>\r\n  <mat-step label=\"SELECT RULE TYPE\">\r\n    <div *ngIf=\"stepper.selectedIndex  == 1\">\r\n        <mat-card>\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"fs-title\">SELECT RULE TYPE</h2>\r\n                <h3 class=\"fs-subtitle\">step 2 of 8</h3>\r\n            </div>\r\n            <app-ruletype></app-ruletype>\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                  <button class=\"action-btn prev\" (click)=\"changeStep(-1);\">Previous</button>\r\n                  <button class=\"action-btn nxt\" (click)=\"changeStep(1);\">Next</button>\r\n                </div>\r\n        </mat-card>\r\n    </div>\r\n  </mat-step>\r\n  <mat-step label=\"SELECT FILTERS\">\r\n    <div *ngIf=\"stepper.selectedIndex  == 2\">\r\n        <mat-card>\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"fs-title\">ADD FILTERS</h2>\r\n                <h3 class=\"fs-subtitle\">step 3 of 8</h3>\r\n            </div>\r\n            <app-rulefilters></app-rulefilters>\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                  <button class=\"action-btn prev\" (click)=\"changeStep(-1);\">Previous</button>\r\n                  <button class=\"action-btn nxt\" (click)=\"changeStep(1);\">Next</button>\r\n                </div>\r\n        </mat-card>\r\n    </div>\r\n  </mat-step>\r\n  <mat-step label=\"SET CONDITION\">\r\n    <div *ngIf=\"stepper.selectedIndex  == 3\">\r\n        <mat-card>\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"fs-title\">SET CONDITION</h2>\r\n                <h3 class=\"fs-subtitle\">step 4 of 8</h3>\r\n            </div>\r\n            <app-rulecondition></app-rulecondition>\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                  <button class=\"action-btn prev\" (click)=\"changeStep(-1);\">Previous</button>\r\n                  <button class=\"action-btn nxt\" (click)=\"changeStep(1);\">Next</button>\r\n                </div>\r\n        </mat-card>\r\n    </div>\r\n  </mat-step>\r\n  <mat-step label=\"SELECT ATTRIBUTE\">\r\n    <div *ngIf=\"stepper.selectedIndex  == 4\">\r\n        <mat-card>\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"fs-title\">SELECT ATTRIBUTES</h2>\r\n                <h3 class=\"fs-subtitle\">step 5 of 8</h3>\r\n            </div>\r\n            <app-ruleattribute></app-ruleattribute>\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                  <button class=\"action-btn prev\" (click)=\"changeStep(-1);\">Previous</button>\r\n                  <button class=\"action-btn nxt\" (click)=\"changeStep(1);\">Next</button>\r\n                </div>\r\n        </mat-card>\r\n    </div>\r\n  </mat-step>\r\n  <mat-step label=\"TEST RULE\">\r\n    <div *ngIf=\"stepper.selectedIndex  == 5\">\r\n        <mat-card>\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"fs-title\">TEST RULE</h2>\r\n                <h3 class=\"fs-subtitle\">step 6 of 8</h3>\r\n            </div>\r\n            <app-ruletest></app-ruletest>\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                  <button class=\"action-btn prev\" (click)=\"changeStep(-1);\">Previous</button>\r\n                  <button class=\"action-btn nxt\" (click)=\"changeStep(1);\">Next</button>\r\n                </div>\r\n        </mat-card>\r\n    </div>\r\n  </mat-step>\r\n  <mat-step label=\"ATTACH SCHEME(S)\">\r\n    <div *ngIf=\"stepper.selectedIndex  == 6\">\r\n        <mat-card>\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"fs-title\">ATTACH SCHEME (S)</h2>\r\n                <h3 class=\"fs-subtitle\">step 7 of 8</h3>\r\n            </div>\r\n            <app-ruleattachment></app-ruleattachment>\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                  <button class=\"action-btn prev\" (click)=\"changeStep(-1);\">Previous</button>\r\n                  <button class=\"action-btn nxt\" (click)=\"changeStep(1);\">Next</button>\r\n                </div>\r\n        </mat-card>\r\n    </div>\r\n  </mat-step>\r\n  <mat-step label=\"APPROVAL\">\r\n    <div *ngIf=\"stepper.selectedIndex  == 7\">\r\n        <mat-card>\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                <h2 class=\"fs-title\">APPROVE RULE</h2>\r\n                <h3 class=\"fs-subtitle\">step 8 of 8</h3>\r\n            </div>\r\n            <app-ruleapproval></app-ruleapproval>\r\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                  <button class=\"action-btn prev\" (click)=\"changeStep(-1);\">Previous</button>\r\n                  <button class=\"action-btn nxt\" (click)=\"changeStep(1);\">Next</button>\r\n                </div>\r\n        </mat-card>\r\n    </div>\r\n  </mat-step>\r\n</mat-horizontal-stepper>\r\n"

/***/ }),

/***/ "./src/app/rules-step/rules-step.component.ts":
/*!****************************************************!*\
  !*** ./src/app/rules-step/rules-step.component.ts ***!
  \****************************************************/
/*! exports provided: RulesStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesStepComponent", function() { return RulesStepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RulesStepComponent = /** @class */ (function () {
    function RulesStepComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    RulesStepComponent.prototype.changeStep = function (index) {
        this.stepper.selectedIndex += index;
    };
    RulesStepComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper'),
        __metadata("design:type", Object)
    ], RulesStepComponent.prototype, "stepper", void 0);
    RulesStepComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rules-step',
            template: __webpack_require__(/*! ./rules-step.component.html */ "./src/app/rules-step/rules-step.component.html"),
            styles: [__webpack_require__(/*! ./rules-step.component.css */ "./src/app/rules-step/rules-step.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], RulesStepComponent);
    return RulesStepComponent;
}());



/***/ }),

/***/ "./src/app/ruletest/ruletest.component.css":
/*!*************************************************!*\
  !*** ./src/app/ruletest/ruletest.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-test{\r\n    width: 60%;\r\n    padding: 15px 20px;\r\n    font-family: sans-serif;\r\n    font-size: 15px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 3px;\r\n    background: #777;\r\n    color: #fff;\r\n}"

/***/ }),

/***/ "./src/app/ruletest/ruletest.component.html":
/*!**************************************************!*\
  !*** ./src/app/ruletest/ruletest.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n  <div class=\"col-md-12 col-sm-12 col-xs-12 padding0\" style=\"text-align: center;\">\r\n      <button class=\"btn-test\">Test Rule</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/ruletest/ruletest.component.ts":
/*!************************************************!*\
  !*** ./src/app/ruletest/ruletest.component.ts ***!
  \************************************************/
/*! exports provided: RuletestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuletestComponent", function() { return RuletestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RuletestComponent = /** @class */ (function () {
    function RuletestComponent() {
    }
    RuletestComponent.prototype.ngOnInit = function () {
    };
    RuletestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ruletest',
            template: __webpack_require__(/*! ./ruletest.component.html */ "./src/app/ruletest/ruletest.component.html"),
            styles: [__webpack_require__(/*! ./ruletest.component.css */ "./src/app/ruletest/ruletest.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RuletestComponent);
    return RuletestComponent;
}());



/***/ }),

/***/ "./src/app/ruletype/ruletype.component.css":
/*!*************************************************!*\
  !*** ./src/app/ruletype/ruletype.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul{\r\n    list-style: none;\r\n    padding: 0px 15px !important;\r\n}\r\n.mat-radio-button{\r\n    position: relative;\r\n    padding-left: 0px !important;\r\n    font-size: 12px;\r\n    cursor: pointer;\r\n    line-height: 19px;\r\n    display: inline-block;\r\n    color: #666;\r\n}"

/***/ }),

/***/ "./src/app/ruletype/ruletype.component.html":
/*!**************************************************!*\
  !*** ./src/app/ruletype/ruletype.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 padding0\">\r\n  <ul>\r\n    <mat-radio-group [(ngModel)]=\"type.selectedType\">\r\n        <li *ngFor=\"let rule of ruleTypes;let i = index;\">\r\n            <mat-radio-button [value]=\"rule.DropDownID\">{{rule.DropDownName}}</mat-radio-button>\r\n        </li>\r\n    </mat-radio-group>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ruletype/ruletype.component.ts":
/*!************************************************!*\
  !*** ./src/app/ruletype/ruletype.component.ts ***!
  \************************************************/
/*! exports provided: RuletypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuletypeComponent", function() { return RuletypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_rules_rules_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/rules/rules.service */ "./src/app/services/rules/rules.service.ts");
/* harmony import */ var _general_lsdb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../general/lsdb */ "./src/app/general/lsdb.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RuletypeComponent = /** @class */ (function () {
    function RuletypeComponent(ruleService) {
        this.ruleService = ruleService;
        this.ruleTypes = [];
        this.type = {
            selectedType: ""
        };
    }
    RuletypeComponent.prototype.ngOnInit = function () {
        try {
            this.getRuleTypes();
            if (_general_lsdb__WEBPACK_IMPORTED_MODULE_2__["localDB"].getDatabyKey("type")) {
                this.type = _general_lsdb__WEBPACK_IMPORTED_MODULE_2__["localDB"].getDatabyKey("type");
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    RuletypeComponent.prototype.getRuleTypes = function () {
        var _this = this;
        try {
            this.ruleService.getRuleTypes().subscribe(function (res) {
                if (res) {
                    _this.ruleTypes = res;
                }
            }, function (error) {
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    RuletypeComponent.prototype.ngOnDestroy = function () {
        try {
            _general_lsdb__WEBPACK_IMPORTED_MODULE_2__["localDB"].setDatabyKey("type", this.type);
        }
        catch (error) {
            console.error(error);
        }
    };
    RuletypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ruletype',
            template: __webpack_require__(/*! ./ruletype.component.html */ "./src/app/ruletype/ruletype.component.html"),
            styles: [__webpack_require__(/*! ./ruletype.component.css */ "./src/app/ruletype/ruletype.component.css")]
        }),
        __metadata("design:paramtypes", [_services_rules_rules_service__WEBPACK_IMPORTED_MODULE_1__["RulesService"]])
    ], RuletypeComponent);
    return RuletypeComponent;
}());



/***/ }),

/***/ "./src/app/services/cart/cart.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/cart/cart.service.ts ***!
  \***********************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/global */ "./src/app/shared/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
    })
};
var CartService = /** @class */ (function () {
    function CartService(http) {
        this.http = http;
        this.API_URL = _shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].CART_URL;
    }
    CartService.prototype.handleError = function (error, options) {
    };
    CartService.prototype.addToCart = function (item) {
        try {
            return this.http.post(_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].CART_URL + "/add", item, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getUserCart', [])));
        }
        catch (error) {
            console.error(error);
        }
    };
    CartService.prototype.getUserCart = function (userId) {
        try {
            return this.http.get(_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].CART_URL + "/" + userId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getUserCart', [])));
        }
        catch (error) {
            console.error(error);
        }
    };
    CartService.prototype.removeCartItem = function (cartId) {
        try {
            var url = _shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].CART_URL + "/remove/" + cartId;
            return this.http.get(url, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('removeCartItem', [])));
        }
        catch (error) {
            console.error(error);
        }
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/services/postman/postman.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/postman/postman.service.ts ***!
  \*****************************************************/
/*! exports provided: PostmanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostmanService", function() { return PostmanService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var PostmanService = /** @class */ (function () {
    function PostmanService(http) {
        this.http = http;
        this.headers = httpOptions;
    }
    PostmanService.prototype.handleError = function (error, options) {
        try {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(new Error(error.Message || "Something Went Wrong..!"));
        }
        catch (error) {
            console.error(error);
        }
    };
    PostmanService.prototype.get = function (url) {
        try {
            return this.http.get(url, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('get', [])));
        }
        catch (error) {
            console.error(error);
        }
    };
    PostmanService.prototype.post = function (url, body) {
        try {
            return this.http.post(url, body, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('post', [])));
        }
        catch (error) {
            console.error(error);
        }
    };
    PostmanService.prototype.put = function (url, body) {
        try {
            return this.http.put(url, body, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('put', [])));
        }
        catch (error) {
            console.error(error);
        }
    };
    PostmanService.prototype.delete = function (url, body) {
        try {
            return this.http.delete(url, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('delete', [])));
        }
        catch (error) {
            console.error(error);
        }
    };
    PostmanService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PostmanService);
    return PostmanService;
}());



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/global */ "./src/app/shared/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
    })
};
var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
        this.API_URL = _shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].PRODUCT_URL;
    }
    ProductsService.prototype.handleError = function (error, options) {
    };
    ProductsService.prototype.getProducts = function (param) {
        var url = "./assets/products/";
        switch (param.type) {
            case "MECH":
                //url += "Mech/products.json";
                url = this.API_URL;
                break;
            case "IT":
                url += "IT/products.json";
                break;
            case "GARMENTS":
                url += "Garments/products.json";
                break;
        }
        return this.http.get(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getProducts', [])));
    };
    ProductsService.prototype.sendNotification = function () {
        try {
            return this.http.post(_shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].NOTIFICATION_URL + "/notification", {}, httpOptions).pipe();
        }
        catch (error) {
            console.error(error);
        }
    };
    ProductsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/services/rules/rules.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/rules/rules.service.ts ***!
  \*************************************************/
/*! exports provided: RulesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesService", function() { return RulesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var RulesService = /** @class */ (function () {
    function RulesService(http) {
        this.http = http;
    }
    RulesService.prototype.handleError = function (error, options) {
    };
    RulesService.prototype.getRuleTypes = function () {
        try {
            var url = "./assets/rules/ruletypes.json";
            return this.http.get(url, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getRuleTypes', [])));
        }
        catch (error) {
            console.error(error);
        }
    };
    RulesService.prototype.getRuleFilters = function () {
        try {
            var url = "./assets/rules/rulefilters.json";
            return this.http.get(url, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getRuleTypes', [])));
        }
        catch (error) {
            console.error(error);
        }
    };
    RulesService.prototype.getRuleCondion = function () {
        try {
            var url = "./assets/rules/rulecondition.json";
            return this.http.get(url, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getRuleTypes', [])));
        }
        catch (error) {
            console.error(error);
        }
    };
    RulesService.prototype.getRuleAttribute = function () {
        try {
            var url = "./assets/rules/ruleattribute.json";
            return this.http.get(url, httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getRuleTypes', [])));
        }
        catch (error) {
            console.error(error);
        }
    };
    RulesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RulesService);
    return RulesService;
}());



/***/ }),

/***/ "./src/app/services/search/search.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/search/search.service.ts ***!
  \***************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _general_lsdb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../general/lsdb */ "./src/app/general/lsdb.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchService = /** @class */ (function () {
    function SearchService(userService) {
        this.userService = userService;
        this.search = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.searchSouce = this.search.asObservable();
        this.searchAck = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.searchAckSouce = this.searchAck.asObservable();
        this.page = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.pageSource = this.page.asObservable();
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.userSource = this.user.asObservable();
    }
    SearchService.prototype.completeSearch = function (iArr) {
        this.searchAck.next(iArr);
    };
    SearchService.prototype.registerSearch = function (data) {
        this.search.next(data);
    };
    SearchService.prototype.setPageClick = function (IPage) {
        this.page.next(IPage);
    };
    SearchService.prototype.setloggedUser = function (IUser) {
        this.userService.loggedInUser = IUser;
        _general_lsdb__WEBPACK_IMPORTED_MODULE_3__["localDB"].setDatabyKey("loggedUser", IUser);
        this.user.next(IUser);
    };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/global */ "./src/app/shared/global.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*var headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'my-auth-token'
});
headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');

const httpOptions = new RequestOptions({ headers:headers});*/
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.API_URL = _shared_global__WEBPACK_IMPORTED_MODULE_3__["Global"].USER_URL;
        //this.userApiUrl = Global.USER_URL;
    }
    UserService.prototype.handleError = function (error, options) {
    };
    /**
     * @author SSW
     * @param param
     * @description this function is used for registering new user
     */
    UserService.prototype.signup = function (param) {
        var url = this.API_URL + "/register";
        return this.http.put(url, param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    UserService.prototype.login = function (param) {
        var url = this.API_URL + "/login";
        return this.http.post(url, param, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/auth/auth.component.css":
/*!************************************************!*\
  !*** ./src/app/shared/auth/auth.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auth-btn{\r\n    height: 20px !important;\r\n    width: auto;\r\n    font-size:15px !important;\r\n    padding: 0px 5px 0px 5px;\r\n    color: #fff;\r\n    background-color: #337ab7;\r\n    border-color: #2e6da4;\r\n}"

/***/ }),

/***/ "./src/app/shared/auth/auth.component.html":
/*!*************************************************!*\
  !*** ./src/app/shared/auth/auth.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" class=\"btn auth-btn\" id=\"googleBtn\">Sign up with Google</button>\n"

/***/ }),

/***/ "./src/app/shared/auth/auth.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/auth/auth.component.ts ***!
  \***********************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthComponent = /** @class */ (function () {
    function AuthComponent() {
        try {
            // let head= document.getElementsByTagName('head')[0];
            // let el = document.createElement("script");
            // el.setAttribute("src","https://apis.google.com/js/platform.js");
            // el.setAttribute("type",'text/javascript');
            // head.appendChild(el);
        }
        catch (error) {
            console.error(error);
        }
    }
    AuthComponent.prototype.googleInit = function () {
        var _this = this;
        gapi.load('auth2', function () {
            _this.auth2 = gapi.auth2.init({
                client_id: '212623355031-t3280fh3ub60os3r7dmt746u7pi7e5e3.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
            });
            _this.attachSignin(document.getElementById('googleBtn'));
        });
    };
    AuthComponent.prototype.attachSignin = function (element) {
        this.auth2.attachClickHandler(element, {}, function (googleUser) {
            var profile = googleUser.getBasicProfile();
            console.log('Token || ' + googleUser.getAuthResponse().id_token);
            console.log('ID: ' + profile.getId());
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
            //YOUR CODE HERE
        }, function (error) {
            alert(JSON.stringify(error, undefined, 2));
        });
    };
    AuthComponent.prototype.signup = function (ISignup) {
        try {
            switch (ISignup) {
                case "google": break;
                case "linkedIn": break;
                case "facebook": break;
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent.prototype.ngAfterViewInit = function () {
        try {
            this.googleInit();
        }
        catch (error) {
            console.error(error);
        }
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/shared/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/shared/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/shared/global.ts":
/*!**********************************!*\
  !*** ./src/app/shared/global.ts ***!
  \**********************************/
/*! exports provided: Global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
var Global = /** @class */ (function () {
    function Global(url) {
        if (url.includes("localhost")) {
            this.setLocal();
        }
        else {
            this.setGlobal();
        }
        //this.setGlobal();
    }
    Global.prototype.setLocal = function () {
        try {
            console.log("IN LOCAL");
            Global.PRODUCT_URL = "http://localhost:3001/products";
            Global.USER_URL = "http://localhost:3001/users";
            Global.CART_URL = "http://localhost:3001/carts";
            Global.NOTIFICATION_URL = "http://localhost:3001/notification";
            Global.TODO_URL = "http://localhost:3001/todo/";
        }
        catch (error) {
            console.error(error);
        }
    };
    Global.prototype.setGlobal = function () {
        try {
            console.log("IN GLOBAL");
            Global.PRODUCT_URL = "https://sheltered-crag-25135.herokuapp.com/products";
            Global.USER_URL = "https://sheltered-crag-25135.herokuapp.com/users";
            Global.CART_URL = "https://sheltered-crag-25135.herokuapp.com/carts";
            Global.NOTIFICATION_URL = "https://sheltered-crag-25135.herokuapp.com/notification";
            Global.TODO_URL = "https://sheltered-crag-25135.herokuapp.com/todo/";
        }
        catch (error) {
            console.error(error);
        }
    };
    Global.EMAIL_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_#{}+":;'\[\]~`()/])[A-Za-z\d$@$!%*?&_#{}+":;'\[\]~`()/]{8,}/;
    Global.MOBILE_REGEX = /^(((\+44)? ?(\(0\))? ?)|(0))( ?[0-9]{3,4}){3}$/;
    Global.PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_#{}+":;'\[\]~`()/])[A-Za-z\d$@$!%*?&_#{}+":;'\[\]~`()/]{8,}/;
    return Global;
}());

(function () {
    var url = location.href;
    console.log(url);
    new Global(url);
})();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/shared/auth/auth.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_1__["NgxMaskModule"].forRoot()
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_1__["NgxMaskModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"],
            ],
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DATE_LOCALE"], useValue: 'en-GB' },
            ],
            declarations: [_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"]],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shipping/cart/cart.component.css":
/*!**************************************************!*\
  !*** ./src/app/shipping/cart/cart.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".number-input{\r\n    text-align: right;\r\n    width:60%;\r\n    border:0px !important;\r\n}\r\n.cart-div div{\r\n    text-align: center;\r\n}\r\n.item-row{\r\n    margin-bottom:10px;\r\n    border-bottom: 1px solid gray;\r\n    padding:10px 0px 10px 0px;\r\n    font-family: 'Courier New', Courier, monospace\r\n}\r\n.item-header{\r\n   font-family: Roboto-bold;\r\n   font-size:14px;\r\n   color:black;\r\n   padding: 10px 0px 10px 0px;\r\n   margin-bottom: 5px;\r\n   background: lightgray; \r\n}\r\n.prd-img{\r\n    height: 90px;\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 100%;\r\n}\r\n.tot-div{\r\n    background: lightgray;\r\n    padding: 10px 0px 10px 0px;\r\n}\r\n.tot-div span{\r\n    font-size:700;\r\n    font-family: Roboto-bold;\r\n}\r\n.tot-div strong{\r\n    color:brown;\r\n}\r\n.tot-div button{\r\n    width:75%;\r\n    background :brown;\r\n    color:#FFF;\r\n    font-weight: 700;\r\n    font-family: Roboto-bold;\r\n    height: 25px;\r\n    font-size:1vw;\r\n}"

/***/ }),

/***/ "./src/app/shipping/cart/cart.component.html":
/*!***************************************************!*\
  !*** ./src/app/shipping/cart/cart.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12 col-xs-12 padding0 cart-div\">\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 padding0 item-header\">\r\n      <div class=\"col-md-2 col-sm-2 col-xs-2\">Product</div>\r\n      <div class=\"col-md-2 col-sm-2 col-xs-2\">Details</div>\r\n      <div class=\"col-md-2 col-sm-2 col-xs-2 padding0\">Price</div>\r\n      <div class=\"col-md-2 col-sm-2 col-xs-2\">Number</div>\r\n      <div class=\"col-md-2 col-sm-2 col-xs-2 padding0\">Total</div>\r\n      <div class=\"col-md-2 col-sm-2 col-xs-2 padding0\"></div>\r\n    </div>\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 padding0 item-row\" *ngFor=\"let item of cartItems;let i=index;\">\r\n      <div class=\"col-md-2 col-sm-2 col-xs-2 prd-img\" [ngStyle]=\"{'background-image' : 'url('+ (filePath + item.img) +')'}\"></div>\r\n      <div class=\"col-md-2 col-sm-2 col-xs-2\">\r\n        {{item.details}}\r\n      </div>\r\n      <div class=\"col-md-2 col-sm-2 col-xs-2 padding0\">\r\n          {{item.price}}\r\n      </div>\r\n      <div class=\"col-md-2 col-sm-2 col-xs-2\">\r\n          <app-qty-counter [quantity]=\"item.quantity ? item.quantity : 1\" (getQuantity)=\"setQuantity($event,item)\"></app-qty-counter>\r\n      </div>\r\n      <div class=\"col-md-2 col-sm-2 col-xs-2 padding0\">\r\n        {{ getTotal(item)}}\r\n      </div>\r\n      <div class=\"col-md-2 col-sm-2 col-xs-2 padding0\">\r\n        <span (click)=\"removeItem(item,i);\" matTooltip=\"remove\"><i class=\"fa fa-trash fa-lg\"></i></span>        \r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-12 col-sm-12 col-xs-12 padding0 tot-div\">\r\n      <div class=\"col-md-3 col-sm-3 col-xs-12\"><span>Product(s) : </span><span><strong>{{cartItems.length}}</strong></span></div>\r\n      <div class=\"col-md-3 col-sm-3 col-xs-12\"><span>Total : </span><span><strong>{{getCartTotal()}}</strong></span></div>\r\n      <div class=\"col-md-3 col-sm-3 col-xs-12\"><button class=\"btn\">Contiue Shop</button></div>\r\n      <div class=\"col-md-3 col-sm-3 col-xs-12\"><button (click)=\"checkout()\" class=\"btn\">Checkout</button></div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shipping/cart/cart.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shipping/cart/cart.component.ts ***!
  \*************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartComponent = /** @class */ (function () {
    function CartComponent() {
        this.changeStep = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cartItems = [];
        this.filePath = "./assets/data/";
        try {
            this.cartItems = this.getCartProducts();
        }
        catch (error) {
            console.error(error);
        }
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent.prototype.getTotal = function (item) {
        try {
            var total = parseFloat((parseInt(item.quantity) * parseInt(item.price)).toString()).toFixed(2);
            item['total'] = total;
            return total;
        }
        catch (error) {
            console.error(error);
        }
    };
    CartComponent.prototype.setQuantity = function (iquantity, item) {
        try {
            item['quantity'] = iquantity;
        }
        catch (error) {
            console.error(error);
        }
    };
    CartComponent.prototype.checkout = function () {
        try {
            this.changeStep.emit(1);
        }
        catch (error) {
            console.error(error);
        }
    };
    CartComponent.prototype.removeItem = function (item, index) {
        try {
            this.cartItems.splice(index, 1);
        }
        catch (error) {
            console.error(error);
        }
    };
    CartComponent.prototype.getCartTotal = function () {
        var _this = this;
        try {
            var tot_1 = 0;
            this.cartItems.forEach(function (x) {
                tot_1 += parseFloat(_this.getTotal(x));
            });
            return tot_1.toFixed(2);
        }
        catch (error) {
            console.error(error);
        }
    };
    CartComponent.prototype.getCartProducts = function () {
        try {
            return [
                {
                    img: "watch1.jpeg",
                    details: "abc",
                    price: 10,
                    quantity: 2,
                    total: ""
                },
                {
                    img: "watch4.jpeg",
                    details: "pqr",
                    price: 20,
                    quantity: 3,
                    total: ""
                }
            ];
        }
        catch (error) {
            console.error(error);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CartComponent.prototype, "changeStep", void 0);
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/shipping/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/shipping/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/shipping/host.directive.ts":
/*!********************************************!*\
  !*** ./src/app/shipping/host.directive.ts ***!
  \********************************************/
/*! exports provided: HostDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostDirective", function() { return HostDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var HostDirective = /** @class */ (function () {
    function HostDirective(containerRef) {
        try {
            this.containerRef = containerRef;
        }
        catch (error) {
            console.error(error);
        }
    }
    HostDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHost]'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])),
        __metadata("design:paramtypes", [Object])
    ], HostDirective);
    return HostDirective;
}());



/***/ }),

/***/ "./src/app/shipping/payment/payment.component.css":
/*!********************************************************!*\
  !*** ./src/app/shipping/payment/payment.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shipping/payment/payment.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shipping/payment/payment.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  payment works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/shipping/payment/payment.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shipping/payment/payment.component.ts ***!
  \*******************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentComponent = /** @class */ (function () {
    function PaymentComponent() {
        this.changeStep = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PaymentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaymentComponent.prototype, "changeStep", void 0);
    PaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/shipping/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/app/shipping/payment/payment.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/shipping/ship-address/ship-address.component.css":
/*!******************************************************************!*\
  !*** ./src/app/shipping/ship-address/ship-address.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shipping/ship-address/ship-address.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shipping/ship-address/ship-address.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  ship-address works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/shipping/ship-address/ship-address.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shipping/ship-address/ship-address.component.ts ***!
  \*****************************************************************/
/*! exports provided: ShipAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipAddressComponent", function() { return ShipAddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShipAddressComponent = /** @class */ (function () {
    function ShipAddressComponent() {
        this.changeStep = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ShipAddressComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ShipAddressComponent.prototype, "changeStep", void 0);
    ShipAddressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ship-address',
            template: __webpack_require__(/*! ./ship-address.component.html */ "./src/app/shipping/ship-address/ship-address.component.html"),
            styles: [__webpack_require__(/*! ./ship-address.component.css */ "./src/app/shipping/ship-address/ship-address.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShipAddressComponent);
    return ShipAddressComponent;
}());



/***/ }),

/***/ "./src/app/shipping/shipsteps/shipping-steps.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shipping/shipsteps/shipping-steps.service.ts ***!
  \**************************************************************/
/*! exports provided: ShippingStepsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingStepsService", function() { return ShippingStepsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _step__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../step */ "./src/app/shipping/step.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart/cart.component */ "./src/app/shipping/cart/cart.component.ts");
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../payment/payment.component */ "./src/app/shipping/payment/payment.component.ts");
/* harmony import */ var _ship_address_ship_address_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ship-address/ship-address.component */ "./src/app/shipping/ship-address/ship-address.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShippingStepsService = /** @class */ (function () {
    function ShippingStepsService() {
    }
    ShippingStepsService.prototype.getStep = function () {
        try {
            return [
                new _step__WEBPACK_IMPORTED_MODULE_1__["step"](_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"], 0, "Shopping Cart", false),
                new _step__WEBPACK_IMPORTED_MODULE_1__["step"](_ship_address_ship_address_component__WEBPACK_IMPORTED_MODULE_4__["ShipAddressComponent"], 1, "Shipping", false),
                new _step__WEBPACK_IMPORTED_MODULE_1__["step"](_payment_payment_component__WEBPACK_IMPORTED_MODULE_3__["PaymentComponent"], 2, "Payment", false),
            ];
        }
        catch (error) {
            console.error(error);
        }
    };
    ShippingStepsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ShippingStepsService);
    return ShippingStepsService;
}());



/***/ }),

/***/ "./src/app/shipping/step.ts":
/*!**********************************!*\
  !*** ./src/app/shipping/step.ts ***!
  \**********************************/
/*! exports provided: step */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "step", function() { return step; });
var step = /** @class */ (function () {
    function step(component, step, title, visited, data) {
        this.component = component;
        this.step = step;
        this.title = title;
        this.visited = visited;
        this.data = data;
        try {
        }
        catch (error) {
            console.error(error);
        }
    }
    return step;
}());



/***/ }),

/***/ "./src/app/summary/summary.component.css":
/*!***********************************************!*\
  !*** ./src/app/summary/summary.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/summary/summary.component.html":
/*!************************************************!*\
  !*** ./src/app/summary/summary.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  summary works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/summary/summary.component.ts":
/*!**********************************************!*\
  !*** ./src/app/summary/summary.component.ts ***!
  \**********************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SummaryComponent = /** @class */ (function () {
    function SummaryComponent() {
    }
    SummaryComponent.prototype.ngOnInit = function () {
    };
    SummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-summary',
            template: __webpack_require__(/*! ./summary.component.html */ "./src/app/summary/summary.component.html"),
            styles: [__webpack_require__(/*! ./summary.component.css */ "./src/app/summary/summary.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SummaryComponent);
    return SummaryComponent;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Shop\three\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map