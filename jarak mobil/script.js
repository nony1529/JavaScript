function hitung_jarak(v, t) {
  return v * t;
}

  function hitungJarak() {
  const kecepatanInput = document.getElementById("kecepatan");
  const waktuInput = document.getElementById("waktu");
  const kecepatan = parseFloat(kecepatanInput.value);
  const waktu = parseFloat(waktuInput.value);
  const hasilDiv = document.getElementById("hasil");
  
  if (isNaN(kecepatan) || isNaN(waktu)) {
    hasilDiv.innerHTML = "isi dengan nilai yang benar";
    hasilDiv.style.color = "red";
    return;
  }
  
  if (kecepatan < 0 || waktu < 0) {
    hasilDiv.innerHTML = "Masukan Nilai Yang Positif";
    hasilDiv.style.color = "red";
    return;
  }

  const jarak = hitung_jarak(kecepatan, waktu);

  hasilDiv.innerHTML = "Jarak Yang Ditempuh Adalah = " + jarak.toFixed(2) + " km";
  hasilDiv.style;
  }