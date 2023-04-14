import request from "./index";
export function updateUserInfo(data: any) {
    return request({
        method: "post",
        url: "/api/students/updateUserInfo",
        data: data,
    });
}

export function selectAllClass() {
    return request({
        method: "get",
        url: "/api/public/selectAllClass",
    });
}

export function selectExperiments(data: any) {
    return request({
        method: "get",
        url: "/api/students/selectExperiments",
        params: data,
    });
}

export function experimentsContent(data: any) {
    return request({
        method: "get",
        url: "/api/students/experimentsContent",
        params: data,
    });
}

export function selectQuestions(data: any) {
    return request({
        method: "get",
        url: "/api/students/selectQuestions",
        params: data,
    });
}

export function questionsContent(data: any) {
    return request({
        method: "get",
        url: "/api/students/questionsContent",
        params: data,
    });
}

export function replyQuestions(data: any) {
    return request({
        method: "post",
        url: "/api/students/replyQuestions",
        data: data,
    });
}


export function selectExperimentsScore(data: any) {
    return request({
        method: "get",
        url: "/api/students/selectExperimentsScore",
        params: data,
    });
}

export function selectLessonsScore(data: any) {
    return request({
        method: "get",
        url: "/api/students/selectLessonsScore",
        params: data,
    });
}
