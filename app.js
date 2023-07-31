const buttonDisplay= document.getElementById("btn-display");
const buttonHide= document.getElementById("btn-hide");
const toysList= document.getElementById("toys-list");

function displayToyslist(){
    console.log("display");
    toysList.style.display='block'
}

function hideToysList(){
    console.log("hide");
    toysList.style.display='none'

}
buttonDisplay.addEventListener("click",displayToyslist);
buttonHide.addEventListener("click",hideToysList);

