import request from "./index";

export function login(data: any) {
    return request({
        method: "post",
        url: "/api/login",
        data: data,
    });
}

export function register(data: any) {
    return request({
        method: "post",
        url: "/api/register",
        data: data,
    });
}

export function accountExists(data: any) {
    return request({
        method: "post",
        url: "/api/accountExists",
        data: data,
    });
}

export function verify(data: any) {
    return request({
        method: "post",
        url: "/api/verify",
        data: data,
    });
}

export function retrievePassword(data: any) {
    return request({
        method: "post",
        url: "/api/retrievePassword",
        data: data,
    });
}