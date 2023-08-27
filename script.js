// vælge alle prikker
const prikker = document.querySelectorAll("section div");

// gøre dem klikbare
prikker.forEach((prik) => prik.addEventListener("click", skiftFarve));

// lave en funktion der skifter farve på den prik der klikkes på
function skiftFarve(){
    //console.log(this);
    //this.style.backgroundColor="blue";
    this.classList.toggle("blue");
}