const panjang = document.getElementById('fr-panjang')
const lebar = document.getElementById('fr-lebar');
const tinggi = document.getElementById('fr-tinggi');
const btnHitung = document.getElementById('btn-hitung');
const luas = document.querySelector('#txt-luas');
const volume = document.querySelector('#txt-volume');


// fungsi konvensional
function hitungLuas(p, l, t) {
  return 2 * ((p * l) + (p * t) + (l * t))
}

//arrow function
const hitungVolume = (p, l, t) => p * l * t

//onclick hitung
btnHitung.addEventListener('click', function () {
  luas.textContent = hitungLuas(panjang.value, lebar.value, tinggi.value)
  volume.textContent = hitungVolume(panjang.value, lebar.value, tinggi.value);
})