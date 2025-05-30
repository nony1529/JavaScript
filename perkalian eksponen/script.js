function hitung() {
  const a = parseFloat(document.getElementById('a').value);
  const m = parseFloat(document.getElementById('m').value);
  const b = parseFloat(document.getElementById('b').value);
  const n = parseFloat(document.getElementById('n').value);
  
  if (isNaN(a) || isNaN(m) || isNaN(b) || isNaN(n)) {
    document.getElementById('hasil').innerHTML = "Isi angka dengan benar";
    return;
  }
  let hasil;
  let ekspresi;
  if (a === b) {
    const pangkat = m - n;
    hasil = Math.pow(a, pangkat);
    ekspresi = `${a}<sup>${m}</sup> * ${b}<sup>${n}</sup> = ${a}<sup>${pangkat}</sup> = ${hasil}`;
  } 
  else {
    hasil = Math.pow(a, m) * Math.pow(b, n);
    ekspresi = `${a}<sup>${m}</sup> * ${b}<sup>${n}</sup> = ${hasil.toFixed(1)}`;
  }
  
  document.getElementById('hasil').innerHTML = ekspresi;
}