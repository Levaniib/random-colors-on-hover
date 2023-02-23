let main = document.querySelector(".main")
let smalldivs = document.querySelector(".smalldivs")
let allchar="0123456789ABCDEF";

// function myFun(){
//     let  randcol= "";
//   for(let i=0; i<6; i++){
//      randcol += allchar[Math.floor(Math.random()*16)];
//   }
// }

for(i = 0; i < 289; i++){
    let smalldivs = document.createElement("div")
    main.appendChild(smalldivs)
    smalldivs.classList.add("smalldivs")
    let  randcol= "";
    for(let i=0; i<6; i++){
       randcol += allchar[Math.floor(Math.random()*16)];
    }
    smalldivs.addEventListener("mouseover", function(){
        smalldivs.style.backgroundColor = "#" + randcol
        smalldivs.style.transition = "none"
    })

    smalldivs.addEventListener("mouseleave",function(){
        smalldivs.style.backgroundColor = "black"
        smalldivs.style.transition = "2s"
    })
}

