"use strict";
function isAuthenticated(req, res, next) {
    next();
}
exports.isAuthenticated = isAuthenticated;
function isAnonymous(req, res, next) {
    next();
}
exports.isAnonymous = isAnonymous;
function isPublic(req, res, next) {
    next();
}
exports.isPublic = isPublic;
//# sourceMappingURL=auth.js.map