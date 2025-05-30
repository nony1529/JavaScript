function hitungTepi() {
  const batasBawah = parseFloat(document.getElementById('batasBawah').value);
  const batasAtas = parseFloat(document.getElementById('batasAtas').value);
  const d = parseFloat(document.getElementById('interval').value) || 1;
  
  const validBawah = isNaN(batasBawah);
  const validAtas = isNaN(batasAtas);
  const validUrutan = (batasBawah >= batasAtas);
  const tepiBawah = (batasBawah - 0.5 * d);
  const tepiAtas =(batasAtas + 0.5 * d);
  
  document.getElementById('tepiBawah').textContent = tepiBawah;
  document.getElementById('tepiAtas').textContent = tepiAtas;
}