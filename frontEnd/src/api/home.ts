import requestBing from "./bing";
import request from "./index";

export function getBingImage(data: any) {
    return requestBing({
        method: "get",
        url: "/HPImageArchive.aspx",
        data: data,
    });
}



