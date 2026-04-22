export const concatenateN = (s, n) => {
   let strOut = ""

   for (let i = 0; i < n; i++) {
      strOut = strOut.concat(s)
   }

   return strOut
};

