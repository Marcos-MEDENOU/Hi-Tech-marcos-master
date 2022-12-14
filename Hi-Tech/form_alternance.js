
let connexionAccess = document.querySelector("#openModal form fieldset:nth-child(2) a")
let linkConnexionToModal = document.querySelector("body>a[href='#openModal']")
let linkConnexionToModal2 = document.querySelector("a[href='#openModal2']")
let div1=document.getElementById("openModal")
let div2=document.getElementById("openModal2")
let modalDialog2=document.querySelector("modalDialog2")
let close=document.querySelector("#close2")
console.log(linkConnexionToModal);
console.log(connexionAccess);
console.log(div1);
console.log(linkConnexionToModal2);
console.log(div2);
console.log(close);
connexionAccess.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("coco");
    if (linkConnexionToModal.getAttribute("href") == "#openModal")
    {
        console.log("uisgf");
        linkConnexionToModal.setAttribute("href", "#openModal2");
        div1.style.display="none";
        div2.style.display="block";
        div2.style.opacity=1;
    };

});

// close.addEventListener("click", function(e){
//     e.preventDefault(); 
//     if(div1.style.display="block"){
//         console.log("hghg");
//         div1.style.display="none";
//     }else if(div2.style.display="block")
//     {
//         console.log("hghg");
//         div2.style.display="none";
//     }
// })
