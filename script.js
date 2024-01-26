var clutter=""

//----------------------------------------------------------------------------------------------------------------------------
function encryption(){
    document.querySelector("#incrypt-btn").addEventListener("click",function(){
    
// taking input 
var input = document.getElementById("txtmsg").value
// console.log(input)
//taking password
var password=document.getElementById("password").value
// console.log(password)
// //spliting input
const str =input.split("")
// console.log(str)



str.forEach(element => {
    clutter +=`&#128${(element.charCodeAt())} `
});

document.querySelector("#enresult").style.display="block"

document.querySelector("#enresult").innerHTML=clutter
 
//storing data in #result div
document.querySelector("#result").innerHTML = clutter
var dataarr = [];
// console.log(dataarr)


if(JSON.parse(localStorage.getItem('data1'))){
    dataarr = JSON.parse(localStorage.getItem('data1'))
    dataarr.push({"pass":password,"input":input,"clutter":clutter})
}else{
    
    dataarr =[{"pass":password,"input":input,"clutter":clutter}]
}
localStorage.setItem('data1',JSON.stringify(dataarr))


})

}

encryption()

//--------------------------------------------------------------------------------------------------------------------------------



function decryption(){
    document.querySelector("#decrypt-btn").addEventListener("click",function(){
       var clutter2 = ""
        //getting the input 
      var input2 = document.querySelector("#emojimsg").value

      //getting the given password

      var pass2 = document.querySelector("#finalpassword").value
      

      var user = JSON.parse(localStorage.getItem('data1'))
    //   console.log(user)
       
     var str2 = input2.split(" ")
     str2.forEach(element=>{
        clutter2 += `&#${(element.codePointAt(0))} `

     });
     

     var found;
     for(let i of user){
        if(i.clutter==clutter2){
            found = i
            console.log(i)
        }

     }

     if(found.clutter === clutter2){
        document.querySelector("#result").style.display ="block"
        document.querySelector("#result").style.color ="#eee"
        document.querySelector("#result").innerHTML =found.input
        
     }else{
        document.querySelector("#result").style.display ="block"
        document.querySelector("#result").style.color =`red`
        document.querySelector("#result").innerHTML = "wrong password"
     }

    })

}


decryption()








//--------------------------------------------------------------------------------------------------------------------------------


function btnClicking(){


    document.querySelector("#decrypt").addEventListener("click",function(){
        document.querySelector("#decryption").style.display = "block"
        document.querySelector("#encryption").style.display = "none"
        document.querySelector("#decrypt").style.backgroundColor = "#333"
        document.querySelector("#encrypt").style.backgroundColor = "#1C1C1C"
        document.querySelector("#main >h1 span img").style.rotate = "180deg"
        document.querySelector("#enresult").style.display = "none"
        document.querySelector("#result").style.display = "none"
        
    })
    document.querySelector("#encrypt").addEventListener("click",function(){
        document.querySelector("#decryption").style.display = "none"
        document.querySelector("#encryption").style.display = "block"
        document.querySelector("#encrypt").style.backgroundColor = "#333"
        document.querySelector("#decrypt").style.backgroundColor = "#1C1C1C"
        document.querySelector("#main >h1 span img").style.rotate = "360deg"
        document.querySelector("#result").style.display = "none"

    })

    document.querySelector("#incrypt-btn").addEventListener("click",function(){
        document.querySelector("#enresult").style.display = "block"
    })
     document.querySelector("#decrypt-btn").addEventListener("click",function(){
        document.querySelector("#result").style.display = "block"
    })
}

btnClicking()

//--------------------------------------------------------------------------------------------------------------------------------
