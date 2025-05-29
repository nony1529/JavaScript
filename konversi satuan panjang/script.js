function hitungKonversi() {
  const inputMeter = document.getElementById('inputMeter');
  const meter = parseFloat(inputMeter.value);
  
  if (isNaN(meter)) {
    alert('Masukkan angka yang valid!');
    return;
  }
  
  const inci = meter * 39.3701;
  const kaki = meter * 3.28084;
  const yard = meter * 1.09361;
  
  document.getElementById('hasilInci').textContent = inci.toFixed(4);
  document.getElementById('hasilKaki').textContent = kaki.toFixed(4);
  document.getElementById('hasilYard').textContent = yard.toFixed(4);
}