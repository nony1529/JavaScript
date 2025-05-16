const diagonal1 = document.getElementById('fr-diagonal1');
const diagonal2 = document.getElementById('fr-diagonal2');
const sisi = document.getElementById('fr-sisi');
const btnHitung = document.querySelector('#btn-hitung');
const luas = document.querySelector('#txt-luas');
const keliling = document.querySelector('#txt-keliling');

const hitungLuas = (diagonal1, diagonal2) => 1/2 * diagonal1 * diagonal2;
const hitungKeliling = (sisi) => 4 * sisi;

btnHitung.addEventListener('click', function (){
  luas.textContent = hitungLuas (diagonal1.value, diagonal2.value).toFixed(2)
  keliling.textContent = hitungKeliling(sisi.value).toFixed(2)
})