"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Bot = void 0;
var node_fetch_1 = require("node-fetch");
var api_link = 'https://api.telegram.org/';
var Bot = /** @class */ (function () {
    function Bot(token) {
        this.token = token;
        this.link = "".concat(api_link, "bot").concat(token);
    }
    Bot.prototype.post = function (command_name, json) {
        return __awaiter(this, void 0, void 0, function () {
            var command, response, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        command = "".concat(this.link, "/").concat(command_name);
                        return [4 /*yield*/, (0, node_fetch_1["default"])(command, { method: 'POST', body: JSON.stringify(json), headers: { 'content-type': 'application/json', Accept: 'application/json' } })];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error("sendMessage failed! status: ".concat(response.status));
                        }
                        return [4 /*yield*/, response.json()];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                    case 3:
                        error_1 = _a.sent();
                        if (error_1 instanceof Error) {
                            console.error(error_1);
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Bot.prototype.getUpdates = function (demand) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post('getUpdates', demand)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.result];
                }
            });
        });
    };
    Bot.prototype.setWebhook = function (demand) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post('setWebhook', demand)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.result];
                }
            });
        });
    };
    Bot.prototype.deleteWebhook = function (demand) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post('deleteWebhook', demand)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.result];
                }
            });
        });
    };
    Bot.prototype.getWebhookInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post('getWebhookInfo', {})];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.result];
                }
            });
        });
    };
    Bot.prototype.getMe = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post('getMe', {})];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.result];
                }
            });
        });
    };
    Bot.prototype.logOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post('logOut', {})];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.result];
                }
            });
        });
    };
    Bot.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post('close', {})];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.result];
                }
            });
        });
    };
    Bot.prototype.sendMessage = function (demand) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post('sendMessage', demand)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.result];
                }
            });
        });
    };
    Bot.prototype.forwardMessage = function (demand) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post('forwardMessage', demand)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.result];
                }
            });
        });
    };
    Bot.prototype.copyMessage = function (demand) {
        return __awaiter(this, void 0, void 0, function () {
            var r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post('copyMessage', demand)];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, r.result];
                }
            });
        });
    };
    Bot.prototype.sendPhoto = function (demand) {
        return __awaiter(this, void 0, void 0, function () {
            var r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post('sendPhoto', demand)];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, r.result];
                }
            });
        });
    };
    Bot.prototype.sendAudio = function (demand) {
        return __awaiter(this, void 0, void 0, function () {
            var r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post('sendAudio', demand)];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, r.result];
                }
            });
        });
    };
    Bot.prototype.sendDocument = function (demand) {
        return __awaiter(this, void 0, void 0, function () {
            var r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post('sendDocument', demand)];
                    case 1:
                        r = _a.sent();
                        return [2 /*return*/, r.result];
                }
            });
        });
    };
    return Bot;
}());
exports.Bot = Bot;
