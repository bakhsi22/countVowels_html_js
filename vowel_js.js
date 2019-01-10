count = function(a) {
    //var a=document.getElementById("t");
    console.log(a); //to see input string on console
    n = a.length;
    console.log(n); //calculated length of string
    var c = 0;
    for (i = 0; i < n; i++) {
      if ((a[i] == "a") || (a[i] == "e") || (a[i] == "i") || (a[i] == "o") || (a[i] == "u")) {
        console.log(a[i]); //just to verify
        c += 1;
      }
    }
  
    document.getElementById("p").innerText = c;
  }