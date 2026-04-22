export const rm_string = (s, r) => {
    let strOut = ""

    for (let i = 0; i < s.length; i++) {
        if (s[i] != r) {
            strOut = strOut.concat(s[i])
        }
    }

    return strOut
};