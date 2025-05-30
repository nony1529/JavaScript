function hitungMedian() {
  const input = document.getElementById('numbers').value;
  const angka = input.split(' ')
  .filter(item => item.trim() !== '')
  .map(Number)
  .filter(num => !isNaN(num))
  .sort((a, b) => a - b);
  
  if (angka.length === 0) {
    document.getElementById('hasil').textContent = 'Masukan Angka Dengan Spasi Dan Benar';
    return;
  }
  
  const tengah = Math.floor(angka.length / 2);
  const median = angka.length % 2 === 1? angka[tengah]
  : (angka[tengah - 1] + angka[tengah]) / 2;
  
  document.getElementById('hasil').textContent = `Median: ${median}`;
}