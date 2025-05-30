const faktor = {
  m: 1,
  cm: 100,
  mm: 1000,
  km: 0.001,
  in: 39.3701,
  ft: 3.28084
};
        
function konversi() {
  const panjang = parseFloat(document.getElementById('panjang').value);
  const dari = document.getElementById('dari').value;
  const ke = document.getElementById('ke').value;

  const meter = panjang / faktor[dari];
  const hasil = meter * faktor[ke];
  
  document.getElementById('hasil').textContent = 
  `${panjang} ${dari} = ${hasil.toFixed(2)} ${ke}`;}
  konversi();