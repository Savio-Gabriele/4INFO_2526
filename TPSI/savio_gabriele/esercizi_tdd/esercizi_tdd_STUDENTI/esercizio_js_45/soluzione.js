export const only_upper = (s) => {
    return s.sort((a, b) => b.title.compare(a.title));
};
