/*const home = document.getElementById("home-tab");
const home1 = document.getElementById("home");

const profile = document.getElementById("profile-tab");
const profile1 = document.getElementById("profile");

const contact = document.getElementById("contact-tab");
const contact1 = document.getElementById("contact");


document.addEventListener("click", ((e) => {
    if(e.target.matches("#home-tab")) {
        home.classList.add("active");
        home1.classList.add("show");
        home1.classList.add("active");
    }
}
))

document.addEventListener("click", ((e) => {
    if(e.target.matches("#profile-tab")) {
        profile.classList.add("active");
        profile1.classList.add("show");
        profile1.classList.add("active");
    }
}
))
*/

const menu = document.querySelectorAll("a");
const home = document.getElementById("myTabContent").querySelectorAll("div");

const home1 = document.getElementById("home");
const profile1 = document.getElementById("profile");
const contact1 = document.getElementById("contact");



//itera sobre las A, al recibir el click itera de vuelta y borra sus actives y lo agrega en la que tiene click
menu.forEach(element => {
    element.addEventListener("click", function() {
        menu.forEach((el) => el.classList.remove("active"))
        home.forEach((el) => el.classList.remove("show", "active"))

        this.classList.add("active");
        if(this.href.includes("home")) {
            home1.classList.add("show","active")
        } else if(this.href.includes("profile")) {
            profile1.classList.add("show","active")
        } else if(this.href.includes("contact")) {
            contact1.classList.add("show","active")
        }

        
        
    })
});

//Cº a Fº

let numCtoF = document.getElementById("CtoF");
let resultado = document.getElementById("resultado");

numCtoF.addEventListener("keyup", function () {
    let result = (numCtoF.value * 9/5) + 32;
    resultado.value = result;
})

//Cº a Kº

let numCtoK = document.getElementById("CtoK");
let resultado1 = document.getElementById("resultado1");

numCtoK.addEventListener("keyup", function () {
    let result = Number(numCtoK.value) + 273.15;
    resultado1.value = result;
})

//Fº a Cº

let numFtoC = document.getElementById("FtoC")
let resultadoF = document.getElementById("resultadoF");

numFtoC.addEventListener("keyup", function () {
    let result = Number((numFtoC.value - 32) * 5/9); 
    resultadoF.value = result;
})

//Fº a Kº

let numFtoK = document.getElementById("FtoK");
let resultadoF1 = document.getElementById("resultadoF1");

numFtoK.addEventListener("keyup", function () {
    let result = Number((numFtoK.value - 32) * 5/9 + 273.15);
    resultadoF1.value = result;

})

//Kº a Cº
let numKtoC = document.getElementById("KtoC");
let resultadoK = document.getElementById("resultadoK");

numKtoC.addEventListener("keyup", function(){
    let result = Number(numKtoC.value - 273.15);
    resultadoK.value = result;
})

//Kº a Fº
let numKtoF = document.getElementById("KtoF");
let resultadoK1 = document.getElementById("resultadoK1");

numKtoF.addEventListener("keyup", function(){
    let result = Number((numKtoF.value - 273.15) * 9/5 + 32);
    resultadoK1.value = result;
})
