const centimeter = document.querySelector("#cm"),
inch = document.querySelector("#in");

window.addEventListener("load", () => centimeter.focus());

centimeter.addEventListener("input", ()=>{
    inch.value = (centimeter.value * 0.3937).toFixed(4);
    if (!centimeter.value) inch.value = "";
})

inch.addEventListener("input", ()=> {
    centimeter.value = (inch.value * 2.54).toFixed(2);
    if (!inch.value) centimeter.value = "";
})

const centimeter2 = document.querySelector("#cm2"),
Millimetre = document.querySelector("#mm");

window.addEventListener("load", () => centimeter2.focus());

centimeter2.addEventListener("input", ()=>{
    Millimetre.value = (centimeter2.value * 10).toFixed(2);
    if (!centimeter2.value) Millimetre.value = "";
})

Millimetre.addEventListener("input", ()=> {
    centimeter2.value = (Millimetre.value * 0.1).toFixed(2);
    if (!Millimetre.value) centimeter2.value = "";
})