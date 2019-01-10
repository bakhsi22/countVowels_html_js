merge = function(a) {
    //var a=document.getElementById("t");
    console.log(a); //to see input string on console
    n = a.length;
    console.log(n); //calculated length of string

{
        var str = t.value;
        var str2 = u.value; 
        
        // document.getElementById("demo").innerHTML = res;
        if( str.match(str2))
        {
            
            document.getElementById("p").innerHTML = str;
            
        }
        else{                    
            var space=" ";
            var c = (t.value).concat(space , u.value);
            document.getElementById("p").innerHTML = c;
        }
    }

    // var c = 0;
    // for (i = 0; i < n; i++) {
    //   if ((a[i] == "a") || (a[i] == "e") || (a[i] == "i") || (a[i] == "o") || (a[i] == "u")) {
    //     console.log(a[i]); //just to verify
    //     c += 1;
    //   }
    // }
  
   
  }