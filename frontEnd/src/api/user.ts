import request from "./index";

export function login(data: any) {
    return request({
        method: "post",
        url: "/api/user/login",
        data: data,
    });
}

export function register(data: any) {
    return request({
        method: "post",
        url: "/api/user/register",
        data: data,
    });
}

export function accountExists(data: any) {
    return request({
        method: "post",
        url: "/api/user/accountExists",
        data: data,
    });
}

export function verify(data: any) {
    return request({
        method: "post",
        url: "/api/user/verify",
        data: data,
    });
}

export function retrievePassword(data: any) {
    return request({
        method: "post",
        url: "/api/user/retrievePassword",
        data: data,
    });
}