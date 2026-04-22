export const ordina = (l) => {
    let listOut = []

    for (let i = 0; i < l.length; i++) {
        listOut.push(l[i])
    }

    listOut.sort()

    return listOut
};
