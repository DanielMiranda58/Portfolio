const linkItem=document.getElementsByClassName("item")
const about=document.getElementById("secction-about")
const home=document.getElementById("seccion-home")
<<<<<<< HEAD
const portfolio=document.getElementById("secction-portfolio")
=======
>>>>>>> 4af976817f7d288dd7d2931b3719f6b94cbc238d

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
<<<<<<< HEAD
        portfolio.classList.remove("displayNone")
        portfolio.classList.add("displayNone");
=======
>>>>>>> 4af976817f7d288dd7d2931b3719f6b94cbc238d
        
    }else if (elements.id==="labout"){
       
        about.classList.remove("displayNone");
        home.classList.remove("active");
        home.classList.add("displayNone");
        about.classList.add("active");
<<<<<<< HEAD
        portfolio.classList.remove("active");
        portfolio.classList.add("displayNone");

    }else if (elements.id==="lportfolio"){

        portfolio.classList.add("active");
        portfolio.classList.remove("displayNone");
        about.classList.add("displayNone");
        about.classList.remove("active")
        home.classList.remove("active");
        home.classList.add("displayNone");
        
    }

=======

    }
>>>>>>> 4af976817f7d288dd7d2931b3719f6b94cbc238d
        
    })
}

// function cambSeccion(){
// alert("funcioa :D")
// }

// // document.addEventListener("click",)
// cambioSeccion.onclick=cambSeccion;