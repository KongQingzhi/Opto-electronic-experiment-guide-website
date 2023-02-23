function getParams(key) {
    const { ctx } = this;
    if (ctx.query[key]) {
        return ctx.query[key]
    } else if (ctx.request[key]) {
        return ctx.request[key]
    }
}
module.exports = {
    getParams
}