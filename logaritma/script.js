function hitungLog() {
  const a = parseFloat(document.getElementById('a').value);
  const b = parseFloat(document.getElementById('b').value);
  
  if (isNaN(a) || isNaN(b)) {
    document.getElementById('hasil').innerHTML = "isi dengan benar";
    return;
  }
  if (a <= 0) {
    document.getElementById('hasil').innerHTML = "Bilangan (a) harus positif";
    return;
  }
  if (b <= 0 || b === 1) {
    document.getElementById('hasil').innerHTML = "Basis (b) harus berbeda dan positif";
    return;
  }
  const hasil = Math.log(a) / Math.log(b);
  
  document.getElementById('hasil').innerHTML = 
  `log<sub>${b}</sub>(${a}) = ${hasil.toFixed(1)}`;
}