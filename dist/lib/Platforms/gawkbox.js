"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Gawkbox = /** @class */ (function () {
    function Gawkbox() {
    }
    Gawkbox.prototype.setWrapper = function (wrapper) {
        this.platformWrapper = wrapper;
    };
    Gawkbox.prototype.gameLoaded = function () {
        return;
    };
    Gawkbox.prototype.gameStarted = function () {
        return;
    };
    Gawkbox.prototype.gameEnded = function (fail, score, level) {
        window.postMessage(JSON.stringify({
            event: 'stop',
            score: score
        }), '*');
    };
    Gawkbox.prototype.gamePaused = function () {
        return;
    };
    Gawkbox.prototype.gameResumed = function () {
        return;
    };
    Gawkbox.prototype.sendScore = function () {
        return;
    };
    return Gawkbox;
}());
exports.Gawkbox = Gawkbox;
//# sourceMappingURL=gawkbox.js.map