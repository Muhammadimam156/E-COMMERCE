const warpper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem") ;

menuItems.forEach((item,index) => {
    item.addEventListener("click" , () =>{
        warpper.style.transform =`translatex(${-110* index}vw)`;
    })
})