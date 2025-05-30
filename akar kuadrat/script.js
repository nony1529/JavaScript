function hitungAkar() {
  const angka = parseFloat(document.getElementById('angka').value);
  if (isNaN(angka)) {
    alert('Mohon masukkan angka dengan benar');
    return;
  }
  if (angka < 0) {
    alert('Angka tidak boleh negatif');
    return;
  }
  
  const akar = Math.sqrt(angka);
  
  const hasilDiv = document.getElementById('hasil');
  hasilDiv.innerHTML = `Akar Kuadrat Dari ${angka.toFixed(1)} adalah ${akar.toFixed(2)}`;
}