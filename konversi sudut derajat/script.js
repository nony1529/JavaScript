function hitungTrigono() {
  const inputDerajat = document.getElementById('inputDerajat');
  const derajat = parseFloat(inputDerajat.value);
  
  if (isNaN(derajat)) {
    alert('Masukkan angka yang benar');
    return;
  }
  
  const rad = (Math.PI / 180) * derajat;
  
  const sin = Math.sin(rad);
  const cos = Math.cos(rad);
  const tan = Math.tan(rad);
  
  const formatHasil = (nilai) => nilai.toFixed(3);
  
  document.getElementById('sinus').textContent = `${derajat} = ${formatHasil(sin)}`;
  document.getElementById('cosinus').textContent = `${derajat} = ${formatHasil(cos)}`;
  document.getElementById('tangen').textContent = `${derajat} = ${formatHasil(tan)}`;
}