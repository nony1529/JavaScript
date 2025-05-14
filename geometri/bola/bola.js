const jarijari = document.getElementById('fr-jarijari')
const btnHitung = document.querySelector ("#btn-hitung")
const luaspermukaan = document.querySelector ("#txt-LuasPermukaan")
const volume = document.querySelector ("#txt-volume")

const hitungLp = (jarijari) => 4 * Math.PI * jarijari * jarijari
const hitungVolume = (jarijari) => 3/4 * Math.PI * jarijari * jarijari * jarijari

btnHitung.addEventListener ('click', function () {
  luaspermukaan.textContent = hitungLp (jarijari.value).toFixed(2)
  volume.textContent = hitungVolume(jarijari.value).toFixed(2)
})