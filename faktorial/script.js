function hitungFaktorial() {
  const inputNilai = document.getElementById('nilai').value;
  const nilai = parseInt(inputNilai);
  
  if (isNaN(nilai) || nilai < 0) {
    alert('Masukkan bilangan bulat');
    return;
  }
  let faktorial = 1;
  for (let y = 1; y <= nilai; y++) {
    faktorial *= y;
  }
  
  const hasilDiv = document.getElementById('hasil');
  hasilDiv.textContent = `Faktorial Nya Adalah = ${faktorial}`;
}