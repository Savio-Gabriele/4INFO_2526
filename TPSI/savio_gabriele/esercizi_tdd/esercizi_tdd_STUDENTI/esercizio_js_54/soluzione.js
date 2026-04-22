export const gen_arr = (len) => {
    let listOut = []

    for (let i = 0; i < len; i++) {
        listOut.push(Math.floor(Math.random() * 100))
    }

    return listOut
};