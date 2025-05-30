function hitungJangkauan() {
  const inputData = document.getElementById('dataInput').value;
  
  const angka = inputData.split(' ')
  .filter(item => item.trim() !== '')
  .map(Number)
  .filter(num => !isNaN(num))
  .sort((a, b) => a - b);
  
  const cek = 
  angka.length === 0
  angka.length < 2;
  
  const min = cek ? "" : Math.min(...angka);
  const max = cek ? "" : Math.max(...angka);
  const range = cek ? "" : (max - min);
  
  document.getElementById('minValue').textContent = cek || min;
  document.getElementById('maxValue').textContent = cek ? "" : max;
  document.getElementById('rangeValue').textContent = cek ? "" : range;
}