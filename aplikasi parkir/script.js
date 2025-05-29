function hasil() {
  var
jenis= document.getElementById('jenis').value;
  var
jam= document.getElementById('jam').value;
  if(jenis==="Mobil") {
    var hasil=jam*4000;
  }
  else if (jenis==="Motor") {
    var hasil=jam*2000;
  }

document.getElementById('total').innerHTML=hasil;
}