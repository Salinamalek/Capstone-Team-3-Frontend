
function convertDate(str){
    const strArr= str.split("T")[0].split("-")
    const arranged = [strArr[1], strArr[2], strArr[0].slice(2,4)].join("/")
    return arranged
}












export {
    convertDate,
}