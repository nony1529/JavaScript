function hitungModus() {
  const input = document.getElementById('nilaiInput').value;
  
  const nilaiArray = input.split(',')
    .map(item => parseFloat(item.trim()))
    .filter(item => !isNaN(item));
    const frekuensi = {};
    nilaiArray.forEach(nilai => {
      frekuensi[nilai] = (frekuensi[nilai] || 0) + 1;
  });
  
  let modus = [];
  let maxFrekuensi = 0;
  
  for (const nilai in frekuensi) {
    if (frekuensi[nilai] > maxFrekuensi) {
      modus = [nilai];
      maxFrekuensi = frekuensi[nilai];
    } 
    else if (frekuensi[nilai] === maxFrekuensi) {
      modus.push(nilai);
    }
  }
  document.getElementById('modusResult').textContent = modus.join(', ');
  document.getElementById('frekuensiResult').textContent = maxFrekuensi;
}
window.onload = hitungModus;