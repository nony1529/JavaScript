const jarijari = document.getElementById('fr-jarijari')
const btnHitung = document.getElementById('btnHitung')
const luas = document.querySelector('#txt-luas')
const keliling = document.querySelector('#txt-keliling')


const hitungLuas = (jarijari) => Math.PI * jarijari * jarijari
const hitungKeliling = (jarijari) => 2 * Math.PI * jarijari

btnHitung.addEventListener ('click', function () {
  luas.textContent = hitungLuas (jarijari.value).toFixed(2)
  keliling.textContent = hitungKeliling (jarijari.value).toFixed(2)
})