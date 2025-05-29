function isPrima(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
  }
  return true;
}

function cekPrima() {
  const inputBilangan = document.getElementById('inputBilangan');
  const angka = parseInt(inputBilangan.value);
  
  if (isNaN(angka) || angka < 0) {
    alert('Masukkan bilangan bulat positif');
    return;
  }
  const isPrime = isPrima(angka);
  const hasilElement = document.getElementById('hasil');
  if (isPrime) {
    hasilElement.textContent = angka + " Adalah Bilangan Prima";
  } else {
    hasilElement.textContent = angka + " Bukan Bilangan Prima";
  }
}