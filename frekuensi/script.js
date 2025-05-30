function hitungFrekuensi() {
  const input = document.getElementById('nilaiInput').value;
  const nilaiArray = input.split(',').map(item => {
    return parseFloat(item.trim());
  }).filter(item => !isNaN(item));
  const frekuensi = nilaiArray.reduce((acc, nilai) => {
    acc[nilai] = (acc[nilai] || 0) + 1;
    return acc;
  }, {});
  const nilaiUnik = Object.keys(frekuensi).map(Number).sort((a, b) => a - b);
  const tabelBody = document.getElementById('tabelBody');
  tabelBody.innerHTML = '';
  nilaiUnik.forEach(nilai => {
    const baris = document.createElement('tr');
    baris.innerHTML = `
    <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${nilai}</td>
    <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">${frekuensi[nilai]}</td>`;
    tabelBody.appendChild(baris);
  });
}
window.onload = hitungFrekuensi;