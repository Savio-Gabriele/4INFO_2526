export const upper_case = (str) => {
    let s = ""

    for (let c of str){
        let code = c.charCodeAt(0)
        s = s.concat((code >= 97 && code <= 122) ? String.fromCharCode(code - 32) : String.fromCharCode(code))
    }

    return res
}
