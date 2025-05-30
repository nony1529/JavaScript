const kali1 = document.getElementById('angka1');
const kali2 = document.getElementById('angka2');
const hasil = document.getElementById('hasil');
const hasil2 = document.getElementById('hasil2');

const hitungKali = (kali1, kali2) => kali1 * kali2;

hasil.addEventListener('click', function (){
  hasil2.textContent=hitungKali(kali1.value, kali2.value);
})