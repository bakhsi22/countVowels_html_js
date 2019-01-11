


function mergearr()
{
var res = [] ; 
var array1 = ["i" , "am" , "happy","wealthy","healthy"]; //i
var array2 = ["healthy","am","now"]; //j
var arr=array2.concat(array1);
var len =arr.length;
var assoc ={};
while( len = len-1){
    var item = arr[len];
    if(!assoc[item]){
        res.unshift(item);
        assoc[item]=true;
    }
}

// console.log(my(array1,array2));
res=res.join(" ");
document.getElementById("p").innerHTML = res;
// document.getElementById("q").innerHTML = arr;
// alert(res);
}
