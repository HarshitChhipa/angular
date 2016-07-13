"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var course_service_1 = require('../../services/courses/course.service');
var CoursesComponent = (function () {
    function CoursesComponent(courseService) {
        this.courses = courseService.getCourses();
        this.title = "Courses";
    }
    CoursesComponent.prototype.addCourse = function (courseToAdd) {
        var index = this.courses.indexOf(courseToAdd);
        if (index > 0) {
            // Already existing -> do nothing
            console.log("This course already exists : " + courseToAdd);
        }
        else {
            this.courses.push(courseToAdd);
            this.updateCoursesTitle();
        }
    };
    CoursesComponent.prototype.removeCourse = function (courseToRemove) {
        var index = this.courses.indexOf(courseToRemove);
        if (index > 0) {
            // Existing -> we remove it
            this.courses.splice(index, 1);
            this.updateCoursesTitle();
        }
        else {
            console.log("This course does not exist : " + courseToRemove);
        }
    };
    CoursesComponent.prototype.updateCoursesTitle = function () {
        this.title = "There are " + this.courses.length + " Courses : ";
    };
    CoursesComponent = __decorate([
        core_1.Component({
            selector: 'courses',
            template: "\n      <h2>{{ title }}</h2>\n      <input #inputCourses (keyup.enter)=\"addCourse(inputCourses.value) ; inputCourses.value=''\" type=\"text\" autoGrow />\n      <button (click)=\"addCourse(inputCourses.value) ; inputCourses.value=''\">Add Course!</button>\n      <button (click)=\"removeCourse(inputCourses.value) ; inputCourses.value=''\">Remove Course!</button>\n      <ul>\n        <li *ngFor=\"let course of courses\">\n          {{course}}\n        </li>\n      </ul>\n            ",
            providers: [course_service_1.CourseService]
        }), 
        __metadata('design:paramtypes', [course_service_1.CourseService])
    ], CoursesComponent);
    return CoursesComponent;
}());
exports.CoursesComponent = CoursesComponent;
//# sourceMappingURL=courses.component.js.map