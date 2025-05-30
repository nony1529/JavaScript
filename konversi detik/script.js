function hitungKonversi() {
  const inputDetik = document.getElementById('inputDetik');
  const nilai = parseInt(inputDetik.value);
  
  if (isNaN(nilai) || nilai < 0) {
    alert('Masukkan angka positif dengan benar');
    return;
  }
  
  const satuan = 60;
  let detik = nilai;
  const hari = Math.floor(detik / (satuan * satuan * 24));
  detik = detik - (satuan * satuan * 24) * hari;
  const jam = Math.floor(detik / (satuan * satuan));
  detik = detik - (satuan * satuan) * jam;
  const menit = Math.floor(detik / satuan);
  
  detik = detik - (satuan * menit);
  
  document.getElementById('hari').textContent = hari;
  document.getElementById('jam').textContent = jam;
  document.getElementById('menit').textContent = menit;
  document.getElementById('detik').textContent = detik;
}