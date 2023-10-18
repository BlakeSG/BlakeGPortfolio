//Left drop down menu on nav bar
function toggleContent(){
    var content = document.getElementById("content");
    if (content.style.display === "none"){
        content.style.display = "block";
    }else{
        content.style.display = "none";
    }
    }


    function toggleMenu() {
        const leftMenu = document.getElementById('leftMenu');
        leftMenu.classList.toggle('active');
    }

    
//Functional comments section using Stored name
//TODO improve







//light dark mode
//variables
document.addEventListener("DOMContentLoaded", function() {
    const Light_Mode = document.getElementById("Lightmode");
    const Dark_Mode = document.getElementById("Darkmode");
    const elementToChange = document.getElementById("elementToChange");
    const elementToChange2 = document.getElementById("elementToChange2");
    const elementToChange3 = document.getElementById("elementToChange3");
    const elementToChange4 = document.getElementById("elementToChange4");
    const hr1ToChange = document.getElementById("hr1ToChange");
    const hr2ToChange = document.getElementById("hr2ToChange");
    const hr3ToChange = document.getElementById("hr3ToChange");
    const commentsToChange = document.getElementById("commentzToChange");

    // Function to set the selected mode to local storage
    function setModeToLocalStorage(mode) {
        localStorage.setItem("selectedMode", mode);
    }

    // Function to apply the selected mode
    function applySelectedMode() {
        const selectedMode = localStorage.getItem("selectedMode");

        if (selectedMode === "Lightmode") { //if selected mode === light mode then remove all "DarkMode classes from the selected variables and add Light mode classes"
            elementToChange.classList.remove("Darkmode");
            elementToChange.classList.add("Lightmode");
            elementToChange2.classList.remove("Darkmode");
            elementToChange2.classList.add("Lightmode");
            elementToChange3.classList.remove("Darkmode");
            elementToChange3.classList.add("Lightmode");
            elementToChange4.classList.remove("Darkmode");
            elementToChange4.classList.add("Lightmode");
            hr1ToChange.classList.remove("Darkmodehr");
            hr1ToChange.classList.add("Lightmodehr");
            hr2ToChange.classList.remove("Darkmodehr");
            hr2ToChange.classList.add("Lightmodehr");
            hr3ToChange.classList.remove("Darkmodehr");
            hr3ToChange.classList.add("Lightmodehr");
            commentsToChange.classList.remove("Darkcommentz");
            commentsToChange.classList.add("Lightcommentz");
        } else if (selectedMode === "Darkmode") {
            elementToChange.classList.remove("Lightmode");
            elementToChange.classList.add("Darkmode");
            elementToChange2.classList.remove("Lightmode");
            elementToChange2.classList.add("Darkmode");
            elementToChange3.classList.remove("Lightmode");
            elementToChange3.classList.add("Darkmode");
            elementToChange4.classList.remove("Lightmode");
            elementToChange4.classList.add("Darkmode");
            hr1ToChange.classList.remove("Lightmodehr");
            hr1ToChange.classList.add("Darkmodehr");
            hr2ToChange.classList.remove("Lightmodehr");
            hr2ToChange.classList.add("Darkmodehr");
            hr3ToChange.classList.remove("Lightmodehr");
            hr3ToChange.classList.add("Darkmodehr");
            commentsToChange.classList.remove("Lightcommentz");
            commentsToChange.classList.add("Darkcommentz");
        }
    }

    // Apply the selected mode when the page loads
    applySelectedMode();

    Light_Mode.addEventListener("change", function() {
        console.log("Light Mode clicked");
        setModeToLocalStorage("Lightmode");
        applySelectedMode(); // Apply mode after user selection
    });

    Dark_Mode.addEventListener("change", function() {
        console.log("Dark Mode clicked");
        setModeToLocalStorage("Darkmode");
        applySelectedMode(); // Apply mode after user selection
    });
});














