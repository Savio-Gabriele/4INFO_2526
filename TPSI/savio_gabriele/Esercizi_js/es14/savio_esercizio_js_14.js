function differenzaOrari(t1, t2) {
    let ms1 = (t1.h * 3600 + t1.m * 60 + t1.s) * 1000;
    let ms2 = (t2.h * 3600 + t2.m * 60 + t2.s) * 1000;
  
    let diffMs = Math.abs(ms2 - ms1);
  
    return {
      millisecondi: diffMs,
      secondi: diffMs / 1000,
      minuti: diffMs / 60000,
      ore: diffMs / 3600000
    };
  }
  
  let orario1 = { h: 10, m: 30, s: 15 };
  let orario2 = { h: 12, m: 45, s: 20 };
  
  let orario3 = { h: 8, m: 0, s: 0 };
  let orario4 = { h: 9, m: 15, s: 30 };
  
  console.log(differenzaOrari(orario1, orario2));
  console.log(differenzaOrari(orario3, orario4));
  