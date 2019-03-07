"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var eventemitter3_1 = __importDefault(require("eventemitter3"));
var gawkbox_1 = require("./Platforms/gawkbox");
exports.Gawkbox = gawkbox_1.Gawkbox;
var PlatformWrapper = /** @class */ (function (_super) {
    __extends(PlatformWrapper, _super);
    function PlatformWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.platform = null;
        return _this;
    }
    /**
     * Here we set an adprovider, any can be given as long as it implements the IProvider interface
     *
     * @param platform
     */
    PlatformWrapper.prototype.setPlatform = function (platform) {
        if (platform) {
            this.platform = platform;
            this.platform.setWrapper(this);
        }
    };
    PlatformWrapper.prototype.gameLoaded = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (null === this.platform) {
            //Silently return for when no platform is set
            return;
        }
        this.platform.gameLoaded.apply(this.platform, args);
    };
    PlatformWrapper.prototype.gameStarted = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (null === this.platform) {
            //Silently return for when no platform is set
            return;
        }
        this.platform.gameStarted.apply(this.platform, args);
    };
    PlatformWrapper.prototype.gameEnded = function (fail, score, level) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        if (null === this.platform) {
            throw new Error('Can not request an ad without an provider, please attach an ad provider!');
        }
        this.platform.gameEnded.apply(this.platform, args);
    };
    PlatformWrapper.prototype.gamePaused = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (null === this.platform) {
            //Silently return for when no platform is set
            return;
        }
        this.platform.gamePaused.apply(this.platform, args);
    };
    PlatformWrapper.prototype.gameResumed = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (null === this.platform) {
            //Silently return for when no platform is set
            return;
        }
        this.platform.gameResumed.apply(this.platform, args);
    };
    return PlatformWrapper;
}(eventemitter3_1.default));
exports.PlatformWrapper = PlatformWrapper;
exports.platform = new PlatformWrapper();
//# sourceMappingURL=platform-wrapper.js.map