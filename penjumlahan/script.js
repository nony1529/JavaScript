function hitungPenjumlahan() {
  document.getElementById('error').textContent = '';
  const angka1Str = document.getElementById('angka1').value;
  const angka2Str = document.getElementById('angka2').value;

  if (angka1Str === '' || angka2Str === '') {
    document.getElementById('error').textContent = 'Isi kedua angka';
    return;
  }
  const angka1 = parseFloat(angka1Str);
  const angka2 = parseFloat(angka2Str);
  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById('error').textContent = 'Isi dengan angka';
    return;
  }
  const hasil = angka1 + angka2;
  document.getElementById('hasil').textContent = `Hasil Nya Adalah = ${hasil}`;
}