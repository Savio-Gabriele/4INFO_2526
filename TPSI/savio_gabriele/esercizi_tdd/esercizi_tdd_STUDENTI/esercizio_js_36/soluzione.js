export const tronca_parola = (s, pos) => {
   if (s.length <= pos) {
      return s
   }

   let strOut = ""
   strOut = strOut.concat(s.slice(0, pos), "...")

   return strOut
};
