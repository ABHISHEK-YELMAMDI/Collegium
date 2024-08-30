const Nestednavigationcontainer = document.getElementById("nested-navigation-container_id")
let tutorialE1 = document.getElementById("tutorial-btn")
const nestedNavigationclosebtn = document.getElementById("nested-navigation-close-btn")

tutorialE1.addEventListener("click",toggletutorial)
nestedNavigationclosebtn.addEventListener("click",toggletutorial)

function toggletutorial(){
    tutorialE1.classList.toggle("Nested-navigation-container")
    tutorialE1.classList.toggle("test-white")
    Nestednavigationcontainer.classList.toggle("nested_navigation_hidden")

}