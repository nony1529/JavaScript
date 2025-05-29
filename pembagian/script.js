function bagi() {
  const dividend = document.getElementById('dividend').value;
  const divisor = document.getElementById('divisor').value;
  document.getElementById('error').innerText = '';
  document.getElementById('hasil').innerText = '';
  
  if(dividend === '' || divisor === '') {
    document.getElementById('error').innerText = 'Kedua angka harus diisi';
    return;
  }
  const num1 = parseFloat(dividend);
  const num2 = parseFloat(divisor);
  if(num2 === 0) {
    document.getElementById('error').innerText = 'Tidak bisa dibagi dengan nol!';
    return;
  }
  const hasil = num1 / num2;
  document.getElementById('hasil').innerText = `Hasil: ${num1} ÷ ${num2} = ${hasil}`;
}