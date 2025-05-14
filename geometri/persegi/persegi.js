const sisi = document.getElementById('fr-sisi')
const btnHitung = document.getElementById('btn-hitung');
const luas = document.querySelector('#txt-luas');
const keliling = document.querySelector('#txt-keliling');


const hitungLuas = (s) => s * s
const hitungKeliling = (s) => 4 * s

btnHitung.addEventListener('click', function () {
  luas.textContent = hitungLuas (sisi.value)
  keliling.textContent = hitungKeliling(sisi.value)
} )