let colors = [ '#58D68D', '#76448A', '#CD5C5C', '#154360 ', '#1C2833', 'black', '#99FF00', '#33FF6E', '#FF9333', '#7D6608', '#641E16', '#330033', '#660033', '#FF0000',  '#999900', '#CCFF00 ', '#330000', '#FF9900', '#009900', '#666600', '#330099 ', '#CC9933', '#CC66CC ', '#FF00CC'];



//change the background of canvas when button is clicked
let button = document.getElementById('button');

button.addEventListener('click', function(){
    //select a random number between 0 - 6
    let index = parseInt((Math.random()*colors.length)+1);
    //grab the canvas
    let canvas = document.getElementById('canvas');

    canvas.style.background = `${colors[index]}`
})