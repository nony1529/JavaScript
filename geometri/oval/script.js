const semiMayor = document.getElementById("fr-semiMayor");
const semiMinor = document.getElementById("fr-semiMinor");
const btnHitung = document.querySelector("#btn-hitung");
const luas = document.querySelector("#txt-luas");
const keliling = document.querySelector("#txt-keliling");

const hitungLuas = (semiMayor,semiMinor) => Math.PI * semiMayor * semiMinor;
const hitungkeliling = (semiMayor,semiMinor) => Math.PI * 2 * (semiMayor + semiMinor);


btnHitung.addEventListener('click', function () {
  luas.textContent = hitungLuas(semiMayor.value, semiMinor.value).toFixed(2);
  keliling.textContent = hitungkeliling(semiMayor.value, semiMinor.value).toFixed(2);
})