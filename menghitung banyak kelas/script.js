function hitungBanyakKelas() {
  const n = parseFloat(document.getElementById('jumlahData').value);
  const hitung =isNaN(n);n <= 0;
  const k = hitung ? "" : Math.ceil(1 + 3.322 * Math.log10(n));
  
  document.getElementById('banyakKelas').textContent = hitung || k;
}