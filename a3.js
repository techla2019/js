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
document.getElementById("c39").onclick =()=>{
    count+3
    document.getElementById("c1").innerHTML=count;
}


let user

document.getElementById("c7").onclick =function(){
    user=document.getElementById("c5").value;
    console.log(user);
    count++
    document.getElementById("c1").innerHTML=count;

    document.getElementById("c6").innerHTML= "Well done " +user +" you are now in the right place, make your orders please,"
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
    document.getElementById("c11").innerHTML =c;
}
document.getElementById("c19").onclick = ()=>{
            dig9 = "ONE "
            document.getElementById("c18").innerHTML= dig9
            
        }
        
        document.getElementById("c20").onclick = ()=>{
            dig10 = "TWO"
            document.getElementById("c21").innerHTML= dig10
            
        }
        
        document.getElementById("c22").onclick = ()=>{
            dig11 = "THREE"
            document.getElementById("c23").innerHTML= dig11
            
        }
        
        document.getElementById("c24").onclick = ()=>{
            dig12 = "FOUR"
            document.getElementById("c25").innerHTML= dig12
            
        }
        
        document.getElementById("c26").onclick = ()=>{
            dig13 = "FIVE"
            document.getElementById("c27").innerHTML= dig13
            
        }
        
        document.getElementById("c28").onclick = ()=>{
            dig14 = "SIX"
            document.getElementById("c29").innerHTML= dig14
            
        }
        
        document.getElementById("c30").onclick = ()=>{
            dig15 = "SEVEN"
            document.getElementById("c31").innerHTML= dig15
            
        }
        
        document.getElementById("c32").onclick = ()=>{
            dig16 = "EIGHT"
            document.getElementById("c33").innerHTML= dig16
            
        }
        
        document.getElementById("c34").onclick = ()=>{
            dig17 = "NINE"
            document.getElementById("c35").innerHTML= dig17
            
        }
        
        document.getElementById("c36").onclick = ()=>{
            dig18 = "TEN"
            document.getElementById("c37").innerHTML= dig18
            
        }
       
            document.getElementById("c38").onclick = ()=>{
               di=" "
               document.getElementById("c21").innerHTML =di
               document.getElementById("c18").innerHTML =di
               document.getElementById("c23").innerHTML =di
               document.getElementById("c25").innerHTML =di
               document.getElementById("c27").innerHTML =di
               document.getElementById("c29").innerHTML =di
               document.getElementById("c31").innerHTML =di
               document.getElementById("c33").innerHTML =di
               document.getElementById("c35").innerHTML =di
               document.getElementById("c37").innerHTML =di
                
            
            }
