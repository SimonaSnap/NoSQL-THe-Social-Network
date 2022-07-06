const formateDate = function ()
{
    return this.createdAt.toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
}

module.exports = formateDate;