function kurangkan() {
  const angka1Input = document.getElementById('angka1');
  const angka2Input = document.getElementById('angka2');
  const hasilElement = document.getElementById('hasil');
  const pesanError = document.getElementById('pesan-error');
  pesanError.textContent = '';
  
  const angka1Str = angka1Input.value;
  const angka2Str = angka2Input.value;
  
  if(angka1Str === '' || angka2Str === '') {
    pesanError.textContent = 'Masukan kedua angka';
    return;
  }
  const angka1 = parseFloat(angka1Str);
  const angka2 = parseFloat(angka2Str);
  if(isNaN(angka1) || isNaN(angka2)) {
    pesanError.textContent = 'Masukan angka';
    return;
  }
  const hasil = angka1 - angka2;
  hasilElement.textContent = `Hasil: ${angka1} - ${angka2} = ${hasil}`;
}