/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/users/prisma/Prisma.service.ts":
/*!*********************************************!*\
  !*** ./apps/users/prisma/Prisma.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrismaService: () => (/* binding */ PrismaService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_2__);



let PrismaService = class PrismaService extends _prisma_client__WEBPACK_IMPORTED_MODULE_2__.PrismaClient {
    onModuleInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            yield this.$connect();
        });
    }
};
PrismaService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], PrismaService);



/***/ }),

/***/ "./apps/users/src/dto/user.dto.ts":
/*!****************************************!*\
  !*** ./apps/users/src/dto/user.dto.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivationDto: () => (/* binding */ ActivationDto),
/* harmony export */   ForgotPasswordDto: () => (/* binding */ ForgotPasswordDto),
/* harmony export */   LoginDto: () => (/* binding */ LoginDto),
/* harmony export */   RegisterDto: () => (/* binding */ RegisterDto),
/* harmony export */   ResetPasswordDto: () => (/* binding */ ResetPasswordDto)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-validator */ "class-validator");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_2__);



let RegisterDto = class RegisterDto {
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(),
    (0,class_validator__WEBPACK_IMPORTED_MODULE_2__.IsNotEmpty)({ message: 'Name is required.' }),
    (0,class_validator__WEBPACK_IMPORTED_MODULE_2__.IsString)({ message: 'Name must need to be one string.' }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", String)
], RegisterDto.prototype, "name", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(),
    (0,class_validator__WEBPACK_IMPORTED_MODULE_2__.IsNotEmpty)({ message: 'Password is required.' }),
    (0,class_validator__WEBPACK_IMPORTED_MODULE_2__.MinLength)(8, { message: 'Password must be at least 8 characters.' }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", String)
], RegisterDto.prototype, "password", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(),
    (0,class_validator__WEBPACK_IMPORTED_MODULE_2__.IsNotEmpty)({ message: 'Email is required.' }),
    (0,class_validator__WEBPACK_IMPORTED_MODULE_2__.IsEmail)({}, { message: 'Email is invalid.' }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", String)
], RegisterDto.prototype, "email", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(),
    (0,class_validator__WEBPACK_IMPORTED_MODULE_2__.IsNotEmpty)({ message: 'Phone Number is required.' }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Number)
], RegisterDto.prototype, "phone_number", void 0);
RegisterDto = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.InputType)()
], RegisterDto);

let ActivationDto = class ActivationDto {
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(),
    (0,class_validator__WEBPACK_IMPORTED_MODULE_2__.IsNotEmpty)({ message: 'Activation Token is required.' }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", String)
], ActivationDto.prototype, "activationToken", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(),
    (0,class_validator__WEBPACK_IMPORTED_MODULE_2__.IsNotEmpty)({ message: 'Activation Code is required.' }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", String)
], ActivationDto.prototype, "activationCode", void 0);
ActivationDto = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.InputType)()
], ActivationDto);

let LoginDto = class LoginDto {
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(),
    (0,class_validator__WEBPACK_IMPORTED_MODULE_2__.IsNotEmpty)({ message: 'Email is required.' }),
    (0,class_validator__WEBPACK_IMPORTED_MODULE_2__.IsEmail)({}, { message: 'Email must be valid.' }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", String)
], LoginDto.prototype, "email", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(),
    (0,class_validator__WEBPACK_IMPORTED_MODULE_2__.IsNotEmpty)({ message: 'Password is required.' }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", String)
], LoginDto.prototype, "password", void 0);
LoginDto = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.InputType)()
], LoginDto);

let ForgotPasswordDto = class ForgotPasswordDto {
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(),
    (0,class_validator__WEBPACK_IMPORTED_MODULE_2__.IsNotEmpty)({ message: 'Email is required.' }),
    (0,class_validator__WEBPACK_IMPORTED_MODULE_2__.IsEmail)({}, { message: 'Email must be valid.' }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", String)
], ForgotPasswordDto.prototype, "email", void 0);
ForgotPasswordDto = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.InputType)()
], ForgotPasswordDto);

let ResetPasswordDto = class ResetPasswordDto {
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(),
    (0,class_validator__WEBPACK_IMPORTED_MODULE_2__.IsNotEmpty)({ message: 'Password is required.' }),
    (0,class_validator__WEBPACK_IMPORTED_MODULE_2__.MinLength)(8, { message: 'Password must be at least 8 characters.' }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", String)
], ResetPasswordDto.prototype, "password", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(),
    (0,class_validator__WEBPACK_IMPORTED_MODULE_2__.IsNotEmpty)({ message: 'Activation Token is required.' }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", String)
], ResetPasswordDto.prototype, "activationToken", void 0);
ResetPasswordDto = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.InputType)()
], ResetPasswordDto);



/***/ }),

/***/ "./apps/users/src/email/email.module.ts":
/*!**********************************************!*\
  !*** ./apps/users/src/email/email.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailModule: () => (/* binding */ EmailModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email.service */ "./apps/users/src/email/email.service.ts");
/* harmony import */ var _nestjs_modules_mailer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs-modules/mailer */ "@nestjs-modules/mailer");
/* harmony import */ var _nestjs_modules_mailer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_modules_mailer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nestjs_modules_mailer_dist_adapters_ejs_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nestjs-modules/mailer/dist/adapters/ejs.adapter */ "@nestjs-modules/mailer/dist/adapters/ejs.adapter");
/* harmony import */ var _nestjs_modules_mailer_dist_adapters_ejs_adapter__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nestjs_modules_mailer_dist_adapters_ejs_adapter__WEBPACK_IMPORTED_MODULE_6__);







let EmailModule = class EmailModule {
};
EmailModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Global)(),
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Module)({
        imports: [
            _nestjs_modules_mailer__WEBPACK_IMPORTED_MODULE_3__.MailerModule.forRootAsync({
                useFactory: (config) => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(void 0, void 0, void 0, function* () {
                    return ({
                        transport: {
                            host: config.get('SMTP_HOST'),
                            auth: {
                                user: config.get('SMTP_MAIL'),
                                pass: config.get('SMTP_PASSWORD'),
                            },
                        },
                        defaults: {
                            from: 'Chow Chow Choo',
                        },
                        template: {
                            dir: (0,path__WEBPACK_IMPORTED_MODULE_5__.join)(process.cwd(), 'apps/users/email-templates'),
                            adapter: new _nestjs_modules_mailer_dist_adapters_ejs_adapter__WEBPACK_IMPORTED_MODULE_6__.EjsAdapter(),
                            options: {
                                strict: false,
                            },
                        },
                    });
                }),
                inject: [_nestjs_config__WEBPACK_IMPORTED_MODULE_4__.ConfigService],
            }),
        ],
        providers: [_email_service__WEBPACK_IMPORTED_MODULE_2__.EmailService],
    })
], EmailModule);



/***/ }),

/***/ "./apps/users/src/email/email.service.ts":
/*!***********************************************!*\
  !*** ./apps/users/src/email/email.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailService: () => (/* binding */ EmailService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_modules_mailer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs-modules/mailer */ "@nestjs-modules/mailer");
/* harmony import */ var _nestjs_modules_mailer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_modules_mailer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
var _a;



let EmailService = class EmailService {
    constructor(mailService) {
        this.mailService = mailService;
    }
    sendMail(_a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, arguments, void 0, function* ({ subject, email, name, activationCode, template, }) {
            yield this.mailService.sendMail({
                to: email,
                subject,
                template,
                context: {
                    name,
                    activationCode,
                },
            });
        });
    }
};
EmailService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_2__.Injectable)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_a = typeof _nestjs_modules_mailer__WEBPACK_IMPORTED_MODULE_1__.MailerService !== "undefined" && _nestjs_modules_mailer__WEBPACK_IMPORTED_MODULE_1__.MailerService) === "function" ? _a : Object])
], EmailService);



/***/ }),

/***/ "./apps/users/src/entities/user.entities.ts":
/*!**************************************************!*\
  !*** ./apps/users/src/entities/user.entities.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Avatars: () => (/* binding */ Avatars),
/* harmony export */   User: () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__);
var _a, _b;


let Avatars = class Avatars {
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", String)
], Avatars.prototype, "id", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", String)
], Avatars.prototype, "public_id", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", String)
], Avatars.prototype, "url", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", String)
], Avatars.prototype, "userId", void 0);
Avatars = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.ObjectType)(),
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Directive)('@key(fields:"id")')
], Avatars);

let User = class User {
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", String)
], User.prototype, "id", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", String)
], User.prototype, "name", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", String)
], User.prototype, "email", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", String)
], User.prototype, "password", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => Avatars, { nullable: true }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Avatars)
], User.prototype, "avatar", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", String)
], User.prototype, "role", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)({ nullable: true }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", String)
], User.prototype, "address", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)({ nullable: true }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Number)
], User.prototype, "phone_number", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], User.prototype, "createAt", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], User.prototype, "updateAt", void 0);
User = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.ObjectType)()
], User);



/***/ }),

/***/ "./apps/users/src/guard/auth.guard.ts":
/*!********************************************!*\
  !*** ./apps/users/src/guard/auth.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_jwt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _prisma_Prisma_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../prisma/Prisma.service */ "./apps/users/prisma/Prisma.service.ts");
var _a, _b, _c;






let AuthGuard = class AuthGuard {
    constructor(config, prisma, jwt) {
        this.config = config;
        this.prisma = prisma;
        this.jwt = jwt;
    }
    canActivate(context) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const gqlContext = _nestjs_graphql__WEBPACK_IMPORTED_MODULE_3__.GqlExecutionContext.create(context);
            const { req } = gqlContext.getContext();
            const accessToken = req.headers.accesstoken;
            const refreshToken = req.headers.refreshtoken;
            if (!accessToken || !refreshToken) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__.UnauthorizedException('Please login to access this resource!');
            }
            if (accessToken) {
                // const decoded = this.jwt.verify(accessToken, {
                //   secret: this.config.get<string>('ACCESS_TOKEN_SECRET'),
                // });
                const decoded = this.jwt.decode(accessToken);
                if (decoded) {
                    const expirationTime = (decoded === null || decoded === void 0 ? void 0 : decoded.exp) * 1000;
                    if (expirationTime < Date.now()) {
                        yield this.updateAccessToken(req);
                    }
                    else {
                        const user = yield this.prisma.user.findUnique({
                            where: {
                                id: decoded.id,
                            },
                        });
                        const accessToken = this.jwt.sign({
                            id: user.id,
                        }, {
                            secret: this.config.get('ACCESS_TOKEN_SECRET'),
                            expiresIn: '5m',
                        });
                        const refreshToken = this.jwt.sign({ id: user.id }, {
                            secret: this.config.get('REFRESH_TOKEN_SECRET'),
                            expiresIn: '7d',
                        });
                        req.accessToken = accessToken;
                        req.refreshToken = refreshToken;
                        req.user = user;
                    }
                }
            }
            return true;
        });
    }
    updateAccessToken(req) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const refreshTokenData = req.headers.refreshtoken;
                // const decoded = this.jwt.verify(refreshTokenData, {
                //   secret: this.config.get<string>('REFRESH_TOKEN_SECRET'),
                // });
                const decoded = this.jwt.decode(refreshTokenData);
                const expirationTime = decoded.exp * 1000;
                if (expirationTime < Date.now()) {
                    throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__.UnauthorizedException('Please login to access this resource');
                }
                const user = yield this.prisma.user.findUnique({
                    where: {
                        id: decoded.id,
                    },
                });
                const accessToken = this.jwt.sign({
                    id: user.id,
                }, {
                    secret: this.config.get('ACCESS_TOKEN_SECRET'),
                    expiresIn: '5m',
                });
                const refreshToken = this.jwt.sign({ id: user.id }, {
                    secret: this.config.get('REFRESH_TOKEN_SECRET'),
                    expiresIn: '7d',
                });
                req.accessToken = accessToken;
                req.refreshToken = refreshToken;
                req.user = user;
            }
            catch (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__.UnauthorizedException(error.message);
            }
        });
    }
};
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Injectable)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_a = typeof _nestjs_config__WEBPACK_IMPORTED_MODULE_2__.ConfigService !== "undefined" && _nestjs_config__WEBPACK_IMPORTED_MODULE_2__.ConfigService) === "function" ? _a : Object, typeof (_b = typeof _prisma_Prisma_service__WEBPACK_IMPORTED_MODULE_5__.PrismaService !== "undefined" && _prisma_Prisma_service__WEBPACK_IMPORTED_MODULE_5__.PrismaService) === "function" ? _b : Object, typeof (_c = typeof _nestjs_jwt__WEBPACK_IMPORTED_MODULE_4__.JwtService !== "undefined" && _nestjs_jwt__WEBPACK_IMPORTED_MODULE_4__.JwtService) === "function" ? _c : Object])
], AuthGuard);



/***/ }),

/***/ "./apps/users/src/types/user.types.ts":
/*!********************************************!*\
  !*** ./apps/users/src/types/user.types.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivationResponse: () => (/* binding */ ActivationResponse),
/* harmony export */   ErrorType: () => (/* binding */ ErrorType),
/* harmony export */   ForgotPasswordResponse: () => (/* binding */ ForgotPasswordResponse),
/* harmony export */   LoginResponse: () => (/* binding */ LoginResponse),
/* harmony export */   LogoutResponse: () => (/* binding */ LogoutResponse),
/* harmony export */   RegisterResponse: () => (/* binding */ RegisterResponse),
/* harmony export */   ResetPasswordResponse: () => (/* binding */ ResetPasswordResponse)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _entities_user_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/user.entities */ "./apps/users/src/entities/user.entities.ts");
var _a, _b, _c;



let ErrorType = class ErrorType {
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", String)
], ErrorType.prototype, "message", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)({ nullable: true }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", String)
], ErrorType.prototype, "code", void 0);
ErrorType = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.ObjectType)()
], ErrorType);

let RegisterResponse = class RegisterResponse {
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", String)
], RegisterResponse.prototype, "activation_token", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => ErrorType, { nullable: true }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", ErrorType)
], RegisterResponse.prototype, "error", void 0);
RegisterResponse = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.ObjectType)()
], RegisterResponse);

let ActivationResponse = class ActivationResponse {
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => _entities_user_entities__WEBPACK_IMPORTED_MODULE_2__.User),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Object)
], ActivationResponse.prototype, "user", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => ErrorType, { nullable: true }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", ErrorType)
], ActivationResponse.prototype, "error", void 0);
ActivationResponse = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.ObjectType)()
], ActivationResponse);

let LoginResponse = class LoginResponse {
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => _entities_user_entities__WEBPACK_IMPORTED_MODULE_2__.User, { nullable: true }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Object)
], LoginResponse.prototype, "user", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)({ nullable: true }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", String)
], LoginResponse.prototype, "accessToken", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)({ nullable: true }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", String)
], LoginResponse.prototype, "refreshToken", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => ErrorType, { nullable: true }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", ErrorType)
], LoginResponse.prototype, "error", void 0);
LoginResponse = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.ObjectType)()
], LoginResponse);

let LogoutResponse = class LogoutResponse {
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", String)
], LogoutResponse.prototype, "message", void 0);
LogoutResponse = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.ObjectType)()
], LogoutResponse);

let ForgotPasswordResponse = class ForgotPasswordResponse {
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", String)
], ForgotPasswordResponse.prototype, "message", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => ErrorType, { nullable: true }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", ErrorType)
], ForgotPasswordResponse.prototype, "error", void 0);
ForgotPasswordResponse = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.ObjectType)()
], ForgotPasswordResponse);

let ResetPasswordResponse = class ResetPasswordResponse {
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => _entities_user_entities__WEBPACK_IMPORTED_MODULE_2__.User),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Object)
], ResetPasswordResponse.prototype, "user", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.Field)(() => ErrorType, { nullable: true }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", ErrorType)
], ResetPasswordResponse.prototype, "error", void 0);
ResetPasswordResponse = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_1__.ObjectType)()
], ResetPasswordResponse);



/***/ }),

/***/ "./apps/users/src/user.resolver.ts":
/*!*****************************************!*\
  !*** ./apps/users/src/user.resolver.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserResolver: () => (/* binding */ UserResolver)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dto_user_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dto/user.dto */ "./apps/users/src/dto/user.dto.ts");
/* harmony import */ var _types_user_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types/user.types */ "./apps/users/src/types/user.types.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.service */ "./apps/users/src/users.service.ts");
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _entities_user_entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entities/user.entities */ "./apps/users/src/entities/user.entities.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guard/auth.guard */ "./apps/users/src/guard/auth.guard.ts");
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;








let UserResolver = class UserResolver {
    constructor(usersService) {
        this.usersService = usersService;
    }
    // register
    register(registerDto, context) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            if (!registerDto.name || !registerDto.email || !registerDto.password) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_5__.BadRequestException('Please fill all the fields');
            }
            const { activation_token } = yield this.usersService.register(registerDto, context.res);
            return { activation_token };
        });
    }
    // activate user
    activateUser(activationDto, context) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.usersService.activateUser(activationDto, context.res);
        });
    }
    // login
    Login(email, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return this.usersService.login({ email, password });
        });
    }
    // log out
    logOutUser(context) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.usersService.logout(context.req);
        });
    }
    // get logged in user
    getLoggedInUser(context) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.usersService.getLoggedInUser(context.req);
        });
    }
    // get users
    getUsers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return this.usersService.getUsers();
        });
    }
    // forgot password
    forgotPassword(forgotPasswordDto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.usersService.forgotPassword(forgotPasswordDto);
        });
    }
    resetPassword(resetPasswordDto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return this.usersService.resetPassword(resetPasswordDto);
        });
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__.Mutation)(() => _types_user_types__WEBPACK_IMPORTED_MODULE_2__.RegisterResponse),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__.Args)('registerDto')),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(1, (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__.Context)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_b = typeof _dto_user_dto__WEBPACK_IMPORTED_MODULE_1__.RegisterDto !== "undefined" && _dto_user_dto__WEBPACK_IMPORTED_MODULE_1__.RegisterDto) === "function" ? _b : Object, Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], UserResolver.prototype, "register", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__.Mutation)(() => _types_user_types__WEBPACK_IMPORTED_MODULE_2__.ActivationResponse),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__.Args)('activationDto')),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(1, (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__.Context)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_d = typeof _dto_user_dto__WEBPACK_IMPORTED_MODULE_1__.ActivationDto !== "undefined" && _dto_user_dto__WEBPACK_IMPORTED_MODULE_1__.ActivationDto) === "function" ? _d : Object, Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], UserResolver.prototype, "activateUser", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__.Mutation)(() => _types_user_types__WEBPACK_IMPORTED_MODULE_2__.LoginResponse),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__.Args)('email')),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(1, (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__.Args)('password')),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [String, String]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], UserResolver.prototype, "Login", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__.Query)(() => _types_user_types__WEBPACK_IMPORTED_MODULE_2__.LogoutResponse),
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_5__.UseGuards)(_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AuthGuard),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__.Context)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", Promise)
], UserResolver.prototype, "logOutUser", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__.Query)(() => _types_user_types__WEBPACK_IMPORTED_MODULE_2__.LoginResponse),
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_5__.UseGuards)(_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__.AuthGuard),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__.Context)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", Promise)
], UserResolver.prototype, "getLoggedInUser", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__.Query)(() => [_entities_user_entities__WEBPACK_IMPORTED_MODULE_6__.User]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", []),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", Promise)
], UserResolver.prototype, "getUsers", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__.Mutation)(() => _types_user_types__WEBPACK_IMPORTED_MODULE_2__.ForgotPasswordResponse),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__.Args)('forgotPasswordDto')),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_g = typeof _dto_user_dto__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordDto !== "undefined" && _dto_user_dto__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordDto) === "function" ? _g : Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], UserResolver.prototype, "forgotPassword", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__.Mutation)(() => _types_user_types__WEBPACK_IMPORTED_MODULE_2__.ResetPasswordResponse),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__.Args)('resetPasswordDto')),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_j = typeof _dto_user_dto__WEBPACK_IMPORTED_MODULE_1__.ResetPasswordDto !== "undefined" && _dto_user_dto__WEBPACK_IMPORTED_MODULE_1__.ResetPasswordDto) === "function" ? _j : Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], UserResolver.prototype, "resetPassword", null);
UserResolver = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__.Resolver)('User')
    // @UseFilter
    ,
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_a = typeof _users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService !== "undefined" && _users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService) === "function" ? _a : Object])
], UserResolver);



/***/ }),

/***/ "./apps/users/src/users.controller.ts":
/*!********************************************!*\
  !*** ./apps/users/src/users.controller.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersController: () => (/* binding */ UsersController)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.service */ "./apps/users/src/users.service.ts");
var _a;



let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
};
UsersController = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Controller)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_a = typeof _users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService !== "undefined" && _users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService) === "function" ? _a : Object])
], UsersController);



/***/ }),

/***/ "./apps/users/src/users.module.ts":
/*!****************************************!*\
  !*** ./apps/users/src/users.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersModule: () => (/* binding */ UsersModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _users_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.controller */ "./apps/users/src/users.controller.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.service */ "./apps/users/src/users.service.ts");
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/graphql */ "@nestjs/graphql");
/* harmony import */ var _nestjs_graphql__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nestjs_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nestjs/apollo */ "@nestjs/apollo");
/* harmony import */ var _nestjs_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_apollo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nestjs_jwt__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _prisma_Prisma_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../prisma/Prisma.service */ "./apps/users/prisma/Prisma.service.ts");
/* harmony import */ var _user_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user.resolver */ "./apps/users/src/user.resolver.ts");
/* harmony import */ var _email_email_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./email/email.module */ "./apps/users/src/email/email.module.ts");
/* harmony import */ var _email_email_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./email/email.service */ "./apps/users/src/email/email.service.ts");












let UsersModule = class UsersModule {
};
UsersModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Module)({
        imports: [
            _nestjs_config__WEBPACK_IMPORTED_MODULE_6__.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: './apps/users/.env',
            }),
            _nestjs_graphql__WEBPACK_IMPORTED_MODULE_4__.GraphQLModule.forRoot({
                driver: _nestjs_apollo__WEBPACK_IMPORTED_MODULE_5__.ApolloFederationDriver,
                autoSchemaFile: {
                    federation: 2,
                },
            }),
            _email_email_module__WEBPACK_IMPORTED_MODULE_10__.EmailModule,
        ],
        controllers: [_users_controller__WEBPACK_IMPORTED_MODULE_2__.UsersController],
        providers: [
            _users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService,
            _nestjs_config__WEBPACK_IMPORTED_MODULE_6__.ConfigService,
            _nestjs_jwt__WEBPACK_IMPORTED_MODULE_7__.JwtService,
            _email_email_service__WEBPACK_IMPORTED_MODULE_11__.EmailService,
            _prisma_Prisma_service__WEBPACK_IMPORTED_MODULE_8__.PrismaService,
            _user_resolver__WEBPACK_IMPORTED_MODULE_9__.UserResolver,
        ],
    })
], UsersModule);



/***/ }),

/***/ "./apps/users/src/users.service.ts":
/*!*****************************************!*\
  !*** ./apps/users/src/users.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersService: () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_jwt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _prisma_Prisma_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../prisma/Prisma.service */ "./apps/users/prisma/Prisma.service.ts");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _email_email_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email/email.service */ "./apps/users/src/email/email.service.ts");
/* harmony import */ var _utils_sendTokens__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/sendTokens */ "./apps/users/src/utils/sendTokens.ts");
var _a, _b, _c, _d;








let UsersService = class UsersService {
    constructor(jwtService, configService, prismaService, emailService) {
        this.jwtService = jwtService;
        this.configService = configService;
        this.prismaService = prismaService;
        this.emailService = emailService;
    }
    // register user service
    register(registerDto, response) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const { name, email, password, phone_number } = registerDto;
            const isEmailExist = yield this.prismaService.user.findUnique({
                where: {
                    email,
                },
            });
            if (isEmailExist) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__.BadRequestException('User already exist with this email!');
            }
            const usersWithPhoneNumber = yield this.prismaService.user.findUnique({
                where: {
                    phone_number,
                },
            });
            if (usersWithPhoneNumber) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__.BadRequestException('User already exist with this phone number!');
            }
            const saltRounds = parseInt(this.configService.get('SALT_ROUND'));
            const hashedPassword = yield bcrypt__WEBPACK_IMPORTED_MODULE_5__.hash(password, saltRounds);
            const user = {
                name,
                email,
                password: hashedPassword,
                phone_number,
            };
            const activationToken = yield this.createActivationToken(user);
            const activationCode = activationToken.activationCode;
            this.emailService.sendMail({
                email,
                subject: 'Activate your account!',
                template: './activation-mail',
                name,
                activationCode,
            });
            const activation_token = activationToken.token;
            return { activation_token, response };
        });
    }
    // create activation token
    createActivationToken(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const activationCode = Math.floor(1000 + Math.random() * 9000).toString();
            const token = this.jwtService.sign({
                user,
                activationCode,
            }, {
                secret: this.configService.get('ACTIVATION_SECRET'),
                expiresIn: '5m',
            });
            return { token, activationCode };
        });
    }
    // activation user
    activateUser(activationDto, response) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const { activationToken, activationCode } = activationDto;
            const newUser = this.jwtService.verify(activationToken, {
                secret: this.configService.get('ACTIVATION_SECRET'),
            });
            if (newUser.activationCode !== activationCode) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__.BadRequestException('Invalid activation code');
            }
            const { name, email, password, phone_number } = newUser.user;
            const existUser = yield this.prismaService.user.findUnique({
                where: {
                    email,
                },
            });
            if (existUser) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__.BadRequestException('User already exist with this email!');
            }
            const user = yield this.prismaService.user.create({
                data: {
                    name,
                    email,
                    password,
                    phone_number,
                },
            });
            return { user, response };
        });
    }
    // login user service
    login(loginDto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const { email, password } = loginDto;
            const user = yield this.prismaService.user.findUnique({
                where: {
                    email,
                },
            });
            if (user && (yield this.comparePassword(password, user.password))) {
                const tokenSender = new _utils_sendTokens__WEBPACK_IMPORTED_MODULE_7__.TokenSender(this.configService, this.jwtService);
                return tokenSender.sendToken(user);
            }
            else {
                return {
                    user: null,
                    accessToken: null,
                    refreshToken: null,
                    error: {
                        message: 'Invalid email or password',
                    },
                };
            }
        });
    }
    // get all users service
    getUsers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return this.prismaService.user.findMany({});
        });
    }
    // get logged in user
    getLoggedInUser(req) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const user = req.user;
            const refreshToken = req.refreshToken;
            const accessToken = req.accessToken;
            return { user, refreshToken, accessToken };
        });
    }
    // compare password
    comparePassword(password, hashedPassword) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            return yield bcrypt__WEBPACK_IMPORTED_MODULE_5__.compare(password, hashedPassword);
        });
    }
    // log out
    logout(req) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            req.user = null;
            req.refreshToken = null;
            req.accessToken = null;
            return { message: 'Logged out successfully!' };
        });
    }
    // forgot password
    forgotPassword(forgotPwDto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const { email } = forgotPwDto;
            const user = yield this.prismaService.user.findUnique({
                where: {
                    email,
                },
            });
            if (!user) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__.BadRequestException('User not found with this email!');
            }
            const forgotPasswordToken = yield this.generateForgotPasswordToken(user);
            const resetPasswordUrl = this.configService.get('CLIENT_SIDE_URI') +
                `/reset-password?verify=${forgotPasswordToken}`;
            yield this.emailService.sendMail({
                email,
                subject: 'Reset your Password!',
                template: './forgot-password',
                name: user.name,
                activationCode: resetPasswordUrl,
            });
            return { message: `Your forgot password request successful!` };
        });
    }
    // generate forgotPw token
    generateForgotPasswordToken(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const forgotPasswordToken = this.jwtService.sign({
                user,
            }, {
                secret: this.configService.get('FORGOT_PASSWORD_SECRET'),
                expiresIn: '5m',
            });
            return forgotPasswordToken;
        });
    }
    // reset password
    resetPassword(resetPwDto) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const { password, activationToken } = resetPwDto;
            const decoded = this.jwtService.decode(activationToken);
            if (!decoded || (decoded === null || decoded === void 0 ? void 0 : decoded.exp) * 1000 < Date.now()) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__.BadRequestException('Invalid token!');
            }
            const saltRounds = parseInt(this.configService.get('SALT_ROUND'));
            const hashedPassword = yield bcrypt__WEBPACK_IMPORTED_MODULE_5__.hash(password, saltRounds);
            const user = yield this.prismaService.user.update({
                where: {
                    id: decoded.user.id,
                },
                data: {
                    password: hashedPassword,
                },
            });
            return { user };
        });
    }
};
UsersService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Injectable)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_a = typeof _nestjs_jwt__WEBPACK_IMPORTED_MODULE_3__.JwtService !== "undefined" && _nestjs_jwt__WEBPACK_IMPORTED_MODULE_3__.JwtService) === "function" ? _a : Object, typeof (_b = typeof _nestjs_config__WEBPACK_IMPORTED_MODULE_2__.ConfigService !== "undefined" && _nestjs_config__WEBPACK_IMPORTED_MODULE_2__.ConfigService) === "function" ? _b : Object, typeof (_c = typeof _prisma_Prisma_service__WEBPACK_IMPORTED_MODULE_4__.PrismaService !== "undefined" && _prisma_Prisma_service__WEBPACK_IMPORTED_MODULE_4__.PrismaService) === "function" ? _c : Object, typeof (_d = typeof _email_email_service__WEBPACK_IMPORTED_MODULE_6__.EmailService !== "undefined" && _email_email_service__WEBPACK_IMPORTED_MODULE_6__.EmailService) === "function" ? _d : Object])
], UsersService);



/***/ }),

/***/ "./apps/users/src/utils/sendTokens.ts":
/*!********************************************!*\
  !*** ./apps/users/src/utils/sendTokens.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenSender: () => (/* binding */ TokenSender)
/* harmony export */ });
class TokenSender {
    constructor(config, jwt) {
        this.config = config;
        this.jwt = jwt;
    }
    sendToken(user) {
        const accessToken = this.jwt.sign({
            id: user.id,
        }, {
            secret: this.config.get('ACCESS_TOKEN_SECRET'),
            expiresIn: '5m',
        });
        const refreshToken = this.jwt.sign({
            id: user.id,
        }, {
            secret: this.config.get('REFRESH_TOKEN_SECRET'),
            expiresIn: '3d',
        });
        return { user, accessToken, refreshToken };
    }
}


/***/ }),

/***/ "@nestjs-modules/mailer":
/*!*****************************************!*\
  !*** external "@nestjs-modules/mailer" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@nestjs-modules/mailer");

/***/ }),

/***/ "@nestjs-modules/mailer/dist/adapters/ejs.adapter":
/*!*******************************************************************!*\
  !*** external "@nestjs-modules/mailer/dist/adapters/ejs.adapter" ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = require("@nestjs-modules/mailer/dist/adapters/ejs.adapter");

/***/ }),

/***/ "@nestjs/apollo":
/*!*********************************!*\
  !*** external "@nestjs/apollo" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/apollo");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/graphql":
/*!**********************************!*\
  !*** external "@nestjs/graphql" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/graphql");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./apps/users/src/main.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _users_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.module */ "./apps/users/src/users.module.ts");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
/* harmony import */ var _nestjs_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_config__WEBPACK_IMPORTED_MODULE_5__);






function bootstrap() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_1__.NestFactory.create(_users_module__WEBPACK_IMPORTED_MODULE_2__.UsersModule);
        const logger = new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__.Logger();
        app.useGlobalPipes(new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__.ValidationPipe());
        app.useStaticAssets((0,path__WEBPACK_IMPORTED_MODULE_4__.join)(__dirname, '..', 'public'));
        app.setBaseViewsDir((0,path__WEBPACK_IMPORTED_MODULE_4__.join)(__dirname, '..', 'servers/email-templates'));
        app.setViewEngine('ejs');
        app.enableCors({
            origin: '*',
        });
        const configService = app.get(_nestjs_config__WEBPACK_IMPORTED_MODULE_5__.ConfigService);
        yield app.listen(configService.get('PORT'), () => (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const url = yield app.getUrl();
            logger.log('Auth Server is running on ' + url);
        }));
    });
}
bootstrap();

})();

/******/ })()
;