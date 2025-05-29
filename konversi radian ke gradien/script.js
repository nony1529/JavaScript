function konversi() {
  const radianInput = document.getElementById("radian");
  const hasilDiv = document.getElementById("hasil");
  
  const radian = parseFloat(radianInput.value);
  
  if (isNaN(radian)) {
    hasilDiv.innerHTML = "Masukkan nilai radian yang benar";
    return;
  }
  
  let gradien = Math.tan(radian);
  
  const derajat = radian * (180 / Math.PI);
  
  hasilDiv.innerHTML = `${radian.toFixed(4)} radian = ${gradien.toFixed(6)} gradien`;
  
  hasilDiv.innerHTML += `<br><small>Rumus: tan(${radian.toFixed(4)}) = ${gradien.toFixed(6)}</small>`;
  hasilDiv.innerHTML += `<br><small>Ekivalen dengan ${derajat.toFixed(2)} derajat</small>`;
  
  let interpretasi = "";
  if (gradien === 0) {
    interpretasi = "Bidang datar";
  } 
  else if (Math.abs(gradien) > 1000000) {
    interpretasi = "Bidang vertikal";
  } 
  else if (Math.abs(gradien) < 0.01) {
    interpretasi = "Kemiringan sangat kecil";
  } 
  else if (gradien > 0) {
    interpretasi = `Kemiringan ke atas ${(gradien * 100).toFixed(1)}%`;
  } 
  else {
    interpretasi = `Kemiringan ke bawah ${(-gradien * 100).toFixed(1)}%`;
  }
  
  hasilDiv.innerHTML += `<br><div style="margin-top: 10px; font-weight: normal;">Interpretasi: ${interpretasi}</div>`;
  }