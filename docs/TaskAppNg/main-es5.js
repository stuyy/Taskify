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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<header>\n    <h1 class=\"lead\">Taskify: Stay Organized, Create Some Tasks</h1>\n</header>\n<main>\n  <ngb-alert type=\"danger\" (close)=\"close(error.indexOf(err))\" *ngFor=\"let err of error\">{{err}}</ngb-alert>\n  <section class=\"main-content\">\n    <section class=\"create-task-body\">\n      <h1>Create a new Task</h1>\n        <button type=\"button\" class=\"btn btn-success col-12 mt-2\" (click)=\"newTask()\"><i class=\"fas fa-plus-square\"></i> {{buttonTaskTitle}}</button>\n        <form class=\"task-form\" [@newTask]=\"show ? 'show' : 'hidden'\">\n          <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Title\" name=\"taskTitle\" [(ngModel)]=\"taskTitle\">\n          </div>\n          <div class=\"input-group\">\n            <textarea class=\"form-control noresize\" placeholder=\"What is your goal?\"rows=\"3\" name=\"taskDescription\" [(ngModel)]=\"taskDescription\"></textarea>\n          </div>\n          <div class=\"input-group\">\n            <label for=\"formControlRange\">Current Progress: {{progressRange}} %</label>\n            <!-- <input type=\"range\" name=\"range\" class=\"form-control-range \" min=\"0\" max=\"100\" [(ngModel)]=\"progressRange\" (ngModelChange)=\"setRange($event)\" value=\"0\"> -->\n            <mat-slider min=\"0\" max=\"100\" value=\"0\" name=\"range\" thumbLabel tickInterval=\"1\" [(ngModel)]=\"progressRange\" (input)=\"setRange($event)\"></mat-slider>\n          </div>\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"reset()\">Reset</button>\n          <button type=\"submit\" class=\"btn btn-primary\"(click)=\"addTask()\">Add Task</button>\n        </form>\n    </section>\n    <aside class=\"tasks\" *ngIf=\"tasks.length > 0\">\n      <h1>Your Tasks</h1>\n      <app-modal (delete)=\"clearingTasks($event)\"></app-modal>\n      <!-- <button type=\"button\" class=\"btn btn-secondary col-12 mt-2\" (click)=\"clearAllTasks()\">Clear Tasks</button> -->\n      <button type=\"button\" class=\"btn btn-success col-12 mt-2\">Save Tasks</button>\n      <div *ngFor=\"let task of tasks\" [attr.id]=\"task.title\">\n        <button type=\"button\" class=\"btn btn-info col-12 mt-2\" (click)=\"task.isCollapsed = !task.isCollapsed\">View {{task.title}} </button>\n        <div [ngbCollapse]=\"task.isCollapsed\" class=\"task-description\">\n          <p>{{task.description}}</p>\n          <p>Your Progress:</p>\n          <ngb-progressbar *ngIf=\"task.progress < 100; else completed\" [showValue]=\"true\" value={{task.progress}} type=\"info\"></ngb-progressbar>\n          <ng-template #completed>\n            <ngb-progressbar value={{task.progress}} type=\"info\" >Completed!</ngb-progressbar>\n          </ng-template>\n          <button type=\"button\" class=\"btn btn-danger mt-2\" (click)=\"delete(tasks.indexOf(task))\"><i class=\"fas fa-trash-alt\"></i></button>\n          <button type=\"button\" class=\"btn btn-warning mt-2 ml-1\" (click)=\"editTask(tasks.indexOf(task))\"><i class=\"fas fa-edit\"></i></button>\n          <button type=\"button\" *ngIf=\"task.editTask\" class=\"btn btn-success mt-2 ml-1\" (click)=\"saveEditedTask(tasks.indexOf(task))\"><i class=\"far fa-check-circle\"></i></button>\n          <div class=\"form-group\" *ngIf=\"task.editTask\">\n            <textarea class=\"form-control noresize\" value=\"{{task.description}}\" [(ngModel)]=\"task.description\"></textarea>\n            <ngb-progressbar [showValue]=\"true\" value={{task.progress}} type=\"info\"></ngb-progressbar>\n            <!-- <input type=\"range\" name=\"range\" class=\"form-control-range\" min=\"0\" max=\"100\" [(ngModel)]=\"task.progress\" (ngModelChange)=\"modifyProgress(tasks.indexOf(task), $event)\" value=\"0\"> -->\n            <mat-slider min=\"0\" max=\"100\" value=\"0\" name=\"range\" thumbLabel tickInterval=\"1\" [(ngModel)]=\"task.progress\" (input)=\"modifyProgress(tasks.indexOf(task), $event)\"></mat-slider>\n          </div>\n        </div>\n      </div>\n    </aside>  \n  </section>\n</main>\n<!--https://stackoverflow.com/questions/50341279/ng-bootstrap-collapse-component-collapses-all-components-when-toggling-one-ang-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/modal/modal.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/modal/modal.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-secondary col-12\" (click)=\"open()\"> Clear Tasks</button>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Fira+Sans&display=swap');\r\n.main-content {\r\n    display: flex;\r\n    padding: 20px;\r\n    justify-content: space-around;\r\n    width: 70%;\r\n    margin: 0 auto;\r\n    font-family: 'Fira Sans';\r\n}\r\nheader {\r\n    background-color:  #283044;\r\n    text-align: left;\r\n    color: white;\r\n    padding: 7px 0 5px 75px;\r\n}\r\n.task-description {\r\n    padding: 20px;\r\n    background-color: #D6DFD9;\r\n}\r\n.task-form {\r\n    width: 450px;\r\n}\r\n.tasks {\r\n    width: 450px;\r\n    font-family: 'Fira Sans';\r\n}\r\n.noresize {\r\n    resize: none;\r\n}\r\n@media only screen and (max-width: 1341px)\r\n{\r\n    .main-content\r\n    {\r\n        flex-direction: column;\r\n        width:100%;\r\n        transition: 1s;\r\n    }\r\n    .task-form, .tasks {\r\n        width: 100%;\r\n        transition: 1s;\r\n    }\r\n    header {\r\n        text-align: center;\r\n        padding: 7px 0 7px 0;\r\n        transition: padding 1s;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkVBQTZFO0FBQzdFO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsVUFBVTtJQUNWLGNBQWM7SUFDZCx3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBOztJQUVJOztRQUVJLHNCQUFzQjtRQUN0QixVQUFVO1FBQ1YsY0FBYztJQUNsQjtJQUNBO1FBQ0ksV0FBVztRQUNYLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIsc0JBQXNCO0lBQzFCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RmlyYStTYW5zJmRpc3BsYXk9c3dhcCcpO1xyXG4ubWFpbi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBmb250LWZhbWlseTogJ0ZpcmEgU2Fucyc7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzI4MzA0NDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA3cHggMCA1cHggNzVweDtcclxufVxyXG4udGFzay1kZXNjcmlwdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q2REZEOTtcclxufVxyXG4udGFzay1mb3JtIHtcclxuICAgIHdpZHRoOiA0NTBweDtcclxufVxyXG4udGFza3Mge1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMnO1xyXG59XHJcbi5ub3Jlc2l6ZSB7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzQxcHgpXHJcbntcclxuICAgIC5tYWluLWNvbnRlbnRcclxuICAgIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICB9XHJcbiAgICAudGFzay1mb3JtLCAudGFza3Mge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgfVxyXG4gICAgaGVhZGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogN3B4IDAgN3B4IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogcGFkZGluZyAxcztcclxuICAgIH1cclxufSJdfQ== */"

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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(config) {
        this.title = 'TaskAppNg';
        this.buttonTaskTitle = 'New Task';
        this.taskTitle = '';
        this.taskDescription = '';
        this.show = false;
        this.tasks = [];
        this.error = [];
        this.progressRange = 0;
        this.isCollapsed = true;
        this.editTaskFlag = false;
        config.max = 100;
        config.striped = true;
        config.animated = true;
        config.type = 'success';
        config.height = '20px';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.tasks = JSON.parse(localStorage.tasksAdded);
        this.tasks.forEach(function (el) {
            el.isCollapsed = true;
        });
    };
    AppComponent.prototype.newTask = function () {
        this.show = !this.show;
        if (this.show)
            this.buttonTaskTitle = 'Cancel';
        else {
            this.buttonTaskTitle = 'New Task';
            this.taskTitle = '';
            this.taskDescription = '';
        }
    };
    AppComponent.prototype.addTask = function () {
        if (this.taskTitle.length > 50) {
            this.error.push("Title cannot exceed 50 characters.");
            return;
        }
        if (this.taskTitle.length === 0) {
            this.error.push("Title cannot be blank.");
            return;
        }
        else if (this.taskDescription.length === 0) {
            this.error.push("Description cannot be blank.");
            return;
        }
        var newTask = {
            title: this.taskTitle,
            description: this.taskDescription,
            isCollapsed: true,
            progress: this.progressRange,
            editTask: false
        };
        console.log(newTask);
        this.tasks.push(newTask);
        localStorage.tasksAdded = JSON.stringify(this.tasks);
        this.taskTitle = '';
        this.taskDescription = '';
    };
    AppComponent.prototype.editTask = function (taskToEdit) {
        console.log(taskToEdit);
        this.tasks[taskToEdit].editTask = true;
    };
    AppComponent.prototype.clearAllTasks = function () {
    };
    AppComponent.prototype.saveEditedTask = function (taskToEdit) {
        this.tasks[taskToEdit].editTask = false;
        localStorage.tasksAdded = JSON.stringify(this.tasks);
    };
    AppComponent.prototype.close = function (alert) {
        this.error.splice(alert, 1);
    };
    AppComponent.prototype.reset = function () {
        this.taskTitle = '';
        this.taskDescription = '';
    };
    AppComponent.prototype.setRange = function ($event) {
        console.log($event);
        this.progressRange = parseInt($event.value);
        console.log(this.progressRange);
    };
    AppComponent.prototype.modifyProgress = function (taskIndex, value) {
        this.tasks[taskIndex].progress = value.value;
        var localTasks = JSON.parse(localStorage.tasksAdded);
        localTasks[taskIndex].progress = value.value;
        localStorage.tasksAdded = JSON.stringify(localTasks);
    };
    AppComponent.prototype.clearingTasks = function ($event) {
        this.tasks = [];
        localStorage.tasksAdded = [];
    };
    AppComponent.prototype.delete = function (task) {
        console.log(task); // Delete task.
        var localTasks = JSON.parse(localStorage.tasksAdded);
        localTasks.splice(task, 1); // Splice the task from  local storage.
        localStorage.tasksAdded = JSON.stringify(localTasks);
        this.tasks.splice(task, 1); // Splice the task from memory.
    };
    AppComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbarConfig"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('newTask', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        visibility: 'hidden',
                        opacity: 0,
                        height: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        visibility: 'visible',
                        opacity: 1,
                        height: '250px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('hidden <=> show', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.5s ease-in-out')
                    ])
                ])
            ],
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
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"],
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["NgbdModalContent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_7__["MatSliderModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["NgbdModalContent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/modal/modal.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: NgbdModalContent, ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    NgbdModalContent.prototype.confirmDelete = function () {
        console.log("Confirming?");
        this.deleteFlag = true;
        this.parent.clear();
    };
    NgbdModalContent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgbdModalContent.prototype, "deleteFlag", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], NgbdModalContent.prototype, "parent", void 0);
    NgbdModalContent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngbd-modal-content',
            template: "\n    <div class=\"modal-body\">\n      <p>Are you sure?</p>\n      {{hello}}\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\n      <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"confirmDelete()\">Confirm</button>\n    </div>\n  "
        })
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService) {
        this.modalService = modalService;
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modalRef = modalService;
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.open = function () {
        this.opened = this.modalService.open(NgbdModalContent);
        this.opened.componentInstance.deleteFlag = false;
        this.opened.componentInstance.parent = this;
    };
    ModalComponent.prototype.closeModal = function () {
        this.opened.close();
    };
    ModalComponent.prototype.clear = function () {
        this.delete.emit(true);
        this.opened.close();
    };
    ModalComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ModalComponent.prototype, "delete", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/components/modal/modal.component.css")]
        })
    ], ModalComponent);
    return ModalComponent;
}());

// https://stackoverflow.com/questions/44857626/how-to-access-properties-of-ngbdmodalcontent-from-another-component


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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! C:\Users\Anson\Documents\TaskAppNg\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map