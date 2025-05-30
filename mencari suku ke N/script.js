function hitung() {
  const jenis = document.getElementById('jenis').value;
  const a = parseFloat(document.getElementById('a').value);
  const b = parseFloat(document.getElementById('b').value);
  const n = parseFloat(document.getElementById('n').value);
  
  if (isNaN(a) || isNaN(b) || isNaN(n) || n < 1) {
    document.getElementById('hasil');
    return;
  }
  
  let hasil;
  if (jenis === "aritmatika") {
    hasil = a + (n - 1) * b;
    document.getElementById('hasil').innerHTML = `Suku ke-${n} = ${a} + (${n}-1) x ${b} = ${hasil}`;
  } 
  else {
    hasil = a * Math.pow(b, n-1);
    document.getElementById('hasil').innerHTML = `Suku ke-${n} = ${a} x ${b}<sup>${n-1}</sup> = ${hasil}`;
  }
}
document.getElementById('jenis').addEventListener('change', function() {
  const label = this.value === "aritmatika" ? "Beda (b):" : "Rasio (r):";
  document.getElementById('bedaLabel').textContent = label;
  document.getElementById('hasil').innerHTML = "Suku ke-n = ?";
});