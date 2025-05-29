function total() {
  var
whatt=document.getElementById('whatt').value;
var jam = document.getElementById('jam').value;
var totalWhatt=whatt*jam;
var kwhperhari=totalWhatt/1000;
var kwhperbulan=kwhperhari*30;
var bayar=kwhperbulan*1467;
document.getElementById('hasil').innerHTML= bayar;
}