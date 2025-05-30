function konversiSudut() {
  const derajatDesimal = parseFloat(document.getElementById('sudutInput').value);
  
  if (isNaN(derajatDesimal)) {
    document.getElementById('hasilKonversi');
    return;
  }
  
  const derajat = Math.floor(derajatDesimal);
  const sisaMenit = (derajatDesimal - derajat) * 60;
  const menit = Math.floor(sisaMenit);
  const detik = Math.round((sisaMenit - menit) * 60);
  
  const hasil = `${derajat}° ${menit}' ${detik}"`;
  
  document.getElementById('hasilKonversi').textContent = hasil;
}