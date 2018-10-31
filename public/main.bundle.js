webpackJsonp([1,4],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(148);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogService = (function () {
    function BlogService(authService, http) {
        this.authService = authService;
        this.http = http;
        this.domain = '/';
    }
    // reate headers, add token, to be used in HTTP requests
    BlogService.prototype.createAuthenticationHeaders = function () {
        this.authService.loadToken(); // Get token so it can be attached to headers
        // Headers configuration options
        this.options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authService.authToken
            })
        });
    };
    BlogService.prototype.newBlog = function (blog) {
        this.createAuthenticationHeaders();
        return this.http.post(this.domain + 'blogs/newBlog', blog, this.options).map(function (res) { return res.json(); });
    };
    BlogService.prototype.getAllBlogs = function () {
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + 'blogs/allBlogs', this.options).map(function (res) { return res.json(); });
    };
    BlogService.prototype.getSingleBlog = function (id) {
        this.createAuthenticationHeaders();
        return this.http.get(this.domain + 'blogs/singleBlog/' + id, this.options).map(function (res) { return res.json(); });
    };
    BlogService.prototype.editBlog = function (blog) {
        this.createAuthenticationHeaders();
        return this.http.put(this.domain + 'blogs/updateBlog', blog, this.options).map(function (res) { return res.json(); });
    };
    BlogService.prototype.deleteBlog = function (id) {
        this.createAuthenticationHeaders();
        return this.http.delete(this.domain + 'blogs/deleteBlog/' + id, this.options).map(function (res) { return res.json(); });
    };
    BlogService.prototype.postComment = function (id, comment, usern) {
        this.createAuthenticationHeaders();
        var blogData = {
            id: id,
            comment: comment,
            username: usern
        };
        return this.http.post(this.domain + 'blogs/comment', blogData, this.options).map(function (res) { return res.json(); });
    };
    BlogService.prototype.likeBlog = function (id, usern) {
        var blogData = {
            id: id,
            username: usern
        };
        return this.http.put(this.domain + 'blogs/likeBlog', blogData, this.options).map(function (res) { return res.json(); });
    };
    BlogService.prototype.dislikeBlog = function (id, usern) {
        var blogData = {
            id: id,
            username: usern
        };
        return this.http.put(this.domain + 'blogs/dislikeBlog', blogData, this.options).map(function (res) { return res.json(); });
    };
    BlogService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === 'function' && _b) || Object])
    ], BlogService);
    return BlogService;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/diese/blog/angular-src/src/blog.service.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.password == undefined || user.name == undefined || user.username == undefined || user.email == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=C:/Users/diese/blog/angular-src/src/validate.service.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/users/auth', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('/users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getPublicProfile = function (username) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        return this.http.get('/users/publicProfile/' + username, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=C:/Users/diese/blog/angular-src/src/auth.service.js.map

/***/ }),

/***/ 394:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 394;


/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(512);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/diese/blog/angular-src/src/main.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(695),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/diese/blog/angular-src/src/app.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_blog_blog_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_blog_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_blog_edit_blog_edit_blog_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_blog_delete_blog_delete_blog_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_public_profile_public_profile_component__ = __webpack_require__(521);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_16__components_blog_blog_component__["a" /* BlogComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'edit-blog/:id', component: __WEBPACK_IMPORTED_MODULE_18__components_blog_edit_blog_edit_blog_component__["a" /* EditBlogComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'delete-blog/:id', component: __WEBPACK_IMPORTED_MODULE_19__components_blog_delete_blog_delete_blog_component__["a" /* DeleteBlogComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'user/:username', component: __WEBPACK_IMPORTED_MODULE_20__components_public_profile_public_profile_component__["a" /* PublicProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_blog_blog_component__["a" /* BlogComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_blog_edit_blog_edit_blog_component__["a" /* EditBlogComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_blog_delete_blog_delete_blog_component__["a" /* DeleteBlogComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_public_profile_public_profile_component__["a" /* PublicProfileComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_13_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_15__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_17__services_blog_service__["a" /* BlogService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/diese/blog/angular-src/src/app.module.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_blog_service__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogComponent = (function () {
    function BlogComponent(formBuilder, authService, blogService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.blogService = blogService;
        this.newPost = false;
        this.loadingBlogs = false;
        this.processing = false;
        this.newComment = [];
        this.enabledComments = [];
        this.createNewBlogForm(); // Create new blog form on start up
        this.createCommentForm(); // Create form for posting comments on a user's blog post
    }
    // Function to create new blog form
    BlogComponent.prototype.createNewBlogForm = function () {
        this.form = this.formBuilder.group({
            // Title field
            title: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(50),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5),
                    this.alphaNumericValidation
                ])],
            // Body field
            body: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(500),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(5)
                ])]
        });
    };
    // Create form for posting comments
    BlogComponent.prototype.createCommentForm = function () {
        this.commentForm = this.formBuilder.group({
            comment: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(1),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(200)
                ])]
        });
    };
    // Enable the comment form
    BlogComponent.prototype.enableCommentForm = function () {
        this.commentForm.get('comment').enable(); // Enable comment field
    };
    // Disable the comment form
    BlogComponent.prototype.disableCommentForm = function () {
        this.commentForm.get('comment').disable(); // Disable comment field
    };
    // Enable new blog form
    BlogComponent.prototype.enableFormNewBlogForm = function () {
        this.form.get('title').enable(); // Enable title field
        this.form.get('body').enable(); // Enable body field
    };
    // Disable new blog form
    BlogComponent.prototype.disableFormNewBlogForm = function () {
        this.form.get('title').disable(); // Disable title field
        this.form.get('body').disable(); // Disable body field
    };
    // Validation for title
    BlogComponent.prototype.alphaNumericValidation = function (controls) {
        var regExp = new RegExp(/^[a-zA-Z0-9 ]+$/); // Regular expression to perform test
        // Check if test returns false or true
        if (regExp.test(controls.value)) {
            return null; // Return valid
        }
        else {
            return { 'alphaNumericValidation': true }; // Return error in validation
        }
    };
    // Function to display new blog form
    BlogComponent.prototype.newBlogForm = function () {
        this.newPost = true; // Show new blog form
    };
    // Reload blogs on current page
    BlogComponent.prototype.reloadBlogs = function () {
        var _this = this;
        this.loadingBlogs = true; // Used to lock button
        this.getAllBlogs(); // Add any new blogs to the page
        setTimeout(function () {
            _this.loadingBlogs = false; // Release button lock after four seconds
        }, 4000);
    };
    // Function to post a new comment on blog post
    BlogComponent.prototype.draftComment = function (id) {
        this.commentForm.reset(); // Reset the comment form each time users starts a new comment
        this.newComment = []; // Clear array so only one post can be commented on at a time
        this.newComment.push(id); // Add the post that is being commented on to the array
    };
    // Function to cancel new post transaction
    BlogComponent.prototype.cancelSubmission = function (id) {
        var index = this.newComment.indexOf(id); // Check the index of the blog post in the array
        this.newComment.splice(index, 1); // Remove the id from the array to cancel post submission
        this.commentForm.reset(); // Reset  the form after cancellation
        this.enableCommentForm(); // Enable the form after cancellation
        this.processing = false; // Enable any buttons that were locked
    };
    // Function to submit a new blog post
    BlogComponent.prototype.onBlogSubmit = function () {
        var _this = this;
        this.processing = true; // Disable submit button
        this.disableFormNewBlogForm(); // Lock form
        // Create blog object from form fields
        var blog = {
            title: this.form.get('title').value,
            body: this.form.get('body').value,
            createdBy: this.username // CreatedBy field
        };
        // Function to save blog into database
        this.blogService.newBlog(blog).subscribe(function (data) {
            // Check if blog was saved to database or not
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Return error class
                _this.message = data.message; // Return error message
                _this.processing = false; // Enable submit button
                _this.enableFormNewBlogForm(); // Enable form
            }
            else {
                _this.messageClass = 'alert alert-success'; // Return success class
                _this.message = data.message; // Return success message
                _this.getAllBlogs();
                // Clear form data after two seconds
                setTimeout(function () {
                    _this.newPost = false; // Hide form
                    _this.processing = false; // Enable submit button
                    _this.message = false; // Erase error/success message
                    _this.form.reset(); // Reset all form fields
                    _this.enableFormNewBlogForm(); // Enable the form fields
                }, 2000);
            }
        });
    };
    // Function to go back to previous page
    BlogComponent.prototype.goBack = function () {
        window.location.reload(); // Clear all variable states
    };
    // Function to get all blogs from the database
    BlogComponent.prototype.getAllBlogs = function () {
        var _this = this;
        // Function to GET all blogs from database
        this.blogService.getAllBlogs().subscribe(function (data) {
            _this.blogPosts = data.blogs; // Assign array to use in HTML
        });
    };
    // Function to post a new comment
    BlogComponent.prototype.postComment = function (id) {
        var _this = this;
        this.disableCommentForm(); // Disable form while saving comment to database
        this.processing = true; // Lock buttons while saving comment to database
        var comment = this.commentForm.get('comment').value; // Get the comment value to pass to service function
        // Function to save the comment to the database
        this.blogService.postComment(id, comment, this.username).subscribe(function (data) {
            _this.getAllBlogs(); // Refresh all blogs to reflect the new comment
            var index = _this.newComment.indexOf(id); // Get the index of the blog id to remove from array
            _this.newComment.splice(index, 1); // Remove id from the array
            _this.enableCommentForm(); // Re-enable the form
            _this.commentForm.reset(); // Reset the comment form
            _this.processing = false; // Unlock buttons on comment form
            if (_this.enabledComments.indexOf(id) < 0)
                _this.expand(id); // Expand comments for user on comment submission
        });
    };
    // Expand the list of comments
    BlogComponent.prototype.expand = function (id) {
        this.enabledComments.push(id); // Add the current blog post id to array
    };
    // Collapse the list of comments
    BlogComponent.prototype.collapse = function (id) {
        var index = this.enabledComments.indexOf(id); // Get position of id in array
        this.enabledComments.splice(index, 1); // Remove id from array
    };
    BlogComponent.prototype.likeBlog = function (id) {
        var _this = this;
        this.blogService.likeBlog(id, this.username).subscribe(function (data) {
            _this.getAllBlogs();
        });
    };
    BlogComponent.prototype.dislikeBlog = function (id) {
        var _this = this;
        this.blogService.dislikeBlog(id, this.username).subscribe(function (data) {
            _this.getAllBlogs();
        });
    };
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get profile username on page load
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username; // Used when creating new blog posts and comments
        });
        this.getAllBlogs(); // Get all blogs on component load
    };
    BlogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(696),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */]) === 'function' && _c) || Object])
    ], BlogComponent);
    return BlogComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/diese/blog/angular-src/src/blog.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteBlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteBlogComponent = (function () {
    function DeleteBlogComponent(blogService, activatedRoute, router) {
        this.blogService = blogService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.foundBlog = false;
        this.processing = false;
    }
    DeleteBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currURL = this.activatedRoute.snapshot.params;
        this.blogService.getSingleBlog(this.currURL.id).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
            }
            else {
                _this.blog = {
                    title: data.blog.title,
                    body: data.blog.body,
                    createdBy: data.blog.createdBy,
                    createdAt: data.blog.createdAt
                };
                _this.foundBlog = true;
            }
        });
    };
    DeleteBlogComponent.prototype.deleteBlog = function () {
        var _this = this;
        this.processing = true;
        this.blogService.deleteBlog(this.currURL.id).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = data.message;
            }
            setTimeout(function () {
                _this.router.navigate(['/blog']);
            }, 2000);
        });
    };
    DeleteBlogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-delete-blog',
            template: __webpack_require__(697),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_blog_service__["a" /* BlogService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], DeleteBlogComponent);
    return DeleteBlogComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/diese/blog/angular-src/src/delete-blog.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_blog_service__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditBlogComponent = (function () {
    function EditBlogComponent(location, activateRoute, blogservice, router) {
        this.location = location;
        this.activateRoute = activateRoute;
        this.blogservice = blogservice;
        this.router = router;
        this.processing = false;
        this.loading = true;
    }
    EditBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currURL = this.activateRoute.snapshot.params;
        this.blogservice.getSingleBlog(this.currURL.id).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = 'Blog not found';
            }
            else {
                _this.blog = data.blog;
                _this.loading = false;
            }
        });
    };
    EditBlogComponent.prototype.updateBlogSubmit = function () {
        var _this = this;
        this.processing = true;
        this.blogservice.editBlog(this.blog).subscribe(function (data) {
            if (!data.success) {
                _this.messageClass = 'alert alert-danger';
                _this.message = data.message;
                _this.processing = false;
            }
            else {
                _this.messageClass = 'alert alert-success';
                _this.message = 'Modified';
                setTimeout(function () {
                    _this.router.navigate(['/blog']);
                }, 2000);
            }
        });
    };
    EditBlogComponent.prototype.goBack = function () {
        this.location.back();
    };
    EditBlogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-blog',
            template: __webpack_require__(698),
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_blog_service__["a" /* BlogService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], EditBlogComponent);
    return EditBlogComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/diese/blog/angular-src/src/edit-blog.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(699),
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardComponent);
    return DashboardComponent;
}());
//# sourceMappingURL=C:/Users/diese/blog/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(auths) {
        this.auths = auths;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.loggedIn = function () {
        return this.auths.loggedIn();
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(700),
            styles: [__webpack_require__(689)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/diese/blog/angular-src/src/home.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('Logged in !', { cssClass: 'alert-success',
                    timeout: 2000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger',
                    timeout: 5000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(701),
            styles: [__webpack_require__(690)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/diese/blog/angular-src/src/login.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.isCollapsed = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('logged out', { cssClass: 'alert-success',
            timeout: 2000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(702),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _c) || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/diese/blog/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(703),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/diese/blog/angular-src/src/profile.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicProfileComponent = (function () {
    function PublicProfileComponent(authService, activatedRoute) {
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.foundProfile = false;
    }
    PublicProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currURL = this.activatedRoute.snapshot.params;
        this.authService.getPublicProfile(this.currURL.username).subscribe(function (data) {
            if (!data.success) {
                _this.foundProfile = false;
                _this.messageClass = 'alert alert-danger';
                _this.message = 'No user found with that name';
            }
            else {
                _this.foundProfile = true;
                _this.username = data.user.username;
                _this.email = data.user.email;
            }
        });
    };
    PublicProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-public-profile',
            template: __webpack_require__(704),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], PublicProfileComponent);
    return PublicProfileComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/diese/blog/angular-src/src/public-profile.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flash, authService, router) {
        this.validateService = validateService;
        this.flash = flash;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        if (!this.validateService.validateRegister(user)) {
            this.flash.show('Please fill in all the fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flash.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flash.show('Registered', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flash.show('problem', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(705),
            styles: [__webpack_require__(694)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=C:/Users/diese/blog/angular-src/src/register.component.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/diese/blog/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/diese/blog/angular-src/src/environment.js.map

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "\r\n/* Style The Dropdown Button */\r\n.dropbtn {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 16px;\r\n    font-size: 16px;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n/* The container <div> - needed to position the dropdown content */\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n/* Dropdown Content (Hidden by Default) */\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n}\r\n\r\n/* Links inside the dropdown */\r\n.dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n}\r\n\r\n/* Change color of dropdown links on hover */\r\n.dropdown-content a:hover {background-color: #f1f1f1}\r\n\r\n/* Show the dropdown menu on hover */\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n}\r\n\r\n/* Change the background color of the dropdown button when the dropdown content is shown */\r\n.dropdown:hover .dropbtn {\r\n    background-color: #3e8e41;\r\n}\r\n"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n\t<flash-messages></flash-messages>\n\t<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\">Blog Feed</h1>\n\n<!-- Custom Success/Error Message -->\n<div class=\"row show-hide-message\" *ngIf=\"message && newPost\">\n  <div [ngClass]=\"messageClass\">\n    {{ message }}\n  </div>\n</div>\n\n<!-- New Post Button -->\n<button type=\"button\" name=\"button\" class=\"btn btn-warning\" *ngIf=\"!newPost\" (click)=\"newBlogForm()\">New Post</button>\n\n<!-- Reload Button -->\n<button [disabled]=\"loadingBlogs\" type=\"button\" name=\"button\" class=\"btn btn-default\" *ngIf=\"!newPost\" (click)=\"reloadBlogs()\"><span class=\"glyphicon glyphicon-repeat\"></span>&nbsp;&nbsp;Reload</button>\n\n<br />\n<br />\n\n<!-- New Blog Form -->\n<form [formGroup]=\"form\" name=\"blogForm\" (submit)=\"onBlogSubmit()\" *ngIf=\"newPost\">\n  <!-- Title Input -->\n  <div class=\"form-group\">\n    <label for=\"title\">Title</label>\n    <div [ngClass]=\"{'has-success': form.controls.title.valid, 'has-error': form.controls.title.dirty && form.controls.title.errors}\">\n      <!-- Title Input -->\n      <input type=\"text\" name=\"title\" class=\"form-control\" placeholder=\"*Blog Title\" autocomplete=\"off\" formControlName=\"title\" />\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.required\">This field is required.</li>\n        <li *ngIf=\"(form.controls.title.dirty && form.controls.title.errors?.minlength) || (form.controls.title.dirty && form.controls.title.errors?.maxlength)\">Max length: 50, Min length: 5</li>\n        <li *ngIf=\"form.controls.title.dirty && form.controls.title.errors?.alphaNumericValidation\">Must be a letter or number</li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Body Input -->\n  <div class=\"form-group\">\n    <label for=\"body\">Body</label>\n    <div [ngClass]=\"{'has-success': form.controls.body.valid, 'has-error': form.controls.body.dirty && form.controls.body.errors}\">\n      <!-- Body Input -->\n      <textarea name=\"body\" rows=\"8\" cols=\"80\" placeholder=\"*Body\" class=\"form-control\" formControlName=\"body\"></textarea>\n      <!-- Validation -->\n      <ul class=\"help-block\">\n        <li *ngIf=\"form.controls.body.dirty && form.controls.body.errors?.required\">This field is required.</li>\n        <li *ngIf=\"(form.controls.body.dirty && form.controls.body.errors?.minlength) || (form.controls.body.dirty && form.controls.body.errors?.maxlength)\">Max length: 500, Min length: 5</li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- Go Back Button -->\n  <button [disabled]=\"processing\" type=\"button\" name=\"button\" (click)=\"goBack()\" class=\"btn btn-warning\">Go Back</button>\n  <!-- Submit Button -->\n  <button [disabled]=\"processing || !form.valid\" type=\"submit\" name=\"button\" class=\"btn btn-success\">Submit</button>\n\n</form>\n<!-- New Blog Form -->\n\n<!-- Panel Start -->\n<div *ngIf=\"!newPost\">\n  <!-- Panel Outer Layer -->\n  <div class=\"panel panel-primary\" *ngFor=\"let blog of blogPosts\">\n\n    <!-- Panel Title -->\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">{{ blog.title }}</h3>\n    </div>\n\n    <!-- Panel Body -->\n    <div class=\"panel-body\">\n      {{ blog.body }}\n    </div>\n\n    <!-- Panel Footer Start -->\n    <div class=\"panel-footer\">\n      <strong>Posted by: </strong>{{ blog.createdBy }}\n      <br />\n      <strong>Date: </strong>{{ blog.createdAt | date:'MMM dd, yyyy' }}\n      <br />\n      <div *ngIf=\"username === blog.createdBy\">\n        <strong>Likes: </strong>{{ blog.likes }}\n        <br />\n        <strong>Dislikes: </strong>{{ blog.dislikes }}\n      </div>\n\n      <!-- Edit Button -->\n      <a [routerLink]=\"['/edit-blog/', blog._id]\" *ngIf=\"username === blog.createdBy\"><button type=\"button\" name=\"button\" class=\"btn btn-sm btn-info\">Edit</button></a>\n      <!-- Delete Button -->\n      <a [routerLink]=\"['/delete-blog/', blog._id]\" *ngIf=\"username === blog.createdBy\"><button type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\">Delete</button></a>\n\n      <!-- Likes Dropdown  -->\n      <div class=\"dropdown\">\n        <!-- Like Button -->\n        <button [disabled]=\"blog.likedBy.indexOf(username) > -1\" type=\"button\" name=\"button\" class=\"btn btn-sm btn-success\" *ngIf=\"username !== blog.createdBy\" (click)=\"likeBlog(blog._id)\"><span class=\"glyphicon glyphicon-thumbs-up\">&nbsp;</span>Likes: {{ blog.likes }}</button>\n        <!-- Dropdown Menu Items -->\n        <div class=\"dropdown-content\">\n          <a [routerLink]=\"['/user/', liker]\" *ngFor=\"let liker of blog.likedBy\">{{ liker }}</a>\n        </div>\n      </div>\n\n      <!-- Dislikes Dropdown  -->\n      <div class=\"dropdown\">\n        <!-- Dislike Button -->\n        <button [disabled]=\"blog.dislikedBy.indexOf(username) > -1\" type=\"button\" name=\"button\" class=\"btn btn-sm btn-warning\" *ngIf=\"username !== blog.createdBy\" (click)=\"dislikeBlog(blog._id)\"><span class=\"glyphicon glyphicon-thumbs-down\">&nbsp;</span>Dislikes: {{ blog.dislikes }}</button>\n        <!-- Dropdown Menu Items -->\n        <div class=\"dropdown-content\">\n          <a [routerLink]=\"['/user/', disliker]\" *ngFor=\"let disliker of blog.dislikedBy\">{{ disliker }}</a>\n        </div>\n      </div>\n\n    </div>\n    <!-- Panel Footer End -->\n\n    <!-- Post Comment Box: Start -->\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        <!-- Post Comment Button -->\n        <button type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"draftComment(blog._id)\" [disabled]=\"newComment.indexOf(blog._id) > -1\">Post Comment</button>\n        <br />\n        <br />\n        <div *ngIf=\"newComment.indexOf(blog._id) > -1\">\n\n          <!-- Form: Comment Form Start -->\n          <form [formGroup]=\"commentForm\">\n            <!-- Textarea Input -->\n            <textarea name=\"comment\" rows=\"10\" cols=\"30\" class=\"form-control\" formControlName=\"comment\"></textarea>\n            <!-- Validation -->\n            <div [ngClass]=\"{'has-success': !commentForm.controls.comment.errors && commentForm.controls.comment.dirty, 'has-error': commentForm.controls.comment.dirty && commentForm.controls.comment.errors}\">\n              <ul class=\"help-block\">\n                <li *ngIf=\"commentForm.controls.comment.errors?.required && commentForm.controls.comment.dirty\">This field is required.</li>\n                <li *ngIf=\"(commentForm.controls.comment.errors?.maxlength && commentForm.controls.comment.dirty) ||(commentForm.controls.comment.errors?.minlength && commentForm.controls.comment.dirty)\">Comment must be at least 1 character but no more than 200.</li>\n              </ul>\n            </div>\n            <!-- Post Button -->\n            <button [disabled]=\"!commentForm.valid || processing\" type=\"submit\" name=\"button\" class=\"btn btn-sm btn-info\" (click)=\"postComment(blog._id)\">Post</button>\n            <!-- Cancel Button -->\n            <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"cancelSubmission(blog._id)\">Cancel</button>\n          </form>\n          <!-- Form: Comment Form End -->\n\n        </div>\n\n        <!-- Show Comments -->\n        <li *ngIf=\"enabledComments.indexOf(blog._id) === -1 && blog.comments.length > 0\" class=\"list-group-item\">\n          <span (click)=\"expand(blog._id)\">\n            Show comments&nbsp;&nbsp;\n            <div class=\"glyphicon glyphicon-comment\"></div>\n          </span>\n        </li>\n\n        <!-- Hide Comments -->\n        <li *ngIf=\"enabledComments.indexOf(blog._id) > -1\" class=\"list-group-item\">\n          <span (click)=\"collapse(blog._id)\">\n            Hide Comments&nbsp;&nbsp;\n            <div class=\"glyphicon glyphicon-comment\"></div>\n          </span>\n        </li>\n\n        <!-- Comment -->\n        <div *ngIf=\"enabledComments.indexOf(blog._id) > -1\">\n          <li *ngFor=\"let comment of blog.comments\" class=\"list-group-item\">\n            <strong>{{ comment.commentator }}: </strong> {{ comment.comment }}\n          </li>\n        </div>\n    </ul>\n    <!-- Post Comment Box: End -->\n\n  </div>\n  <!-- Panel Outer Layer -->\n</div>\n<!-- Panel End -->\n"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\"> Delete blog </h1>\n\n<div class=\"row show-hide-message\" *ngIf=\"message\">\n\t<div [ngClass]=\"messageClass\">\n\t\t{{ message }}\n\t</div>\n</div>\n\n<div class=\"col-md-6\" *ngIf=\"foundBlog\"> \n\t\n\t<div class=\"modal-content\">\n\t\t<div class=\"modal-header\">\n\t\t\t<button type=\"button\" name=\"button\" class=\"close\" data-dismiss=\"modal\"> &times; </button>\n\t\t\t<h4 class=\"modal-title\"> Confirm </h4>\n\t\t</div>\n\t\t<div class=\"modal-body\">\n\t\t\t<p> Are you sure you would like to delete this blog? </p>\n\t\t</div>\n\t\t<div class=\"modal-footer\">\n\t\t\t<button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"deleteBlog()\"> Yes </button>\n\t\t\t<a routerLink=\"['/blog'}\">\n\t\t\t<button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-danger\"> No </button>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n\t\n\t<br /><br />\n\t\n\t<div class=\"panel panel-primary\">\n\t\t<div class=\"panel-heading\">\n\t\t\t<h3 class=\"panel-title\"> {{ blog.title }} </h3>\n\t\t</div>\n\t\t<div class=\"panel-body\">\n\t\t\t{{ blog.body }}\n\t\t</div>\n\t\t<div class=\"panel-footer\">\n\t\t\t<strong> Posted by: </strong> {{ blog.createdBy }}\n\t\t\t<strong> Posted At: </strong> {{ blog.createdAt | date:'MMM dd, yyyy'}}\n\t\t</div>\n\t</div>\n\t\n</div>\n"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\"> Edit blog </h1>\n\n<div class=\"row show-hide-message\" *ngIf=\"message\">\n\t<div [ngClass]=\"messageClass\">\n\t\t{{ message }}\n\t</div>\n</div>\n\n<form (submit)=\"updateBlogSubmit()\" *ngIf=\"!loading\">\n\n\t<div class=\"form-group\">\n\t\t<label for=\"title\">Title</label>\n\t\t<input [disabled]=\"processing\" type=\"text\" name=\"title\" placeholder=\"*Blog title\" class=\"form-control\" \n\t\t[(ngModel)]=\"blog.title\">\n\t</div>\n\t\n\t<div class=\"form-group\">\n\t\t<label for=\"body\">Body</label>\n\t\t<textarea [disabled]=\"processing\"  name=\"title\" rows=\"8\" cols=\"80\" placeholder=\"*Blog body\" class=\"form-control\" \n\t\t[(ngModel)]=\"blog.body\">\n\t\t</textarea>\n\t\t\n\t\t<a [routerLink]=\"['/delete-blog', blog._id]\"><button [disabled]=\"processing\"  type=\"button\" name=\"button\" class=\"btn btn-danger\">Delete</button></a>\n\t\t<button [disabled]=\"processing\"  type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"goBack()\">Go back</button>\n\t\t<button [disabled]=\"processing\"  type=\"submit\" name=\"save\" class=\"btn btn-info\">Save changes</button>\n\t\t\n\t\t\n\t</div>\n\t\n</form>"

/***/ }),

/***/ 699:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\"> Dashboard </h2>\n<p> Welcome to dash! </p>\n"

/***/ }),

/***/ 700:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n\t<h1>Mean Authentication App</h1>\n\t<p class=\"lead\"> Welcome to Jasser's custom MEAN authentication application from scratch </p>\n\t\n\t<div>\n\t\t<a *ngIf=\"!loggedIn()\" class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\n\t\t<a *ngIf=\"!loggedIn()\" class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\n\t\t<a *ngIf=\"loggedIn()\" class=\"btn btn-success\" [routerLink]=\"['/blog']\">View blogs</a>\n\t</div>\n\t\n</div>\n\n<div class=\"row\">\n\t<div class=\"col-md-4\">\n\t<h3>Express Backend</h3>\n\t<p> A Node.js / Express server using Mongoose to organize models and query database. </p>\n\t</div>\n\t<div class=\"col-md-4\">\n\t<h3>Angular-CLI</h3>\n\t<p> To generate components, services and more. Local dev server and easy compilation. </p>\n\t</div>\n\t<div class=\"col-md-4\">\n\t<h3>JWT Tokens</h3>\n\t<p> Full featured authentication using JSON Web Tokens. Login and store user data. </p>\n\t</div>\n</div>"

/***/ }),

/***/ 701:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\"> Login </h2>\n\n<form (submit)=\"onLoginSubmit()\">\n\n<div class=\"form-group\">\n\t<label>Username</label>\n\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n</div>\n\n<div class=\"form-group\">\n\t<label>Password</label>\n\t<input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n</div>\n\n<input type=\"submit\" class=\"btn btn-primary\" value =\"Login\">\n\n</form>"

/***/ }),

/***/ 702:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n\n      <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span> \n      </button>\n      <a class=\"navbar-brand\" href=\"#\">Mean Blog</a>\n    </div>\n\n  \n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n        \n\t\t<ul class=\"nav navbar-nav navbar-left\">\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link\"  [routerLink]=\"['/']\">Home </a>\n          </li>\n        </ul>\n\t\t\n\t\t<ul class=\"nav navbar-nav navbar-right\">\n          \n\t\t  <li *ngIf = \"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link\"  [routerLink]=\"['/dashboard']\">Dashboard </a>\n          </li>\n\t\t  <li *ngIf = \"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link\"  [routerLink]=\"['/profile']\">Profile </a>\n          </li>\n\t\t  <li *ngIf = \"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link\"  [routerLink]=\"['/blog']\">Blog </a>\n          </li>\n\t\t  \n\t\t  \n\t\t  <li *ngIf = \"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link\"  [routerLink]=\"['/login']\">Login </a>\n          </li>\n\t\t   <li *ngIf = \"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a class=\"nav-link\"  [routerLink]=\"['/register']\">Register </a>\n\t\t  </li>\n\t\t  <li *ngIf = \"authService.loggedIn()\">\n            <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout </a>\n\t\t  </li>\n\t\t</ul>\n\n      </div>\n\t  </div>\n    </nav>\n\t\n\t"

/***/ }),

/***/ 703:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\t<h2 class=\"page-header\"> {{user.name}} </h2>\n\t<ul class=\"list-group\">\n\t\t<li class=\"list-group-item\">Username: {{user.username}} </li>\n\t\t<li class=\"list-group-item\">Email: {{user.email}} </li>\n\t</ul>\n</div>"

/***/ }),

/***/ 704:
/***/ (function(module, exports) {

module.exports = "\n<h1 class=\"page-header\"> Public profile </h1>\n\n<div class=\"row show-hide-message\" *ngIf=\"message\">\n\t<div [ngClass]=\"messageClass\">\n\t\t{{ message }}\n\t</div>\n</div>\n\n\n<ul *ngIf = \"foundProfile\" class=\"list-group\">\n    <li class=\"list-group-item\"> <strong>Username: </strong> {{ username }} </li>\n    <li class=\"list-group-item\"> <strong>E-Mail: </strong> {{ email }} </li>\n</ul>\n"

/***/ }),

/***/ 705:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\"> Register </h2>\n<form (submit)=\"onRegisterSubmit()\">\n\t<div class=\"form-group\">\n\t\t<label>Name</label>\n\t\t<input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Username</label>\n\t\t<input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Email</label>\n\t\t<input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n\t</div>\n\t<div class=\"form-group\">\n\t\t<label>Password</label>\n\t\t<input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n\t</div>\n\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\"> \n</form>"

/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(395);


/***/ })

},[744]);
//# sourceMappingURL=main.bundle.map