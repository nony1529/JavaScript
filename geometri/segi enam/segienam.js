const sisi = document.getElementById('fr-sisi');
const btnHitung = document.querySelector('#btn-hitung');
const luas = document.querySelector('#txt-luas');
const keliling = document.querySelector('#txt-keliling');

const hitungLuas = (sisi) => 3/2 * Math.sqrt(3) * sisi * sisi;
const hitungKeliling = (sisi) => 6 * sisi;

btnHitung.addEventListener('click', function(){
  luas.textContent = hitungLuas(sisi.value).toFixed(2)
  keliling.textContent = hitungKeliling(sisi.value).toFixed(2)
})