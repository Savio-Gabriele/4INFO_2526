export const tronca = (str, l) => {
    if (str.length <= l) {
        return str
    }
    return str.slice(0, l) + "..."
}
