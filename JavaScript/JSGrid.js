//7 functions for the rules change grid
function MergeCell1() {
    document.getElementById("grid-item-1").remove();
    document.getElementById("grid-container").style.gridTemplateColumns="150px 150px 150px 150px";
    document.body.style.background=getRandomColor();
    document.getElementById("grid-container").style.background=getRandomColor();
    document.getElementById("grid-container").style.backgroundImage="url(Images/laav.jpg)" ;
    document.getElementById("grid-container").style.backgroundRepeat="no-repeat";
    document.getElementById("grid-container").style.backgroundSize="cover";
}
function MergeCell2() {
    document.getElementById("grid-item-2").remove();
    document.getElementById("grid-container").style.gridTemplateColumns="150px 150px";
    document.body.style.background=getRandomColor();
    document.getElementById("grid-container").style.background=getRandomColor();
    document.getElementById("grid-container").style.backgroundImage="url(Images/canon.jpg)" ;
    document.getElementById("grid-container").style.backgroundRepeat="no-repeat";
    document.getElementById("grid-container").style.backgroundSize="cover";
}
function MergeCell3() {
    document.getElementById("grid-item-3").remove();
    document.getElementById("grid-container").style.gridTemplateColumns="150px 150px 150px 150px";
    document.body.style.background=getRandomColor();
    document.getElementById("grid-container").style.background=getRandomColor();
    document.getElementById("grid-container").style.backgroundImage="url(Images/laav.jpg)" ;
    document.getElementById("grid-container").style.backgroundRepeat="no-repeat";
    document.getElementById("grid-container").style.backgroundSize="cover";
}
function MergeCell4() {
    document.getElementById("grid-item-4").remove();
    document.getElementById("grid-container").style.gridTemplateColumns="150px 150px";
    document.body.style.background=getRandomColor();
    document.getElementById("grid-container").style.background=getRandomColor();
    document.getElementById("grid-container").style.backgroundImage="url(Images/canon.jpg)" ;
    document.getElementById("grid-container").style.backgroundRepeat="no-repeat";
    document.getElementById("grid-container").style.backgroundSize="cover";
}
function MergeCell5() {
    document.getElementById("grid-item-5").remove();
    document.getElementById("grid-container").style.gridTemplateColumns="150px 150px 150px 150px";
    document.body.style.background=getRandomColor();
    document.getElementById("grid-container").style.background=getRandomColor();
    document.getElementById("grid-container").style.backgroundImage="url(Images/laav.jpg)" ;
    document.getElementById("grid-container").style.backgroundRepeat="no-repeat";
    document.getElementById("grid-container").style.backgroundSize="cover";
}
function MergeCell6() {
    document.getElementById("grid-item-6").remove();
    document.getElementById("grid-container").style.gridTemplateColumns="150px 150px";
    document.body.style.background=getRandomColor();
    document.getElementById("grid-container").style.background=getRandomColor();
    document.getElementById("grid-container").style.backgroundImage="url(Images/canon.jpg)" ;
    document.getElementById("grid-container").style.backgroundRepeat="no-repeat";
    document.getElementById("grid-container").style.backgroundSize="cover";
}
function MergeCell7() {
    document.getElementById("grid-item-7").remove();
    document.getElementById("grid-container").style.gridTemplateColumns="150px 150px 150px 150px";
    document.body.style.background=getRandomColor();
    document.getElementById("grid-container").style.background=getRandomColor();
    document.getElementById("grid-container").style.backgroundImage="url(Images/laav.jpg)" ;
    document.getElementById("grid-container").style.backgroundRepeat="no-repeat";
    document.getElementById("grid-container").style.backgroundSize="cover";
}

//function for random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (  var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}      
