let count = 0;
let somma = 0;

function add() {
  let dipartment = document.getElementById("dipartimento").value;
  let cognome = document.getElementById("cognome").value;
  let nome = document.getElementById("nome").value;
  let mese = document.getElementById("mese").value;
  let importo = document.getElementById("importo").value;

  if (!dipartment || !cognome || !nome || !mese || !importo) {
    alert("Compila tutti i campi.");
    return;
  }

  let table = document.getElementById("paghe");
  let tr = document.createElement("tr");

  let tdDip = document.createElement("td");
  tdDip.innerText = dipartment;
  tr.append(tdDip);

  let tdCog = document.createElement("td");
  tdCog.innerText = cognome;
  tr.append(tdCog);

  let tdNom = document.createElement("td");
  tdNom.innerText = nome;
  tr.append(tdNom);

  let tdMes = document.createElement("td");
  tdMes.innerText = mese;
  tr.append(tdMes);

  let tdImp = document.createElement("td");
  tdImp.className = "importo";
  tdImp.innerText = importo + " €";
  tr.append(tdImp);

  table.append(tr);

  document.getElementById("dipartimento").value = "";
  document.getElementById("cognome").value = "";
  document.getElementById("nome").value = "";
  document.getElementById("mese").value = "";
  document.getElementById("importo").value = "";

  count++;
  somma += Number(importo);
}

function creaRiga() {
  let table2 = document.getElementById("sum_media");
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  td.colSpan = 6;
  let hr = document.createElement("hr");
  td.append(hr);
  tr.append(td);
  table2.append(tr);
}

function sum() {
  let table2 = document.getElementById("sum_media");
  table2.innerHTML = ""; // sempre pulisci prima

  if (count < 2) {
    alert("Non ci sono abbastanza elementi, inseriscine almeno 2");
    return;
  }

  creaRiga();

  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.colSpan = 5;
  td1.innerText = "TOTALE";
  tr.append(td1);

  let td2 = document.createElement("td");
  td2.className = "importo";
  td2.innerText = somma + " €";
  tr.append(td2);

  table2.append(tr);
  creaRiga();
}

function media() {
  let table2 = document.getElementById("sum_media");
  table2.innerHTML = ""; // sempre pulisci prima

  if (count < 2) {
    alert("Non ci sono abbastanza elementi, inseriscine almeno 2");
    return;
  }

  creaRiga();

  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.colSpan = 5;
  td1.innerText = "MEDIA";
  tr.append(td1);

  let td2 = document.createElement("td");
  td2.className = "importo";
  let media = somma / count;
  td2.innerText = media + " €";
  tr.append(td2);

  table2.append(tr);
  creaRiga();
}
