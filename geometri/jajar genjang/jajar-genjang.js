const panjang = document.getElementById("fr-panjang")
const sisi = document.getElementById("fr-sisi");
const alas = document.getElementById("fr-alas");
const tinggi = document.getElementById("fr-tinggi");
const btnHitung = document.querySelector("#btn-hitung");
const luas = document.querySelector("#txt-luas");
const keliling = document.querySelector("#txt-keliling");

const hitungLuas = (alas,tinggi) => alas * tinggi
const hitungKeliling = (panjang, sisi) => panjang * sisi 

btnHitung.addEventListener('click', function () {
  luas.textContent = hitungLuas(alas.value,tinggi.value);
  keliling.textContent = hitungKeliling (panjang.value,sisi.value)
})