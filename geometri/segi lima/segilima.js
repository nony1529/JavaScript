const sisi = document.getElementById('fr-sisi');
const btnHitung = document.querySelector('#btn-hitung');
const luas = document.querySelector('#txt-luas');
const keliling = document.querySelector('#txt-keliling');

const hitungLuas = (sisi) => 1/4 * Math.sqrt(5) * (5 + 2 * Math.sqrt(5)) * sisi * sisi;
const hitungKeliling = (sisi) => 5 * sisi;

btnHitung.addEventListener('click', function (){
  luas.textContent = hitungLuas (sisi.value).toFixed(2)
  keliling.textContent = hitungKeliling(sisi.value).toFixed(2)
})