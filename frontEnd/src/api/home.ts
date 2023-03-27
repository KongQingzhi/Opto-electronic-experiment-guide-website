import request from "./index";

export function updateUserInfo(data: any) {
    return request({
        method: "post",
        url: "/api/updateUserInfo",
        data: data,
    });
}
export function getAllClass(data: any) {
    return request({
        method: "get",
        url: "/api/getAllClass",
        data: data,
    });
}
export function createClass(data: any) {
    return request({
        method: "post",
        url: "/api/createClass",
        data: data,
    });
}

export function deleteClass(data: any) {
    return request({
        method: "post",
        url: "/api/deleteClass",
        data: data,
    });
}



