function hitungKonversi() {
  const inputHari = document.getElementById('inputHari');
  const hariAwal = parseInt(inputHari.value);

  if (isNaN(hariAwal) || hariAwal < 0) {
    alert('Masukkan angka positif yang valid!');
    return;
  }

  const tahun = Math.floor(hariAwal / 365);
  const bulan = Math.floor((hariAwal - (tahun * 365)) / 30);
  const hari = hariAwal - (tahun * 365) - (bulan * 30);

  document.getElementById('tahun').textContent = tahun;
  document.getElementById('bulan').textContent = bulan;
  document.getElementById('hari').textContent = hari;
}