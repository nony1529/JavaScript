const sisi = document.getElementById('fr-sisi');
const tinggi = document.getElementById('fr-tinggi');
const luasSisi = document.getElementById('fr-luassisi');
const btnHitung = document.querySelector('#btn-hitung');
const LP = document.querySelector('#txt-LP');
const volume = document.querySelector('#txt-volume');

const hitungLP = (sisi,luasSisi) => (1,72 * sisi * sisi) + (5 * luasSisi);
const hitungvolume = (sisi,tinggi) => 1/3 * (1,72 * sisi * sisi) * tinggi;

btnHitung.addEventListener('click', function (){
  LP.textContent = hitungLP (sisi.value, luasSisi.value).toFixed(2)
  volume.textContent = hitungvolume (sisi.value, tinggi.value).toFixed(2)
})