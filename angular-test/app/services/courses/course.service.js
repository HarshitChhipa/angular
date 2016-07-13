"use strict";
var CourseService = (function () {
    function CourseService() {
    }
    CourseService.prototype.getCourses = function () {
        return ["Course1", "Course2", "Course3"];
    };
    return CourseService;
}());
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map