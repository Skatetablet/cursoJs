window.addEventListener("scroll", () => {
    

    const premium = document.querySelector(".premium");
    const ubicacion = premium.getBoundingClientRect();

    if (ubicacion.top < 100) {
        console.log("El elemento esta visible");

    } else {
        console.log("Aun no, scrollea más");
    }
    
});