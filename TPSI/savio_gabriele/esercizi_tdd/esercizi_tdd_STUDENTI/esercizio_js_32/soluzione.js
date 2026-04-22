export const special_concat = (str1, str2) => {
   let strOut = ""

   for (let i = 0; i < str1.length; i++) {
      strOut = strOut.concat(str1[i], str2[i])
   }

   return strOut
};
