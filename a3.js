let count = 0

document.getElementById("c2").onclick=()=>{
    --count
    document.getElementById("c1").innerHTML= count
}
document.getElementById("c3").onclick=()=>{
    count=0
    document.getElementById("c1").innerHTML = count;
}

document.getElementById("c4").onclick =()=>{
    count++
    document.getElementById("c1").innerHTML=count;
}

let user

document.getElementById("c7").onclick =function(){
    user=document.getElementById("c5").value;
    console.log(user);
    count++
    document.getElementById("c1").innerHTML=count;

    document.getElementById("c6").innerHTML= "goodmorning " +user +" welcome to our online shop"
}



let a;
let b;
let c;




document.getElementById("c8").onclick=()=>{
    a = Math.floor(Math.random() *10)
    b = Math.floor(Math.random() *10)
    c = Math.floor(Math.random() *10)

    console.log(a);
    console.log(b);
    console.log(c);

    document.getElementById("c9").innerHTML = a;
    document.getElementById("c10").innerHTML = b;
    document.getElementById("c11").innerHTML =a+b;
}
