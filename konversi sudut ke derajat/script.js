function konversiKeDerajat() {
  const deg = parseFloat(document.getElementById('derajat').value);
  const min = parseFloat(document.getElementById('menit').value);
  const sec = parseFloat(document.getElementById('detik').value);
  
  const hitung = 
  isNaN(deg) || isNaN(min) || isNaN(sec);
  min < 0 == min >= 60;
  sec < 0 == sec >= 60;"";
  
  const desimal = hitung ? "" : deg + min/60 + sec/3600;
  
  document.getElementById('hasil').textContent = hitung || desimal.toFixed(2);
}