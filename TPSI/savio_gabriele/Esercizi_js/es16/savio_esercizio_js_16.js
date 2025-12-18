function orarioMinore(t1, t2, t3) {
  let s1 = t1.h * 3600 + t1.m * 60 + t1.s;
  let s2 = t2.h * 3600 + t2.m * 60 + t2.s;
  let s3 = t3.h * 3600 + t3.m * 60 + t3.s;

  if (s1 <= s2 && s1 <= s3) return t1;
  if (s2 <= s1 && s2 <= s3) return t2;
  return t3;
}

let o1 = { h: 10, m: 30, s: 20 };
let o2 = { h: 9, m: 45, s: 50 };
let o3 = { h: 11, m: 0, s: 0 };

let o4 = { h: 6, m: 15, s: 10 };
let o5 = { h: 6, m: 15, s: 5 };
let o6 = { h: 7, m: 0, s: 0 };

console.log(orarioMinore(o1, o2, o3));
console.log(orarioMinore(o4, o5, o6));
