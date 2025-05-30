function hitung() {
  const bilangan = parseFloat(document.getElementById('bilangan').value);
  const pangkat = parseFloat(document.getElementById('pangkat').value) || 2;
  const hasilEl = document.getElementById('hasil');

  if (isNaN(bilangan)) {
    hasilEl.textContent = "Masukkan bilangan";
    return;
  }
  if (pangkat === 0) {
    hasilEl.textContent = "Pangkat tidak boleh nol";
    return;
  }
  if (bilangan < 0 && pangkat % 2 === 0) {
    hasilEl;
    return;
  }
  
  const hasil = Math.pow(Math.abs(bilangan), 1/pangkat);
  const hasilAkhir = bilangan < 0 ? -hasil : hasil;
  
  hasilEl.textContent = `Akar pangkat ${pangkat} dari ${bilangan} = ${hasilAkhir.toFixed(2)}`;
}