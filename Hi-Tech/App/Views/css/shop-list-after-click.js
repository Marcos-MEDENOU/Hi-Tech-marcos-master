
//This program is responsible for making the shelves appear after a click on the store
let elem_at_click = document.querySelectorAll('.shop-title')
let appearElem=document.querySelectorAll(".scroll_menu_shop")
function appear_after_click(clickElem, appearElem) {
    clickElem.forEach(function(element,index) {
        element.addEventListener("click", function (e) {
            e.preventDefault();
            if (appearElem[index].style.display == "none") {
                appearElem[index].style.display = "block";
            } else {
                appearElem[index].style.display = "none"; 
            }
        })
    });
}
appear_after_click(elem_at_click, appearElem)
console.log("marcos")