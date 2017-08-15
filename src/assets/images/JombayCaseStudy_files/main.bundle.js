webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-case-study></app-case-study>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var params = {
            grant_type: 'password',
            scope: 'user',
            client_id: '4874eafd0f7a240625e59b2b123a142a669923d5b0d31ae8743f6780a95187f5',
            client_secret: '908f6aee4d4cb27782ba55ae0c814bf43419f3220d696206212a29fe3a05cd88',
            auth_token: 'azd4jXWWLagyb9KzgfDJ'
        };
        var accessToken = "";
        this.dataService.getAuthrization(params).subscribe(function (authrization) {
            if (sessionStorage.getItem("accessToken") == null) {
                sessionStorage.setItem("accessToken", authrization.access_token);
            }
            if (sessionStorage.getItem("sessionStartedTime") == null) {
                sessionStorage.setItem("sessionStartedTime", Date());
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_case_study_case_study_component__ = __webpack_require__("../../../../../src/app/components/case-study/case-study.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_case_study_case_study_component__["a" /* CaseStudyComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/case-study/case-study.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/case-study/case-study.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n\t<div class=\"logo\">\n\t\t<img src=\"assets/images/logo.png\">\n\t</div>\n\t<div class=\"timer-wrap\">\n\t\t<div class=\"item timmer\">\n\t\t\t<i class=\"fa fa-clock-o\"></i>\n\t\t\t  Time Elapsed: {{sessionStartedTime.mins}}:{{sessionStartedTime.sec}} / {{time}} mins\n\t\t</div>\n\t\t<a href=\"#\" class=\"item exit\" (click)=\"submit()\">\n\t\t\t<i class=\"fa fa-sign-out\"></i>\n\t\t\t<div>Exit</div>\n\t\t</a>\n\t</div>\n</header>\n  \n<div class=\"case-study-details-wrap\">\n\t<div class=\"left-section\">\n\t\t<div><a [ngClass]=\"{active: showCaseStudyFlag}\" href=\"#\" (click)=\"showCaseStudy()\">Case</a></div>\n\t\t<h3 [ngClass]=\"{active: !showCaseStudyFlag}\"  (click)=\"showQuetions(0)\">Questions</h3>\n\t\t<ul>\n\t\t\t<li *ngFor=\"let question of questions; let i = index;\">\n\t\t\t\t<a [ngClass]=\"{active: i == currentQuestion && !showCaseStudyFlag}\"  href=\"#\" (click)=\"showQuetions(i)\">Question {{i + 1}}</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\t<div class=\"right-section\">\n\t\t<div *ngIf=\"!showCaseStudyFlag\">\n\t\t\t<h3 class=\"question-no\">Question {{currentQuestion+1}}</h3>\n\t\t\t\n\t\t\t<div *ngFor=\"let question of questions;let i = index\">\n\t\t\t\t<!-- <div > {{i}} {{question.body}}</div> -->\n\t\t\t\t<div *ngIf=\"i==currentQuestion\" class=\"questions-page\">\n\t\t\t\t\t<div [innerHTML]=\"question.body\" class=\"question\"></div>\n\t\t\t\t\t<div class=\"answer-wrap\">\n\t\t\t\t\t\t<h4>Answer:</h4>\n\t\t\t\t\t\t<textarea [(ngModel)]=\"question.answer\"></textarea>\n\t\t\t\t\t</div>\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"next-prev-wrap\">\n\t\t\t\t<button class=\"btn pull-left\" *ngIf=\"currentQuestion\" (click)=\"changeQuestion('prev')\">Previous</button>\n\t\t\t\t<button class=\"btn pull-right\" *ngIf=\"currentQuestion < questions.length - 1\" (click)=\"changeQuestion('next')\">Save &amp; Next</button>\n\t\t\t\t<button class=\"btn btn-orange pull-right\" *ngIf=\"currentQuestion == questions.length - 1\">Submit &amp; Exit</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div *ngIf=\"showCaseStudyFlag\">\n\t\t\t<h3 class=\"casestudy-name\">{{caseStudyName}}</h3>\n\t\t\t<div [innerHTML]=\"page.body\" class=\"casestudy-page\"></div>\n\t\t\t<div class=\"currentPageNo\">Page {{currentPage+1}} / {{pages.length}}</div>\n\t\t\t<div class=\"next-prev-wrap\">\n\t\t\t\t<button class=\"btn btn-default pull-left\" *ngIf=\"currentPage\" (click)=\"changePage('prev')\">Previous</button>\n\t\t\t\t<button class=\"btn btn-default pull-right\" *ngIf=\"currentPage < pages.length - 1\" (click)=\"changePage('next')\">Next Page</button>\n\t\t\t\t<button class=\"btn btn-orange pull-right\" *ngIf=\"currentPage == pages.length - 1\">Go To Questions</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/case-study/case-study.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaseStudyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CaseStudyComponent = (function () {
    function CaseStudyComponent(dataService) {
        this.dataService = dataService;
        this.pages = [];
        this.questions = [];
        this.page = {};
        this.question = {};
        this.currentPage = 0;
        this.currentQuestion = 0;
        this.showCaseStudyFlag = true;
        this.caseStudyName = "";
        this.time = "";
        this.sessionStartedTime = {
            mins: 0,
            sec: 0
        };
    }
    CaseStudyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getCaseStudyData().subscribe(function (caseStudyData) {
            console.log("caseStudyData", caseStudyData);
            _this.pages = caseStudyData.user_company_case_study.company_case_study.pages;
            _this.questions = caseStudyData.user_company_case_study.company_case_study.questions;
            _this.caseStudyName = caseStudyData.user_company_case_study.company_case_study.name;
            _this.time = caseStudyData.user_company_case_study.company_case_study.time;
            _this.getCurrentQuestion(0);
            _this.getCurrentPage();
        });
        setInterval(function () {
            var d2 = new Date();
            var d1 = new Date(sessionStorage.getItem("sessionStartedTime"));
            _this.sessionStartedTime.mins = Math.floor(((d2 - d1) / 1000 / 60));
            _this.sessionStartedTime.sec = Math.floor(((d2 - d1) / 1000) % 60);
        }, 1000);
        setInterval(function () {
            // console.log(((d2-d1)/100)/60);
            // console.log(((d2-d1)/100) );
            // this.sessionStartedTime = ((d2-d1)/100);
        }, 1000);
    };
    CaseStudyComponent.prototype.getCurrentQuestion = function (index) {
        this.question = this.questions[index];
        this.currentQuestion = index;
    };
    CaseStudyComponent.prototype.showCaseStudy = function () {
        this.currentPage = 0;
        this.showCaseStudyFlag = true;
        this.getCurrentPage();
    };
    CaseStudyComponent.prototype.showQuetions = function (index) {
        this.showCaseStudyFlag = false;
        this.getCurrentQuestion(index);
    };
    CaseStudyComponent.prototype.changeView = function (val) {
        if (val == 'caseStudy') {
            this.showCaseStudyFlag = true;
        }
        else {
            this.showCaseStudyFlag = false;
        }
    };
    CaseStudyComponent.prototype.getCurrentPage = function () {
        this.page = this.pages[this.currentPage];
    };
    CaseStudyComponent.prototype.changePage = function (val) {
        if (val == 'next')
            this.currentPage++;
        else
            this.currentPage--;
        this.getCurrentPage();
    };
    CaseStudyComponent.prototype.changeQuestion = function (val) {
        if (val == 'next')
            this.currentQuestion++;
        else
            this.currentQuestion--;
    };
    return CaseStudyComponent;
}());
CaseStudyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-case-study',
        template: __webpack_require__("../../../../../src/app/components/case-study/case-study.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/case-study/case-study.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], CaseStudyComponent);

var _a;
//# sourceMappingURL=case-study.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n\t<div class=\"logo\">\n\t\t<img src=\"assets/images/logo.png\">\n\t</div>\n\t<div class=\"timer-wrap\">\n\t\t<div>\n\t\t\t<i class=\"fa fa-clock-o\"></i>\n\t\t\t  Time Elapsed: 34: 57 /  mins\n\t\t</div>\n\t\t<div></div>\n\t</div>\n</header>\n  \n"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(dataService) {
        this.dataService = dataService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.dataService.getUserData().subscribe(function (userDetail) {
            console.log("userDetail", userDetail);
        });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getAuthrization = function (data) {
        var url = "https://simulationapi.ur-nl.com/oauth/token.json";
        return this.ajaxPost(url, data, {});
    };
    DataService.prototype.getUserData = function () {
        var url = "https://simulationapi.ur-nl.com/users/current.json";
        return this.ajaxGet(url, this.setHeaders());
    };
    DataService.prototype.setHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        headers.append('Authorization', 'Bearer ' + sessionStorage.getItem("accessToken"));
        headers.append('Content-Type', 'application/json');
        return requestOptions;
    };
    DataService.prototype.getCaseStudyData = function () {
        var url = "https://simulationapi.ur-nl.com/case_study/companies/58cba141ba169e0eab2657c9/company_case_studies/595c859eba169ec47e4f20d4/user_company_case_studies/595ce021ba169edb9c733e90?include[company_case_study][include]=questions";
        return this.http.get(url, this.setHeaders())
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.ajaxPost = function (url, data, headers) {
        return this.http.post(url, data, headers)
            .map(function (res) { return res.json(); });
    };
    DataService.prototype.ajaxGet = function (url, headers) {
        return this.http.get(url, headers)
            .map(function (res) { return res.json(); });
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../webpack-dev-server/client/index.js?http:/localhost:4200");
module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map