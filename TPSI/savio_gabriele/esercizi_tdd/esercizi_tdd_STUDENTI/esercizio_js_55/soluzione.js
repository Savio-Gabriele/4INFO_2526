export const no_copies = (array) => {
   let listOut = []

   for (let i = 0; i < array.length; i++) {
      if (!listOut.includes(array[i])) {
         listOut.push(array[i])
      }
   }

   return listOut
}
