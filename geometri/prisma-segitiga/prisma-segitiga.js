const alas = document.getElementById("fr-alas")
const tinggi = document.getElementById("fr-tinggi")
const btnHitung = document.querySelector("#btn-hitung")
const LP = document.querySelector("#txt-luaspermukaan")
const Volume = document.querySelector("#txt-volume")

const hitungLp = (alas,tinggi) => 1/2 *(alas * tinggi)
const hitungVolume = (alas,tinggi) => 1/2 * (alas * tinggi) * tinggi

btnHitung.addEventListener('click', function () {
  LP.textContent = hitungLp (alas.value, tinggi.value).toFixed(2)
  Volume.textContent = hitungVolume (alas.value, tinggi.value).toFixed(2)
})