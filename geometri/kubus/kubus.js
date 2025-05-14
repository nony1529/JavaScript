const jarijari = document.getElementById("fr-jarijari")
const sisi = document.getElementById("fr-sisi")
const btnHitung = document.querySelector("#btn-hitung")
const Luas = document.querySelector("#txt-Luas")
const keliling = document.querySelector("#txt-keliling")

const hitungLuas = (jarijari) => 6 * jarijari * jarijari
const hitungKeliling = (sisi) => 6 * sisi

btnHitung.addEventListener ('click', function () {
  Luas.textContent = hitungLuas (jarijari.value).toFixed(2)
  keliling.textContent = hitungKeliling (sisi.value).toFixed(2)
})