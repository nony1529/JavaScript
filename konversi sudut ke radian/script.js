function konversiKeRadian() {
  const derajat = parseFloat(document.getElementById('derajat').value);
  
  if (isNaN(derajat)) {
    document.getElementById('hasil');
    return;
  }
  const radian = derajat * (Math.PI / 180);
  document.getElementById('hasil').textContent = radian.toFixed(2);
}