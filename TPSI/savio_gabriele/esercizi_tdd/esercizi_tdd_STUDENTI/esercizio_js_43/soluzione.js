export const without = (l, n) => {
    let listOut = []

    for (let i = 0; i < l.length; i++) {
        if (l[i] != n) {
            listOut.push(l[i])
        }
    }

    return listOut
};