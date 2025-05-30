function hitungRasio() {
  const a = parseFloat(document.getElementById('a').value);
  const un = parseFloat(document.getElementById('un').value);
  const n = parseFloat(document.getElementById('n').value);
  
  if (isNaN(a) || isNaN(un) || isNaN(n)) {
    document.getElementById('hasil').innerHTML = "Masukkan semua nilai";
    return;
  }
  if (a === 0) {
    document.getElementById('hasil').innerHTML = "Suku pertama (a) tidak boleh nol";
    return;
  }
  if (n <= 1) {
    document.getElementById('hasil').innerHTML = "Posisi suku (n) harus lebih besar dari 1";
    return;
  }
  const rasio = Math.pow(un / a, 1/(n-1));
  document.getElementById('hasil').innerHTML =`Rasio (r) = (${un} / ${a})<sup>1/(${n}-1)</sup> = (${un/a})<sup>1/${n-1}</sup> = ${rasio.toFixed(2)}`;
}