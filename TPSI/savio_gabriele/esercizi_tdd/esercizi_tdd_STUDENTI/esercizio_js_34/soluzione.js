export const insert = (str1, agg, pos) => {
    let strOut = ""

    for (let i = 0; i < str1.length; i++) {
        if (i == pos) {
            strOut = strOut.concat(agg)
        }
        strOut = strOut.concat(str1[i])
    }

    return strOut
};
