export const shuffle = (l, m) => {
return l.slice(m+1).concat(l.slice(0,m));
};
