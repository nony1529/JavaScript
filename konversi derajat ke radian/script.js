function konversi() {
  const derajatInput = document.getElementById("derajat");
  const hasilDiv = document.getElementById("hasil");
  
  const derajat = parseFloat(derajatInput.value);
  
  if (isNaN(derajat)) {
    hasilDiv.innerHTML = "Masukkan nilai derajat yang sesuai";
    return;
  }
  
  const radian = (Math.PI / 180) * derajat;
  
  hasilDiv.innerHTML = `${derajat} derajat = ${radian.toFixed(6)} radian`;
  
  hasilDiv.innerHTML += `<br><small>Rumus: (π / 180) * ${derajat} = ${radian.toFixed(6)}</small>`;
  }