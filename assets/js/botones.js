const linkItem=document.getElementsByClassName("item")
const about=document.getElementById("secction-about")
const home=document.getElementById("seccion-home")

for(let i=0;i<linkItem.length;i++){
    const elements=linkItem[i];
    elements.addEventListener("click",function(){
        console.log(elements.attributes);
        console.log(elements.id);

        
    if(elements.id==="lhome"){
        home.classList.remove("displayNone");
        home.classList.add("active");
        about.classList.remove("active");
        about.classList.add("displayNone");
        
    }else if (elements.id==="labout"){
       
        about.classList.remove("displayNone");
        home.classList.remove("active");
        home.classList.add("displayNone");
        about.classList.add("active");

    }
        
    })
}

// function cambSeccion(){
// alert("funcioa :D")
// }

// // document.addEventListener("click",)
// cambioSeccion.onclick=cambSeccion;