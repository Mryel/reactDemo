function getFormatDate (time) {
    var date = new Date(time)
    var year = date.getFullYear()
    var month = ((date.getMonth() + 1) < 10) ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1)
    var day = (date.getDate() < 10) ? ('0' + date.getDate()) : date.getDate()
    return `${year}-${month}-${day}`
}

export default getFormatDate