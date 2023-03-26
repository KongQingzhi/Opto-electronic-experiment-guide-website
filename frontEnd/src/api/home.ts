import request from "./index";

export function getBingImage(data: any) {
    return request({
        method: "get",
        url: "/HPImageArchive.aspx",
        data: data,
    });
}



