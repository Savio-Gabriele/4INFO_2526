export const avg_age = (l) => {
  let somma = l.reduce((acc, studente) => acc + studente.eta, 0);
  return somma / l.length;
};
