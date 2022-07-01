"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ name, duration = 2, educator }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseService();
