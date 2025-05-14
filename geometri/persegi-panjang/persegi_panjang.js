const panjang = document.getElementById('fr-panjang')
const lebar = document.getElementById('fr-lebar')
const btnHitung = document.getElementById('btnHitung')
const luas = document.getElementById('txt_luas')
const keliling = document.getElementById('txt_keliling')

const hitungLuas = (p, l) => p * l 
const hitungKeliling = (p, l) => 2 * (p + l)

btnHitung.addEventListener("click", function () {
  luas.textContent = hitungLuas (panjang.value, lebar.value).toFixed(2)
  keliling.textContent = hitungKeliling (panjang.value, lebar.value).toFixed(2)
})