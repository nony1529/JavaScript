function tentukanStatus() {
  const input = document.getElementById("inputAngka");
  const angka = parseFloat(input.value);
  
  const hasilDiv = document.getElementById("hasil");
  
  if (isNaN(angka)) {
    hasilDiv.innerHTML = "Masukkan angka yang sesuai";
    hasilDiv.style.color = "red";
    return;
  }
  
  let status;
  if (angka > 0) {
    status = "Status Angka = Positif";
    hasilDiv.style.color = "blue";
  } 
  else if (angka === 0) {
    status = "Angka Ini Bernilai = 0";
    hasilDiv.style.color = "green";
  } 
  else {
    status = "Status Angka = Negatif";
    hasilDiv.style.color = "red";
  }
  
  hasilDiv.innerHTML = status;
  }