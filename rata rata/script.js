function buatInput() {
  const jumlah = parseInt(document.getElementById('jumlah').value) || 0;
  const container = document.getElementById('input-container');
  container.innerHTML = '';
  
  for (let i = 1; i <= jumlah; i++) {
    const div = document.createElement('div');
    div.innerHTML = `
    <label>Nilai ${i}:</label>
    <input type="number" id="nilai${i}" min="0" style="margin:5px; padding:5px;" value="0">`;
    container.appendChild(div);
  }
}

function hitung() {
  const jumlah = parseInt(document.getElementById('jumlah').value) || 0;
  let total = 0;
  let hitungNilai = 0;
  
  for (let i = 1; i <= jumlah; i++) {
    const nilai = parseFloat(document.getElementById(`nilai${i}`).value) || 0;
    total += nilai;
    hitungNilai++;
  }
  const rata = hitungNilai > 0 ? total / hitungNilai : 0;
  document.getElementById('total').textContent = total;
  document.getElementById('rata').textContent = rata;}
  window.onload = buatInput;