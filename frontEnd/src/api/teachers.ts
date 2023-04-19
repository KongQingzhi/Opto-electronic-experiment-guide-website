import request from "./index";
export function selectClassExists(data: any) {
    return request({
        method: "post",
        url: "/api/teachers/selectClassExists",
        data: data,
    });
}
export function createClass(data: any) {
    return request({
        method: "post",
        url: "/api/teachers/createClass",
        data: data,
    });
}
export function deleteClass(data: any) {
    return request({
        method: "post",
        url: "/api/teachers/deleteClass",
        data: data,
    });
}
export function selectLessonExists(data: any) {
    return request({
        method: "post",
        url: "/api/teachers/selectLessonExists",
        data: data,
    });
}
export function createLesson(data: any) {
    return request({
        method: "post",
        url: "/api/teachers/createLesson",
        data: data,
    });
}
export function deleteLesson(data: any) {
    return request({
        method: "post",
        url: "/api/teachers/deleteLesson",
        data: data,
    });
}
export function isbindClassAndLesson(data: any) {
    return request({
        method: "post",
        url: "/api/teachers/isbindClassAndLesson",
        data: data,
    });
}
export function bindClassAndLesson(data: any) {
    return request({
        method: "post",
        url: "/api/teachers/bindClassAndLesson",
        data: data,
    });
}
export function experimentExists(data: any) {
    return request({
        method: "post",
        url: "/api/teachers/experimentExists",
        data: data,
    });
}
export function releaseExperiment(data: any) {
    return request({
        method: "post",
        url: "/api/teachers/releaseExperiment",
        data: data,
    });
}
export function deleteExperiment(data: any) {
    return request({
        method: "post",
        url: "/api/teachers/deleteExperiment",
        data: data,
    });
}
export function bindTeacherAndLesson(data: any) {
    return request({
        method: "post",
        url: "/api/teachers/bindTeacherAndLesson",
        data: data,
    });
}
export function isbindExperimentLesson(data: any) {
    return request({
        method: "post",
        url: "/api/teachers/isbindExperimentLesson",
        data: data,
    });
}
export function bindExperimentLesson(data: any) {
    return request({
        method: "post",
        url: "/api/teachers/bindExperimentLesson",
        data: data,
    });
}
export function releaseQuestion(data: any) {
    return request({
        method: "post",
        url: "/api/teachers/releaseQuestion",
        data: data,
    });
}
export function deleteQuestion(data: any) {
    return request({
        method: "post",
        url: "/api/teachers/deleteQuestion",
        data: data,
    });
}
export function questionScoring(data: any) {
    return request({
        method: "post",
        url: "/api/teachers/questionScoring",
        data: data,
    });
}
export function experimentScoring(data: any) {
    return request({
        method: "post",
        url: "/api/teachers/experimentScoring",
        data: data,
    });
}
export function deleteClassAndLesson(data: any) {
    return request({
        method: "post",
        url: "/api/teachers/deleteClassAndLesson",
        data: data,
    });
}

export function deleteLessonAndTeacher(data: any) {
    return request({
        method: "post",
        url: "/api/teachers/deleteLessonAndTeacher",
        data: data,
    });
}

export function deleteLessonAndExperiment(data: any) {
    return request({
        method: "post",
        url: "/api/teachers/deleteLessonAndExperiment",
        data: data,
    });
}

