function hitungFPB() {
  const input1 = document.getElementById('angka1').value;
  const input2 = document.getElementById('angka2').value;
  
  const angka1 = parseInt(input1);
  const angka2 = parseInt(input2);
  
  if (isNaN(angka1) || isNaN(angka2)) {
    document.getElementById('hasil').textContent = 'Masukkan angka dengan benar';
    return;
  }
  
  let a = Math.abs(angka1);
  let b = Math.abs(angka2);
  
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  
  const hasilDiv = document.getElementById('hasil');
  hasilDiv.innerHTML = `FPB dari ${angka1} dan ${angka2} adalah = ${a}`;}
  
  document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      hitungFPB();}
    });