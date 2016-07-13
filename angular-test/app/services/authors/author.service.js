"use strict";
var AuthorService = (function () {
    function AuthorService() {
    }
    AuthorService.prototype.getAuthors = function () {
        return ["Author1", "Author2", "Author3"];
    };
    return AuthorService;
}());
exports.AuthorService = AuthorService;
//# sourceMappingURL=author.service.js.map