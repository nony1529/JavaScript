function hitungVokal() {
  var kalimat = document.getElementById('kalimat').value;

  var vokal={
    a:0,
    i:0,
    u:0,
    e:0,
    o:0
  }
  for(var i=0;i<kalimat.length;i++){
    if(kalimat[i]==='a'){
      vokal.a++;
    }
    if(kalimat[i]==='i'){
      vokal.i++;
    }
    if(kalimat[i]==='u'){
      vokal.u++;
    }
    if(kalimat[i]==='e'){
      vokal.e++;
    }
    if(kalimat[i]==='o'){
      vokal.o++;
    }
    var total=vokal.a + vokal.i + vokal.u + vokal.e + vokal.o;
  }
  alert("kalimat"+ kalimat +"\nvokal a: " + vokal.a +"\nvokal i: " + vokal.i +"\nvokal u: " + vokal.u +"\nvokal e: " + vokal.e +"\nvokal o: " + vokal.o)
}