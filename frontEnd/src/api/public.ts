import request from "./index";
export function selectAllClass() {
    return request({
        method: "get",
        url: "/api/public/selectAllClass",
    });
}
export function selectAllLesson() {
    return request({
        method: "get",
        url: "/api/public/selectAllLesson",
    });
}
export function selectAllRooms() {
    return request({
        method: "get",
        url: "/api/public/selectAllRooms",
    });
}
export function selectAllExperiments() {
    return request({
        method: "get",
        url: "/api/public/selectAllExperiments",
    });
}
export function selectAllQuestions() {
    return request({
        method: "get",
        url: "/api/public/selectAllQuestions",
    });
}
export function selectAllTeachers() {
    return request({
        method: "get",
        url: "/api/public/selectAllTeachers",
    });
}
export function selectClassAndLesson() {
    return request({
        method: "get",
        url: "/api/public/selectClassAndLesson",
    });
}
export function selectLessonAndTeacher() {
    return request({
        method: "get",
        url: "/api/public/selectLessonAndTeacher",
    });
}
export function selectLessonAndExperiment() {
    return request({
        method: "get",
        url: "/api/public/selectLessonAndExperiment",
    });
}