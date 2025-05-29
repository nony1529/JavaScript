function hitungPangkat() {
  const basis = parseInt(document.getElementById('basis').value);
  const pangkat = parseInt(document.getElementById('pangkat').value);
  
  if (isNaN(basis) || isNaN(pangkat)) {
    alert('Mohon masukkan bilangan dengan sesuai');
    return;
  }
  
  const hasil = Math.pow(basis, pangkat);
  
  const hasilDiv = document.getElementById('hasil');
  hasilDiv.innerHTML = `
    <div>Hasilnya Adalah = ${hasil}</div>
    <div>${basis}<sup>${pangkat}</sup> = ${hasil}</div>`;
  }