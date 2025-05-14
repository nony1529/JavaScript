const jarijari = document.getElementById('fr-jarijari');
const tinggi = document.getElementById('fr-tinggi');
const sisi = document.getElementById('fr-sisi');
const btnHitung = document.querySelector ("#btn-hitung");
const LP = document.querySelector("#txt-LP");
const Volume = document.querySelector("#txt-volume");

const hitungLP = (jarijari,tinggi) => 1/3 * Math.PI * jarijari * jarijari * tinggi;
const hitungVolume = (jarijari, sisi) => Math.PI * jarijari * (jarijari + sisi);

btnHitung.addEventListener ('click', function () {
  LP.textContent = hitungLP (jarijari.value, tinggi.value).toFixed(2);
  Volume.textContent = hitungVolume (jarijari.value, sisi.value).toFixed(2);
})