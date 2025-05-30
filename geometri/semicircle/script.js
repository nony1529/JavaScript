const jarijari = document.getElementById("fr-jarijari");
const btnHitung = document.querySelector("#btn-hitung");
const setling = document.querySelector("#txt-setling");
const keliling = document.querySelector("#txt-keliling");

const hitungsl = (jarijari) => Math.PI * jarijari * jarijari / 2;
const hitungkeliling = (jarijari) => Math.PI * jarijari + 2 * jarijari;


btnHitung.addEventListener('click', function () {
  setling.textContent = hitungsl(jarijari.value).toFixed(2);
  keliling.textContent = hitungkeliling (jarijari.value).toFixed(2)
})