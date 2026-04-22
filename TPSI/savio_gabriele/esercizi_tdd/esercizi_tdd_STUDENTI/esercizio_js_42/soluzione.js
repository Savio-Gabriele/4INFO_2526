export const swap = (l, n, m) => {
    let temp = l[n]
    l[n] = l[m]
    l[m] = temp

    return l
};
