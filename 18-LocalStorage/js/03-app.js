localStorage.removeItem("ricardo");


//Actualizar registro
const mesesArray = JSON.parse(localStorage.getItem("meses"));
console.log(mesesArray);
mesesArray.push("abril");
console.log(mesesArray);
localStorage.setItem("meses", JSON.stringify(mesesArray));

localStorage.clear();