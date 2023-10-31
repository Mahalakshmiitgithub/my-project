let MenuBtn = document.querySelector("#MenuBtn");
let Navber = document.querySelector("header .navbar");


window.onscroll = () => {             
    Navber.classList.remove("active");
    MenuBtn.classList.remove("fa-times");
};


MenuBtn.onclick =() => {
    MenuBtn.classList.toggle("fa-times");
    Navbar.classList.toggle("active");
};


   
// Theme Toggle
let ThemeToggle = document.querySelector(".themeToggle");
let toggleBtn = document.querySelector(".toggleBtn");

toggleBtn.onclick =() => {
    themeBtn.classList.toggle("active");
   
};

//Main togic
document.querySelectorAll(".themeToggle .theme-btn").forEach((btn)=>
 {
    btn.onclick = () => {
        let color = btn.style.background;
        document.querySelector(":root").style.setProperty("--main",
        color);
    };
});
