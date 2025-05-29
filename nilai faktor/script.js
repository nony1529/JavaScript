function cariFaktor(angka) {
  const faktor = [];
  for (let i = 1; i <= angka; i++) {
    if (angka % i === 0) {
      faktor.push(i);
    }
  }
  return faktor;
}

function hitungFaktor() {
  const inputBilangan = document.getElementById('inputBilangan');
  const angka = parseInt(inputBilangan.value);
  
  if (isNaN(angka) || angka < 1) {
    alert('Masukkan bilangan bulat positif lebih besar dari 0');
    return;
  }
  const faktor = cariFaktor(angka);
  const hasilElement = document.getElementById('hasil');
  hasilElement.textContent = `Faktor - Faktor Dari ${angka} Adalah = [${faktor.join(', ')}]`;
}