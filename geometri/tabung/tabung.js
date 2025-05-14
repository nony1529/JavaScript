const jarijari = document.getElementById("fr-jarijari");
const tinggi = document.getElementById("fr-tinggi");
const btnHitung = document.querySelector("#btn-hitung");
const LuasPermukaan = document.querySelector("#txt-LuasPermukaan");
const Volume = document.querySelector("#txt-Volume");

const hitungLP = (jarijari,tinggi) => 2 * Math.PI * jarijari * (jarijari+tinggi);
const hitungvolume = (jarijari,tinggi) => Math.PI * jarijari * jarijari * tinggi;


btnHitung.addEventListener('click', function () {
  LuasPermukaan.textContent = hitungLP(jarijari.value,tinggi.value).toFixed(2)
  Volume.textContent = hitungvolume (jarijari.value,tinggi.value).toFixed(2)
})