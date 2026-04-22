export const reverse = (l) => {
    let listOut = []

    for (let i = l.length - 1; i >= 0; i--) {
        listOut.push(l[i])
    }

    return listOut
}