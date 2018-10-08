let numberOfSquares= 6;
let colors= [];
let pickedColor;
let square= document.querySelectorAll(".square");
let colorDisplay= document.getElementById("colorDisplay");
let messageDispaly= document.querySelector('#message');
let h1= document.  querySelector("h1");
let resetButton= document.querySelector("#reset");
let modeBtn= document.querySelectorAll(".mode");


init();

function init(){
 setupModeButtons();
 setupSquares();
 reset();
}

function setupSquares(){
    for (i=0; i<square.length; i++){
    //add event listener
    square[i].addEventListener("click", function(){
        //grab color of clicked square
        let clickedColor= this.style.backgroundColor;
        //compare color to pickedColor
        if (clickedColor=== pickedColor){
            messageDispaly.textContent= "Correct";
            resetButton.textContent= "play again";
            changeColors(clickedColor);
            h1.style.backgroundColor=clickedColor;
        }
        else{
            this.style.backgroundColor="#232323";
            messageDispaly.textContent= "Try again"
        }
    });
}
}
function setupModeButtons(){
     //mode button event listener
     for (i=0; i< modeBtn.length; i++){
        modeBtn[i].addEventListener("click",function(){
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent==="Easy"){
                numberOfSquares=3;
            }else{
                numberOfSquares=6;
            }
            reset();
        //figure out how many squares to show
        //pick new color/
        // pick a new pickedColor
        //update page to reflect changes
    })
    }
}



function reset(){
    //generate all new colors
    colors =generateRandomColors(numberOfSquares);
    //pick a new random color from array
    pickedColor=pickColor();
    //chnage color display to match picked color
    colorDisplay.textContent= pickedColor;
    resetButton.textContent= "New colors";
    messageDispaly.textContent= "";
    // change colors of squares
    for (i=0; i<square.length; i++ ) {
        if (colors[i]){
            square[i].style.display="block";
            square[i].style.backgroundColor= colors[i];
        }
        else{
            square[i].style.display="none";
        }
    }
    h1.style.backgroundColor="steelblue";
}
// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numberOfSquares=3;
//     colors=generateRandomColors(numberOfSquares);
//     pickedColor=pickColor();
//     colorDisplay.textContent= pickedColor;

//     for (i=0; i< square.length;i++){
//         if (colors[i]) {
//             square[i].style.backgroundColor=colors[i];
//         }else{
//             square[i].style.display="none";
//         }
//     }

// });
// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numberOfSquares=6;
//     colors=generateRandomColors(numberOfSquares);
//     pickedColor=pickColor();
//     colorDisplay.textContent= pickedColor;

//     for (i=0; i< square.length;i++){
//             square[i].style.backgroundColor=colors[i];
//             square[i].style.display="block";
//     }

// });

resetButton.addEventListener("click", function(){
    reset();
})


function changeColors(color){
    //loop through all square
    for(i=0; i<square.length; i++){
        //change each color to match the given color
        square[i].style.backgroundColor=color;
    }
}

function pickColor(){
    let random= Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    let arr=[];
    //add num random colors to array
    for(i=0; i<num; i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that aray
    return arr;
}

function randomColor(){
    //pick a red to 0 to 255
    let r= Math.floor(Math.random()* 256);
    //pick a green to 0 to 255
    let g= Math.floor(Math.random()* 256);
    //pick a blue to 0 to 255
    let b= Math.floor(Math.random()* 256);
    return "rgb(" + r +", " +g + ", "+ b + ")";

}