//Light dark mode script Same as other pages but with less variables
document.addEventListener("DOMContentLoaded", function() {
    const Light_Mode = document.getElementById("Lightmode");
    const Dark_Mode = document.getElementById("Darkmode");
    const elementToChange = document.getElementById("elementToChange");
   

   
    function setModeToLocalStorage(mode) {
        localStorage.setItem("selectedMode", mode);
    }

    
    function applySelectedMode() {
        const selectedMode = localStorage.getItem("selectedMode");

        if (selectedMode === "Lightmode") {
            elementToChange.classList.remove("Darkmode");
            elementToChange.classList.add("Lightmode");
          
        } else if (selectedMode === "Darkmode") {
            elementToChange.classList.remove("Lightmode");
            elementToChange.classList.add("Darkmode");
         
        }
    }

    
    applySelectedMode();

    Light_Mode.addEventListener("change", function() {
        console.log("Light Mode clicked");
        setModeToLocalStorage("Lightmode");
        applySelectedMode();
    });

    Dark_Mode.addEventListener("change", function() {
        console.log("Dark Mode clicked");
        setModeToLocalStorage("Darkmode");
        applySelectedMode(); 
    });
});
