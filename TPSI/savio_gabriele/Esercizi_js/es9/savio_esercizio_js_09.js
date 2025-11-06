let username = prompt("Inserisci il tuo username:");

username === null && alert("Operazione annullata");
username !== null && (username === "Admin" || alert("I don't know you"));

username === "Admin" &&
  ((password = prompt("Inserisci la tua password")),
  password === null && alert("cancellato"),
  password !== null && password !== "Agnell1no" && alert("Password errata"),
  password === "Agnell1no" && alert("Benvenuto!"));
