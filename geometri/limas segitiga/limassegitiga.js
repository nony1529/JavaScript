const alas = document.getElementById('fr-alas')
const tinggi = document.getElementById('fr-tinggi')
const sisiTegak = document.getElementById('fr-sisitegak')
const btnHitung = document.querySelector('#btn-hitung')
const LP = document.querySelector('#txt-LP')
const volume = document.querySelector('#txt-volume')

const hitungLP = (alas,tinggi) => 1/3 * (1/2 * alas * tinggi) * tinggi
const hitungvolume = (sisiTegak,alas,tinggi) => (1/2 * alas * tinggi) + (3 * sisiTegak)

btnHitung.addEventListener('click', function () {
  LP.textContent = hitungLP(alas.value, tinggi.value).toFixed(2)
  volume.textContent = hitungvolume(sisiTegak.value, alas.value, tinggi.value).toFixed(2)
})